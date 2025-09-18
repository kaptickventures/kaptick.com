import { motion } from "framer-motion";
import { ArrowRight, Check, Shield, Clock, Zap, Search, Globe, Gift, Eye, Pencil, Rocket, Calendar, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

// Google Ads Conversion Tracking
function gtag_report_conversion(url?: string) {
  const callback = function () {
    if (typeof(url) != 'undefined') {
      window.location.href = url;
    }
  };
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
        'send_to': 'AW-11362018710/KWslCNCKnI4bEJbL6qkq',
        'event_callback': callback
    });
  } else {
    // Fallback if gtag is not loaded
    callback();
  }
  return false;
}

const WebDevelopmentLanding = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    budget: ''
  });
  const [heroBusinessName, setHeroBusinessName] = useState('');

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [showStickyButton, setShowStickyButton] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  // Handle scroll for sticky button
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section');
      const formSection = document.getElementById('lead-form');
      
      if (heroSection && formSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        const formRect = formSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Show sticky button only when:
        // 1. Hero section is out of view (scrolled past it)
        // 2. Form is not visible in viewport (either above or below current view)
        const heroOutOfView = heroBottom < 0;
        const formInView = formRect.top < windowHeight && formRect.bottom > 0;
        
        setShowStickyButton(heroOutOfView && !formInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    try {
      // Use the production backend endpoint (same as working contact form)
      const response = await fetch("https://kaptick.com/backend/website_leads.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          budget: formData.budget,
          sourcePage: "web-development-landing"
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitMessage({
          type: 'success', 
          text: "Thank you! Your inquiry has been submitted successfully. You'll receive a confirmation email shortly and we'll get back to you within 48 hours with your free Website Preview!"
        });
        setFormData({
          name: "",
          phone: "",
          budget: ""
        });
        const whatsappUrl = 'https://wa.me/9319595984?text=' + encodeURIComponent('I want the Free Ebook and the Free Website Preview');
        gtag_report_conversion(whatsappUrl);
      } else {
        setSubmitMessage({
          type: 'error',
          text: "Submission failed: " + (result.error || "Please try again.")
        });
      }
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: "Network error. Please try again."
      });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
  {/* <Navigation /> */}
      
  {/* Above the Fold Hero Section */}
  <section className="hero-section relative container pt-8 md:pt-40 pb-16 md:pb-20">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
          <div className="absolute inset-x-0 -top-48 -z-10 transform-gpu overflow-hidden blur-3xl">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#9089fc] opacity-20" />
          </div>
        </div>

  <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-4 py-2 rounded-full glass border border-primary/20"
          >
            <span className="text-sm font-medium flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              100% Money-Back Guarantee
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            <span className="text-primary">The Zero-Risk</span>
            <br />
            <span className="text-white">Website Launch.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Frustrated with freelancers who disappear? Worried about getting a website that actually works? <span className="text-green-400 font-semibold">Get a stunning website preview in 48 hours and approve it before you pay a rupee.</span> Our zero-risk launch takes the guesswork out of going online.
          </motion.p>
          {/* Contact Form moved to hero section */}
          <div className="mt-8 max-w-2xl mx-auto">
            <Card className="glass glass-hover p-8 md:p-10">
              <CardContent className="p-0">
                <div className="mb-4 flex justify-center">
                  <span className="inline-flex items-center gap-2 bg-green-700/20 border border-green-500/30 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
                    <Shield className="w-4 h-4 text-green-400" />
                    100% Money-Back Guarantee
                  </span>
                </div>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Full Name *"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-primary h-12 px-4"
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone Number *"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        maxLength={15}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-primary h-12 px-4"
                      />
                    </div>
                  </div>
                  <div>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:border-primary h-12 px-4 rounded w-full font-normal text-base"
                      style={{ WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none' }}
                    >
                      <option value="" disabled hidden style={{ color: '#9ca3af', background: 'rgba(255,255,255,0.05)' }}>Your Budget here</option>
                      <option value="Under ₹20,000" className="text-white bg-black">Under ₹20,000</option>
                      <option value="₹20,000-40,000" className="text-white bg-black">₹20,000-40,000</option>
                      <option value="₹40,000-60,000" className="text-white bg-black">₹40,000-60,000</option>
                      <option value="Above ₹60,000" className="text-white bg-black">Above ₹60,000</option>
                    </select>
                  </div>
                  <div className="text-center pt-4">
                    <Button 
                      type="submit"
                      size="lg"
                      className="bg-green-600 hover:bg-green-700 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 h-auto w-full max-w-lg mx-auto text-center leading-tight flex items-center justify-center font-bold text-white rounded-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="font-bold text-sm sm:text-base">Submitting...</span>
                      ) : (
                        <>
                          <MessageCircle className="mr-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                          <span className="font-bold text-sm sm:text-base">Get Free Website Preview & Guide</span>
                        </>
                      )}
                    </Button>
                    {/* Success/Error Message */}
                    {submitMessage && (
                      <div className={`mt-6 p-4 rounded-lg ${submitMessage.type === 'success' 
                        ? 'bg-green-600/20 border border-green-400/30 text-green-300' 
                        : 'bg-red-600/20 border border-red-400/30 text-red-300'
                      }`}>
                        <p className="text-sm font-medium">{submitMessage.text}</p>
                      </div>
                    )}
                    <p className="text-sm text-gray-400 mt-6">
                      No spam. No hidden costs. Unsubscribe anytime.<br />
                      <span className="inline-flex items-center gap-1 text-green-400 font-semibold"><Shield className="w-3 h-3" /> 100% Money-Back Guarantee</span>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Value Stack & Guarantees Section (heading removed as requested) */}
      <section className="container py-0 md:py-8">
        {/* Prominent Guarantee Call-out Box remains if needed */}
      </section>

      {/* Slots Availability Slider */}
      <section className="container py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-md mx-auto"
        />
      </section>

  {/* FAQ Section */}
  <section className="container pt-4 md:pt-8 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              question: "What's the catch with the free Website Preview?",
              answer: "There's absolutely no catch. The free Website Preview is our way of showing you the quality of our work before you make any commitment. You can review it, provide feedback, or simply walk away with no obligation."
            },
            {
              question: "How is the Website Preview actually free?",
              answer: "The free Website Preview is part of our lead generation process. We create it to demonstrate our capabilities and build trust with potential clients. It's an investment in starting a relationship with you."
            },
            {
              question: "What happens if I don't like the Website Preview?",
              answer: "If the Website Preview doesn't meet your expectations, you can provide specific feedback for revisions, or you can simply walk away with no cost, no obligation, and no hard feelings. Your satisfaction is our priority."
            },
            {
              question: "How much will a website actually cost?",
              answer: "We provide a transparent, fixed-price quote based on your free Website Preview and project scope. There are no hidden fees. Our goal is to give you a clear, upfront price so you can decide with confidence."
            },
            {
              question: "What's the timeline for the final website?",
              answer: "Our process is designed to deliver a high-quality, professional website in just 14 days. If your project is larger or requires custom features, we'll provide a custom timeline after you approve the Website Preview."
            },
            {
              question: "Is backend access always free?",
              answer: "You will always own all of your website's code files. For ease of use, we include free access to our custom backend software for up to two years. If you choose to work with us for ongoing SEO or social media services, your website support, including backend access, is complimentary for the duration of our partnership."
            },
            {
              question: "What's included in the price?",
              answer: "Our packages include a professional, custom design, all development, basic SEO, a user-friendly backend, and free hosting for the first year. We also provide 3 months of complimentary support to ensure a smooth launch."
            },
            {
              question: "How do we communicate during the project?",
              answer: "We believe in clear, direct communication. You'll have a single point of contact who will provide regular updates and is available to answer your questions to ensure a transparent process."
            },
            {
              question: "What happens after the website is launched?",
              answer: "After launch, you'll have full ownership and control of your new site. We'll provide documentation to help you, and our support team is available if you need any assistance."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass glass-hover">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full p-8 md:p-10 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <h3 className="text-xl font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {openFAQ === index && (
                    <div className="px-8 md:px-10 pb-8 md:pb-10 pt-0">
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

  {/* Sticky CTA Button for Mobile */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ 
          y: showStickyButton ? 0 : 100, 
          opacity: showStickyButton ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-gradient-to-r from-primary to-[#ff6b6b] p-4 shadow-lg"
        style={{ 
          background: 'linear-gradient(135deg, #e31e24 0%, #ff6b6b 100%)',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <div className="max-w-sm mx-auto">
          <Button 
            onClick={scrollToForm}
            className="w-full bg-white text-[#e31e24] hover:bg-gray-100 font-bold py-3 px-4 rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
          >
            <Gift className="mr-2 w-5 h-5" />
            Get Free Website Preview Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-white text-xs text-center mt-2 opacity-90">
            No commitment • Free Website Preview in 48hrs<br />
            <span className="inline-flex items-center gap-1 text-green-300 font-semibold"><Shield className="w-3 h-3" /> 100% Money-Back Guarantee</span>
          </p>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default WebDevelopmentLanding;