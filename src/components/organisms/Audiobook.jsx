import Buttons from "../atoms/Buttons";
import Layout from "../atoms/Layout";
import Image from "next/image";
const Audiobook = () => {
  return (
    <Layout>
      <div className="grid gap-5 md:flex md:justify-between text-primary bg-white">
        <div className="relative h-full w-full p-5 md:p-10 bg-contain md:order-last">
          <Image
            src="/assets/audio.png"
            width={600}
            height={600}
            alt="audio image"
          />
        </div>
        <div className="grid content-center">
          {/* <Layout> */}
          <div className="grid grid-rows_[min-content] gap-6 md:gap-10 text-center">
            <h3 className="text-3xl font-bold">
              Faith filled Audio<br></br> Journeys
            </h3>
            <p>
              Dive into a vast library of religious literature, devotionals, and
              insightful books. Receive tailored books and messages based on
              your interests. Explore the wisdom of ages past and modern
              spiritual thought of leaders with just a tap.
            </p>
            <div>
              <Buttons type="outline">Explore Content</Buttons>
            </div>
          </div>
          {/* </Layout> */}
        </div>
      </div>
    </Layout>
  );
};

export default Audiobook;
