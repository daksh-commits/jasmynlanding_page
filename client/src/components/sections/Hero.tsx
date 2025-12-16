import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@assets/image_1765635756623.png";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Hi, I’m <span className="italic font-serif">Jasmyn.</span> <br className="hidden md:block" />
            Your new AI receptionist.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            I pick up every call, every time. I don’t get tired. I don’t miss calls. 
            I don’t forget follow-ups. I just do my job… perfectly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="rounded-full px-8 h-12 text-base text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105" style={{ background: 'linear-gradient(180deg, rgba(219, 108, 241, 1) 30%, rgba(234, 115, 218, 1) 100%)', borderColor: 'rgba(230, 230, 230, 1)' }}>
              Let Me Work For You
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full px-8 h-12 text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all">
              <PlayCircle className="mr-2 h-4 w-4" />
              Listen to Me in Action
            </Button>
          </div>
          
          <div className="flex justify-center gap-16 mb-20">
             <div className="flex items-center gap-4">
               <span className="text-4xl font-serif text-gray-900">0</span>
               <span className="text-sm text-gray-500 text-left leading-tight">Missed calls<br/>guaranteed</span>
             </div>
             <div className="flex items-center gap-4">
               <span className="text-4xl font-serif text-gray-900">24/7</span>
               <span className="text-sm text-gray-500 text-left leading-tight">Availability<br/>every day</span>
             </div>
          </div>
        </motion.div>

        {/* Dashboard Image */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100 bg-white">
            <img 
              src={heroImage} 
              alt="Jasmyn AI Interface" 
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
