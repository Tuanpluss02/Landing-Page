import "../assets/fontawesome-free-6.2.0-web/css/all.css";
import { portfolio } from "../constants";
import "../index.css";
import styles, { layout } from "../style";

const DisplayMember = (props) => {
  const { data } = props;
  console.log(data, data.id, data.image, data.name, data.link);
  return (
    <div
      style={{
        background: "var(--black-gradient)",
        borderRadius: "20px",
        margin: "0 10px",
        padding: "10px",
      }}
    >
      <div key={data.id} className="flex flex-col px-4 items-center">
        {/* Image */}
        <img
          key={data.id}
          src={data.image}
          alt={data.name}
          className="w-[100px] h-[100px] rounded-[50%] mb-4 cursor-pointer object-contained"
          onClick={() => window.open(data.web)}
        />
        {/* Name */}
        <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
          {data.name}
        </h4>
        {/* Role */}
        <h4
          className="
      font-poppins font-medium 
      text-[18px] leading-[27px] 
      text-white"
          style={{ fontStyle: "italic" }}
        >
          {data.role}
        </h4>
        {/* Social */}
        <div className="flex flex-row">
          <dic style={{ color: "white", fontSize: "35px", margin: "0 10px" }}>
            <a href={data.github}>
              <i class="fa-brands fa-github"></i>
            </a>
          </dic>
          <dic style={{ color: "white", fontSize: "35px", margin: "0 10px" }}>
            <a href={data.linkedin}>
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </dic>
          <dic style={{ color: "white", fontSize: "35px", margin: "0 10px" }}>
            <a href={data.web}>
              <i class="fa-solid fa-image-portrait"></i>
            </a>
          </dic>
        </div>
      </div>
    </div>
  );
};
const CardDeal = () => (
  <section
    id="Member"
    className={`$layout.section w-[100%] m-0 overflow-hidden items-center`}
  >
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Our team
        <br className="sm:block hidden" />
      </h2>

      {/* General Description */}
      <p className={styles.paragraph}>
        We are a team of young and talented developers who are passionate about
        building great products.
      </p>

      {/* Basic Info and Role */}
      <div className="items-center" style={{ margin: "50px auto 0" }}>
        <div className="grid grid-cols-3 gap-4 py-4 mx-[120px]">
          {portfolio.map((data, index) => {
            return index < 3 && <DisplayMember data={data} />;
          })}
        </div>
        <div className="grid grid-cols-4 gap-4 py-4">
          {portfolio.map((data, index) => {
            return index > 2 && <DisplayMember data={data} />;
          })}
        </div>
      </div>
    </div>
  </section>
);

export default CardDeal;
