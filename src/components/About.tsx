"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import AbtOne from '../../public/images/abt-1.jpg'
import AbtTwo from '../../public/images/abt-2.jpg'
import AbtThree from '../../public/images/abt-3.jpg'
import { motion } from "framer-motion";

export default function About() {
  const images = [
    AbtOne, AbtTwo, AbtThree
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className="mt-4">
          Hey there, I&apos;m Muhsin Abdulrasheed – a frontend web and mobile app developer with a deep passion for creating smooth, responsive, and impactful digital experiences. Welcome to my little space on the web!
        </Paragraph>

        <Paragraph className="mt-4">
          From my very first lines of code, I was drawn to the creative potential of building for the web and mobile. Today, I specialize in tools like React, Next.js, TypeScript, Expo, React Native, Svelte, and SvelteKit – crafting user interfaces that feel intuitive, perform beautifully, and look polished across platforms.
        </Paragraph>

        <Paragraph className="mt-4">
          I see frontend development as more than just code – it&apos;s the art of shaping how people interact with technology. Every project is an opportunity to combine logic with creativity, transforming ideas into experiences that are both usable and delightful.
        </Paragraph>

        <Paragraph className="mt-4">
          But beyond the technical side, I&apos;m someone who genuinely loves great design and thoughtful interaction. I believe the best products don&apos;t just work – they feel right. That&apos;s why I pay close attention to detail, aiming to build apps and websites that are as elegant as they are effective.
        </Paragraph>

        <Paragraph className="mt-4">
          This portfolio is where I share the journey – the projects I&apos;ve built, the lessons I&apos;ve learned, and the things I&apos;m still exploring. Whether you&apos;re a fellow developer, a designer, or someone curious about what I do, I&apos;m glad you&apos;re here.
        </Paragraph>

        <Paragraph className="mt-4">
          Let&apos;s build, learn, and create together. Thanks for stopping by – and welcome to my world of code, craft, and creativity.
        </Paragraph>
      </div>

{/* 
      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there, I&apos;m John Doe - a passionate developer, avid writer,
          and a connoisseur of awesome design. Welcome to my corner of the
          digital world!
        </Paragraph>
        <Paragraph className=" mt-4">
          Since the early days of my journey, I&apos;ve been captivated by the
          art of crafting exceptional digital experiences. As a developer, I
          thrive on turning lines of code into functional and elegant solutions.
          My goal is to not just create software, but to build digital marvels
          that seamlessly merge form and function.
        </Paragraph>

        <Paragraph className=" mt-4">
          But my journey doesn&apos;t stop at coding. With a heart full of words
          and a mind brimming with ideas, I&apos;ve ventured into the realm of
          writing. From tech articles that unravel complex concepts to creative
          tales that ignite the imagination, I weave words to inform, entertain,
          and inspire.
        </Paragraph>
        <Paragraph className=" mt-4">
          What sets me apart is my unwavering appreciation for design. I believe
          that aesthetics and usability go hand in hand. My eye for awesome
          design ensures that every project I undertake not only works
          flawlessly under the hood but also looks stunning on the surface.
        </Paragraph>
        <Paragraph className=" mt-4">
          Through this website, I aim to share my insights, experiences, and
          creations with you. Whether you&apos;re a fellow developer seeking
          solutions, a fellow writer in search of inspiration, or simply someone
          who appreciates the finer aspects of design, there&apos;s something
          here for you.
        </Paragraph>
        <Paragraph className=" mt-4">
          Join me on this journey of bytes and narratives, logic and creativity,
          code and prose. Together, we can explore the boundless possibilities
          of technology and storytelling, all while reveling in the sheer beauty
          of thoughtful design.
        </Paragraph>
        <Paragraph className=" mt-4">
          Thank you for being here, and I can&apos;t wait to embark on this
          adventure with you.
        </Paragraph>
      </div> */}
    </div>
  );
}
