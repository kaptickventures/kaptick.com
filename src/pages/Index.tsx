import { motion } from "framer-motion";
import { ArrowRight, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import GuaranteeSection from "@/components/LogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
const Index = () => {
  return <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }} className="relative container pt-24 md:pt-32 pb-12 md:pb-16">
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-[#0A0A0A]">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/5 to-transparent opacity-50" />
          <div className="absolute inset-x-0 -top-48 -z-10 transform-gpu overflow-hidden blur-3xl">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#9089fc] opacity-20" />
          </div>
        </div>
        
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.2
      }} className="inline-block mb-4 px-4 py-1.5 rounded-full glass">
          <span className="text-sm font-medium flex items-center gap-2">
            <img src="/lovable-uploads/c1103db7-0674-4ea8-baef-90db149e421e.png" alt="Kaptick" className="w-4 h-4" />
            India's Premier Digital Marketing Agency
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal mb-4 md:mb-6 tracking-tight text-left">
            <span className="text-gray-200">
              <TextGenerateEffect words="Grow your business with " />
            </span>
            <br className="md:hidden" />
            <span className="text-white font-medium">
              <TextGenerateEffect words="digital excellence" />
            </span>
          </h1>
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }} className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-left">
            Transform your brand with cutting-edge digital marketing strategies, innovative development solutions, and data-driven performance marketing.{" "}
            <span className="text-white font-medium">Scale your business today.</span>
          </motion.p>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5
        }} className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start mt-6 md:mt-8">
            <Button 
              size="lg" 
              className="button-gradient"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Consultation
            </Button>
          </motion.div>
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.6
      }} className="relative mx-auto max-w-5xl mt-12 md:mt-16">
          <div className="glass rounded-xl overflow-hidden">
            
          </div>
        </motion.div>
      </motion.section>


      {/* Features Section */}
      <div id="features" className="bg-black py-12 md:py-16">
        <FeaturesSection />
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-black py-12 md:py-16">
        <PricingSection />
      </div>

      {/* Contact Form */}
      <div className="py-12 md:py-16">
        <ContactForm />
      </div>

      {/* Testimonials Section */}
      <div className="bg-black py-12 md:py-16">
        <TestimonialsSection />
      </div>

      {/* CTA Section */}
      <section className="container relative bg-black py-12 md:py-16">
        <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: 'url("/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to grow your business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses who have transformed their digital presence with Kaptick Media.
          </p>
          <Button 
            size="lg" 
            className="button-gradient"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Journey
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>;
};
export default Index;