import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  BarChart3,
  ArrowRight,
  Phone,
  Mic,
  Calendar
} from "lucide-react";

// Animation Components
const Waveform = () => {
  return (
    <div className="flex items-center justify-center gap-1.5 h-16">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-gradient-to-t from-primary/80 to-primary/40 rounded-full"
          animate={{
            height: [16, 48, 16],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Central Icon */}
      <div className="absolute w-12 h-12 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl flex items-center justify-center z-10 shadow-sm">
        <Mic size={20} className="text-primary" />
      </div>
    </div>
  );
};

const PulsingCircle = () => {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {/* Outer Rings */}
      <motion.div
        className="absolute inset-0 border border-primary/20 rounded-full"
        animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.div
        className="absolute inset-0 border border-primary/20 rounded-full"
        animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
        transition={{ duration: 2.5, delay: 0.8, repeat: Infinity, ease: "easeOut" }}
      />

      {/* Core Icon */}
      <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl flex items-center justify-center relative z-10 shadow-xl shadow-primary/10">
        <Phone size={28} className="text-primary" />
      </div>
    </div>
  );
};

const AppointmentPulse = () => {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {/* Outer Rings */}
      <motion.div
        className="absolute inset-0 border border-primary/20 rounded-[2rem]"
        animate={{ scale: [1, 1.3], opacity: [0.5, 0], rotate: [0, 45] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.div
        className="absolute inset-0 border border-primary/20 rounded-[2rem]"
        animate={{ scale: [1, 1.3], opacity: [0.5, 0], rotate: [0, -45] }}
        transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeOut" }}
      />

      {/* Core Icon */}
      <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl flex items-center justify-center relative z-10 shadow-xl shadow-primary/10">
        <Calendar size={28} className="text-primary" />

        {/* Floating Success Badge */}
        <motion.div
          className="absolute -top-3 -right-3 bg-green-500 rounded-full p-1.5 shadow-sm border border-white"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ShieldCheck size={10} className="text-white" />
        </motion.div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: Zap,
    title: "Answer calls instantly",
    description: "I pick up in one second. No hold times, no waiting, just immediate service.",
    Animation: PulsingCircle,
  },
  {
    icon: Mic, // Changed from Globe2 for 'Talk naturally' context
    title: "Talk naturally",
    description: "Yes, people think I’m real. I understand context and speak with a natural tone.",
    Animation: Waveform,
  },
  {
    icon: Calendar,
    title: "Book appointments", // Shortened title for card balance
    description: "I manage your calendar directly and ensure you only speak to qualified leads.",
    Animation: AppointmentPulse,
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white overflow-hidden w-full">
      <div className="container mx-auto px-4 md:px-6 max-w-[90rem]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider text-sm uppercase mb-4 block">The Problem</span>
          <h2 className="text-4xl md:text-6xl font-serif font-normal text-gray-900 mb-6">
            You lose more customers <br />
            than <span className="italic text-primary">you think</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-[#FCFCFC] rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 flex flex-col items-center text-center relative overflow-hidden group min-h-[450px] md:h-[85vh] border border-transparent shadow-[0_15px_60px_0px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-300"
            >
              {/* Top Icon Removed */}
              <div className="mt-4" />

              {/* Text Content */}
              <div className="relative z-10 mb-6 md:mb-8 max-w-xs">
                <h3 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4 md:mb-6 tracking-tight">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">{feature.description}</p>
              </div>

              {/* Central Animation Area - Scaled Responsive */}
              <div className="relative z-10 flex-1 flex items-center justify-center w-full scale-100 md:scale-[1.8] origin-center py-4 md:py-0">
                <feature.Animation />
              </div>

              {/* Bottom Button */}
              <div className="relative z-10 mt-auto pb-0 md:pb-4">
                <button className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-bold transition-all group-hover:pr-6 border border-gray-200 shadow-sm hover:shadow-md">
                  Learn more
                  <div className="bg-gray-100 rounded-full p-1 text-gray-900">
                    <ArrowRight size={14} strokeWidth={3} />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
