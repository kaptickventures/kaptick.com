import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardSpotlight } from "./CardSpotlight";
const PricingTier = ({
  name,
  price,
  description,
  features,
  isPopular
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}) => <CardSpotlight className={`h-full ${isPopular ? "border-primary" : "border-white/10"} border-2`}>
    <div className="relative h-full p-4 md:p-6 lg:p-8 flex flex-col">
      {isPopular && <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1 w-fit mb-4">
          Most Popular
        </span>}
      <h3 className="text-xl font-medium mb-2">{name}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-300">{feature}</span>
          </li>)}
      </ul>
      <Button 
        className="button-gradient w-full"
        onClick={() => {
          const message = `Hi! I'm interested in the ${name} plan. Could you please provide more details?`;
          window.open(`https://wa.me/919319595984?text=${encodeURIComponent(message)}`, '_blank');
        }}
      >
        Get Started
      </Button>
    </div>
  </CardSpotlight>;
export const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹29,999",
      description: "Perfect for small businesses looking to establish their digital presence",
      features: [
        "Website Development",
        "Basic SEO Setup",
        "Social Media Setup",
        "Google My Business",
        "Monthly Analytics Report"
      ]
    },
    {
      name: "Growth",
      price: "₹49,999",
      description: "Ideal for growing businesses ready to scale their marketing efforts",
      features: [
        "Everything in Starter",
        "Performance Marketing",
        "Advanced SEO",
        "Content Marketing",
        "Lead Generation",
        "Monthly Strategy Calls"
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large businesses with specific requirements",
      features: [
        "Everything in Growth",
        "Custom App Development",
        "Dedicated Account Manager",
        "24/7 Support",
        "Advanced Analytics",
        "Custom Integrations"
      ]
    }
  ];

  return (
    <section className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Choose Your <span className="text-primary">Growth Plan</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Transparent pricing for every stage of your business journey. All plans include our Delhi-based team support.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <PricingTier {...plan} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};