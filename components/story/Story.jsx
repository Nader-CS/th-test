"use client";

import Image from "next/image";
import classes from "./Story.module.css";
import { useParams } from "next/navigation";

const Story = () => {
  const params = useParams();
  const locale = params.locale;

  return (
    <section className={` ${classes["sofia-font"]} py-[3rem]`}>
      <article className="lg:flex lg:gap-[5rem]">
        {/* <div className="hidden lg:block lg:w-[50%]">
          <Image
            src="/assets/images/about/story.png"
            width={500}
            height={200}
            className={`h-[100%] w-[100%] ${
              locale == "en" ? "rounded-r-lg" : "rounded-l-lg"
            } `}
          />
        </div> */}
        <div className="hidden lg:block lg:w-[60%] lg:h-[312px] ">
          <Image
            src="/assets/images/about/story.png"
            width={800}
            height={500}
            className={`h-[312px] w-[100%] ${
              locale == "en" ? "rounded-r-lg" : "rounded-l-lg"
            }`}
            style={{ objectFit: "fill" }}
          />
        </div>
        <div className=" py-5 md:py-0 lg:w-[60%] lg:flex lg:flex-col lg:justify-center text-[15px]">
          <h1
            className={`text-[#3B2222] text-[18px] ${
              classes["sofia-font-block"]
            } text-center mb-5 lg:w-[65%] ${
              locale === "en" ? "lg:text-left" : "lg:text-right"
            }`}
          >
            Our Story
          </h1>
          <p className="mx-3 lg:w-[71%] lg:mx-0 leading-5">
            Over the years, Tim Hortons has captured the hearts and taste buds
            of not only Canadians, but people all over the world, with classics
            like our Original Blend coffee and the signature Iced Capp®, along
            with a variety of inspired donuts including our ever popular
            Timbits®.
          </p>
          <p p className="mx-3 lg:w-[71%] lg:mx-0 my-3 lg:leading-5">
            In 2011 the iconic Canadian Tim Hortons brand made its way to the
            Middle East, opening the first location in Dubai.
          </p>
          <p p className="mx-3 lg:w-[70%] lg:mx-0 lg:leading-5">
            Guests can now enjoy our premium coffees, delicious baked goods,
            made to order sandwiches and wraps, and many other beverages and
            food products at locations throughout the United Arab Emirates,
            Saudi Arabia, Qatar, Oman, Kuwait and Bahrain. We can’t wait to meet
            you!
          </p>
        </div>
      </article>
    </section>
  );
};

export default Story;
