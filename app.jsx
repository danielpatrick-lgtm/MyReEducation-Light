// app.jsx - Main App entry

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#1C7FA6",
  "heroTone": "warm",
  "headlineFont": "Montserrat",
  "showStickyCTA": true,
  "showChatBubble": true,
  "italicAccent": true,
  "density": "regular"
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = ['#1C7FA6', '#2F97BF', '#00567A', '#7A0A45', '#004B45'];
const HERO_TONES = ['warm', 'cool', 'noir'];
const FONT_OPTIONS = ['Montserrat', 'Playfair Display', 'Space Grotesk', 'DM Serif Display'];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks live via CSS variables
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--gold', t.accent);

    // Derive gold-soft & gold-deep from accent
    const accent = t.accent;
    root.style.setProperty('--gold-soft', shade(accent, 12));
    root.style.setProperty('--gold-deep', shade(accent, -20));

    // Hero tone
    const toneMap = {
      warm:  '#F2F4F1',
      cool:  '#EEF3F4',
      noir:  '#ECEEEC',
    };
    root.style.setProperty('--bg-black', toneMap[t.heroTone] || '#F2F4F1');

    // Italic accent toggle
    document.querySelectorAll('.gold').forEach(el => {
      el.style.fontStyle = t.italicAccent ? 'italic' : 'normal';
      el.style.fontWeight = t.italicAccent ? '500' : '700';
    });

    // Headline font
    const headlineEls = document.querySelectorAll('h1, h2, h3, .display, .logo');
    headlineEls.forEach(el => {
      el.style.fontFamily = `"${t.headlineFont}", "Montserrat", sans-serif`;
    });
  }, [t.accent, t.heroTone, t.italicAccent, t.headlineFont]);

  // Reveal-on-scroll
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
      <Hero/>
      <StatePicker/>
      <WhySection/>
      <HowSection/>
      <StoriesSection/>
      <LearningSection/>
      <FinalCTA/>
      <Footer/>

      {t.showStickyCTA && <StickyCTA/>}
      {t.showChatBubble && <ChatBubble/>}
      <CareerQuiz/>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Brand"/>
        <TweakColor label="Accent" value={t.accent}
          options={ACCENT_OPTIONS}
          onChange={(v) => setTweak('accent', v)} />
        <TweakRadio label="Hero tone" value={t.heroTone}
          options={HERO_TONES}
          onChange={(v) => setTweak('heroTone', v)} />

        <TweakSection label="Typography"/>
        <TweakSelect label="Headline font" value={t.headlineFont}
          options={FONT_OPTIONS}
          onChange={(v) => setTweak('headlineFont', v)} />
        <TweakToggle label="Italic accent words" value={t.italicAccent}
          onChange={(v) => setTweak('italicAccent', v)} />

        <TweakSection label="Conversion UI"/>
        <TweakToggle label="Sticky mobile CTA" value={t.showStickyCTA}
          onChange={(v) => setTweak('showStickyCTA', v)} />
        <TweakToggle label="Live chat bubble" value={t.showChatBubble}
          onChange={(v) => setTweak('showChatBubble', v)} />
      </TweaksPanel>
    </>
  );
}

// Lighten/darken hex by percent
function shade(hex, percent) {
  const num = parseInt(hex.replace('#', ''), 16);
  let r = (num >> 16) + Math.round(255 * percent / 100);
  let g = ((num >> 8) & 0xff) + Math.round(255 * percent / 100);
  let b = (num & 0xff) + Math.round(255 * percent / 100);
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
