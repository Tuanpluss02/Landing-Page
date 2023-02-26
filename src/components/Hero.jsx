import { useRive } from "@rive-app/react-canvas";
import styles from "../style";
import GetStarted from "./GetStarted";

function Simple() {
  const { rive, RiveComponent } = useRive({
    src: "https://public.rive.app/community/runtime-files/3541-7421-animated-chatbot.riv",
    autoplay: true,
    stateMachines: "Chatbot State Machine",
  });
  return (
    <RiveComponent
      autoplay={true}
    // onMouseEnter={() => rive && rive.play()}
    // onMouseLeave={() => rive && rive.pause()}
    />
  );
}

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient">Software Engineering </span>{" "}
          </h1>

        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Team Seven.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We are a group of students from the faculty of Electronics and Telecommunication at the Posts and Telecommunications Institute of Technology.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <div className="w-[100%] h-[88%] relative z-[5]" style={{ transform: 'scale(1.5)' }}>
          <Simple />
        </div>
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  );
};

export default Hero;