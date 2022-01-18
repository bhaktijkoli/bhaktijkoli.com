import React from "react";
import BlockChain from "../Backgrounds/BlockChain";
import InternetOfThings from "../Backgrounds/InternetOfThings";
import Mobile from "../Backgrounds/Mobile";
import Web from "../Backgrounds/Web";
import Fade from "react-reveal/Fade";

const ITEMS = [
  {
    title: "Web/Desktop Application Development",
    img: <Web />,
    description:
      "I am very firm when it comes to Web Development, I have built single page, e-commerce, content management and analytical web applications. I have also developed desktop cross-platform applications as well as Windows desktop application.",
    reverse: false,
  },
  {
    title: "Mobile Application Development",
    img: <Mobile />,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    reverse: true,
  },
  {
    title: "Internet Of Things",
    img: <InternetOfThings />,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    reverse: false,
  },
  {
    title: "Blockchain",
    img: <BlockChain />,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    reverse: true,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="title">What I Do</h1>
            <p className="subtitle">
              I have worked with various technolgoies and frameworks to build
              innovatie and ideal projects.
            </p>
          </div>
          {ITEMS.map((item, key) => {
            return (
              <div className="row" key={key}>
                <Fade>
                  <div
                    className={`col-sm-4 service order-${item.reverse ? 3 : 1}`}
                  >
                    {item.img}
                  </div>
                </Fade>
                <div className="col-sm-2 order-2"></div>
                <div
                  className={`col-sm-5 service order-${item.reverse ? 1 : 3}`}
                >
                  <Fade>
                    <h2 className="service-title">{item.title}</h2>
                  </Fade>
                  <Fade>
                    <p className="service-description">{item.description}</p>
                  </Fade>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
