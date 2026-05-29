// icons.jsx - lightweight inline SVG icons (no emojis)
const Ico = ({ d, size = 18, fill = "none", sw = 1.8 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" className="ico">
    {Array.isArray(d) ? d.map((p, i) => <path key={i} d={p} />) : <path d={d} />}
  </svg>
);

const Icon = {
  Rocket:    (p) => <Ico {...p} d={["M4.5 16.5l3 3", "M9 12l3 3", "M14.5 4.5c2 0 4.5 2 4.5 4.5L9 19l-4-4 9.5-10.5z", "M14 9a1 1 0 100-2 1 1 0 000 2z"]} />,
  Calendar:  (p) => <Ico {...p} d={["M3 8h18", "M5 4h14a2 2 0 012 2v13a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z", "M8 2v4", "M16 2v4"]} />,
  Play:      (p) => <Ico {...p} d={"M8 5v14l11-7-11-7z"} fill="currentColor" sw={0} />,
  PlaySm:    (p) => <Ico {...p} d={"M8 5v14l11-7-11-7z"} fill="currentColor" sw={0} />,
  Cash:      (p) => <Ico {...p} d={["M12 2v20", "M16 6H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6"]} />,
  Clock:     (p) => <Ico {...p} d={["M12 7v5l3 2"]} ><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" fill="none"/></Ico>,
  Home:      (p) => <Ico {...p} d={["M3 11l9-8 9 8", "M5 10v10h14V10"]} />,
  Online:    (p) => <Ico {...p} d={["M3 5h18v12H3z", "M8 21h8", "M12 17v4"]} />,
  Virtual:   (p) => <Ico {...p} d={["M15 10l5-3v10l-5-3", "M3 7h12v10H3z"]} />,
  Inperson:  (p) => <Ico {...p} d={["M3 21V8l9-5 9 5v13", "M9 21v-7h6v7"]} />,
  Arrow:     (p) => <Ico {...p} d={["M5 12h14", "M13 5l7 7-7 7"]} />,
  ArrowUR:   (p) => <Ico {...p} d={["M7 17L17 7", "M8 7h9v9"]} />,
  Check:     (p) => <Ico {...p} d={"M5 13l4 4L19 7"} />,
  Phone:     (p) => <Ico {...p} d={"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0122 16.92z"} />,
  Chat:      (p) => <Ico {...p} d={"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"} />,
  Send:      (p) => <Ico {...p} d={["M22 2L11 13", "M22 2l-7 20-4-9-9-4 20-7z"]} />,
  Star:      (p) => <Ico {...p} d={"M12 2l3 7h7l-5.5 4.5L18 21l-6-4.5L6 21l1.5-7.5L2 9h7l3-7z"} fill="currentColor" sw={0} />,
  Sparkle:   (p) => <Ico {...p} d={"M12 3 L13.6 10.4 L21 12 L13.6 13.6 L12 21 L10.4 13.6 L3 12 L10.4 10.4 Z"} fill="currentColor" sw={0} />,
  Instagram: (p) => <Ico {...p} d={["M16.5 7.5h.01"]}><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" fill="none" strokeWidth="1.8"/><circle cx="12" cy="12" r="4" stroke="currentColor" fill="none" strokeWidth="1.8"/></Ico>,
  TikTok:    (p) => <Ico {...p} d={"M19 8.5a6 6 0 01-4-1.5V16a5 5 0 11-5-5v3a2 2 0 102 2V2h2a4 4 0 005 4v2.5z"} />,
  Map:       (p) => <Ico {...p} d={["M1 6v15l7-3 8 3 7-3V3l-7 3-8-3-7 3z", "M8 3v15", "M16 6v15"]} />,
  Users:     (p) => <Ico {...p} d={["M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2", "M23 21v-2a4 4 0 00-3-3.87", "M16 3.13a4 4 0 010 7.75"]}><circle cx="9" cy="7" r="4" stroke="currentColor" fill="none" strokeWidth="1.8"/></Ico>,
  Menu:      (p) => <Ico {...p} d={["M3 12h18", "M3 6h18", "M3 18h18"]} />,
  Close:     (p) => <Ico {...p} d={["M18 6L6 18", "M6 6l12 12"]} />,
  Mail:      (p) => <Ico {...p} d={["M3 6h18v12H3z", "M3 7l9 6 9-6"]} />,
  Plus:      (p) => <Ico {...p} d={["M12 5v14", "M5 12h14"]} />,
};

window.Icon = Icon;
