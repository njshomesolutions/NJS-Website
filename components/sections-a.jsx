// NJS — About, Services, Process

function About() {
  return (
    <section id="about" style={{ background: "var(--cream)" }}>
      <div className="container-wide">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: 80,
          alignItems: "start"
        }} className="about-grid">
          <div style={{ position: "sticky", top: 120 }}>
            <span className="eyebrow">Our story</span>
            <h2 className="h-section" style={{ marginTop: 24 }}>
              A Hampton Roads team that treats <em>your home</em> like our own.
            </h2>
          </div>
          <div>
            <p className="lead" style={{ marginBottom: 28 }}>
              NJS Home Solutions was founded in <strong style={{ fontWeight: 500, color: "var(--ink)" }}>2017</strong> on
              a simple belief: a renovation should leave you with a better home <em>and</em> a
              builder you'd recommend to your neighbor.
            </p>
            <p className="body" style={{ marginBottom: 28 }}>
              For nearly a decade we've worked alongside homeowners from Hampton to Virginia
              Beach, gutting tired bathrooms, opening up kitchens, refreshing tired exteriors,
              and showing up every day with the same standards and the same
              respect for the people who actually live there.
            </p>
            <p className="body" style={{ marginBottom: 48 }}>
              We're licensed, insured, and built to last, but the things our clients write
              about most are the small ones: doors closed gently, floors swept nightly, a
              text the morning the team's coming back.
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 0,
              borderTop: "1px solid var(--rule)"
            }}>
              {[
              ["Licensed & insured", "Class A contractor, Virginia"],
              ["Warrantied work", "Labor and manufacturer warranties"],
              ["Family-run", "Owner on every project"],
              ["Local to the 757", "Built in the community we serve"]].
              map(([t, s], i) =>
              <div key={t} style={{
                padding: "24px 0",
                borderBottom: "1px solid var(--rule)",
                paddingRight: i % 2 === 0 ? 24 : 0,
                paddingLeft: i % 2 === 1 ? 24 : 0,
                borderLeft: i % 2 === 1 ? "1px solid var(--rule)" : "none"
              }}>
                  <div style={{
                  fontFamily: "var(--serif)",
                  fontSize: 18,
                  fontWeight: 500,
                  marginBottom: 6
                }}>{t}</div>
                  <div className="small">{s}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);
}

const SERVICES = [
{
  icon: Icon.Bath,
  name: "Bathrooms",
  tag: "Master suites · guest baths · powder rooms",
  body: "Full gut remodels and considered refreshes with custom tile, walk-in showers, freestanding tubs, vanities built to last. Where most of the daily ritual happens.",
  bullets: ["Walk-in & wet-room showers", "Custom tile & stonework", "Vanities & cabinetry", "Heated floors"],
  img: "assets/baño 1.png"
},
{
  icon: Icon.Kitchen,
  name: "Kitchens",
  tag: "Galley · open-concept · butler's pantry",
  body: "Rework the layout, open the wall, reface or rebuild. Kitchens that hold up to weeknight dinners and family holidays alike. Cabinetry, stone, and lighting that match how you actually cook.",
  bullets: ["Layout reconfiguration", "Custom cabinetry", "Stone & quartz counters", "Pantries & islands"],
  img: "assets/cocina 5.png"
},
{
  icon: Icon.House,
  name: "Exterior",
  tag: "Siding · decks · porches · roofing",
  body: "Hampton Roads weather is honest with houses. We build exteriors that handle salt air, summer storms, and shoulder seasons, and look right on the street twenty years from now.",
  bullets: ["Siding & trim", "Decks & screened porches", "Roofing & gutters", "Outdoor living"],
  img: "assets/exterior 2.png"
}];


