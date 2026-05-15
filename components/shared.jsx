// NJS Home Solutions — Shared bits & icons

const Icon = {
  Arrow: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  ),
  ArrowUR: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="18" x2="18" y2="6" />
      <polyline points="9 6 18 6 18 15" />
    </svg>
  ),
  Phone: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 2.06 4.18 2 2 0 0 1 4.05 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Mail: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  ),
  Pin: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Star: ({ size = 14, filled = true }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Bath: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 16h24v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-4z" />
      <path d="M8 16V8a3 3 0 0 1 6 0" />
      <line x1="11" y1="9" x2="14" y2="9" />
      <line x1="7" y1="26" x2="7" y2="28" />
      <line x1="25" y1="26" x2="25" y2="28" />
    </svg>
  ),
  Kitchen: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="4" width="22" height="24" rx="2" />
      <line x1="5" y1="12" x2="27" y2="12" />
      <line x1="16" y1="4" x2="16" y2="12" />
      <circle cx="10" cy="8" r="0.8" fill="currentColor" />
      <circle cx="22" cy="8" r="0.8" fill="currentColor" />
      <rect x="9" y="16" width="14" height="8" rx="1" />
      <line x1="9" y1="20" x2="23" y2="20" />
    </svg>
  ),
  House: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14 16 4l12 10v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V14z" />
      <path d="M12 30V18h8v12" />
    </svg>
  ),
  Quote: ({ size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor">
      <path d="M9 8C5.5 9.5 4 12 4 16h4v8H4v-8c0-5 2-9 5-10v2zm14 0c-3.5 1.5-5 4-5 8h4v8h-4v-8c0-5 2-9 5-10v2z" opacity="0.18"/>
    </svg>
  ),
  Menu: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <line x1="4" y1="8" x2="20" y2="8" />
      <line x1="4" y1="16" x2="20" y2="16" />
    </svg>
  ),
};

// Tiny logo mark — house with N
function LogoMark({ size = 36, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M6 22 L24 6 L42 22 L42 42 L6 42 Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
      <path d="M16 34 L16 22 L32 34 L32 22" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

function Wordmark({ color, accent, sub = true, onDark = false, size = 52 }) {
  return (
    <div style={{display:"flex", alignItems:"center", gap:14}}>
      <img
        src="assets/njs-logo.png"
        alt="NJS Home Solutions"
        style={{
          height: size,
          width: "auto",
          display: "block",
          filter: onDark ? "brightness(0) invert(1)" : "none",
        }}
      />
      {sub && (
        <div style={{
          fontSize:10,
          letterSpacing:"0.22em",
          textTransform:"uppercase",
          color: onDark ? "rgba(245,240,230,0.55)" : "var(--muted)",
          lineHeight: 1.3,
          paddingLeft: 14,
          borderLeft: `1px solid ${onDark ? "rgba(245,240,230,0.2)" : "var(--rule)"}`,
        }}>
          Hampton Roads<br/>Est. 2017
        </div>
      )}
    </div>
  );
}

Object.assign(window, { Icon, LogoMark, Wordmark });
