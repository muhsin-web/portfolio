import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

import Falcon from "public/images/falconpay.png"
import Falcon2 from "public/images/fp-2.png"
import Tmart from "public/images/timart.png"
import Tmart2 from "public/images/tima.png"
import Vamistyles from "public/images/vamistyles.png"
import Vamistyles2 from "public/images/vamis.png"
import Cardizaa from "public/images/cardizaa.png"
import Cardizaa2 from "public/images/cardi.png"
import Repairfind from "public/images/repairfind.png"
import Repairfind2 from "public/images/rf-2.png"

export const products = [
  {
    href: "https://falconpay.ng",
    title: "FalconPay",
    description: "A seamless payment platform built for the African market, enabling fast and secure digital transactions.",
    thumbnail: Falcon,
    images: [Falcon, Falcon2],
    stack: ["Svelte", "SvelteKit", "React Native", "Expo", "Typescript", "Tailwindcss"],
    slug: "falconpay",
    content: (
      <div>
        <p>
          FalconPay is a modern digital payment platform designed to simplify and secure financial transactions across Africa. 
          With an intuitive user interface and robust architecture, FalconPay empowers users to send, receive, and manage money effortlessly.
        </p>
        <p>
          My contribution focused on delivering a fast, responsive frontend using SvelteKit and React Native for mobile. I also ensured seamless cross-platform behavior using Expo, with a strong emphasis on TypeScript for scalability and TailwindCSS for consistent styling.
        </p>
      </div>
    ),
  },  
  {
    href: "https://repairfind.ca",
    title: "RepairFind",
    description: "A platform that connects users with trusted repair services across Canada, from plumbing to electronics.",
    thumbnail: Repairfind,
    images: [Repairfind, Repairfind2],
    stack: ["Nextjs", "React Native", "Expo", "Typescript", "Tailwindcss"],
    slug: "repairfind",
    content: (
      <div>
        <p>
          RepairFind is an on-demand service marketplace helping Canadians find reliable repair professionals near them. 
          The platform bridges the gap between users and vetted service providers across a wide range of categories.
        </p>
        <p>
          I worked on both the web and mobile experiences, building responsive components with Next.js and styling them with TailwindCSS. The mobile app, powered by React Native and Expo, delivers a smooth and consistent experience for customers on the go.
        </p>
      </div>
    ),
  },
  {
    href: "https://tmart.com.ng/",
    title: "Tmart",
    description: "A fast-growing Nigerian e-commerce platform offering a wide range of products at competitive prices.",
    thumbnail: Tmart,
    images: [Tmart, Tmart2],
    stack: ["Nextjs", "Typescript", "Tailwindcss"],
    slug: "tmart",
    content: (
      <div>
        <p>
          Tmart is an innovative e-commerce platform tailored for the Nigerian market, providing users with a seamless online shopping experience. It features a vast catalog, reliable delivery, and an intuitive checkout process.
        </p>
        <p>
          I helped build the frontend interface using Next.js and TypeScript, ensuring fast load times and dynamic routing. TailwindCSS was used to develop a clean and responsive UI that works well across devices and screen sizes.
        </p>
      </div>
    ),
  },  
  {
    href: "https://vamistyles.com",
    title: "Vamistyles",
    description: "An elegant fashion and lifestyle brand with an online storefront powered by WordPress.",
    thumbnail: Vamistyles,
    images: [Vamistyles, Vamistyles2],
    stack: ["WordPress"],
    slug: "vamistyles",
    content: (
      <div>
        <p>
          Vamistyles is a fashion brand that blends elegance and affordability. The online platform showcases a curated collection of apparel, accessories, and lifestyle pieces for a modern audience.
        </p>
        <p>
          I contributed to building and customizing the WordPress-based storefront, focusing on performance optimization and mobile responsiveness. The goal was to create a visually rich yet easy-to-navigate online experience.
        </p>
      </div>
    ),
  },  
  {
    href: "https://cardizaa.com/",
    title: "Cardizaa",
    description: "A gift card exchange platform enabling users to sell and convert gift cards quickly and securely.",
    thumbnail: Cardizaa,
    images: [Cardizaa, Cardizaa2],
    stack: ["WordPress"],
    slug: "cardizaa",
    content: (
      <div>
        <p>
          Cardizaa offers a secure and fast way to trade gift cards, helping users convert digital assets into cash or other currencies. The platform supports various popular gift cards, including iTunes, Amazon, and more.
        </p>
        <p>
          My role involved working on WordPress theming and performance improvements, ensuring a responsive layout and optimizing content delivery for fast loading and user engagement across devices.
        </p>
      </div>
    ),
  }  
];
