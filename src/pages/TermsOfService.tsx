import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      <main className="container pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg text-muted-foreground mb-8">Kaptick Ventures</p>
          <p className="text-sm text-muted-foreground mb-12">Effective Date: 01/09/2024</p>
          
          <div className="glass rounded-xl p-6 md:p-8 lg:p-12 space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">1. Agreement & Services</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                These Terms of Service ("Terms") govern the digital marketing services provided by Kaptick Ventures ("Agency," "we," "us") to you ("Client," "you").
              </p>
              
              <div className="space-y-4 ml-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Scope of Work:</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The specific services, deliverables, timelines, and fees for each project will be detailed in a separate Service Agreement or Proposal, which will be signed by both parties. These Terms are a part of that agreement. We provide monthly reports detailing the goals set at the beginning of the month and the results achieved at the end of the month.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Guarantees:</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not guarantee specific results for our SEO or Social Media services due to the dynamic nature of digital platforms. For website design projects, we offer a satisfaction guarantee. If you are not satisfied with the initial design presented, you are entitled to a full refund of your advance payment. In the event of such a refund, the Agency retains ownership of all work, code, and files created, and no website assets will be transferred to you. Any domain or hosting purchased on your behalf will be transferred to you upon request.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">2. Payments, Fees, and Refunds</h2>
              
              <div className="space-y-4 ml-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Payment Schedule:</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Monthly retainer fees are due between the 1st and 7th day of each month.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Late Payments:</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A late fee of 5% of the outstanding invoice amount will be applied to payments not received by the 7th of the month.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Deposits & Refunds:</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Deposits are required for website design projects. As stated in Section 1, this deposit is fully refundable if you are not satisfied with the initial design. Otherwise, all fees for services rendered are non-refundable.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">3. Client Responsibilities</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                To ensure the timely and effective delivery of our services, you agree to provide the following in a timely manner:
              </p>
              
              <ul className="space-y-3 ml-4">
                <li className="text-muted-foreground">
                  <span className="text-white font-medium">Access:</span> Necessary access to your website backend, analytics platforms, and social media accounts.
                </li>
                <li className="text-muted-foreground">
                  <span className="text-white font-medium">Content & Materials:</span> All necessary content, including but not limited to text, product descriptions, images, logos, and brand guidelines.
                </li>
                <li className="text-muted-foreground">
                  <span className="text-white font-medium">Feedback & Approvals:</span> Timely feedback and approvals on project drafts, content calendars, and other deliverables. Delays in providing these may impact project timelines.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">4. Intellectual Property Rights</h2>
              
              <div className="space-y-4 ml-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Client Ownership:</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Upon receipt of full payment, you will own all final deliverables created specifically for you, including your website and all published content.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Agency Ownership:</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain ownership of all our pre-existing tools, software, processes, and proprietary methods. We also retain full ownership and rights to any raw, un-published content (such as video footage or unused designs), especially in the event of a payment dispute or early contract termination.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">5. Term and Termination</h2>
              
              <div className="space-y-4 ml-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Termination:</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Both the Client and the Agency have the right to terminate any retainer agreement by providing a 30-day written notice.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Final Payment:</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Upon termination, the Client is required to pay for all services rendered up to the effective termination date.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Kaptick Ventures be liable for any lost profits or special, incidental, or consequential damages. Our total liability to you for any and all claims shall not exceed the total amount of fees paid by you to us for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">7. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                Both parties agree to keep all confidential business information private and not to disclose it to any third party without prior written consent.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;