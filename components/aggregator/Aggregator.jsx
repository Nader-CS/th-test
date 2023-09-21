import Image from "next/image";
import classes from "./Aggregator.module.css";

const Aggregator = (props) => {
  return (
    <section>
      <article className="container mx-auto">
        {!props.isValidCountary && (
          <div className="text-center h-[80vh] flex flex-col justify-center items-center gap-10">
            <div>
              <Image
                src="/assets/images/order/aggregator/bag.svg"
                width={100}
                height={100}
                alt="bag"
                className="inline-block"
              />
            </div>
            <div>
              <h1
                className={`${classes["sofia-font-block"]} text-[#3B2222] text-[30px]`}
              >
                Choose your region
              </h1>
              <p
                className={`${classes["sofia-font"]} w-[70%] sm:w-[60%] mx-auto text-[20px] `}
              >
                Let us know where you are so we can recommend our aggregators
                for you
              </p>
            </div>
          </div>
        )}
        {props.isValidCountary && (
          <div className="min-h-[80vh] flex flex-col items-center md:items-start pt-[5rem]">
            <div className="flex">
              <div>
                <Image
                  src="/assets/images/order/aggregator/aggregator_icon.png"
                  width="60"
                  height="50"
                />
              </div>
              <div>
                <h1 className={`${classes["sofia-font-block"]} text-[22px]`}>
                  Tim Hortons in {props.countary}
                </h1>
                <p className={`${classes["sofia-font"]}`}>
                  You can make your order with the following aggregators
                </p>
              </div>
            </div>
            <div className="pt-7 md:flex md:flex-wrap gap-5">
              {/* first column */}
              <div className="flex flex-col items-center gap-5 py-5">
                <div>
                  <Image
                    src="/assets/images/order/aggregator/hungerstation.png"
                    width="210"
                    height="186"
                  />
                </div>
                <div>
                  <h1 className={`${classes["sofia-font"]} text-[19px]`}>
                    Hungerstation
                  </h1>
                </div>
              </div>
              {/* end of first column */}
              {/* second column */}
              <div className="flex flex-col items-center gap-5 py-5">
                <div className="bg-[#CF2F32] rounded-lg">
                  <Image
                    src="/assets/images/order/aggregator/jahez.png"
                    width="210"
                    height="186"
                  />
                </div>
                <div>
                  <h1 className={`${classes["sofia-font"]} text-[19px]`}>
                    Jahez
                  </h1>
                </div>
              </div>
              {/* end of second column */}
              {/* third column */}
              <div className="flex flex-col items-center gap-5 py-5">
                <div className="bg-[#000000] rounded-lg">
                  <Image
                    src="/assets/images/order/aggregator/marsool.png"
                    width="210"
                    height="186"
                  />
                </div>
                <div>
                  <h1 className={`${classes["sofia-font"]} text-[19px]`}>
                    Marsool
                  </h1>
                </div>
              </div>
              {/* end of third column */}
              {/* fourth column */}
              <div className="flex flex-col items-center gap-5 py-5">
                <div className="bg-[#42A040] rounded-lg">
                  <Image
                    src="/assets/images/order/aggregator/careem.png"
                    width="210"
                    height="186"
                  />
                </div>
                <div>
                  <h1 className={`${classes["sofia-font"]} text-[19px]`}>
                    Careem
                  </h1>
                </div>
              </div>
              {/* end of fourth column */}
              {/* fifth column */}
              <div className="flex flex-col items-center gap-5 py-5">
                <div className="bg-[#003463] rounded-lg">
                  <Image
                    src="/assets/images/order/aggregator/to_you.png"
                    width="210"
                    height="186"
                  />
                </div>
                <div>
                  <h1 className={`${classes["sofia-font"]} text-[19px]`}>
                    To You
                  </h1>
                </div>
              </div>
              {/* end of fifth column */}
            </div>
          </div>
        )}
      </article>
    </section>
  );
};

export default Aggregator;
