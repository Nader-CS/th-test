"use client";
import Image from "next/image";
import classes from "./PackageLanding.module.css";
import Link from "next/link";
import { useParams } from "next/navigation";
const PackageLanding = () => {
  const params = useParams();
  const locale = params.locale;
  console.log(locale == "en");
  return (
    <section className="bg-[#FFFFFF] pb-[5rem]">
      <article className="container mx-auto md:flex md:flex-wrap md:items-center">
        {/* first column */}
        <div className=" relative  md:w-[45%] md:flex md:flex-col md:flex-wrap px-3 md:px-0">
          <div>
            <div
              className={`${
                locale == "en"
                  ? "translate-x-[20%] translate-y-[30%]"
                  : "translate-x-[-30%] translate-y-[30%]"
              } max-w-fit`}
            >
              <Image
                src="/assets/images/package/ladning/package-landing.png"
                width="300"
                height="150"
              />
            </div>
          </div>
          <div>
            <div className="">
              <Image
                src="/assets/images/package/ladning/tims.png"
                width="100"
                height="60"
              />
              <h1
                className={`text-[54px] bold ${classes["sofia-font-block"]} text-[#3B2222]`}
              >
                TOGETHER
              </h1>
              <div>
                <h3
                  className={`${classes["sofia-font-block"]} text-[#3B2222] `}
                >
                  We Cater now for
                </h3>
                <p className="text-[20px]">
                  Corporate Meetings | Office Celebrations Special Occasions I
                  Birthday Parties
                </p>
                <Link
                  href="#package-info"
                  className={`${classes["sofia-font-block"]} text-[#3B2222] `}
                  style={{
                    borderBottom: "0.1rem solid #3B2222",
                  }}
                >
                  Choose your package
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* end of first column */}
        {/* second column */}
        <div className="m-3 md:w-[50%] md:mt-[10rem] lg:h-[25rem]">
          <video
            autoPlay
            loop
            muted
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
              borderRadius: "6px",
              pointerEvents: "none",
            }}
          >
            <source src="/assets/videos/landing/coffe.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* end of second column */}
      </article>
    </section>
  );
};

export default PackageLanding;
