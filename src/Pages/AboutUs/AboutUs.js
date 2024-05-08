import GamerSitting from "../../assets/gamersitting.png";
import "../../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${GamerSitting})` }}
      ></div>
      <div className="aboutBottom">
        <h1> WE ARE C&S</h1>
        <p className="border-2 rounded-5 p-5">
          Get to know the people who know your gear best. C&S is not a big box
          store, or a faceless chain... or a personality-free zone. C&S is a
          group of people who are passionate about the things you're passionate
          about technology, creating and imagining.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
