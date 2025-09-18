import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface FeatureTabProps {
  feature: {
    id: string;
    title: string;
    description: string;
    icon: ReactNode;
    features: string[];
    image: string;
  };
  isHovered: boolean;
  isExpanded: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export const FeatureTab = ({ feature, isHovered, isExpanded, onHover, onLeave }: FeatureTabProps) => {
  const navigate = useNavigate();

  // Map service IDs to their respective route paths
  const getServiceRoute = (serviceId: string) => {
    const routeMap: { [key: string]: string } = {
      'web-development': '/website-development',
      'seo': '/seo-optimization',
      'social-media': '/social-media-management',
      'pr': '/public-relations',
      'performance-marketing': '/performance-marketing'
    };
    return routeMap[serviceId] || '/';
  };

  const handleCardClick = () => {
    navigate(getServiceRoute(feature.id));
  };
  return (
    <motion.div 
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={handleCardClick}
      layout
      className={`
        w-full p-6 rounded-xl cursor-pointer relative overflow-hidden
        transition-all duration-500 ease-in-out
        ${isHovered 
          ? 'glass shadow-xl shadow-primary/20 border border-primary/30' 
          : 'glass-hover border border-white/10'
        }
      `}
      initial={false}
      animate={{
        scale: isHovered ? 1.02 : 1,
        zIndex: isHovered ? 10 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      whileTap={{ scale: 0.98 }}
    >
      {isHovered && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute left-0 top-0 w-1 h-full bg-primary rounded-l-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 transition-colors duration-300 ${isHovered ? 'text-primary' : 'text-muted-foreground'}`}>
          {feature.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={`font-semibold text-lg mb-2 transition-colors duration-300 ${isHovered ? 'text-primary' : 'text-white'}`}>
            {feature.title}
          </h3>
          <p className="text-muted-foreground mb-4">
            {feature.description}
          </p>
          
          {/* Always visible "Learn More" indicator */}
          <div className={`flex items-center text-sm font-medium transition-colors duration-300 mb-4 ${
            isHovered ? 'text-primary' : 'text-muted-foreground'
          }`}>
            <span>Learn More</span>
            <ArrowRight className={`w-4 h-4 ml-1 transition-all duration-300 ${
              isHovered ? 'translate-x-1' : ''
            }`} />
          </div>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="space-y-4"
              >
                <div>
                  <h4 className="font-medium text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {feature.features.map((feat, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {feat}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};