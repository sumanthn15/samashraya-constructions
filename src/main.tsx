import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Check, MapPin, Menu, Phone, Star, X } from 'lucide-react';
import './styles.css';

const phone = '08296933728';
const tel = `tel:${phone}`;
const maps = 'https://www.google.com/maps/search/?api=1&query=Samashraya+Constructions+Shirva+Udupi';
const google = 'https://www.google.com/search?q=Samashraya+Constructions+Shirva+Udupi';

const review = {
  name: 'Ganapathi Diwan',
  rating: 5,
  date: '24 Apr 2026',
  text: 'Excellent service from Samashraya Constructions! They are highly professional, cost-efficient, and incredibly flexible. Their calm approach to project management and genuine understanding of client needs set them apart. Highly recommended.'
};

const images = {
  hero: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90',
  home: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=90',
  detail: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=90',
  interior: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=90',
  exterior: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90',
  residential: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=88',
  commercial: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=88',
  renovation: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=88',
  civil: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=88',
  structural: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=88',
  site: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=88'
};

const services = [
  { title: 'Residential Construction', text: 'Homes, villas and residential buildings.', image: images.residential },
  { title: 'Commercial Construction', text: 'Shops, offices and commercial spaces.', image: images.commercial },
  { title: 'Renovation & Remodeling', text: 'Renovation, extensions and improvements.', image: images.renovation },
  { title: 'Civil Works', text: 'Civil construction for building requirements.', image: images.civil },
  { title: 'Structural Works', text: 'Structural work for building projects.', image: images.structural },
  { title: 'Site Development', text: 'Site preparation and construction groundwork.', image: images.site }
];

