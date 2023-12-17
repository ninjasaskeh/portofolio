import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    figma,
    carrent,
    threejs,
    pu,
    piar,
    idn,
    flutter,
    android,
    laravel,
    firebase,
    job,
    nextjs,
    nike,
    sertif_android,
    sertif_flutter,
    sertif_flutter_lan,
    sertif_solid
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "edu",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI / UX Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "NextJS",
      icon: nextjs,
    },

    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Android",
      icon: android,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
  ];
  
  const experiences = [
    {
      school: "SMP Perguruan Islam Ar-Risalah",
      location: "Padang",
      icon: piar,
      iconBg: "#FFFFFF",
      date: "2016 - 2019",
      points: [
        "I started my junior high school education at SMP Perguruan Islam Ar Risilah Padang and that's where I started to become interested in the world of technology from TIK lessons."
      ],
    },
    {
      school: "SMK IDN Boarding School",
      location: "Bogor",
      icon: idn,
      iconBg: "#FFFFFF",
      date: "2019 - 2022",
      points: [
        "After completing my junior high school, I continued my education at SMK IDN Boarding School by majoring in software engineering to solidify my interest in technology."
      ],
    },
    {
      school: "President University",
      location: "Cikarang",
      icon: pu,
      iconBg: "#FFFFFF",
      date: "2023 - Present",
      points: [
        "After graduating from IDN I entered President University majoring in Information Technology, hoping that I could deepen my knowledge of computer science and IT.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ninjasaskeh/Car-Hub",
    },
    {
      name: "Job IT",
      description:
        "An application that I developed using React Native where this application will display several lists of job vacancies,with the details page and there is a button to apply directly to the company.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
       
      ],
      image: job,
      source_code_link: "https://github.com/ninjasaskeh/Cari-Kerja",
    },
    {
      name: "Nike",
      description:
        "A comprehensive web Nike Landing page see Popular products, Special Offers, etc.This app is i create when i learn taindwindcss and this web is create by Vite framewoks.",
      tags: [
        {
          name: "vite",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "taildwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: nike,
      source_code_link: "https://github.com/ninjasaskeh/Nike",
    },

  ]
  const sertifs = [
    {
      name: "Android Pemula Dicoding",
      image: sertif_android,
    },
    {
      name: "S.O.L.I.D Dicoding",
      image: sertif_solid,
    },
    {
      name: "Flutter IDN",
      image: sertif_flutter,
    },
    {
      name: "Flutter Intermediate IDN",
      image: sertif_flutter_lan,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, sertifs };