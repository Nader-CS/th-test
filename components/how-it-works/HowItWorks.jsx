import Card from "../ui/card/Card";
import classes from "./HowItWorks.module.css";

const HowItWorks = () => {
  return (
    <section className={`bg-[#3B2222] ${classes.text} py-5`}>
      <article className="container mx-auto">
        <div className="text-center mb-10" id="how_it_works">
          <h1 className="text-[#F8F5EF] text-[2rem] font-bold pt-3">
            How it Works
          </h1>
        </div>
        <div className="sm:flex flex-wrap">
          {/* item */}
          <div className="my-5 sm:w-[50%] lg:w-[25%]">
            <div className="header mb-10">
              <Card className="bg-[#F8F5EF] w-[70%] mx-auto h-[3rem] flex justify-between items-center px-6">
                <div>
                  <img src="./assets/images/info/how_it_works/earn_points.png" />
                </div>
                <p className="text-[#3B2222] text-[1.5rem]">1</p>
              </Card>
            </div>
            <div className="content text-center w-[90%] mx-auto text-[#F8F5EF]">
              <h1 className=" text-[14px] font-bold mb-5">
                Earn points , save money.
              </h1>
              <p>
                Earn points with every transaction. become a member and earn
                Tims points by placing an order or more.
              </p>
            </div>
          </div>
          {/* end of item */}
          {/* item */}
          <div className="my-5 sm:w-[50%] lg:w-[25%]">
            <div className="header mb-10">
              <Card className="bg-[#F8F5EF] w-[70%] mx-auto h-[3rem] flex justify-between items-center px-6">
                <div>
                  <img src="./assets/images/info/how_it_works/redeem.png" />
                </div>
                <p className="text-[#3B2222] text-[1.5rem]">2</p>
              </Card>
            </div>
            <div className="content text-center w-[90%] mx-auto text-[#F8F5EF]">
              <h1 className=" text-[14px] font-bold mb-5">
                Redeem points when you order.
              </h1>
              <p>
                Use a coupon, in-app or in-store purchase to redeem your points.
              </p>
            </div>
          </div>
          {/* end of item */}
          {/* item */}
          <div className="my-5 sm:w-[50%] lg:w-[25%]">
            <div className="header mb-10">
              <Card className="bg-[#F8F5EF] w-[70%] mx-auto h-[3rem] flex justify-between items-center px-6">
                <div>
                  <img src="./assets/images/info/how_it_works/before_it_expires.png" />
                </div>
                <p className="text-[#3B2222] text-[1.5rem]">3</p>
              </Card>
            </div>
            <div className="content text-center w-[90%] mx-auto text-[#F8F5EF]">
              <h1 className=" text-[14px] font-bold mb-5">
                Before it expires, redeem it.
              </h1>
              <p>Points are valid for 6 months from the day of the purchase.</p>
            </div>
          </div>
          {/* end of item */}
          {/* item */}
          <div className="my-5 sm:w-[50%] lg:w-[25%]">
            <div className="header mb-10">
              <Card className="bg-[#F8F5EF] w-[70%] mx-auto h-[3rem] flex justify-between items-center px-6">
                <div>
                  <img src="./assets/images/info/how_it_works/rewarding.png" />
                </div>
                <p className="text-[#3B2222] text-[1.5rem]">4</p>
              </Card>
            </div>
            <div className="content text-center w-[90%] mx-auto text-[#F8F5EF]">
              <h1 className=" text-[14px] font-bold mb-5">
                Rewarding birthday offer.
              </h1>
              <p>Enjoy a special treat from us on your Birthday.</p>
            </div>
          </div>
          {/* end of item */}
        </div>
      </article>
    </section>
  );
};

export default HowItWorks;
