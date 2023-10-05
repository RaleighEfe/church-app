import Image from "next/image";
import Buttons from "../atoms/Buttons";
import Layout from "../atoms/Layout";
const StartYourJourney = () => {
  return (
    <div className="grid md:grid-cols-2 content-center justify-center bg-primary text-white">
      <div className="p-5 md:p-10 relative h-full w-full bg-contain">
        <Image
          src="/assets/startYourJourney.svg"
          width={500}
          height={500}
          alt="notepad image"
        />
      </div>

      <div className="grid content-center">
        <Layout>
          <div className="grid grid-rows_[min-content] gap-6 md:gap-10 text-center">
            <h3 className="text-3xl font-bold">
              Revolutionize your<br></br> Insight
            </h3>
            <p>
              Capture your thoughts, inspirations and personal reflections
              directly within the app. Keep your spiritual insights organized
              and easily accessable.
            </p>
            <div>
              <Buttons type="white-outline">Start your Journey</Buttons>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default StartYourJourney;
