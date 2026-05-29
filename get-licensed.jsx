// get-licensed.jsx - Get Licensed page (state-aware)
// Reads window.STATE to render Arizona, California, or Nevada content.

const STATE_DATA = {
  arizona: {
    name: "Arizona",
    code: "AZ",
    hours: "90",
    tagline: "Get Licensed.",
    accent: "Get Launched.",
    intro: "Real Estate Academy's Arizona track is licensed by the Arizona Department of Real Estate. Online, virtual, and in-person classes available, taught by active Arizona instructors.",
    phone: "602-555-0142",
    phoneHref: "tel:6025550142",
    email: "Arizona@reschool.com",
    examPass: "89",
    totalFee: "$439",
    registerUrl: "https://anc.apm.activecommunities.com/reacademy/activity/search?onlineSiteId=0&activity_select_param=2&activity_category_ids=36&viewMode=list",
    centers: [
      { name: "Phoenix Campus",   addr: "2100 N Central Ave Ste 200",     city: "Phoenix, AZ 85004",    tag: "Flagship"  },
      { name: "Scottsdale Center", addr: "8800 E Raintree Dr Ste 130",     city: "Scottsdale, AZ 85260", tag: "Evenings"  },
      { name: "Tucson Campus",     addr: "4801 E Broadway Blvd Ste 100",   city: "Tucson, AZ 85711",     tag: "Day + Night" },
    ],
    courses: [
      {
        id: 'principles',
        badge: 'Most Popular · Full Course',
        code: '90 HR',
        title: 'Arizona Real Estate Salesperson Course',
        hours: '90 hours',
        desc: "Satisfies all 90 hours of required real estate instruction approved by ADRE and prepares you for the Arizona salesperson licensing exam.",
        topics: [
          'Arizona Real Estate Law & License Law',
          'Agency Relationships & Disclosure',
          'Property Ownership & Land Use Controls',
          'Valuation, Finance & Closings',
          'Contracts & Risk Management',
          'Fair Housing & Federal Regulations',
        ],
        note: "Complete the Academy's enrollment agreement and course catalog before class start. Email signed documents to Arizona@reschool.com for book pickup instructions.",
        docs: [{ label: 'AZ Enrollment Agreement', href: '#' }, { label: 'Course Catalog', href: '#' }],
      },
      {
        id: 'broker',
        badge: 'Broker Track',
        code: '90 HR',
        title: 'Arizona Real Estate Broker Course',
        hours: '90 hours',
        desc: "For licensed Arizona salespersons with 3+ years' experience pursuing a broker license. Covers brokerage management, escrow, and advanced contracts.",
        topics: [
          'Brokerage Management & Trust Accounts',
          'Advanced Contracts & Negotiation',
          'Property Management & Leasing Law',
          'Real Estate Finance & Investments',
        ],
        note: "Requires proof of active salesperson license and experience verification. Submit transcripts before enrolling.",
        docs: [{ label: 'Broker Application Packet', href: '#' }],
      },
      {
        id: 'ce',
        badge: 'Continuing Education',
        code: '24 HR',
        title: 'Arizona Continuing Education',
        hours: '24 hours / renewal',
        desc: "Renewal CE for active Arizona agents, covering Agency, Contract Law, Disclosure, Fair Housing, Legal Issues, and Commissioner's Standards.",
        topics: ['Agency Law', 'Contract Law', 'Disclosure', 'Fair Housing', 'Legal Issues', "Commissioner's Standards"],
        note: "All 6 mandatory categories included. Certificate issued within 24 hours of completion.",
        docs: [{ label: 'CE Schedule', href: '#' }],
      },
    ],
    tuition: [
      { code: '90 HR', title: 'Salesperson Course', sub: 'Full pre-licensing',     rows: [['Tuition','$249'],['Texts','$165'],['Admin Fee','$25']], total: '$439', popular: true },
      { code: '90 HR', title: 'Broker Course',      sub: 'For experienced agents', rows: [['Tuition','$349'],['Texts','$185'],['Admin Fee','$25']], total: '$559' },
      { code: '24 HR', title: 'Continuing Ed',      sub: 'Active license renewal', rows: [['Tuition','$99'], ['Materials','$25'],['Admin Fee','$25']], total: '$149' },
    ],
  },
  california: {
    name: "California",
    code: "CA",
    hours: "135",
    tagline: "Get Licensed.",
    accent: "Get Launched.",
    intro: "Real Estate Academy's California track is approved by the California Department of Real Estate (DRE). Self-paced online and live virtual classes available across the state.",
    phone: "415-555-0142",
    phoneHref: "tel:4155550142",
    email: "California@reschool.com",
    examPass: "87",
    totalFee: "$489",
    registerUrl: "https://bhhsca.theceshop.com/california/pre-licensing/ca-salesperson-pre-licensing-cost/",
    centers: [
      { name: "Los Angeles Campus",  addr: "11500 W Olympic Blvd Ste 400", city: "Los Angeles, CA 90064", tag: "Flagship"  },
      { name: "San Francisco Center", addr: "100 Pine St Ste 1250",         city: "San Francisco, CA 94111", tag: "Evenings"  },
      { name: "San Diego Campus",     addr: "4747 Executive Dr Ste 200",    city: "San Diego, CA 92121",   tag: "Day + Night" },
    ],
    courses: [
      {
        id: 'principles',
        badge: 'Most Popular · Full Course',
        code: '135 HR',
        title: 'California Salesperson Pre-Licensing',
        hours: '135 hours (3 × 45hr courses)',
        desc: "Satisfies all three required DRE courses (Real Estate Principles, Real Estate Practice, and one approved Elective) for the California salesperson exam.",
        topics: [
          'Real Estate Principles (45hr)',
          'Real Estate Practice (45hr)',
          'Approved Elective (45hr): Finance, Appraisal, or Property Management',
          'California Contracts & Agency',
          'Fair Housing & Federal Compliance',
          'Trust Funds & Brokerage Accounting',
        ],
        note: "Complete the Academy's enrollment agreement before class start. Email documents to California@reschool.com.",
        docs: [{ label: 'CA Enrollment Agreement', href: '#' }, { label: 'Course Catalog', href: '#' }],
      },
      {
        id: 'broker',
        badge: 'Broker Track',
        code: '8 × 45HR',
        title: 'California Broker Pre-Licensing',
        hours: '360 hours (8 courses)',
        desc: "For licensed California salespersons with 2+ years' experience or qualifying degree, pursuing a broker license through DRE.",
        topics: [
          'Real Estate Practice',
          'Legal Aspects of Real Estate',
          'Real Estate Finance',
          'Real Estate Appraisal',
          'Real Estate Economics or Accounting',
          'Three Approved Electives',
        ],
        note: "Requires proof of salesperson license and qualifying experience. Submit DRE qualification packet.",
        docs: [{ label: 'Broker Application Packet', href: '#' }],
      },
      {
        id: 'ce',
        badge: 'Continuing Education',
        code: '45 HR',
        title: 'California 4-Year Renewal CE',
        hours: '45 hours / 4-year renewal',
        desc: "Required DRE renewal package: Ethics, Agency, Trust Fund, Fair Housing, Risk Management, Management & Supervision, plus electives.",
        topics: ['Ethics (3hr)', 'Agency (3hr)', 'Trust Fund (3hr)', 'Fair Housing (3hr)', 'Risk Management (3hr)', 'Management & Supervision (3hr)', '18hr Consumer Protection', '12hr Consumer Service'],
        note: "DRE-approved package. Certificate issued immediately on completion.",
        docs: [{ label: 'CE Schedule', href: '#' }],
      },
    ],
    tuition: [
      { code: '135 HR', title: 'Salesperson Package', sub: '3 required courses',  rows: [['Tuition','$299'],['Texts','$165'],['Admin Fee','$25']], total: '$489', popular: true },
      { code: '360 HR', title: 'Broker Package',      sub: 'All 8 courses',       rows: [['Tuition','$849'],['Texts','$285'],['Admin Fee','$25']], total: '$1,159' },
      { code: '45 HR',  title: '4-Year Renewal CE',   sub: 'Active license',      rows: [['Tuition','$129'],['Materials','$25'],['Admin Fee','$25']], total: '$179' },
    ],
  },
  nevada: {
    name: "Nevada",
    code: "NV",
    hours: "120",
    tagline: "Get Licensed.",
    accent: "Get Launched.",
    intro: "Real Estate Academy's Nevada track is licensed by the Commission on Postsecondary Education and accredited by the Nevada Real Estate Commission. Night and day classes available across three Las Vegas–area training centers.",
    phone: "702-796-7777",
    phoneHref: "tel:7027967777",
    email: "RESchool@bhhsnv.com",
    examPass: "92",
    totalFee: "$459",
    registerUrl: "https://anc.apm.activecommunities.com/reacademy/activity/search?onlineSiteId=0&activity_select_param=2&activity_category_ids=25&viewMode=list",
    centers: [
      { name: 'Henderson Campus',   addr: '3185 St. Rose Parkway Ste #100', city: 'Henderson, NV 89052', tag: 'Flagship'   },
      { name: 'West Sunset Campus', addr: '8850 W Sunset Suite #200',       city: 'Las Vegas, NV 89148', tag: 'Evenings'   },
      { name: 'Center Crossing',    addr: '1490 Center Crossing Rd',        city: 'Las Vegas, NV 89144', tag: 'Day + Night' },
    ],
    courses: [
      {
        id: 'principles',
        badge: 'Most Popular · Full Course',
        code: '120 HR',
        title: 'Real Estate Principles, Practices & Law',
        hours: '120 hours',
        desc: "Satisfies all 120 hours (90 + 30) of required real estate instruction and prepares you for the Nevada licensing exam.",
        topics: [
          'Brokerage & Laws of Agency',
          'Valuation & Economics',
          'Finance, Property Ownership, Transfer & Use',
          'Applied Practices · Contracts and Agency',
          'Nevada Real Estate Law',
          'Nevada Contracts and Agency',
        ],
        note: "Students must read and complete the Academy's enrollment agreement and course catalog prior to start. Email signed documents and receipts to RESchool@bhhsnv.com. you'll receive pickup instructions for course books.",
        docs: [{ label: '120 HR Agreement', href: '#' }, { label: 'Course Catalog', href: '#' }],
      },
      {
        id: 'law',
        badge: 'Out-of-State Bridge',
        code: '18 HR',
        title: 'Nevada Real Estate Law',
        hours: '18 hours',
        desc: "For applicants who have completed pre-licensing in another state and only need the Nevada Real Estate Law portion.",
        topics: [
          'NRS 645 & NAC 645: Brokers, Salesman, Intermediaries',
          'NRS 119 & NAC 119: Sale of Subdivided Land',
          'NRS 119A & NAC 119A: Time Shares',
          'General Provisions',
        ],
        note: "Complete the Academy's enrollment agreement before class start. Bring documents plus tuition/book receipts to the corporate office.",
        docs: [{ label: '18 HR Agreement', href: '#' }],
      },
      {
        id: 'contracts',
        badge: 'Bridge · Pre-2021 Students',
        code: '30 HR',
        title: 'Nevada Real Estate Contracts & Agency',
        hours: '30 hours',
        desc: "Required additional 30 hours for students who completed the 90-hour Pre-Licensing course before October 1, 2021.",
        topics: ['Nevada Contracts', 'Nevada Agency Relationships', 'Disclosure Requirements', 'NVRED Salesperson application alignment'],
        note: "Complete the Academy's enrollment agreement before class start. Bring documents plus tuition/book receipts to the corporate office.",
        docs: [{ label: '30 HR Agreement', href: '#' }],
      },
    ],
    tuition: [
      { code: '120 HR', title: 'Full Pre-Licensing Course', sub: 'Includes Nevada Real Estate Law', rows: [['Tuition','$259'],['Texts','$175'],['Admin Fee','$25']], total: '$459', popular: true },
      { code: '18 HR',  title: 'Nevada Real Estate Law',     sub: 'Out-of-state bridge',           rows: [['Tuition','$125'],['Texts','$50'], ['Admin Fee','$25']], total: '$200' },
      { code: '30 HR',  title: 'Contracts & Agency',         sub: 'Pre-2021 students',             rows: [['Tuition','$65'], ['Texts','$60'], ['Admin Fee','$25']], total: '$150' },
    ],
  },
};

