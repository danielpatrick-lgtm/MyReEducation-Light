// property-management.jsx - Property Management Pre-Permit Course page
// Visual language matches Get Licensed Nevada.html

const ENROLLMENT_URL = "https://drive.google.com/file/d/1VL2iuEb0pocWtSBjjHgZnXFaY1isJZuC/view?pli=1";
const REGISTER_URL = "#register"; // user said: new link TBD, leave as-is

const PM = {
  hours: "24",
  tuition: "$275",
  adminFee: "$25",
  total: "$300.00",
  phone: "702-796-7777",
  phoneHref: "tel:7027967777",
  email: "RESchool@bhhsnv.com",
};

// ─── HERO ────────────────────────────────────────────────────
function PMHero() {
  return (
    <section className="gl-hero pm-hero">
      <div className="gl-hero-bg">
        <img className="hero-photo" src="assets/hero-property-mgmt.jpg" alt="" aria-hidden="true"/>
        <div className="gl-hero-scrim"></div>
      </div>
      <div className="container gl-hero-content">
        <div className="gl-crumbs">
          <a href="index.html">Home</a>
          <span>/</span>
          <span style={{color:'var(--gold)'}}>Property Management</span>
        </div>
        <div className="eyebrow">Property Management · Pre-Permit Course</div>
        <h1>Manage property.<br/><span className="gold">Get permitted.</span></h1>
        <p className="gl-hero-sub">
          The 24-hour Nevada Property Management Pre-Permit Course, taught live, in person or via Zoom. Satisfies the entire instruction requirement and prepares you for the licensing examination.
        </p>

        <div className="pm-accreditation">
          <div className="pm-accreditation-row">
            <span className="pm-accred-tick"><Icon.Check size={12}/></span>
            <span>Licensed by the Commission on Post-Secondary Education</span>
          </div>
          <div className="pm-accreditation-row">
            <span className="pm-accred-tick"><Icon.Check size={12}/></span>
            <span>Accredited by the Nevada Real Estate Commission</span>
          </div>
        </div>

        <div className="hero-ctas" style={{marginTop:36}}>
          <a className="btn btn-gold" href={REGISTER_URL}><Icon.Rocket size={15}/> Register for Class</a>
          <a className="btn btn-ghost" href={ENROLLMENT_URL} target="_blank" rel="noopener noreferrer">
            <Icon.ArrowUR size={15}/> Enrollment Agreement
          </a>
          <a className="btn btn-ghost" href={PM.phoneHref}><Icon.Phone size={15}/> {PM.phone}</a>
        </div>

        <div className="gl-quickfacts">
          <div><div className="k">{PM.hours}<span style={{color:'var(--gold)'}}>hr</span></div><div className="v">Of instruction</div></div>
          <div><div className="k">{PM.total}</div><div className="v">Total program fees</div></div>
          <div><div className="k">Live</div><div className="v">In-person or via Zoom</div></div>
          <div><div className="k">NV</div><div className="v">Real Estate Commission</div></div>
        </div>
      </div>
    </section>
  );
}

