import { Target, Zap, TrendingUp, Shield, Users, Clock } from "lucide-react";
import ServiceTemplate from "./ServiceTemplate";

const PerformanceMarketing = () => {
  const serviceData = {
    serviceName: "Performance Marketing",
    heroTitle: "Drive Results with Data-Driven Performance Marketing",
    heroSubtitle: "Maximize your ROI with targeted campaigns, advanced analytics, and proven strategies that convert visitors into customers and scale your business exponentially.",
    
    aboutContent: {
      title: "Strategic Performance Marketing That Delivers",
      paragraphs: [
        "Our performance marketing approach focuses on measurable results and maximum return on investment. We combine advanced data analytics with creative campaign strategies to drive qualified traffic, increase conversions, and scale your business effectively.",
        "From Google Ads and Facebook advertising to programmatic display and affiliate marketing, we leverage the most effective channels to reach your target audience at the right time with the right message.",
        "With transparent reporting and continuous optimization, you'll see exactly how your marketing budget is performing and driving real business growth."
      ],
      imageUrl: "/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png"
    },

    features: [
      {
        icon: Target,
        title: "Targeted Campaigns",
        description: "Precision-targeted ads that reach your ideal customers across multiple platforms and channels."
      },
      {
        icon: TrendingUp,
        title: "ROI Optimization",
        description: "Continuous campaign optimization to maximize your return on ad spend and reduce acquisition costs."
      },
      {
        icon: Zap,
        title: "Real-time Analytics",
        description: "Advanced tracking and reporting that provides actionable insights for immediate campaign improvements."
      },
      {
        icon: Shield,
        title: "Brand Protection",
        description: "Strategic brand positioning and reputation management across all marketing channels."
      },
      {
        icon: Users,
        title: "Audience Insights",
        description: "Deep audience analysis and segmentation to create personalized marketing experiences."
      },
      {
        icon: Clock,
        title: "Quick Results",
        description: "Fast campaign deployment and optimization to start driving results within the first week."
      }
    ],

    process: [
      {
        step: 1,
        title: "Strategy & Research",
        description: "Deep dive into your business goals, target audience, and competitive landscape to create a winning strategy."
      },
      {
        step: 2,
        title: "Campaign Setup",
        description: "Launch targeted campaigns across selected platforms with optimized ad creatives and landing pages."
      },
      {
        step: 3,
        title: "Monitor & Optimize",
        description: "Continuous monitoring and optimization based on performance data and user behavior insights."
      },
      {
        step: 4,
        title: "Scale & Grow",
        description: "Scale successful campaigns and expand to new channels to maximize your growth potential."
      }
    ],

    testimonials: [
      {
        name: "Rajesh Kumar",
        role: "CEO",
        company: "TechStart Solutions",
        content: "Kaptick Media's performance marketing campaigns increased our leads by 300% within 3 months. Their data-driven approach and transparent reporting gave us complete confidence in our marketing investment.",
        rating: 5
      },
      {
        name: "Priya Sharma",
        role: "Marketing Director",
        company: "EcoLife Products",
        content: "The ROI we achieved with their performance marketing was incredible. Our cost per acquisition dropped by 60% while our conversion rates doubled. Outstanding results!",
        rating: 5
      }
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default PerformanceMarketing;
