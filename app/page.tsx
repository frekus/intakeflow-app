'use client'

import { useState } from 'react'

const features = [
  {
    icon: '📋',
    title: 'Instant Lead Logging',
    description:
      'Every form submission is captured and written to Google Sheets automatically — no copy-pasting, no missed leads.',
  },
  {
    icon: '📅',
    title: 'Auto-Generated Booking Links',
    description:
      'A personalised Calendly scheduling link is created for every lead the moment they submit — and sent instantly.',
  },
  {
    icon: '✉️',
    title: 'Branded Email Confirmation',
    description:
      'A professional Gmail confirmation goes out within seconds of the form submission, complete with the booking link.',
  },
  {
    icon: '⚡',
    title: 'Real-Time Team Alerts',
    description:
      'Your sales team gets a Slack notification the moment a new lead comes in — so nobody is ever caught off guard.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Client submits your form',
    description:
      "Your Google Form captures the lead's name, email, company, and service interest.",
  },
  {
    number: '02',
    title: 'IntakeFlow fires instantly',
    description:
      'The workflow logs the lead, generates a Calendly link, sends the email, and alerts your team — all in under 10 seconds.',
  },
  {
    number: '03',
    title: 'You focus on closing',
    description:
      'No tab-switching, no manual emails, no forgotten follow-ups. The admin is done before you even see the notification.',
  },
]


const stats = [
  { value: '15–20 min', label: 'of manual admin eliminated per lead' },
  { value: '< 10 sec', label: 'from form submission to email sent' },
  { value: '4 tools', label: 'unified in one automated sequence' },
  { value: '0', label: 'leads slipping through the cracks' },
]

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
              I
            </div>
            <span className="font-bold text-gray-900 text-lg tracking-tight">
              IntakeFlow
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600 font-medium">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How it works</a>
            <a href="#showcase" className="hover:text-gray-900 transition-colors">Demo</a>
          </div>
          <a
            href="#get-started"
            className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Book a Demo
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 to-white pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 text-sm text-blue-700 font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Powered by n8n · Fully automated
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
            Client Intake{' '}
            <span className="text-blue-600">Without the Wait</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            One form submission triggers everything — lead logged, meeting
            booked, email sent, team notified. What used to take 15–20 minutes
            of manual work now takes under 10 seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#get-started"
              className="bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-700 transition-colors text-base shadow-md shadow-blue-200"
            >
              Book a Demo
            </a>
            <a
              href="#how-it-works"
              className="bg-white text-gray-700 font-semibold px-7 py-3.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors text-base"
            >
              See how it works →
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-y border-gray-100 bg-gray-50/60">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-blue-600 mb-1">{s.value}</p>
              <p className="text-sm text-gray-500 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Be the first to act on<br />every new lead — instantly
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            IntakeFlow unifies four tools into one automated sequence so your team
            focuses on conversations, not admin.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl flex-shrink-0">
                {f.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1 text-lg">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="py-24 bg-gray-50/60 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">How it works</p>
            <h2 className="text-4xl font-extrabold text-gray-900">
              From form to follow-up in 3 steps
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-blue-100 z-0" style={{ width: 'calc(100% - 2rem)' }} />
                )}
                <div className="relative z-10 bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                  <div className="text-4xl font-extrabold text-blue-100 mb-4">{step.number}</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Showcase ── */}
      <section id="showcase" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Product Showcase</p>
          <h2 className="text-4xl font-extrabold text-gray-900">See IntakeFlow in Action</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            The full workflow — from form submission to Slack notification — runs automatically every time.
          </p>
          <a
            href="#get-started"
            className="inline-block mt-6 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-md shadow-blue-200"
          >
            Book a Demo
          </a>
        </div>

        {/* Workflow visual */}
        <div className="bg-gray-900 rounded-2xl p-8 overflow-x-auto">
          <div className="flex items-center gap-3 min-w-max mx-auto w-fit">
            {[
              { icon: '📝', label: 'Google Form', sub: 'Lead submits' },
              { icon: '📊', label: 'Google Sheets', sub: 'Lead logged' },
              { icon: '📅', label: 'Calendly', sub: 'Link created' },
              { icon: '✉️', label: 'Gmail', sub: 'Email sent' },
              { icon: '💬', label: 'Slack', sub: 'Team alerted' },
            ].map((node, i, arr) => (
              <div key={node.label} className="flex items-center gap-3">
                <div className="bg-gray-800 border border-gray-700 rounded-xl px-5 py-4 text-center w-32">
                  <div className="text-2xl mb-2">{node.icon}</div>
                  <div className="text-white text-xs font-semibold">{node.label}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{node.sub}</div>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex items-center gap-1 text-blue-400">
                    <div className="w-6 h-px bg-blue-500" />
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Every node fires automatically · End-to-end in under 10 seconds
          </p>
        </div>
      </section>

      {/* ── CTA / Get Started ── */}
      <section id="get-started" className="py-24 bg-blue-600">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Start automating your client intake today
          </h2>
          <p className="text-blue-100 text-lg mb-10">
            Enter your email and we will reach out to set up your IntakeFlow workflow — usually live within 48 hours.
          </p>
          {submitted ? (
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-white">
              <div className="text-4xl mb-3">🎉</div>
              <p className="font-bold text-xl mb-1">You are on the list!</p>
              <p className="text-blue-100 text-sm">We will be in touch within 24 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3.5 rounded-xl text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-white text-blue-600 font-bold px-6 py-3.5 rounded-xl hover:bg-blue-50 transition-colors text-sm disabled:opacity-70 whitespace-nowrap"
              >
                {loading ? 'Sending…' : 'Book a Demo'}
              </button>
            </form>
          )}
          <p className="text-blue-200 text-xs mt-5">
            No credit card required · Setup included · Cancel anytime
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white text-xs font-bold">I</div>
            <span className="text-white font-bold text-sm">IntakeFlow</span>
          </div>
          <p className="text-sm text-center">
            Where leading sales teams stay ahead — without lifting a finger.
          </p>
          <p className="text-xs">© {new Date().getFullYear()} IntakeFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