// ─── COURSE OVERVIEW ─────────────────────────────────────────
function PMOverview() {
  const topics = [
    "Nevada laws pertaining to property managers",
    "Property management contracts and agreements",
    "Disclosures",
    "Property management for common interest communities",
    "Landlord-tenant laws",
    "Fair housing laws",
    "Record keeping and trust accounting",
    "Commercial property management",
    "Risk management for property managers",
  ];

  return (
    <section className="section dark" id="course">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Course Overview</div>
          <h2>One course.<br/><span className="gold">Permit-ready.</span></h2>
          <p>
            Nevada Property Management Pre-Permit Course: <strong style={{color:'var(--warm-white)'}}>24 hours</strong> of instruction that satisfies the entire requirement for property management subjects and prepares you to sit for the licensing exam.
          </p>
        </div>

        <div className="pm-course-card reveal">
          <div className="pm-course-card-head">
            <div>
              <div className="course-detail-badge">ZOOM Instruction · Live</div>
              <h3>Nevada Property Management Pre-Permit Course</h3>
              <div className="course-detail-hours">24 hours · Approved by the Nevada Real Estate Commission</div>
            </div>
            <div className="course-detail-code">24 HR</div>
          </div>

          <p className="course-detail-desc">
            This course satisfies the entire requirement of 24 hours of instruction in required property management subjects and will help the student prepare to take the licensing examination.
          </p>

          <div className="pm-course-grid">
            <div>
              <h4>Topics covered</h4>
              <ul className="course-topics pm-topics-grid">
                {topics.map((t, i) => (
                  <li key={i}><Icon.Check size={14}/> {t}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Format &amp; delivery</h4>
              <p className="course-note">
                This course is taken in person and may be attended live in the classroom or virtually via Zoom. Zoom attendees must adhere to all guidelines for attending virtually; refer to the enrollment agreement. Course materials are provided on receipt of a completed Enrollment Agreement.
              </p>
              <div className="course-docs">
                <a className="course-doc" href={ENROLLMENT_URL} target="_blank" rel="noopener noreferrer">
                  <span className="course-doc-ic"><Icon.ArrowUR size={12}/></span>
                  Enrollment Agreement
                </a>
              </div>
            </div>
          </div>

          <div className="course-detail-cta">
            <a className="btn btn-gold" href={REGISTER_URL}><Icon.Rocket size={14}/> Register for Class</a>
            <a className="btn btn-ghost" href={PM.phoneHref}><Icon.Phone size={14}/> Talk to an Advisor</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TUITION ─────────────────────────────────────────────────
function PMTuition() {
  return (
    <section className="section" id="tuition">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Tuition</div>
          <h2>Flat pricing.<br/><span className="gold">No surprises.</span></h2>
          <p>
            All-in fees for the 24-hour Pre-Permit Course. We accept check, Visa, MasterCard, Discover Card, and American Express.
          </p>
        </div>

        <div className="pm-tuition-wrap reveal">
          <div className="tuition-card popular pm-tuition-card">
            <div className="tuition-flag">Pre-Permit Course</div>
            <div className="tuition-code">24 HR</div>
            <h3>Property Management Pre-Permit</h3>
            <div className="tuition-sub">24 hours of instruction</div>
            <div className="tuition-rows">
              <div className="tuition-row"><span>Tuition</span><span>{PM.tuition}</span></div>
              <div className="tuition-row"><span>Admin Fee</span><span>${"25"}</span></div>
            </div>
            <div className="tuition-total">
              <span>Total Fees</span>
              <span className="tuition-total-num">{PM.total}</span>
            </div>
            <a className="btn btn-gold" href={REGISTER_URL} style={{width:'100%', justifyContent:'center'}}>
              <Icon.Rocket size={14}/> Register
            </a>
          </div>

          <div className="pm-payment-card">
            <div className="course-detail-badge">Accepted Payment</div>
            <h3>Check, Visa, MasterCard,<br/>Discover, or American Express.</h3>
            <ul className="pm-payment-list">
              <li><Icon.Check size={14}/> Check</li>
              <li><Icon.Check size={14}/> Visa</li>
              <li><Icon.Check size={14}/> MasterCard</li>
              <li><Icon.Check size={14}/> Discover Card</li>
              <li><Icon.Check size={14}/> American Express</li>
            </ul>
            <p className="pm-payment-note">
              Course materials are provided upon receipt of a completed Enrollment Agreement. Enroll early. Seats are limited and Zoom attendees must complete the virtual-attendance guidelines before the first session.
            </p>
            <a className="btn btn-ghost" href={ENROLLMENT_URL} target="_blank" rel="noopener noreferrer">
              <Icon.ArrowUR size={14}/> Download Enrollment Agreement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FINAL CTA ───────────────────────────────────────────────
function PMFinal() {
  return (
    <section id="register" className="final">
      <div className="final-bg"></div>
      <div className="container reveal">
        <div className="eyebrow" style={{justifyContent:'center', display:'flex'}}>Next Cohort · Open Enrollment</div>
        <h2 style={{marginTop: 22}}>
          Become a Nevada<br/>
          <span className="gold">property manager.</span>
        </h2>
        <p>
          Complete your 24 hours live in the classroom or via Zoom. Course materials shipped on receipt of your signed Enrollment Agreement.
        </p>
        <div className="final-ctas">
          <a className="btn btn-gold" href={REGISTER_URL}><Icon.Rocket size={15}/> Register for Class</a>
          <a className="btn btn-ghost" href={ENROLLMENT_URL} target="_blank" rel="noopener noreferrer">
            <Icon.ArrowUR size={15}/> Enrollment Agreement
          </a>
          <a className="btn btn-ghost" href={PM.phoneHref}><Icon.Phone size={15}/> {PM.phone}</a>
        </div>
      </div>
    </section>
  );
}

// ─── APP ─────────────────────────────────────────────────────
function PMApp() {
  React.useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav/>
      <PMHero/>
      <PMOverview/>
      <PMTuition/>
      <PMFinal/>
      <Footer/>
      <StickyCTA/>
      <ChatBubble/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PMApp/>);
