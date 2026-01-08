import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollCurve } from "@/components/ui/ScrollCurve";
import { useModal } from "@/context/ModalContext";

const plans = [
  {
    name: "Local Businesses",
    price: "Service",
    period: "",
    features: [
      "Med-spas",
      "Home services",
      "Salons",
      "Dental clinics",
      "HVAC & Plumbers"
    ],
    recommended: false
  },
  {
    name: "Sales Pros",
    price: "Sales",
    period: "",
    features: [
      "Realtors",
      "Solar agents",
      "Insurance professionals",
      "Lead qualification",
      "Appointment setting"
    ],
    recommended: true
  },
  {
    name: "Agencies",
    price: "White Label",
    period: "",
    features: [
      "Your logo & branding",
      "Your pricing",
      "No development cost",
      "No technical setup",
      "Plug & Play"
    ],
    recommended: false
  }
];

export function Pricing() {
  const { openWaitlist } = useModal();

  return (
    <section id="pricing" className="py-24 bg-gray-50 text-gray-900 relative">
      <ScrollCurve />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="display-2 mb-6">
            I do my best work for <span className="italic text-[#DB6CF1]">busy pros</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative bg-white text-[#1a1a2e] rounded-3xl p-8 ${plan.recommended
                ? "shadow-2xl shadow-black/20 scale-105 border-4 border-white z-10"
                : "opacity-95 hover:opacity-100 hover:scale-[1.02] transition-all"
                }`}
            >
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="display-2 text-[#1a1a2e]">{plan.price}</span>
                  <span className="text-gray-400 ml-2 text-xl">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-lg text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#DB6CF1]/10 text-[#DB6CF1] flex items-center justify-center mr-3 flex-shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className="w-full rounded-full py-3 text-base text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                style={{ background: 'linear-gradient(180deg, rgba(219, 108, 241, 1) 30%, rgba(234, 115, 218, 1) 100%)', borderColor: 'rgba(230, 230, 230, 1)' }}
                onClick={openWaitlist}
              >
                Let Me Work For You
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
