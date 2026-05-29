// state-picker.jsx - "Choose Your State" section (3 cards)

const STATES = [
  {
    id: 'arizona',
    name: 'Arizona',
    code: 'AZ',
    hours: '90',
    desc: 'Get your Arizona real estate license. Online and in-person classes taught by some of the best instructors in the state.',
    href: 'Get Licensed Arizona.html',
    accent: 'oklch(0.62 0.16 30)',  // warm sunset
    photo: 'assets/state-az.jpg',
  },
  {
    id: 'california',
    name: 'California',
    code: 'CA',
    hours: '135',
    desc: 'Get your California real estate license. Self-paced online classes available statewide, built around how you live.',
    href: 'Get Licensed California.html',
    accent: 'oklch(0.65 0.13 230)', // pacific blue
    photo: 'assets/state-ca.jpg',
  },
  {
    id: 'nevada',
    name: 'Nevada',
    code: 'NV',
    hours: '120',
    desc: 'Get your Nevada real estate license. Day and night classes across three Las Vegas–area campuses, plus virtual cohorts.',
    href: 'Get Licensed Nevada.html',
    accent: 'oklch(0.7 0.13 95)',   // desert gold
    photo: 'assets/state-nv.jpg',
  },
];

function StatePicker() {
  return (
    <section id="states" className="section state-picker">
      <div className="container">
        <div className="section-head reveal" style={{textAlign:'center', margin:'0 auto 72px'}}>
          <div className="eyebrow" style={{justifyContent:'center', display:'inline-flex'}}>Choose Your State</div>
          <h2>Same Academy.<br/><span className="gold">Three Licenses.</span></h2>
          <p style={{marginLeft:'auto', marginRight:'auto'}}>
            Pick the state where you'll launch your career. Each track is built around its own state's exam, contracts, and law, taught by licensed in-state instructors.
          </p>
        </div>

        <div className="state-grid reveal">
          {STATES.map((s, i) => (
            <a className="state-card" href={s.href} key={s.id} style={{'--state-accent': s.accent}}>
              <div className="state-card-bg" aria-hidden="true"></div>
              <div className="state-card-content">
                <div className="state-card-head">
                  <span className="state-card-num">0{i+1}</span>
                  <span className="state-card-code">{s.code}</span>
                </div>

                <div className="state-card-shape" aria-hidden="true">
                  {s.photo
                    ? <img src={s.photo} alt="" className="state-card-photo"/>
                    : <div className="state-card-photo-placeholder">
                        <span>{s.name}</span>
                        <small>Photo coming soon</small>
                      </div>
                  }
                </div>

                <div className="state-card-body">
                  <div className="state-card-eyebrow">Get Licensed In</div>
                  <h3 className="state-card-name">{s.name}</h3>
                  <p className="state-card-desc">{s.desc}</p>
                </div>

                <div className="state-card-foot">
                  <div className="state-card-stat">
                    <span className="k">{s.hours}<small>hr</small></span>
                    <span className="v">Pre-Licensing Course</span>
                  </div>
                  <span className="state-card-arrow"><Icon.ArrowUR size={14}/></span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// (StateShape SVG removed - state cards now use photos.)

window.StatePicker = StatePicker;
