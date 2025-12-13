import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/fintech_dashboard_floating_in_clouds.png";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-gray-50 text-gray-900 text-xs font-bold uppercase tracking-wider mb-6 border border-gray-100 flex items-center w-fit mx-auto gap-2">
            <span className="text-[#503AF7]">★</span> FROM STRATEGY TO SUCCESS
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Build and <span className="italic font-serif">Growth</span> with <br className="hidden md:block" />
            Scalable Tools
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            Easily adapt to changes and scale your operations with our flexible infrastructure,
            designed to support your business growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="rounded-full px-8 h-12 text-base bg-gray-900 hover:bg-gray-800 text-white shadow-none transition-all">
              Get Started
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full px-8 h-12 text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all">
              Learn More
            </Button>
          </div>
          
          <div className="flex justify-center gap-16 mb-20">
             <div className="flex items-center gap-4">
               <span className="text-4xl font-serif text-gray-900">80%</span>
               <span className="text-sm text-gray-500 text-left leading-tight">Reduction in<br/>reporting time</span>
             </div>
             <div className="flex items-center gap-4">
               <span className="text-4xl font-serif text-gray-900">99</span>
               <span className="text-sm text-gray-500 text-left leading-tight">Increase in<br/>billing hours</span>
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
              alt="Catalis Dashboard Interface" 
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
