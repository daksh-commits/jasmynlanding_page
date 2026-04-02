import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollCurve } from "@/components/ui/ScrollCurve";
import sec1Small from "@assets/sec 1 small.jpg";
import sec2Small from "@assets/sec 2 small.jpg";
import sec3Small from "@assets/sec 3 small.jpg";
import sec4Small from "@assets/sec 4 small.jpg";
import card1 from "@assets/card 1.jpg";
import card2 from "@assets/card 2.png";
import card3 from "@assets/card 3.png";
import card4 from "@assets/card 4.png";
import { useModal } from "@/context/ModalContext";

const AnimatedCheck = () => (
  <div
    className="inline-flex items-center justify-center rounded-full p-1"
    style={{ backgroundColor: 'rgba(219, 108, 241, 0.1)' }}
  >
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#DB6CF1" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <motion.path
        d="M20 6L9 17L4 12"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </svg>
  </div>
);

export default function Home() {
  const { openWaitlist } = useModal();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />

        {/* Stats Section */}
        <section className="py-16 bg-white border-b border-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="p-4 flex flex-col items-center">
                <div className="heading-3 mb-2">No More DIY</div>
                <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-[0.15em] font-bold">
                  <AnimatedCheck />
                  <span>Marketing at midnight</span>
                </div>
              </div>
              <div className="p-4 flex flex-col items-center">
                <div className="heading-3 mb-2">No More Agencies</div>
                <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-[0.15em] font-bold">
                  <AnimatedCheck />
                  <span>$3K/mo for PDFs</span>
                </div>
              </div>
              <div className="p-4 flex flex-col items-center">
                <div className="heading-3 mb-2">Just Results</div>
                <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-[0.15em] font-bold">
                  <AnimatedCheck />
                  <span>More traffic, content & sales</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Features />

        {/* Core Features / Details Section - Grid */}
        <section id="about" className="py-24 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 px-4">
              <h2 className="display-2">
                I'm not a chatbot. <br />
                I'm an <span className="italic text-primary">AI employee</span>.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                { title: "I learn your business", image: card1, mobileImage: sec1Small },
                { title: "I follow your instructions", image: card2, mobileImage: sec2Small },
                { title: "I get better over time", image: card3, mobileImage: sec3Small },
                { title: "I run your entire marketing", image: card4, mobileImage: sec4Small },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-5 md:p-8 rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="text-2xl md:text-3xl font-serif font-normal text-gray-900 mb-6 px-2">{item.title}</h3>
                  <div className="w-full rounded-2xl overflow-hidden bg-gray-50/50 border border-gray-100 shadow-inner">
                    {item.mobileImage ? (
                      <>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="hidden md:block w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        <img
                          src={item.mobileImage}
                          alt={item.title}
                          className="block md:hidden w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                      </>
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Pricing />

        <section id="testimonials" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="display-2">
                Real results from <br className="md:hidden" /> <span className="italic text-primary">real businesses</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Ecom Founder", role: "DTC Brand", quote: "She grew our Instagram from 400 to 2,800 followers in 6 weeks." },
                { name: "Online Store Owner", role: "Shopify", quote: "Our abandoned cart flow made $8K in the first month. I didn't touch a thing." },
                { name: "Agency Founder", role: "Partner", quote: "I haven't opened a marketing tool in 3 months. Jasmyn handles everything." }
              ].map((t, i) => (
                <div key={i} className="bg-gray-50/50 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="mb-6 text-primary/20">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21L14.017 18C14.017 16.0547 14.5916 14.3906 15.6586 13.0078C16.8047 11.5469 18.3906 10.7344 20.25 10.4219V7.64062C17.7266 7.95312 15.6875 9.125 14.017 11.1562V4H6.01719V21H14.017ZM31.0172 21L31.0172 18C31.0172 16.0547 31.5916 14.3906 32.6586 13.0078C33.8047 11.5469 35.3906 10.7344 37.25 10.4219V7.64062C34.7266 7.95312 32.6875 9.125 31.0172 11.1562V4H23.0172V21H31.0172Z" transform="translate(-6 -4)" />
                    </svg>
                  </div>
                  <p className="text-quote mb-8">"{t.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-full mr-3 border border-gray-100" />
                    <div>
                      <div className="font-bold text-gray-900 text-base">{t.name}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Bottom */}
        <section className="pt-8 pb-32 bg-gray-50 text-gray-900 relative z-20">
          {/* Top Curve Separator - Scroll Activated Animation */}
          <ScrollCurve />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="display-2 mb-8">I'm ready for my first day at work.</h2>
            <p className="text-body max-w-xl mx-auto mb-10">
              $200/mo. No contracts. Cancel anytime. You text me on WhatsApp. I handle the rest.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full px-10 h-14 text-lg text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                style={{ background: 'linear-gradient(180deg, rgba(219, 108, 241, 1) 30%, rgba(234, 115, 218, 1) 100%)', borderColor: 'rgba(230, 230, 230, 1)' }}
                onClick={openWaitlist}
              >
                Hire Me Now
              </Button></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
