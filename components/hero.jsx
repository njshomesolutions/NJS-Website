// NJS — Nav + Hero

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 50,
      transition: "all 0.3s ease",
      background: scrolled ? "rgba(250,246,238,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
    }}>
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 0",
      }}>
        <a href="#top" style={{textDecoration:"none"}}><Wordmark sub={false} /></a>
        <nav style={{display:"flex", alignItems:"center", gap:36}} className="hide-mobile">
          {["Work", "Services", "Process", "About", "Reviews"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              fontSize: 14,
              color: "var(--ink)",
              textDecoration: "none",
              fontWeight: 450,
              letterSpacing: "0.01em",
            }}>{item}</a>
          ))}
        </nav>
        <div style={{display:"flex", alignItems:"center", gap:14}}>
          <a href="tel:7578700903" className="hide-mobile" style={{
            fontSize: 14,
            color: "var(--ink)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontVariantNumeric: "tabular-nums",
          }}>
            <Icon.Phone size={14} />
            757-870-0903
          </a>
          <a href="#contact" className="btn btn-ink" style={{padding:"10px 18px", fontSize:13}}>
            Schedule consult
            <Icon.Arrow size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ layout = "split" }) {
  if (layout === "fullbleed") return <HeroFullBleed />;
  return <HeroSplit />;
}

function HeroSplit() {
  return (
    <section id="top" style={{
      paddingTop: 140,
      paddingBottom: 0,
      background: "var(--cream)",
      position: "relative",
      overflow: "hidden",
    }}>
      <div className="container-wide">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 56,
          alignItems: "end",
          minHeight: "78vh",
        }} className="hero-grid">
          <div style={{paddingBottom: 80}}>
            <span className="eyebrow">Hampton Roads · Est. 2017</span>
            <h1 className="h-display" style={{marginTop: 28, marginBottom: 32}}>
              Built on trust,<br/>
              finished <em>with care.</em>
            </h1>
            <p className="lead" style={{maxWidth: 520, marginBottom: 40}}>
              NJS Home Solutions is a family-run renovation company crafting bathrooms,
              kitchens, and exteriors across Hampton Roads, one relationship, one
              finished detail at a time.
            </p>
            <div style={{display:"flex", gap:14, flexWrap:"wrap", marginBottom: 56}}>
              <a href="#contact" className="btn btn-primary">
                Schedule a consultation
                <Icon.Arrow size={14} />
              </a>
              <a href="#work" className="btn btn-ghost">See our work</a>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
              paddingTop: 32,
              borderTop: "1px solid var(--rule)",
              maxWidth: 520,
            }}>
              {[
                ["9", "yrs", "in business"],
                ["240+", "", "projects delivered"],
                ["4.9", "★", "homeowner rating"],
              ].map(([n, suf, lbl]) => (
                <div key={lbl}>
                  <div style={{
                    fontFamily:"var(--serif)",
                    fontSize: 36,
                    lineHeight: 1,
                    letterSpacing:"-0.02em",
                    fontVariantNumeric:"tabular-nums",
                  }}>{n}<span style={{color:"var(--accent)", fontSize:24}}>{suf}</span></div>
                  <div className="small" style={{marginTop:8}}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{
            position: "relative",
            height: "78vh",
            minHeight: 560,
          }}>
            {/* Main hero image */}
            <image-slot
              id="hero-main"
              shape="rect"
              radius="2"
              placeholder="Drop hero photo · kitchen / bath wide shot"
              style={{
                position:"absolute",
                top: 0, right: 0,
                width: "82%",
                height: "72%",
              }}
            ></image-slot>
            {/* Detail image */}
            <image-slot
              id="hero-detail"
              shape="rect"
              radius="2"
              placeholder="Drop detail photo"
              style={{
                position:"absolute",
                bottom: 80,
                left: 0,
                width: "44%",
                height: "38%",
                boxShadow: "0 30px 60px rgba(20,32,43,0.18)",
              }}
            ></image-slot>
            {/* Floating tag */}
            <div style={{
              position:"absolute",
              bottom: 40,
              right: 40,
              background: "var(--ink)",
              color: "var(--cream)",
              padding: "16px 22px",
              borderRadius: 2,
              maxWidth: 260,
            }}>
              <div style={{
                fontSize:10,
                letterSpacing:"0.22em",
                textTransform:"uppercase",
                color:"var(--gold)",
                marginBottom:8,
              }}>Currently building</div>
              <div style={{fontFamily:"var(--serif)", fontSize:18, lineHeight:1.2}}>
                A coastal master bath in Virginia Beach
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div style={{
        marginTop: 80,
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
        background: "var(--paper)",
        overflow: "hidden",
        padding: "22px 0",
      }}>
        <div style={{
          display: "flex",
          gap: 64,
          whiteSpace: "nowrap",
          animation: "marquee 40s linear infinite",
          width: "max-content",
        }}>
          {Array.from({length: 2}).flatMap((_, i) =>
            ["Bathroom Remodels", "Kitchen Renovations", "Exterior Work", "Tile & Stone", "Custom Cabinetry", "Decks & Porches", "Siding & Roofing", "Whole-Home Refresh"]
            .map((s, j) => (
              <span key={`${i}-${j}`} style={{
                fontFamily:"var(--serif)",
                fontSize: 28,
                fontStyle: "italic",
                fontWeight: 300,
                color: "var(--ink)",
                display:"flex",
                alignItems:"center",
                gap: 64,
              }}>
                {s}
                <span style={{
                  width: 6, height: 6, borderRadius:"50%",
                  background: "var(--accent)",
                  display:"inline-block",
                }}></span>
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function HeroFullBleed() {
  return (
    <section id="top" style={{
      position:"relative",
      minHeight: "100vh",
      background: "var(--ink)",
      color: "var(--cream)",
      overflow:"hidden",
    }}>
      <image-slot
        id="hero-fullbleed"
        shape="rect"
        radius="0"
        placeholder="Drop hero photo · wide bathroom / kitchen"
        style={{
          position:"absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.55,
        }}
      ></image-slot>
      <div style={{
        position:"absolute", inset:0,
        background: "linear-gradient(180deg, rgba(20,32,43,0.5) 0%, rgba(20,32,43,0.2) 40%, rgba(20,32,43,0.85) 100%)",
      }}></div>

      <div className="container" style={{
        position:"relative",
        paddingTop: 200,
        paddingBottom: 80,
        minHeight:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-end",
      }}>
        <span className="eyebrow" style={{color:"var(--gold)"}}>
          <span style={{background:"var(--gold)"}}></span>
          Hampton Roads · Est. 2017
        </span>
        <h1 className="h-display" style={{
          marginTop: 28,
          marginBottom: 32,
          color:"var(--cream)",
          maxWidth: 1100,
        }}>
          Built on trust, <em style={{color:"var(--gold)"}}>finished with care.</em>
        </h1>
        <p className="lead" style={{
          color:"rgba(245,240,230,0.78)",
          maxWidth: 600,
          marginBottom: 48,
        }}>
          A family-run renovation company crafting bathrooms, kitchens, and exteriors
          across Hampton Roads, one relationship, one finished detail at a time.
        </p>
        <div style={{display:"flex", gap:14, flexWrap:"wrap"}}>
          <a href="#contact" className="btn btn-primary">
            Schedule a consultation
            <Icon.Arrow size={14} />
          </a>
          <a href="#work" className="btn btn-ghost-light">See our work</a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero });
