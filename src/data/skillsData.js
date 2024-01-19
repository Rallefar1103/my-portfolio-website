import WebDevIcon from "../assets/coding.png";
import MobileDevIcon from "../assets/development.png";
import CloudIcon from "../assets/server.png";

let allSkills = [
  {
    title: "Mobile Development",
    icon: MobileDevIcon,
    description:
      "When it comes to mobile apps, I'm your guy for creating something that works smoothly across platforms. Using React Native and Flutter, I build apps that feel native no matter the OS. And with Firestore & Firebase in my toolkit, I make sure the development process is as sleek as the user experience.",
    tech: [
      "/icons/atom.png",
      "/icons/js.png",
      "/icons/flutter.png",
      "/icons/dart.png",
      "/icons/firebase.png",
      "/icons/android.png",
    ],
  },
  {
    title: "Web Development",
    icon: WebDevIcon,
    description:
      "When building products for the web I'm all about bringing together the best of both front and back-end worlds. My go-to tools are React, Next.js, TypeScript/JavaScript, and Node.js. I'm also pretty handy with Python, GraphQL, REST, and MongoDB, not to mention designing APIs that just work.",
    tech: [
      "/icons/typescript.png",
      "/icons/nextjs-icon-dark-background.png",
      "/icons/js.png",
      "/icons/nodejs.png",
      "/icons/atom.png",
      "/icons/graphql-logo.png",
      "/icons/leaf.png",
      "/icons/python.png",
      "/icons/mui.png",
    ],
  },

  {
    title: "Cloud & CI/CD",
    icon: CloudIcon,
    description:
      "I love making projects that are scalable, well tested, and where integration is a breeze. In the cloud, I focus my time on AWS and Supabase making them my current favorites. For CI/CD, I always turn to tools like Docker, Azure DevOps, Bitrise, and GitHub Actions to keep the dev process smooth, robust, and speedy.",
    tech: [
      "/icons/aws.png",
      "/icons/docker.png",
      "/icons/azure.png",
      "/icons/github.png",
      "/icons/bitrise.png",
      "/icons/supabase.png",
    ],
  },
];

let projectManagementSkills = [
  {
    icon: "/icons/architecture.png",
    description:
      "I focus on developing system architectures that are scalable and efficient, aiming to align technical designs with business strategies for robust, long-term solutions.",
  },
  {
    icon: "/icons/bitbucket.png",
    description:
      "I leverage Bitbucket's robust version control and branch management to streamline our team's collaborative development, ensuring high code integrity through best practice pull request reviews.",
  },
  {
    icon: "/icons/jira.png",
    description:
      "My approach with Jira is to streamline project processes, ensure high-quality and clear communication within the team, track milestones, and employ Agile development techniques to optimize our sprint planning and execution.  ",
  },
  {
    icon: "/icons/confluence.png",
    description:
      "I leverage Confluence to document project insights and create user guides that enhance knowledge sharing, aiming to support team efficiency and product useability.",
  },
];

export { allSkills, projectManagementSkills };
