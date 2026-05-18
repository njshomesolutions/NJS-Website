// NJS — Gallery, Testimonials, Service Area, Contact, Footer

const PROJECTS = [
{ id: "p1", name: "Coastal Master Bath", city: "Virginia Beach", cat: "Bathroom", year: "2025", note: "Wet-room shower · honed marble · brass", img: "assets/baño 1.png" },
{ id: "p2", name: "Open Galley Kitchen", city: "Norfolk", cat: "Kitchen", year: "2025", note: "Wall removed · quartz · custom oak", img: "assets/cocina 3.png" },
{ id: "p3", name: "Wraparound Porch Refresh", city: "Williamsburg", cat: "Exterior", year: "2024", note: "New decking · trim · paint", img: "assets/exterior 3.png" },
{ id: "p4", name: "Guest Bath Refresh", city: "Hampton", cat: "Bathroom", year: "2024", note: "Tile-to-ceiling · floating vanity", img: "assets/baño 2.png" },
{ id: "p5", name: "Family Kitchen Reset", city: "Chesapeake", cat: "Kitchen", year: "2024", note: "Island · pantry · range hood", img: "assets/cocina 4.png" },
{ id: "p6", name: "Front Elevation", city: "Yorktown", cat: "Exterior", year: "2023", note: "Hardie siding · new entry", img: "assets/exterior 1.png" }];


function Gallery() {
  const [filter, setFilter] = React.useState("All");
  const cats = ["All", "Bathroom", "Kitchen", "Exterior"];
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  return (
    <section id="work" style={{ background: "var(--cream)" }}>
      <div className="container-wide">
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "end",
          marginBottom: 56, flexWrap: "wrap", gap: 24
        }}>
          <div style={{ maxWidth: 700 }}>
            <span className="eyebrow">Selected work</span>
            <h2 className="h-section" style={{ marginTop: 24 }}>
              Recent projects across <em>the 757.</em>
            </h2>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {cats.map((c) =>
            <button key={c} onClick={() => setFilter(c)} style={{
              padding: "10px 18px",
              borderRadius: 999,
              border: `1px solid ${filter === c ? "var(--ink)" : "var(--rule)"}`,
              background: filter === c ? "var(--ink)" : "transparent",
              color: filter === c ? "var(--cream)" : "var(--ink)",
              fontSize: 13,
              fontFamily: "inherit",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}>{c}</button>
            )}
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridAutoRows: "minmax(280px, auto)",
          gap: 24
        }} className="gallery-grid">
          {filtered.map((p, i) => {
            const span = i % 5 === 0 ? 7 : i % 5 === 1 ? 5 : i % 5 === 2 ? 5 : i % 5 === 3 ? 7 : 6;
            const rows = i % 5 === 0 || i % 5 === 3 ? 2 : 1;
            return (
              <a key={p.id} href="#" style={{
                gridColumn: `span ${span}`,
                gridRow: `span ${rows}`,
                position: "relative",
                overflow: "hidden",
                background: "var(--paper-warm)",
                textDecoration: "none",
                color: "var(--ink)",
                display: "block",
                minHeight: rows === 2 ? 580 : 280
              }} className="project-card">
                <img
                  src={p.img}
                  alt={p.name}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(20,32,43,0) 50%, rgba(20,32,43,0.85) 100%)",
                  pointerEvents: "none"
                }}></div>
                <div style={{
                  position: "absolute",
                  top: 20, left: 20,
                  background: "var(--cream)",
                  color: "var(--ink)",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  padding: "6px 12px",
                  fontWeight: 500
                }}>{p.cat}</div>
                <div style={{
                  position: "absolute",
                  bottom: 24, right: 24,
                  width: 44, height: 44, borderRadius: "50%",
                  border: "1px solid rgba(245,240,230,0.7)",
                  background: "rgba(20,32,43,0.35)",
                  color: "var(--cream)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  backdropFilter: "blur(4px)"
                }}>
                  <Icon.ArrowUR size={16} />
                </div>
              </a>);
          })}
        </div>
      </div>
    </section>);
}

