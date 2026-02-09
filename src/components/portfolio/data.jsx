import jopPortal from "../../assets/jop-portal.png";
import Eljewar from "../../assets/eljwewar-travels.png";
import Courses from "../../assets/courses-app.png";
import finalproject from "../../assets/final-project.png";
import ecompharmacy from "../../assets/ecommerce-pharmacy-min.png";
import Image6 from "../../assets/iti-traning.jpg";
import Image7 from "../../assets/iti3.png";
import Iti from "../../assets/iti-ecommerce.png";
import EcomAngular from "../../assets/ecommerce-angular.png";
import dashboard from "../../assets/dasboard-abrand.png"
import upworkJob1 from "../../assets/upwork-job1.png"
import Abrand from "../../assets/Abrand-ecommerce.png"
import ProjectFreelance1 from "../../assets/ProjectFreelance1.png"
import ProjectFreelance2 from "../../assets/ProjectFreelance2.png"
import ProjectFreelance3 from "../../assets/project-laravel-freelance.png"
import ProjectFreelance4 from "../../assets/dubizzle-freelance.png"
import ProjectFreelance5 from "../../assets/dr-samkari.png"
import ProjectFreelance6 from "../../assets/dr-samkari-dashboard.png"
import alqoba from "../../assets/alqoba.png"

import { RiGitRepositoryPrivateLine } from "react-icons/ri";

export const webProjects = [
  {
    img: ProjectFreelance3,
    title: "Al Bayan for Reseach",
    description: "Project Freelance ",
    technologies: "HTML - Sass - JS - BootStrap - PHP - Laravel",
    url: "https://albayanres.com/",
    contributor: "true",
    linkText: "Demo",
    idea: "Academic consultancy helping researchers and graduate students with theses and scientific research services.",
    role: "Responsible for making the application fast, enhancing performance and UI, responsive design, and adding new features in the backend.",
    country: "Palestine"
  },
  {
    img: ProjectFreelance5,
    title: "Dr Samkari",
    description: "Project Freelance",
    technologies: "HTML - CSS - JS - Tailwind - Nextjs - payment Meps",
    url: "https://www.drsamkari.com/",
    linkText: "Demo",
    dashboardUrl: "https://www.drsamkari.com/dashboard",
    idea: "Medical practice website for Dr. Zaid Samkari offering healthcare services, consultations, and appointment booking. Covers cosmetic and non-surgical procedures.",
    role: "Responsible for frontend development, with dashboard for managing content, SEO optimization, smooth animations, and integrating appointment booking and Meps payment.",
    country: "Jordan"
  },
  {
    img: alqoba,
    title: "Al Qoba Al Zahabia",
    description: "Freelance Project",
    technologies: "HTML - CSS - JS - Tailwind - Nextjs - i18next - Supabase - EmailJs",
    url: "https://alqopa-alzahabia-test.vercel.app/",
    linkText: "Demo",
    idea: "Showcase company services (web apps, digital marketing, motion graphics, mobile apps), pricing plans, team section, customer reviews, Zati app download, and contact form.",
    role: "Responsible for frontend development, Supabase integration, SEO optimization, responsive design and with dashboard for managing content.",
    country: "Dubai"
  },
  {
    img: jopPortal,
    title: "Job Portal App",
    description: "Graduation Project at - I T I",
    technologies: "HTML - Sass - JS - BootStrap - PHP - MySQL",
    url: "https://github.com/Ahmedgawish10/JobPortal-app",
    linkText: "Code",
    idea: "Job portal: post and browse jobs, apply, with PHP backend and MySQL database.",
    role: "Responsible for frontend and backend (PHP, MySQL), responsive design.",
    country: "Egypt"
  }, {
    img: Eljewar,
    title: "Travel Agency App",
    description: "Freelance Project",
    technologies: "HTML - CSS - JS - Tailwind - Next.js - i18next",
    url: "https://aljewartours.vercel.app/",
    linkText: "Demo",
    idea: "Al-jewar for Tourism & Travels — explore travel destinations and experiences. Multilingual site with Arabic and English support.",
    role: "Implemented frontend features, responsive layouts, Arabic/English localization using i18next, and EmailJS integration.",
    country: "Egypt"
  }, {
    img: Courses,
    title: "Courses Tech App",
    description: "Training Project",
    technologies: "HTML - CSS - JS - Tailwind - Next.js - Strapi - Stripe - ClerkAuth - Cloudinary",
    url: "https://fullstack-courses-app-3vdz.vercel.app/",
    linkText: "Demo",
    idea: "Website for learning courses. Features: browse courses, enroll and pay, user auth, and CMS-managed content.",
    role: "Responsible for responsive design and integrating Strapi CMS, Stripe, Clerk auth, and Cloudinary.",
    country: "Egypt"
  }
]

