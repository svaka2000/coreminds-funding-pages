import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Phone, Wallet, School, Search, ShieldCheck } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Magnetic, Tilt } from '@/components/Motion'
import { FAQBlock, LeadCTA, CrossLinks } from '@/components/GrowthSections'
import { subjects, locations } from '@/lib/growthPages'
import { programs, livePrograms } from '@/lib/fundingPrograms'

export const metadata = {
  title: 'Paying for Tutoring With Education Funds: ESA, Scholarships & Charter Funds',
  description:
    'State education savings accounts, scholarships, and California charter school funds can pay for tutoring. How each one works, how to find out what your family has, and what to ask any tutor.',
  alternates: { canonical: '/funding' },
  openGraph: {
    title: 'Paying for Tutoring With Education Funds | CoreMinds',
    description:
      'State education savings accounts, scholarships, and California charter school funds can pay for tutoring. Here is how each works and how to find out what your family has.',
    url: '/funding',
  },
}

const kinds = [
  {
    icon: Wallet,
    color: '#b9781f',
    tag: 'State ESAs & scholarships',
    title: 'Money in an account with your name on it',
    body:
      'A growing number of states put an education award into an account you control, usually through ClassWallet or Odyssey. You find an approved provider and pay from the account balance. Tutoring is usually an eligible expense.',
    detail:
      'When the provider is approved, the program can pay it directly from your balance, instead of you paying first and claiming it back. Paying first and claiming it back is the slow, frustrating version.',
  },
  {
    icon: School,
    color: '#1f7a6b',
    tag: 'California charter funds',
    title: 'An instructional budget per student',
    body:
      'Many California homeschool and hybrid charter schools allocate instructional funds for each enrolled student every year. You spend them with vendors the school has already vetted, and tutoring usually qualifies.',
    detail:
      'The part families are rarely told: at most of the schools that answered us, a provider cannot be approved without a request from an enrolled family. At a few of them, a teacher can make the request too.',
  },
  {
    icon: ShieldCheck,
    color: '#5a4a8f',
    tag: 'Other sources',
    title: 'District, tribal and program funds',
    body:
      'Some districts run enrichment or supplemental instruction funds. Tribal Johnson O’Malley programs fund tutoring for eligible Native students. Individual schools sometimes hold their own intervention budgets.',
    detail:
      'They are smaller and less advertised, so it is worth asking your school directly what exists.',
  },
]

const findOut = [
  {
    n: '01',
    title: 'If your student is in a California homeschool or hybrid charter',
    body:
      'You very likely have an instructional funds allocation. Email your Educational Facilitator and ask two things: what the remaining balance is for this year, and whether tutoring is an approved category. Ask in writing so you have the answer on record.',
  },
  {
    n: '02',
    title: 'If you are in a state with an ESA or scholarship',
    body:
      'Log into your program’s account or website and look for its list of approved providers. If a provider you want is missing, you can ask them to apply.',
  },
  {
    n: '03',
    title: 'If you are not sure you have anything',
    body:
      'Ask your school office or program administrator directly whether there is a supplemental instruction, enrichment, or intervention budget attached to your student. It costs nothing to ask.',
  },
]

const buildFaqs = (hasLive) => [
  {
    q: 'Does this mean tutoring is free?',
    a:
      'Not exactly, and the difference matters. The money is real money, allocated to your student, and it has rules attached. What it means is no out-of-pocket cost to you while your balance covers it: the funds pay the provider directly. We would rather explain it that way than call it free, because "free" is how families end up surprised.',
  },
  {
    q: 'Can CoreMinds be paid from my education funds today?',
    a: hasLive
      ? 'In the programs listed on this page, yes. In any other program, not yet. We will not tell you your funds cover us until they do, because a purchase from a provider the program has not approved will not go through, and you would be the one dealing with it.'
      : 'Not yet. CoreMinds is not an approved provider in any program today. We will not tell you your funds cover us until they do, because a purchase from a provider the program has not approved will not go through, and you would be the one dealing with it.',
  },
  {
    q: 'Why can a tutor not just apply to my charter school?',
    a:
      'Most of the California charter schools that answered us said the same thing: a vendor cannot be approved without a request from an enrolled family or, at a few schools, a teacher. It is a deliberate policy, not an oversight. Asking your school how to request a vendor is what starts the process.',
  },
  {
    q: 'What paperwork do these programs require of a provider?',
    a:
      'It varies a lot. State ESAs generally want business verification and proof the service qualifies, plus tutor qualifications that differ by state. North Carolina, for example, requires every tutor to hold a teaching certificate or a bachelor’s degree. California charters typically require Live Scan fingerprinting for every instructor, and sometimes a certificate of insurance and mandated reporter training. Some require instructors to live in California.',
  },
  {
    q: 'Approved in one state — does that carry to another?',
    a:
      'No. Each state runs its own approval, even when two states use the same payment website. Ask whether a provider is approved for your state specifically.',
  },
]

