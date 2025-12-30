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
  // Add more projects...
]
