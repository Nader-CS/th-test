import Link from "next/link";
import Button from "../ui/button/Button";
import Card from "../ui/card/Card";

const News = () => {
  return (
    <section className="bg-[#F8F5EF] py-[3rem]">
      <div className="container px-3 mx-auto md:flex gap-6">
        <Card className="mb-5 lg:mb-0">
          <article>
            <div>
              <img
                src="./assets/images/home/news/news1.png"
                className="w-[100%]"
              />
            </div>
            <div className="text-center rounded-b-[22px] py-3 bg-white">
              <div className="text-[#3B2222]">
                <h3 className="font-bold text-[1.2rem] py-2 ">
                  New Tims Coolers are here!
                </h3>
                <p className="w-[90%] mx-auto">
                  Say hello to our new flavors of Tims Coolers: Lavender and
                  Blue Lagoon, in addition to Passion Fruit, Strawberry, and
                  Peach. Cool down in style with these delicious and refreshing
                  drinks.
                </p>
              </div>
              <div>
                <Button
                  type="button"
                  className="w-[141.1px] h-[42.26px] text-white"
                >
                  <Link href="/order">Order Now</Link>
                </Button>
              </div>
            </div>
          </article>
        </Card>

        <Card>
          <article>
            <div>
              <img
                src="./assets/images/home/news/news2.png"
                className="w-[100%]"
              />
            </div>
            <div className="text-center rounded-b-[22px] py-3 bg-white">
              <div className="text-[#3B2222]">
                <h3 className="font-bold text-[1.2rem] py-2 ">
                  New Tims Coolers are here!
                </h3>
                <p className="w-[90%] mx-auto">
                  Say hello to our new flavors of Tims Coolers: Lavender and
                  Blue Lagoon, in addition to Passion Fruit, Strawberry, and
                  Peach. Cool down in style with these delicious and refreshing
                  drinks.
                </p>
              </div>
              <div>
                <Button
                  type="button"
                  className="w-[141.1px] h-[42.26px] text-white"
                >
                  <Link href="/order">Order Now</Link>
                </Button>
              </div>
            </div>
          </article>
        </Card>
      </div>
    </section>
  );
};

export default News;
