import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic Plan",
    price: "$50.00",
    period: "/month",
    features: [
      "Basic financial tracking",
      "Up to 5 transactions/day",
      "Email support",
      "Mobile app access"
    ],
    recommended: false
  },
  {
    name: "Grand Plan",
    price: "$90.00",
    period: "/month",
    features: [
      "Advanced reporting",
      "Unlimited transactions",
      "Priority 24/7 support",
      "Dedicated account manager",
      "API access"
    ],
    recommended: true
  },
  {
    name: "Gold Plan",
    price: "$150.00",
    period: "/month",
    features: [
      "Custom solutions",
      "White-label options",
      "Enterprise security",
      "On-premise deployment",
      "Unlimited users"
    ],
    recommended: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block backdrop-blur-sm">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Simple, <span className="italic opacity-80">transparent</span> pricing
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
              className={`relative bg-white text-gray-900 rounded-3xl p-8 ${
                plan.recommended ? "shadow-2xl scale-105 border-4 border-blue-200 z-10" : "opacity-90 hover:opacity-100 hover:scale-[1.02] transition-all"
              }`}
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-500 mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-serif font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-primary flex items-center justify-center mr-3 flex-shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full rounded-full py-6 text-base ${
                  plan.recommended 
                    ? "bg-primary text-white hover:bg-primary/90" 
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                Choose Plan
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
