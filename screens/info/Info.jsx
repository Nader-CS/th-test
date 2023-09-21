import Download from "@/components/download/Download";
import GetReward from "@/components/get-reward/GetReward";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import OrderNow from "@/components/order-now/OrderNow";

const Info = () => {
  return (
    <>
      <Download
        style={{ backgroundColor: "#F8F5EF" }}
        reflect={true}
        image={{ url: "./assets/images/info/download/orderNow.png" }}
        heading={{
          heading1: {
            text: "NOW REDEEM MORE OF YOUR",
            style: {
              color: "#1A1818",
              fontSize: "22px",
              fontFamily: "29LT Bukra",
              fontWeight: "bold",
            },
          },
          heading2: {
            text: "Tims Favorites",
            style: {
              color: "#A82730",
              fontSize: "44px",
            },
          },
        }}
        subtext={{
          subtext1: {
            text: "Score free faves faster with the all new Tims Rewards. Now, you can earn points for every transaction you make.",
            style: {
              color: "black",
            },
            specialText: {
              text: " That’s right, more Points. Faster!",
              style: {
                fontFamily: "29LT Bukra",
                fontWeight: "bold",
                color: "black",
              },
            },
          },
        }}
        download={{
          text: "Download Now",
          style: {
            color: "black",
            fontFamily: "29LT Bukra",
            fontWeight: "bold",
          },
        }}
      />
      <OrderNow />
      <GetReward />
      <HowItWorks />
    </>
  );
};

export default Info;
