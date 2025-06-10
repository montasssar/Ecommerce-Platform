'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitted(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          required
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-5 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition duration-300 disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {submitted && (
          <p className="text-green-600 text-sm mt-2">✅ Message sent successfully!</p>
        )}
      </form>
    </motion.div>
  )
}
