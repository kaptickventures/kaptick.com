// Google Analytics utilities for Kaptick Media
declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-NZDWQ9X12Z', {
      page_location: url,
      page_title: title,
    });
  }
};

// Track custom events
export const trackEvent = (
  eventName: string,
  parameters: {
    event_category?: string;
    event_label?: string;
    value?: number;
    [key: string]: any;
  } = {}
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Track form submissions
export const trackFormSubmission = (formType: 'contact' | 'career', formData?: any) => {
  trackEvent('form_submit', {
    event_category: 'engagement',
    event_label: formType,
    form_type: formType,
    ...formData,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    event_category: 'engagement',
    event_label: buttonName,
    button_location: location,
  });
};

// Track service interest
export const trackServiceInterest = (serviceName: string) => {
  trackEvent('service_interest', {
    event_category: 'business',
    event_label: serviceName,
    service_type: serviceName,
  });
};

// Track conversions
export const trackConversion = (conversionType: string, value?: number) => {
  trackEvent('conversion', {
    event_category: 'conversion',
    event_label: conversionType,
    value: value,
  });
};

// Enhanced ecommerce tracking for service inquiries
export const trackServiceInquiry = (serviceName: string, serviceCategory: string) => {
  trackEvent('generate_lead', {
    currency: 'USD',
    value: 1, // Assign a value to leads
    event_category: 'lead_generation',
    service_name: serviceName,
    service_category: serviceCategory,
  });
};
