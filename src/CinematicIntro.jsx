import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './cinematic-intro.css';

export default function CinematicIntro({ motion, onMenuChange, onComplete }) {
  const section = useRef(null), video = useRef(null), toggle = useRef(null), dialog = useRef(null);
  const [mounted, setMounted] = useState(false), [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false), [active, setActive] = useState(true);
  const [playing, setPlaying] = useState(motion);
  const [finished, setFinished] = useState(false);
  const finish = () => {
    setPlaying(false); setFinished(true);
    if (active && !open && motion) onComplete();
  };
  const togglePlayback = () => {
    if (finished) { video.current.currentTime = 0; setFinished(false); }
    setPlaying(!playing);
  };
  useEffect(() => { const timer = setTimeout(() => setMounted(true), 100); return () => clearTimeout(timer); }, []);
  useEffect(() => {
    const update = () => { setScrolled(window.scrollY > 40); setActive(section.current.getBoundingClientRect().bottom > 80); };
    update(); window.addEventListener('scroll', update, { passive:true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => { setPlaying(motion); }, [motion]);
  useEffect(() => {
    const el = video.current;
    if (playing && active && !open) el.play().catch(() => setPlaying(false)); else el.pause();
  }, [playing, active, open]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden'; onMenuChange(true);
    dialog.current.querySelector('a').focus();
    const key = (event) => {
      if (event.key === 'Escape') setOpen(false);
      if (event.key === 'Tab') {
        const items = [toggle.current, ...dialog.current.querySelectorAll('a')];
        const index = items.indexOf(document.activeElement);
        event.preventDefault(); items[(index + (event.shiftKey ? -1 : 1) + items.length) % items.length].focus();
      }
    };
    document.addEventListener('keydown', key);
    return () => { document.body.style.overflow = previous; onMenuChange(false); document.removeEventListener('keydown', key); toggle.current?.focus(); };
  }, [open, onMenuChange]);
  return <section ref={section} className={`cinema-intro ${mounted ? 'is-mounted' : ''} ${!motion ? 'motion-reduced' : ''}`} aria-labelledby="intro-title">
    <div className="cinema-film"><video ref={video} src="/assets/video/legalmatterops-intro.mp4" autoPlay={motion} muted onEnded={finish} playsInline preload="auto" aria-hidden="true" /></div>
    <div className={`cinema-nav ${scrolled ? 'is-scrolled' : ''} ${!active && !open ? 'is-away' : ''}`}>
      <div className="cinema-nav-inner">
        <Link className="cinema-brand" to="/" aria-label="LegalMatterOps home"><img src="/assets/brand/logo-horizontal-ivory.svg" alt="LegalMatterOps" /></Link>
        <button ref={toggle} className={`cinema-toggle ${open ? 'is-open' : ''}`} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="cinema-menu" onClick={() => setOpen(!open)}><span className="cinema-toggle-label">{open ? 'Close' : 'Navigate'}</span><span className="cinema-bars" aria-hidden="true"><i/><i/></span></button>
        <img className="cinema-nav-mark" src="/assets/brand/monogram-ivory.svg" alt="" />
      </div>
    </div>
    <div ref={dialog} id="cinema-menu" className={`cinema-menu ${open ? 'is-open' : ''}`} role="dialog" aria-modal={open ? 'true' : undefined} aria-label="Site navigation" aria-hidden={!open} inert={!open ? true : undefined}>
      <nav aria-label="Intro navigation">{[['Home','/'],['Our approach','/company'],['The proposed suite','/products'],['Discuss an audit','/request-audit']].map(([label,to],i)=><Link key={label} to={to} style={{'--link-delay':`${150+i*80}ms`}} onClick={()=>setOpen(false)}>{label}</Link>)}</nav>
    </div>
    <div className="cinema-copy">
      <h1 id="intro-title">Every detail considered.<br/> Every handoff in view.</h1>
      <p>A supervised approach to matter readiness.<br/>Explore the LegalMatterOps concept.</p>
      <Link className="cinema-cta" to="/request-audit">Discuss a scoped audit</Link>
    </div>
    <button className="cinema-playback" onClick={togglePlayback} aria-label={playing ? 'Pause intro video' : 'Play intro video'}>{playing ? 'Pause film' : finished ? 'Replay film' : 'Play film'}</button>
  </section>;
}
