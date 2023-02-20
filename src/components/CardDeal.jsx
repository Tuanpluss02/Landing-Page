import styles, { layout } from "../style";
import { portfolio } from "../constants";
import { Link } from "react-router-dom";
import MoreInfo  from "./MoreInfo";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Here are my team's information
        <br className="sm:block hidden" /> 
      </h2>
      
      {/* General Description */}
      <p className={styles.paragraph}>
        We are a team of young and talented developers who are passionate about
        building great products.
      </p>

      {/* Basic Info and Role */}
      <div className="flex py-4">
      {
        portfolio.map((portfolio) => (
          <div key={portfolio.id} className="flex flex-col px-4 items-center">
            {/* Image */}
            <img 
            key={portfolio.id} 
            src={portfolio.image} 
            alt={portfolio.name} 
            className="w-[100px] h-[100px] rounded-[50%] mb-4 cursor-pointer object-contained" 
            onClick={() => window.open(portfolio.link)}/>
            {/* Name */}
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {portfolio.name}
            </h4>
            {/* Role */}
            <h4 className="
            font-poppins font-medium 
            text-[18px] leading-[27px] 
            text-white">
                {portfolio.role}
            </h4>
            {/* Button */}
            <button 
            className="py-4 px-10 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none"
            onClick={() => window.open(portfolio.link)}>Portfolio</button>
          </div>
          ))
      }
      </div>
    </div>
  </section>
);

export default CardDeal;
