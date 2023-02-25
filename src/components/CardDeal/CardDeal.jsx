import "../../assets/fontawesome-free-6.2.0-web/css/all.css";
import { portfolio } from "../../constants";
import "../../index.css";
import styles, { layout } from "../../style";
import Sldr from "./Sldr";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardDeal_Slider = () => {
  return(
    <div>
      <h2 className={styles.heading2}>
        Our team's information
        <br className="sm:block hidden" />
      </h2>
      <p className={styles.paragraph}>
        We are a team of young and talented developers who are passionate about
        building great products.
      </p>
      <div className={styles.marginY}>
      {
        <Sldr/>
      }
      </div>
    </div>
  )
}

export default CardDeal_Slider;
