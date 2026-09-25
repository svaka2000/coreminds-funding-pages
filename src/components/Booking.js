'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Gift } from 'lucide-react'
import { BOOKING_FORMSPREE_ENDPOINT } from '@/lib/formspree'

const inputClass = `w-full bg-white border border-white rounded-none px-4 py-3.5 text-slate-950 placeholder-slate-500
  transition-all duration-200 input-glow focus:bg-white text-sm outline-none`

const selectClass = `w-full bg-white border border-white rounded-none px-4 py-3.5 text-slate-950
  transition-all duration-200 input-glow focus:bg-white text-sm outline-none appearance-none cursor-pointer`

export default function Booking() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [form, setForm] = useState({
    parentName: '', studentName: '', grade: '', email: '', phone: '',
    contactMethod: '', programInterest: '', preferredTimes: '', goals: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setSubmitError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch(BOOKING_FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      setSubmitted(true)
      setForm({
        parentName: '', studentName: '', grade: '', email: '', phone: '',
        contactMethod: '', programInterest: '', preferredTimes: '', goals: '',
      })
    } catch {
      setSubmitError('Something went wrong. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="booking" ref={ref} className="relative overflow-hidden px-0 pb-20 pt-28 sm:pb-24 sm:pt-32 md:py-32">
      <div className="orb w-[500px] h-[500px] bg-slate-100 top-0 right-[-100px] pointer-events-none" />
      <div className="orb w-[400px] h-[400px] bg-[var(--gold)]/10 bottom-0 left-[-100px] pointer-events-none" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center sm:mb-12"
        >
          <div className="mb-5 flex items-center justify-center gap-3 sm:mb-6">
            <div className="w-8 h-px bg-[var(--gold)]" />
            <span className="text-[#020b24] text-xs font-bold uppercase sm:text-sm">Get Started</span>
            <div className="w-8 h-px bg-[var(--gold)]" />
          </div>
          <h2 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Book Your <span className="gradient-text">Free Session</span> Now!
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Fill out the form below and we will respond to your phone number or email within 24 hours to schedule
            your first class, completely free.
          </p>
          <a
            href="tel:6194927466"
            className="mt-6 inline-flex w-full items-center justify-center border border-[#020b24] bg-[#020b24] px-5 py-3 text-base font-black text-[#f1e3cf] transition-colors duration-200 hover:border-[var(--gold)] hover:bg-[var(--gold)] sm:w-auto sm:text-lg"
          >
            Call or text (619) 492-7466
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card gradient-border p-5 sm:p-8 md:p-10"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 rounded-none bg-[#020b24] flex items-center justify-center mx-auto mb-6 shadow-none">
                <svg className="w-10 h-10 text-[#f1e3cf]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-950 mb-3">Request Received</h3>
              <p className="text-slate-600 text-lg leading-relaxed max-w-md mx-auto">
                Thank you. Your request has been received. We will respond by phone or email within 24 hours.
              </p>

              <div className="mx-auto mt-10 max-w-md border border-[var(--gold)]/40 bg-[var(--paper-2)] p-6 text-left">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-[var(--gold)] text-[#1c1407]"><Gift size={18} strokeWidth={2.2} /></span>
                  <h4 className="font-display text-xl text-[var(--ink)]">Know another family?</h4>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  Refer a friend to CoreMinds and you both earn $10 once they book their first session.
                </p>
                <Link href="/referrals" className="btn btn-gold mt-5">Refer a friend <span aria-hidden="true">→</span></Link>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-slate-600 text-xs font-semibold uppercase mb-2">Parent / Guardian Name *</label>
                  <input
                    type="text"
                    name="parentName"
                    value={form.parentName}
                    onChange={handleChange}
                    required
                    placeholder="Full name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-slate-600 text-xs font-semibold uppercase mb-2">Student Name *</label>
                  <input
                    type="text"
                    name="studentName"
                    value={form.studentName}
                    onChange={handleChange}
                    required
                    placeholder="Student's name"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 text-xs font-semibold uppercase mb-2">Student Grade *</label>
                <div className="relative">
                  <select name="grade" value={form.grade} onChange={handleChange} required className={selectClass}>
                    <option value="" disabled>Select grade</option>
                    {['Kindergarten','1st Grade','2nd Grade','3rd Grade','4th Grade','5th Grade','6th Grade','7th Grade','8th Grade','9th Grade','10th Grade','11th Grade','12th grade'].map(g => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">▾</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-slate-600 text-xs font-semibold uppercase mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-slate-600 text-xs font-semibold uppercase mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="(555) 000-0000"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-slate-600 text-xs font-semibold uppercase mb-2">Preferred Contact *</label>
                  <div className="relative">
                    <select name="contactMethod" value={form.contactMethod} onChange={handleChange} required className={selectClass}>
                      <option value="" disabled>Select method</option>
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="either">Either</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">▾</div>
                  </div>
                </div>
                <div>
                  <label className="block text-slate-600 text-xs font-semibold uppercase mb-2">Program Interest *</label>
                  <div className="relative">
                    <select name="programInterest" value={form.programInterest} onChange={handleChange} required className={selectClass}>
                      <option value="" disabled>Select program</option>
                      <option value="academic">Academic Support</option>
                      <option value="math">Math</option>
                      <option value="english-language-arts">English Language Arts</option>
                      <option value="physics">Physics</option>
                      <option value="finance">Finance & Business</option>
                      <option value="coding">Coding</option>
                      <option value="ai-fluency">AI Fluency</option>
                      <option value="stem">STEM</option>
                      <option value="cybersecurity-linux">Cybersecurity & Linux</option>
                      <option value="drone-aerospace">Drone Theory & Aerospace Engineering</option>
                      <option value="basketball">Basketball</option>
                      <option value="guidance">Pathway Guidance</option>
                      <option value="unsure">Not Sure Yet</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">▾</div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-slate-600 text-xs font-semibold uppercase mb-2">Preferred Days / Times</label>
                <input
                  type="text"
                  name="preferredTimes"
                  value={form.preferredTimes}
                  onChange={handleChange}
                  placeholder="e.g. Weekday evenings, Saturday mornings"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-slate-600 text-xs font-semibold uppercase mb-2">
                  Student Goals / Notes <span className="text-[#020b24]">Highly Recommended</span>
                </label>
                <textarea
                  name="goals"
                  value={form.goals}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Highly recommended for the best-fit class: tell us about the student's goals, challenges, interests, or anything we should know..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full animated-gradient text-[#f1e3cf] font-bold py-5 rounded-none text-lg hover:opacity-90 transition-all duration-300 shadow-none cursor-pointer mt-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
              >
                {isSubmitting ? 'Sending Request...' : 'Book Your Free Session Now!'}
              </button>

              {submitError && (
                <p className="text-center text-red-300 text-sm" role="alert">
                  {submitError}
                </p>
              )}

              <p className="text-center text-slate-400 text-xs pt-2">
                Your information is kept private and only used for scheduling purposes. Prefer phone? Call or text
                {' '}
                <a href="tel:6194927466" className="font-bold text-[#020b24] hover:text-[var(--gold)]">
                  (619) 492-7466
                </a>
                .
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
