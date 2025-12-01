// src/utils/performanceMonitoring.js
// Monitoring des Core Web Vitals pour Lighthouse

const performanceMetrics = {
  lcp: null,
  fid: null,
  cls: null,
  ttfb: null,
};

/**
 * Monitor Largest Contentful Paint (LCP)
 * Viser < 2.5s
 */
export const monitorLCP = () => {
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        performanceMetrics.lcp = lastEntry.renderTime || lastEntry.loadTime;
        
        if (process.env.NODE_ENV === 'development') {
          console.log('LCP:', performanceMetrics.lcp, 'ms');
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      
      // Disconnect after 5 seconds
      setTimeout(() => observer.disconnect(), 5000);
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('LCP monitoring error:', error);
      }
    }
  }
};

/**
 * Monitor Cumulative Layout Shift (CLS)
 * Viser < 0.1
 */
export const monitorCLS = () => {
  if ('PerformanceObserver' in window) {
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            performanceMetrics.cls = clsValue;
          }
        }
        
        if (process.env.NODE_ENV === 'development') {
          console.log('CLS:', performanceMetrics.cls);
        }
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('CLS monitoring error:', error);
      }
    }
  }
};

/**
 * Monitor First Input Delay (FID) / Interaction to Next Paint (INP)
 * Viser FID < 100ms
 */
export const monitorFID = () => {
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstEntry = entries[0];
        performanceMetrics.fid = firstEntry.processingDuration;
        
        if (process.env.NODE_ENV === 'development') {
          console.log('FID:', performanceMetrics.fid, 'ms');
        }
      });
      
      observer.observe({ entryTypes: ['first-input'] });
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('FID monitoring error:', error);
      }
    }
  }
};

/**
 * Monitor Time to First Byte (TTFB)
 * Viser < 600ms
 */
export const monitorTTFB = () => {
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const navigationEntry = entries[0];
        performanceMetrics.ttfb = navigationEntry.responseStart - navigationEntry.fetchStart;
        
        if (process.env.NODE_ENV === 'development') {
          console.log('TTFB:', performanceMetrics.ttfb, 'ms');
        }
      });
      
      observer.observe({ entryTypes: ['navigation'] });
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('TTFB monitoring error:', error);
      }
    }
  }
};

/**
 * Initialiser le monitoring
 */
export const initPerformanceMonitoring = () => {
  if (process.env.NODE_ENV === 'production') {
    return; // Ne pas monitorer en production pour éviter la surcharge
  }

  monitorLCP();
  monitorCLS();
  monitorFID();
  monitorTTFB();
};

/**
 * Obtenir les métriques actuelles
 */
export const getPerformanceMetrics = () => {
  return performanceMetrics;
};

export default initPerformanceMonitoring;
