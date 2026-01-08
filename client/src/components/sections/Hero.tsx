import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImage from "@assets/image_1765635756623.png";
import Aurora from "@/components/ui/Aurora";
import { useModal } from "@/context/ModalContext";
import { useState } from "react";
import { AudioModal } from "../modals/AudioModal";

export function Hero() {
  const { openWaitlist } = useModal();
  const [isAudioOpen, setIsAudioOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-white">
      {/* Static decorative gradients (no animations) */}
      {/* Aurora Background Animation */}
      <div
        className="absolute top-0 left-0 right-0 h-[285px] z-0 opacity-40 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, black 20%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 20%, transparent 100%)'
        }}
      >
        <Aurora
          colorStops={["#eeb9e8", "#e291f2", "#db6cf1"]}
          blend={0.5}
          amplitude={1.0}
          speed={1.5}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">

        <div>
          <h1 className="display-1 mb-6">
            Hi, I’m <span className="italic font-serif">Jasmyn.</span> <br className="hidden md:block" />
            Your new AI receptionist.
          </h1>
          <p className="text-body max-w-2xl mx-auto mb-10">
            I pick up every call, every time. I don’t get tired. I don’t miss calls.
            I don’t forget follow-ups. I just do my job… perfectly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="rounded-full px-8 h-12 text-base text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105" style={{ background: 'linear-gradient(180deg, rgba(219, 108, 241, 1) 30%, rgba(234, 115, 218, 1) 100%)', borderColor: 'rgba(230, 230, 230, 1)' }} onClick={openWaitlist}>
              Let Me Work For You
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full px-8 h-12 text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all"
              onClick={() => setIsAudioOpen(true)}
            >
              <PlayCircle className="mr-2 h-4 w-4" />
              Listen to Me in Action
            </Button>
          </div>

          <div className="flex justify-center gap-16 mb-20">
            <div className="flex items-center gap-4">
              <span className="heading-3">0</span>
              <span className="text-sm text-gray-400 text-left leading-tight">Missed calls<br />guaranteed</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="heading-3">24/7</span>
              <span className="text-sm text-gray-400 text-left leading-tight">Availability<br />every day</span>
            </div>
          </div>
        </div>

        {/* Dashboard Image */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Bottom Glow - Soft and Wide */}
          <div className="absolute -bottom-12 left-4 right-4 h-40 bg-[#EA73DA] opacity-50 blur-[80px] -z-10 rounded-full sm:left-10 sm:right-10" />

          {/* Subtle Side Backlights to match reference */}
          <div className="absolute top-10 bottom-10 -left-12 w-40 bg-[#EA73DA] opacity-20 blur-[60px] -z-10 rounded-full" />
          <div className="absolute top-10 bottom-10 -right-12 w-40 bg-[#EA73DA] opacity-20 blur-[60px] -z-10 rounded-full" />

          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 bg-white">
            <img
              src={heroImage}
              alt="Jasmyn AI Interface"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <AudioModal isOpen={isAudioOpen} onClose={() => setIsAudioOpen(false)} />
    </section>
  );
}
