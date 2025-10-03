
// Performance optimization utilities

export const preloadCriticalAssets = () => {
  if (typeof window === 'undefined') return;

  // Preload critical fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.as = 'font';
  fontLink.type = 'font/woff2';
  fontLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink);

  // Preconnect to external domains
  const domains = [
    'https://api.whatsapp.com',
    'https://www.google.com',
  ];

  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    document.head.appendChild(link);
  });
};

export const lazyLoadImages = () => {
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      const htmlImg = img as HTMLImageElement;
      if (htmlImg.dataset.src) {
        htmlImg.setAttribute('src', htmlImg.dataset.src);
      }
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }
};

// Defer non-critical scripts
export const deferScripts = () => {
  if (typeof window === 'undefined') return;

  const scripts = document.querySelectorAll('script[data-defer]');
  scripts.forEach(script => {
    script.removeAttribute('data-defer');
  });
};

// Optimize animations for performance
export const reduceMotionIfPreferred = () => {
  if (typeof window === 'undefined') return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    document.documentElement.classList.add('reduce-motion');
  }
};

// Monitor Core Web Vitals
export const reportWebVitals = (metric: any) => {
  if (process.env.NODE_ENV === 'production') {
    // Send to analytics
    console.log(metric);
  }
};
