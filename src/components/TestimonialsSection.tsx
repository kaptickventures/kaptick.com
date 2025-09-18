"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Monica Dhyani",
    role: "Danish Patisserie",
  image: "/assets/monica.jpeg",
    content: "Kaptick Media has managed our social media and SEO with great results. Our online presence and engagement have grown significantly. Highly recommended for bakery businesses!"
  },
  {
    name: "Yogesh Khantwal",
    role: "CEO, Wedding Rose",
  image: "/assets/2.jpg",
    content: "The team at Kaptick Media has been instrumental in growing our wedding planning business through effective social media management and SEO. Professional, creative, and results-driven!"
  },
  {
    name: "Yogesh Khantwal",
    role: "CEO, Global Hotels and Tourism",
  image: "/assets/2.jpg",
    content: "Kaptick Media developed our website and handled our digital marketing needs with expertise. The new website has helped us attract more clients and showcase our services globally."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="overflow-hidden bg-black">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-normal mb-3 md:mb-4">Trusted by Businesses</h2>
          <p className="text-muted-foreground text-lg">
            Join hundreds of successful businesses who've grown with Kaptick Media
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-6 md:py-8">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-4 md:mb-6">
                    <Avatar className="h-10 md:h-12 w-10 md:w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60 mt-0.5">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-4 md:mb-6">
                    <Avatar className="h-10 md:h-12 w-10 md:w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60 mt-0.5">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;