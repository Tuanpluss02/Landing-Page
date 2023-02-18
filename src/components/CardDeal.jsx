import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import MoreInfo from "./MoreInfo";
import { portfolio } from "../constants";


const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Here are my team's information
        <br className="sm:block hidden" /> 
      </h2>
  
      <p className={styles.paragraph}>
        We are a team of young and talented developers who are passionate about
        building great products.
      </p>

      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center">
      {portfolio.map((portfolio) => (
        <div key={portfolio.id} className="flex flex-col items-center">
          {/* Image */}
          <img key={portfolio.id} src={portfolio.img} alt={portfolio.name} className="w-[50px] h-[50px] object-contain" />
          {/* Name */}
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {portfolio.name}
          </h4>
          {/* Role */}
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {portfolio.role}
          </h4>
          {/* More Info Button and Click to Link */}
          <MoreInfo link={portfolio.link} />
          

        </div>
      )
      )}
    </div>
    </div>

  </section>
);

export default CardDeal;
