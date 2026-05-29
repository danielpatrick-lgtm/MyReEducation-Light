// floating.jsx - Sticky mobile CTA bar and live chat bubble

function StickyCTA() {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={"sticky-cta" + (visible ? " visible" : "")}>
      <div className="label">
        Start Your Career Today
        <small>Next class · Jun 14</small>
      </div>
      <a className="btn btn-gold" href="#states" style={{padding:'10px 16px', fontSize:13}}>
        <Icon.Rocket size={13}/> Enroll
      </a>
    </div>
  );
}

function ChatBubble() {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [msgs, setMsgs] = React.useState([
    { from: 'them', text: "Hey 👋 I'm Riley, your enrollment advisor. Which state are you getting licensed in: Arizona, California, or Nevada?" },
  ]);

  const send = () => {
    if (!input.trim()) return;
    const text = input.trim();
    setMsgs(m => [...m, { from: 'me', text }]);
    setInput('');
    setTimeout(() => {
      setMsgs(m => [...m, { from: 'them', text: "Awesome! I'll send class options that fit. What city are you in?" }]);
    }, 900);
  };

  return (
    <>
      <button className="chat-bubble" onClick={() => setOpen(o => !o)} aria-label="Live chat">
        {open ? <Icon.Close size={20}/> : <Icon.Chat size={22}/>}
      </button>
      <div className={"chat-panel" + (open ? " open" : "")}>
        <div className="chat-head">
          <div className="av">R</div>
          <div style={{flex:1}}>
            <div className="who">Riley · Enrollment Advisor</div>
            <div className="status">Online · replies in ~2 min</div>
          </div>
        </div>
        <div className="chat-msgs">
          {msgs.map((m, i) => (
            <div key={i} className={"chat-msg" + (m.from === 'me' ? ' me' : '')}>{m.text}</div>
          ))}
        </div>
        <div className="chat-input">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send()}
            placeholder="Ask anything…"
          />
          <button onClick={send}><Icon.Send size={14}/></button>
        </div>
      </div>
    </>
  );
}

window.StickyCTA = StickyCTA;
window.ChatBubble = ChatBubble;
