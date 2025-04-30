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

import { RiGitRepositoryPrivateLine } from "react-icons/ri";

 export const webProjects=[
  {
    img: ProjectFreelance3,
    title: "Al Bayan for Reseach",
    description: "Project Freelance ",
    technologies: "HTML - Sass - JS - BootStrap - PHP - Laravel",
    url: "https://albayanres.com/",
    contributor:"true",
    linkText: "Demo"
  },
    {
    img: jopPortal,
    title: "Job Portal App",
    description: "Graduation Project at - I T I",
    technologies: "HTML - Sass - JS - BootStrap - PHP - MySQL",
    url: "https://github.com/Ahmedgawish10/JobPortal-app",
    linkText: "Code"
  }, {
    img: Eljewar,
    title: "Travel Agency App",
    description: "Freelance Project",
    technologies: "HTML - CSS - JS - Tailwind - Next.js - i18next",
    url: "https://aljewartours.vercel.app/",
    linkText: "Demo"
  }, {
    img: Courses,
    title: "Courses Tech App",
    description: "Training Project",
    technologies: "HTML - CSS - JS - Tailwind - Next.js - Strapi - Stripe - ClerkAuth - Cloudinary",
    url: "https://fullstack-courses-app-3vdz.vercel.app/",
    linkText: "Demo"
  }
]

  export const reactProjects=[
    {
      id: 1,
      title: "Dashboard Abrand",
      description: "Freelance Project ",
      technologies: "(HTML - Css - Tailwind - Js - MUI- Reactjs- Firebase)",
      image: dashboard,
      url: "https://dashboard-ahmedgawish.vercel.app/",
      linkText: "Demo"
    },
    {
      id: 2,
      title: "E-commerce ABrand ",
      description: "Freelance Project",
      technologies: "(HTML - CSS- TypeScript - Tailwind - MUI -React - Firebase - Stripe) ",
      image: Abrand,
      url: "https://ecommerce-react-firebase-five.vercel.app/",
      linkText: "Demo"

    },
    {
      id: 3,
      image: finalproject,
      title: "Arduino Sensor Product",
      description: "Graduation Project ",
      technologies: "HTML - CSS - BootStrap - Reactjs - Context API ",
      url: "https://ahmedgawish10.github.io/graduateproject/",
      linkText: "Demo"
  }, {
    id: 4,
    image: ecompharmacy,
    title: "E-commerce Pharmacy",
    description: "Freelance Project",
    technologies: "HTML - CSS - Js - BootStrap  - React - ReduxToolkit",
    url: "https://ecommerce-pharmacy4.vercel.app/",
    linkText: "Demo"

  }
]

  export const myCertificates=[
    {
    id:1,
    img: Image6,
    title: "Summer Training Certificate at I T I",
    description: "Fundamentals Web Development",

  }, {
    id:2,
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
    technologies: "HTML - Sass - JS - BootStrap - PHP - Laravel",
    image: ProjectFreelance3,
    url: "https://albayanres.com/",
    contributor:"true",
    linkText: "Demo"
  },
    {
    id: 2,
    title: "Dashboard Abrand",
    description: "Freelance Project ",
    technologies: "(HTML - Css - Tailwind - Js - MUI - Reactjs- Firebase)",
    image: dashboard,
    url: "https://dashboard-ahmedgawish.vercel.app/",
    linkText: "Demo"
  },
   
    {
      id: 3,
      title: "Travel Agency App",
      description: "Freelance Project",
      technologies: "(HTML - CSS- JS - Tailwind - Nextjs - i18next- EmailJs)",
      image: Eljewar,
      url: "https://aljewartours.vercel.app/",
      linkText: "Demo"

    },
    {
      id: 4,
      title: "E-commerce ABrand ",
      description: "Freelance Project",
      technologies: "(HTML - CSS- TypeScript - Tailwind - React - React Mui - Firebase - Stripe)",
      image: Abrand,
      url: "https://ecommerce-react-firebase-five.vercel.app/",
      linkText: "Demo"

    },
    {
      id: 5,
      title: "Courses Tech App",
      description: "Training Project",
      technologies:"(HTML - CSS- JS - Tailwind - Nextjs - Strapi(CMS) - Stripe - ClerkAuth - Cloudinary)",
      image: Courses,
      url: "https://fullstack-courses-app-3vdz.vercel.app/",
      linkText: "Demo"

    },
    {
      id: 6,
      title: "HBM High School", 
      description: "Freelance Project Dashboard ",
      technologies:"(HTML - Sass - Js - React - ReduxToolkit - I18next - Firebase)",
      image: ProjectFreelance1,
      url: "#",
      linkText: "Demo",
      private:<RiGitRepositoryPrivateLine/>,
      style:"h-[100%]"
    },
    {
      id: 7,
      title: "E-commerce Pharmacy",
      description: "Training Project",
      technologies:"(HTML - CSS - BootStrap- Js - React - ReduxToolkit)",
      image: ecompharmacy,
       url: "https://ecommerce-pharmacy4.vercel.app/",
       linkText: "Demo"
    },

    {
      id: 8,
      title: "Dubbizle Mulitvendor",
      description: "Freelance Project",
      technologies:"(HTML - CSS - Tailwind- Js - Firebase- Nextjs - Localization)",
      image: ProjectFreelance4,
       url: "https://dubizzle-freelance-project.vercel.app/",
       linkText: "Demo"
    },
    {
      id: 9,
      title: "Arduino Sensor Product",
      description: "Graduation Project ",
      technologies: "(HTML - CSS - BootStrap - Js - BootStrap - React - ContextApi)",
      image: finalproject,
      url: "https://ahmedgawish10.github.io/graduateproject/",
      linkText: "Demo"

    },
    {
      id: 10,
      title: "MD System", 
      description: "Freelance Project AdminPanel ",
      technologies:"(HTML - Sass - Js - React - ReduxToolkit - I18next - Firebase)",
      image: ProjectFreelance2,
      url: "#",
      linkText: "Demo",
      private:<RiGitRepositoryPrivateLine/>,
      style:"h-[100%]"
    }, 
    {
        id: 11,
        image: jopPortal,
        title: "Job Portal App",
        description: "Graduation Project at I T I",
        technologies: "HTML - Sass - JS - BootStrap - PHP - MySQL",
        url: "https://github.com/Ahmedgawish10/JobPortal-app",
        linkText: "Code"
    }, 
    {
      id: 12,
      title: "E-commerce Pizza",
      description: "Graduation Project at I T I",
      technologies: "(HTML - Sass - JS - BootStrap - Swiper.js)",
      image: Iti,
      url: "https://ecommerce-iti.vercel.app/",
      linkText: "Demo"
    },
    {
        id: 13,
        image: upworkJob1,
        title: "Chess Game ",
        description: "Freelance Project Upowrk",
        technologies: "HTML - CSS - JS -jQuery",
        url: "https://www.upwork.com/freelancers/~01d2fb08754ad6fb6d",
        linkText: "Demo"
    },

    {
      id: 13,
      title: "MediCare App (Angular)",
      description: "Training Project at I T I",
      technologies: "(HTML - CSS - JS - BootStrap - Angular - REST API)",
      image: EcomAngular,
      url: "https://ecommerce-angular-beta-lime.vercel.app/",
      linkText: "Demo"
    },
  ];





















