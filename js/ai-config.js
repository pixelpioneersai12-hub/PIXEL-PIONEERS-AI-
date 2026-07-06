// PIXEL PIONEERS AI Configuration
// Initialize AI configuration for the application

const AI_CONFIG = {
  version: '16.0.0',
  appName: 'PIXEL PIONEERS AI',
  apiEndpoint: '',
  offlineMode: true,
  cacheStrategy: 'network-first',
  features: {
    assessment: true,
    careers: true,
    colleges: true,
    community: true,
    courses: true,
    dashboard: true,
    interview: true,
    jobs: true,
    news: true,
    resources: true,
    resume: true,
    roadmaps: true,
    scholarships: true,
    settings: true,
    skills: true
  },
  storage: {
    localStorage: true,
    sessionStorage: true
  },
  theme: {
    primary: '#070B1F',
    secondary: '#00D9FF',
    accent: '#FF006E'
  }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AI_CONFIG;
}