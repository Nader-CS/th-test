"use client";
import { useEffect, useState } from "react";
import Dropdown from "../ui/dropdown/Dropdown";
import classes from "./PreOrder.module.css";
import Image from "next/image";
import { useParams } from "next/navigation";
const countaries = ["United Arab Emirates", "Bahrain", "Qatar", "Oman"];
const packages = {
  "united arab emirates": "./assets/documents/packages/package_uae.pdf",
  bahrain: "./assets/documents/packages/package_bahrain.pdf",
  kuwait: "./assets/documents/packages/package_kuwait.pdf",
  oman: "./assets/documents/packages/package_oman.pdf",
  qatar: "./assets/documents/packages/package_qatar.pdf",
};
const PreOrder = () => {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" && window.innerWidth
  );
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [countary, setCountary] = useState(countaries[0]);
  const [packageUrl, setPackageUrl] = useState(packages[0]);
  useEffect(() => {
    let count = countary.toLowerCase();
    setPackageUrl(packages[count]);
  }, [countary]);

  const params = useParams();
  const locale = params.locale;

  return (
    <section className="bg-[white] my-10">
      <div className="container mx-auto text-center">
        <div>
          <h1
            className={`${classes["sofia-font-block"]} text-[2rem] text-[#3B2222]`}
          >
            Pre-Order Now
          </h1>
        </div>
        <div
          className={`w-[85%] mx-auto text-[#A82730] ${classes["sofia-font-block"]}`}
        >
          <p>Do you have a birthday or an event to plan?</p>
          <p>
            Click below to view the price and contact us for further
            information.
          </p>
        </div>
      </div>
      <div className="bg-[#F8F5EF] mt-8 p-5">
        <div className="container mx-auto text-center lg:flex lg:flex-wrap lg:items-center lg:justify-between xl:px-10">
          <div className="lg:flex lg:items-center gap-5">
            <h3 className={`${classes["sofia-font"]} mb-3 `}>
              Please choose your region
            </h3>
            <Dropdown
              name="United Arab Emirates"
              options={countaries}
              isLanguage={false}
              cheverOnDownIcon={true}
              setChoice={setCountary}
              className="bg-[#F8F5EF] w-[100%]  top-[100%] left-[0]"
              mainButoonStyle="bg-white px-2 py-3 rounded-[2rem] w-[80%] mb-3 md:w-[300px]"
              textAlign={`${locale == "en" ? "text-left" : "text-right"}`}
            />
          </div>
          <div>
            {screenWidth >= 992 ? (
              <div className="w-[0.2rem] h-[60px] bg-[#3B2222]"> </div>
            ) : (
              <hr className="h-[0.1rem] my-2  w-[90%] mx-auto bg-[#3B2222]" />
            )}
          </div>
          <div className={`${classes["sofia-font-block"]} text-[#A82730]`}>
            <p>(971) 56 404 192</p>
            <p>timscateringuae@timhortonsme.com</p>
          </div>
          <div>
            <a href={packageUrl} target="_blank" className="inline-block">
              <Image
                src="/assets/images/package/pre-order/get_pdf.png"
                width="80"
                height="80"
                alt="get packages"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreOrder;
