import { Globe, MapPin, TrendingUp, Award, Shield, Search, Clock, Users, Target, CheckCircle } from "lucide-react";
import ServiceTemplate from "./ServiceTemplate";

const SEOOptimization = () => {
  const serviceData = {
    serviceName: "SEO Optimization",
    heroTitle: "SEO Optimization That Actually Works",
    heroSubtitle: "Get More Customers Finding Your Business on Google",
    aboutContent: {
      title: "Transform Your Online Visibility with Professional SEO",
      paragraphs: [
        "Struggling to show up on Google? Our proven SEO strategies help your website rank higher, get more visitors, and turn those visitors into paying customers. No technical jargon - just results that grow your business.",
        "We specialize in comprehensive SEO solutions including keyword research, on-page optimization, technical improvements, local SEO, content creation, link building, and performance tracking.",
        "Our data-driven approach ensures your website not only ranks higher but also converts visitors into customers, providing long-term growth for your business."
      ],
      imageUrl: "/assets/a2c0bb3a-a47b-40bf-ba26-d79f2f9e741b.png"
    },

    features: [
      {
        icon: Search,
        title: "Keyword Strategy",
        description: "We find the exact words your customers use when searching for your services, then optimize your website to rank for those terms."
      },
      {
        icon: Globe,
        title: "On-Page Optimization",
        description: "Every page of your website is optimized for search engines while remaining user-friendly and conversion-focused."
      },
      {
        icon: MapPin,
        title: "Local SEO",
        description: "Dominate local search results and Google Maps to capture customers in your area who are ready to buy."
      },
      {
        icon: TrendingUp,
        title: "Performance Tracking",
        description: "Watch your rankings, traffic, and conversions grow with detailed monthly reports that show real business impact."
      },
      {
        icon: Shield,
        title: "Long-term Results",
        description: "Unlike paid ads that stop working when you stop paying, SEO builds lasting organic visibility for your business."
      },
      {
        icon: Target,
        title: "Competitive Analysis",
        description: "We analyze what your competitors are doing and create strategies to outrank them in search results."
      }
    ],

    process: [
      {
        step: 1,
        title: "Research & Analysis",
        description: "We research what your customers are searching for and analyze your current website performance to identify opportunities."
      },
      {
        step: 2,
        title: "Website Optimization",
        description: "Make your website fast, mobile-friendly, and easy to use with technical SEO improvements and on-page optimization."
      },
      {
        step: 3,
        title: "Content & Link Building",
        description: "Create valuable content your audience wants and build quality links from reputable sites for digital word-of-mouth."
      },
      {
        step: 4,
        title: "Local SEO Setup",
        description: "Optimize Google My Business, manage reviews, and ensure your business appears in local searches and Google Maps."
      },
      {
        step: 5,
        title: "Monitor & Analyze",
        description: "Track rankings, traffic growth, and performance metrics to continuously improve your SEO strategy."
      },
      {
        step: 6,
        title: "Ongoing Improvement",
        description: "SEO is ongoing - we continuously optimize and adapt to algorithm changes for sustained growth."
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
    ],

    // Comprehensive SEO education content
    additionalContent: {
      seoServices: {
        title: "What's Included in Our SEO Services",
        subtitle: "Everything you need for search engine success",
        services: [
          {
            category: "Website SEO (On-Page)",
            icon: Globe,
            items: [
              "Keyword Research: Finding the best words people use to search for your services",
              "Content Optimization: Making your web pages clear, informative, and useful",
              "Meta Tags: Writing titles and descriptions search engines love",
              "Website Speed: Faster sites rank better and retain visitors",
              "Mobile Optimization: Perfect functionality on phones and tablets",
              "Technical SEO: Fixing errors, improving site structure, and smooth navigation"
            ]
          },
          {
            category: "Local SEO (Google My Business)",
            icon: MapPin,
            items: [
              "GMB Profile Setup & Optimization: Creating and managing your Google My Business listing",
              "Reviews Management: Getting and responding to customer reviews",
              "Local Citations: Listing your business in trusted directories",
              "Map Listings: Ensuring your business shows up in Google Maps searches",
              "Photo & Post Updates: Keeping your profile fresh with updates and photos",
              "Local Keywords: Targeting location-specific search terms"
            ]
          }
        ]
      },

      timeline: {
        title: "When Will You See SEO Results?",
        subtitle: "SEO isn't instant, but it's worth the wait for long-term growth",
        phases: [
          {
            period: "1-3 Months",
            title: "Foundation & Setup",
            description: "Initial optimizations, technical improvements, and content strategy implementation begin showing early signals.",
            color: "from-blue-500 to-blue-600"
          },
          {
            period: "3-6 Months",
            title: "First Results",
            description: "You'll start seeing ranking improvements, increased organic traffic, and better local visibility.",
            color: "from-purple-500 to-purple-600"
          },
          {
            period: "6-12 Months",
            title: "Significant Growth",
            description: "The BIGGEST results appear - substantial ranking improvements, traffic growth, and increased conversions.",
            color: "from-green-500 to-green-600"
          },
          {
            period: "12+ Months",
            title: "Sustained Success",
            description: "Continuous growth and market dominance. SEO keeps bringing customers unlike paid ads that stop when you pause budget.",
            color: "from-gold-500 to-gold-600"
          }
        ]
      },

      benefits: [
        {
          icon: TrendingUp,
          title: "Continuous Growth",
          description: "SEO, when done right, keeps attracting customers over time without ongoing ad spend."
        },
        {
          icon: Award,
          title: "Cost-Effective",
          description: "Lower long-term cost compared to paid ads with better ROI over time."
        },
        {
          icon: Shield,
          title: "Builds Trust",
          description: "Sites ranking high on Google are seen as more reliable and trustworthy by customers."
        },
        {
          icon: MapPin,
          title: "Local Dominance",
          description: "Stand out in your neighborhood and community, attracting nearby customers."
        }
      ],

      whyChooseUs: [
        {
          title: "Proven Track Record",
          description: "We've helped 100+ businesses improve their search rankings and increase organic traffic by an average of 200%."
        },
        {
          title: "Transparent Reporting",
          description: "Monthly reports showing exactly what we're doing, your rankings progress, and business impact."
        },
        {
          title: "No Long-term Contracts",
          description: "We're confident in our results. Stay because SEO works, not because you're locked in."
        },
        {
          title: "Local Market Expertise",
          description: "We understand the Indian market and know what works for local businesses."
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <ServiceTemplate 
        serviceName={serviceData.serviceName}
        heroTitle={serviceData.heroTitle}
        heroSubtitle={serviceData.heroSubtitle}
        aboutContent={serviceData.aboutContent}
        features={serviceData.features}
        process={serviceData.process}
        testimonials={serviceData.testimonials}
      />
      
      {/* Additional SEO Education Content */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* What's Included Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {serviceData.additionalContent.seoServices.title}
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                {serviceData.additionalContent.seoServices.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {serviceData.additionalContent.seoServices.services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-6">
                    <service.icon className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">{service.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-blue-100">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {serviceData.additionalContent.timeline.title}
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                {serviceData.additionalContent.timeline.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceData.additionalContent.timeline.phases.map((phase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                  <div className="mb-4">
                    <Clock className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-blue-300">{phase.period}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                  <p className="text-blue-100 text-sm">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why SEO is Worth the Investment
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Long-term benefits that keep paying dividends
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceData.additionalContent.benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                  <benefit.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-blue-100 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Kaptick Media for SEO?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {serviceData.additionalContent.whyChooseUs.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-blue-100">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SEOOptimization;
