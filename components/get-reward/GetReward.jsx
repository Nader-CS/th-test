import Card from "../ui/card/Card";
import classes from "./GetReward.module.css";

const GetReward = () => {
  return (
    <section className=" py-2 px-3">
      <article className="container mx-auto  text-center">
        <div>
          <h1 className={`font-bold text-[1.6rem] ${classes["bukra-font"]}`}>
            How to Get Rewarded
          </h1>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start lg:justify-center gap-3 ">
          <div className="my-5 sm:w-[80%] md:w-[30%] xl:w-[18%] md:flex md:flex-col h-[350px]">
            <img
              src="./assets/images/info/get_rewarded/active_member.png"
              className="inline-block h-[50%]"
            />
            <h1
              className={`my-3 font-bold ${classes["bukra-font"]} text-[1.2rem] h-[20%]`}
              style={{ minHeight: "66px" }}
            >
              Active Member Rewards
            </h1>

            <div>
              <div className="rounded bg-[#E5E5E5] h-[5.5rem] flex justify-center items-center p-5 w-[100%]">
                <p
                  style={{ width: "300px" }}
                  className={`{classes["bukra-font"]} text-[14px]`}
                >
                  Active members, earn 25 points every week
                </p>
              </div>
            </div>
          </div>
          <div className="my-5 sm:w-[80%] md:w-[30%] xl:w-[18%] md:flex md:flex-col h-[350px] ">
            <img
              src="./assets/images/info/get_rewarded/profile.png"
              className="inline-block h-[50%]"
            />
            <h1
              className={`my-3 font-bold ${classes["bukra-font"]} text-[1.2rem] h-[20%]`}
              style={{ minHeight: "66px" }}
            >
              Profile Update Rewards
            </h1>
            <div>
              <div className="rounded bg-[#E5E5E5] h-[5.5rem] flex justify-center items-center p-5 w-[100%]">
                <p
                  style={{ width: "300px" }}
                  className={`{classes["bukra-font"]} text-[14px]`}
                >
                  Complete and collect points
                </p>
              </div>
            </div>
          </div>
          <div className="my-5 sm:w-[40%] md:w-[30%] xl:w-[18%] md:flex md:flex-col h-[350px]">
            <img
              src="./assets/images/info/get_rewarded/profile.png"
              className="inline-block h-[50%]"
            />
            <h1
              className={`my-3 font-bold ${classes["bukra-font"]} text-[1.2rem] h-[20%]`}
              style={{ minHeight: "66px" }}
            >
              Profile Update Rewards
            </h1>
            <div>
              <div className="rounded bg-[#E5E5E5] h-[5.5rem] flex justify-center items-center p-5">
                <p
                  style={{ width: "300px" }}
                  className={`sm:w-auto ${classes["bukra-font"]}  text-[14px]`}
                >
                  Play games and earn rewards instantly
                </p>
              </div>
            </div>
          </div>
          <div className="my-5 sm:w-[40%] md:w-[30%] xl:w-[18%] md:flex md:flex-col h-[350px]">
            <img
              src="./assets/images/info/get_rewarded/answer_win.png"
              className="inline-block h-[50%]"
            />
            <h1
              className={`my-3 font-bold ${classes["bukra-font"]} text-[1.2rem]`}
              style={{ minHeight: "66px" }}
            >
              profile
            </h1>
            <div className="rounded bg-[#E5E5E5] h-[5.5rem] flex justify-center items-center p-5">
              <div className=" w-[100%] p-3">
                <p
                  className={`w-[300px] sm:w-auto ${classes["bukra-font"]} text-[14px]`}
                >
                  Give us a sense of who you are and earn 200 Points
                </p>
              </div>
            </div>
          </div>
          <div className="my-5 sm:w-[40%] md:w-[30%] xl:w-[18%] md:flex md:flex-col h-[350px]">
            <img
              src="./assets/images/info/get_rewarded/refer_win.png"
              className="inline-block h-[50%]"
            />
            <h1
              className={`my-3 font-bold ${classes["bukra-font"]} text-[1.2rem] `}
              style={{ minHeight: "66px" }}
            >
              Profile Update Rewards
            </h1>
            <div className="rounded bg-[#E5E5E5] h-[5.5rem] flex justify-center items-center p-5 ">
              <div className=" w-[100%] p-3">
                <p
                  className={`w-[300px] sm:w-auto ${classes["bukra-font"]} text-[14px]`}
                >
                  Rewards for you and your friends
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default GetReward;
