'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function PartnerSigninPage() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    company: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate form send
      await new Promise(resolve => setTimeout(resolve, 1200))
      setSubmitted(true)
      setForm({ fullName: '', email: '', company: '', message: '' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen px-6 py-16">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center space-y-6"
      >
        <h1 className="text-3xl font-bold">Join as a Partner</h1>
        <p className="text-gray-600">
          We’re thrilled you’re considering partnering with us. Leave us a message, and we’ll be in touch.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full p-3 rounded-lg border border-gray-300"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full p-3 rounded-lg border border-gray-300"
          />
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company (optional)"
            className="w-full p-3 rounded-lg border border-gray-300"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
            placeholder="Tell us why you're interested..."
            className="w-full p-3 rounded-lg border border-gray-300"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition"
          >
            {loading ? 'Submitting...' : 'Submit Interest'}
          </button>

          {submitted && (
            <p className="text-green-600 text-sm mt-2 text-center">
              ✅ Your message has been sent! We’ll reach out soon.
            </p>
          )}
        </form>
      </motion.section>
    </main>
  )
}
