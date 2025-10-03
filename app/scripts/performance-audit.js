
#!/usr/bin/env node

const https = require('https');

const SITE_URL = 'https://gruasequiser.net';
const PSI_API_KEY = 'YOUR_API_KEY_HERE'; // Get from https://console.cloud.google.com

async function runPerformanceAudit() {
  console.log('🔍 Running Performance Audit for', SITE_URL);
  console.log('='.repeat(50));

  // PageSpeed Insights API
  const strategies = ['mobile', 'desktop'];
  
  for (const strategy of strategies) {
    const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(SITE_URL)}&strategy=${strategy}&category=PERFORMANCE&category=SEO&category=ACCESSIBILITY&category=BEST_PRACTICES`;
    
    try {
      console.log(`\n📱 Testing ${strategy.toUpperCase()} performance...`);
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.lighthouseResult) {
        const scores = data.lighthouseResult.categories;
        
        console.log('\n📊 Scores:');
        console.log(`  Performance: ${(scores.performance.score * 100).toFixed(0)}/100`);
        console.log(`  SEO: ${(scores.seo.score * 100).toFixed(0)}/100`);
        console.log(`  Accessibility: ${(scores.accessibility.score * 100).toFixed(0)}/100`);
        console.log(`  Best Practices: ${(scores['best-practices'].score * 100).toFixed(0)}/100`);
        
        const metrics = data.lighthouseResult.audits;
        console.log('\n⏱️  Core Web Vitals:');
        console.log(`  FCP: ${metrics['first-contentful-paint']?.displayValue || 'N/A'}`);
        console.log(`  LCP: ${metrics['largest-contentful-paint']?.displayValue || 'N/A'}`);
        console.log(`  TTI: ${metrics['interactive']?.displayValue || 'N/A'}`);
        console.log(`  CLS: ${metrics['cumulative-layout-shift']?.displayValue || 'N/A'}`);
        console.log(`  Speed Index: ${metrics['speed-index']?.displayValue || 'N/A'}`);
      }
    } catch (error) {
      console.error(`Error testing ${strategy}:`, error.message);
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log('✅ Audit complete!');
  console.log('\nFor detailed report, visit:');
  console.log(`https://pagespeed.web.dev/analysis?url=${encodeURIComponent(SITE_URL)}`);
}

runPerformanceAudit();
