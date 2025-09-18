import { motion } from "framer-motion";
import { ArrowRight, Check, Shield, Clock, Zap, Search, Globe, Gift, Eye, Pencil, Rocket, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const WebDevelopmentLanding = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    projectDetails: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // For phone field, only allow numeric values
    if (name === 'phone') {
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData({
        ...formData,
        [name]: numericValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
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
          email: formData.email,
          phone: formData.phone,
          businessName: formData.businessName,
          projectDetails: formData.projectDetails,
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
          email: "",
          phone: "",
          businessName: "",
          projectDetails: ""
        });
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
      <Navigation />
      
      {/* Above the Fold Hero Section */}
      <section className="hero-section relative container pt-32 md:pt-40 pb-16 md:pb-20">
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
            Frustrated with freelancers who disappear? Worried about getting a website that actually works? Get a stunning website preview in 48 hours and approve it before you pay a rupee. Our zero-risk launch takes the guesswork out of going online.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-center"
          >
            <Button 
              size="lg" 
              className="button-gradient text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto max-w-full text-center leading-tight"
              onClick={scrollToForm}
            >
              <Gift className="mr-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="hidden sm:inline">Get Your Free Website Preview & Instant Guide</span>
              <span className="sm:hidden">Get Free Website Preview & Guide</span>
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Core Offer & Process Section */}
      <section className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Simple 3-Step Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our simple, no-fuss process puts you in complete control. No surprises, no hidden costs, no obligations until you're 100% satisfied.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {[
            {
              step: "1",
              icon: Eye,
              title: "Discover",
              description: "It starts with a simple conversation. Tell us your vision, your goals, and what you want your website to achieve. We listen closely to understand you, not just your project."
            },
            {
              step: "2", 
              icon: Pencil,
              title: "Design",
              description: "Our expert team designs and builds your custom website using cutting-edge technology, ensuring it's fast, secure, and conversion-optimized.",
              highlight: "Custom Website Preview Ready in 48 Hours"
            },
            {
              step: "3",
              icon: Rocket,
              title: "Launch", 
              description: "See your new website live. We will give you a live demo of the complete site. When you are 100% happy, you pay, and we launch your new site."
            }
          ].map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass glass-hover h-full p-10 md:p-12 text-center">
                <CardContent className="p-0">
                  <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <process.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    {process.title}
                  </h3>
                  {process.highlight && (
                    <div className="mb-6 px-4 py-3 bg-primary/20 border border-primary/50 rounded-lg">
                      <p className="text-primary font-bold text-sm">
                        {process.highlight}
                      </p>
                    </div>
                  )}
                  <p className="text-gray-300 leading-relaxed">
                    {process.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Value Stack & Guarantees Section */}
      <section className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Only Website Guarantee You'll Ever Need
          </h2>
        </motion.div>

        {/* Prominent Guarantee Call-out Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="glass glass-hover p-10 md:p-12 border-2 border-primary/50 bg-primary/10">
            <CardContent className="p-0 text-center">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-6">
                100% Risk-Free Guarantee
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                If you are not absolutely thrilled with the final website we build, we will refund your entire payment, including your initial deposit.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: Clock,
              title: "Delivered in 14 Days",
              description: "Your professional website will be ready in just 2 weeks. Fast delivery without compromising on quality.",
              badge: "14 Days"
            },
            {
              icon: Zap,
              title: "Built to Convert",
              description: "A fast website that keeps visitors from bouncing. We build sites that are lightning-fast and secure so you never lose a customer to a slow page."
            },
            {
              icon: Search,
              title: "Get Found Online",
              description: "We make sure your future clients can find you. Your site is optimized from day one to start ranking on Google so you can capture organic traffic."
            },
            {
              icon: Globe,
              title: "Easy Content Management",
              description: "Update your website content easily with our user-friendly content management system. No tech skills required."
            },
            {
              icon: Gift,
              title: "Free Hosting for 1 Year",
              description: "We include 1 year of premium hosting absolutely free. Your website will be fast, secure, and always online."
            },
            {
              icon: Check,
              title: "Professional Design",
              description: "Modern, conversion-optimized design that represents your brand professionally and drives results."
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass glass-hover h-full p-8 md:p-10">
                <CardContent className="p-0">
                  <div className="flex items-start justify-between mb-6">
                    <benefit.icon className="w-12 h-12 text-primary" />
                    {benefit.badge && (
                      <div className="flex items-center gap-1 px-3 py-2 bg-primary/20 border border-primary/50 rounded-full">
                        <Calendar className="w-3 h-3 text-primary" />
                        <span className="text-primary font-semibold text-xs">
                          {benefit.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA & Lead Magnet Form Section */}
      <section id="lead-form" className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stop Waiting. Start Growing.
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The dream is a beautiful website. The reality can be confusing. We're here to change that. Get your free preview and let's build something you're proud of.
            </p>
            <p className="text-lg text-primary font-semibold max-w-2xl mx-auto mt-4">
              We only take on a limited number of projects each month to ensure the highest quality. Secure your spot today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass glass-hover p-10 md:p-16">
              <CardContent className="p-0">
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Claim Your Free Website Website Preview & Immediate Guide Today
                  </h3>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-primary">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      <span>Instant PDF Download</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      <span>Custom Website Preview in 48 Hours</span>
                    </div>
                  </div>
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
                        type="email"
                        name="email"
                        placeholder="Your Email Address *"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-primary h-12 px-4"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
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
                    <div>
                      <Input
                        type="text"
                        name="businessName"
                        placeholder="Your Business Name *"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-primary h-12 px-4"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Textarea
                      name="projectDetails"
                      placeholder="Tell us about your project (What type of business? Any specific requirements? What's your main goal?)"
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-primary resize-none p-4"
                    />
                  </div>
                  
                  <div className="text-center pt-4">
                    <Button 
                      type="submit"
                      size="lg" 
                      className="button-gradient text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 h-auto w-full md:w-auto font-semibold max-w-full text-center leading-tight"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 w-4 h-4 sm:w-5 sm:h-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Gift className="mr-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                          <span className="hidden sm:inline">Get Your Free Website Website Preview & Instant Guide</span>
                          <span className="sm:hidden">Get Free Website Preview & Guide</span>
                          <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
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
                      No spam. No hidden costs. Unsubscribe anytime.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Slots Availability Slider */}
      <section className="container py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <Card className="glass glass-hover p-8 md:p-10 border-2 border-primary/30">
            <CardContent className="p-0">
              <div className="text-center mb-6">
                <h4 className="text-lg font-bold text-white mb-3">
                  Monthly Project Slots
                </h4>
                <div className="flex items-center justify-between text-sm text-gray-300 mb-3">
                  <span>Available</span>
                  <span className="text-primary font-semibold">7/10 Booked</span>
                  <span>Fully Booked</span>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full bg-gray-700 rounded-full h-4 mb-6">
                  <motion.div 
                    className="bg-gradient-to-r from-primary to-[#ff6b6b] h-4 rounded-full relative overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  >
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse" />
                  </motion.div>
                </div>
                
                {/* Slot indicators */}
                <div className="flex justify-between absolute -top-2 left-0 right-0">
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`w-3 h-3 rounded-full border-2 ${
                        i < 7 
                          ? 'bg-primary border-primary' 
                          : 'bg-transparent border-gray-400'
                      }`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + (i * 0.1), duration: 0.3 }}
                    />
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-300">
                  <span className="text-orange-400 font-semibold">Only 3 spots remaining</span> for August 2025
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="container py-16 md:py-24">
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
            No commitment • Free Website Preview in 48hrs
          </p>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default WebDevelopmentLanding;