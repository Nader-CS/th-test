"use client";
import { useParams } from "next/navigation";
import classes from "./Vision.module.css";
import Image from "next/image";

const Vision = () => {
  const params = useParams();
  const locale = params.locale;

  return (
    <section className={` ${classes["sofia-font"]} py-[3rem]`}>
      <article className="lg:flex lg:gap-[5rem]">
        <div className=" py-5 md:py-0 lg:w-[60%] lg:flex lg:flex-col lg:justify-center lg:items-center text-[15px]">
          <h1
            className={`text-[#3B2222] text-[18px] ${
              classes["sofia-font-block"]
            } text-center mb-5 lg:w-[65%] ${
              locale === "en" ? "lg:text-left" : "lg:text-right"
            }`}
          >
            Our Vision
          </h1>
          <p className="mx-3 lg:w-[66%] lg:mx-0 leading-5">
            Tim Hortons strongly believes in delivering superior quality
            products and services for its customers and communities through
            leadership, innovation and partnerships.
          </p>
          <p p className="mx-3 lg:w-[66%] lg:mx-0 my-3 lg:leading-5">
            The restaurant chain is known for its freshly brewed coffee and
            baked food, Its tagline…
          </p>
          <p p className="mx-3 lg:w-[66%] lg:mx-0 lg:leading-5">
            “Always Fresh, Always Delicious” rightly explains the brand policy
          </p>
        </div>
        <div className="hidden lg:block lg:w-[60%] lg:h-[312px] ">
          <Image
            src="/assets/images/about/vision.png"
            width={800}
            height={500}
            className={`h-[312px] w-[100%] ${
              locale == "en" ? "rounded-r-lg" : "rounded-l-lg"
            }`}
            style={{ objectFit: "fill" }}
          />
        </div>
      </article>
    </section>
  );
};

export default Vision;
