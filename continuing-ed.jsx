// continuing-ed.jsx - Continuing Education page (state-aware)
// Reads window.STATE to render Arizona, California, or Nevada CE content.

const CE_DATA = {
  arizona: {
    name: "Arizona",
    code: "AZ",
    mode: "inhouse",
    tagline: "Stay Licensed.",
    accent: "Stay Sharp.",
    intro: "Berkshire Hathaway HomeServices Arizona Properties gives its agents access to the full suite of continuing education courses required to renew an Arizona real estate license. At designated times of the year, these classes are offered completely free.",
    eligibility: "Free CE classes are exclusive to Berkshire Hathaway HomeServices Arizona Properties sales executives. To enroll, check the event calendar below for available dates and times.",
    registerUrl: "https://apm.activecommunities.com/reacademy/Activity_Search?ActivityCategoryID=30&isSearch=true",
    phone: "602-421-4882",
    phoneHref: "tel:6024214882",
    contactName: "Mary Sand",
    email: "education@bhhsv2.com",
    quickfacts: [
      { k: "Free", v: "For BHHS Arizona sales executives" },
      { k: "Live", v: "Instructor-led classroom courses" },
      { k: "Online", v: "Self-paced option available" },
    ],
    renewalLinks: [
      { label: "Arizona Real Estate Division: Renewal Info, Cost & Instructions", url: "https://ptl.az.gov/app/dre/" },
    ],
    onlineUrl: "https://bhhsaz.theceshop.com/online-education/arizona/real-estate/sales-license/continuing-education/courses.html",
    onlineNote: "Prefer to finish your hours online? Self-paced Arizona CE is available through our education partner, The CE Shop.",
    courses: null,
    locations: null,
  },

  california: {
    name: "California",
    code: "CA",
    mode: "online",
    tagline: "Stay Licensed.",
    accent: "Stay Sharp.",
    intro: "California real estate continuing education is delivered online through our education partner, The CE Shop. Study on your own schedule, anywhere in California, and complete every hour the DRE requires for your renewal.",
    eligibility: "California's Department of Real Estate requires continuing education for each license renewal. Choose the package below that matches your renewal type, whether first-time or subsequent.",
    registerUrl: "https://bhhsca.theceshop.com/online-education/california/real-estate/sales-license-first-time-renewal/continuing-education/courses.html",
    phone: null,
    phoneHref: null,
    email: "education@bhhsv2.com",
    quickfacts: [
      { k: "Online", v: "100% self-paced through The CE Shop" },
      { k: "Anywhere", v: "Study statewide, on your schedule" },
      { k: "DRE", v: "Approved for California renewal" },
    ],
    renewalLinks: [
      { label: "California DRE: Renew Your License", url: "https://www.dre.ca.gov/Licensees/RenewLicense.html" },
      { label: "California DRE: Continuing Education Requirements", url: "https://www.dre.ca.gov/Examinees/Education.html" },
    ],
    onlineUrl: "https://bhhsca.theceshop.com/online-education/california/real-estate/sales-license-first-time-renewal/continuing-education/courses.html",
    onlineNote: "All California CE is completed through The CE Shop. Pick your renewal package below to see courses and pricing.",
    packages: [
      {
        title: "Salesperson: First-Time Renewal",
        desc: "For salespersons renewing their California license for the very first time.",
        url: "https://bhhsca.theceshop.com/online-education/california/real-estate/sales-license-first-time-renewal/continuing-education/courses.html",
      },
      {
        title: "Broker: First-Time Renewal",
        desc: "For brokers renewing their California license for the very first time.",
        url: "https://bhhsca.theceshop.com/online-education/california/real-estate/broker-license-first-time-renewal/continuing-education/courses.html",
      },
      {
        title: "Subsequent Renewal: Sales & Broker",
        desc: "For salespersons and brokers on their second or later license renewal.",
        url: "https://bhhsca.theceshop.com/online-education/california/real-estate/sales-and-broker-license-subsequent-renewal/continuing-education/courses.html",
      },
    ],
    courses: null,
    locations: null,
  },

  nevada: {
    name: "Nevada",
    code: "NV",
    mode: "inhouse",
    tagline: "Stay Licensed.",
    accent: "Stay Sharp.",
    intro: "Berkshire Hathaway HomeServices Nevada Properties provides all the continuing education courses you need to renew your license on your second and subsequent renewals. Classes are free to all BHHS Sales Executives using the current-year coupon code. See your manager for details.",
    eligibility: "Most classes are taught live in the classroom, with select CE courses offered virtually over Zoom (links are emailed the afternoon before class). Six internet self-paced courses are also available.",
    registerUrl: "https://anc.apm.activecommunities.com/reacademy/activity/search?onlineSiteId=0&activity_select_param=2&activity_category_ids=24&viewMode=list",
    phone: "702-796-7777",
    phoneHref: "tel:7027967777",
    email: "education@bhhsv2.com",
    quickfacts: [
      { k: "Free", v: "With current-year BHHS coupon code" },
      { k: "3", v: "Las Vegas–area classrooms" },
      { k: "6", v: "Internet self-paced CE courses" },
      { k: "Zoom", v: "Virtual class options available" },
    ],
    renewalLinks: [
      { label: "Nevada Real Estate Division: Renewal Requirements", url: "https://red.nv.gov/Content/Licensing/Renewal_Requirements/" },
      { label: "Renew Online: Nevada Online Services", url: "http://red.nv.gov/Content/Online_Services/Online_Renewals/" },
      { label: "Generic License Renewal Form (Form 580)", url: "http://red.nv.gov/uploadedFiles/rednvgov/Content/Forms/580.pdf" },
    ],
    onlineUrl: "https://bhhsnv.theceshop.com/online-education/nevada/real-estate/sales-license-on-or-after-10-1-21-/continuing-education/courses.html",
    onlineNote: "Prefer to finish your hours online? Self-paced Nevada CE is available through our education partner, The CE Shop. Note: the online option does not accept the BHHS agent CE coupon code.",
    fullListUrl: "https://drive.google.com/file/d/1j8fFjs9ux9A9XjdMLxVd8VXjoTnXXPY5/view?pli=1",
    ceTrackerUrl: "https://drive.google.com/file/d/1mUAqWHOzkQLnPRiquwh-sTErMF3ZALNl/view?usp=drive_fs&pli=1",
    courses: [
      {
        cat: "Law / General",
        code: "CE# 7230000.RE",
        hours: "3 hours",
        title: "Legislative Law: Some New, Some Oldies but Goodies",
        desc: "A thorough working knowledge of licensing requirements and the disclosures required by the Nevada Real Estate Division, plus changes to the Nevada Administrative Code, business brokerage, manufactured housing, landlord/tenant issues, and advertising law.",
      },
      {
        cat: "Broker Mgmt / General",
        code: "CE# 5531000.RE",
        hours: "3 hours",
        title: "Nevada Real Estate Division Complaints",
        desc: "Educates brokers and sales managers on the Real Estate Division complaint and hearing process, reviewing the most common complaints so managers can recognize and prevent them in daily practice.",
      },
      {
        cat: "Contracts / General",
        code: "CE# 5015000.RE",
        hours: "3 hours",
        title: "Writing & Presenting the Offer to Purchase",
        desc: "A working knowledge of client relationships and the steps to prepare a completed Residential Purchase Agreement, present the offer, write counteroffers, and build an estimated closing cost sheet.",
      },
      {
        cat: "Contracts / General",
        code: "CE# 3633000.RE",
        hours: "3 hours",
        title: "Advanced Analysis of the Residential Purchase Agreement",
        desc: "An advanced contracts class that meets the contracts designation requirement. Improve your ability to explain contracts, identify required disclosures, and understand FIRPTA, multiple offers, and financing addendums.",
      },
      {
        cat: "General",
        code: "CE# 5179000.RE",
        hours: "3 hours",
        title: "Mortgage Finance in a New Age",
        desc: "Identify the problems that prevent closings, understand mortgage disclosure information and good-faith estimates, settlement statements, pre-approval versus pre-qualification, and the loan programs available.",
      },
    ],
    locations: [
      { name: "Henderson Campus", addr: "3185 St. Rose Parkway, Suite #100", city: "Henderson, NV 89052", phone: "702-796-7777", phoneHref: "tel:7027967777" },
      { name: "Las Vegas: Sunset", addr: "8850 W. Sunset Road, Suite #200", city: "Las Vegas, NV 89148", phone: "702-734-5555", phoneHref: "tel:7027345555" },
      { name: "Las Vegas: Center Crossing", addr: "1490 Center Crossing Road", city: "Las Vegas, NV 89144", phone: "702-312-7070", phoneHref: "tel:7023127070" },
    ],
  },
};

