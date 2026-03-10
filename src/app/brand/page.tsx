import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Guidelines",
  description: "GrowMyClub official brand guideline kit.",
  robots: { index: false, follow: false },
};

const primaryColors = [
  { name: "Emerald 500", hex: "#10B981", usage: "Primary CTA buttons, positive metrics, active states" },
  { name: "Emerald 600", hex: "#059669", usage: "Button hover states, dark accents" },
  { name: "Emerald 400", hex: "#34D399", usage: "Shimmer text highlights, badges, success indicators" },
  { name: "Green 500", hex: "#22C55E", usage: "Gradient text start, headline accents" },
  { name: "Green 400", hex: "#4ADE80", usage: "Gradient text mid, shimmer peaks" },
];

const neutralColors = [
  { name: "Navy 900", hex: "#0A0E1A", usage: "Primary background, body" },
  { name: "Navy 800", hex: "#0F1629", usage: "Alternate section background" },
  { name: "Navy 700", hex: "#0D1117", usage: "Card backgrounds, browser mockups" },
  { name: "White", hex: "#FFFFFF", usage: "Primary text, headings" },
  { name: "Slate 400", hex: "#94A3B8", usage: "Secondary text, descriptions" },
  { name: "Slate 500", hex: "#64748B", usage: "Tertiary text, captions" },
];

const accentColors = [
  { name: "Blue 500", hex: "#3B82F6", usage: "Links, secondary accents, icon backgrounds" },
  { name: "Cyan 500", hex: "#06B6D4", usage: "Highlight effects, beam animations" },
  { name: "Purple 500", hex: "#8B5CF6", usage: "Aurora blobs, gradient accents" },
];

const borderColors = [
  { name: "White 6%", hex: "rgba(255,255,255,0.06)", usage: "Card borders, dividers" },
  { name: "White 8%", hex: "rgba(255,255,255,0.08)", usage: "Input borders, active card borders" },
  { name: "White 10%", hex: "rgba(255,255,255,0.10)", usage: "Hover card borders" },
  { name: "White 3%", hex: "rgba(255,255,255,0.03)", usage: "Glass card fill, subtle backgrounds" },
];

