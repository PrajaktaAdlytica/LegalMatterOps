from pathlib import Path
import zipfile
p=Path('public/assets/brand'); cards=''
for variant in ['color','pine','ivory','black']:
 for layout in ['horizontal','stacked']:
  name=f'logo-{layout}-{variant}.svg'
  cards+=f'<article class="{variant}"><img src="/assets/brand/{name}" alt="{variant} {layout} LegalMatterOps logo"><p>{layout.title()} / {variant.title()}</p><a download href="/assets/brand/{name}">Download SVG ↗</a></article>'
html='''<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" href="/assets/brand/favicon.svg"><title>Brand kit — LegalMatterOps</title><style>@font-face{font-family:Newsreader;src:url('/assets/newsreader.woff2')}*{box-sizing:border-box}body{margin:0;background:#fff;color:#193c32;font:14px/1.6 Arial}main{max-width:1280px;margin:auto;padding:48px 24px}h1{font:64px Newsreader,serif}a{color:inherit;text-underline-offset:5px}.grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}article{padding:32px;border:1px solid #d9ddd2}article img{width:100%;height:240px;object-fit:contain}article.ivory{background:#193c32;color:#f5f3e8}.icons{display:flex;align-items:center;gap:24px;flex-wrap:wrap;margin:40px 0}.icons img{display:block;margin-bottom:15px}@media(max-width:650px){.grid{grid-template-columns:1fr}h1{font-size:48px}article img{height:180px}}</style><main><a href="/">← Website</a><h1>The LegalMatterOps identity.</h1><p>The selected LM monogram, with outlined wordmark lettering. True vector paths, transparent backgrounds, no font dependency.</p><p><a download href="/LegalMatterOps-Brand-Kit.zip">Download complete logo + favicon kit ↗</a></p><div class="grid">'''+cards+'</div><h2>Favicons & app icons</h2><div class="icons">'
for n in [16,32,48,180,192,512]:html+=f'<a download href="/assets/brand/favicon-{n}.png"><img src="/assets/brand/favicon-{n}.png" width="{min(n,96)}" height="{min(n,96)}" alt="LM icon {n}px">{n}px PNG</a>'
html+='</div><p><a download href="/assets/brand/favicon.svg">Scalable favicon SVG</a> · <a download href="/favicon.ico">ICO bundle</a></p><p>Monogram-only and wordmark-only SVGs in all four colorways are included in the ZIP, alongside transparent PNG monograms and usage notes.</p></main></html>'
Path('public/brand-kit.html').write_text(html)
with zipfile.ZipFile('public/LegalMatterOps-Brand-Kit.zip','w',zipfile.ZIP_DEFLATED) as z:
 for f in p.iterdir():z.write(f,f.name)
 z.write('public/favicon.ico','favicon.ico');z.write('public/site.webmanifest','site.webmanifest')
