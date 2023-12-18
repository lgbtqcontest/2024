import ContestantCard from "../../components/contestantcard/Card.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Hero from "../../components/hero/Hero.jsx";
import PartnersMarquee from "../../components/partnersmarquee/PartnersMarquee.jsx";
import { eventDets } from "../../utils/card.js";
import cardDets from "../../utils/card.js";
import Card from "../../components/card/Card.jsx";
import Details from "../../components/details/Details.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <PartnersMarquee />
      <ContestantCard />
      {eventDets.map((event, key) => {
        console.log(event);
        const { img, title, text } = event;
        return <Details img={""} title={title} text={text} key={key} />;
      })}

      {cardDets.map((card, key) => {
        const { img, title, text, btntext, btntext2 } = card;
        return (
          <Card
            img={img}
            title={title}
            text={text}
            btntext={btntext}
            btntext2={btntext2}
            key={key}
          />
        );
      })}
    </>
  );
};

export default Home;
