// hero.jsx - Section 1: Hero with cinematic background

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg">
        <img className="hero-photo" src="assets/hero-classroom.jpg" alt="" aria-hidden="true"/>
        <div className="hero-scrim"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">A Modern Real Estate Academy</div>
            <h1>
              Your New<br/>
              Career Starts<br/>
              <span className="gold">Here.</span>
            </h1>
            <p className="hero-sub">
              Get licensed with the modern real estate academy built for the next generation of agents. Flexible online + in-person classes, real career coaching, and a community that wins together, across Arizona, California, and Nevada.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-gold" href="#states">
                <Icon.Rocket size={15}/> Get Licensed
              </a>
              <a className="btn btn-ghost" href="#states">
                <Icon.Calendar size={15}/> View Upcoming Classes
              </a>
            </div>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-row">
              <span className="k">1,200<span style={{color:'var(--gold)'}}>+</span></span>
              <span className="v">Students licensed since 2019</span>
            </div>
            <div className="hero-meta-row">
              <span className="k">60<span style={{color:'var(--gold)'}}>d</span></span>
              <span className="v">Average time from start to license</span>
            </div>
            <div className="hero-meta-row">
              <span className="k">4.9<span style={{color:'var(--gold)'}}>/5</span></span>
              <span className="v">Average student rating</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="container">
          <div className="stat"><div className="ic"><Icon.Users size={15}/></div><div><div className="num">1,200+</div>Students Licensed</div></div>
          <div className="stat"><div className="ic"><Icon.Online size={15}/></div><div><div className="num">Flexible</div>Online + In-Person</div></div>
          <div className="stat"><div className="ic"><Icon.Sparkle size={15}/></div><div><div className="num">Included</div>Career Coaching</div></div>
          <div className="stat"><div className="ic"><Icon.Map size={15}/></div><div><div className="num">3 States</div>AZ · CA · NV</div></div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
