import { Users, Target, TrendingUp, Zap, Shield, Clock } from "lucide-react";
import ServiceTemplate from "./ServiceTemplate";

const SocialMediaManagement = () => {
  const serviceData = {
    serviceName: "Social Media Management",
    heroTitle: "Build Your Brand Through Social Media",
    heroSubtitle: "Comprehensive social media strategies that build engagement, grow your audience, and create meaningful connections with your customers across all platforms.",
    
    aboutContent: {
      title: "Strategic Social Media Management",
      paragraphs: [
        "Our social media management services help you build a strong online presence across all major platforms. We create engaging content, manage your community, and implement strategies that drive real business results.",
        "From content creation and scheduling to community engagement and paid social campaigns, we handle every aspect of your social media presence so you can focus on running your business.",
        "With data-driven insights and creative storytelling, we help you connect with your audience, build brand loyalty, and convert followers into customers."
      ],
      imageUrl: "/lovable-uploads/1e2a48dc-059b-4919-a1ed-44685d771a32.png"
    },

    features: [
      {
        icon: Users,
        title: "Community Engagement",
        description: "Active community management with timely responses and meaningful interactions with your audience."
      },
      {
        icon: Target,
        title: "Content Strategy",
        description: "Strategic content planning and calendar development tailored to your brand and audience preferences."
      },
      {
        icon: TrendingUp,
        title: "Growth Analytics",
        description: "Detailed analytics and insights to track growth, engagement, and ROI from your social media efforts."
      },
      {
        icon: Zap,
        title: "Creative Content",
        description: "Eye-catching visuals, engaging videos, and compelling copy that resonates with your target audience."
      },
      {
        icon: Shield,
        title: "Brand Consistency",
        description: "Maintain consistent brand voice and visual identity across all your social media platforms."
      },
      {
        icon: Clock,
        title: "24/7 Monitoring",
        description: "Round-the-clock social media monitoring to respond quickly to mentions and engagement opportunities."
      }
    ],

    process: [
      {
        step: 1,
        title: "Audit & Strategy",
        description: "Analyze your current social media presence and develop a comprehensive strategy aligned with your goals."
      },
      {
        step: 2,
        title: "Content Planning",
        description: "Create detailed content calendars with engaging posts, stories, and campaigns for each platform."
      },
      {
        step: 3,
        title: "Content Creation",
        description: "Design and produce high-quality visual content, videos, and copy that drives engagement."
      },
      {
        step: 4,
        title: "Manage & Optimize",
        description: "Post content, engage with your community, and continuously optimize based on performance data."
      }
    ],

    testimonials: [
      {
        name: "Rajesh Kumar",
        role: "CEO",
        company: "TechStart Solutions",
        content: "Our social media engagement increased by 400% and we gained 10,000 new followers in just 4 months. Their content strategy and community management is outstanding!",
        rating: 5
      },
      {
        name: "Priya Sharma",
        role: "Founder",
        company: "EcoLife Products",
        content: "The social media campaigns they created for us generated incredible brand awareness. Our online sales from social channels increased by 300%. Highly recommend!",
        rating: 5
      }
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default SocialMediaManagement;
