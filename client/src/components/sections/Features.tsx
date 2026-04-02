import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Animated Icons
const AnimatedInstagram = () => (
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
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="#DB6CF1" stroke="none" />
      </svg>
    </div>
  </div>
);

const AnimatedMegaphone = () => (
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
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M3 17h18" />
          <path d="M21 12l-3-1" />
          <path d="M21 8h-3" />
          <path d="M21 4l-3 1" />
        </svg>
      </div>
    </div>
  </div>
);

const AnimatedEnvelope = () => (
  <div className="relative w-32 h-32 flex items-center justify-center">
    {/* Floating Elements bg */}
    <motion.div
      className="absolute inset-0 rounded-3xl border border-dashed border-purple-100 transform rotate-12"
      animate={{ rotate: [12, -12, 12] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    />

    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center relative z-10">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DB6CF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4l-10 8L2 4" />
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
    component: AnimatedInstagram,
    title: "Manage your Instagram",
    description: "Content calendars, captions, hashtags, posting — all handled. Your brand stays consistent.",
  },
  {
    component: AnimatedMegaphone,
    title: "Create ad campaigns",
    description: "UGC-style video ads, Meta campaigns, scroll-stopping creatives — I build and launch them.",
  },
  {
    component: AnimatedEnvelope,
    title: "Build email flows",
    description: "Welcome series, abandoned cart, post-purchase — Klaviyo flows that capture revenue on autopilot.",
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
            Your marketing is either costing too much <br />
            or <span className="italic text-primary">not happening at all</span>.
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
