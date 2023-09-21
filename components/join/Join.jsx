"use client";
import Image from "next/image";
import classes from "./Join.module.css";
import Input from "../ui/input/Input";
import TextArea from "../ui/text-area/TextArea";
import Label from "../ui/label/Label";
import Button from "../ui/button/Button";
const Join = () => {
  return (
    <section className="py-6">
      <article className="container mx-auto text-center">
        <div className="mb-5">
          <h1
            className={`${classes["sofia-font-block"]} text-[#3B2222] text-[20px]`}
          >
            Join our Team
          </h1>
          <p className={`${classes["sofia-font"]} text-[15px]`}>
            We love to hear from you
          </p>
        </div>
        <div className="lg:flex lg:flex-wrap gap-7">
          <div className="mx-3 md:mx-0 hidden lg:block lg:w-[45%]  ">
            <Image
              src="/assets/images/join-us/join-our-team.png"
              width="650"
              height="500"
              className="lg:h-[100%]"
            />
          </div>
          <div className="lg:w-[50%]">
            <form>
              <div className="lg:flex lg:gap-3">
                <div className="lg:w-[50%]">
                  <Input
                    name="First Name"
                    className={`h-[59px] pt-[25px] pb-[22px] px-[27px] bg-[#F8F5EF] rounded-[13px] placeholder-[#000000] outline-none ${classes["sofia-font"]} lg:w-[100%] w-[80%]  inline-block mb-5`}
                    required={true}
                    type="text"
                  />
                </div>
                <div className="lg:w-[50%]">
                  <Input
                    name="Last Name"
                    className={`h-[59px] pt-[25px] pb-[22px] px-[27px] bg-[#F8F5EF] rounded-[13px] placeholder-[#000000] outline-none ${classes["sofia-font"]} lg:w-[100%] w-[80%] inline-block mb-5`}
                    required={true}
                    type="text"
                  />
                </div>
              </div>
              <Input
                name="Email"
                className={`h-[59px] pt-[25px] pb-[22px] px-[27px] bg-[#F8F5EF] rounded-[13px] placeholder-[#000000] outline-none ${classes["sofia-font"]} lg:w-[100%] w-[80%]  inline-block mb-5`}
                required={true}
                type="email"
              />
              <Input
                name="Subject"
                className={`h-[59px] pt-[25px] pb-[22px] px-[27px] bg-[#F8F5EF] rounded-[13px] placeholder-[#000000] outline-none ${classes["sofia-font"]} lg:w-[100%] w-[80%]  inline-block mb-5`}
                type="text"
              />
              <TextArea
                placeholder="Message"
                required={true}
                cols={10}
                rows={3}
                className={` pt-[25px] pb-[22px] px-[27px]  bg-[#F8F5EF] rounded-[13px] placeholder-[#000000] outline-none ${classes["sofia-font"]} lg:w-[100%] w-[80%]  inline-block mb-5`}
              />
              <Label
                name="CV/Resume *"
                className={`${classes["sofia-font"]}`}
              />
              <div
                className={`${classes.container} flex flex-wrap items-baseline justify-center my-4 gap-5`}
              >
                <input
                  type="file"
                  className={`${classes.myFileInput} hidden`}
                  id="myFileInput"
                />
                <input
                  type="button"
                  className={`${classes.button} bg-[#F8F5EF] px-10 py-3 rounded-2xl ${classes["sofia-font"]} cursor-pointer`}
                  value="Choose file"
                  onClick={() => {
                    document.getElementById("myFileInput").click();
                  }}
                />
                <label
                  htmlFor="myFileInput"
                  className={`${classes.label} ${classes["sofia-font"]}`}
                >
                  No file selected
                </label>
              </div>
              <Button
                type="button"
                name="Submit"
                className={`${classes["sofia-font"]} text-[white] w-[400px] h-[52px]`}
              />
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Join;
