import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Animated Icons
const AnimatedPhone = () => (
  <div className="relative w-32 h-32 flex items-center justify-center">
    {/* Ripple Effect */}
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="absolute inset-0 rounded-full border border-purple-200"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.5, opacity: [0, 0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
      />
    ))}
    {/* Central Icon container */}
    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center relative z-10">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DB6CF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.57A2 2 0 0 1 22 16.92z" />
      </svg>
    </div>
  </div>
);

const AnimatedMic = () => (
  <div className="relative w-32 h-32 flex items-center justify-center">
    <div className="flex gap-2 items-center justify-center">
      {[1, 2, 3, 4, 3, 2, 1].map((h, i) => (
        <motion.div
          key={i}
          className="w-1.5 bg-purple-200 rounded-full"
          animate={{ height: [12, h * 18, 12] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
        />
      ))}
    </div>
    {/* Central Icon Overlay */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center z-10">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DB6CF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </svg>
      </div>
    </div>
  </div>
);

const AnimatedCalendar = () => (
  <div className="relative w-32 h-32 flex items-center justify-center">
    {/* Floating Elements bg */}
    <motion.div
      className="absolute inset-0 rounded-3xl border border-dashed border-purple-100 transform rotate-12"
      animate={{ rotate: [12, -12, 12] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    />

    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center relative z-10">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DB6CF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
      {/* Green Check Badge */}
      <motion.div
        className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </motion.div>
    </div>
  </div>
);

const features = [
  {
    component: AnimatedPhone,
    title: "Answer calls instantly",
    description: "I pick up in one second. No hold times, no waiting, just immediate service.",
  },
  {
    component: AnimatedMic,
    title: "Talk naturally",
    description: "Yes, people think I’m real. I understand context and speak with a natural tone.",
  },
  {
    component: AnimatedCalendar,
    title: "Book appointments",
    description: "I manage your calendar directly and ensure you only speak to qualified leads.",
  }
];

import { useModal } from "@/context/ModalContext";

export function Features() {
  const { openWaitlist } = useModal();

  return (
    <section id="features" className="py-20 bg-white overflow-hidden w-full">
      <div className="container mx-auto px-4 md:px-6 max-w-[90rem]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="display-2">
            You lose more customers <br />
            than <span className="italic text-primary">you think</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center text-center relative overflow-hidden group border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 min-h-[500px] justify-between"
            >
              {/* Top Text Content */}
              <div className="mb-8">
                <h3 className="text-3xl font-serif mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{feature.description}</p>
              </div>

              {/* Middle Icon Animation */}
              <div className="flex-grow flex items-center justify-center my-8">
                <feature.component />
              </div>

              {/* Bottom Button */}
              <div className="mt-8 w-full flex justify-center">
                <button
                  className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full text-sm font-bold transition-all border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 group"
                  onClick={openWaitlist}
                >
                  Learn more
                  <ArrowRight size={16} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