/*
const TESTIMONIALS = [
{ quote: "From the first walk-through to the final clean, this team showed up like the project was their own home. The bathroom looks like a magazine, but more than that, the experience was just easy.", name: "Lauren & Mike P.", project: "Master bath · Virginia Beach", rating: 5 },
{ quote: "We've been through two renovations before. NJS is the first crew that actually finished when they said they would, with no surprise costs and a punch list of zero by week's end.", name: "David R.", project: "Kitchen remodel · Norfolk", rating: 5 },
{ quote: "Our porch was rotting and we were dreading the project. They made it painless. The team was respectful with our kids around and the porch looks better than the day we bought the house.", name: "The Carter Family", project: "Wraparound porch · Williamsburg", rating: 5 }];

function Testimonials() {
  const [i, setI] = React.useState(0);
  return (
    <section id="reviews" style={{ background: "var(--paper)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
          <div>
            <span className="eyebrow">In their words</span>
            <h2 className="h-section" style={{ marginTop: 24, maxWidth: 700 }}>
              The work is the work. <em>The reviews</em> are the proof.
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div style={{ display: "flex", gap: 4, color: "var(--gold)" }}>
              {[1, 2, 3, 4, 5].map((n) => <Icon.Star key={n} size={20} />)}
            </div>
            <div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 28, lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>4.9 / 5</div>
              <div className="small">across 80+ Google reviews</div>
            </div>
          </div>
        </div>
        <div style={{
          background: "var(--cream)",
          padding: "64px clamp(40px, 6vw, 80px)",
          position: "relative",
          border: "1px solid var(--rule)"
        }}>
          <Icon.Quote size={56} />
          <p style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(22px, 2.4vw, 32px)",
            lineHeight: 1.35,
            fontWeight: 400,
            margin: "20px 0 40px",
            maxWidth: 1000,
            letterSpacing: "-0.01em",
            textWrap: "balance"
          }}>
            "{TESTIMONIALS[i].quote}"
          </p>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 32,
            borderTop: "1px solid var(--rule)",
            flexWrap: "wrap",
            gap: 24
          }}>
            <div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 20, fontWeight: 500 }}>{TESTIMONIALS[i].name}</div>
              <div className="small" style={{ marginTop: 4 }}>{TESTIMONIALS[i].project}</div>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div className="small" style={{ fontVariantNumeric: "tabular-nums" }}>0{i + 1} / 0{TESTIMONIALS.length}</div>
              <button onClick={() => setI((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} style={{
                width: 44, height: 44, borderRadius: "50%",
                border: "1px solid var(--rule)", background: "transparent",
                display: "flex", alignItems: "center", justifyContent: "center",
                transform: "rotate(180deg)"
              }}><Icon.Arrow size={16} /></button>
              <button onClick={() => setI((i + 1) % TESTIMONIALS.length)} style={{
                width: 44, height: 44, borderRadius: "50%",
                border: "1px solid var(--ink)", background: "var(--ink)", color: "var(--cream)",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}><Icon.Arrow size={16} /></button>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
*/

const CITIES = [
{ name: "Williamsburg", x: 22, y: 14 },
{ name: "Yorktown", x: 33, y: 26 },
{ name: "Newport News", x: 30, y: 42 },
{ name: "Hampton", x: 42, y: 38 },
{ name: "Portsmouth", x: 44, y: 70 },
{ name: "Norfolk", x: 56, y: 64 },
{ name: "Chesapeake", x: 56, y: 80 },
{ name: "Virginia Beach", x: 78, y: 64 }];


