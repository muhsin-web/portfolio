import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Muhsin</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a frontend developer that loves{" "}
        I&apos;m a <Highlight>Frontend Software Engineer</Highlight> passionate about building scalable, high-performance web and mobile apps that solve real-world problems and impact millions of users. With 4+ years of experience, 
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;ve led the development of fintech and e-commerce platforms, designed intuitive user interfaces, and contributed to open-source projects. My focus is on crafting fast, accessible, and visually appealing applications that deliver seamless user experiences.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
