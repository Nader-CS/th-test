import Download from "@/components/download/Download";
import Landing from "@/components/landing/Landing";
import News from "@/components/news/News";
import OrderNow from "@/components/order-now/OrderNow";

const Home = () => {
  return (
    <>
      <Landing />
      <OrderNow />
      <News />
      <Download
        imageUrl="./assets/images/home/how-it-works/how-it-works.png"
        style={{
          backgroundColor: "#3B2222",
        }}
        heading={{
          heading1: {
            text: "With every transaction",
            style: "",
          },
          heading2: {
            text: "you earn Tims Points",
            style: "",
          },
        }}
        subtext={{
          subtext1: {
            text: "Get the Tims app to earn, redeem, and enjoy your favorite Tims treats!",
            style: "",
          },
        }}
      />
    </>
  );
};

export default Home;
