"use client";
import { useState } from "react";
import classes from "./PackageInfo.module.css";
import PackageItem from "./package-item/PackageItem";
import Image from "next/image";
const PackageInfo = () => {
  const [timsPackage, setTimsPackage] = useState("original"); //[original , social , gourmet]
  return (
    <section className="bg-[#3B2222] text-center" id="package-info">
      <article className="container mx-auto py-5">
        <div className="lg:text-left px-[3.5rem]">
          <h1
            className={`${classes["sofia-font-block"]} text-[#F8F5EF] text-[28px]`}
          >
            Choose your
          </h1>
          <p
            className={`${classes["sofia-font-block"]} text-[#C8102E]  text-[44px]`}
          >
            Package
          </p>
        </div>
        <div className="lg:flex">
          <div className="flex flex-col sm:flex-row justify-center gap-6 lg:flex-col lg:w-[20%]">
            <div>
              <div className="flex items-baseline justify-center gap-2">
                <Image
                  src="/assets/images/package/ladning/tims.png"
                  width="60"
                  height="50"
                />
                <button
                  className={`${
                    timsPackage == "original" ? "text-[#F8F5EF]" : "text-[grey]"
                  } ${classes["sofia-font-block"]}`}
                  onClick={() => {
                    setTimsPackage("original");
                  }}
                >
                  Original
                </button>
              </div>
            </div>
            <div>
              <div className="flex items-baseline justify-center gap-2">
                <Image
                  src="/assets/images/package/ladning/tims.png"
                  width="60"
                  height="50"
                />
                <button
                  className={`${
                    timsPackage == "social" ? "text-[#F8F5EF]" : "text-[grey]"
                  } ${classes["sofia-font-block"]}`}
                  onClick={() => {
                    setTimsPackage("social");
                  }}
                >
                  SOCIAL
                </button>
              </div>
            </div>
            <div>
              <div className="flex items-baseline justify-center gap-2">
                <Image
                  src="/assets/images/package/ladning/tims.png"
                  width="60"
                  height="50"
                />
                <button
                  className={`${
                    timsPackage == "gourmet" ? "text-[#F8F5EF]" : "text-[grey]"
                  } ${classes["sofia-font-block"]}`}
                  onClick={() => {
                    setTimsPackage("gourmet");
                  }}
                >
                  GOURMET
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-[80%]">
            <PackageItem type={timsPackage} />
          </div>
        </div>
      </article>
    </section>
  );
};

export default PackageInfo;