function ServiceArea() {
  const [hover, setHover] = React.useState(null);
  return (
    <section id="area" style={{ background: "var(--ink)", color: "var(--cream)" }}>
      <div className="container-wide">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 64,
          alignItems: "center"
        }} className="area-grid">
          <div>
            <span className="eyebrow" style={{ color: "var(--gold)" }}>Service area</span>
            <h2 className="h-section" style={{ marginTop: 24, color: "var(--cream)" }}>
              Serving <em style={{ color: "var(--gold)" }}>Hampton Roads</em>, end to end.
            </h2>
            <p className="lead" style={{ color: "rgba(245,240,230,0.7)", marginTop: 24, marginBottom: 32 }}>
              From the Peninsula to the Southside, if you're in the 757, we're probably already
              working a few streets away.
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px 24px",
              marginBottom: 40
            }}>
              {CITIES.map((c) =>
              <div key={c.name}
              onMouseEnter={() => setHover(c.name)}
              onMouseLeave={() => setHover(null)}
              style={{
                fontSize: 15,
                color: hover === c.name ? "var(--gold)" : "var(--cream)",
                paddingLeft: 18,
                position: "relative",
                cursor: "default",
                transition: "color 0.2s ease"
              }}>
                  <span style={{
                  position: "absolute", left: 0, top: 8,
                  width: 8, height: 8,
                  background: hover === c.name ? "var(--gold)" : "var(--accent)",
                  borderRadius: "50%",
                  transition: "background 0.2s ease"
                }}></span>
                  {c.name}
                </div>
              )}
            </div>
            <a href="#contact" className="btn btn-primary">
              Check availability in your area
              <Icon.Arrow size={14} />
            </a>
          </div>

          <div style={{
            position: "relative",
            aspectRatio: "1105 / 1423",
            maxHeight: 620,
            background: "transparent",
            border: "1px solid rgba(245,240,230,0.15)",
            overflow: "hidden",
            padding: 24
          }}>
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <img
                src="assets/hampton-map-clean.png"
                alt="Hampton Roads service area map"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                  opacity: 0.75
                }} />
            </div>
            <div style={{
              position: "absolute", top: 16, left: 16,
              fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase",
              color: "rgba(245,240,230,0.5)",
              fontWeight: 500
            }}>Hampton Roads · Virginia</div>
            <div style={{
              position: "absolute", bottom: 16, right: 16,
              fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase",
              color: "var(--gold)",
              fontWeight: 500
            }}>The 757</div>
          </div>
        </div>
      </div>
    </section>);
}

