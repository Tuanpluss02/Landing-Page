import styles, { layout } from "../../style";
import { portfolio } from "../../constants";
// import { Link } from "react-router-dom";
// import MoreInfo  from "./MoreInfo";
// import Button from "./Button";
// import Style from "./style";
import "../../index.css";
import "../../assets/fontawesome-free-6.2.0-web/css/all.css";
import Slider from "react-slick";
import { useState } from "react";
import * as assets from "../../assets";
// const SETTINGS = {
//   dots: false,
//   infinite: true,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   slidesToShow: data.length > 10 ? 10 : data.length,
//   slidesToScroll: 1,
//   pauseOnFocus: false,
// };
// const [activeMember, setActiveMember] = useState(0);
// var data = portfolio[0];
// function setData(index) {
//   data = portfolio[index];
// }
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
      // onClick={() =>
      //   setActiveMember(index)
      // }
    >
      <div key={data.id} className="flex flex-col px-4 items-center">
        {/* Image */}
        <img
          key={data.id}
          src={data.image}
          alt={data.name}
          className="w-[100px] h-[100px] rounded-[50%] mb-4 cursor-pointer object-contained"
          onClick={() => window.open(data.link)}
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
            <a href="#">
              <i class="fa-brands fa-github"></i>
            </a>
          </dic>
          <dic style={{ color: "white", fontSize: "35px", margin: "0 10px" }}>
            <a href="#">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </dic>
          <dic style={{ color: "white", fontSize: "35px", margin: "0 10px" }}>
            <a href="#">
              <i class="fa-solid fa-image-portrait"></i>
            </a>
          </dic>
        </div>
        {/* Button */}
        {/* <button 
      className="py-4 px-10 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none"
      onClick={() => window.open(portfolio.link)}>Portfolio</button> */}
      </div>
    </div>
  );
};
const Tmp = (props) => {
  return <p style={{ color: "white" }}>Hello {props.data.name}</p>;
};
const CardDeal = () => (
  <section
    id="Member"
    className={`$layout.section w-[100%] m-0 overflow-hidden items-center`}
  >
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Our team's information
        <br className="sm:block hidden" />
      </h2>

      {/* General Description */}
      <p className={styles.paragraph}>
        We are a team of young and talented developers who are passionate about
        building great products.
      </p>

      {/* Basic Info and Role */}
      <div className="items-center" style={{ margin: "50px auto 0" }}>
        {/* <div className="mx-auto my-0">
          <DisplayMember className="item-center mx-250" data={portfolio[0]} />
        </div> */}
        <div className="grid grid-cols-3 gap-4 py-4 mx-[120px]">
          {/* <Slider
                {...SETTINGS}
                afterChange={(index) => setActiveMember(index)}> */}
          {portfolio.map((data, index) => {
            return index < 3 && <DisplayMember data={data} />;
          })}

          {/* </Slider>	 */}
        </div>
        <div className="grid grid-cols-4 gap-4 py-4">
          {/* <Slider
                {...SETTINGS}
                afterChange={(index) => setActiveMember(index)}> */}
          {portfolio.map((data, index) => {
            return index > 2 && <DisplayMember data={data} />;
          })}

          {/* </Slider>	 */}
        </div>
      </div>
    </div>
  </section>
);

export default CardDeal;
