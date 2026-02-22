// Meta Pixel (Facebook Pixel) utilities
// Dokumentasi: https://developers.facebook.com/docs/meta-pixel

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '';

// Initialize Meta Pixel
export const initMetaPixel = () => {
  if (!FB_PIXEL_ID) {
    console.warn('Meta Pixel ID not found. Add NEXT_PUBLIC_FB_PIXEL_ID to .env');
    return;
  }

  // Check if already initialized
  if (window.fbq) return;

  // Initialize fbq function
  const fbq = function() {
    // @ts-ignore
    fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments);
  };

  if (!window.fbq) window.fbq = fbq;
  if (!window._fbq) window._fbq = fbq;
  
  // @ts-ignore
  fbq.push = fbq;
  // @ts-ignore
  fbq.loaded = true;
  // @ts-ignore
  fbq.version = '2.0';
  // @ts-ignore
  fbq.queue = [];

  // Initialize pixel
  window.fbq('init', FB_PIXEL_ID);
};

// Track page view
export const trackPageView = () => {
  if (!window.fbq) return;
  window.fbq('track', 'PageView');
};

// Track custom events
export const trackEvent = (eventName: string, data?: Record<string, any>) => {
  if (!window.fbq) return;
  window.fbq('track', eventName, data);
};

// Standard events untuk Elfan System
export const trackEvents = {
  // Ketika user klik tombol CTA utama
  clickCTA: (ctaName: string) => {
    trackEvent('Lead', { 
      content_name: ctaName,
      content_category: 'CTA Button'
    });
  },

  // Ketika user submit form kontak
  submitContact: (formType: string = 'Contact Form') => {
    trackEvent('Contact', {
      content_name: formType
    });
  },

  // Ketika user klik WhatsApp
  clickWhatsApp: (source: string) => {
    trackEvent('Contact', {
      content_name: 'WhatsApp',
      content_category: source
    });
  },

  // Ketika user lihat halaman pricing
  viewPricing: () => {
    trackEvent('ViewContent', {
      content_name: 'Pricing Page',
      content_type: 'product'
    });
  },

  // Ketika user lihat halaman produk
  viewProduct: (productName: string) => {
    trackEvent('ViewContent', {
      content_name: productName,
      content_type: 'product'
    });
  },

  // Ketika user lihat portfolio
  viewPortfolio: () => {
    trackEvent('ViewContent', {
      content_name: 'Portfolio',
      content_type: 'portfolio'
    });
  },

  // Ketika user scroll ke section tertentu (engaged user)
  scrollToSection: (sectionName: string) => {
    trackEvent('CustomizeProduct', {
      content_name: sectionName
    });
  },

  // Ketika user download/view brochure (jika ada)
  downloadBrochure: () => {
    trackEvent('Lead', {
      content_name: 'Brochure Download'
    });
  }
};
