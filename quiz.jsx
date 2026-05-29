// quiz.jsx - Career Match Quiz modal
// 5 questions, 4 career archetypes, lightweight scoring.

const QUIZ_QUESTIONS = [
  {
    q: "Pick your ideal Saturday in real estate.",
    a: [
      { label: "Back-to-back open houses across the valley",         type: 'closer' },
      { label: "A private showing for one high-end client",          type: 'luxury' },
      { label: "Touring a 4-unit you're underwriting for a flip",    type: 'investor' },
      { label: "Coffee with a new agent you're mentoring",           type: 'builder' },
    ],
  },
  {
    q: "What energizes you the most?",
    a: [
      { label: "The hunt: new buyers, new listings, new deals",     type: 'closer' },
      { label: "Curating a beautiful brand and lifestyle",           type: 'luxury' },
      { label: "Spotting a deal everyone else missed",               type: 'investor' },
      { label: "Building a system that runs without you",            type: 'builder' },
    ],
  },
  {
    q: "Your ideal client looks like…",
    a: [
      { label: "First-time buyers, lots of them",                   type: 'closer' },
      { label: "A returning client buying their third home",         type: 'luxury' },
      { label: "A landlord growing their rental portfolio",          type: 'investor' },
      { label: "A new agent who wants to learn from you",            type: 'builder' },
    ],
  },
  {
    q: "Your biggest strength is…",
    a: [
      { label: "Hustle and follow-through",                          type: 'closer' },
      { label: "Taste, presentation, and presence",                  type: 'luxury' },
      { label: "Numbers, math, and negotiation",                     type: 'investor' },
      { label: "Mentorship, systems, and structure",                 type: 'builder' },
    ],
  },
  {
    q: "Five years from now, you want to be…",
    a: [
      { label: "The top producer at your brokerage",                 type: 'closer' },
      { label: "The agent celebrities and execs call first",         type: 'luxury' },
      { label: "Owning your own rental portfolio",                   type: 'investor' },
      { label: "Running your own team or brokerage",                 type: 'builder' },
    ],
  },
];

const ARCHETYPES = {
  closer: {
    name: "The Closer",
    accent: "Volume.",
    blurb: "You're built for momentum: high transaction count, fast follow-up, and the discipline to keep your pipeline full. Most Closers hit six figures inside their first 18 months.",
    track: "Online + In-Person Hybrid",
    why: "Maximum class density, role-play practice, and weekly cold-call coaching.",
  },
  luxury: {
    name: "The Luxury Specialist",
    accent: "Presence.",
    blurb: "You think in brand, taste, and long-term relationships. Luxury Specialists win fewer, bigger deals, and become the agent a generation of clients refer to.",
    track: "In-Person Experience",
    why: "Networking-first cohorts, branding workshops, and brokerage introductions in Vegas + Reno.",
  },
  investor: {
    name: "The Investor's Agent",
    accent: "Numbers.",
    blurb: "You see deals before they exist: cap rates, ARV, comps, and creative financing. You'll work with flippers, landlords, and multifamily operators across the Southwest's fastest-growing markets.",
    track: "Virtual Cohort",
    why: "Live deal-analysis labs, state-specific landlord-law modules, and direct mentorship from active investor-agents.",
  },
  builder: {
    name: "The Team Builder",
    accent: "Leverage.",
    blurb: "You don't just want to close. You want to scale. Team Builders open teams, recruit agents, and eventually own brokerages. Your edge is systems, mentorship, and patience.",
    track: "In-Person + Coaching Series",
    why: "Operator-track curriculum, leadership coaching, and a fast-pass to the Rick Berube Coaching Series.",
  },
};

// Leads are delivered here. FormSubmit requires a ONE-TIME activation:
// the first submission triggers a confirmation email to this address —
// click the link in it once and every future lead lands in the inbox.
const LEAD_EMAIL = 'education@bhhsv2.com';
const LEAD_ENDPOINT = 'https://formsubmit.co/ajax/' + LEAD_EMAIL;

