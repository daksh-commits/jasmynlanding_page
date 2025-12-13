import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Globe2 
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Answer calls instantly",
    description: "I pick up in one second. No hold times, no waiting, just immediate service."
  },
  {
    icon: Globe2,
    title: "Talk naturally",
    description: "Yes, people think I’m real. I understand context and speak with a natural tone."
  },
  {
    icon: BarChart3,
    title: "Book appointments",
    description: "I manage your calendar directly, booking slots while you focus on work."
  },
  {
    icon: ShieldCheck,
    title: "Qualify serious leads",
    description: "I ask the right questions to ensure you only speak to qualified potential customers."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider text-xs uppercase mb-4 block">The Problem</span>
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-gray-900 mb-6">
            You lose more customers <br />
            than <span className="italic text-primary">you think</span>.
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Not because your service is bad… but because nobody answered the phone in time.
            People don’t wait. They call the next business. I can fix that.
          </p>
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
              <h3 className="text-2xl font-medium text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
