// All site content lives here. Edit this file to update the portfolio —
// no component changes needed.

export type Project = {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
  sourceUrl?: string;
  builtWithClaude?: boolean;
  featured?: boolean;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  points: string[];
};

// Public URL of the site, used for SEO / social previews. Set NEXT_PUBLIC_SITE_URL once you have a custom domain.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const profile = {
  name: "Engr. Hafiz Anjum",
  shortName: "Hafiz Anjum",
  role: "Software Engineer · ERP & AI Solutions",
  location: "Karachi, Pakistan",
  email: "hafizanjumraza1993@gmail.com",
  phone: "+92 345 2692533",
  // Set to e.g. "/resume.pdf" after placing a CV (without CNIC / date of birth) in /public.
  resumeUrl: null as string | null,
  socials: {
    github: "",
    linkedin: "",
  },
  headline:
    "I build AI-powered web apps and ERP solutions that turn live business data into answers.",
  summary:
    "Software Engineer (B.E., MUET) with 6+ years in ERP systems, plus experience in web development and network administration (CCNA). I combine hands-on ERPNext / Frappe support with modern frontend work in Next.js and Generative AI — and I use Claude as a core part of how I design, build and ship software.",
  about: [
    "I'm a Software Engineer from Mehran University of Engineering & Technology with a practical, business-first mindset. Since 2020 I've been the Senior Software Support engineer for the ERP platform at Black and Brown Bakers — troubleshooting complex issues, optimising workflows, training users and working with developers to ship enhancements.",
    "Most recently I integrated an AI chatbot into ERPNext (Frappe) that answers user questions using live ERP data. That project sparked my focus on Generative AI: I now build and deploy full web applications with Next.js and Claude, moving from idea to a live product quickly and reliably.",
    "My background also spans web development, network administration (CCNA) and running my own distribution business — so I understand both the technology and the operations it's meant to serve.",
  ],
  stats: [
    { value: "6+", label: "Years in ERP support" },
    { value: "10+", label: "Years in tech & business" },
    { value: "AI", label: "Chatbot on live ERP data" },
    { value: "CCNA", label: "Cisco certified" },
  ],
};

export const skillGroups: { title: string; skills: string[] }[] = [
  {
    title: "AI & Generative AI",
    skills: ["Claude", "Generative AI", "AI Chatbots", "Prompt Engineering", "LLM Integration"],
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React", "JavaScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    title: "Backend & Data",
    skills: ["Python", "SQL", "REST APIs", "Frappe Framework"],
  },
  {
    title: "ERP & Business Systems",
    skills: ["ERPNext", "ERP Support & Troubleshooting", "Workflow Optimisation", "User Training"],
  },
  {
    title: "Networking & IT",
    skills: ["CCNA", "Network Administration", "IT Support"],
  },
  {
    title: "Tools & Other",
    skills: ["Git", "Vercel", "Canva", "Social Media Management"],
  },
];

export const experience: Experience[] = [
  {
    company: "Black and Brown Bakers",
    role: "Senior Software Support (ERP)",
    period: "Oct 2020 — Present",
    location: "Karachi",
    points: [
      "Integrated an AI chatbot into ERPNext (Frappe) that answers user queries using live ERP data.",
      "Provide technical support and troubleshooting for ERP system users across the business.",
      "Resolve complex system issues and optimise ERP workflows.",
      "Run user training sessions to improve system adoption and efficiency.",
      "Collaborate with developers to design and roll out system enhancements.",
    ],
  },
  {
    company: "Sara Learning",
    role: "Social Media Manager",
    period: "2023 — 2024",
    location: "Remote",
    points: [
      "Managed day-to-day activity and content across Facebook, LinkedIn and Instagram.",
    ],
  },
  {
    company: "ISH Logic Software House",
    role: "Web Developer",
    period: "2018",
    points: [
      "Developed web applications, collaborated on client projects and maintained software solutions.",
    ],
  },
  {
    company: "Distribution and Soul Business",
    role: "Business Owner",
    period: "2017 — 2018",
    points: ["Managed business operations, logistics and distribution activities."],
  },
];

