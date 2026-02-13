export const projects = [
  {
    id: 1,
    slug: 'invoice-generation-system',
    title: 'Invoice Generation System',
    tagline: 'Complete export business management platform',
    description: 'A comprehensive invoice and export documentation system built with modern web technologies.',
    thumbnail: '/images/projects/invoice/invoice-1.png',
    year: '2024',
    category: 'Full-Stack',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'PDF Generation'],
  
   
    // githubUrl: 'https://github.com/Mann-webspider/invoice-gen',
    
    // Detailed info
    overview: 'Built a complete invoice generation system for export businesses with automated PDF generation, client management, and inventory tracking.',
    
    challenges: [
      'Complex PDF generation with dynamic templates',
      'Real-time inventory synchronization',
      'Multi-currency support and calculation',
    ],
    
    solutions: [
      'Implemented custom PDF rendering engine',
      'Built WebSocket-based real-time updates',
      'Created flexible currency conversion system',
    ],
    
    features: [
      'Automated invoice and export document generation',
      'Client and product management',
      'Real-time inventory tracking',
      'Multi-currency support',
      'Email notifications',
      'Analytics dashboard',
    ],
    
    techStack: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'],
      devops: ['Docker', 'AWS', 'GitHub Actions'],
      tools: ['PDF.js', 'Nodemailer', 'Chart.js'],
    },
    
    images: [
      '/images/projects/invoice/invoice-1.png',
      '/images/projects/invoice/invoice-2.png',
      '/images/projects/invoice/invoice-3.png',
      '/images/projects/invoice/invoice-4.png',
      '/images/projects/invoice/invoice-5.png',
    ],
    
    metrics: {
      users: '50+',
      invoices: '1000+',
      performance: '99.9% uptime',
    },
  },
  {
    id: 2,
    slug: 'quiz-platform',
    title: 'Educational Quiz Platform',
    tagline: 'Real-time quiz system for universities',
    description: 'Interactive quiz platform with real-time features and automated grading.',
    thumbnail: '/images/projects/quiz/quiz-1.png',
    year: '2024',
    category: 'Full-Stack',
    tags: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
    status: 'Live',
    liveUrl: "https://genuine-insight-production.up.railway.app/",
    githubUrl: 'https://github.com/Mann-webspider/quiz-o-meter',
    
    overview: 'Developed an educational quiz platform with real-time features, automated grading, and comprehensive analytics for educators.',
    
    challenges: [
      'Real-time quiz synchronization',
      'Scalable database design',
      'Automated grading algorithms',
    ],
    
    solutions: [
      'Implemented WebSocket-based real-time system',
      'Optimized MongoDB schema for performance',
      'Built flexible grading engine',
    ],
    
    features: [
      'Real-time quiz participation',
      'Automated grading system',
      'Question bank management',
      'Student progress tracking',
      'Analytics dashboard',
      'Export results to PDF',
    ],
    
    techStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'Express', 'MongoDB'],
      devops: ['Jenkins', 'Docker', 'K3s'],
    },
    
    images: [
      '/images/projects/quiz/quiz-1.png',
      '/images/projects/quiz/quiz-2.png',
      '/images/projects/quiz/quiz-3.png',
      '/images/projects/quiz/quiz-4.png',
    ],
    
    metrics: {
      students: '500+',
      quizzes: '200+',
      institutions: '5',
    },
  },
  {
  id: 3,
  slug: 'geet-music-collaboration',
  title: 'Geet - Collaborative Music Streaming',
  tagline: 'Listen together, share emotions, collaborate on playlists',
  description: 'A collaborative music streaming platform designed for friends to listen together, create shared playlists, and share emotions through music.',
  thumbnail: '/images/geet/logo.png',
  year: '2025',
  category: 'Full-Stack Mobile & Web',
  tags: ['React Native', 'Next.js', 'Node.js', 'WebSockets', 'Real-time'],
  status: 'In Development',
  
  overview: 'Geet reimagines music streaming by focusing on collaboration and shared experiences. Unlike traditional streaming platforms optimized for individual consumption, Geet enables synchronized listening, collaborative playlists, and emotion-driven music discovery for friends and groups.',
  
  challenges: [
    'Real-time synchronization across multiple users',
    'Efficient streaming infrastructure with minimal server load',
    'Scalable playlist collaboration system',
    'Cross-platform consistency (mobile & web)',
  ],
  
  solutions: [
    'WebSocket-based real-time synchronization engine',
    'Optimized audio streaming with adaptive bitrate',
    'Event-driven architecture for playlist collaboration',
    'Unified API serving both mobile and web clients',
  ],
  
  features: [
    'Collaborative playlist creation and editing',
    'Synchronized real-time listening',
    'Friend-based music discovery',
    'Lyrics and karaoke experience',
    'Event-based playlist templates (trips, parties, dates)',
    'Music request system with notifications',
    'Admin dashboard for content management',
    'Real-time user activity and engagement',
  ],
  
  techStack: {
    frontend: ['React Native', 'Expo', 'Next.js', 'TypeScript', 'Tailwind CSS', 'NativeWind'],
    backend: ['Node.js', 'Express', 'PostgreSQL', 'Drizzle ORM'],
    realtime: ['WebSockets', 'Socket.io'],
    devops: ['Docker', 'GitHub Actions'],
    tools: ['Biome', 'pnpm', 'Metro (React Native)'],
  },
  
  images: [
    '/images/geet/user/welcome-home.png',
    '/images/geet/user/playback-queue.png',
    '/images/geet/admin/artist.png',
    '/images/geet/admin/tracks.png',
    '/images/geet/admin/dshboard.png',
  ],
  
  metrics: {
    users: 'Growing',
    playlists: 'Community-driven',
    realTimeConnections: 'Multiple concurrent users per session',
  },
}
  // Add more projects...
]
