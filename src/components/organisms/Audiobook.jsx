import Buttons from "../atoms/Buttons";
import Layout from "../atoms/Layout";
const Audiobook = () => {
  return (
    <div className="grid md:grid-cols-2 text-primary bg-white">
      <div className="grid content-center">
        <Layout>
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
        </Layout>
      </div>
      <div></div>
    </div>
  );
};

export default Audiobook;
