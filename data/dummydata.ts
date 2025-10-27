interface Roadmap {
  fundamentals: string[];
  projects: {
    beginner: string[];
    intermediate: string[];
    advanced: string[];
  };
  promotion: string[];
  freelancing: string[];
  monetization: string[];
}

const dummyData: Record<string, Roadmap> = {
  python: {
    fundamentals: [
      "Python Basics",
      "Data Types & Variables",
      "Control Structures",
      "Functions & Modules",
    ],
    projects: {
      beginner: ["Calculator App", "To-do List"],
      intermediate: ["Weather App (API)", "Blog Website"],
      advanced: ["AI Chatbot", "Stock Market Predictor"],
    },
    promotion: ["YouTube Tutorials", "Medium Blogs"],
    freelancing: ["Upwork", "Fiverr", "Freelancer"],
    monetization: ["Freelancing", "Selling Courses", "YouTube Channel"],
  },

  "graphic design": {
    fundamentals: ["Color Theory", "Typography", "Canva/Photoshop Basics"],
    projects: {
      beginner: ["Social Media Posts", "Flyers"],
      intermediate: ["Logo Design", "Brand Kit"],
      advanced: ["UI/UX Design", "3D Mockups"],
    },
    promotion: ["Instagram Portfolio", "Behance", "Dribbble"],
    freelancing: ["Fiverr", "Upwork", "99designs"],
    monetization: ["Freelancing", "Course Creation", "Template Selling"],
  },

  "agentic ai": {
    fundamentals: ["LLMs Basics", "Agents SDK", "Prompt Engineering"],
    projects: {
      beginner: ["Simple Chatbot", "FAQ Bot"],
      intermediate: ["Multi-Agent Workflow", "PDF Analyzer Agent"],
      advanced: ["Trading Bot", "Full Agentic AI Platform"],
    },
    promotion: ["LinkedIn Posts", "AI Community Blogs"],
    freelancing: ["Upwork AI Projects", "Fiverr AI Tools"],
    monetization: ["SaaS AI Apps", "API Service", "Consulting"],
  },

  "video editing": {
    fundamentals: ["Basic Cuts & Transitions", "Audio Sync", "Color Grading"],
    projects: {
      beginner: ["Vlog Edit", "Short Instagram Reel"],
      intermediate: ["YouTube Series", "Cinematic Edit"],
      advanced: ["Full Documentary", "Ad Commercial"],
    },
    promotion: ["YouTube", "TikTok", "Instagram"],
    freelancing: ["Fiverr", "Upwork", "Freelancer"],
    monetization: ["YouTube Ads", "Freelance Clients", "Editing Courses"],
  },

  "digital marketing": {
    fundamentals: ["SEO Basics", "Google Ads", "Social Media Marketing"],
    projects: {
      beginner: ["Instagram Page Growth", "Facebook Campaign"],
      intermediate: ["Email Marketing Campaign", "Blog SEO"],
      advanced: ["Full Funnel Marketing", "E-commerce Ads"],
    },
    promotion: ["LinkedIn", "Instagram", "Twitter"],
    freelancing: ["Freelancer", "PeoplePerHour"],
    monetization: ["Freelancing", "Own Agency", "Affiliate Marketing"],
  },

  "app development": {
    fundamentals: ["JavaScript", "React Native / Flutter", "APIs"],
    projects: {
      beginner: ["Todo Mobile App", "Weather App"],
      intermediate: ["Chat App", "E-commerce App"],
      advanced: ["Food Delivery App", "Social Media App"],
    },
    promotion: ["Play Store", "App Store", "LinkedIn"],
    freelancing: ["Toptal", "Upwork"],
    monetization: ["App Sales", "Ad Revenue", "Freelancing"],
  },

  seo: {
    fundamentals: ["Keyword Research", "On-Page SEO", "Backlinks"],
    projects: {
      beginner: ["Blog SEO", "Portfolio Website SEO"],
      intermediate: ["Local SEO Project", "E-commerce SEO"],
      advanced: ["Full SEO Strategy for Business", "International SEO"],
    },
    promotion: ["Medium Blogs", "LinkedIn SEO Posts"],
    freelancing: ["Fiverr SEO", "Upwork SEO"],
    monetization: ["Freelancing", "SEO Agency", "SEO Courses"],
  },

  "content writing": {
    fundamentals: ["Grammar & Style", "Research", "Storytelling"],
    projects: {
      beginner: ["Blog Posts", "Social Media Captions"],
      intermediate: ["Website Copywriting", "Product Descriptions"],
      advanced: ["Full eBook", "White Papers"],
    },
    promotion: ["Medium", "LinkedIn", "Twitter"],
    freelancing: ["Fiverr", "Upwork", "Freelancer"],
    monetization: ["Freelancing", "Self-Publishing", "Courses"],
  },

  // ✅ New Skills Added

  animation: {
    fundamentals: ["2D Animation Basics", "3D Modeling", "Rigging & Motion"],
    projects: {
      beginner: ["Animated Logo", "Short Cartoon Clip"],
      intermediate: ["Explainer Video", "Animated Advert"],
      advanced: ["Full Short Film", "3D Character Animation"],
    },
    promotion: ["YouTube Animations", "Instagram Reels", "Behance"],
    freelancing: ["Upwork", "Fiverr Animation", "Freelancer"],
    monetization: ["YouTube Channel", "Client Projects", "Online Courses"],
  },

  "game development": {
    fundamentals: ["Game Engines (Unity/Unreal)", "Game Physics", "Level Design"],
    projects: {
      beginner: ["2D Platformer", "Basic Puzzle Game"],
      intermediate: ["Multiplayer Shooter", "Mobile Game"],
      advanced: ["Full RPG", "Open World Game"],
    },
    promotion: ["Itch.io", "Steam", "YouTube Devlogs"],
    freelancing: ["Indie Game Studios", "Freelance Platforms"],
    monetization: ["Steam Sales", "App Store", "In-App Purchases"],
  },

  "e-commerce": {
    fundamentals: ["Shopify/WooCommerce Basics", "Product Management", "Payments Integration"],
    projects: {
      beginner: ["Basic Store Setup", "Single Product Website"],
      intermediate: ["Multi-Product Store", "Custom Cart"],
      advanced: ["Full Marketplace", "Dropshipping Platform"],
    },
    promotion: ["Instagram Ads", "Facebook Marketplace"],
    freelancing: ["Fiverr Shopify", "Upwork E-commerce"],
    monetization: ["Own Store", "Affiliate E-commerce", "Dropshipping"],
  },

  networking: {
    fundamentals: ["IP Addressing", "Subnetting", "Routing & Switching"],
    projects: {
      beginner: ["Small Home Network", "LAN Setup"],
      intermediate: ["VPN Setup", "Firewall Configurations"],
      advanced: ["Enterprise Network", "Cloud Networking"],
    },
    promotion: ["LinkedIn Case Studies", "Networking Blogs"],
    freelancing: ["Cisco Projects", "Freelance IT Networking"],
    monetization: ["Corporate Jobs", "Freelancing", "Training Courses"],
  },

  "version control": {
    fundamentals: ["Git Basics", "Branching & Merging", "GitHub/GitLab"],
    projects: {
      beginner: ["Personal Portfolio Repo", "Collaborative Project"],
      intermediate: ["CI/CD Integration", "Team Workflow"],
      advanced: ["Open Source Contribution", "Large Scale Repo Management"],
    },
    promotion: ["GitHub Contributions", "LinkedIn Projects"],
    freelancing: ["GitHub Setup Jobs", "CI/CD Freelance Projects"],
    monetization: ["Freelancing", "Consulting", "Teaching Git"],
  },

  "responsive design": {
    fundamentals: ["HTML/CSS Basics", "Media Queries", "Flexbox & Grid"],
    projects: {
      beginner: ["Personal Website", "Landing Page"],
      intermediate: ["Portfolio with Breakpoints", "Blog Website"],
      advanced: ["E-commerce Storefront", "Full SaaS Platform UI"],
    },
    promotion: ["CodePen", "Dribbble", "GitHub Pages"],
    freelancing: ["Upwork Frontend Jobs", "Freelance Web Design"],
    monetization: ["Client Projects", "Freelance Work", "Course Creation"],
  },
};

export default dummyData;
