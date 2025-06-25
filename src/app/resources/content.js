import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Refyan",
  lastName: "Gigas",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web & Mobile Developer",
  avatar: "/images/avatar1.png",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Indonesia"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      A versatile Full-Stack Developer based in Probolinggo, with expertise in both web and mobile development. Proficient in crafting robust solutions using Laravel, PHP, JavaScript, and Flutter, while seamlessly integrating various database technologies like MySQL and NoSQL. Passionate about building scalable applications and transforming complex requirements into user-friendly digital experiences. Combines technical expertise with problem-solving skills to deliver efficient and innovative software solutions.
    </>
  )
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/refyangigas",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:refyanzidane@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Web & Mobile Developer</>,
  subline: (
    <>
      I'm Refyan Gigas, a Full-Stack Developer , specializing in web
      <br /> and mobile development. I'm passionate about building innovative digital solutions.
    </>
  )
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  resume: {
    display: true,
    link: "/files/resume.pdf"
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        A versatile Full-Stack Developer based in Probolinggo, with expertise in both web and mobile development. Proficient in crafting robust solutions using Laravel, PHP, JavaScript, and Flutter, while seamlessly integrating various database technologies like MySQL and NoSQL. Passionate about building scalable applications and transforming complex requirements into user-friendly digital experiences. Combines technical expertise with problem-solving skills to deliver efficient and innovative software solutions.
      </>
    )
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "TOSEPATU",
        timeframe: "2022 - 2023",
        role: "Staff IT",
        achievements: [
          <>
            Building web development
          </>,
          <>
            Building UI for websites
          </>,
          <>
            Performing application testing using black box methods to ensure optimal quality and performance
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/tosepatu.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Dinas Pemberdayaan Perempuan Perlindungan Anak dan Keluarga Berencana (PPPAKB) Kabupaten Jember",
        timeframe: "2023 - 2024",
        role: "Administrative assistant",
        achievements: [
          <>
            Responsible for managing administrative documents and archiving.
          </>,
          <>
            Skilled in data entry and record-keeping to maintain accurate and up-to-date information.
          </>,
          <>
            Capable of providing administrative support to team members and management
          </>,
          <>
            Responsible for maintaining the agency's website
          </>
        ],
        images: [
          {
            src: "/images/projects/project-01/aset dpppakb.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Coding.in",
        timeframe: "Jan 2025 - Mar 2025",
        role: "Web & Mobile Developer",
        achievements: [
          <>
            Developed and maintained web applications using the Laravel framework and PHP programming language, ensuring robust and scalable
back-end solutions.
          </>,
          <>
            Built cross- platform mobile applications using the Flutter framework and Dart programming language, delivering seamless user
experiences across devices.
          </>,
          <>
            Conducted debugging, testing, and optimization of applications to ensure high performance, stability, and compliance with industry
standards.
          </>,
          <>
            Designed and implemented responsive and user-friendly UI/UX for both web and mobile platforms, enhancing customer satisfaction and
usability
          </>
        ],
        images: [
          {
            src: "/images/projects/project-01/aset dpppakb.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Jember State Polytechnic",
        description: <>Studied Web & Mobile Development.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
