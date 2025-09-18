import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useToast } from "./ui/use-toast";
import { trackFormSubmission, trackServiceInterest } from "../lib/analytics";

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    website: "",
    description: ""
  });

  const services = [
    "Website Development",
    "SEO Optimization",
    "Social Media Management",
    "Public Relations",
    "Performance Marketing"
  ];

  // Forms will now use PHP backend on your Hostinger server

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Updated to use kaptick.com domain
      const response = await fetch("https://kaptick.com/backend/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.service, // Using service as subject
          message: `Service: ${formData.service}\nWebsite: ${formData.website || 'Not provided'}\nDescription: ${formData.description}`
        })
      });

      const result = await response.json();
      
      if (result.success) {
        // Track successful form submission
        trackFormSubmission('contact', {
          service: formData.service,
          has_website: !!formData.website,
          has_phone: !!formData.phone
        });

        toast({
          title: "✅ Success!",
          description: "Your message has been sent successfully. We'll get back to you within 24 hours!",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          website: "",
          description: ""
        });
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast({
        title: "❌ Submission Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Track service interest when user selects a service
    if (field === 'service' && value) {
      trackServiceInterest(value);
    }
  };

  return (
    <section id="contact-form" className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Get Your <span className="text-primary">Free Consultation</span>
          </h2>
          <p className="text-lg text-gray-400">
            Tell us about your project and let's discuss how we can help your business grow.
          </p>
        </div>

        <Card className="glass glass-hover">
          <CardHeader className="px-6 md:px-8 pt-6 md:pt-8 pb-4">
            <CardTitle className="text-2xl text-center">Project Details</CardTitle>
          </CardHeader>
          <CardContent className="px-6 md:px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <Label htmlFor="contact-name">Full Name *</Label>
                  <Input
                    id="contact-name"
                    name="fullName"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email Address *</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Phone Number *</Label>
                  <Input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+91 9876543210"
                    autoComplete="tel"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-service">Service Required *</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger id="contact-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <input
                    type="hidden"
                    name="service"
                    value={formData.service}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-website">Current Website URL</Label>
                <Input
                  id="contact-website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  placeholder="https://yourwebsite.com (optional)"
                  autoComplete="url"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-description">Project Description *</Label>
                <Textarea
                  id="contact-description"
                  name="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Tell us about your project goals, target audience, timeline, and any specific requirements..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <div className="mt-8 space-y-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Get Free Consultation"}
                </Button>

                <p className="text-sm text-gray-400 text-center">
                  We'll respond within 24 hours. No spam, we promise! 🚀
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default ContactForm;