// Resolve current state from window.STATE; fall back to nevada.
const S = STATE_DATA[(typeof window !== 'undefined' && window.STATE) || 'nevada'];
// Where "Register" CTAs should send the user. External URL opens in new tab.
const REGISTER_URL  = S.registerUrl || '#register';
const REGISTER_EXT  = !!S.registerUrl;
const registerProps = REGISTER_EXT
  ? { href: REGISTER_URL, target: '_blank', rel: 'noopener noreferrer' }
  : { href: REGISTER_URL };

// ─── HERO ────────────────────────────────────────────────────
function GLHero() {
  return (
    <section className="gl-hero">
      <div className="gl-hero-bg">
        <img className="hero-photo" src="assets/hero-classroom.jpg" alt="" aria-hidden="true"/>
        <div className="gl-hero-scrim"></div>
      </div>
      <div className="container gl-hero-content">
        <div className="gl-crumbs">
          <a href="index.html">Home</a>
          <span>/</span>
          <a href="index.html#states" style={{color:'var(--gold)'}}>Get Licensed</a>
          <span>/</span>
          <span style={{opacity:0.7}}>{S.name}</span>
        </div>
        <div className="eyebrow">Pre-Licensing Course · {S.name}</div>
        <h1>{S.tagline}<br/><span className="gold">{S.accent}</span></h1>
        <p className="gl-hero-sub">{S.intro}</p>
        <div className="hero-ctas">
          <a className="btn btn-gold" {...registerProps}><Icon.Rocket size={15}/> Register for Class</a>
          <a className="btn btn-ghost" href="#courses"><Icon.Calendar size={15}/> View Courses</a>
          <a className="btn btn-ghost" href={S.phoneHref}><Icon.Phone size={15}/> {S.phone}</a>
        </div>

        <div className="gl-quickfacts">
          <div><div className="k">{S.hours}<span style={{color:'var(--gold)'}}>hr</span></div><div className="v">Pre-Licensing Course</div></div>
          <div><div className="k">{S.totalFee}</div><div className="v">Total program fees</div></div>
          <div><div className="k">3</div><div className="v">{S.name} training centers</div></div>
          <div><div className="k">{S.examPass}<span style={{color:'var(--gold)'}}>%</span></div><div className="v">First-time exam pass rate</div></div>
        </div>
      </div>
    </section>
  );
}

