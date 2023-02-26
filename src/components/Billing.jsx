
import { npl } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product">
    <div className={`my-[25px]`} >
      <h2 className={styles.heading2}>
        Try our product<br className="sm:block hidden" />
      </h2>
      <p className={styles.paragraph}>
        This is our major assignment for the Software Engineering course.
      </p>
    </div>
    <div className={`flex flex-col sm:flex-row items-center justify-center`}>
      <div className={layout.sectionImg}>
        <img src={npl} alt="billing" className="relative z-[5]" />
        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[60%] h-[70%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>
      <div className="pl-10%">
        <div className={layout.sectionChat}>
          <h1 className={styles.heading2}>
            <span className="text-gradient">Pro Chat </span>{" "}
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Pro Chat is a real-time messaging web application that allows users to chat with each other instantly. It is built using FastAPI, MongoDB, Socket.io, and React.
          </p>
          <button type="button" className={`py-4 px-6 my-[25px] font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
            <a href="https://pro-chat-frontend.vercel.app/" target="_blank" rel="noreferrer">Try it now</a>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Billing;