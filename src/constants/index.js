import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am an enthusiastic Java developer with a strong foundation in Spring Boot, eager to kickstart my career by building robust and scalable applications. With a solid understanding of back-end development and hands-on experience in projects, I am passionate about learning and applying modern Java technologies to create efficient solutions that meet business needs and deliver a great user experience.`;

export const ABOUT_TEXT = `I am a motivated Java developer with a keen interest in building efficient and user-friendly applications using Spring Boot. As a fresher, I am driven by a deep curiosity for technology and a commitment to continuous learning. I have gained hands-on experience through various projects, where I have developed a strong foundation in back-end development and database management using PostgreSQL. I thrive in collaborative environments and am eager to apply my skills to solve real-world challenges. Outside of coding, I enjoy exploring new technologies and enhancing my technical knowledge.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart,Razorpay payment Gateway, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Spring Boot", "PostgreSQL"],
    url: "https://shopcart-ivory.vercel.app/",
  },
  {
    title: "Student Management",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["Thymeleaf", "Bootstrap", "Spring Boot"],
  },
  {
    title: "Employee Management",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Thymeleaf", "Bootstrap", "Spring Boot"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: [
      "Thymeleaf",
      "Bootstrap",
      "Spring Boot",
      "PostgreSQL",
      "React",
    ],
  },
];

export const CONTACT = {
  address: "noida sector 16 UttarPardesh ",
  phoneNo: "+91 7017873481 ",
  email: "amanv1269@gmail.com",
};