// ─── OTHER-STATES STRIP ─────────────────────────────────────
function OtherStates() {
  const others = ['arizona', 'california', 'nevada'].filter(id => id !== (window.STATE || 'nevada'));
  return (
    <section className="section tight other-states">
      <div className="container">
        <div className="other-states-inner">
          <div>
            <div className="eyebrow">Also Available In</div>
            <h3 style={{fontSize:'clamp(22px, 3vw, 32px)', marginTop:12}}>Get licensed in another state.</h3>
          </div>
          <div className="other-states-links">
            {others.map(id => (
              <a key={id} href={`Get Licensed ${STATE_DATA[id].name}.html`} className="other-state-link">
                <span className="other-state-code">{STATE_DATA[id].code}</span>
                <span className="other-state-name">{STATE_DATA[id].name}</span>
                <Icon.ArrowUR size={14}/>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TRAINING CENTERS ────────────────────────────────────────
function Centers() {
  return (
    <section className="section" id="centers">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Training Centers</div>
          <h2>Three campuses.<br/><span className="gold">One license.</span></h2>
          <p>In-person instruction across {S.name}. Pick the campus that fits your commute. All centers run the same curriculum and same exam prep.</p>
        </div>
        <div className="centers-grid reveal">
          {S.centers.map((c, i) => (
            <a className="center-card" href={S.phoneHref} key={i}>
              <div className="center-num">{String(i+1).padStart(2,'0')}</div>
              <div className="center-tag">{c.tag}</div>
              <h3>{c.name}</h3>
              <div className="center-addr">
                <div>{c.addr}</div>
                <div>{c.city}</div>
              </div>
              <div className="center-foot">
                <span><Icon.Phone size={13}/> {S.phone}</span>
                <span className="center-arrow"><Icon.ArrowUR size={14}/></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── COURSES ─────────────────────────────────────────────────
function Courses() {
  const [active, setActive] = React.useState(S.courses[0].id);
  const course = S.courses.find(c => c.id === active);

  return (
    <section className="section dark" id="courses">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Courses</div>
          <h2>{S.name} Course<br/><span className="gold">Options.</span></h2>
          <p>Three pathways. Pick the one that matches your prior experience. All approved by the {S.name} real estate regulator.</p>
        </div>

        <div className="course-tabs reveal">
          {S.courses.map(c => (
            <button
              key={c.id}
              className={"course-tab" + (active === c.id ? " active" : "")}
              onClick={() => setActive(c.id)}
            >
              <span className="course-tab-code">{c.code}</span>
              <span className="course-tab-title">{c.title}</span>
            </button>
          ))}
        </div>

        <div className="course-detail reveal" key={course.id}>
          <div className="course-detail-head">
            <div>
              <div className="course-detail-badge">{course.badge}</div>
              <h3>{course.title}</h3>
              <div className="course-detail-hours">{course.hours} · Approved by {S.name} regulator</div>
            </div>
            <div className="course-detail-code">{course.code}</div>
          </div>

          <p className="course-detail-desc">{course.desc}</p>

          <div className="course-detail-grid">
            <div>
              <h4>What you'll learn</h4>
              <ul className="course-topics">
                {course.topics.map((t, i) => (
                  <li key={i}><Icon.Check size={14}/> {t}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Before you start</h4>
              <p className="course-note">{course.note}</p>
              <div className="course-docs">
                {course.docs.map((d, i) => (
                  <a className="course-doc" href={d.href} key={i}>
                    <span className="course-doc-ic"><Icon.ArrowUR size={12}/></span>
                    {d.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="course-detail-cta">
            <a className="btn btn-gold" {...registerProps}><Icon.Rocket size={14}/> Register for Class</a>
            <a className="btn btn-ghost" href={S.phoneHref}><Icon.Phone size={14}/> Talk to an Advisor</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TUITION ─────────────────────────────────────────────────
function Tuition() {
  return (
    <section className="section" id="tuition">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Tuition</div>
          <h2>Flat pricing.<br/><span className="gold">No surprises.</span></h2>
          <p>All-in fees for each course. We accept Visa, MasterCard, and Discover. Enroll and pick up materials at least 3 days before class; two weeks recommended to guarantee a seat.</p>
        </div>

        <div className="tuition-grid reveal">
          {S.tuition.map((t, i) => (
            <div className={"tuition-card" + (t.popular ? " popular" : "")} key={i}>
              {t.popular && <div className="tuition-flag">Most Popular</div>}
              <div className="tuition-code">{t.code}</div>
              <h3>{t.title}</h3>
              <div className="tuition-sub">{t.sub}</div>
              <div className="tuition-rows">
                {t.rows.map(([k, v], j) => (
                  <div className="tuition-row" key={j}>
                    <span>{k}</span>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
              <div className="tuition-total">
                <span>Total</span>
                <span className="tuition-total-num">{t.total}</span>
              </div>
              <a className={"btn " + (t.popular ? "btn-gold" : "btn-ghost")} {...registerProps} style={{width:'100%', justifyContent:'center'}}>
                <Icon.Rocket size={14}/> Register
              </a>
            </div>
          ))}
        </div>

        <div className="tuition-faqs reveal">
          <a className="btn btn-line" href="#"><Icon.ArrowUR size={14}/> Academy FAQ</a>
          <a className="btn btn-line" href="#"><Icon.ArrowUR size={14}/> {S.name} Licensing FAQ</a>
        </div>
      </div>
    </section>
  );
}

// ─── REIMBURSEMENT ───────────────────────────────────────────
function Reimbursement() {
  return (
    <section className="section dark" id="reimburse">
      <div className="container">
        <div className="reimburse-grid">
          <div className="reimburse-body reveal">
            <div className="eyebrow">Tuition Reimbursement</div>
            <h2>Get your tuition back<br/>when you affiliate with<br/><span className="gold">our partner brokerage.</span></h2>
            <p style={{color:'var(--text-dim)', fontSize:17, lineHeight:1.55, margin:'24px 0 0', maxWidth:560}}>
              Real Estate Academy is associated with a leading {S.name} brokerage. You're free to affiliate with any broker, but if you choose our partner, you qualify for our <strong style={{color:'var(--warm-white)'}}>Tuition Reimbursement Program</strong> plus continuous sales training for newly licensed affiliates.
            </p>
            <p style={{color:'var(--text-dim)', fontSize:14, lineHeight:1.55, margin:'18px 0 0', maxWidth:560}}>
              For a private broker interview, call <strong style={{color:'var(--warm-white)'}}>{S.phone}</strong>.
            </p>
            <div style={{marginTop:32, display:'flex', gap:12, flexWrap:'wrap'}}>
              <a className="btn btn-gold" href={S.phoneHref}><Icon.Phone size={14}/> Schedule a Broker Interview</a>
              <a className="btn btn-ghost" href="#"><Icon.ArrowUR size={14}/> Learn More</a>
            </div>
          </div>

          <div className="reimburse-card reveal">
            <div className="reimburse-card-label">Program at a Glance</div>
            <div className="reimburse-card-stat"><span className="k">100<span style={{color:'var(--gold)'}}>%</span></span><span className="v">Tuition reimbursed*</span></div>
            <div className="reimburse-card-stat"><span className="k">Free</span><span className="v">Continuous sales training</span></div>
            <div className="reimburse-card-stat"><span className="k">∞</span><span className="v">Broker mentorship + coaching</span></div>
            <div className="reimburse-fine">
              *Conditions apply. Contact us prior to enrolling to discuss program eligibility. Our partner brokerage and Real Estate Academy do not guarantee placement with any real estate company.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SELF-PACED ──────────────────────────────────────────────
function SelfPaced() {
  return (
    <section className="section" id="selfpaced">
      <div className="container">
        <div className="selfpaced reveal">
          <div className="selfpaced-side">
            <div className="eyebrow">Self-Paced Option</div>
            <h2>Need flexibility?<br/><span className="gold">Learn online.</span></h2>
            <p>Self-paced pre-licensing is offered through our online business partner. Study on your schedule, anywhere in {S.name}.</p>
            <p style={{fontSize:13, color:'var(--text-faint)', marginTop:18}}>
              Note: Discount vouchers for Real Estate Academy do not apply to courses offered through our business partner.
            </p>
            <a className="btn btn-gold" href="#" style={{marginTop:24}}>
              <Icon.Online size={14}/> Explore Online Education
            </a>
          </div>
          <div className="selfpaced-deco" aria-hidden="true">
            <div className="selfpaced-deco-card c1">
              <div className="d-row"><Icon.Check size={12}/> Module 03 · Valuation</div>
              <div className="d-bar"><div style={{width:'72%'}}/></div>
            </div>
            <div className="selfpaced-deco-card c2">
              <div className="d-row"><Icon.Play size={11}/> Live Q&A · Tue 6pm</div>
              <div className="d-bar"><div style={{width:'40%', background:'var(--warm-white)'}}/></div>
            </div>
            <div className="selfpaced-deco-card c3">
              <div className="d-row"><Icon.Sparkle size={11}/> Mock Exam · 92/100</div>
              <div className="d-stars">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── REGISTER / FINAL CTA ────────────────────────────────────
function GLFinal() {
  return (
    <section id="register" className="final">
      <div className="final-bg"></div>
      <div className="container reveal">
        <div className="eyebrow" style={{justifyContent:'center', display:'flex'}}>Next Class · Open Enrollment</div>
        <h2 style={{marginTop: 22}}>
          Your seat is waiting.<br/>
          <span className="gold">Register today.</span>
        </h2>
        <p>
          Pick your campus, pick your course, and start your {S.hours}-hour journey to your {S.name} real estate license. Most students finish in under 60 days.
        </p>
        <div className="final-ctas">
          <a className="btn btn-gold" {...registerProps}><Icon.Rocket size={15}/> Register for Class</a>
          <a className="btn btn-ghost" href={S.phoneHref}><Icon.Phone size={15}/> {S.phone}</a>
          <a className="btn btn-ghost" href={"mailto:" + S.email}><Icon.Send size={15}/> {S.email}</a>
        </div>
      </div>
    </section>
  );
}

window.GLHero = GLHero;
window.OtherStates = OtherStates;
window.Centers = Centers;
window.Courses = Courses;
window.Tuition = Tuition;
window.Reimbursement = Reimbursement;
window.SelfPaced = SelfPaced;
window.GLFinal = GLFinal;
