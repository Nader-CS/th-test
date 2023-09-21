"use client";
import { useEffect, useState } from "react";
import classes from "../PackageInfo.module.css";

const packages = [
  {
    type: "original",
    advantages: "“TAKE TEN + DONUTS + TIMBITS”",
    subPackage: [
      {
        heading: "FOR 10 PEOPLE",
        content:
          "12 Assorted Classic Donuts 1 Take Ten “Brewed Coffee or French Vanilla or Hot Chocolate” 12 Timbits",
      },
      {
        heading: "FOR 20 PEOPLE",
        content:
          "24 Assorted Classic Donuts 2 Take Ten “Brewed Coffee or French Vanilla or Hot Chocolate” 24 Timbits",
      },
      {
        heading: "FOR 40 PEOPLE",
        content:
          "36 Assorted Classic Donuts 4 Take Ten “Brewed Coffee or French Vanilla or Hot Chocolate” 46 Timbits",
      },
    ],
  },
  {
    type: "social",
    advantages: "“TAKE TEN + DONUTS + TIMBITS + SANDWICHES”",
    subPackage: [
      {
        heading: "FOR 10 PEOPLE",
        content:
          "12 Assorted Classic Donuts 1 Take Ten “Brewed Coffee or French Vanilla or Hot Chocolate” 12 Mixed Sandwiches “Wraps, Panini, Croissant” 12 Timbits",
      },
      {
        heading: "FOR 20 PEOPLE",
        content:
          "24 Assorted Classic Donuts 2 Take Ten “Brewed Coffee or French Vanilla or Hot Chocolate” 24 Mixed Sandwiches “Wraps, Panini, Croissant” 24 Timbits",
      },
      {
        heading: "FOR 40 PEOPLE",
        content:
          "36 Assorted Classic Donuts 4 Take Ten “Brewed Coffee or French Vanilla or Hot Chocolate” 46 Mixed Sandwiches “Wraps, Panini, Croissant” 46 Timbits",
      },
    ],
  },
  {
    type: "gourmet",
    advantages: "“TAKE TEN + DONUTS + TIMBITS + SANDWICHES”",
    subPackage: [
      {
        heading: "FOR 10 PEOPLE",
        content:
          "12 Assorted Classic Donuts 1 Take Ten “Brewed Coffee or French Vanilla or Hot Chocolate” 12 Timbits",
      },
      {
        heading: "FOR 20 PEOPLE",
        content:
          "24 Assorted Classic Donuts 2 Take Ten “Brewed Coffee or French Vanilla or Hot Chocolate” 24 Timbits",
      },
      {
        heading: "FOR 40 PEOPLE",
        content:
          "36 Assorted Classic Donuts 4 Take Ten “Brewed Coffee or French Vanilla or Hot Chocolate” 46 Timbits",
      },
    ],
  },
];

const PackageItem = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const filtered_packages = packages.filter(
    (package_item) => package_item.type === props.type
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

  console.log(screenWidth);
  return (
    <div className="text-[#F8F5EF]">
      <div className={`${classes["sofia-font-block"]} mt-4`}>
        <h1>{filtered_packages[0].advantages}</h1>
      </div>
      <div className="lg:flex lg:gap-4 lg:pb-10">
        {filtered_packages[0].subPackage.map((subPackage, idx) => {
          return (
            <div key={idx} className="mt-5 ">
              <div className="lg:flex gap-2">
                <div className="content">
                  <h1 className={`${classes["sofia-font-block"]}`}>
                    {subPackage.heading}
                  </h1>
                  <div>
                    <p>{subPackage.content}</p>
                  </div>
                </div>
                {idx ==
                filtered_packages[0].subPackage.length -
                  1 ? null : screenWidth >= 1000 ? (
                  <div className="w-[0.3rem] bg-white"></div>
                ) : (
                  <hr className="h-[0.1rem] my-2  w-[90%] mx-auto lg:w-[30%] lg:h-[100%] lg:rotate-90" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PackageItem;
