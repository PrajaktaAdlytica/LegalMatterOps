from PIL import Image, ImageFilter
from pathlib import Path
import subprocess, xml.etree.ElementTree as ET, json
root=Path(__file__).resolve().parents[1]; out=root/'public/assets/brand'; tmp=root/'tmp/brand'
out.mkdir(parents=True, exist_ok=True); tmp.mkdir(parents=True, exist_ok=True)
src=Image.open(root/'public/assets/logo-options/monogram.png').convert('RGB')
ns='{http://www.w3.org/2000/svg}'
def trace(box,kind):
 im=src.crop(box); mask=Image.new('1',im.size,1); pix=mask.load()
 for y in range(im.height):
  for x in range(im.width):
   r,g,b=im.getpixel((x,y)); dark=max(r,g,b)<205
   group='pine' if max(r,g,b)<105 else ('ochre' if r>g*1.06 and g>b*1.15 else 'sage')
   if dark and (kind=='all' or kind==group):pix[x,y]=0
 path=tmp/f'{kind}-{box[1]}.pbm'; mask.save(path)
 svg=path.with_suffix('.svg')
 subprocess.run(['potrace',str(path),'-s','-o',str(svg),'-t','10','-O','0.5'],check=True)
 node=ET.parse(svg).getroot().find(ns+'g'); node.attrib.pop('fill',None)
 return ET.tostring(node,encoding='unicode').replace('ns0:','').replace(':ns0','')
mark={k:trace((520,205,1020,620),k) for k in ['pine','ochre','sage']}
word=trace((225,625,1315,810),'all')
def wrap(content,w,h,label):return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" role="img" aria-label="{label}">{content}</svg>'
colors={'color':{'pine':'#193c32','ochre':'#af8e3d','sage':'#8a967d'},'pine':dict.fromkeys(mark,'#193c32'),'ivory':dict.fromkeys(mark,'#f5f3e8'),'black':dict.fromkeys(mark,'#111111')}
for variant,palette in colors.items():
 m=''.join(f'<g fill="{palette[k]}">{v}</g>' for k,v in mark.items()); w=f'<g fill="{palette["pine"]}">{word}</g>'
 (out/f'monogram-{variant}.svg').write_text(wrap(m,500,415,'LegalMatterOps LM monogram'))
 (out/f'wordmark-{variant}.svg').write_text(wrap(w,1090,185,'LegalMatterOps'))
 (out/f'logo-horizontal-{variant}.svg').write_text(wrap(f'<g transform="translate(0 4) scale(.46)">{m}</g><g transform="translate(280 15)">{w}</g>',1370,205,'LegalMatterOps'))
 (out/f'logo-stacked-{variant}.svg').write_text(wrap(f'<g transform="translate(295 0)">{m}</g><g transform="translate(0 445)">{w}</g>',1090,630,'LegalMatterOps'))
# Solid silhouettes improve small-icon legibility, with no background texture.
m=''.join(f'<g fill="#f5f3e8">{v}</g>' for v in mark.values())
favicon=wrap(f'<rect width="512" height="512" rx="94" fill="#193c32"/><g transform="translate(51 86) scale(.82)">{m}</g>',512,512,'LegalMatterOps')
(out/'favicon.svg').write_text(favicon)
(out/'README.txt').write_text('LegalMatterOps identity set\n\nSelected LM monogram reconstructed from the supplied image using separated pigment masks and Potrace Bezier tracing. SVGs contain actual vector paths: no embedded bitmap and no font dependency. Original wordmark lettering is traced into paths.\n\nVariants: color, pine, ivory, black. Layouts: monogram, wordmark, horizontal, stacked.\nUse color/pine on white, ivory on pine. Preserve at least one-quarter of the monogram height as clear space. Favicon uses an ivory silhouette on pine for small-size contrast.\nSource: ChatGPT Image 28 Oct 2026, 16_37_23.png. Paper grain and photographic shading intentionally removed for clean scalable artwork.\n')
print('Created 17 SVG masters.')
