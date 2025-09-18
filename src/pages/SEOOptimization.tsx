import { Globe, MapPin, TrendingUp, Shield, Search, Target } from "lucide-react";
import ServiceTemplate from "./ServiceTemplate";

const SEOOptimization = () => {
  const serviceData = {
    serviceName: "SEO Optimization",
    heroTitle: "SEO Optimization That Actually Works",
    heroSubtitle: "Get More Customers Finding Your Business on Google with Proven SEO Strategies That Drive Results",
    aboutContent: {
      title: "Transform Your Online Visibility with Professional SEO",
      paragraphs: [
        "Struggling to show up on Google? Our proven SEO strategies help your website rank higher, get more visitors, and turn those visitors into paying customers. No technical jargon - just results that grow your business.",
        "We specialize in comprehensive SEO solutions including keyword research, on-page optimization, technical improvements, local SEO, content creation, link building, and performance tracking. Our data-driven approach ensures sustained growth.",
        "What's Included: Keyword Research (finding the best words people use), Content Optimization (making pages clear and useful), Meta Tags (titles search engines love), Website Speed improvements, Mobile Optimization, Technical SEO fixes, Google My Business setup, Reviews Management, Local Citations, and Monthly Performance Reports."
      ],
      imageUrl: "/assets/a2c0bb3a-a47b-40bf-ba26-d79f2f9e741b.png"
    },

    features: [
      {
        icon: Search,
        title: "Complete Keyword Strategy",
        description: "We find the exact words your customers use when searching for your services, then optimize your website to rank for those terms that actually convert."
      },
      {
        icon: Globe,
        title: "On-Page & Technical SEO",
        description: "Website speed optimization, mobile-friendly design, meta tags, content optimization, and technical fixes that make search engines love your site."
      },
      {
        icon: MapPin,
        title: "Local SEO Dominance",
        description: "Google My Business optimization, reviews management, local citations, and map listings to capture customers in your area who are ready to buy."
      },
      {
        icon: TrendingUp,
        title: "Performance Tracking & Reporting",
        description: "Watch your rankings, traffic, and conversions grow with detailed monthly reports showing real business impact and ROI."
      },
      {
        icon: Shield,
        title: "Long-term Growth Strategy",
        description: "Unlike paid ads that stop working when you stop paying, SEO builds lasting organic visibility that keeps bringing customers over time."
      },
      {
        icon: Target,
        title: "Competitive Analysis & Link Building",
        description: "We analyze competitors' strategies, create valuable content your audience wants, and build quality links from reputable sites for digital authority."
      }
    ],

    process: [
      {
        step: 1,
        title: "Research & Analysis (Month 1)",
        description: "Keyword research, competitor analysis, website audit, and strategy development. We identify what your customers search for and find opportunities."
      },
      {
        step: 2,
        title: "Technical & On-Page Optimization (Months 1-2)",
        description: "Website speed improvements, mobile optimization, meta tags, content optimization, and technical SEO fixes for search engine friendliness."
      },
      {
        step: 3,
        title: "Content & Local SEO Setup (Months 2-3)",
        description: "Google My Business optimization, content creation, local citations, reviews management, and ensuring you show up in local searches."
      },
      {
        step: 4,
        title: "Link Building & Authority (Months 3-6)",
        description: "Build quality backlinks from reputable sites, create valuable content, and establish your website as an authority in your industry."
      },
      {
        step: 5,
        title: "Monitor & Scale (Months 6-12)",
        description: "Track rankings and traffic growth, analyze performance metrics, identify new keyword opportunities, and scale successful strategies."
      },
      {
        step: 6,
        title: "Ongoing Optimization (12+ Months)",
        description: "Continuous improvement, algorithm adaptation, content updates, and sustained growth. SEO is ongoing for long-term market dominance."
      }
    ],

    testimonials: [
      {
        name: "Vikram Singh",
        role: "Owner",
        company: "Fashion Forward",
        content: "Our organic traffic increased by 250% within 6 months! We went from page 3 to ranking #1 for key fashion keywords. The investment in SEO has paid for itself many times over through increased sales.",
        rating: 5
      },
      {
        name: "Anita Joshi",
        role: "Director",
        company: "EduTech Solutions",
        content: "The Local SEO optimization helped us dominate our city's education sector searches. We now appear in the top 3 Google Maps results and have seen a 180% increase in qualified leads from local customers.",
        rating: 5
      },
      {
        name: "Rajesh Kumar",
        role: "CEO",
        company: "Home Services Pro",
        content: "SEO was intimidating until Kaptick Media explained it simply. In 8 months, we're ranking for 150+ keywords and getting 5x more website visitors than before. Best long-term marketing investment we've made!",
        rating: 5
      }
    ]
  };

  return (
    <ServiceTemplate 
      serviceName={serviceData.serviceName}
      heroTitle={serviceData.heroTitle}
      heroSubtitle={serviceData.heroSubtitle}
      aboutContent={serviceData.aboutContent}
      features={serviceData.features}
      process={serviceData.process}
      testimonials={serviceData.testimonials}
    />
  );
};

export default SEOOptimization;
