"use client";
import Image from "next/image";
import classes from "./Contact.module.css";
import Input from "../ui/input/Input";
import TextArea from "../ui/text-area/TextArea";
import Label from "../ui/label/Label";
import Button from "../ui/button/Button";

const Contact = () => {
  return (
    <section className="py-6">
      <article className="container mx-auto text-center">
        <div className="mb-5">
          <h1
            className={`${classes["sofia-font-block"]} text-[#3B2222] text-[20px]`}
          >
            Contact Us Today
          </h1>
          <p className={`${classes["sofia-font"]} text-[15px]`}>
            We love to hear from you our valued customer
          </p>
        </div>
        <div className="lg:flex lg:flex-wrap gap-7">
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

              <Button
                type="submit"
                name="Submit"
                className={`${classes["sofia-font"]} text-[white] w-[400px] h-[52px] lg:w-[100%]`}
              />
            </form>
          </div>
          <div className="mx-3 md:mx-0 hidden lg:block lg:w-[45%]  ">
            <Image
              src="/assets/images/contact-us/contact-us.png"
              width="650"
              height="500"
              className="lg:h-[100%]"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contact;
