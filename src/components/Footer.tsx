import { Instagram, Facebook } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Kaptick Media</h3>
              <p className="text-sm text-muted-foreground">
                A unit of Kaptick Ventures. Transforming businesses through innovative digital marketing solutions.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.instagram.com/kaptickmedia/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.facebook.com/people/Kaptick-Media/61554137848311/" target="_blank" rel="noopener noreferrer">
                    <Facebook className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://wa.me/919319595984?text=Hey%2C%20I%27m%20exploring%20your%20services%20and%20would%20like%20to%20get%20more%20details." target="_blank" rel="noopener noreferrer">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687"/>
                    </svg>
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/website-development" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Website Development
                  </a>
                </li>
                <li>
                  <a href="/seo-optimization" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    SEO Optimization
                  </a>
                </li>
                <li>
                  <a href="/social-media-management" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Social Media Management
                  </a>
                </li>
                <li>
                  <a href="/public-relations" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Public Relations
                  </a>
                </li>
                <li>
                  <a href="/performance-marketing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Performance Marketing
                  </a>
                </li>
              </ul>
            <div className="space-y-4">
              <h4 className="font-medium">Careers</h4>
              <div>
                <span className="text-sm font-semibold" style={{ color: '#e31e24' }}>
                  Join Our Team - <a href="/careers" style={{ color: '#e31e24', textDecoration: 'underline' }}>Apply Now</a>
                </span>
              </div>
            </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a href="tel:+919319595984" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    +91 9319595984
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:contact@kaptick.com?subject=Inquiry about Kaptick Media Services&body=Hello Kaptick Media team,%0D%0A%0D%0AI would like to inquire about your digital marketing services. Please provide more information about your offerings.%0D%0A%0D%0AThank you!"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    contact@kaptick.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/919319595984?text=Hey%2C%20I%27m%20exploring%20your%20services%20and%20would%20like%20to%20get%20more%20details." target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    WhatsApp Us
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=28.6069598,77.1059333&travelmode=driving"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    WZ-101/51, Mohan Nagar, Pankha Road, South West Delhi - 110046
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Kaptick Media - A unit of Kaptick Ventures. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;