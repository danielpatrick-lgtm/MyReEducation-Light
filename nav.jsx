// nav.jsx - Top nav

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close on Escape
  React.useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Detect whether we're on the home page so anchor links work both ways
  const onHome = typeof window !== 'undefined' &&
    /(?:index|Real Estate Academy)\.html$|^\/?$/.test(window.location.pathname);
  const home = (hash) => onHome ? hash : "index.html" + hash;

  const close = () => setMenuOpen(false);

  const links = [
    { href: home("#why"),    label: "Why Real Estate" },
    { href: home("#how"),    label: "How It Works" },
    { href: home("#states"), label: "Classes" },
    { href: "Property Management.html", label: "Property Management" },
  ];

  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="container nav-inner">
        <a href="index.html" className="logo">
          <img src="assets/logo.png" alt="Real Estate Academy" className="logo-img"/>
        </a>
        <div className="nav-links">
          {links.map(l => <a key={l.label} href={l.href}>{l.label}</a>)}
        </div>
        <a href={home("#states")} className="btn btn-gold nav-cta" style={{padding:'12px 20px'}}>
          <Icon.Rocket size={15}/> Get Licensed
        </a>

        <button
          className={"nav-burger" + (menuOpen ? " open" : "")}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className={"nav-mobile" + (menuOpen ? " open" : "")} onClick={close}>
        <div className="nav-mobile-panel" onClick={e => e.stopPropagation()}>
          <div className="nav-mobile-links">
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={close}>
                <span>{l.label}</span>
                <Icon.ArrowUR size={14}/>
              </a>
            ))}
          </div>
          <a href={home("#states")} className="btn btn-gold nav-mobile-cta" onClick={close}>
            <Icon.Rocket size={15}/> Get Licensed
          </a>
        </div>
      </div>
    </nav>
  );
}

window.Nav = Nav;
