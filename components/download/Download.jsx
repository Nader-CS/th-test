import { Fragment } from "react";
import Card from "../ui/card/Card";
import classes from "./Download.module.css";

const Download = (props) => {
  return (
    <section
      className={`bg-white ${
        props.reflect ? "py-[2rem]" : "py-[10rem]"
      } px-3 text-[#F8F5EF]`}
    >
      <article className="container mx-auto text-center lg:text-left ">
        <Card
          className={`px-5 md:flex md:flex-wrap py-[2rem] my-6 ${
            props.reflect ? "lg:py-[4rem]" : "lg:py-[6rem]"
          }`}
          style={props.style}
        >
          {props.reflect ? (
            <Fragment>
              <div className="md:basis-[50%]">
                <div className="my-4">
                  <p
                    className={`${classes.text} text-xl lg:text-4xl  `}
                    style={
                      props.heading.heading1.style
                        ? props.heading.heading1.style
                        : null
                    }
                  >
                    {props.heading.heading1.text}
                  </p>
                  <p
                    className={`${classes["text-bold"]} text-2xl lg:text-4xl `}
                    style={
                      props.heading.heading2.style
                        ? props.heading.heading2.style
                        : null
                    }
                  >
                    {props.heading.heading2.text}
                  </p>
                </div>
                <div>
                  <p
                    className={`${classes.text} text-sm `}
                    style={
                      props.subtext.subtext1.style
                        ? props.subtext.subtext1.style
                        : null
                    }
                  >
                    {props.subtext.subtext1.text}
                  </p>
                  {props.subtext.subtext1.specialText && (
                    <p style={props.subtext.subtext1.specialText.style}>
                      {props.subtext.subtext1.specialText.text}
                    </p>
                  )}
                </div>
                <div className="md:flex md:justify-center lg:justify-start md:items-center">
                  {props?.download?.text && (
                    <p style={props.download.style}>{props.download.text}</p>
                  )}
                  <div>
                    <img
                      src="./assets/images/home/download/app_store.png"
                      className="w-[50%] inline-block mx-auto md:w-[100%] md:h-[65px]"
                    />
                  </div>
                  <div>
                    <img
                      src="./assets/images/home/download/google_play.png"
                      className="w-[50%] inline-block mx-auto md:w-[100%] md:h-[65px]"
                    />
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:basis-[50%] relative">
                <div className="absolute right-0 md:top-0 lg:top-[-2rem] xl:top-[-7rem] ">
                  <img src={`${props.image.url}`} className="w-[100%]" />
                </div>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className="hidden md:block md:basis-[50%] relative">
                <div className="absolute left-[20%] top-[-8rem] xl:top-[-12rem] w-[70%] lg:w-[50%]">
                  <img src={`${props.imageUrl}`} className="w-full" />
                </div>
              </div>
              <div className="md:basis-[50%]">
                <div className="my-4">
                  <p
                    className={`${classes.text} text-xl lg:text-4xl  `}
                    style={
                      props.heading.heading1.style
                        ? props.heading.heading1.style
                        : null
                    }
                  >
                    {props.heading.heading1.text}
                  </p>
                  <p
                    className={`${classes["text-bold"]} text-2xl lg:text-4xl `}
                    style={
                      props.heading.heading2.style
                        ? props.heading.heading2.style
                        : null
                    }
                  >
                    {props.heading.heading2.text}
                  </p>
                </div>
                <div>
                  <p
                    className={`${classes.text} text-sm `}
                    style={
                      props.subtext.subtext1.style
                        ? props.subtext.subtext1.style
                        : null
                    }
                  >
                    {props.subtext.subtext1.text}
                  </p>
                  {props.subtext.subtext1.specialText && (
                    <p style={props.subtext.subtext1.specialText.style}>
                      {props.subtext.subtext1.specialText.text}
                    </p>
                  )}
                </div>
                <div className="md:flex md:justify-center lg:justify-start md:items-center">
                  {props?.download?.text && (
                    <p style={props.download.style}>{props.download.text}</p>
                  )}
                  <div>
                    <img
                      src="./assets/images/home/download/app_store.png"
                      className="w-[50%] inline-block mx-auto md:w-[100%] md:h-[65px]"
                    />
                  </div>
                  <div>
                    <img
                      src="./assets/images/home/download/google_play.png"
                      className="w-[50%] inline-block mx-auto md:w-[100%] md:h-[65px]"
                    />
                  </div>
                </div>
              </div>
            </Fragment>
          )}
        </Card>
      </article>
    </section>
  );
};

export default Download;
