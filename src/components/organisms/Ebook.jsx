import Buttons from "../atoms/Buttons";
import Image from "next/image";
import Layout from "../atoms/Layout";
const Ebook = () => {
  return (
    <div className="grid md:grid-cols-[auto_1fr] bg-primary">
      <div className="relative h-full w-full bg-contain">
        <Image
          src="/assets/fuelYourFaith.png"
          width={500}
          height={500}
          alt="ebook image"
        />
      </div>
      <div className="bg-primary text-white grid content-center">
        <Layout>
          <div className="grid grid-rows_[min-content] gap-6 md:gap-10 text-center">
            <h3 className="text-3xl font-bold">
              Books to Fuel your<br></br> Faith
            </h3>
            <p>
              Dive into a vast library of religious literature, devotionals, and
              insightful books. Receive tailored books and messages based on
              your interests. Explore the wisdom of ages past and modern
              spiritual thought of leaders with just a tap.
            </p>
            <div>
              <Buttons type="white-outline">Get Inspired</Buttons>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Ebook;
