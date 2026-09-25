'use client'

import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

const levelPricing = [
  ['101 Level', '5 sessions / 5 hours', '$199'],
  ['201 Level', '5 sessions / 5 hours', '$199'],
  ['301 Level', '5 sessions / 5 hours', '$199'],
  ['401+ Level', '5 sessions / 5 hours when available', '$199'],
]

const sportsPricing = [
  ['Private session', '1 hour', '$45'],
  ['Extended session', '2 hours', '$80'],
  ['Training package', '5 sessions', '$215'],
  ['Progress package', '10 sessions', '$399'],
]

const sportsOptions = [
  {
    title: 'Basketball Training',
    description: 'Focused on fundamentals, shooting, ball-handling, finishing, defense, confidence, and game IQ.',
    feeNote: 'Indoor court fees may apply depending on location and availability.',
  },
  {
    title: 'Volleyball Training',
    description: 'Focused on fundamentals, serving, passing, setting, hitting, defense, confidence, and court IQ.',
    feeNote: 'Indoor court fees may apply depending on location and availability.',
  },
]

function CheckItem({ children }) {
  return <li className="flex gap-3 text-sm text-slate-600"><span className="font-bold text-[var(--gold)]">✓</span><span>{children}</span></li>
}

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <section id="pricing" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-6"><div className="w-8 h-px bg-[var(--gold)]" /><span className="text-[#020b24] text-sm font-bold uppercase tracking-wider">Pricing</span><div className="w-8 h-px bg-[var(--gold)]" /></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">A Clear Path to <span className="gradient-text">Steady Progress</span></h2>
          <p className="max-w-3xl mx-auto text-slate-600 text-lg">The first trial session is free. Meet your mentor, discuss the student&apos;s goals, and choose the format that fits best.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          <motion.article initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="glass-card p-7 border-t-4 border-t-[#020b24]">
            <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">Specific School Help</p>
            <h3 className="text-2xl font-bold mb-2">Targeted Tutoring</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">Best for homework, test prep, math, writing, study skills, organization, and immediate school needs.</p>
            <div className="border-y border-slate-300 py-5 space-y-4 mb-6">
              <div className="flex justify-between items-end"><span className="font-semibold">1-hour session</span><span className="text-3xl font-bold text-[#020b24]">$45</span></div>
              <div className="flex justify-between items-end"><span className="font-semibold">2-hour session</span><span className="text-3xl font-bold text-[#020b24]">$80</span></div>
            </div>
            <ul className="space-y-3"><CheckItem>Personalized one-on-one instruction</CheckItem><CheckItem>Flexible focus based on current needs</CheckItem><CheckItem>School readiness and confidence support</CheckItem></ul>
          </motion.article>

          <motion.article initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="glass-card p-7 border-t-4 border-t-[var(--gold)]">
            <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">Guided Enrichment</p>
            <h3 className="text-2xl font-bold mb-2">Structured Course Tracks</h3>
            <p className="text-xl font-bold text-[var(--gold)] mb-3">Most Levels: Five Sessions for $199</p>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">Most available course levels are $199 for five one-hour sessions. Math 101-901, AP Microeconomics, and AP Macroeconomics require 15 classes, priced at $199 per 5 hours.</p>
            <div className="divide-y divide-slate-300 border-y border-slate-300 mb-6">
              {levelPricing.map(([level, detail, price]) => <div key={level} className="py-3"><div className="flex justify-between gap-4 font-bold text-sm"><span>{level}</span><span className="text-[#020b24] whitespace-nowrap">{price}</span></div><p className="text-xs text-slate-500 mt-1">{detail}</p></div>)}
            </div>
            <ul className="space-y-3"><CheckItem>Guided curriculum and personalized pacing</CheckItem><CheckItem>Math and AP Economics tracks include 15-class pathways</CheckItem><CheckItem>Mentor feedback and real-world examples</CheckItem><CheckItem>Clear next steps after each level</CheckItem></ul>
          </motion.article>

          {sportsOptions.map((sport, i) => (
            <motion.article key={sport.title} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 + i * 0.1 }} className="glass-card p-7 border-t-4 border-t-[#020b24] relative">
              <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">Private Skill Development</p>
              <h3 className="text-2xl font-bold mb-2">{sport.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">{sport.description}</p>
              <div className="divide-y divide-slate-300 border-y border-slate-300 mb-5">
                {sportsPricing.map(([name, detail, price], index) => <div key={name} className="py-3 relative"><div className="flex justify-between gap-4 font-bold text-sm"><span>{name}</span><span className="text-[#020b24]">{price}</span></div><p className="text-xs text-slate-500 mt-1">{detail}{index === 3 ? ' · Best for consistent progress' : ''}</p></div>)}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">Includes a free trial/evaluation. Multi-session packages help families reserve consistent training times and build steady progress. {sport.feeNote}</p>
            </motion.article>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }} className="mt-10 bg-[#020b24] text-[#f1e3cf] p-7 md:p-9 flex flex-col md:flex-row items-center justify-between gap-6">
          <div><p className="text-[var(--gold-glow)] text-xs font-bold uppercase tracking-widest mb-2">Not sure which option fits best?</p><h3 className="text-2xl font-bold mb-2">Start with a free trial session.</h3><p className="text-slate-300 max-w-3xl">After the first session, we&apos;ll recommend either hourly support or a structured course track based on the student&apos;s goals. CoreMinds has supported 60+ students through personalized, mentor-led instruction.</p></div>
          <Link href="/booking" className="shrink-0 bg-[#f1e3cf] text-[#020b24] font-bold px-7 py-4 hover:bg-white transition-colors cursor-pointer">Book a Free Trial</Link>
        </motion.div>
      </div>
    </section>
  )
}
