import { motion } from "framer-motion";
import { ArrowRight, Check, Star, Clock, Users, Target, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

interface ServicePageProps {
  serviceName: string;
  heroTitle: string;
  heroSubtitle: string;
  aboutContent: {
    title: string;
    paragraphs: string[];
    imageUrl: string;
  };
  features: {
    icon: React.ComponentType<any>;
    title: string;
    description: string;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  testimonials: {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
  }[];
}

const ServiceTemplate = ({ 
  serviceName,
  heroTitle, 
  heroSubtitle,
  aboutContent,
  features,
  process,
  testimonials
}: ServicePageProps) => {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container pt-32 md:pt-40 pb-16 md:pb-20"
      >
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-[#0A0A0A]">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/5 to-transparent opacity-50" />
          <div className="absolute inset-x-0 -top-48 -z-10 transform-gpu overflow-hidden blur-3xl">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#9089fc] opacity-20" />
          </div>
        </div>

        <div className="max-w-4xl relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
          >
            <span className="text-sm font-medium flex items-center gap-2">
              <img src="/lovable-uploads/c1103db7-0674-4ea8-baef-90db149e421e.png" alt="Kaptick" className="w-4 h-4" />
              {serviceName}
            </span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal mb-4 md:mb-6 tracking-tight text-left">
            <span className="text-white font-medium">
              {heroTitle}
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-left"
          >
            {heroSubtitle}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start mt-6 md:mt-8"
          >
            <Button 
              size="lg" 
              className="button-gradient"
              onClick={scrollToContact}
            >
              Get Started Today
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* About the Service Section */}
      <section className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {aboutContent.title}
            </h2>
            {aboutContent.paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-gray-200 mb-4">
                {p}
              </p>
            ))}
          </div>
          {serviceName === "SEO Optimization" ? (
            <div className="flex justify-center items-center">
              <div className="glass rounded-2xl overflow-hidden shadow-lg border border-white/10 p-2">
                <img
                  src={"/assets/Unlock the Power of SEO for Your Business Growth - visual selection.svg"}
                  alt="Unlock the Power of SEO for Your Business Growth"
                  className="w-full h-auto max-w-lg object-contain rounded-xl"
                />
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <div className="glass rounded-2xl overflow-hidden shadow-lg border border-white/10 p-2">
                <img
                  src={aboutContent.imageUrl}
                  alt={aboutContent.title}
                  className="w-full h-auto max-w-lg object-contain rounded-xl"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Key Features Section */}
      <section className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our <span className="text-primary">{serviceName}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to deliver exceptional results for your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass glass-hover h-full p-6 md:p-8">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Proven Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to deliver outstanding results every time.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {step.step}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've helped businesses achieve their goals.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass glass-hover h-full p-6 md:p-8">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative"
        >
          <div className="absolute inset-0 opacity-20 rounded-2xl" 
               style={{
                 backgroundImage: 'url("/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png")',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
               }} 
          />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our {serviceName.toLowerCase()} solutions can help you achieve your goals.
            </p>
            <Button 
              size="lg" 
              className="button-gradient"
              onClick={scrollToContact}
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Contact Form */}
      <div className="py-16 md:py-24">
        <ContactForm />
      </div>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default ServiceTemplate;
