import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      <main className="container pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground mb-8">Kaptick Ventures</p>
          <p className="text-sm text-muted-foreground mb-12">Effective Date: 01/09/2024</p>
          
          <div className="glass rounded-xl p-6 md:p-8 lg:p-12 space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Kaptick Ventures. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We collect information in the following ways:
              </p>
              
              <div className="space-y-4 ml-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Information You Provide to Us:</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect personal information that you voluntarily provide to us when you fill out a contact form or subscribe to our newsletter. This may include your name, email address, and phone number.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Information Collected Automatically:</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We use third-party services like Google Analytics and Meta Pixel that automatically collect certain information when you visit our website. This may include your IP address, browser type, device information, and browsing behavior to help us improve our services.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We use the information we collect for the following purposes:
              </p>
              
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                  <span>To respond to your inquiries and fulfill your requests.</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                  <span>To send you marketing communications, such as newsletters, which you can opt out of at any time.</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                  <span>To provide and improve our services to you and our clients.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">4. Sharing of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may share information with third-party vendors and service providers that help us with our business operations, such as Google Analytics and Meta Pixel, to analyze website traffic and the effectiveness of our marketing campaigns. We do not sell your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">5. Your Data Rights and Choices</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                You have control over your personal information.
              </p>
              
              <div className="space-y-4 ml-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Access, Update, or Delete:</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You can request to access, update, or delete your personal information at any time by emailing us at the address below.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Opt-Out of Marketing:</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You can opt out of receiving marketing emails from us by clicking the "unsubscribe" link at the bottom of our emails.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">6. Contact Us</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                If you have any questions or concerns about this Privacy Policy or your data, please contact us at:
              </p>
              <div className="bg-black/30 rounded-lg p-4 border border-white/10">
                <a 
                  href="mailto:contact@kaptick.com" 
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  contact@kaptick.com
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;