function CareerQuiz() {
  const [open, setOpen] = React.useState(false);
  const [step, setStep]       = React.useState(0);   // 0..QUIZ_QUESTIONS.length (last = result)
  const [answers, setAnswers] = React.useState([]);  // array of types
  const isResult = step >= QUIZ_QUESTIONS.length;

  // Lead-capture form state
  const [lead, setLead]     = React.useState({ name: '', email: '', phone: '' });
  const [sending, setSending] = React.useState(false);
  const [sent, setSent]       = React.useState(false);
  const [sendError, setSendError] = React.useState('');

  const resetLead = () => {
    setLead({ name: '', email: '', phone: '' });
    setSending(false); setSent(false); setSendError('');
  };

  const onClose = React.useCallback(() => setOpen(false), []);

  // Open via global event dispatched from any "Take the Quiz" button
  React.useEffect(() => {
    const onOpen = () => { setStep(0); setAnswers([]); resetLead(); setOpen(true); };
    window.addEventListener('open-career-quiz', onOpen);
    return () => window.removeEventListener('open-career-quiz', onOpen);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const pick = (type) => {
    setAnswers(a => [...a, type]);
    setStep(s => s + 1);
  };

  const goBack = () => {
    if (step === 0) return;
    setAnswers(a => a.slice(0, -1));
    setStep(s => s - 1);
  };

  const computeWinner = () => {
    const counts = { closer: 0, luxury: 0, investor: 0, builder: 0 };
    answers.forEach(t => { counts[t]++; });
    let winner = 'closer', max = -1;
    // Iterate in question-encounter order so ties resolve to whichever appeared first
    answers.forEach(t => {
      if (counts[t] > max) { max = counts[t]; winner = t; }
    });
    return ARCHETYPES[winner];
  };

  const submitLead = async (archetype) => {
    if (sending) return;
    const email = lead.email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSendError('Please enter a valid email address.');
      return;
    }
    setSending(true); setSendError('');
    try {
      const res = await fetch(LEAD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: `New Career Quiz lead — ${archetype.name}`,
          name: lead.name.trim() || '(not provided)',
          email,
          phone: lead.phone.trim() || '(not provided)',
          quiz_result: archetype.name,
          recommended_track: archetype.track,
          source: 'Career Match Quiz',
        }),
      });
      if (!res.ok) throw new Error('Bad response');
      setSent(true);
    } catch (err) {
      setSendError('Something went wrong — please try again, or email us directly.');
    } finally {
      setSending(false);
    }
  };

  const progress = isResult ? 1 : (step / QUIZ_QUESTIONS.length);

  return (
    <div className="quiz-modal-backdrop" onClick={onClose}>
      <div className="quiz-modal" onClick={e => e.stopPropagation()}>
        <button className="quiz-close" onClick={onClose} aria-label="Close">
          <Icon.Close size={18}/>
        </button>

        <div className="quiz-progress">
          <div className="quiz-progress-bar" style={{ width: `${progress * 100}%` }}/>
        </div>

        <div className="quiz-meta">
          <div className="eyebrow">Career Match Quiz</div>
          <div className="quiz-step">
            {isResult ? 'Your Match' : `Question ${step + 1} of ${QUIZ_QUESTIONS.length}`}
          </div>
        </div>

        {!isResult && (
          <div className="quiz-body">
            <h3 className="quiz-q">{QUIZ_QUESTIONS[step].q}</h3>
            <div className="quiz-answers">
              {QUIZ_QUESTIONS[step].a.map((a, i) => (
                <button key={i} className="quiz-answer" onClick={() => pick(a.type)}>
                  <span className="quiz-answer-ix">{String.fromCharCode(65 + i)}</span>
                  <span className="quiz-answer-label">{a.label}</span>
                  <span className="quiz-answer-arrow"><Icon.Arrow size={14}/></span>
                </button>
              ))}
            </div>
            <div className="quiz-foot">
              <button className="quiz-back" onClick={goBack} disabled={step === 0}>
                ← Back
              </button>
              <div className="quiz-dots">
                {QUIZ_QUESTIONS.map((_, i) => (
                  <span key={i} className={"quiz-dot" + (i < step ? ' done' : i === step ? ' active' : '')}/>
                ))}
              </div>
            </div>
          </div>
        )}

        {isResult && (() => {
          const r = computeWinner();
          return (
            <div className="quiz-result">
              <div className="quiz-result-label">You match with</div>
              <h2 className="quiz-result-name">
                {r.name.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="gold">{r.name.split(' ').slice(-1)}</span>
              </h2>
              <div className="quiz-result-tag gold">{r.accent}</div>
              <p className="quiz-result-blurb">{r.blurb}</p>

              <div className="quiz-result-track">
                <div className="quiz-result-track-label">Recommended Track</div>
                <div className="quiz-result-track-name">{r.track}</div>
                <div className="quiz-result-track-why">{r.why}</div>
              </div>

              {!sent ? (
                <form className="quiz-lead" onSubmit={(e) => { e.preventDefault(); submitLead(r); }}>
                  <div className="quiz-lead-head">
                    <Icon.Mail size={15}/>
                    <span>Get your full match report + next steps emailed to you</span>
                  </div>
                  <div className="quiz-lead-fields">
                    <input
                      className="quiz-input" type="text" placeholder="Full name"
                      value={lead.name} autoComplete="name"
                      onChange={e => setLead(l => ({ ...l, name: e.target.value }))}
                    />
                    <input
                      className="quiz-input" type="email" placeholder="Email address" required
                      value={lead.email} autoComplete="email"
                      onChange={e => { setLead(l => ({ ...l, email: e.target.value })); setSendError(''); }}
                    />
                    <input
                      className="quiz-input" type="tel" placeholder="Phone (optional)"
                      value={lead.phone} autoComplete="tel"
                      onChange={e => setLead(l => ({ ...l, phone: e.target.value }))}
                    />
                  </div>
                  {sendError && <div className="quiz-lead-error">{sendError}</div>}
                  <button type="submit" className="btn btn-gold quiz-lead-submit" disabled={sending}>
                    {sending ? 'Sending…' : <><Icon.Mail size={14}/> Send Me My Results</>}
                  </button>
                  <div className="quiz-lead-fine">
                    We'll send your match report and a few next steps. No spam — unsubscribe anytime.
                  </div>
                </form>
              ) : (
                <div className="quiz-lead-success">
                  <div className="quiz-lead-success-check"><Icon.Check size={20}/></div>
                  <div className="quiz-lead-success-title">You're all set, {lead.name.trim().split(' ')[0] || 'future agent'}!</div>
                  <div className="quiz-lead-success-text">
                    Your <strong>{r.name}</strong> match report is on its way. An advisor will reach out about your <strong>{r.track}</strong> track.
                  </div>
                </div>
              )}

              <div className="quiz-result-ctas">
                <a className="btn btn-gold" href="#states" onClick={onClose}>
                  <Icon.Rocket size={14}/> Start This Track
                </a>
                <button className="btn btn-ghost" onClick={() => { setStep(0); setAnswers([]); }}>
                  Retake Quiz
                </button>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}

window.CareerQuiz = CareerQuiz;
