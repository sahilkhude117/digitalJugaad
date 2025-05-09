'use client'
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const FAQ = [
  {
    question: "What is DigitalJugaad?",
    answer: "DigitalJugaad is your one-stop shop for affordable digital products priced at just Rs. 99. We offer a wide range of digital assets including ebook bundles, software, templates, websites, apps, email databases, courses, and much more."
  },
  {
    question: "How much do your digital products cost?",
    answer: "All our digital products are available at a flat rate of Rs. 99 each. This includes our ebook bundles, software, templates, websites, apps, email databases, courses, and other digital resources."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major payment methods including UPI, credit/debit cards, net banking, and popular digital wallets. All transactions are secure and processed instantly for immediate access to your purchased products."
  },
  {
    question: "Are there any hidden charges?",
    answer: "No, there are no hidden charges. The price you see is the price you pay - Rs. 99 per product. We believe in transparent pricing with no surprise fees or recurring charges unless explicitly mentioned for subscription-based products."
  },
  {
    question: "How do I access my purchased products?",
    answer: "After completing your purchase, you'll receive an email with download links or access instructions for your digital products. You can also access all your purchases through your account dashboard on our website anytime."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Due to the digital nature of our products and their affordable pricing at Rs. 99, we generally don't offer refunds. However, if you encounter any technical issues with your purchase, our support team will work with you to resolve them promptly."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we provide email support for all customers. Our team typically responds within 24-48 hours. For urgent matters, you can use the live chat option available on our website during business hours."
  },
  {
    question: "Are the products regularly updated?",
    answer: "Many of our digital products receive regular updates to ensure they remain current and valuable. When updates are available, you'll be notified via email, and you can download the latest version from your account dashboard at no extra cost."
  },
  {
    question: "Can I use these products for commercial purposes?",
    answer: "Usage rights vary by product. Most of our Rs. 99 digital products include personal use licenses. For commercial usage rights, please check the product description or contact our support team for specific licensing information."
  },
  {
    question: "Do you offer bulk discounts?",
    answer: "Yes, we offer special discounts for bulk purchases. If you're interested in purchasing multiple products or need a custom package, please contact our sales team for personalized pricing options."
  }
]

export const FAQSection = () => {
    return (
        <section id="faq" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Find answers to common questions about our platform.
              </p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {FAQ.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem value={`item-${i}`} className="border-b border-border/40 py-2">
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
    )
}