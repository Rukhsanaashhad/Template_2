import Container from '@/components/Container'
import React from 'react'

const PrivacyPage = () => {
  return (
    <Container className="max-w-3xl sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Cookies and Tracking Technologies</h2>
          <p>
          I use cookies and similar technologies to enhance your experience on our website, analyze site traffic, and personalize content.
           You can manage your cookie preferences through your browser settings.
          </p>
        </section>
        <section>
          <h2  className="text-xl font-semibold mb-2">2. Data Sharing</h2>
          <p>We do not sell or rent your personal information to third parties.
             We may share your data with trusted partners for order processing, delivery, and marketing purposes,
             in accordance with our privacy practices.</p>
        </section>
        <section>
          <h2  className="text-xl font-semibold mb-2">3. Data Security</h2>
          <p>We implement appropriate security measures to protect your
             personal information from unauthorized access, disclosure, alteration, or destruction.
             </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">4. Changes to This Policy</h2>
          <p>We may update our Privacy Policy periodically. Any changes will be posted on this page, 
            and your continued use of the website signifies your acceptance of the revised policy.</p>
        </section>
      </div>
    </Container>
  )
}

export default PrivacyPage
