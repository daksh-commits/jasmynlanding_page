import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight, Play, Phone, Calendar, Mail, ShieldCheck, Zap, Users, Building2, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

// Assets
import heroDashboard from "@assets/generated_images/futuristic_glassmorphism_dashboard_ui_mockup.png";
import jasmynPortrait from "@assets/generated_images/jasmyn_ai_receptionist_portrait.png";
import featureLearning from "@assets/generated_images/abstract_3d_learning_concept.png";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] selection:bg-indigo-100 text-slate-900 font-sans overflow-x-hidden">
      {/* Ambient Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vh] bg-purple-200/30 blur-[140px] rounded-full mix-blend-multiply"></div>
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vh] bg-blue-200/30 blur-[140px] rounded-full mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[40vw] h-[40vh] bg-indigo-200/30 blur-[140px] rounded-full mix-blend-multiply"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto glass-card rounded-full px-8 py-4 flex items-center justify-between bg-white/60 border-white/40 shadow-sm backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold shadow-indigo-200 shadow-lg">J</div>
            <span className="font-bold text-xl tracking-tight text-slate-900">JASMYN</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#problem" className="hover:text-indigo-600 transition-colors">The Problem</a>
            <a href="#features" className="hover:text-indigo-600 transition-colors">Capabilities</a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#login" className="hover:text-indigo-600 transition-colors">Login</a>
          </div>

          <Button className="rounded-full bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-200/50 px-6 font-medium">
            Hire Jasmyn
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="space-y-8"
          >
            <motion.div variants={fadeIn}>
              <Badge variant="secondary" className="px-4 py-2 rounded-full bg-white/50 text-indigo-600 font-medium border border-indigo-100/50 mb-8 shadow-sm backdrop-blur-sm">
                <span className="font-serif-italic text-lg mr-2">New</span>
                Your AI Receptionist
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter text-slate-900 mb-6">
                Hi, I'm Jasmyn.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 font-serif-italic font-normal">I pick up every call, every time.</span>
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed max-w-lg font-light">
                I don’t get tired. I don’t miss calls. I don’t forget follow-ups. I just do my job… perfectly.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white text-lg font-medium shadow-xl shadow-indigo-200/50 hover:shadow-indigo-300/50 transition-all transform hover:-translate-y-0.5">
                Let Me Work For You
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border border-slate-200 hover:border-indigo-200 hover:bg-white/50 text-slate-600 text-lg font-medium bg-white/30 backdrop-blur-sm">
                <Play className="mr-2 w-5 h-5 fill-current" />
                Listen to Me in Action
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative perspective-1000"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-700">
               <img src={jasmynPortrait} alt="Jasmyn AI Persona" className="w-full h-auto" />
               
               {/* Floating UI Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 top-1/4 p-4 glass-card rounded-2xl flex items-center gap-3 max-w-[200px]"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Status</p>
                  <p className="font-bold text-slate-900 text-sm">Call Answered</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-6 bottom-1/4 p-4 glass-card rounded-2xl flex items-center gap-3 max-w-[220px]"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Action</p>
                  <p className="font-bold text-slate-900 text-sm">Meeting Booked</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section id="problem" className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="border-red-200 text-red-500 bg-red-50/50 px-4 py-1 mb-4 rounded-full">The Problem</Badge>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900">
            You lose more customers <span className="text-red-500 font-serif-italic font-normal">than you think.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
            Not because your service is bad… but because nobody answered the phone in time.
            <br />
            <span className="font-medium text-slate-900 mt-4 block">People don’t wait. They call the next business.</span>
          </p>
          <div className="pt-8">
            <p className="text-3xl font-serif-italic text-indigo-600">I can fix that.</p>
          </div>
        </div>
      </section>

      {/* Section 3: What I Do */}
      <section id="features" className="py-24 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Current Capabilities */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-lg">✓</span>
                Here’s what I’m trained to handle:
              </h3>
              <ul className="space-y-4">
                {[
                  "Answer calls instantly",
                  "Talk naturally (yes, people think I’m real)",
                  "Ask the right questions",
                  "Collect caller details",
                  "Book appointments in your calendar",
                  "Qualify serious leads",
                  "Send follow-up texts or emails"
                ].map((item, i) => (
                  <motion.li 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex items-center gap-4 text-lg text-slate-700 p-4 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                  >
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Future Capabilities */}
            <div className="space-y-8 relative">
              <div className="absolute inset-0 bg-indigo-50/50 rounded-3xl -z-10"></div>
              <div className="p-8 space-y-8">
                <h3 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-lg">🚀</span>
                  And soon, I’ll be able to:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Run your sales webinars",
                    "Present your offer",
                    "Answer questions live",
                    "Take payments during the presentation"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-lg text-slate-600 opacity-80">
                      <div className="w-5 h-5 rounded-full border-2 border-indigo-200 flex items-center justify-center text-[10px] text-indigo-400 font-bold shrink-0">
                        +
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-8 border-t border-indigo-100">
                  <p className="text-2xl font-serif-italic text-indigo-600 text-center">All on my own.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Who I Work Best With */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Who I work best with</h2>
            <p className="text-xl text-slate-600 font-serif-italic">I do my best work for...</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Local Businesses */}
            <Card className="glass-card border-none hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Building2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Busy Local Businesses</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Med-spas</li>
                  <li>• Home services</li>
                  <li>• Salons</li>
                  <li>• Dental clinics</li>
                  <li>• HVAC & Plumbers</li>
                  <li>• Small hotels</li>
                </ul>
              </CardContent>
            </Card>

            {/* Sales Pros */}
            <Card className="glass-card border-none hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Briefcase className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Sales-focused Pros</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Realtors</li>
                  <li>• Solar agents</li>
                  <li>• Insurance professionals</li>
                  <li>• Consultants</li>
                </ul>
              </CardContent>
            </Card>

            {/* Agencies */}
            <Card className="glass-card border-none hover:shadow-xl transition-all duration-300 bg-indigo-600 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <CardContent className="p-8 space-y-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/20 text-white flex items-center justify-center">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white">Agencies</h3>
                <p className="text-indigo-100 leading-relaxed">
                  You can even hire me under your own brand.
                </p>
                <div className="pt-4 border-t border-white/20">
                  <p className="font-serif-italic text-lg">That’s called white-label. You sell. I work.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: Why I'm Different */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
           <div className="order-2 md:order-1 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                 <img src={featureLearning} alt="AI Learning" className="w-full h-auto" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                   <p className="text-white font-serif-italic text-2xl">"I learn your business."</p>
                 </div>
              </div>
           </div>
           
           <div className="order-1 md:order-2 space-y-8">
             <div className="space-y-2">
               <h2 className="text-4xl font-bold tracking-tight text-slate-900">Why I’m different</h2>
               <div className="flex gap-2 text-slate-400 font-medium">
                 <span className="line-through">Chatbot</span>
                 <span className="line-through">Script</span>
                 <span className="line-through">Robot</span>
               </div>
             </div>
             
             <div className="space-y-6">
               <h3 className="text-2xl font-serif-italic text-indigo-600">I’m an AI worker.</h3>
               <ul className="space-y-3">
                 {[
                   "I learn your business.",
                   "I speak your tone.",
                   "I follow instructions.",
                   "I improve over time.",
                   "I handle your front desk completely."
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-lg text-slate-700">
                     <div className="w-2 h-2 rounded-full bg-indigo-400" />
                     {item}
                   </li>
                 ))}
               </ul>
               
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mt-8">
                 <p className="text-slate-600 mb-2">The Result:</p>
                 <p className="text-lg font-bold text-slate-900">
                   Your team gets more time. <br/>
                   Your customers get faster service. <br/>
                   Your business gets more revenue.
                 </p>
                 <p className="text-indigo-600 font-serif-italic mt-4 text-xl">Everyone wins.</p>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Section 6: How I Work */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">How I work</h2>
          </div>

          <div className="relative">
            <div className="absolute left-[21px] top-4 bottom-4 w-0.5 bg-indigo-100"></div>
            <div className="space-y-12">
              {[
                "Someone calls your business.",
                "I answer in one second.",
                "I greet them politely.",
                "I understand what they need.",
                "I collect their info.",
                "I book the appointment or send details to you.",
                "You only talk to serious customers."
              ].map((step, i) => (
                <div key={i} className="flex gap-8 items-center">
                  <div className="relative z-10 w-11 h-11 rounded-full bg-white border-4 border-indigo-100 flex items-center justify-center font-bold text-indigo-600 shrink-0 shadow-sm">
                    {i + 1}
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-1 glass-card">
                    <p className="text-lg font-medium text-slate-800">{step}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-8 items-center mt-12">
               <div className="w-11 shrink-0"></div>
               <p className="text-3xl font-serif-italic text-indigo-600">Simple.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Why Hire Me */}
      <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-indigo-500/20 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why you should hire me</h2>
          <p className="text-2xl text-indigo-100 font-serif-italic">Because your business grows when nothing slips through the cracks.</p>
          <p className="text-xl font-bold">And I don’t let anything slip.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
            {[
              "No missed calls",
              "No lost leads",
              "No slow follow-ups",
              "No overwhelmed staff",
              "More appointments",
              "More predictable revenue"
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center justify-center text-center">
                {item}
              </div>
            ))}
          </div>
          
          <p className="text-xl text-indigo-200 pt-8">Let me handle the busy work so you can focus on the real work.</p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 bg-indigo-50/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            "“She booked 22 appointments for us this week.”",
            "“I didn’t even know she was AI.”",
            "“We haven’t missed a call in months.”"
          ].map((quote, i) => (
            <div key={i} className="text-center p-8">
              <Star className="w-8 h-8 text-yellow-400 mx-auto mb-4 fill-current" />
              <p className="text-xl font-serif-italic text-slate-700">{quote}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-400 mt-8 text-sm">More stories coming soon.</p>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">I’m almost ready for my first official day at work.</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-serif-italic">
            Be one of the first 50 businesses to hire me.
          </p>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-2xl mx-auto">
             <p className="text-2xl font-bold text-slate-900 mb-2">I’ll take care of your calls.</p>
             <p className="text-xl text-slate-600 mb-8">You take care of your customers.</p>
             <Button size="lg" className="w-full h-16 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white text-xl font-bold shadow-xl shadow-indigo-200/50">
               Join My Waitlist
             </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">J</div>
            <span className="font-bold text-lg text-slate-900">JASMYN</span>
          </div>
          
          <div className="text-center">
             <p className="text-slate-900 font-bold mb-2">Ready when you are.</p>
             <Button variant="link" className="text-indigo-600 p-0 h-auto font-medium">Get Early Access</Button>
          </div>

          <div className="text-sm text-slate-400">
            © 2025 Jasmyn AI.
          </div>
        </div>
      </footer>
    </div>
  );
}
