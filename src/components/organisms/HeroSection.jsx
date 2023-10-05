import Buttons from "../atoms/Buttons";
import Layout from "../atoms/Layout";

const HeroSection = () => {
  return (
    <div className="px-3 pb-3 rounded-lg">
      <div className="bg-backgroundImage h-[90vh] rounded-lg  bg-cover">
        <div className=" bg-black/25 h-full rounded-lg grid content-center">
          <Layout>
            <div className=" grid grid-rows-3 gap-6 text-white">
              <h3 className="text-4xl md:text-5xl font-bold text-center grid  content-center">
                Welcome to your Digital Sanctuary
              </h3>
              <p className="text-xl text-center">
                A world of spiritual enrichment at your finger tip with church
                app. {"We've"} crafted a platform {"that's"} designed to enhance
                your faith journey like never before. Whether {"you're"} at
                home, on the go, or sitting in the pews, church app brings the
                spiritual experience closer to you.
              </p>
              <div className="mx-auto grid content-center">
                <Buttons type="filled">Explore Content</Buttons>
              </div>
            </div>
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
