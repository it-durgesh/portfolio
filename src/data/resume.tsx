import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Durgesh Yadav",
  initials: "DY",
  url: "https://durgeshyadav.com",
  location: "Mumbai, IN",
  locationLink: "https://www.google.com/maps/place/mumbai",
  description:
    "Full-Stack Developer | 10+ Years Experience in Building Scalable Web Applications.",
  summary:
    "High-impact IT professional with extensive experience designing, developing, and deploying scalable web applications. Proven track record in Finance, Healthcare, Lifestyle, and E-commerce delivering robust solutions that align technical architecture with business goals. Expert in navigating complex domain requirements—from financial security standards to healthcare data compliance",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "itdurgesh@outlook.com",
    tel: "+91 9768962805",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/durgesh-github",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/durgesh-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/durgesh-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/durgesh-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "HDFC Bank Ltd.",
      href: "http://hdfc.bank.in/",
      badges: [],
      location: "Mumbai, IN",
      title: "Senior Manager - IT Development",
      logoUrl: "/hdfc.png",
      start: "25th April 2022",
      end: null,
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Citiustech Healthcare Technology Pvt Ltd.",
      badges: [],
      href: "https://www.citiustech.com/",
      location: "Mumbai, IN",
      title: "Technical Lead",
      logoUrl: "/citiustech.jpg",
      start: "20th February 2020",
      end: "21st April 2022",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Tacto Infomedia Pvt Ltd.",
      href: "https://share.google/mzeNZwVyr0FeCXSj0",
      badges: [],
      location: "Mumbai, IN",
      title: "Software Developer",
      logoUrl: "/tacto.png",
      start: "20th March 2017",
      end: "17th February 2020",
      description:
        "Aavidcode Pvt Ltd: *Aavidcode Acquired by Tacto Info Media Pvt Ltd on Dec 2017, Duration: Mar 2017 to Dec 2017",
    },
    {
      company: "G4k Solutions Pvt Ltd.",
      href: "https://share.google/iUOndJkmXKFK97phI",
      badges: [],
      location: "Mumbai, IN",
      title: "Software Developer",
      logoUrl: "/g4k.jpg",
      start: "01st December 2015",
      end: "23rd December 2016",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
  ],
  education: [
    {
      school: "SLRTCE Mumbai University",
      href: "https://slrtce.in/",
      degree: " Bachelor of Engineering in Information Technology (BEIT)",
      logoUrl: "/slrtce.jpg",
      start: "2011",
      end: "2015",
    },
    {
      school: "Fr. Agnel junior College, Bandra",
      href: "https://share.google/Rc9uWorpI50Pvc4jk",
      degree: "Higher Secondary Certificate (HSC)",
      logoUrl: "/FrAgnel.jpg",
      start: "2009",
      end: "2011",
    },
    {
      school: "St Andrews High School, Bandra",
      href: "https://share.google/RuPTSekSQMDHaNi7R",
      degree: "Secondary School Certificate (SSC)",
      logoUrl: "/SA.png",
      start: "1999",
      end: "2009",
    },
  ],
  projects: [
    {
      title: "Bhatia Hospital",
      href: "https://www.bhatiahospital.org/",
      dates: "",
      active: false,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
      ],
      links: [
        {
          type: "Website",
          href: "https://www.bhatiahospital.org/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    }
  ],
  hackathons: [
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
  ],
} as const;
