import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Globe2 
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Budgeting and report tracking",
    description: "Keep track of your financial progress with detailed reports and budgeting tools designed for clarity."
  },
  {
    icon: ShieldCheck,
    title: "Secure Transactions",
    description: "Enterprise-grade encryption ensures your data and money are always protected."
  },
  {
    icon: Globe2,
    title: "Global Connectivity",
    description: "Access your accounts and manage finances from anywhere in the world without friction."
  },
  {
    icon: Zap,
    title: "Instant Processing",
    description: "Real-time payment processing means you never have to wait for your money to move."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider text-xs uppercase mb-4 block">Services</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Make payment easy, simplify <br />
            your <span className="italic text-primary">finance</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-50 hover:bg-white p-8 rounded-2xl border border-transparent hover:border-blue-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
