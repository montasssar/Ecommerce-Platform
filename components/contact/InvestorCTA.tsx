'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'

export default function InvestorCTA() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const templateParams = {
      name: form.name,
      email: form.email,
      title: `PARTNER INQUIRY — ${form.company}`,
      message: form.message,
      user_type: 'partner'
    }

    emailjs.send(
      'service_ofllgnm',
      'template_2i8s6yu',
      templateParams,
      '_tyUvrL7DYKmGmaWN'
    )
    .then(() => {
      setSubmitted(true)
      setForm({ name: '', email: '', company: '', message: '' })
    })
    .catch((err: unknown) => {
      if (err instanceof Error) {
        console.error('EmailJS Error:', err.message)
      } else {
        console.error('Unknown EmailJS error:', err)
      }
      alert('Failed to send your request.')
    })
    .finally(() => setLoading(false))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-50 p-6 rounded-2xl shadow-md border border-gray-200 max-w-xl mx-auto"
    >
      {submitted ? (
        <p className="text-green-600 text-center">✅ Thanks! We’ll review your partnership request shortly.</p>
      ) : (
        <>
          <h3 className="text-xl font-semibold mb-2">Become a Partner</h3>
          <p className="text-gray-600 mb-6">
            We’re open to strategic partnerships and investment opportunities. If you believe in our
            vision, let’s connect and grow together.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-xl"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-xl"
            />
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company / Brand"
              required
              className="w-full p-3 border rounded-xl"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Proposal"
              rows={4}
              required
              className="w-full p-3 border rounded-xl"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-all disabled:opacity-60"
            >
              {loading ? 'Sending...' : 'Send Proposal'}
            </button>
          </form>
        </>
      )}
    </motion.div>
  )
}
