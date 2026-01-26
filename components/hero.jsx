"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const HeroSection = () => {
    const imageRef = useRef(null);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl 
          gradient-title">
            Your AI Career Coach for
            <br />
            Professional Success
          </h1>
          <p>
            Advance your career with personalized guidance, interview prep and
            AI-powered tools for job success
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button className="px-8 ">
              Get Started
            </Button>
          </Link>
          <Link href="https://www.youtube.com/roadsidecoder">
            <Button className="px-8" variant="outline">
              Get Started
            </Button>
          </Link>
        </div>

        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src={"/banner.jpg"}
              width={1200}
              height={720}
              alt="Banner Elevai"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default HeroSection;