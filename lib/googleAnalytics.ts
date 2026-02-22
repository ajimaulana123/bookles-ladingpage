// Google Analytics 4 utilities
// Dokumentasi: https://developers.google.com/analytics/devguides/collection/ga4

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (!window.gtag) return;
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (action: string, params?: Record<string, any>) => {
  if (!window.gtag) return;
  window.gtag('event', action, params);
};

// Custom events untuk ELFAN System
export const gaEvents = {
  // Ketika user klik CTA button
  clickCTA: (ctaName: string) => {
    event('click_cta', {
      cta_name: ctaName,
      event_category: 'engagement',
    });
  },

  // Ketika user klik WhatsApp
  clickWhatsApp: (source: string) => {
    event('contact', {
      method: 'whatsapp',
      source: source,
      event_category: 'conversion',
    });
  },

  // Ketika user view pricing
  viewPricing: () => {
    event('view_pricing', {
      event_category: 'engagement',
    });
  },

  // Ketika user view product
  viewProduct: (productName: string) => {
    event('view_item', {
      item_name: productName,
      event_category: 'engagement',
    });
  },

  // Ketika user view portfolio
  viewPortfolio: () => {
    event('view_portfolio', {
      event_category: 'engagement',
    });
  },

  // Ketika user scroll ke section tertentu
  scrollToSection: (sectionName: string) => {
    event('scroll_to_section', {
      section_name: sectionName,
      event_category: 'engagement',
    });
  },

  // Ketika user submit form
  submitForm: (formName: string) => {
    event('generate_lead', {
      form_name: formName,
      event_category: 'conversion',
    });
  },
};

// Type declaration for gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}
