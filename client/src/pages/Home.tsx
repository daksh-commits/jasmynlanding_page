import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollCurve } from "@/components/ui/ScrollCurve";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />

        {/* Stats Section */}
        <section className="py-16 bg-white border-b border-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="p-4">
                <div className="text-3xl font-serif font-normal text-gray-900 mb-2">Your Team</div>
                <div className="text-lg text-gray-500 uppercase tracking-wider font-medium">Gets More Time</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-serif font-normal text-gray-900 mb-2">Your Customers</div>
                <div className="text-lg text-gray-500 uppercase tracking-wider font-medium">Get Faster Service</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-serif font-normal text-gray-900 mb-2">Your Business</div>
                <div className="text-lg text-gray-500 uppercase tracking-wider font-medium">Gets More Revenue</div>
              </div>
            </div>
          </div>
        </section>

        <Features />

        {/* Core Features / Details Section - Marquee */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="w-full">
            <div className="text-center mb-16 px-4">
              <span className="text-primary font-bold tracking-wider text-sm uppercase mb-4 block">Why I'm Different</span>
              <h2 className="text-4xl md:text-6xl font-serif font-normal text-gray-900">
                I'm not a chatbot. <br />
                I'm an <span className="italic text-primary">AI worker</span>.
              </h2>
            </div>

            {/* Scrollable container - manual scroll with arrows */}
            <div className="relative w-full group">
              {/* Gradient fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

              {/* Scroll Buttons */}
              <button
                onClick={() => {
                  const container = document.getElementById('scroll-container');
                  if (container) container.scrollBy({ left: -400, behavior: 'smooth' });
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-100 text-gray-800 hover:bg-white transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={() => {
                  const container = document.getElementById('scroll-container');
                  if (container) container.scrollBy({ left: 400, behavior: 'smooth' });
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-100 text-gray-800 hover:bg-white transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={24} />
              </button>

              <div
                id="scroll-container"
                className="flex gap-6 px-8 overflow-x-auto pb-8 pt-4 scroll-smooth [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {[
                  { title: "I learn your business", image: "/src/assets/card1.png" },
                  { title: "I speak your tone", image: "/src/assets/card2.png" },
                  { title: "I follow instructions", image: "/src/assets/card3.png" },
                  { title: "I improve over time", image: "/src/assets/card4.png" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex-shrink-0 bg-white p-6 md:p-8 rounded-[2rem] shadow-lg border border-gray-100 w-[580px] md:w-[760px] lg:w-[870px] hover:shadow-xl transition-shadow duration-300"
                  >
                    <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-4">{item.title}</h3>
                    <div className="w-full rounded-xl overflow-hidden bg-gray-50/50 border border-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Pricing />

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-wider text-sm uppercase mb-4 block">Social Proof</span>
              <h2 className="text-4xl md:text-6xl font-serif font-normal text-gray-900">
                Real results from <span className="italic text-primary">real businesses</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Med-Spa Owner", role: "Early Adopter", quote: "She booked 22 appointments for us this week. I didn't even know she was AI." },
                { name: "Local Service Pro", role: "Beta User", quote: "We haven't missed a call in months. It's like having a receptionist who never sleeps." },
                { name: "Agency Founder", role: "Partner", quote: "I can white-label this and sell it to my clients? This is a game changer." }
              ].map((t, i) => (
                <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <div className="mb-6 text-primary">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="opacity-20">
                      <path d="M14.017 21L14.017 18C14.017 16.0547 14.5916 14.3906 15.6586 13.0078C16.8047 11.5469 18.3906 10.7344 20.25 10.4219V7.64062C17.7266 7.95312 15.6875 9.125 14.017 11.1562V4H6.01719V21H14.017ZM31.0172 21L31.0172 18C31.0172 16.0547 31.5916 14.3906 32.6586 13.0078C33.8047 11.5469 35.3906 10.7344 37.25 10.4219V7.64062C34.7266 7.95312 32.6875 9.125 31.0172 11.1562V4H23.0172V21H31.0172Z" transform="translate(-6 -4)" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-6 italic text-xl">"{t.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3" />
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{t.name}</div>
                      <div className="text-base text-gray-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Bottom - Refined "Sound good?" Style with Scroll Reveal & Rolling Button */}
        <section className="py-32 bg-gray-50 text-gray-900 relative z-20">
          {/* Top Curve Separator - Scroll Activated Animation */}
          <ScrollCurve />

          {/* Background decoration - Green/Teal Gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-teal-400 to-emerald-400 opacity-20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400 to-teal-300 opacity-20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-serif font-normal mb-8 text-gray-900 tracking-tight">I'm almost ready for my first official day.</h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-10 text-xl font-medium">
              Be one of the first 50 businesses to hire me. I'll take care of your calls. You take care of your customers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="relative overflow-hidden bg-black text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-gray-900 hover:scale-105 transition-all duration-300 group">
                <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-[200%]">
                  Join My Waitlist
                </span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-[200%] transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                  Join My Waitlist
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