// Add your deployed projects here. Projects with `featured: true` are shown first.
export const projects: Project[] = [
  {
    title: "ERPNext AI Assistant",
    tagline: "Chatbot that answers questions from live ERP data",
    description:
      "An AI chatbot integrated directly into ERPNext (Frappe) at Black and Brown Bakers. Staff ask questions in plain language and get answers grounded in the company's live ERP records — no reports or manual lookups needed.",
    highlights: [
      "Natural-language queries over live ERP data",
      "Integrated inside the existing ERPNext / Frappe system",
      "Reduces support load and speeds up everyday decisions",
    ],
    tech: ["ERPNext", "Frappe", "Python", "Generative AI"],
    liveUrl: "https://sale-chatbot-erp-next.vercel.app",
    builtWithClaude: true,
    featured: true,
  },
  {
    title: "ERPNext Sales Analytics Dashboard",
    tagline: "Live sales, costing and stock analytics on ERPNext data",
    description:
      "A real-time analytics dashboard for a bakery business, pulling live data from ERPNext. Management can track sales KPIs, costing, production forecasts and stock in one place, with flexible date ranges and auto-refresh.",
    highlights: [
      "KPIs: net sales, bills, average bill, quantity sold, best / lowest day and monthly target",
      "Modules for Sales, Costing, Production Forecast, Sales Decline & Cost Increase and Stock tracking",
      "Today / week / month / custom ranges, auto-refresh, voice control and dark mode",
    ],
    tech: ["Next.js", "ERPNext API", "Data Visualization", "Vercel"],
    liveUrl: "https://erpnext-sales-dashboard.vercel.app",
    builtWithClaude: true,
    featured: true,
  },
  {
    title: "AI Research Lab — Task Management",
    tagline: "Monthly task planning and tracking for managers and teams",
    description:
      "A role-based task management web app. Managers plan each month, assign work and follow progress, while team members sign in to see and update their own tasks — with results reported from one place.",
    highlights: [
      "Secure sign-in with manager and team-member roles",
      "Monthly planning, task assignment and progress tracking",
      "Centralised reporting of results for managers",
    ],
    tech: ["Next.js", "Authentication", "Vercel"],
    liveUrl: "https://task-managemnt-desk-th56.vercel.app",
    builtWithClaude: true,
  },
  {
    title: "KidsWear Pakistan",
    tagline: "E-commerce store for kids' clothing, shoes and accessories",
    description:
      "A full online store for children's fashion in Pakistan — party frocks, Eid collections, school shoes and everyday wear — with category browsing, featured and new-arrival collections, discounts and local payment options.",
    highlights: [
      "Category shopping: girls, boys, dresses, shoes, accessories and Eid collection",
      "Product search, wishlist, cart, sign-in and order tracking",
      "Sale pricing, promo codes, and Easypaisa / JazzCash / COD payments",
    ],
    tech: ["Next.js", "E-commerce", "Vercel"],
    liveUrl: "https://kids-clothing-ecommerce-gamma.vercel.app",
    builtWithClaude: true,
  },
  {
    title: "BNB Book Outlet",
    tagline: "Online bookstore for Matric & Intermediate students",
    description:
      "An e-commerce bookstore for Pakistani students selling textbooks, guides, notes and solved past papers, organised by class level and examination board, with nationwide delivery.",
    highlights: [
      "Browse by Matric, Intermediate, board, textbooks, guides, notes and past papers",
      "Search by title, subject, publisher or ISBN",
      "Cart, wishlist, sign-in and order tracking",
    ],
    tech: ["Next.js", "E-commerce", "Vercel"],
    liveUrl: "https://bookoutlet-ecommerce.vercel.app",
    builtWithClaude: true,
  },
  {
    title: "BnB Cloud Services",
    tagline: "Company website for a Pakistan-based software house",
    description:
      "A modern, responsive marketing website for BnB Cloud Services, presenting its services — web design and development, custom ERP systems, SEO & digital marketing, e-commerce and cloud hosting — with a clear path for clients to request a free quote.",
    highlights: [
      "Six service offerings with dedicated detail links",
      "About, \"How we work\" process and stats sections",
      "Conversion-focused calls to action for quotes and new projects",
    ],
    tech: ["Next.js", "React", "Vercel"],
    liveUrl: "https://bn-bcloudservices.vercel.app",
    builtWithClaude: true,
    featured: true,
  },
];

export const education = [
  {
    school: "Mehran University of Engineering & Technology, Jamshoro (MUET)",
    degree: "B.E. Software Engineering — 1st Division",
    year: "2016",
  },
  {
    school: "B.I.S.E Hyderabad",
    degree: "Intermediate — Grade A",
    year: "2011",
  },
  {
    school: "B.I.S.E Hyderabad",
    degree: "Matriculation — Grade A1",
    year: "2009",
  },
];

export const certifications = [
  { title: "Cisco Certified Network Associate (CCNA)", issuer: "Cisco" },
  { title: "Generative AI Bootcamp", issuer: "Analytics Camp 365" },
  { title: "Network Administration", issuer: "Hidaya Institute of Science & Technology" },
];

export const languages = ["English", "Urdu"];
