import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/fintech_dashboard_floating_in_clouds.png";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-sky-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100/50 text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-blue-200/50">
            Reimagining Finance
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-[1.1] mb-6">
            Build and <span className="italic text-primary">Grow</span> with <br className="hidden md:block" />
            Scalable Tools
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            We are passionate about empowering individuals and businesses to take control 
            of their finances and achieve their financial goals with precision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="rounded-full px-8 h-12 text-base bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base border-gray-200 hover:bg-gray-50/50 hover:border-gray-300 transition-all">
              <PlayCircle className="mr-2 h-4 w-4 text-gray-500" />
              Watch Demo
            </Button>
          </div>
        </motion.div>

        {/* Dashboard Image */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/5 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 mix-blend-overlay pointer-events-none" />
            <img 
              src={heroImage} 
              alt="Catalis Dashboard Interface" 
              className="w-full h-auto rounded-2xl"
            />
            
            {/* Floating Cards (Decorative) - Simulating the screenshot elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -left-4 top-1/4 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs">↑</div>
                <div>
                  <div className="text-xs text-gray-500">Transactions</div>
                  <div className="text-lg font-bold text-gray-900">85%</div>
                </div>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[85%]" />
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -right-8 bottom-1/4 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">+</div>
                <div>
                  <div className="text-xs text-gray-500">Card User</div>
                  <div className="text-lg font-bold text-gray-900">80%</div>
                </div>
              </div>
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white" />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
