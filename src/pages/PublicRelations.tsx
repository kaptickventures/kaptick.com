import { Megaphone, Shield, Users, Target, TrendingUp, Clock } from "lucide-react";
import ServiceTemplate from "./ServiceTemplate";

const PublicRelations = () => {
  const serviceData = {
    serviceName: "Public Relations",
    heroTitle: "Build Your Brand's Reputation and Media Presence",
    heroSubtitle: "Strategic PR campaigns that enhance your brand reputation, secure media coverage, and position you as an industry leader through compelling storytelling and relationship building.",
    
    aboutContent: {
      title: "Strategic Public Relations That Gets Results",
      paragraphs: [
        "Our PR services help you build credibility, manage your reputation, and secure valuable media coverage. We create compelling narratives that resonate with your target audience and position your brand as a thought leader in your industry.",
        "From press releases and media outreach to crisis communication and influencer partnerships, we provide comprehensive PR solutions that protect and enhance your brand's public image.",
        "With established media relationships and strategic communication expertise, we help you navigate the media landscape and achieve your reputation management goals."
      ],
      imageUrl: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png"
    },

    features: [
      {
        icon: Megaphone,
        title: "Media Relations",
        description: "Build relationships with key journalists and secure valuable media coverage for your brand."
      },
      {
        icon: Shield,
        title: "Crisis Management",
        description: "Protect your reputation with strategic crisis communication and damage control strategies."
      },
      {
        icon: Users,
        title: "Influencer Partnerships",
        description: "Connect with industry influencers and thought leaders to amplify your brand message."
      },
      {
        icon: Target,
        title: "Brand Positioning",
        description: "Position your brand as an industry leader through strategic messaging and thought leadership."
      },
      {
        icon: TrendingUp,
        title: "Media Monitoring",
        description: "Track brand mentions, sentiment analysis, and media coverage to measure PR impact."
      },
      {
        icon: Clock,
        title: "Event PR",
        description: "Generate buzz and media coverage for your events, product launches, and announcements."
      }
    ],

    process: [
      {
        step: 1,
        title: "PR Strategy",
        description: "Develop a comprehensive PR strategy aligned with your business goals and target audience."
      },
      {
        step: 2,
        title: "Content Creation",
        description: "Craft compelling press releases, media kits, and thought leadership content."
      },
      {
        step: 3,
        title: "Media Outreach",
        description: "Execute targeted media outreach campaigns to secure coverage in relevant publications."
      },
      {
        step: 4,
        title: "Monitor & Report",
        description: "Track media coverage, analyze sentiment, and provide detailed PR performance reports."
      }
    ],

    testimonials: [
      {
        name: "Amit Gupta",
        role: "Marketing Director",
        company: "FinTech Pro",
        content: "The PR campaigns by Kaptick Media significantly improved our market visibility. We secured coverage in 15+ major publications and established ourselves as industry thought leaders.",
        rating: 5
      },
      {
        name: "Sneha Verma",
        role: "Co-founder",
        company: "HealthCare Plus",
        content: "Their crisis management expertise saved our reputation during a challenging time. Professional, strategic, and effective communication throughout the entire process.",
        rating: 5
      }
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default PublicRelations;
