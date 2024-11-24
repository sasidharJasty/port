"use client";

import Image from "next/image";
import { SlideIn, TextReveal, Transition } from "./ui";
import { About } from "@/utils/interfaces";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { PageLoad } from "./ui/page-load";

export const Hero = ({ about }: { about: About }) => {
  const [hideLoader, setHideLoader] = useState(true);

  return (
    <section className="h-dvh w-dvw overflow-hidden relative">
      <span className="blob size-1/2 absolute top-20 left-0 blur-[100px]" />
      {hideLoader ? (
        <PageLoad hideLoader={hideLoader} setHideLoader={setHideLoader} />
      ) : (
        <div className="relative h-full w-full">
          <div className="flex items-center justify-center flex-col h-full pb-10">
            <Transition>
              <Image
                src="https://i.ibb.co/0GrKd9n/Software-1.png"
                width={200}
                height={200}
                alt="Varshith's Image"
                className="rounded-full size-28 object-cover"
              />
            </Transition>
            <div className="py-6 flex items-center flex-col">
              <h2 className="md:text-7xl text-4xl font-bold overflow-hidden">
                  <SlideIn>Hello! I&apos;m Varshith</SlideIn>
              </h2>
              <h1 className="md:text-7xl text-3xl overflow-hidden">
                <SlideIn>Software Developer</SlideIn>
              </h1>
            </div>
            <Transition viewport={{ once: true }} className="w-full">
              <p className="opacity-70 md:text-xl py-4 w-10/12 md:w-2/3 mx-auto flex flex-wrap justify-center gap-2">
                <span>I&apos;m a high school student passionate about computer science and entrepreneurship.</span>
              </p>
            </Transition>
            <Transition viewport={{ once: true }}>
              <Link
                href={"#contact"}
                className="px-5 py-3 mt-4 rounded-full border border-white/50 flex items-center gap-4 group"
              >
                <TextReveal>Contact Me</TextReveal>
                <ArrowRight
                  size={20}
                  className="group-hover:rotate-90 transition-transform"
                />
              </Link>
            </Transition>
          </div>
        </div>
      )}
    </section>
  );
};