function ColorSwatch({ name, hex, usage }: { name: string; hex: string; usage: string }) {
  const isRgba = hex.startsWith("rgba");
  return (
    <div className="flex items-start gap-4 py-3 border-b border-gray-200 last:border-0">
      <div
        className="w-14 h-14 rounded-lg shrink-0 border border-gray-200"
        style={{ background: isRgba ? `linear-gradient(135deg, #0A0E1A, #0A0E1A)` : hex }}
      >
        {isRgba && (
          <div className="w-full h-full rounded-lg" style={{ background: hex }} />
        )}
      </div>
      <div className="min-w-0">
        <div className="font-semibold text-sm text-gray-900">{name}</div>
        <div className="font-mono text-xs text-gray-500">{hex}</div>
        <div className="text-xs text-gray-400 mt-0.5">{usage}</div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-16 break-inside-avoid">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-emerald-500">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function BrandPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 print:bg-white">
      {/* Print styles */}
      <style>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          .page-break { page-break-before: always; }
          section { break-inside: avoid; }
          main { padding: 0 !important; }
        }
        @page { margin: 0.75in; size: letter; }
      `}</style>

      {/* Save as PDF banner */}
      <div className="no-print bg-gray-900 text-white text-center py-3 text-sm">
        Press <kbd className="px-2 py-0.5 bg-gray-700 rounded text-xs font-mono mx-1">Cmd + P</kbd> and select &quot;Save as PDF&quot; to download
        <span className="mx-3">|</span>
        <a href="/" className="text-emerald-400 hover:underline">Back to site</a>
      </div>

      <div className="max-w-[800px] mx-auto px-8 py-16">
        {/* Cover */}
        <header className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22V8" />
                <path d="M5 12l7-8 7 8" />
                <path d="M8 17l4-5 4 5" />
              </svg>
            </div>
            <span className="text-3xl font-bold tracking-tight">GrowMyClub</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight mb-4">Brand Guidelines</h1>
          <p className="text-lg text-gray-500">Version 1.0 — March 2025</p>
          <p className="text-sm text-gray-400 mt-2">The analytics platform for serious pickleball clubs.</p>
        </header>

        {/* =============================== */}
        <Section title="1. Logo">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Primary Logo</h3>
              <div className="flex items-center gap-8">
                {/* Dark bg version */}
                <div className="bg-[#0A0E1A] rounded-2xl p-8 flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22V8" />
                      <path d="M5 12l7-8 7 8" />
                      <path d="M8 17l4-5 4 5" />
                    </svg>
                  </div>
                  <span className="text-white font-bold text-xl tracking-tight">GrowMyClub</span>
                </div>
                {/* Light bg version */}
                <div className="bg-gray-50 rounded-2xl p-8 flex items-center gap-3 flex-1 border border-gray-200">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22V8" />
                      <path d="M5 12l7-8 7 8" />
                      <path d="M8 17l4-5 4 5" />
                    </svg>
                  </div>
                  <span className="text-gray-900 font-bold text-xl tracking-tight">GrowMyClub</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Icon Only</h3>
              <div className="flex items-center gap-6">
                <div className="bg-[#0A0E1A] rounded-2xl p-6 inline-flex">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22V8" />
                      <path d="M5 12l7-8 7 8" />
                      <path d="M8 17l4-5 4 5" />
                    </svg>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 inline-flex border border-gray-200">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22V8" />
                      <path d="M5 12l7-8 7 8" />
                      <path d="M8 17l4-5 4 5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Clear Space &amp; Minimum Size</h3>
              <ul className="text-sm text-gray-600 space-y-1.5 list-disc list-inside">
                <li>Maintain clear space equal to the icon height on all sides</li>
                <li>Minimum logo width: 120px for digital, 1 inch for print</li>
                <li>Minimum icon-only size: 32px &times; 32px</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Don&apos;ts</h3>
              <ul className="text-sm text-gray-600 space-y-1.5 list-disc list-inside">
                <li>Do not rotate, skew, or stretch the logo</li>
                <li>Do not change the icon gradient colors</li>
                <li>Do not place the logo on busy or low-contrast backgrounds</li>
                <li>Do not add drop shadows, outlines, or effects to the logo</li>
                <li>Do not rearrange the icon and wordmark</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* =============================== */}
        <div className="page-break" />
        <Section title="2. Color Palette">
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Primary — Green (Brand Color)</h3>
              <div className="space-y-0">
                {primaryColors.map((c) => <ColorSwatch key={c.hex} {...c} />)}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Neutrals — Dark Theme Base</h3>
              <div className="space-y-0">
                {neutralColors.map((c) => <ColorSwatch key={c.name} {...c} />)}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Accents</h3>
              <div className="space-y-0">
                {accentColors.map((c) => <ColorSwatch key={c.hex} {...c} />)}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Borders &amp; Glass Effects</h3>
              <div className="space-y-0">
                {borderColors.map((c) => <ColorSwatch key={c.name} {...c} />)}
              </div>
            </div>
          </div>
        </Section>

        {/* =============================== */}
        <div className="page-break" />
        <Section title="3. Typography">
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Typeface</h3>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="text-5xl font-bold tracking-tight mb-2">Inter</div>
                <p className="text-gray-500 text-sm">Google Fonts &middot; Variable weight (400–800) &middot; Latin subset</p>
                <div className="mt-6 text-2xl text-gray-700">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                  abcdefghijklmnopqrstuvwxyz<br />
                  0123456789 !@#$%&amp;*
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-4">Type Scale</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200 text-left">
                    <th className="py-2 font-semibold text-gray-600">Element</th>
                    <th className="py-2 font-semibold text-gray-600">Size</th>
                    <th className="py-2 font-semibold text-gray-600">Weight</th>
                    <th className="py-2 font-semibold text-gray-600">Tracking</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100"><td className="py-2.5">Hero headline</td><td className="font-mono text-xs">72–80px</td><td>Bold (700)</td><td>Tight (-0.02em)</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2.5">Section heading (h2)</td><td className="font-mono text-xs">36–48px</td><td>Bold (700)</td><td>Tight (-0.02em)</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2.5">Feature title (h3)</td><td className="font-mono text-xs">24–36px</td><td>Bold (700)</td><td>Tight (-0.01em)</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2.5">Body text</td><td className="font-mono text-xs">16–18px</td><td>Regular (400)</td><td>Normal</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2.5">Small text / captions</td><td className="font-mono text-xs">12–14px</td><td>Medium (500)</td><td>Normal</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2.5">Badges / labels</td><td className="font-mono text-xs">10–12px</td><td>Medium (500)</td><td>Wide (0.05–0.2em)</td></tr>
                  <tr><td className="py-2.5">Button text</td><td className="font-mono text-xs">14–18px</td><td>Semibold (600)</td><td>Normal</td></tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Gradient Text Effect</h3>
              <p className="text-sm text-gray-600 mb-3">Key headlines use a green shimmer gradient with a sweeping animation:</p>
              <div className="bg-[#0A0E1A] rounded-2xl p-8">
                <div className="text-3xl font-bold" style={{
                  background: "linear-gradient(135deg, #22c55e 0%, #4ade80 50%, #86efac 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Pickleball Clubs
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2 font-mono">
                background: linear-gradient(135deg, #22c55e, #4ade80, #86efac);<br />
                -webkit-background-clip: text;
              </p>
            </div>
          </div>
        </Section>

        {/* =============================== */}
        <div className="page-break" />
        <Section title="4. Buttons &amp; CTAs">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-4">Button Styles</h3>
              <div className="bg-[#0A0E1A] rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-6 flex-wrap">
                  <div className="text-center">
                    <button className="px-8 py-4 rounded-full bg-emerald-500 text-white font-semibold text-lg shadow-lg">
                      Join the Waitlist
                    </button>
                    <p className="text-xs text-gray-400 mt-2">Primary CTA</p>
                  </div>
                  <div className="text-center">
                    <button className="px-8 py-4 rounded-full border border-white/[0.12] text-white font-medium text-lg">
                      See How It Works
                    </button>
                    <p className="text-xs text-gray-400 mt-2">Secondary / Ghost</p>
                  </div>
                  <div className="text-center">
                    <button className="px-5 py-2 rounded-full bg-emerald-500 text-white text-sm font-medium">
                      Join the Waitlist
                    </button>
                    <p className="text-xs text-gray-400 mt-2">Navbar CTA</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Button Specs</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200 text-left">
                    <th className="py-2 font-semibold text-gray-600">Variant</th>
                    <th className="py-2 font-semibold text-gray-600">Background</th>
                    <th className="py-2 font-semibold text-gray-600">Radius</th>
                    <th className="py-2 font-semibold text-gray-600">Padding</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100"><td className="py-2.5">Primary CTA</td><td className="font-mono text-xs">#10B981 (emerald-500)</td><td>Full (pill)</td><td>16px 32px</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2.5">Ghost/Secondary</td><td className="font-mono text-xs">Transparent + border</td><td>Full (pill)</td><td>16px 32px</td></tr>
                  <tr><td className="py-2.5">Navbar CTA</td><td className="font-mono text-xs">#10B981 (emerald-500)</td><td>Full (pill)</td><td>8px 20px</td></tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Hover Effects</h3>
              <ul className="text-sm text-gray-600 space-y-1.5 list-disc list-inside">
                <li>Primary: darken to emerald-600, increase shadow glow, subtle scale (1.03)</li>
                <li>Ghost: background fades to white/5%, border brightens to white/20%</li>
                <li>All buttons include a shine sweep animation on hover</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* =============================== */}
        <div className="page-break" />
        <Section title="5. Cards &amp; Surfaces">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-4">Card Types</h3>
              <div className="bg-[#0A0E1A] rounded-2xl p-8 space-y-6">
                {/* Glass card */}
                <div>
                  <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <p className="text-white font-semibold mb-1">Glass Card</p>
                    <p className="text-sm" style={{ color: "#94A3B8" }}>Default card surface. Subtle transparency with border.</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 font-mono">bg: rgba(255,255,255,0.03) · border: rgba(255,255,255,0.06) · radius: 16px</p>
                </div>
                {/* Premium card */}
                <div>
                  <div className="rounded-3xl p-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), rgba(6,182,212,0.4), transparent)" }} />
                    <p className="text-white font-semibold mb-1">Premium Card</p>
                    <p className="text-sm" style={{ color: "#94A3B8" }}>Top accent line with gradient fill. Used for feature cards.</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 font-mono">Top accent: blue→cyan gradient · bg: gradient fill · radius: 24px</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Interactive Effects</h3>
              <ul className="text-sm text-gray-600 space-y-1.5 list-disc list-inside">
                <li><strong>Spotlight glow:</strong> Cards track cursor position and show a radial glow (blue, 15% opacity, 600px radius)</li>
                <li><strong>Glow border:</strong> On hover, a gradient border (blue→cyan→purple) fades in at the card edge</li>
                <li><strong>Animated border:</strong> Rotating conic gradient border used on the waitlist card</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* =============================== */}
        <Section title="6. Visual Effects">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Background Effects</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200 text-left">
                    <th className="py-2 font-semibold text-gray-600">Effect</th>
                    <th className="py-2 font-semibold text-gray-600">Description</th>
                    <th className="py-2 font-semibold text-gray-600">Where Used</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100"><td className="py-2.5">Particle field</td><td>Canvas-based floating particles with connection lines</td><td>Hero, Waitlist</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2.5">Animated grid</td><td>Subtle moving grid lines (white 2% opacity)</td><td>Hero background</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2.5">Perspective grid</td><td>3D grid fading into distance (60deg rotateX)</td><td>Hero bottom</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2.5">Aurora blobs</td><td>Slow-morphing gradient orbs with 80–100px blur</td><td>All sections</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2.5">Noise overlay</td><td>Fixed SVG noise texture at 3% opacity</td><td>Full page</td></tr>
                  <tr><td className="py-2.5">Beam dividers</td><td>Animated light beam traveling across section breaks</td><td>Between sections</td></tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Animation Principles</h3>
              <ul className="text-sm text-gray-600 space-y-1.5 list-disc list-inside">
                <li>Entrance animations: fade up + blur-in on scroll (Framer Motion whileInView)</li>
                <li>Stagger delay: 0.08–0.15s between sibling elements</li>
                <li>Easing: ease-out for entrances, spring for interactive elements</li>
                <li>Duration: 0.5–0.8s for reveals, 3–25s for ambient effects</li>
                <li>Always respect <span className="font-mono text-xs">prefers-reduced-motion</span> — all animations disabled</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* =============================== */}
        <div className="page-break" />
        <Section title="7. Iconography &amp; Imagery">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Icons</h3>
              <ul className="text-sm text-gray-600 space-y-1.5 list-disc list-inside">
                <li>Style: Outline (1.5px stroke), from Heroicons or custom SVG</li>
                <li>Size: 20–28px in context, always within a rounded container</li>
                <li>Icon containers: gradient background (color/20% opacity), rounded-xl (12px)</li>
                <li>Each insight/feature category has a unique gradient pair</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Product Screenshots</h3>
              <ul className="text-sm text-gray-600 space-y-1.5 list-disc list-inside">
                <li>Always displayed inside a &quot;BrowserMockup&quot; component (macOS-style chrome)</li>
                <li>Browser chrome: dark (#161B22 title bar, #0D1117 body)</li>
                <li>Three window dots: red (#FF5F57), yellow (#FEBC2E), green (#28C840)</li>
                <li>URL bar shows: app.growmyclub.com in monospace</li>
                <li>Blue/purple glow behind each mockup frame</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* =============================== */}
        <Section title="8. Voice &amp; Tone">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Brand Voice</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <p className="font-semibold text-gray-900 mb-2">We are</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Confident, not arrogant</li>
                    <li>Technical, not jargon-heavy</li>
                    <li>Direct, not pushy</li>
                    <li>Helpful, not patronizing</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <p className="font-semibold text-gray-900 mb-2">We are not</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Casual or emoji-heavy</li>
                    <li>Generic or vague</li>
                    <li>Overly salesy</li>
                    <li>Complex for complexity&apos;s sake</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Tagline</h3>
              <p className="text-lg font-semibold text-gray-900">&quot;The analytics platform for serious pickleball clubs.&quot;</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-gray-600 uppercase tracking-wider mb-3">Headline Patterns</h3>
              <ul className="text-sm text-gray-600 space-y-1.5 list-disc list-inside">
                <li>Benefit-first: &quot;Your Club&apos;s Vital Signs, At a Glance&quot;</li>
                <li>Challenge the status quo: &quot;Stop guessing.&quot;</li>
                <li>Specific &gt; vague: &quot;91% retention rate&quot; not &quot;great results&quot;</li>
                <li>Use gradient text on the most important 2–3 words per section</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* =============================== */}
        <Section title="9. Spacing &amp; Layout">
          <div className="space-y-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 text-left">
                  <th className="py-2 font-semibold text-gray-600">Element</th>
                  <th className="py-2 font-semibold text-gray-600">Value</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100"><td className="py-2.5">Max content width</td><td className="font-mono text-xs">1280px (max-w-7xl)</td></tr>
                <tr className="border-b border-gray-100"><td className="py-2.5">Section vertical padding</td><td className="font-mono text-xs">96–128px (py-24 / py-32)</td></tr>
                <tr className="border-b border-gray-100"><td className="py-2.5">Section header → content gap</td><td className="font-mono text-xs">64–96px (mb-16 / mb-24)</td></tr>
                <tr className="border-b border-gray-100"><td className="py-2.5">Card grid gap</td><td className="font-mono text-xs">20–32px (gap-5 / gap-8)</td></tr>
                <tr className="border-b border-gray-100"><td className="py-2.5">Feature row spacing</td><td className="font-mono text-xs">160px (space-y-40)</td></tr>
                <tr className="border-b border-gray-100"><td className="py-2.5">Card internal padding</td><td className="font-mono text-xs">28–40px (p-7 / p-10)</td></tr>
                <tr><td className="py-2.5">Horizontal page padding</td><td className="font-mono text-xs">16px mobile / 24px tablet / 32px desktop</td></tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* =============================== */}
        <Section title="10. Tech Stack">
          <div className="space-y-2">
            <table className="w-full text-sm">
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100"><td className="py-2.5 font-semibold w-40">Framework</td><td>Next.js 14 (App Router)</td></tr>
                <tr className="border-b border-gray-100"><td className="py-2.5 font-semibold">Language</td><td>TypeScript</td></tr>
                <tr className="border-b border-gray-100"><td className="py-2.5 font-semibold">Styling</td><td>Tailwind CSS</td></tr>
                <tr className="border-b border-gray-100"><td className="py-2.5 font-semibold">Animation</td><td>Framer Motion</td></tr>
                <tr className="border-b border-gray-100"><td className="py-2.5 font-semibold">Components</td><td>shadcn/ui (base)</td></tr>
                <tr><td className="py-2.5 font-semibold">Font</td><td>Inter (Google Fonts, variable, display: swap)</td></tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
          <p>&copy; 2025 GrowMyClub. All rights reserved.</p>
          <p className="mt-1">Brand Guidelines v1.0 — For internal and partner use.</p>
        </footer>
      </div>
    </main>
  );
}
