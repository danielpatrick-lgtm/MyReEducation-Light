// sections.jsx - Sections 2-8: Why, How, Stories, Coaching, Learning, Community, Final CTA

// ─── SECTION 2 ──────────────────────────────────────────────
function WhySection() {
  return (
    <section id="why" className="section">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Why Real Estate</div>
          <h2>More Freedom.<br/>More Opportunity.<br/><span className="gold">More Potential.</span></h2>
          <p>Real estate isn't just a career. It's a platform. Build wealth, set your own hours, and become the operator behind your own brand.</p>
        </div>

        <div className="why-grid reveal">
          <div className="why-card">
            <image-slot id="why-income"
              class="why-card-bg"
              shape="rect"
              src="assets/why-income.jpg"
              placeholder="Drop a photo: luxury home, agent at closing, sold sign"></image-slot>
            <div className="why-card-overlay"></div>
            <div className="why-card-content">
              <div className="num">01 / INCOME POTENTIAL</div>
              <h3>Build a career with unlimited earning potential.</h3>
              <p>Top agents close $20M+ in volume yearly. Commissions scale with effort, not a fixed salary cap.</p>
            </div>
          </div>
          <div className="why-card">
            <image-slot id="why-flex"
              class="why-card-bg"
              shape="rect"
              src="assets/why-flex.jpg"
              placeholder="Drop a photo: laptop at café, agent on phone, working anywhere"></image-slot>
            <div className="why-card-overlay"></div>
            <div className="why-card-content">
              <div className="num">02 / FLEXIBILITY</div>
              <h3>Create a schedule that fits your life.</h3>
              <p>Work from your phone, run open houses Saturdays, take Tuesdays off. The market never closes, but you set the hours.</p>
            </div>
          </div>
          <div className="why-card">
            <image-slot id="why-entrep"
              class="why-card-bg"
              shape="rect"
              src="assets/why-entrep.jpg"
              placeholder="Drop a photo: confident agent, branded materials, modern workspace"></image-slot>
            <div className="why-card-overlay"></div>
            <div className="why-card-content">
              <div className="num">03 / ENTREPRENEURIAL LIFESTYLE</div>
              <h3>Become your own brand. Build something for yourself.</h3>
              <p>Every agent is a small business. We teach the marketing, systems, and mindset to scale yours from day one.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 3 ──────────────────────────────────────────────
function HowSection() {
  const [style, setStyle] = React.useState('Online');
  return (
    <section id="how" className="section dark">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">How It Works</div>
          <h2>Get Licensed in<br/><span className="gold">3 Simple Steps.</span></h2>
          <p>No mystery. No 6-month commitment. Most students finish coursework and pass the state exam in under 60 days.</p>
        </div>

        <div className="steps reveal">
          <div className="step">
            <div className="step-num">01</div>
            <h3>Choose Your Learning Style</h3>
            <p>Pick the format that matches how you actually learn, and your weekly bandwidth.</p>
            <div className="style-pills">
              {['Online', 'Virtual', 'In-Person'].map(s => (
                <button key={s} className={"style-pill" + (style === s ? " active" : "")} onClick={() => setStyle(s)}>
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <h3>Complete Your Coursework</h3>
            <p>Learn from licensed in-state instructors and active industry professionals. Track your progress in a clean dashboard built for working adults.</p>
            <div className="style-pills">
              <span className="style-pill" style={{cursor:'default'}}>90 hours pre-license</span>
            </div>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <h3>Pass Your Exam & Launch</h3>
            <p>Get exam prep, mock tests, and 1-on-1 coaching beyond the classroom. We help you choose a brokerage and land your first deal.</p>
            <div className="style-pills">
              <span className="style-pill" style={{cursor:'default', borderColor:'var(--gold)', color:'var(--gold)'}}>92% first-time pass rate</span>
            </div>
          </div>
        </div>

        <div className="steps-cta reveal">
          <a className="btn btn-gold" href="#states"><Icon.Check size={15}/> Start Today</a>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 4 - TESTIMONIALS + QUIZ STRIP ──────────────
const TESTIMONIALS = [
  {
    quote: "These classes showed me how to use scripts and gave me the confidence to feel professionally prepared and able to handle objections during a buyer or seller presentation.",
    name: "C. Lewis",
    initials: "CL",
  },
  {
    quote: "I think the course is outstanding and greatly appreciate your knowledge and experience. I consider the course to be a Master's Degree in Business Administration with a real estate concentration.",
    name: "B. Sandeen",
    initials: "BS",
  },
  {
    quote: "I know I will have to come to class again as I implement the steps and lessons I learned! These classes showed me how much more I can do to be successful.",
    name: "L. Zook",
    initials: "LZ",
  },
];

function StoriesSection() {
  return (
    <section id="stories" className="section">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Student Testimonials</div>
          <h2>What our students<br/><span className="gold">have to say.</span></h2>
        </div>

        <div className="testimonials reveal">
          {TESTIMONIALS.map((t, i) => (
            <figure className="testimonial" key={i}>
              <div className="testimonial-mark" aria-hidden="true">&ldquo;</div>
              <blockquote className="testimonial-quote">{t.quote}</blockquote>
              <figcaption className="testimonial-attr">
                <div className="testimonial-av">{t.initials}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">Real Estate Academy Student</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Career Match Quiz strip */}
        <div className="quiz reveal">
          <div>
            <div className="eyebrow" style={{marginBottom: 12}}>Career Match Quiz</div>
            <h3>What type of real estate career fits you?</h3>
            <p>5 questions, 90 seconds. We'll match you with a learning track and a coach.</p>
          </div>
          <button
            className="btn btn-gold"
            onClick={() => window.dispatchEvent(new CustomEvent('open-career-quiz'))}
          >
            <Icon.Sparkle size={14}/> Take the Quiz
          </button>
        </div>
      </div>
    </section>
  );
}

window.WhySection = WhySection;
window.HowSection = HowSection;
window.StoriesSection = StoriesSection;
