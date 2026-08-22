import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight, MapPin, Menu, Phone, Star, X} from 'lucide-react';
import './styles.css';

const phone = '08296933728';
const tel = `tel:${phone}`;
const maps = 'https://www.google.com/maps/search/?api=1&query=Samashraya+Constructions+Shirva+Udupi';
const review = {name:'Ganapathi Diwan', rating:5, date:'24 Apr 2026', text:'Excellent service from Samashraya Constructions! They are highly professional, cost-efficient, and incredibly flexible. Their calm approach to project management and genuine understanding of client needs set them apart. Highly recommended.'};

const gallery = [
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85'
];

function App(){
  const [menu,setMenu]=useState(false); const [scrolled,setScrolled]=useState(false); const [reviewOpen,setReviewOpen]=useState(false);
  useEffect(()=>{const f=()=>setScrolled(scrollY>24); addEventListener('scroll',f); return()=>removeEventListener('scroll',f)},[]);
  const go=(id:string)=>{setMenu(false);document.getElementById(id)?.scrollIntoView({behavior:'smooth'})};
  return <div className="site">
    <header className={`nav ${scrolled?'nav-scrolled':''}`}><div className="nav-inner">
      <button className="brand" onClick={()=>go('home')}><span className="brand-mark">S</span><span>Samashraya<br/><b>Constructions</b></span></button>
      <nav className={menu?'mobile-open':''}>{[['home','Home'],['about','About'],['services','Services'],['reviews','Reviews'],['contact','Contact']].map(([id,label])=><button key={id} onClick={()=>go(id)}>{label}</button>)}<a className="nav-cta" href={tel}>Get in touch <ArrowUpRight size={16}/></a></nav>
      <button className="menu" onClick={()=>setMenu(!menu)} aria-label="Menu">{menu?<X/>:<Menu/>}</button>
    </div></header>

    <main>
      <section id="home" className="hero">
        <img src={gallery[0]} alt="Modern Indian home architecture"/>
        <div className="hero-shade"/><div className="hero-content wrap">
          <div className="eyebrow">SAMASHRAYA CONSTRUCTIONS <span/></div>
          <h1>Building spaces<br/><em>with care.</em></h1>
          <p>Building services in Shirva, Udupi.</p>
          <div className="hero-actions"><a className="button primary" href={tel}><Phone size={17}/> Get in touch</a><button className="button ghost" onClick={()=>go('about')}>Explore <ChevronDown size={17}/></button></div>
        </div><div className="scroll-cue">Scroll to explore <span/></div>
      </section>

      <section className="trust"><div className="trust-inner wrap">
        <div><strong>5.0</strong><span><Star size={15} fill="currentColor"/> Google rating</span></div>
        <div><strong>15</strong><span>Reviews</span></div>
        <div><strong>Shirva</strong><span>Udupi, Karnataka</span></div>
        <div><strong>Building</strong><span>Business category</span></div>
      </div></section>

      <section id="about" className="section wrap about"><div className="image-frame"><img src={gallery[1]} alt="Contemporary Indian residential architecture"/><span className="image-note">SHIRVA · UDUPI</span></div><div className="copy"><div className="eyebrow dark">ABOUT SAMASHRAYA CONSTRUCTIONS</div><h2>A construction presence<br/><em>close to home.</em></h2><p>Samashraya Constructions is a building business located in Shirva, Udupi, Karnataka.</p><div className="location"><MapPin size={18}/><span>Shirva · Udupi · Karnataka</span></div></div></section>

      <section id="services" className="section services"><div className="wrap"><div className="eyebrow dark">WHAT THEY DO</div><div className="section-head"><h2>Building,<br/><em>simply and clearly.</em></h2><p>The Google Business Profile lists Samashraya Constructions under the <b>Building</b> category. This demo keeps the service presentation intentionally focused on that verified information.</p></div><div className="service-card"><span className="service-number">01</span><div><h3>Building</h3><p>Verified business category</p></div><ArrowUpRight/></div></div></section>

      <section className="visual-story"><img src={gallery[3]} alt="Warm contemporary Indian home"/><div className="visual-overlay"/><div className="visual-copy wrap"><div className="eyebrow">BUILT AROUND WHAT MATTERS</div><h2>Construction,<br/><em>closer to home.</em></h2><p>Samashraya Constructions · Shirva, Udupi</p></div></section>

      <section id="reviews" className="section reviews"><div className="wrap"><div className="eyebrow dark">GOOGLE REVIEWS</div><div className="review-layout"><div><h2>What customers<br/><em>say.</em></h2><div className="rating"><span>5.0</span><div><div className="stars">★★★★★</div><small>15 reviews</small></div></div></div><article className="review-card"><div className="quote-mark">“</div><div className="stars">★★★★★</div><blockquote>{review.text}</blockquote><div className="reviewer"><div className="avatar">G</div><div><b>{review.name}</b><span>{review.date}</span></div></div><a className="text-link" href="https://www.google.com/search?q=Samashraya+Constructions+Shirva+Udupi" target="_blank" rel="noreferrer">View on Google <ArrowUpRight size={15}/></a></article></div></div></section>

      <section className="gallery section"><div className="wrap"><div className="eyebrow dark">ARCHITECTURE & CONSTRUCTION</div><div className="section-head"><h2>The craft of<br/><em>building.</em></h2><p>Atmospheric architectural imagery selected to complement the visual identity of a construction business in coastal Karnataka. These images are not presented as Samashraya projects.</p></div><div className="masonry">{gallery.slice(2).map((src,i)=><div className={`g${i}`} key={src}><img src={src} alt="Indian residential architecture"/></div>)}</div></div></section>

      <section id="contact" className="contact"><div className="wrap contact-grid"><div><div className="eyebrow">CONTACT</div><h2>Let's talk about<br/><em>your next build.</em></h2><p>Connect with Samashraya Constructions in Shirva, Udupi.</p><a className="button light" href={tel}><Phone size={17}/> Call Samashraya</a></div><div className="contact-card"><div className="contact-row"><MapPin/><div><small>LOCATION</small><b>Shirva, Udupi, Karnataka</b></div></div><div className="contact-row"><Phone/><div><small>PHONE</small><a href={tel}><b>{phone}</b></a></div></div><div className="contact-row"><Star/><div><small>GOOGLE RATING</small><b>5.0 · 15 reviews</b></div></div><a className="directions" href={maps} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={16}/></a></div></div></section>

      <section className="final"><img src={gallery[4]} alt="Modern Indian home"/><div className="hero-shade"/><div className="final-content wrap"><div className="eyebrow">SAMASHRAYA CONSTRUCTIONS</div><h2>Ready to <em>build?</em></h2><a className="button light" href={tel}>Get in touch <ArrowUpRight size={16}/></a></div></section>
    </main>
    <footer><div className="wrap footer-inner"><div className="brand-footer"><span className="brand-mark">S</span><b>Samashraya Constructions</b></div><span>Shirva · Udupi · Karnataka</span><span>© 2026 Samashraya Constructions</span></div></footer>
  </div>
}
createRoot(document.getElementById('root')!).render(<App/>);
