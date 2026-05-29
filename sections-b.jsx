// sections-b.jsx - Sections 5-8: Coaching, Learning, Community, Final CTA, Footer

// ─── SECTION 5 - COACHING ──────────────────────────────────
const COACH_CLIPS = [
  { ttl: "Mindset of a Million-Dollar Agent",     dur: "08:24" },
  { ttl: "Reading the State Exam: A Live Walk",   dur: "12:01" },
  { ttl: "Your First 90 Days at a Brokerage",     dur: "10:47" },
  { ttl: "Closing Without Being Pushy",           dur: "06:32" },
  { ttl: "Building a Personal Brand in 2026",     dur: "14:18" },
];

function CoachingSection() {
  return (
    <section id="coaching" className="section dark">
      <div className="container">
        <div className="coach-grid">
          <div className="coach-media reveal">
            <div className="photo"></div>
            <div className="coach-frame"></div>
            <div className="coach-badge">EP. 008 · NEW</div>
            <div className="coach-play">
              <div className="pl"><Icon.PlaySm size={12}/></div>
              Now Playing · Coaching Series
            </div>
          </div>

          <div className="coach-body reveal">
            <div className="eyebrow">Featured Coaching</div>
            <h2 style={{marginTop: 18}}>Learn From Real<br/><span className="gold">Industry Professionals.</span></h2>
            <p style={{color:'var(--text-dim)', fontSize:17, lineHeight:1.55, margin:'22px 0 0', maxWidth:520}}>
              The <strong style={{color:'var(--warm-white)'}}>Rick Berube Coaching Series</strong>: short-form coaching clips, exam prep strategies, mindset training, and real-world advice from active industry professionals.
            </p>

            <div className="coach-clips">
              {COACH_CLIPS.map((c, i) => (
                <div className="coach-clip" key={i}>
                  <div className="ix">EP.{String(i + 1).padStart(2, '0')}</div>
                  <div className="ttl">{c.ttl}</div>
                  <div className="dur">{c.dur}</div>
                  <div className="pl-sm"><Icon.PlaySm size={10}/></div>
                </div>
              ))}
            </div>

            <div style={{marginTop: 32, display:'flex', gap:12, flexWrap:'wrap'}}>
              <a className="btn btn-gold" href="#"><Icon.Play size={13}/> Watch Coaching Clips</a>
              <a className="btn btn-ghost" href="#">All Episodes <Icon.Arrow size={14}/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 6 - FLEXIBLE LEARNING ─────────────────────────
function LearningSection() {
  return (
    <section id="learning" className="section">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Flexible Learning Options</div>
          <h2>Learn Your Way.</h2>
          <p>Three modern learning tracks. Same curriculum, same state exam, same career outcome, built around the way you actually live.</p>
        </div>

        <div className="glass-grid reveal">
          <div className="glass">
            <div className="ic"><Icon.Online size={22}/></div>
            <h3>Online Classes</h3>
            <p>Self-paced flexibility from anywhere. Mobile-first lessons, mock exams, and progress tracking. Finish in as little as 4 weeks.</p>
            <div className="meta">
              <span>4–12 WEEKS</span>
              <span className="badge">Most Popular</span>
            </div>
          </div>
          <div className="glass">
            <div className="ic"><Icon.Virtual size={22}/></div>
            <h3>Virtual Learning</h3>
            <p>Live online instruction with real interaction. Weekly cohort sessions, instructor Q&A, and a Slack-style community channel.</p>
            <div className="meta">
              <span>8 WEEKS · COHORT</span>
              <span className="badge">Live · Tue / Thu</span>
            </div>
          </div>
          <div className="glass">
            <div className="ic"><Icon.Inperson size={22}/></div>
            <h3>In-Person Experience</h3>
            <p>Hands-on learning and networking. Las Vegas and Reno campuses, role-play sessions, brokerage tours, and a built-in alumni network.</p>
            <div className="meta">
              <span>LAS VEGAS · RENO</span>
              <span className="badge">Next: Jun 14</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 7 - COMMUNITY ─────────────────────────────────
const REELS = [
  { handle: '@maya.sells.vegas', views: '24K', hue: 18 },
  { handle: '@nv_real_estate_academy', views: '112K', hue: 42 },
  { handle: '@jordan.bhhs', views: '8.2K', hue: 200 },
  { handle: '@priyalists', views: '36K', hue: 320 },
  { handle: '@marcus.henderson', views: '51K', hue: 140 },
];

function CommunitySection() {
  return (
    <section className="section dark">
      <div className="container">
        <div className="section-head reveal" style={{display:'flex', justifyContent:'space-between', alignItems:'end', maxWidth:'none', gap:'40px', flexWrap:'wrap'}}>
          <div style={{maxWidth: 720}}>
            <div className="eyebrow">Community + Social Proof</div>
            <h2>Join the Next Generation of<br/><span className="gold">Real Estate Agents.</span></h2>
          </div>
          <div style={{display:'flex', gap:10}}>
            <a className="btn btn-ghost" href="#"><Icon.Instagram size={14}/> Instagram</a>
            <a className="btn btn-ghost" href="#"><Icon.TikTok size={14}/> TikTok</a>
          </div>
        </div>

        <div className="reels reveal">
          {REELS.map((r, i) => (
            <div className="reel" key={i}>
              <div className="reel-bg" style={{
                background: `radial-gradient(70% 50% at 50% 35%, oklch(0.55 0.14 ${r.hue}) 0%, oklch(0.16 0.04 ${r.hue}) 65%, #07120F 100%)`
              }}>
                <div style={{
                  position:'absolute', inset:0,
                  backgroundImage:'repeating-linear-gradient(0deg, transparent 0, transparent 28px, rgba(255,255,255,0.04) 28px, rgba(255,255,255,0.04) 29px)'
                }}/>
              </div>
              <div style={{position:'absolute', top:10, right:10, zIndex:2, background:'rgba(0,0,0,0.5)', backdropFilter:'blur(8px)', borderRadius:6, padding:'3px 6px', fontSize:9, letterSpacing:'.1em', color:'#fff'}}>
                {i % 2 === 0 ? 'REEL' : 'STORY'}
              </div>
              <div style={{position:'absolute', top:'45%', left:'50%', transform:'translate(-50%, -50%)', color:'rgba(255,255,255,0.85)', zIndex:2, width:42, height:42, borderRadius:'50%', background:'rgba(255,255,255,0.16)', backdropFilter:'blur(8px)', display:'grid', placeItems:'center', border:'1px solid rgba(255,255,255,0.2)'}}>
                <Icon.Play size={14}/>
              </div>
              <div className="reel-info">
                <span className="handle">{r.handle}</span>
                <span className="views"><Icon.Play size={9}/>{r.views}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="social-cta reveal">
          <div className="left">
            <div className="icons">
              <Icon.Instagram size={22}/>
              <Icon.TikTok size={22}/>
            </div>
            <div>
              <div className="handle-big">Follow @RealEstateAcademy</div>
              <div style={{fontSize:13, color:'var(--text-dim)', marginTop:4}}>Student celebrations · graduations · day-in-the-life · networking events</div>
            </div>
          </div>
          <a className="btn btn-gold" href="#"><Icon.Plus size={14}/> Follow</a>
        </div>

        {/* Marquee - actual BHHS office cities across AZ · CA · NV */}
        <div className="marquee">
          <div className="marquee-track">
            {[...Array(2)].flatMap((_, i) => [
              'Phoenix',      'Anaheim Hills',  'Las Vegas',
              'Scottsdale',   'Yorba Linda',    'Henderson',
              'Gilbert',      'Rancho Cucamonga', 'Summerlin',
              'Tucson',       'Palm Springs',   'Sun City',
              'Sedona',       'Indian Wells',   'St. Rose',
              'Prescott',     'Murrieta',       'Southwest',
              'Goodyear',     'Menifee',
              'Peoria',
            ].map((c, j) => (
              <div className="marquee-item" key={`${i}-${j}`}>
                <span className="dot"></span>{c}
              </div>
            )))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 8 - FINAL CTA ─────────────────────────────────
function FinalCTA() {
  return (
    <section id="enroll" className="final">
      <div className="final-bg"></div>
      <div className="container reveal">
        <div className="eyebrow" style={{justifyContent:'center', display:'flex'}}>Your Move</div>
        <h2 style={{marginTop: 22}}>
          Stop Thinking About It.<br/>
          Start Your <span className="gold">New Career.</span>
        </h2>
        <p>
          Flexible classes, modern coaching, and real support, designed to help you succeed in real estate. The next class starts soon.
        </p>
        <div className="final-ctas">
          <a className="btn btn-gold" href="#states"><Icon.Rocket size={15}/> Enroll Now</a>
          <a className="btn btn-ghost" href="#states"><Icon.Calendar size={15}/> Upcoming Classes</a>
          <a className="btn btn-ghost" href="tel:7027967777"><Icon.Phone size={15}/> Talk to an Advisor</a>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ─────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{marginBottom:18}}>
              <img src="assets/logo.png" alt="Real Estate Academy" className="logo-img"/>
            </div>
            <p style={{color:'var(--text-dim)', fontSize:14, lineHeight:1.55, maxWidth:340, margin:0}}>
              The modern real estate academy. Get licensed, get coached, get launched. Built for the next generation of agents across Arizona, California, and Nevada.
            </p>
          </div>
          <div>
            <h4>Programs</h4>
            <ul>
              <li><a href="Get Licensed Arizona.html">Get Licensed: Arizona</a></li>
              <li><a href="Get Licensed California.html">Get Licensed: California</a></li>
              <li><a href="Get Licensed Nevada.html">Get Licensed: Nevada</a></li>
              <li><a href="#">Online Classes</a></li>
              <li><a href="#">Continuing Education</a></li>
            </ul>
          </div>
          <div>
            <h4>Learn</h4>
            <ul>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Success Stories</a></li>
              <li><a href="#">Coaching Series</a></li>
              <li><a href="#">Career Match Quiz</a></li>
              <li><a href="#">Exam Prep</a></li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">TikTok</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">Talk to an Advisor</a></li>
              <li><a href="#">(702) 555-0142</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-privacy">
          <div className="footer-privacy-label">
            <Icon.Check size={13}/> Privacy Rights
          </div>
          <div className="footer-privacy-links">
            <a
              className="footer-privacy-link"
              href="https://privacyportal-cdn.onetrust.com/dsarwebform/b54c596e-12ac-4af7-8bd3-3876905378fa/c9b517fa-4dfd-4b53-93e1-66a918569972.html?referralurl=https://www.bhhscalifornia.com/&sourcedomain=www.bhhscalifornia.com&sourcetype=company"
              target="_blank" rel="noopener noreferrer"
            >
              <span className="footer-privacy-code">CA</span>
              <span>Do Not Sell or Share My Personal Information</span>
              <Icon.ArrowUR size={11}/>
            </a>
            <a
              className="footer-privacy-link"
              href="https://privacyportal.onetrust.com/webform/b54c596e-12ac-4af7-8bd3-3876905378fa/f8d0d996-6450-45c3-b18a-43453c3fd928"
              target="_blank" rel="noopener noreferrer"
            >
              <span className="footer-privacy-code">NV</span>
              <span>Do Not Sell My Personal Information</span>
              <Icon.ArrowUR size={11}/>
            </a>
          </div>
          <div className="footer-dmca" aria-label="DMCA Protected">
            <span className="footer-dmca-mark">©</span>
            <span className="footer-dmca-text">
              <strong>DMCA</strong>
              <small>Protected</small>
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 Real Estate Academy · Licensed in Arizona · California · Nevada</div>
          <div style={{display:'flex', gap:18}}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.CoachingSection = CoachingSection;
window.LearningSection = LearningSection;
window.CommunitySection = CommunitySection;
window.FinalCTA = FinalCTA;
window.Footer = Footer;
