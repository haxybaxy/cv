// import {
//   AmbitLogo,
// } from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Zaid Alsaheb",
  initials: "ZA",
  location: "Madrid, Spain, CET",
  locationLink: "https://www.google.com/maps/place/Madrid",
  about:
    "Full Stack Engineer | Focused and Motivated",
  summary:
    "Versatile full-stack software developer and AI engineer currently pursuing a bachelor's degree in computer science. Known for a holistic, interdisciplinary approach and a strong commitment to continuous learning.",
  avatarUrl: "https://avatars.githubusercontent.com/u/haxybaxy",
  personalWebsiteUrl: "https://haxybaxy.github.io/",
  contact: {
    email: "zaidksaheb@gmail.com",
    tel: "+34669923512",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/haxybaxy",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/zaid-saheb",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "IE University",
      degree: "Bachelor's Degree in Computer Science and Artificial Intelligence",
      start: "2022",
      end: "Present",
    },
  ],
  work: [
    {
      company: "Robotics and AI Club - IE University",
      link: "https://www.ieroboticsclub.com/",
      badges: [],
      title: "Software Developer and Researcher",
      start: "2023",
      end: "Present",
      description: [
        "Led multiple teams developing AI/ML models using NLP, Computer Vision, and others, to create 6+ different projects.",
        "Presented 10+ hands-on workshops to 30+ attendees about open source development, state of the art ML models, and generative AI. Utilized working demos of AI/ML models and other projects for greater attendee interaction.",
        "Maintaining Club Website and GitHub with front-end and back-end design and managing developer projects with GitHub.",
      ],
      stack: "TensorFlow, PyTorch, OpenCV, Astro.js, Express.js, Node.js, MongoDB, Python, ",
    },
    {
      company: "Mind & Mood",
      link: "https://www.mindandmood.org/",
      badges: ["Remote"],
      title: "Full Stack Web Developer",
      start: "2023",
      end: "Present",
      description: [
        "Developed behavioral therapy platform to connect patients and practitioners together, currently being used by 50+ patients.",
        "Using various full-stack web development features to design and maintain key features of the platform.",
        "Responsible for keeping track of user traffic and analytics to boost performance and user experience.",
      ],
      stack: "Tailwind CSS, React.js, Express.js, MySQL, Google Analytics, Google Cloud",
    },
    {
      company: "Coding Club - IE University",
      link: "https://www.instagram.com/iecodingclub_/",
      badges: [],
      title: "Marketing Coordinator",
      start: "2022",
      end: "Present",
      description: [
        "Boosted participant engagement by 100% by targeting demographics with advertisement campaigns on various social media.",
        "Designed 50+ posts for social media and helped build club presence on Campus, IEConnects, and Instagram.",
        "Tracking, reporting, and acting on analytics gathered from advertisement campaign responses",
      ],
        stack: "Adobe Photoshop, Adobe Illustrator, Canva, Buffer",
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Astro",
    "Next.js",
    "Express.js",
    "Node.js",
    "MySQL",
    "MongoDB",
    "Python",
    "TensorFlow",
    "PyTorch",
    "OpenCV",
    "Docker",
    "C",
    "R",
    "Arduino",
    "Git",
    "Linux",
    "Google Analytics",
    "Google Cloud",
    "Amazon Web Services",
    "Azure Cloud",
    "Adobe Suite",
    

  ],
  projects: [
    {
      title: "EC Lang",
      techStack: ["Uni Project", "C"],
      description:
        "Bytecode compiler with VM for a custom programming language, includes garbage collection and dynamic typing.",
      link: {
        label: "github.com",
        href: "https://github.com/haxybaxy/ec-lang",
      },
    },
    {
      title: "Qwicker",
      techStack: ["Uni Project", "React", "Node.js", "MySQL", "Azure Cloud"],
      description:
        "Attendance tracking system for IE University, includes QR code generation and scanning.",
      link: {
        label: "github.com",
        href: "https://github.com/jose-izarra/attendance_system",
      },
    },
    {
      title: "UNO",
      techStack: ["Uni Project", "PyGame", "Python"],
      description:
        "Popular card game UNO recreated in Python using PyGame, complete with CPU and graphics.",
      link: {
        label: "github.com",
        href: "https://github.com/haxybaxy/UNO",
      },
    },
    {
      title: "Club Website",
      techStack: ["Club Project", "Astro.js", "Express.js", "Node.js", "MongoDB"],
      description:
        "Club website for Robotics and AI Club at IE University, includes blog, projects, and events.",
      link: {
        label: "ieroboticsclub.com",
        href: "https://www.ieroboticsclub.com/",
      },
    },
    {
      title: "Mind & Mood",
      techStack: ["Side Project", "React", "Express.js", "Node.js", "MySQL"],
      description: "Cognitive behavioral therapy platform, fully fledged web application, 50+ current users.",
      link: {
        label: "mindandmood.org",
        href: "https://www.mindandmood.org/",
      },
    },
  ],
} as const;