export default function FundingHub() {
  const hasLive = livePrograms.length > 0
  const researched = programs.length
  const faqs = buildFaqs(hasLive)

  return (
    <main className="bg-[var(--paper)]">
      <Navbar />

      {/* Hero */}
      <section className="cm-grain relative overflow-hidden">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(201,161,79,0.2), transparent 70%)' }}
        />
        <div className="cm-container relative page-top pb-16">
          <span className="cm-eyebrow">Paying for tutoring</span>
          <h1 className="mt-6 max-w-4xl text-[2.6rem] leading-[1.05] text-[var(--ink)] sm:text-6xl">
            Paying for tutoring with <span className="accent">education funds.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            Education savings accounts, state scholarships, and California charter school funds can pay for tutoring.{' '}
            {hasLive
              ? 'Here is how each kind works, how to find out what your family has, and where CoreMinds is approved.'
              : 'CoreMinds is not approved in any of these programs yet, so this page explains how they work and where we stand.'}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Link href="/booking" className="btn btn-primary btn-lg">
                Book a free session <ArrowRight size={17} />
              </Link>
            </Magnetic>
            <a href="tel:8584619088" className="btn btn-outline btn-lg">
              <Phone size={16} /> (858) 461-9088
            </a>
          </div>
        </div>
      </section>

      {/* The three kinds */}
      <section className="border-t border-[var(--line)] bg-[var(--paper-2)] py-24">
        <div className="cm-container">
          <div className="mx-auto max-w-2xl text-center" data-reveal>
            <span className="cm-eyebrow is-centered">Three kinds of funding</span>
            <h2 className="mt-6 text-4xl leading-tight text-[var(--ink)] md:text-5xl">
              Where the money <span className="accent">comes from.</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {kinds.map((k, i) => {
              const Icon = k.icon
              return (
                <div key={k.tag} className="cm-card flex flex-col p-8" style={{ borderTop: `3px solid ${k.color}` }} data-reveal data-delay={i}>
                  <span
                    className="flex h-11 w-11 items-center justify-center"
                    style={{ background: `${k.color}16`, color: k.color }}
                  >
                    <Icon size={20} />
                  </span>
                  <span
                    className="mt-5 text-[0.66rem] font-bold uppercase tracking-[0.18em]"
                    style={{ color: k.color }}
                  >
                    {k.tag}
                  </span>
                  <h3 className="mt-2.5 text-xl leading-snug text-[var(--ink)]">{k.title}</h3>
                  <p className="mt-3.5 text-[0.95rem] leading-relaxed text-[var(--muted)]">{k.body}</p>
                  <p className="mt-4 border-t border-[var(--line)] pt-4 text-[0.92rem] leading-relaxed text-[var(--ink-soft)]">
                    {k.detail}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How to find out what you have */}
      <section className="cm-container py-24">
        <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr]">
          <div data-reveal>
            <span className="cm-eyebrow">Start here</span>
            <h2 className="mt-6 text-4xl leading-tight text-[var(--ink)] md:text-5xl">
              How to find out what <span className="accent">you have.</span>
            </h2>
            <p className="mt-5 max-w-xs text-[var(--muted)]">
              Three questions, answerable in a single email. Do this before you pay for tutoring out of pocket.
            </p>
          </div>
          <div className="space-y-px overflow-hidden border border-[var(--line)] bg-[var(--line)]" data-reveal data-delay="1">
            {findOut.map((f) => (
              <div key={f.n} className="flex items-start gap-5 bg-[var(--card)] p-6 sm:p-7">
                <span className="mt-0.5 flex-shrink-0 bg-[var(--navy)] px-3 py-1.5 font-display text-sm text-[var(--cream)]">
                  {f.n}
                </span>
                <div>
                  <h3 className="text-lg leading-snug text-[var(--ink)]">{f.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs — only rendered once a program has approved us (status 'live') */}
      {hasLive && (
        <section className="border-y border-[var(--line)] bg-[var(--paper-2)] py-24">
          <div className="cm-container">
            <div className="mx-auto max-w-2xl text-center" data-reveal>
              <span className="cm-eyebrow is-centered">Programs</span>
              <h2 className="mt-6 text-4xl leading-tight text-[var(--ink)] md:text-5xl">
                Where we are <span className="accent">approved.</span>
              </h2>
              <p className="mt-5 text-[var(--muted)]">
                CoreMinds is an approved provider in these programs. Pick yours for the specifics.
              </p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {livePrograms.map((p, i) => (
                <Tilt key={p.slug} className="h-full">
                  <Link
                    href={`/funding/${p.slug}`}
                    className="cm-card group flex h-full flex-col p-7"
                    data-reveal
                    data-delay={i % 3}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[var(--gold)]">
                          {p.state}
                        </span>
                        <h3 className="mt-1.5 text-xl leading-snug text-[var(--ink)]">{p.name}</h3>
                      </div>
                      <ArrowUpRight
                        size={20}
                        className="flex-shrink-0 text-[var(--gold)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                    <p className="mt-3.5 text-[0.93rem] leading-relaxed text-[var(--muted)]">{p.intro}</p>
                    <span className="mt-5 border-t border-[var(--line)] pt-4 text-[0.78rem] font-semibold uppercase tracking-wide text-[var(--ink-soft)]">
                      via {p.platform}
                    </span>
                  </Link>
                </Tilt>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Honest status — the thing most providers will not put in writing */}
      {!hasLive && (
        <section className="border-y border-[var(--line)] bg-[var(--paper-2)] py-24">
          <div className="cm-container">
            <div className="mx-auto max-w-3xl" data-reveal>
              <span className="cm-eyebrow">Straight answer</span>
              <h2 className="mt-6 text-4xl leading-tight text-[var(--ink)] md:text-5xl">
                Where CoreMinds stands <span className="accent">right now.</span>
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-[var(--ink-soft)]">
                <p>
                  CoreMinds is not yet an approved provider in any program. So today, you cannot pay us from an
                  education savings account, a scholarship, or charter school funds.
                </p>
                <p>
                  We are telling you that plainly because the alternative causes real problems. These programs only pay
                  providers that are approved and active. A provider that advertises it accepts education funds before
                  its approval is finished leaves the family to find out the purchase will not go through.
                </p>
                <p>
                  We have researched {researched} state programs, mostly through written answers from the offices that
                  run them, and heard from California charter schools about how they choose vendors. When you book a
                  free session, the form asks which kind of funding your family has. That helps us decide where to
                  apply, and we will tell you where we stand with your program when we reply.
                </p>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Magnetic>
                  <Link href="/booking" className="btn btn-primary btn-lg">
                    Book a free session <ArrowRight size={17} />
                  </Link>
                </Magnetic>
                <Link href="/pricing" className="btn btn-outline btn-lg">
                  See direct pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* What to ask */}
      <section className="cm-container py-24">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <span className="cm-eyebrow is-centered">Protect yourself</span>
          <h2 className="mt-6 text-4xl leading-tight text-[var(--ink)] md:text-5xl">
            Three questions for <span className="accent">any provider.</span>
          </h2>
          <p className="mt-5 text-[var(--muted)]">
            Ask these of us, and of everyone else you consider. The answers should be specific.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            'Are you listed as active in my state’s marketplace right now, not pending?',
            'Will the funds pay you directly, or do I pay first and seek reimbursement?',
            'Does the tutor who will actually teach my student meet my program’s requirements?',
          ].map((q, i) => (
            <div key={i} className="cm-card p-8" data-reveal data-delay={i}>
              <span className="flex h-11 w-11 items-center justify-center bg-[var(--navy)] text-[var(--cream)]">
                <Search size={19} />
              </span>
              <p className="mt-5 text-lg leading-relaxed text-[var(--ink)]">{q}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQBlock items={faqs} />
      <CrossLinks subjects={subjects} locations={locations} />
      <LeadCTA
        title="Try a session, completely free."
        sub="The booking form asks which kind of funding your family has, and we will tell you where we stand with it when we reply."
      />
      <Footer />
    </main>
  )
}