export const reactProjects = [
  {
    id: 1,
    title: "Dashboard Abrand",
    description: "Freelance Project ",
    technologies: "(HTML - Css - Tailwind - Js - MUI- Reactjs- Firebase)",
    image: dashboard,
    url: "https://dashboard-ahmedgawish.vercel.app/",
    linkText: "Demo",
    idea: "Admin dashboard for ABrand e-commerce to manage products, brands, and content.",
    role: "Responsible for frontend development and integrating Firebase for authentication and Firestore for database.",
    country: "Egypt"
  },
  {
    id: 2,
    title: "E-commerce ABrand ",
    description: "Freelance Project",
    technologies: "(HTML - CSS- TypeScript - Tailwind - MUI -React - Firebase - Stripe) ",
    image: Abrand,
    url: "https://ecommerce-react-firebase-five.vercel.app/",
    linkText: "Demo",
    idea: "E-commerce website for collections of brands, with dashboard for managing content. Browse and buy with Firebase backend and Stripe payments.",
    role: "Responsible for frontend development, responsive design, and integrating Firebase and Stripe with dashboard for managing content.",
    country: "Egypt"
  },
  {
    id: 3,
    image: finalproject,
    title: "Arduino Sensor Product",
    description: "Graduation Project ",
    technologies: "HTML - CSS - BootStrap - Reactjs - Context API ",
    url: "https://ahmedgawish10.github.io/graduateproject/",
    linkText: "Demo",
    idea: "Graduation project: marketing website for my Arduino sensor product.",
    role: "Responsible for frontend development, focusing on creating a smooth user experience and fully responsive design to effectively market the Arduino product.",
    country: "Egypt"
  }, {
    id: 4,
    image: ecompharmacy,
    title: "E-commerce Pharmacy",
    description: "Freelance Project",
    technologies: "HTML - CSS - Js - BootStrap  - React - ReduxToolkit",
    url: "https://ecommerce-pharmacy4.vercel.app/",
    linkText: "Demo",
    idea: "E-commerce site for pharmacy products. Cart, checkout, and product catalog with React and Redux.",
    role: "Responsible for responsive design and state management with Redux Toolkit.",
    country: "Egypt"
  }
]

export const myCertificates = [
  {
    id: 1,
    img: Image6,
    title: "Summer Training Certificate at I T I",
    description: "Fundamentals Web Development",

  }, {
    id: 2,
    img: Image7,
    title: "Web Developer Certificate at I T I",
    description: "Fullstack PHP Web Developer",
  }
]

