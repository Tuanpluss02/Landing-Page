import { Splide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import "../../assets/fontawesome-free-6.2.0-web/css/all.css";
import { portfolio } from "../../constants/index";
import "../../index.css";
import styles, { layout } from "../../style";
import MemberSlide from "./MemberSide";
import "./styles.css";

export default function MemberCard() {
    const Slider = <Splide
        options={{
            type: "loop",
            gap: "-50px",
            width: "100%",
            drag: "free",
            arrows: false,
            pagination: false,
            perPage: 4,
            autoScroll: {
                pauseOnHover: true,
                pauseOnFocus: false,
                rewind: false,
                speed: 2,
            },
            breakpoints: {
                1024: {
                    perPage: 3,
                },
                768: {
                    perPage: 2,
                },
                640: {
                    perPage: 1,
                },
            },
        }}
        extensions={{ AutoScroll }}
    >
        {portfolio.map((data) => {
            return (
                <MemberSlide data={data} />
            );
        })}

    </Splide>;
    return (
        <section
            id="Member"
            className={`$layout.section  m-0 overflow-hidden items-center`}
        >
            <div className={layout.sectionInfo}>
                <div className="my-[2em]">
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
                </div>
                {Slider}
            </div>
        </section>

    );
}
