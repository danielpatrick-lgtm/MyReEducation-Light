// nav.jsx - Top nav

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [ceOpen, setCeOpen] = React.useState(false);      // desktop dropdown
  const [ceMobileOpen, setCeMobileOpen] = React.useState(false); // mobile accordion
  const ceTimer = React.useRef(null);

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
    if (!menuOpen && !ceOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') { setMenuOpen(false); setCeOpen(false); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen, ceOpen]);

  // Detect whether we're on the home page so anchor links work both ways
  const onHome = typeof window !== 'undefined' &&
    /(?:index|Real Estate Academy)\.html$|^\/?$/.test(window.location.pathname);
  const home = (hash) => onHome ? hash : "index.html" + hash;

  const close = () => { setMenuOpen(false); setCeMobileOpen(false); };

  const links = [
    { href: home("#why"),    label: "Why Real Estate" },
    { href: home("#how"),    label: "How It Works" },
    { href: home("#states"), label: "Classes" },
  ];

  const ceLinks = [
    { href: "Continuing Education Arizona.html",    label: "Arizona" },
    { href: "Continuing Education California.html", label: "California" },
    { href: "Continuing Education Nevada.html",     label: "Nevada" },
  ];

  // Desktop dropdown open/close with a small close delay so the cursor can
  // travel from the trigger to the panel without it snapping shut.
  const openCe  = () => { clearTimeout(ceTimer.current); setCeOpen(true); };
  const closeCe = () => { ceTimer.current = setTimeout(() => setCeOpen(false), 140); };

  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="container nav-inner">
        <a href="index.html" className="logo">
          <img src="assets/logo.png" alt="Real Estate Academy" className="logo-img"/>
        </a>
        <div className="nav-links">
          {links.map(l => <a key={l.label} href={l.href} className="nav-primary">{l.label}</a>)}

          <div
            className={"nav-dropdown nav-muted" + (ceOpen ? " open" : "")}
            onMouseEnter={openCe}
            onMouseLeave={closeCe}
          >
            <button
              className="nav-dropdown-trigger"
              aria-haspopup="true"
              aria-expanded={ceOpen}
              onClick={() => setCeOpen(o => !o)}
            >
              Continuing Education
              <svg className="nav-chev" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div className="nav-dropdown-panel" role="menu">
              {ceLinks.map(l => (
                <a key={l.label} href={l.href} role="menuitem">
                  <span>{l.label}</span>
                  <Icon.ArrowUR size={13}/>
                </a>
              ))}
            </div>
          </div>

          <a href="Property Management.html" className="nav-muted">Property Management</a>
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

            <button
              className={"nav-mobile-acc" + (ceMobileOpen ? " open" : "")}
              onClick={() => setCeMobileOpen(o => !o)}
              aria-expanded={ceMobileOpen}
            >
              <span>Continuing Education</span>
              <svg className="nav-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div className={"nav-mobile-sub" + (ceMobileOpen ? " open" : "")}>
              {ceLinks.map(l => (
                <a key={l.label} href={l.href} onClick={close}>
                  <span>{l.label}</span>
                  <Icon.ArrowUR size={13}/>
                </a>
              ))}
            </div>

            <a href="Property Management.html" onClick={close}>
              <span>Property Management</span>
              <Icon.ArrowUR size={14}/>
            </a>
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