export const allProjects = [
  {
    id: 1,
    title: "Al Bayan for Reseach",
    description: "Project Freelance ",
    technologies: "(HTML - Sass - JS - BootStrap - PHP - Laravel)",
    image: ProjectFreelance3,
    url: "https://albayanres.com/",
    contributor: "true",
    linkText: "Demo",
    idea: "Academic consultancy helping researchers and graduate students with theses and scientific research services.",
    role: "Responsible for making the application fast, enhancing performance and UI, responsive design, and adding new features in the backend.",
    country: "Palestine"
  },
  {
    id: 2,
    title: "Dr Samkari",
    description: "Project Freelance",
    technologies: "(HTML - CSS- JS - Tailwind - Nextjs - payment Meps)",
    image: ProjectFreelance5,
    url: "https://www.drsamkari.com/",
    linkText: "Demo",
    idea: "Medical practice website for Dr. Zaid Samkari offering healthcare services, consultations, and appointment booking. Covers cosmetic and non-surgical procedures.",
    role: "Responsible for frontend development, with dashboard for managing content, SEO optimization, smooth animations, and integrating appointment booking and Meps payment.",
    country: "Jordan"
  },
  {
    id: 17,
    title: "Al Qoba Al Zahabia",
    description: "Freelance Project",
    technologies: "(HTML - CSS- JS - Tailwind - Nextjs - i18next - Supabase - EmailJs)",
    image: alqoba,
    url: "https://alqopa-alzahabia-test.vercel.app/",
    linkText: "Demo",
    idea: "Showcase company services (web apps, digital marketing, motion graphics, mobile apps), pricing plans, team section, customer reviews, Zati app download, and contact form.",
    role: "Responsible for frontend development, Supabase integration, SEO optimization, responsive design and with dashboard for managing content.",
    country: "Dubai"
  },
  {
    id:3,
    title: "Travel Agency App",
    description: "Freelance Project",
    technologies: "(HTML - CSS- JS - Tailwind - Nextjs - i18next- EmailJs)",
    image: Eljewar,
    url: "https://aljewartours.vercel.app/",
    linkText: "Demo",
    idea: "Al-jewar for Tourism & Travels — explore travel destinations and experiences. Multilingual site with Arabic and English support.",
    role: "Implemented frontend features, responsive layouts, Arabic/English localization using i18next, and EmailJS integration.",
    country: "Egypt"
  },
  {
    id: 4,
    title: "Dr Samkari - Dashboard",
    description: " Freelance Project",
    technologies: "(HTML - CSS- JS - tailwind - shadcn ui - Nextjs )",
    image: ProjectFreelance6,
    url: "#",
    private: <RiGitRepositoryPrivateLine />,
    linkText: "Demo",
    idea: "Admin dashboard for Dr. Samkari medical practice to manage content, appointments",
    role: "Responsible for frontend development, responsive design, and dashboard features using Next.js and Shadcn UI.",
    country: "Jordan"
  },
  {
    id: 5,
    title: "E-commerce ABrand ",
    description: "Freelance Project",
    technologies: "(HTML - CSS- TypeScript - Tailwind - React - React Mui - Firebase - Stripe)",
    image: Abrand,
    url: "https://ecommerce-react-firebase-five.vercel.app/",
    linkText: "Demo",
    idea: "E-commerce website for collections of brands, with dashboard for managing content. Browse and buy with Firebase backend and Stripe payments.",
    role: "Responsible for frontend development, responsive design, and integrating Firebase and Stripe with dashboard for managing content.",
    country: "Egypt"
  },
  {
    id: 6,
    title: "Dashboard Abrand",
    description: "Freelance Project ",
    technologies: "(HTML - Css - Tailwind - Js - MUI - Reactjs- Firebase)",
    image: dashboard,
    url: "https://dashboard-ahmedgawish.vercel.app/",
    linkText: "Demo",
    idea: "Admin dashboard for ABrand e-commerce to manage products, brands, and content.",
    role: "Responsible for frontend development and integrating Firebase for authentication and Firestore for database.",
    country: "Egypt"
  },
  {
    id: 7,
    title: "Courses Tech App",
    description: "Training Project",
    technologies: "(HTML - CSS- JS - Tailwind - Nextjs - Strapi(CMS) - Stripe - ClerkAuth - Cloudinary)",
    image: Courses,
    url: "https://fullstack-courses-app-3vdz.vercel.app/",
    linkText: "Demo",
    idea: "Website for learning courses. Features: browse courses, enroll and pay, user auth, and CMS-managed content.",
    role: "Responsible for responsive design and integrating Strapi CMS, Stripe, Clerk auth, and Cloudinary.",
    country: "Egypt"
  },
  {
    id: 8,
    title: "HBM High School",
    description: "Freelance Project Dashboard ",
    technologies: "(HTML - Sass - Js - React - ReduxToolkit - I18next - Firebase)",
    image: ProjectFreelance1,
    url: "#",
    linkText: "Demo",
    private: <RiGitRepositoryPrivateLine />,
    style: "h-[100%]",
    idea: "Dashboard for HBM High School to manage school content and data.",
    role: "Responsible for converting and enhancing the UI and code, refactoring, and organizing the codebase.",
    country: "Morocco"
  },
  {
    id: 9,
    title: "E-commerce Pharmacy",
    description: "Training Project",
    technologies: "(HTML - CSS - BootStrap- Js - React - ReduxToolkit)",
    image: ecompharmacy,
    url: "https://ecommerce-pharmacy4.vercel.app/",
    linkText: "Demo",
    idea: "E-commerce site for pharmacy products. Cart, checkout, and product catalog with React and Redux.",
    role: "Responsible for responsive design and state management with Redux Toolkit.",
    country: "Egypt"
  },
  {
    id: 10,
    title: "Dubbizle Mulitvendor",
    description: "Freelance Project",
    technologies: "(HTML - CSS - Tailwind- Js - Firebase- Nextjs - Localization)",
    image: ProjectFreelance4,
    url: "https://dubizzle-freelance-project.vercel.app/",
    linkText: "Demo",
    idea: "Multivendor marketplace (Dubizzle-clone). Listings, Firebase backend, and localization.",
    role: "Responsible for responsive design, Firebase integration, and localization.",
    country: "Egypt"
  },
  {
    id: 11,
    title: "Arduino Sensor Product",
    description: "Graduation Project ",
    technologies: "(HTML - CSS - BootStrap - Js - BootStrap - React - ContextApi)",
    image: finalproject,
    url: "https://ahmedgawish10.github.io/graduateproject/",
    linkText: "Demo",
    idea: "Graduation project: marketing website for my Arduino sensor product.",
    role: "Responsible for frontend development, focusing on creating a smooth user experience and fully responsive design to effectively market the Arduino product.",
    country: "Egypt"
  },
  {
    id: 12,
    title: "MD System",
    description: "Freelance Project AdminPanel ",
    technologies: "(HTML - Sass - Js - React - ReduxToolkit - I18next - Firebase)",
    image: ProjectFreelance2,
    url: "#",
    linkText: "Demo",
    private: <RiGitRepositoryPrivateLine />,
    style: "h-[100%]",
    idea: "Admin panel for MD System. Manage content and data with Firebase, i18n support.",
    role: "Responsible for responsive design, Redux state management, i18next, and Firebase integration.",
    country: "Morocco"
  },
  {
    id: 13,
    image: jopPortal,
    title: "Job Portal App",
    description: "Graduation Project at I T I",
    technologies: "HTML - Sass - JS - BootStrap - PHP - MySQL",
    url: "https://github.com/Ahmedgawish10/JobPortal-app",
    linkText: "Code",
    idea: "Job portal: post and browse jobs, apply, with PHP backend and MySQL database.",
    role: "Responsible for frontend and backend (PHP, MySQL), responsive design.",
    country: "Egypt"
  },
  {
    id: 14,
    title: "E-commerce Pizza",
    description: "Graduation Project at I T I",
    technologies: "(HTML - Sass - JS - BootStrap - Swiper.js)",
    image: Iti,
    url: "https://ecommerce-iti.vercel.app/",
    linkText: "Demo",
    idea: "E-commerce site for pizza orders. Product catalog, cart, and Swiper.js for UI.",
    role: "Responsible for responsive design and frontend with Bootstrap and Swiper.js.",
    country: "Egypt"
  },
  {
    id: 15,
    image: upworkJob1,
    title: "Chess Game ",
    description: "Freelance Project Upowrk",
    technologies: "HTML - CSS - JS -jQuery",
    url: "https://www.upwork.com/freelancers/~01d2fb08754ad6fb6d",
    linkText: "Demo",
    idea: "Browser-based chess game. Play vs opponent with jQuery for logic and UI.",
    role: "Responsible for game logic, UI, and responsive layout with jQuery.",
    country: "Vietnam"
  },

  {
    id: 16,
    title: "MediCare App (Angular)",
    description: "Training Project at I T I",
    technologies: "(HTML - CSS - JS - BootStrap - Angular - REST API)",
    image: EcomAngular,
    url: "https://ecommerce-angular-beta-lime.vercel.app/",
    linkText: "Demo",
    idea: "MediCare e-commerce: browse products, cart, checkout. Angular frontend with REST API.",
    role: "Responsible for responsive design and Angular integration with REST API.",
    country: "Egypt"
  },
];





















