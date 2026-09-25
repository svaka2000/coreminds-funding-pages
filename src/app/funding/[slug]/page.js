import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Phone, Check, ExternalLink, HelpCircle, AlertTriangle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Magnetic } from '@/components/Motion'
import { FAQBlock, LeadCTA, CrossLinks } from '@/components/GrowthSections'
import { subjects, locations } from '@/lib/growthPages'
import { livePrograms, getProgram } from '@/lib/fundingPrograms'

// The compliance gate, enforced by the router itself.
//
// generateStaticParams only ever returns programs with status 'live', and
// dynamicParams = false means any other slug 404s outright rather than being
// rendered on demand. A program sitting at 'pending' or 'exploring' in
// fundingPrograms.js therefore has no reachable page at all — it cannot leak a
// claim that we are an approved provider before we actually are.
export const dynamicParams = false

export function generateStaticParams() {
  return livePrograms.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = getProgram(slug)
  if (!p) return {}
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: `/funding/${slug}` },
    openGraph: { title: p.metaTitle, description: p.metaDescription, url: `/funding/${slug}` },
  }
}

export default async function FundingProgramPage({ params }) {
  const { slug } = await params
  const p = getProgram(slug)
  if (!p) notFound()

  const faqs = [
    {
      q: `Is there anything to pay out of pocket?`,
      a: `Not while your balance covers it. CoreMinds is an approved ${p.name} provider, so you pay us from your balance through ${p.platform} instead of paying first and claiming it back. If the balance runs out, anything beyond it is paid directly.`,
    },
    {
      q: `Do you serve ${p.state} families from outside the state?`,
      a: `Yes. Sessions are live over video, so where we are based does not change the teaching. ${p.verified}`,
    },
    {
      q: 'Is the first session still free?',
      a: 'Yes. The trial session is free regardless of how you plan to pay afterwards. Meet the mentor, see whether it fits, then decide.',
    },
  ]

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
          <span className="cm-eyebrow">
            <Link href="/funding" className="transition-colors hover:text-[var(--gold)]">
              Funding
            </Link>{' '}
            · {p.state}
          </span>
          <h1 className="mt-6 max-w-4xl text-[2.6rem] leading-[1.05] text-[var(--ink)] sm:text-6xl">
            Tutoring covered by <span className="accent">{p.name}.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">{p.intro}</p>
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
          <div className="mt-8 flex flex-wrap gap-2.5">
            {[p.fullName, `via ${p.platform}`, p.administrator].filter(Boolean).map((chip) => (
              <span
                key={chip}
                className="border border-[var(--line-strong)] bg-[var(--paper-2)] px-3.5 py-1.5 text-sm font-medium text-[var(--ink-soft)]"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What it covers */}
      <section className="border-t border-[var(--line)] bg-[var(--paper-2)] py-24">
        <div className="cm-container grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
          <div data-reveal>
            <span className="cm-eyebrow">Coverage</span>
            <h2 className="mt-6 text-4xl leading-tight text-[var(--ink)] md:text-5xl">
              What it <span className="accent">covers.</span>
            </h2>
            <p className="mt-5 max-w-xs text-[var(--muted)]">
              Drawn from the program&apos;s own guidance, not from our assumptions.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2" data-reveal data-delay="1">
            {p.covered.map((c, i) => (
              <div key={i} className="cm-card flex gap-4 p-6">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center bg-[var(--navy)] text-[var(--cream)]">
                  <Check size={16} />
                </span>
                <p className="text-[0.97rem] leading-relaxed text-[var(--ink-soft)]">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="cm-container py-24">
        <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
          <div data-reveal>
            <span className="cm-eyebrow">The mechanics</span>
            <h2 className="mt-6 text-4xl leading-tight text-[var(--ink)] md:text-5xl">
              How it actually <span className="accent">works.</span>
            </h2>
          </div>
          <div className="space-y-px overflow-hidden border border-[var(--line)] bg-[var(--line)]" data-reveal data-delay="1">
            {p.howItWorks.map((step, i) => (
              <div key={i} className="flex items-start gap-5 bg-[var(--card)] p-6">
                <span className="mt-0.5 flex-shrink-0 bg-[var(--navy)] px-3 py-1.5 font-display text-sm text-[var(--cream)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-[0.98rem] leading-relaxed text-[var(--ink-soft)]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to ask + requirements */}
      <section className="border-y border-[var(--line)] bg-[var(--paper-2)] py-24">
        <div className="cm-container grid gap-6 lg:grid-cols-2">
          <div className="cm-card p-8 sm:p-10" data-reveal>
            <span className="flex h-11 w-11 items-center justify-center bg-[var(--navy)] text-[var(--cream)]">
              <HelpCircle size={20} />
            </span>
            <h3 className="mt-5 text-2xl leading-snug text-[var(--ink)]">What to ask for</h3>
            <p className="mt-3.5 leading-relaxed text-[var(--ink-soft)]">{p.askFor}</p>
          </div>
          <div className="cm-card p-8 sm:p-10" data-reveal data-delay="1">
            <span className="flex h-11 w-11 items-center justify-center bg-[var(--navy)] text-[var(--cream)]">
              <AlertTriangle size={20} />
            </span>
            <h3 className="mt-5 text-2xl leading-snug text-[var(--ink)]">Requirements worth knowing</h3>
            <p className="mt-3.5 leading-relaxed text-[var(--ink-soft)]">{p.tutorRules}</p>
            {p.officialUrl && (
              <a
                href={p.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-[var(--gold)] transition-opacity hover:opacity-70"
              >
                Official program page <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
        <div className="cm-container mt-6">
          <p className="border-l-2 border-[var(--gold)] bg-[var(--card)] p-6 text-[0.93rem] leading-relaxed text-[var(--muted)]" data-reveal>
            <strong className="text-[var(--ink-soft)]">How we know:</strong> {p.verified} Program rules change, so confirm
            anything decision-critical with {p.administrator} directly.
          </p>
        </div>
      </section>

      <FAQBlock items={faqs} />
      <CrossLinks subjects={subjects} locations={locations} />
      <LeadCTA
        title={`Use your ${p.name} funds for tutoring.`}
        sub="The first session is free either way. Meet your mentor, then decide."
      />
      <Footer />
    </main>
  )
}
