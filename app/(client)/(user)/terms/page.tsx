import Container from '@/components/Container'
import React from 'react'

const TermsPage = () => {
  return (
       <Container className="max-w-3xl sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <div className="space-y-2">
          <section>
            <h2 className="text-xl font-semibold mb-2">
              1. Acceptance of Terms
              </h2>
              <p>
              By accessing and using my website, you agree to comply with and be bound by these Terms and Conditions. 
              If you do not agree with any part of these terms, you must not use our website.
              </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">
            2. Product Information
            </h2>
            <p>
            While we strive to provide accurate and up-to-date information regarding our products,
             we make no warranties as to the completeness or accuracy of the information. 
            Prices and availability may change without notice, and we reserve the right to correct any errors.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">3. Orders and Payments</h2>
            <p>
            All orders placed on my website are subject to acceptance by me. After you place an order, you will receive an email confirmation.
             Payment must be made at the time of purchase, and we accept various forms of payment as indicated on my site.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">4. Shipping and Delivery</h2>
            <p>
            My aim to deliver your order within the estimated time-frame provided at the time of purchase. However,
             delays may occur due to unforeseen circumstances.
             We are not liable for any delays, and it is your responsibility to ensure that the delivery address is accurate.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">5. Returns and Refunds</h2>
            <p>
            If you are not satisfied with your purchase, you may return the item within our stipulated return period, provided it is in its original condition. Please consult our Return Policy for detailed instructions on the return process. Refunds will be processed within a specified time-frame upon receiving the returned products
            </p>
          </section>
        </div>
       </Container>
  )
}

export default TermsPage