function Services() {
  const [active, setActive] = React.useState(0);
  return (
    <section id="services" style={{ background: "var(--ink)", color: "var(--cream)" }}>
      <div className="container-wide">
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          marginBottom: 64,
          flexWrap: "wrap",
          gap: 32
        }}>
          <div style={{ maxWidth: 700 }}>
            <span className="eyebrow" style={{ color: "var(--gold)" }}>What we do</span>
            <h2 className="h-section" style={{ marginTop: 24, color: "var(--cream)" }}>
              Three rooms of the house we know <em style={{ color: "var(--gold)" }}>by heart.</em>
            </h2>
          </div>
          <div style={{ maxWidth: 360 }}>
            <p className="body" style={{ color: "rgba(245,240,230,0.7)" }}>
              We focus where we're sharpest. If your project lives outside these three,
              call us anyway; we'll point you the right way.
            </p>
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "380px 1fr",
          gap: 0,
          border: "1px solid rgba(245,240,230,0.12)",
          minHeight: 540
        }} className="services-grid">
          {/* Tabs */}
          <div style={{ borderRight: "1px solid rgba(245,240,230,0.12)" }}>
            {SERVICES.map((s, i) => {
              const SIcon = s.icon;
              const isActive = active === i;
              return (
                <button
                  key={s.name}
                  onClick={() => setActive(i)}
                  style={{
                    width: "100%",
                    background: isActive ? "var(--accent)" : "transparent",
                    color: "var(--cream)",
                    border: "none",
                    borderBottom: i < SERVICES.length - 1 ? "1px solid rgba(245,240,230,0.12)" : "none",
                    padding: "32px 32px",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "background 0.25s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    fontFamily: "inherit"
                  }}>
                  <div style={{
                    width: 52, height: 52,
                    borderRadius: "50%",
                    border: `1px solid ${isActive ? "var(--cream)" : "rgba(245,240,230,0.3)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0
                  }}>
                    <SIcon size={24} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: "var(--serif)",
                      fontSize: 26,
                      letterSpacing: "-0.01em",
                      lineHeight: 1
                    }}>{s.name}</div>
                    <div style={{
                      fontSize: 12,
                      color: isActive ? "rgba(245,240,230,0.85)" : "rgba(245,240,230,0.5)",
                      marginTop: 8,
                      letterSpacing: "0.02em"
                    }}>{s.tag}</div>
                  </div>
                  <Icon.Arrow size={16} />
                </button>);
            })}
          </div>

          {/* Detail panel */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: 0
          }}>
            <div style={{ padding: "48px 48px" }}>
              <div style={{
                fontSize: 12,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 24
              }}>0{active + 1} / 03 — {SERVICES[active].name}</div>
              <h3 style={{
                fontFamily: "var(--serif)",
                fontSize: 36,
                lineHeight: 1.1,
                margin: "0 0 24px",
                fontWeight: 400
              }}>
                {SERVICES[active].body.split(".")[0]}.
              </h3>
              <p className="body" style={{ color: "rgba(245,240,230,0.7)", marginBottom: 32 }}>
                {SERVICES[active].body.split(".").slice(1).join(".").trim()}
              </p>

              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px 24px",
                marginBottom: 40
              }}>
                {SERVICES[active].bullets.map((b) =>
                <div key={b} style={{
                  fontSize: 14,
                  color: "var(--cream)",
                  paddingLeft: 16,
                  position: "relative"
                }}>
                    <span style={{
                    position: "absolute", left: 0, top: 8,
                    width: 6, height: 6,
                    background: "var(--gold)",
                    borderRadius: "50%"
                  }}></span>
                    {b}
                  </div>
                )}
              </div>

              <a href="#contact" className="btn btn-ghost-light">
                Quote a {SERVICES[active].name.toLowerCase()} project
                <Icon.Arrow size={14} />
              </a>
            </div>
            <img
              src={SERVICES[active].img}
              alt={SERVICES[active].name}
              style={{ width: "100%", height: "100%", minHeight: 400, objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>);
}

const PROCESS_STEPS = [
{
  n: "01",
  name: "Conversation",
  duration: "Week 1",
  body: "We come out, walk the space, and listen. No clipboard pitch, just a conversation about how you live in the room and what's been bothering you about it."
},
{
  n: "02",
  name: "Design & estimate",
  duration: "Weeks 2–3",
  body: "We bring back drawings, finish samples, and a fixed scope, line-item priced. You'll know exactly what's included before anything is signed."
},
{
  n: "03",
  name: "Build",
  duration: "4–10 weeks",
  body: "Our team runs the project with daily clean-up, weekly walk-throughs, and a project lead who answers their phone."
},
{
  n: "04",
  name: "Walk-through & warranty",
  duration: "Day of completion",
  body: "We walk the finished space together, fix anything that isn't right, and back the work with a labor warranty, plus the manufacturer warranties on materials."
}];


function Process() {
  return (
    <section id="process" style={{ background: "var(--paper)" }}>
      <div className="container-wide">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          marginBottom: 80,
          alignItems: "end"
        }} className="about-grid">
          <div>
            <span className="eyebrow">How we work</span>
            <h2 className="h-section" style={{ marginTop: 24 }}>
              A process that respects <em>your time</em> and your home.
            </h2>
          </div>
          <p className="lead">
            Every project we run follows the same four phases. It's the part of the business
            our clients quote back to us when they refer their friends.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
          borderTop: "1px solid var(--rule)"
        }} className="process-grid">
          {PROCESS_STEPS.map((s, i) =>
          <div key={s.n} style={{
            padding: "48px 32px 32px 0",
            borderRight: i < PROCESS_STEPS.length - 1 ? "1px solid var(--rule)" : "none",
            paddingLeft: i > 0 ? 32 : 0,
            position: "relative"
          }}>
              <div style={{
              fontFamily: "var(--serif)",
              fontSize: 14,
              color: "var(--accent)",
              letterSpacing: "0.18em",
              marginBottom: 8,
              fontWeight: 500
            }}>{s.n}</div>
              <div style={{
              fontFamily: "var(--serif)",
              fontSize: 26,
              lineHeight: 1.1,
              marginBottom: 8,
              letterSpacing: "-0.01em"
            }}>{s.name}</div>
              <div className="small" style={{
              color: "var(--accent)",
              marginBottom: 20,
              fontWeight: 500
            }}>{s.duration}</div>
              <p className="body" style={{ fontSize: 14 }}>{s.body}</p>
            </div>
          )}
        </div>
      </div>
    </section>);
}

Object.assign(window, { About, Services, Process });
