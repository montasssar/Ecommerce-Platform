import ContactSection from '@/components/contact/ContactSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | YourBrand',
  description: 'Get in touch with YourBrand. Reach out for support, partnerships, or investor opportunities.',
  openGraph: {
    title: 'Contact Us | YourBrand',
    description: 'Connect with our team. Partner with us or send us your inquiries.',
    url: 'https://yourdomain.com/contact',
    type: 'website',
    images: [
      {
        url: 'https://yourdomain.com/images/seo/contact-cover.png',
        width: 1200,
        height: 630,
        alt: 'Contact YourBrand',
      },
    ],
  },
  robots: 'index, follow',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen px-4 py-12 md:px-12">
      <ContactSection />
    </main>
  )
}
