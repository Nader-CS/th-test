"use client";

import Image from "next/image";
import classes from "./About.module.css";
import { useParams } from "next/navigation";
const About = () => {
  const params = useParams();
  const locale = params.locale;
  return (
    <section className={` ${classes["sofia-font"]} `}>
      <article className="lg:flex">
        <div className=" bg-[#F8F5EF]  lg:w-[40%] lg:flex lg:flex-col lg:justify-center lg:items-center py-5 xl:py-0">
          <h1
            className={`text-[#3B2222] text-[22px] ${
              classes["sofia-font-block"]
            } text-center mb-5 lg:w-[65%] ${
              locale === "en" ? "lg:text-left" : "lg:text-right"
            }`}
          >
            About Us
          </h1>
          <p className="mx-3 lg:w-[65%] lg:mx-0">
            As part of the global expansion plan, Tim Hortons opened its first
            Café & Baked Shop in Dubai in September 2011, marking the first
            international step for this loved Canadian brand. The concept found
            immediate success, quickly expanding its network across the GCC. In
            the GCC, Tim Hortons is proud to partner operating through a master
            franchise agreement with The Apparel Group, a leading F&B player,
            head-quartered in Jebel Ali, Dubai.
          </p>
        </div>
        <div className="hidden lg:block lg:w-[60%]">
          <Image
            src="/assets/images/about/about.png"
            width={800}
            height={500}
            className="h-[100%] w-[100%]"
            style={{ objectFit: "fill" }}
          />
        </div>
      </article>
    </section>
  );
};

export default About;