function Contact() {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", project: "Bathroom", city: "Virginia Beach", message: "" });
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <section id="contact" style={{ background: "var(--cream)" }}>
      <div className="container-wide">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: 80,
          alignItems: "start"
        }} className="contact-grid">
          <div>
            <span className="eyebrow">Get in touch</span>
            <h2 className="h-section" style={{ marginTop: 24, marginBottom: 32 }}>
              Let's talk about <em>your project.</em>
            </h2>
            <p className="lead" style={{ marginBottom: 48 }}>
              Tell us a bit about what you have in mind. We'll get back within one business
              day to schedule a free, no-pressure consultation at your home.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 48 }}>
              <a href="tel:7578700903" style={{
                display: "flex", alignItems: "center", gap: 16,
                color: "var(--ink)", textDecoration: "none",
                paddingBottom: 20, borderBottom: "1px solid var(--rule)"
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "var(--ink)", color: "var(--cream)",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}><Icon.Phone size={16} /></div>
                <div>
                  <div className="small" style={{ textTransform: "uppercase", letterSpacing: "0.18em" }}>Call</div>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 22, fontVariantNumeric: "tabular-nums" }}>757-870-0903</div>
                </div>
              </a>
              <a href="mailto:info@njshome.com" style={{
                display: "flex", alignItems: "center", gap: 16,
                color: "var(--ink)", textDecoration: "none",
                paddingBottom: 20, borderBottom: "1px solid var(--rule)"
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "var(--ink)", color: "var(--cream)",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}><Icon.Mail size={16} /></div>
                <div>
                  <div className="small" style={{ textTransform: "uppercase", letterSpacing: "0.18em" }}>Email</div>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 22 }}>info@njshome.com</div>
                </div>
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "var(--ink)", color: "var(--cream)",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}><Icon.Pin size={16} /></div>
                <div>
                  <div className="small" style={{ textTransform: "uppercase", letterSpacing: "0.18em" }}>Service area</div>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 18 }}>Hampton Roads, Virginia</div>
                </div>
              </div>
            </div>

            <div style={{
              display: "flex", alignItems: "center", gap: 16,
              padding: 20,
              background: "var(--paper-warm)",
              border: "1px solid var(--rule)"
            }}>
              <div style={{ display: "flex", gap: 2, color: "var(--gold)" }}>
                {[1, 2, 3, 4, 5].map((n) => <Icon.Star key={n} size={14} />)}
              </div>
              <div className="small" style={{ color: "var(--ink)" }}>
                <strong style={{ fontWeight: 500 }}>4.9 / 5</strong> · Trusted by 240+ Hampton Roads homeowners
              </div>
            </div>
          </div>

          <div style={{
            background: "var(--ink)",
            color: "var(--cream)",
            padding: "clamp(40px, 5vw, 64px)",
            position: "relative",
            overflow: "hidden"
          }}>
            {submitted ?
            <div style={{ minHeight: 540, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{
                width: 64, height: 64, borderRadius: "50%",
                border: "1px solid var(--gold)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 32, color: "var(--gold)"
              }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="4 12 10 18 20 6" />
                  </svg>
                </div>
                <h3 className="h-section" style={{ color: "var(--cream)", marginBottom: 16 }}>
                  Thanks, {form.name.split(" ")[0] || "friend"}.
                </h3>
                <p className="lead" style={{ color: "rgba(245,240,230,0.7)", marginBottom: 32 }}>
                  We've got your note. Expect a call from a real person at NJS within one
                  business day to set up your consultation.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-ghost-light" style={{ alignSelf: "flex-start" }}>
                  Send another
                </button>
              </div> :
            <form onSubmit={async (e) => {
              e.preventDefault();
              await fetch("https://formspree.io/f/mykvyrga", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
              });
              setSubmitted(true);
            }}>
                <div style={{
                fontFamily: "var(--serif)",
                fontSize: 28,
                lineHeight: 1.1,
                marginBottom: 40,
                maxWidth: 460,
                letterSpacing: "-0.01em"
              }}>
                  Tell us about your home, your timeline, and what you've been dreaming up.
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }} className="form-grid">
                  <DarkField label="Your name" value={form.name} onChange={(v) => update("name", v)} placeholder="Jane Doe" />
                  <DarkField label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} placeholder="jane@home.com" />
                  <DarkField label="Phone" type="tel" value={form.phone} onChange={(v) => update("phone", v)} placeholder="757-555-0100" />
                  <DarkSelect label="City" value={form.city} onChange={(v) => update("city", v)}
                options={["Hampton", "Newport News", "Williamsburg", "Yorktown", "Norfolk", "Portsmouth", "Chesapeake", "Virginia Beach", "Other"]} />
                </div>
                <div style={{ marginBottom: 32 }}>
                  <label style={{
                  fontSize: 11, fontWeight: 500,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "rgba(245,240,230,0.5)", marginBottom: 12, display: "block"
                }}>Project type</label>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {["Bathroom", "Kitchen", "Exterior", "Multiple"].map((p) =>
                  <button key={p} type="button" onClick={() => update("project", p)} style={{
                    padding: "10px 18px",
                    borderRadius: 999,
                    border: `1px solid ${form.project === p ? "var(--gold)" : "rgba(245,240,230,0.3)"}`,
                    background: form.project === p ? "var(--gold)" : "transparent",
                    color: form.project === p ? "var(--ink)" : "var(--cream)",
                    fontSize: 13, fontFamily: "inherit", cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}>{p}</button>
                  )}
                  </div>
                </div>
                <DarkField label="Tell us a bit about it" textarea value={form.message} onChange={(v) => update("message", v)}
              placeholder="Square footage, must-haves, ideal start window..." />
                <button type="submit" className="btn btn-primary" style={{ marginTop: 40, padding: "16px 28px" }}>
                  Schedule my consultation
                  <Icon.Arrow size={14} />
                </button>
                <div className="small" style={{ color: "rgba(245,240,230,0.5)", marginTop: 16 }}>
                  Free, no obligation. We'll call within 1 business day.
                </div>
              </form>
            }
          </div>
        </div>
      </div>
    </section>);
}

