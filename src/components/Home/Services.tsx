import React from "react";
import BlockChain from "../Backgrounds/BlockChain";
import InternetOfThings from "../Backgrounds/InternetOfThings";
import Mobile from "../Backgrounds/Mobile";
import Web from "../Backgrounds/Web";
import Fade from "react-reveal/Fade";
import useMobile from "hooks/useMobile";

const ITEMS = [
  {
    title: "Web/Desktop Application Development",
    img: <Web />,
    description:
      "I am very firm when it comes to Web Development, I have built single pages, e-commerce, content management and analytical web applications. I have also developed desktop cross-platform applications as well as Windows desktop applications.",
    reverse: false,
  },
  {
    title: "Mobile Application Development",
    img: <Mobile />,
    description:
      "I have built and published several mobile apps mainly including e-commerce, management and utility applications using cross-platform mobile application development frameworks like react-native and ionic.",
    reverse: true,
  },
  {
    title: "Internet Of Things",
    img: <InternetOfThings />,
    description:
      "Having a good understanding of the interaction between physical hardware and software programming, I have built and provided various data-driven IoT solutions. Have worked on communication protocols including I2C, SPI, 1-wire, UART, MODBUS, DALI and various boards including Arduino, esp and Raspberry PI.",
    reverse: false,
  },
  {
    title: "Blockchain",
    img: <BlockChain />,
    description:
      "Have implemented blockchain using Ethereum, Solidity and Truffle and developed web application using web3 for javascript.",
    reverse: true,
  },
];

const Services: React.FC = () => {
  const isMobile = useMobile();
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="title">What I Do</h1>
            <p className="subtitle">
              I have worked with various technologies and frameworks to build
              innovative and ideal projects.
            </p>
          </div>
          {ITEMS.map((item, key) => {
            const reverse = isMobile || item.reverse;
            return (
              <div className="row" key={key}>
                <Fade>
                  <div className={`col-sm-4 service order-${reverse ? 3 : 1}`}>
                    {item.img}
                  </div>
                </Fade>
                <div className="col-sm-2 order-2"></div>
                <div className={`col-sm-5 service order-${reverse ? 1 : 3}`}>
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
