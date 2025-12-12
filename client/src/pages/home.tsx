import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Sparkles, TrendingUp, Play, ArrowRight, CheckCircle2, Star, Calendar, Phone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

// Assets
import heroDashboard from "@assets/generated_images/futuristic_glassmorphism_dashboard_ui_mockup.png";
import jasmynPortrait from "@assets/generated_images/jasmyn_ai_receptionist_portrait.png";
import featureLearning from "@assets/generated_images/abstract_3d_learning_concept.png";
import featureProfessional from "@assets/generated_images/abstract_3d_professionalism_concept.png";

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
    <div className="min-h-screen bg-white selection:bg-indigo-100 text-slate-900 font-sans overflow-x-hidden">
      {/* Ambient Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-purple-100/60 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute top-1/2 left-0 w-[40vw] h-[40vh] bg-blue-100/60 blur-[100px] rounded-full -translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute bottom-0 right-1/4 w-[30vw] h-[30vh] bg-indigo-50/60 blur-[80px] rounded-full"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto glass-card rounded-full px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">J</div>
            <span className="font-bold text-xl tracking-tight text-slate-900">JASMYN</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#persona" className="hover:text-indigo-600 transition-colors">Persona</a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#login" className="hover:text-indigo-600 transition-colors">Login</a>
          </div>

          <Button className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200 px-6">
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
              <Badge variant="secondary" className="px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-medium border-indigo-100 mb-6">
                <Sparkles className="w-3.5 h-3.5 mr-2 inline-block" />
                The Future of Work is Here
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900 mb-6">
                The AI employee your business <span className="text-indigo-600">always wished it had.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Jasmyn is not a tool. She is not an assistant. She is an AI teammate who handles calls, bookings, and leads instantly.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold shadow-xl shadow-indigo-200 hover:shadow-indigo-300 transition-all transform hover:-translate-y-0.5">
                Meet Jasmyn
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-2 border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/50 text-slate-700 text-lg font-medium">
                <Play className="mr-2 w-5 h-5 fill-current" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-8 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
                ))}
              </div>
              <p>Trusted by 500+ forward-thinking companies</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative perspective-1000"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-white/50 backdrop-blur-sm">
              <img 
                src={heroDashboard} 
                alt="Jasmyn Dashboard Interface" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
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
                  <p className="text-xs text-slate-500">Active Call</p>
                  <p className="font-semibold text-slate-900">Booking confirmed</p>
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
                  <p className="text-xs text-slate-500">Next Action</p>
                  <p className="font-semibold text-slate-900">Schedule demo w/ Alex</p>
                </div>
              </motion.div>
            </div>
            
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] -z-10 rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">More than software. A presence.</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Stop managing tools and start working with a teammate who understands your goals.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Reliability",
                desc: "She shows up instantly. No breaks. No moods. Always polite.",
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                icon: Sparkles,
                title: "Competence",
                desc: "She never says 'loading.' She speaks clearly, helps instantly, and explains simply.",
                color: "text-purple-600",
                bg: "bg-purple-50"
              },
              {
                icon: TrendingUp,
                title: "Scale",
                desc: "Businesses feel bigger when she’s around. She handles 70+ calls a day effortlessly.",
                color: "text-indigo-600",
                bg: "bg-indigo-50"
              }
            ].map((feature, idx) => (
              <Card key={idx} className="glass-card border-none hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Jasmyn Section */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                <img src={jasmynPortrait} alt="Jasmyn AI Persona" className="w-full h-auto" />
             </div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-50"></div>
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">Meet Your New Hire</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">If Siri and Tesla AutoPilot had a daughter who worked in sales...</h2>
            <p className="text-xl text-slate-600 italic">"That's Jasmyn."</p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-indigo-600 mt-1">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Always Professional</h4>
                  <p className="text-slate-600">Zero ego. No drama. Jasmyn never uses slang, never gets emotional, and never misses a detail.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-indigo-600 mt-1">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Learning & Evolving</h4>
                  <p className="text-slate-600">You don't create features; you teach Jasmyn skills. She is learning to book appointments, qualify leads, and handle sales questions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Positioning - Bento Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">This is what customers feel:</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[500px]">
            <Card className="glass-card md:col-span-2 md:row-span-2 p-8 flex flex-col justify-center items-center text-center bg-indigo-600 text-white border-none">
              <Star className="w-12 h-12 text-yellow-300 mb-6 fill-current" />
              <p className="text-3xl md:text-4xl font-bold leading-tight">"She makes my business feel bigger."</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20" />
                <div className="text-left">
                  <p className="font-bold text-sm">Sarah Jenkins</p>
                  <p className="text-indigo-200 text-xs">CEO, TechFlow</p>
                </div>
              </div>
            </Card>
            
            <Card className="glass-card p-6 flex flex-col justify-center border-l-4 border-l-purple-500">
              <p className="text-xl font-medium text-slate-800">"She handled it."</p>
            </Card>
            
            <Card className="glass-card p-6 flex flex-col justify-center bg-slate-50">
              <p className="text-xl font-medium text-slate-800">"I can trust her."</p>
            </Card>

            <Card className="glass-card md:col-span-2 p-8 flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                <MessageSquare className="w-8 h-8 text-indigo-600" />
              </div>
              <p className="text-xl md:text-2xl font-medium text-slate-800">"My customers are talking to someone who understands them."</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Showcase 1 */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
           <div className="relative">
              <img src={featureLearning} alt="Learning" className="rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" />
              <div className="absolute -z-10 inset-0 bg-purple-500/20 blur-3xl transform scale-110"></div>
           </div>
           <div className="space-y-6">
             <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Continuously Learning</h3>
             <p className="text-lg text-slate-600 leading-relaxed">
               Jasmyn analyzes every interaction to get smarter. She identifies patterns in customer queries and adapts her responses to be more effective over time. It's like having an employee who studies the manual every single night.
             </p>
             <Button variant="ghost" className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 p-0 font-semibold text-lg">
               See how she learns <ArrowRight className="ml-2 w-5 h-5" />
             </Button>
           </div>
        </div>
      </section>

      {/* Feature Showcase 2 */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
           <div className="order-2 md:order-1 space-y-6">
             <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Unwavering Professionalism</h3>
             <p className="text-lg text-slate-600 leading-relaxed">
               Consistent brand representation, 24/7. Jasmyn ensures every customer receives the same high-quality experience, whether it's 2 PM or 2 AM. She never has a bad day.
             </p>
             <ul className="space-y-3 mt-4">
               {["Instant response time", "Perfect grammar & tone", "Context-aware answers"].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                   <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</div>
                   {item}
                 </li>
               ))}
             </ul>
           </div>
           <div className="order-1 md:order-2 relative">
              <img src={featureProfessional} alt="Professionalism" className="rounded-3xl shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500" />
              <div className="absolute -z-10 inset-0 bg-blue-500/20 blur-3xl transform scale-110"></div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600 to-purple-700 opacity-90"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Ready to hire your first AI employee?</h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Join the waitlist today and see how Jasmyn can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="h-16 px-10 rounded-full bg-white text-indigo-600 hover:bg-indigo-50 text-xl font-bold shadow-2xl">
              Hire Jasmyn Now
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 rounded-full border-2 border-indigo-300 text-white hover:bg-white/10 text-xl font-medium">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xs">J</div>
            <span className="font-bold text-lg text-slate-900">JASMYN</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600">
            <a href="#" className="hover:text-indigo-600">Features</a>
            <a href="#" className="hover:text-indigo-600">Pricing</a>
            <a href="#" className="hover:text-indigo-600">About</a>
            <a href="#" className="hover:text-indigo-600">Contact</a>
            <a href="#" className="hover:text-indigo-600">Privacy</a>
          </div>

          <div className="text-sm text-slate-400">
            © 2024 Jasmyn AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