const CE = CE_DATA[(typeof window !== 'undefined' && window.STATE) || 'nevada'];
const ceRegisterProps = { href: CE.registerUrl, target: '_blank', rel: 'noopener noreferrer' };
const ext = (url) => ({ href: url, target: '_blank', rel: 'noopener noreferrer' });

// ─── HERO ────────────────────────────────────────────────────
function CEHero() {
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
          <span style={{color:'var(--gold)'}}>Continuing Education</span>
          <span>/</span>
          <span style={{opacity:0.7}}>{CE.name}</span>
        </div>
        <div className="eyebrow">Continuing Education · {CE.name}</div>
        <h1>{CE.tagline}<br/><span className="gold">{CE.accent}</span></h1>
        <p className="gl-hero-sub">{CE.intro}</p>
        <div className="hero-ctas">
          {CE.mode === 'online' ? (
            <a className="btn btn-gold" {...ceRegisterProps}><Icon.Online size={15}/> Browse Online CE</a>
          ) : (
            <a className="btn btn-gold" {...ceRegisterProps}><Icon.Calendar size={15}/> View Class Calendar</a>
          )}
          <a className="btn btn-ghost" href="#renewal"><Icon.Check size={15}/> Renewal Info</a>
          {CE.phone && <a className="btn btn-ghost" href={CE.phoneHref}><Icon.Phone size={15}/> {CE.phone}</a>}
        </div>

        <div className="ce-note">
          <Icon.Sparkle size={18}/>
          <p>{CE.eligibility}</p>
        </div>

        <div className="gl-quickfacts">
          {CE.quickfacts.map((f, i) => (
            <div key={i}><div className="k">{f.k}</div><div className="v">{f.v}</div></div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── OTHER-STATES STRIP ─────────────────────────────────────
function CEOtherStates() {
  const others = ['arizona', 'california', 'nevada'].filter(id => id !== (window.STATE || 'nevada'));
  return (
    <section className="section tight other-states">
      <div className="container">
        <div className="other-states-inner">
          <div>
            <div className="eyebrow">Also Available In</div>
            <h3 style={{fontSize:'clamp(22px, 3vw, 32px)', marginTop:12}}>Continuing education in another state.</h3>
          </div>
          <div className="other-states-links">
            {others.map(id => (
              <a key={id} href={`Continuing Education ${CE_DATA[id].name}.html`} className="other-state-link">
                <span className="other-state-code">{CE_DATA[id].code}</span>
                <span className="other-state-name">{CE_DATA[id].name}</span>
                <Icon.ArrowUR size={14}/>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── ONLINE PACKAGES (California) ────────────────────────────
function CEPackages() {
  if (!CE.packages) return null;
  return (
    <section className="section" id="courses">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Online CE Packages</div>
          <h2>Pick the package<br/><span className="gold">for your renewal.</span></h2>
          <p>All California continuing education is completed online through The CE Shop. Choose the option that matches where you are in your license cycle.</p>
        </div>
        <div className="ce-packages-grid reveal">
          {CE.packages.map((p, i) => (
            <div className="ce-package-card" key={i}>
              <div className="ce-package-num">{String(i+1).padStart(2,'0')}</div>
              <h3>{p.title}</h3>
              <p className="ce-package-desc">{p.desc}</p>
              <a className="btn btn-gold" {...ext(p.url)}><Icon.ArrowUR size={14}/> View Courses</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── COURSES (Nevada sample list) ────────────────────────────
function CECourses() {
  if (!CE.courses) return null;
  return (
    <section className="section dark" id="courses">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Sample CE Courses</div>
          <h2>{CE.name} Continuing<br/><span className="gold">Education Classes.</span></h2>
          <p>A sample of the continuing education courses offered at Nevada Real Estate Academy. Browse the full catalog for the complete, current list of classes and dates.</p>
        </div>
        <div className="ce-courses-grid reveal">
          {CE.courses.map((c, i) => (
            <div className="ce-course-card" key={i}>
              <div className="ce-course-top">
                <span className="ce-course-cat">{c.cat}</span>
                <span className="ce-course-hours">{c.hours}</span>
              </div>
              <h3>{c.title}</h3>
              <div className="ce-course-code">{c.code}</div>
              <p className="ce-course-desc">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="ce-courses-foot reveal">
          {CE.fullListUrl && <a className="btn btn-gold" {...ext(CE.fullListUrl)}><Icon.ArrowUR size={14}/> Full CE Class List</a>}
          {CE.ceTrackerUrl && <a className="btn btn-ghost" {...ext(CE.ceTrackerUrl)}><Icon.Check size={14}/> CE Hour Tracker</a>}
        </div>
      </div>
    </section>
  );
}

// ─── LOCATIONS (Nevada) ──────────────────────────────────────
function CELocations() {
  if (!CE.locations) return null;
  return (
    <section className="section" id="locations">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Classroom Locations</div>
          <h2>Three campuses.<br/><span className="gold">Same free CE.</span></h2>
          <p>Live, in-person continuing education across the Las Vegas area. Pick the campus that fits your commute.</p>
        </div>
        <div className="centers-grid reveal">
          {CE.locations.map((c, i) => (
            <a className="center-card" href={c.phoneHref} key={i}>
              <div className="center-num">{String(i+1).padStart(2,'0')}</div>
              <div className="center-tag">Classroom</div>
              <h3>{c.name}</h3>
              <div className="center-addr">
                <div>{c.addr}</div>
                <div>{c.city}</div>
              </div>
              <div className="center-foot">
                <span><Icon.Phone size={13}/> {c.phone}</span>
                <span className="center-arrow"><Icon.ArrowUR size={14}/></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── RENEWAL + RESOURCES ─────────────────────────────────────
function CERenewal() {
  return (
    <section className="section charcoal" id="renewal">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Renewal & Resources</div>
          <h2>Everything you need<br/><span className="gold">to renew.</span></h2>
          <p>Official renewal information from the {CE.name} real estate regulator, plus the online option for finishing your hours on your own schedule.</p>
        </div>
        <div className="ce-resources-grid reveal">
          <div className="ce-resource-card">
            <h3>License Renewal</h3>
            <p>Renewal requirements, cost, and instructions straight from the {CE.name} real estate regulator.</p>
            <div className="ce-resource-links">
              {CE.renewalLinks.map((l, i) => (
                <a className="ce-resource-link" key={i} {...ext(l.url)}>
                  <span className="ce-rl-ic"><Icon.Check size={15}/></span>
                  <span>{l.label}</span>
                  <span className="ce-resource-arrow"><Icon.ArrowUR size={14}/></span>
                </a>
              ))}
            </div>
          </div>
          <div className="ce-resource-card">
            <h3>Complete Your CE Online</h3>
            <p>{CE.onlineNote}</p>
            <div className="ce-resource-links">
              <a className="ce-resource-link" {...ext(CE.onlineUrl)}>
                <span className="ce-rl-ic"><Icon.Online size={15}/></span>
                <span>Explore Online CE Courses & Cost</span>
                <span className="ce-resource-arrow"><Icon.ArrowUR size={14}/></span>
              </a>
              {CE.ceTrackerUrl && (
                <a className="ce-resource-link" {...ext(CE.ceTrackerUrl)}>
                  <span className="ce-rl-ic"><Icon.Check size={15}/></span>
                  <span>Track Your Hours: CE Tracker</span>
                  <span className="ce-resource-arrow"><Icon.ArrowUR size={14}/></span>
                </a>
              )}
            </div>
            <div className="ce-contact">
              {CE.contactName
                ? <>Questions? Contact <strong>{CE.contactName}</strong> at <a href={CE.phoneHref}>{CE.phone}</a>.</>
                : <>Questions? Email <a href={"mailto:" + CE.email}>{CE.email}</a>.</>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FINAL CTA ───────────────────────────────────────────────
function CEFinal() {
  return (
    <section id="register" className="final">
      <div className="final-bg"></div>
      <div className="container reveal">
        <div className="eyebrow" style={{justifyContent:'center', display:'flex'}}>Continuing Education · {CE.name}</div>
        <h2 style={{marginTop: 22}}>
          Keep your license current.<br/>
          <span className="gold">Get started today.</span>
        </h2>
        <p>
          {CE.mode === 'online'
            ? `Complete your ${CE.name} continuing education online, on your schedule, through The CE Shop.`
            : `Check the class calendar, reserve your seat, and complete your ${CE.name} continuing education with Real Estate Academy.`}
        </p>
        <div className="final-ctas">
          {CE.mode === 'online'
            ? <a className="btn btn-gold" {...ceRegisterProps}><Icon.Online size={15}/> Browse Online CE</a>
            : <a className="btn btn-gold" {...ceRegisterProps}><Icon.Calendar size={15}/> View Class Calendar</a>}
          {CE.phone && <a className="btn btn-ghost" href={CE.phoneHref}><Icon.Phone size={15}/> {CE.phone}</a>}
          <a className="btn btn-ghost" href={"mailto:" + CE.email}><Icon.Send size={15}/> {CE.email}</a>
        </div>
      </div>
    </section>
  );
}

window.CEHero = CEHero;
window.CEOtherStates = CEOtherStates;
window.CEPackages = CEPackages;
window.CECourses = CECourses;
window.CELocations = CELocations;
window.CERenewal = CERenewal;
window.CEFinal = CEFinal;
