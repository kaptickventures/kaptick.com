import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import PerformanceMarketing from "./pages/PerformanceMarketing";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import WebDevelopmentLanding from "./pages/WebDevelopmentLanding";
import SEOOptimization from "./pages/SEOOptimization";
import SocialMediaManagement from "./pages/SocialMediaManagement";
import PublicRelations from "./pages/PublicRelations";
import Careers from "./pages/Careers";
import { trackPageView } from "./lib/analytics";

const queryClient = new QueryClient();

// Component to track page views
const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view when location changes
    trackPageView(window.location.href, document.title);
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PageViewTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/performance-marketing" element={<PerformanceMarketing />} />
            <Route path="/website-development" element={<WebsiteDevelopment />} />
            <Route path="/web-development-landing" element={<WebDevelopmentLanding />} />
            <Route path="/seo-optimization" element={<SEOOptimization />} />
            <Route path="/social-media-management" element={<SocialMediaManagement />} />
            <Route path="/public-relations" element={<PublicRelations />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;