import { Globe, Search, Megaphone, TrendingUp, Users } from "lucide-react";

export const services = [
  {
    id: "web-development", 
    title: "Website Development",
    description: "Modern, responsive websites that convert visitors into customers",
    icon: <Globe className="w-8 h-8" />,
    features: [
      "Custom Website Design & Development",
      "E-commerce Solutions",
      "Content Management Systems",
      "Progressive Web Apps (PWA)",
      "Website Maintenance & Support"
    ],
    image: "/lovable-uploads/5830bd79-3511-41dc-af6c-8db32d91fc2c.png"
  },
  {
    id: "seo",
    title: "SEO Optimization",
    description: "Data-driven SEO strategies that boost your search rankings and organic traffic",
    icon: <Search className="w-8 h-8" />,
    features: [
      "Technical SEO Audits",
      "Keyword Research & Strategy",
      "On-page & Off-page Optimization",
      "Local SEO for Business",
      "SEO Performance Reporting"
    ],
    image: "/lovable-uploads/79f2b901-8a4e-42a5-939f-fae0828e0aef.png"
  },
  {
    id: "social-media",
    title: "Social Media Management",
    description: "Comprehensive social media strategies that build engagement and grow your online presence",
    icon: <Users className="w-8 h-8" />,
    features: [
      "Content Strategy & Calendar Planning",
      "Creative Content Creation & Curation",
      "Community Engagement & Interaction",
      "Profile Optimization & Branding",
      "Analytics, Insights & Reporting"
    ],
    image: "/lovable-uploads/1e2a48dc-059b-4919-a1ed-44685d771a32.png"
  },
  {
    id: "pr",
    title: "Public Relations",
    description: "Strategic PR campaigns that build brand reputation and media presence",
    icon: <Megaphone className="w-8 h-8" />,
    features: [
      "Media Relations & Press Releases",
      "Crisis Communication Management", 
      "Influencer Partnerships",
      "Brand Reputation Management",
      "Event Marketing & PR"
    ],
    image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png"
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    description: "ROI-focused digital campaigns that drive measurable business results",
    icon: <TrendingUp className="w-8 h-8" />,
    features: [
      "Google Ads & Facebook Ads Management",
      "Conversion Rate Optimization",
      "Attribution & Analytics Setup",
      "Retargeting Campaigns",
      "Performance Tracking & Reporting"
    ],
    image: "/lovable-uploads/a2c0bb3a-a47b-40bf-ba26-d79f2f9e741b.png"
  }
];