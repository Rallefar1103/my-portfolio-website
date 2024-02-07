import WebDevIcon from "../assets/coding.png";
import MobileDevIcon from "../assets/development.png";
import CloudIcon from "../assets/server.png";

let allSkills = [
  {
    title: "Mobile Development",
    icon: MobileDevIcon,
    description:
      "When it comes to mobile apps, I'm your go-to for seamless, cross-platform experiences. React Native and Flutter are my magic wands, crafting apps that not only feel native on any OS but also dazzle users with their responsiveness and intuitive design. With Firestore and Firebase in my arsenal, I ensure that both the development process and user experience are top-notch, integrating real-time data syncing and robust backend services effortlessly",
    tech: [
      "/icons/atom.png",
      "/icons/js.png",
      "/icons/flutter.png",
      "/icons/apple.png",
      "/icons/firebase.png",
      "/icons/android.png",
    ],
  },
  {
    title: "Web Development",
    icon: WebDevIcon,
    description:
      "In the world of web development, I love blending the art of frontend with the complexities of backend. React and Next.js are my go-tos for crafting interactive and modern interfaces, spiced up with TypeScript and JavaScript. To complement this, I leverage Node.js for robust server-side operations and integrate GraphQL and MongoDB for enhanced scalability and data flexibility",
    tech: [
      "/icons/typescript.png",
      "/icons/nextjs-icon-dark-background.png",
      "/icons/js.png",
      "/icons/nodejs.png",
      "/icons/atom.png",
      "/icons/graphql-logo.png",
      "/icons/leaf.png",
      "/icons/python.png",
      "/icons/tailwind.svg",
    ],
  },

  {
    title: "Cloud & CI/CD",
    icon: CloudIcon,
    description:
      "I'm all about crafting projects that scale gracefully, boast solid testing, and integrate effortlessly. My cloud playgrounds of choice are AWS and Supabase, which I leverage to their fullest to power up projects with top reliability and flexibility. When it's time for CI/CD, Docker, Bitrise, GitHub Actions, and now MongoDB Atlas, with its cloud prowess, are my go-tos. These tools streamline my development workflow, ensuring robustness and efficiency",
    tech: [
      "/icons/aws.png",
      "/icons/docker.png",
      "/icons/jenkins.png",
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
      "I leverage Bitbucket's robust version control and branch management to streamline our team's collaborative development efforts, ensuring high code integrity and quality using industry best practices for documentation, code reviews, PRs and more.",
  },
  {
    icon: "/icons/jira.png",
    description:
      "My approach with Jira is to streamline project processes, ensure high-quality and clear communication within the team, track milestones, and employ Agile development techniques to optimize our sprint planning and execution.  ",
  },
  {
    icon: "/icons/confluence.png",
    description:
      "I leverage Confluence to document project insights and create user guides that enhance knowledge sharing, aiming to support team efficiency and product useability for clients and customers.",
  },
];

export { allSkills, projectManagementSkills };
