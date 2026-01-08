import { Link } from "wouter";
import { useModal } from "@/context/ModalContext";

export function Footer() {
  const { openWaitlist } = useModal();

  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4 block">
              Jasmyn AI
            </Link>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-6">
              Ready when you are. The AI receptionist that never sleeps.
            </p>
          </div>

          <div>
            <h4 className="heading-3 mb-6">Links</h4>
            <ul className="space-y-3 text-sm md:text-base text-gray-500">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors hover:cursor-pointer"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors hover:cursor-pointer"
                >
                  Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors hover:cursor-pointer"
                >
                  Testimonial
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="heading-3 mb-6">Get Early Access</h4>
            <p className="text-sm md:text-base text-gray-500 mb-6 leading-relaxed">
              Join the future of business automation.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm md:text-base focus:outline-none focus:border-primary transition-colors"
              />
              <button
                className="text-white px-4 py-2 rounded-lg text-sm md:text-base font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                style={{ background: 'linear-gradient(180deg, rgba(219, 108, 241, 1) 30%, rgba(234, 115, 218, 1) 100%)', borderColor: 'rgba(230, 230, 230, 1)' }}
                onClick={openWaitlist}
              >
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 Jasmyn AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <div className="w-5 h-5 bg-gray-200 rounded-full hover:bg-primary cursor-pointer transition-colors" />
            <div className="w-5 h-5 bg-gray-200 rounded-full hover:bg-primary cursor-pointer transition-colors" />
            <div className="w-5 h-5 bg-gray-200 rounded-full hover:bg-primary cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