function DarkField({ label, value, onChange, placeholder, type = "text", textarea = false }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label style={{
        fontSize: 11, fontWeight: 500,
        letterSpacing: "0.14em", textTransform: "uppercase",
        color: "rgba(245,240,230,0.5)"
      }}>{label}</label>
      {textarea ?
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={3}
        style={{
          background: "transparent",
          border: "none",
          borderBottom: "1px solid rgba(245,240,230,0.25)",
          color: "var(--cream)",
          padding: "10px 0",
          fontFamily: "inherit",
          fontSize: 16,
          outline: "none",
          resize: "vertical"
        }} /> :
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          background: "transparent",
          border: "none",
          borderBottom: "1px solid rgba(245,240,230,0.25)",
          color: "var(--cream)",
          padding: "10px 0",
          fontFamily: "inherit",
          fontSize: 16,
          outline: "none"
        }} />
      }
    </div>);
}

function DarkSelect({ label, value, onChange, options }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label style={{
        fontSize: 11, fontWeight: 500,
        letterSpacing: "0.14em", textTransform: "uppercase",
        color: "rgba(245,240,230,0.5)"
      }}>{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          background: "transparent",
          border: "none",
          borderBottom: "1px solid rgba(245,240,230,0.25)",
          color: "var(--cream)",
          padding: "10px 0",
          fontFamily: "inherit",
          fontSize: 16,
          outline: "none",
          appearance: "none"
        }}>
        {options.map((o) => <option key={o} value={o} style={{ background: "var(--ink)" }}>{o}</option>)}
      </select>
    </div>);
}

function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--cream)", paddingTop: 80, paddingBottom: 32 }}>
      <div className="container-wide">
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 48,
          marginBottom: 64
        }} className="footer-grid">
          <div>
            <Wordmark color="var(--cream)" accent="var(--gold)" onDark={true} size={56} />
            <p className="body" style={{
              color: "rgba(245,240,230,0.6)",
              maxWidth: 360,
              marginTop: 24,
              fontSize: 14
            }}>
              Family-run home renovation contractors serving Hampton Roads, Virginia
              since 2017. Building relationships through customer satisfaction.
            </p>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>Services</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["Bathroom Remodels", "Kitchen Renovations", "Exterior Work", "Whole-home Refresh"].map((l) =>
              <a key={l} href="#services" style={{ color: "rgba(245,240,230,0.8)", textDecoration: "none", fontSize: 14 }}>{l}</a>
              )}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>Company</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[["About", "#about"], ["Process", "#process"], ["Project gallery", "#work"], ["Reviews", "#reviews"]].map(([l, h]) =>
              <a key={l} href={h} style={{ color: "rgba(245,240,230,0.8)", textDecoration: "none", fontSize: 14 }}>{l}</a>
              )}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>Contact</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14 }}>
              <a href="tel:7578700903" style={{ color: "rgba(245,240,230,0.8)", textDecoration: "none", fontVariantNumeric: "tabular-nums" }}>757-870-0903</a>
              <a href="mailto:info@njshome.com" style={{ color: "rgba(245,240,230,0.8)", textDecoration: "none" }}>info@njshome.com</a>
              <span style={{ color: "rgba(245,240,230,0.6)" }}>Hampton Roads, VA</span>
              <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                <a href="https://www.instagram.com/bluepalmig/" target="_blank" style={{
                  width: 36, height: 36, borderRadius: "50%",
                  border: "1px solid rgba(245,240,230,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(245,240,230,0.8)", textDecoration: "none",
                  fontSize: 16, transition: "border-color 0.2s ease"
                }}>IG</a>
                <a href="https://www.facebook.com/profile.php?id=61579224363152" target="_blank" style={{
                  width: 36, height: 36, borderRadius: "50%",
                  border: "1px solid rgba(245,240,230,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(245,240,230,0.8)", textDecoration: "none",
                  fontSize: 16, transition: "border-color 0.2s ease"
                }}>FB</a>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          paddingTop: 32,
          borderTop: "1px solid rgba(245,240,230,0.15)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16
        }}>
          <div className="small" style={{ color: "rgba(245,240,230,0.5)" }}>
            © 2017–2026 NJS Home Solutions · Class A Licensed & Insured · Virginia
          </div>
          <div className="small" style={{ color: "rgba(245,240,230,0.5)" }}>
            Built on trust, finished with care.
          </div>
        </div>
      </div>
    </footer>);
}

Object.assign(window, { Gallery, ServiceArea, Contact, Footer });
