// NJS — App entry + Tweaks

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "heritage",
  "heroLayout": "split"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.body.dataset.palette = t.palette;
  }, [t.palette]);

  return (
    <>
      <Nav />
      <Hero layout={t.heroLayout} />
      <About />
      <Services />
      <Gallery />
      <Process />
      <Testimonials />
      <ServiceArea />
      <Contact />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Palette">
          <PaletteSwatches
            value={t.palette}
            onChange={v => setTweak("palette", v)}
          />
          <div className="small" style={{marginTop:12, color:"#888", fontSize:12}}>
            {t.palette === "heritage" && "Navy + terracotta — warm, classic, established."}
            {t.palette === "coastal" && "Deep blue + ocean teal — Hampton Roads coastal."}
            {t.palette === "slate" && "Slate + sage — modern editorial."}
          </div>
        </TweakSection>
        <TweakSection title="Hero layout">
          <TweakRadio
            label="Style"
            value={t.heroLayout}
            onChange={v => setTweak("heroLayout", v)}
            options={[
              {value:"split", label:"Split"},
              {value:"fullbleed", label:"Full-bleed"},
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

function PaletteSwatches({ value, onChange }) {
  const palettes = [
    {key:"heritage", label:"Heritage", colors:["#14202b","#b8421f","#f5f0e6","#c89b3c"]},
    {key:"coastal",  label:"Coastal",  colors:["#0e2a3d","#1f6f8b","#eef3f6","#c89b3c"]},
    {key:"slate",    label:"Slate",    colors:["#1a1a1a","#6b8e5e","#ededea","#c89b3c"]},
  ];
  return (
    <div style={{display:"flex", gap: 10, flexWrap:"wrap"}}>
      {palettes.map(p => {
        const active = value === p.key;
        return (
          <button key={p.key} onClick={() => onChange(p.key)} style={{
            padding: 4,
            border: `2px solid ${active ? "#111" : "transparent"}`,
            background:"transparent",
            cursor:"pointer",
            borderRadius: 6,
            fontFamily:"inherit",
          }}>
            <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap: 2, width: 60, height: 60, borderRadius: 4, overflow:"hidden"}}>
              {p.colors.map((c, j) => <div key={j} style={{background: c}}></div>)}
            </div>
            <div style={{fontSize: 11, marginTop: 6, textAlign:"center", color: active ? "#111" : "#666", fontWeight: active ? 600 : 400}}>{p.label}</div>
          </button>
        );
      })}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
