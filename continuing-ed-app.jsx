// continuing-ed-app.jsx - App for the Continuing Education page

function CEApp() {
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
      <CEHero/>
      <CEOtherStates/>
      <CEPackages/>
      <CECourses/>
      <CELocations/>
      <CERenewal/>
      <CEFinal/>
      <Footer/>
      <StickyCTA/>
      <ChatBubble/>
      <CareerQuiz/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CEApp/>);
