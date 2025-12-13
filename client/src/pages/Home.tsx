import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

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
                <div className="text-xl font-serif font-bold text-gray-900 mb-2">Your Team</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">Gets More Time</div>
              </div>
              <div className="p-4">
                <div className="text-xl font-serif font-bold text-gray-900 mb-2">Your Customers</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">Get Faster Service</div>
              </div>
              <div className="p-4">
                <div className="text-xl font-serif font-bold text-gray-900 mb-2">Your Business</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">Gets More Revenue</div>
              </div>
            </div>
          </div>
        </section>

        <Features />

        {/* Core Features / Details Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-wider text-xs uppercase mb-4 block">Why I'm Different</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">
                I’m not a chatbot. <br />
                I’m an <span className="italic text-primary">AI worker</span>.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { title: "I learn your business", metric: "100%", label: "Adaptability" },
                { title: "I speak your tone", metric: "Human", label: "Natural Voice" },
                { title: "I follow instructions", metric: "Precise", label: "Protocol Adherence" },
                { title: "I improve over time", metric: "∞", label: "Continuous Learning" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-6">{item.title}</h3>
                  <div className="w-full bg-gray-50 rounded-xl p-6 border border-dashed border-gray-200">
                    <div className="text-3xl font-bold text-primary mb-1">{item.metric}</div>
                    <div className="text-xs text-gray-500">{item.label}</div>
                    {/* Fake Chart Line */}
                    <div className="mt-4 h-12 flex items-end space-x-1">
                      {[40, 60, 45, 70, 50, 80, 65, 90].map((h, i) => (
                        <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-blue-100 rounded-sm" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Pricing />
        
        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-wider text-xs uppercase mb-4 block">Social Proof</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">
                Real results from <span className="italic text-primary">real businesses</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Med-Spa Owner", role: "Early Adopter", quote: "She booked 22 appointments for us this week. I didn't even know she was AI." },
                { name: "Local Service Pro", role: "Beta User", quote: "We haven’t missed a call in months. It's like having a receptionist who never sleeps." },
                { name: "Agency Founder", role: "Partner", quote: "I can white-label this and sell it to my clients? This is a game changer." }
              ].map((t, i) => (
                <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                   <div className="mb-6 text-primary">
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="opacity-20">
                       <path d="M14.017 21L14.017 18C14.017 16.0547 14.5916 14.3906 15.6586 13.0078C16.8047 11.5469 18.3906 10.7344 20.25 10.4219V7.64062C17.7266 7.95312 15.6875 9.125 14.017 11.1562V4H6.01719V21H14.017ZM31.0172 21L31.0172 18C31.0172 16.0547 31.5916 14.3906 32.6586 13.0078C33.8047 11.5469 35.3906 10.7344 37.25 10.4219V7.64062C34.7266 7.95312 32.6875 9.125 31.0172 11.1562V4H23.0172V21H31.0172Z" transform="translate(-6 -4)"/>
                     </svg>
                   </div>
                   <p className="text-gray-600 mb-6 italic">"{t.quote}"</p>
                   <div className="flex items-center">
                     <div className="w-10 h-10 bg-gray-300 rounded-full mr-3" />
                     <div>
                       <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                       <div className="text-xs text-gray-500">{t.role}</div>
                     </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Bottom */}
        <section className="py-24 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden">
           {/* Background decoration */}
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
           
           <div className="container mx-auto px-4 relative z-10 text-center">
             <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">I’m almost ready for my first official day.</h2>
             <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
               Be one of the first 50 businesses to hire me. I’ll take care of your calls. You take care of your customers.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
                 Join My Waitlist
               </button>
             </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
