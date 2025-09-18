import { motion } from "framer-motion";
interface FeatureContentProps {
  feature: {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
    image: string;
  };
}
export const FeatureContent = ({
  feature
}: FeatureContentProps) => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="text-primary">
            {feature.icon}
          </div>
          <h3 className="text-2xl font-bold">{feature.title}</h3>
        </div>
        <p className="text-muted-foreground mb-6">{feature.description}</p>
        <ul className="space-y-3">
          {feature.features.map((item, index) => <li key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </li>)}
        </ul>
      </div>
      <div className="glass rounded-xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        
      </div>
    </motion.div>;
};