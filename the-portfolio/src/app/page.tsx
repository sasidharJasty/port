import Header from "@/components/header";
import Projects from "@/components/projects";

import { ParallaxText, TextReveal, Transition } from "@/components/ui";

import { UserObject } from "@/utils/interfaces";
import Experience from "@/components/experience";
import { ContactUs } from "@/components/contact-us";
import Link from "next/link";
import { Hero } from "@/components/hero";

export default async function Home() {
  const res = await fetch(
    "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
  );

  const { user } = (await res.json()) as UserObject;
  if (!user) return null;
  const { about, testimonials, services, social_handles, timeline, email } =
    user;

  const skills = [
    { name: "Python", sequence: 1, enabled: true },
    { name: "React", sequence: 2, enabled: true },
    { name: "Innovation", sequence: 3, enabled: true },
    { name: "Teamwork", sequence: 4, enabled: true },
    { name: "HTML", sequence: 5, enabled: true },
    { name: "CSS", sequence: 6, enabled: true },
    { name: "Next.JS", sequence: 7, enabled: true },
    { name: "Typescript", sequence: 8, enabled: true },
    { name: "Entrepreneurship", sequence: 9, enabled: true },
  ];

  const projects = [
    {
      _id: "1",
      title: "Personal Portfolio",
      image: { url: "/portfolio.png" },
      enabled: true,
    },
    {
      _id: "2",
      title: "E-commerce Platform",
      image: { url: "/ecommerce.png" },
      enabled: true,
    },
    {
      _id: "3",
      title: "Chat Application",
      image: { url: "/chat-app.png" },
      enabled: true,
    },
    {
      _id: "4",
      title: "AI Image Generator",
      image: { url: "/ai-generator.png" },
      enabled: false, // Disabled project example
    },
  ];

  return (
    <main className="relative">
      <Transition className="fixed md:top-8 top-6 md:left-8 left-6 z-30 hover:text-white/80 text-white/40">
        <Link href={"/"}>
          <TextReveal className="font-semibold ">Varshith Gude</TextReveal>
        </Link>
      </Transition>
      <Header social={social_handles} />
      <Hero about={about} />

      <Experience timeline={timeline} />
      {/* ===SKILLS SECTION=== */}
      <section id="skills">
        <ParallaxText baseVelocity={-5}>
          {skills
            .sort((a, b) => a.sequence - b.sequence)
            .map((skill) =>
              skill.enabled ? (
                <span
                  key={skill._id}
                  className="md:text-7xl text-xl font-semibold uppercase text-white/30"
                >
                  {skill.name} •
                </span>
              ) : null
            )}
        </ParallaxText>
        <ParallaxText baseVelocity={5}>
          {skills
            .sort((a, b) => a.sequence - b.sequence)
            .map((skill) =>
              skill.enabled ? (
                <span
                  key={skill._id}
                  className="md:text-7xl text-xl font-semibold uppercase text-white/30"
                >
                  {skill.name} •
                </span>
              ) : null
            )}
        </ParallaxText>
        <ParallaxText baseVelocity={-5}>
          {skills
            .sort((a, b) => a.sequence - b.sequence)
            .map((skill) =>
              skill.enabled ? (
                <span
                  key={skill._id}
                  className="md:text-7xl text-xl font-semibold uppercase text-white/30"
                >
                  {skill.name} •
                </span>
              ) : null
            )}
        </ParallaxText>
      </section>
      {/* ===SERVICES SECTION=== */}
      {/* ===PROJECTS SECTION=== */}
      <Projects data={projects} />

      {/* ===CONTACT US=== */}
      <div
        className="rounded-t-[2rem] md:rounded-t-[3rem] overflow-hidden"
        id="contact"
      >
        <ContactUs email={email} about={about} social_handle={social_handles} />
      </div>
    </main>
  );
}
