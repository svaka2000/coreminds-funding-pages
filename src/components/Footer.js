'use client'

import Link from 'next/link'
import { Facebook, Phone, Mail, MessageCircle, ArrowUpRight } from 'lucide-react'
import { Magnetic } from '@/components/Motion'
import { subjects, locations } from '@/lib/growthPages'

const explore = [['About', '/about'], ['Founders', '/founders'], ['Programs', '/programs'], ['Pricing', '/pricing'], ['Paying with education funds', '/funding'], ['Teachers', '/teachers'], ['Subjects', '/subjects'], ['Areas we serve', '/tutoring']]
const getStarted = [['Book a free session', '/booking'], ['Refer & earn $10', '/referrals'], ['Leave a review', '/submit-review']]

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-[var(--cream)]">
      {/* CTA ribbon */}
      <div className="border-b border-white/10">
        <div className="cm-container flex flex-col items-center justify-between gap-6 py-12 text-center md:flex-row md:text-left">
          <h3 className="font-display text-3xl leading-tight md:text-4xl">Ready when you are. <span className="accent on-dark">Your first session is free.</span></h3>
          <Magnetic><Link href="/booking" className="btn btn-gold btn-lg shrink-0">Book now <ArrowUpRight size={17} /></Link></Magnetic>
        </div>
      </div>

      <div className="cm-container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-12 items-center justify-center overflow-hidden bg-[var(--paper)] px-2">
                <img src="/mark.png" alt="CoreMinds logo" className="h-auto w-full object-contain" />
              </span>
              <span className="font-display text-xl">CoreMinds</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--cream)]/60">
              Personalized tutoring and enrichment taught by high-achieving students. Tutoring · STEM · Finance · Student growth.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--cream)]/40">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {explore.map(([l, h]) => <li key={h}><Link href={h} className="text-sm text-[var(--cream)]/80 transition-colors hover:text-[var(--gold-glow)]">{l}</Link></li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--cream)]/40">Get started</h4>
            <ul className="mt-4 space-y-2.5">
              {getStarted.map(([l, h]) => <li key={h}><Link href={h} className="text-sm text-[var(--cream)]/80 transition-colors hover:text-[var(--gold-glow)]">{l}</Link></li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--cream)]/40">Questions?</h4>
            <a href="tel:6194927466" className="mt-4 flex items-center gap-2.5 font-display text-2xl transition-colors hover:text-[var(--gold-glow)]"><Phone size={18} /> (619) 492-7466</a>
            <a href="mailto:coreminds.tutor@gmail.com" className="mt-2 flex items-center gap-2.5 text-sm text-[var(--cream)]/80 transition-colors hover:text-[var(--gold-glow)]"><Mail size={15} /> coreminds.tutor@gmail.com</a>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href="https://www.facebook.com/profile.php?id=61589309836010" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 text-sm font-medium transition-colors hover:border-[var(--gold-glow)] hover:text-[var(--gold-glow)]"><Facebook size={15} /> Facebook</a>
              <a href="https://discord.gg/MShqsYqgk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 text-sm font-medium transition-colors hover:border-[var(--gold-glow)] hover:text-[var(--gold-glow)]"><MessageCircle size={15} /> Discord</a>
            </div>
          </div>
        </div>

        {/* Directory — subjects + areas (internal links) */}
        <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-2">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--cream)]/40">Tutoring subjects</h4>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
              {subjects.map((s) => (
                <Link key={s.slug} href={`/subjects/${s.slug}`} className="text-[0.8rem] text-[var(--cream)]/55 transition-colors hover:text-[var(--gold-glow)]">{s.title}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--cream)]/40">Areas we serve</h4>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
              {locations.map((l) => (
                <Link key={l.slug} href={`/tutoring/${l.slug}`} className="text-[0.8rem] text-[var(--cream)]/55 transition-colors hover:text-[var(--gold-glow)]">{l.name}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-sm text-[var(--cream)]/45 md:flex-row">
          <p>© {new Date().getFullYear()} CoreMinds. All rights reserved.</p>
          <span>Built for students, by students.</span>
        </div>
      </div>
    </footer>
  )
}