function App() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site">
      <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-inner">
          <button className="brand" onClick={() => go('home')} aria-label="Samashraya Constructions home">
            <span className="brand-mark">S</span>
            <span className="brand-name"><b>Samashraya</b><small>Constructions</small></span>
          </button>
          <nav className={menu ? 'mobile-open' : ''}>
            {['home', 'about', 'services', 'reviews', 'contact'].map((id) => (
              <button key={id} onClick={() => go(id)}>{id}</button>
            ))}
            <a className="nav-cta" href={tel}><Phone size={15} /> Call now</a>
          </nav>
          <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <img src={images.hero} alt="Contemporary Indian-style residential architecture" />
          <div className="hero-shade" />
          <div className="hero-content wrap">
            <div className="hero-kicker">SAMASHRAYA CONSTRUCTIONS · SHIRVA · UDUPI</div>
            <h1><span>Samashraya</span><strong>Constructions</strong></h1>
            <p>Construction services for homes and building requirements in Shirva, Udupi.</p>
            <div className="hero-actions">
              <a className="button primary" href={tel}><Phone size={16} /> 08296933728</a>
              <button className="button ghost" onClick={() => go('services')}>View services <ArrowUpRight size={16} /></button>
            </div>
          </div>
          <div className="hero-bottom wrap"><span>Samashraya Constructions</span><span>Shirva, Udupi, Karnataka</span></div>
        </section>

        <section className="trust">
          <div className="wrap trust-inner">
            <div className="trust-rating"><strong>5.0</strong><span><Star size={14} fill="currentColor" /> Google rating</span></div>
            <div><strong>15</strong><span>Google reviews</span></div>
            <div><strong>Shirva</strong><span>Udupi, Karnataka</span></div>
            <div><strong>Building</strong><span>Business category</span></div>
          </div>
        </section>

        <section id="about" className="section about wrap">
          <div className="about-photo"><img src={images.home} alt="Modern residential home" /><div className="photo-tag">SHIRVA · UDUPI</div></div>
          <div className="about-copy">
            <div className="eyebrow">ABOUT THE BUSINESS</div>
            <h2>Samashraya<br /><em>Constructions.</em></h2>
            <p>Samashraya Constructions, Shirva, Udupi.</p>
            <p className="quiet">For building and construction enquiries, get in touch with the team.</p>
            <div className="about-meta"><MapPin size={18} /><span>Shirva, Udupi, Karnataka</span></div>
          </div>
        </section>

        <section id="services" className="services-section">
          <div className="wrap">
            <div className="eyebrow">CONSTRUCTION SERVICES</div>
            <div className="services-intro">
              <div><h2>Construction<br /><em>services.</em></h2></div>
              <p>From new homes and commercial spaces to renovation, civil and structural work, Samashraya Constructions is ready to discuss your building requirement. Choose the service that best matches your project and get in touch to take the conversation forward.</p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service" key={service.title}>
                  <div className="service-image-wrap">
                    <img className="service-image" src={service.image} alt={service.title} loading="lazy" />
                    <span className="service-arrow"><ArrowUpRight size={18} /></span>
                  </div>
                  <div className="service-body">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="statement">
          <div className="statement-image"><img src={images.exterior} alt="Modern Indian residential architecture" /></div>
          <div className="statement-copy">
            <div className="eyebrow">LOCAL CONSTRUCTION</div>
            <h2>A clear choice for<br /><em>your building needs.</em></h2>
            <p>For your next building requirement, speak directly with Samashraya Constructions.</p>
            <a className="text-button" href={tel}>Call 08296933728 <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section id="reviews" className="section reviews">
          <div className="wrap">
            <div className="eyebrow">GOOGLE REVIEWS</div>
            <div className="reviews-grid">
              <div>
                <h2>Good work<br /><em>gets noticed.</em></h2>
                <div className="score"><span>5.0</span><div><div className="stars">★★★★★</div><small>15 Google reviews</small></div></div>
                <a className="text-button" href={google} target="_blank" rel="noreferrer">See Google reviews <ArrowUpRight size={16} /></a>
              </div>
              <article className="review-card">
                <div className="review-top"><div className="stars">★★★★★</div><span>{review.date}</span></div>
                <blockquote>“{review.text}”</blockquote>
                <div className="reviewer"><div className="avatar">G</div><div><b>{review.name}</b><small>Google reviewer</small></div></div>
              </article>
            </div>
          </div>
        </section>

        <section className="gallery section">
          <div className="wrap">
            <div className="eyebrow">ARCHITECTURE & MATERIALS</div>
            <div className="gallery-head"><h2>Built with<br /><em>purpose.</em></h2><p>A well-built space begins with the right approach to construction. From the structure and materials to the finishing details, every part of a building contributes to how it looks, feels and performs over time.</p></div>
            <div className="gallery-grid">
              <img src={images.detail} alt="Residential architecture detail" />
              <img src={images.interior} alt="Modern home interior" />
              <img src={images.exterior} alt="Modern home exterior" />
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap contact-grid">
            <div className="contact-copy">
              <div className="eyebrow">GET IN TOUCH</div>
              <h2>Have a building<br /><em>requirement?</em></h2>
              <p>Talk to Samashraya Constructions in Shirva, Udupi.</p>
              <div className="contact-actions"><a className="button light" href={tel}><Phone size={16} /> Call now</a><a className="button outline-light" href={maps} target="_blank" rel="noreferrer"><MapPin size={16} /> Directions</a></div>
            </div>
            <div className="contact-card">
              <div className="contact-brand"><span className="brand-mark">S</span><div><b>Samashraya Constructions</b><small>Shirva, Udupi, Karnataka</small></div></div>
              <div className="contact-detail"><small>PHONE</small><a href={tel}>{phone}</a></div>
              <div className="contact-detail"><small>GOOGLE</small><span>5.0 · 15 reviews</span></div>
              <a className="directions" href={maps} target="_blank" rel="noreferrer">Open location in Google Maps <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <img src={images.hero} alt="Contemporary home exterior" />
          <div className="final-shade" />
          <div className="final-content wrap">
            <div className="eyebrow">SAMASHRAYA CONSTRUCTIONS · SHIRVA</div>
            <h2>Let's build<br /><em>something solid.</em></h2>
            <a className="button light" href={tel}>Call 08296933728 <ArrowUpRight size={16} /></a>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-inner">
          <div className="footer-brand"><span className="brand-mark">S</span><strong>Samashraya Constructions</strong></div>
          <span>Shirva · Udupi · Karnataka</span>
          <a href={tel}>{phone}</a>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
