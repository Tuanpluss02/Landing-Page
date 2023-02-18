import styles, { layout } from "../style";
import { portfolio } from "../constants";
import { Link } from "react-router-dom";


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
      <div className="flex flex-col md:flex-row flex-wrap items-center">
      {
        portfolio.map((portfolio) => (
          <div key={portfolio.id} className="flex flex-col items-center">
            {/* Image */}
            <img 
            key={portfolio.id} 
            src={portfolio.img} 
            alt={portfolio.name} 
            className="w-[50px] h-[50px] object-contain" 
            onClick={() => window.open(portfolio.link)}/>
            {/* Name */}
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {portfolio.name}
            </h4>
            {/* Role */}
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {portfolio.role}
            </h4>
            {/* Link */}
            
          </div>
          ))
      }
      </div>
      
    </div>
  </section>
);

export default CardDeal;
