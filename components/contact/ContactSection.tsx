'use client'

import { useEffect } from 'react'
import ContactForm from './ContactForm'
import InvestorCTA from './InvestorCTA'

export default function ContactSection() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "YourBrand",
      image: "https://yourdomain.com/images/seo/logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rue Ahmed Tlili",
        addressLocality: "Ariana",
        addressRegion: "Tunis",
        postalCode: "2080",
        addressCountry: "Tunisia",
      },
      telephone: "+21650313321",
      url: "https://yourdomain.com/contact",
      sameAs: ["https://www.linkedin.com/company/yourbrand"]
    })
    document.head.appendChild(script)
  }, [])

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      {/* Left: Map + Contact Info */}
      <div className="space-y-6">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.688441215019!2d10.187342015282864!3d36.86233667994012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13029ecf48a8d1d5%3A0xa1a01cbe2d91eb62!2sRue%20Ahmed%20Tlili%2C%20Ariana!5e0!3m2!1sen!2stn!4v1718031621222!5m2!1sen!2stn"
          className="w-full h-64 rounded-xl shadow-md border"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="space-y-2 text-sm sm:text-base">
          <p className="text-lg font-semibold">Visit Us</p>
          <p className="text-gray-600">Rue Ahmed Tlili, Ariana, Tunisia</p>
          <p className="text-gray-600">
            📞 <a href="tel:+21650313321" className="text-blue-600 hover:underline">+216 50 313 321</a>
          </p>
          <p className="text-gray-600">
            ✉️ <a href="mailto:montassar579@gmail.com" className="text-blue-600 hover:underline">montassar579@gmail.com</a>
          </p>
        </div>
      </div>

      {/* Right: Contact Form + CTA */}
      <div className="space-y-10">
        <ContactForm />
        <InvestorCTA />
      </div>
    </section>
  )
}
