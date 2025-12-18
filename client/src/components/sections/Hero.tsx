import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@assets/image_1765635756623.png";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        {/* Animated Background Waves - Heartwave Pulse */}
        <div className="absolute top-1/4 left-0 -translate-x-1/2 w-[600px] h-[600px] -z-10 opacity-30 blur-3xl pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full bg-gradient-to-br from-[#DB6CF1] to-purple-400 rounded-full mix-blend-multiply filter blur-3xl"
          />
        </div>

        <div className="absolute top-1/3 right-0 translate-x-1/2 w-[700px] h-[700px] -z-10 opacity-30 blur-3xl pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="w-full h-full bg-gradient-to-bl from-[#DB6CF1] to-indigo-300 rounded-full mix-blend-multiply filter blur-3xl"
          />
        </div>

        {/* Sound Wave Ripple Animation Layer */}
        <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
          {/* Left Sound Waves */}
          <div className="absolute top-0 left-0 h-full flex flex-row items-center gap-1 md:gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={`left-${i}`}
                className="h-full w-4 md:w-8 opacity-20 bg-gradient-to-r from-[#DB6CF1] to-transparent"
                animate={{
                  scaleX: [1, 1.5, 1],
                  opacity: [0.1, 0.3, 0.1],
                  x: [-20, 0, -20]
                }}
                transition={{
                  duration: 2 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1
                }}
                style={{ transformOrigin: 'left' }}
              />
            ))}
          </div>

          {/* Right Sound Waves */}
          <div className="absolute top-0 right-0 h-full flex flex-row-reverse items-center gap-1 md:gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={`right-${i}`}
                className="h-full w-4 md:w-8 opacity-20 bg-gradient-to-l from-[#DB6CF1] to-transparent"
                animate={{
                  scaleX: [1, 1.5, 1],
                  opacity: [0.1, 0.3, 0.1],
                  x: [20, 0, 20]
                }}
                transition={{
                  duration: 2.2 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15
                }}
                style={{ transformOrigin: 'right' }}
              />
            ))}
          </div>
        </div>

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
              <span className="text-sm text-gray-500 text-left leading-tight">Missed calls<br />guaranteed</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-4xl font-serif text-gray-900">24/7</span>
              <span className="text-sm text-gray-500 text-left leading-tight">Availability<br />every day</span>
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
