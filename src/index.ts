export default function AzorBikesPragueExpansionSite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-slate-950" />
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-sm text-emerald-200">
                Azor Bikes • Czech Republic Expansion Concept
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                Bringing <span className="text-emerald-300">Azor Bikes</span> to Prague through a city-center cycling festival.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                A presentation-style website for Azor Bikes&apos; idea to enter the Czech market with a bold launch event: a temporary street closure in central Prague, test rides, music, food, community activities, and a strong brand debut built around urban mobility.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#concept"
                  className="rounded-2xl bg-emerald-400 px-6 py-3 font-medium text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:scale-[1.02]"
                >
                  Explore the concept
                </a>
                <a
                  href="#festival"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  View festival plan
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Target market', value: 'Czech Republic' },
                { label: 'Launch city', value: 'Prague' },
                { label: 'Core activation', value: 'Street festival' },
                { label: 'Brand objective', value: 'Awareness + trial' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur"
                >
                  <p className="text-sm text-slate-400">{item.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="concept" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">Expansion vision</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Why Prague is the right next step</h2>
          <p className="mt-4 text-slate-300 leading-8">
            Prague offers international visibility, a growing interest in urban sustainability, a dense city atmosphere, and strong potential for a memorable public activation. Instead of entering quietly, Azor Bikes can position itself as a premium and community-focused mobility brand from day one.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Strategic market entry',
              text: 'Use a flagship launch to introduce the brand to customers, local media, city stakeholders, and retail or distribution partners in one coordinated moment.',
            },
            {
              title: 'Experiential first impression',
              text: 'Let people see, touch, and test the bikes rather than relying only on digital marketing or static showroom exposure.',
            },
            {
              title: 'Strong brand narrative',
              text: 'Frame Azor Bikes as a modern European brand that supports active mobility, design, and community-driven city life.',
            },
          ].map((card) => (
            <div key={card.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-7">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="festival" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Festival concept</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Close a central Prague street and turn it into a bike-first city experience</h2>
              <p className="mt-5 max-w-3xl leading-8 text-slate-300">
                The event would temporarily transform part of the city center into an urban showcase for cycling culture. Visitors could test Azor bikes, enjoy live performances, engage with branded installations, and imagine what a more bike-friendly city can feel like.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  'Test-ride lanes for different bike models',
                  'Main stage with music, speakers, and host segments',
                  'Food trucks and local coffee partners',
                  'Family zone and beginner-friendly activities',
                  'Photo spots and shareable social media moments',
                  'Brand storytelling area about Azor Bikes and expansion plans',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8">
              <h3 className="text-2xl font-semibold">Event structure</h3>
              <div className="mt-6 space-y-5">
                {[
                  ['Morning', 'Street setup, partner activation, media preview'],
                  ['Midday', 'Official opening, speeches, live demonstrations'],
                  ['Afternoon', 'Public test rides, contests, influencer content'],
                  ['Evening', 'Music, community gathering, final brand moment'],
                ].map(([time, detail]) => (
                  <div key={time} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm uppercase tracking-wider text-emerald-300">{time}</p>
                    <p className="mt-2 text-slate-200">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
          {[
            {
              title: 'Business goal',
              text: 'Build awareness before opening distribution, retail, or partnerships in the Czech market.',
            },
            {
              title: 'Audience',
              text: 'Urban commuters, cyclists, families, tourists, media, and local business partners.',
            },
            {
              title: 'Expected impact',
              text: 'High-visibility launch, direct product interaction, strong social content, and press value.',
            },
            {
              title: 'Long-term opportunity',
              text: 'Use the festival as the starting point for recurring events, local partnerships, and Czech market growth.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <div className="rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/15 via-cyan-500/10 to-slate-900 p-8 md:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">Closing message</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold md:text-5xl">
            Azor Bikes can enter Prague not just as a product, but as an experience people remember.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            This concept website presents a premium, ambitious, and visually engaging way to communicate the expansion idea. It positions the Prague festival as both a launch event and a statement about the future of urban cycling.
          </p>
        </div>
      </section>
    </div>
  )
}
