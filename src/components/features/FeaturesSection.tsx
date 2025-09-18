import { useState } from "react";
import { FeatureTab } from "./FeatureTab";
import { FeatureContent } from "./FeatureContent";
import { services } from "@/config/services";

export const FeaturesSection = () => {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <section className="container">
      <div className="glass rounded-xl p-6 md:p-8 lg:p-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Our Digital Marketing Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions designed to accelerate your business growth and maximize ROI.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {services.slice(0, 3).map((service) => (
              <FeatureTab
                key={service.id}
                feature={service}
                isHovered={hoveredTab === service.id}
                isExpanded={hoveredTab === service.id}
                onHover={() => setHoveredTab(service.id)}
                onLeave={() => setHoveredTab(null)}
              />
            ))}
          </div>
          
          {/* Second row - 2 cards centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
              {services.slice(3, 5).map((service) => (
                <FeatureTab
                  key={service.id}
                  feature={service}
                  isHovered={hoveredTab === service.id}
                  isExpanded={hoveredTab === service.id}
                  onHover={() => setHoveredTab(service.id)}
                  onLeave={() => setHoveredTab(null)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};