// get-licensed-app.jsx - App for the Get Licensed page

function GLApp() {
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
      <GLHero/>
      <OtherStates/>
      <Centers/>
      <Courses/>
      <Tuition/>
      <Reimbursement/>
      <SelfPaced/>
      <GLFinal/>
      <Footer/>
      <StickyCTA/>
      <ChatBubble/>
      <CareerQuiz/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<GLApp/>);
