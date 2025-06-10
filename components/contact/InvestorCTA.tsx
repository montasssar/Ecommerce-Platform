'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function InvestorCTA() {
  const router = useRouter()

  const handleJoinClick = () => {
    router.push('/partner-signin')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-50 p-6 rounded-2xl shadow-md border border-gray-200"
    >
      <h3 className="text-xl font-semibold mb-2">Become a Partner</h3>
      <p className="text-gray-600 mb-6">
        We’re open to strategic partnerships and investment opportunities. If you believe in our
        vision, let’s connect and grow together.
      </p>

      <button
        onClick={handleJoinClick}
        className="w-full sm:w-auto px-6 py-3 rounded-full bg-black text-white font-medium text-sm sm:text-base shadow hover:scale-105 hover:bg-gray-800 transition-all duration-300"
      >
        🤝 Join as a Partner
      </button>
    </motion.div>
  )
}
