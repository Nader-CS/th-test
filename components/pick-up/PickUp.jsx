import Image from "next/image";
import classes from "./PickUp.module.css";
const PickUp = () => {
  return (
    <section className="py-7">
      <article className="text-center md:flex md:flex-wrap md:items-center container mx-auto">
        <div className="md:w-[48%]">
          <h3 className={`${classes["sofia-font-block"]} text-[25px]`}>
            WANT IT PICKED?
          </h3>
          <p
            className={`text-[#C8102E] ${classes["sofia-font-block"]} text-[30px]`}
          >
            Download the APP
          </p>
          <p
            className={`${classes["sofia-font"]} text-[18px] w-[65%] md:w-[80%] lg:w-[65%] mx-auto`}
          >
            Earn points and redeem rewards. Order ahead and pay. And pick it on
            your way!
          </p>
          <div className="md:flex md:justify-center">
            <div>
              <Image
                src="/assets/images/home/download/app_store.png"
                className="w-[10rem] md:w-[15rem] inline-block mx-auto "
                width="200"
                height="300"
              />
            </div>
            <div>
              <Image
                src="/assets/images/home/download/google_play.png"
                className="w-[10rem] md:w-[15rem] inline-block mx-auto "
                width="200"
                height="300"
              />
            </div>
          </div>
        </div>
        <div className="md:w-[48%] md:mb-[4rem]">
          <div className="w-[100%]">
            <Image
              src="/assets/images/order/aggregator/pickup_download.png"
              width="800"
              height="500"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default PickUp;
