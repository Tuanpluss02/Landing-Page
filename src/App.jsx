import styles from "./style";
// import { CardDeal } from "./compon";
import { Billing, Business, CTA, Footer, Hero, MemberCard, Navbar, Testimonials } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        <MemberCard />
        {/* <CardDeal /> */}
        <Billing />
        <Business />
        <Testimonials />
        {/* <Clients /> */}

        <CTA />
        <Footer />

      </div>
    </div>
  </div>
);

export default App;