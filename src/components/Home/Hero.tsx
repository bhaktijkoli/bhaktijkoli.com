import React from "react";
import HeroBackground from "../Backgrounds/Hero";
import Fade from "react-reveal/Fade";
import { useRouter } from "next/router";
import useMobile from "hooks/useMobile";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoMail,
} from "react-icons/io5";

const Hero: React.FC = () => {
  const [animate, setAnimate] = React.useState(false);
  const isMobile = useMobile();
  const router = useRouter();
  React.useEffect(() => {
    setAnimate(true);
  }, []);

  const Intro = (
    <React.Fragment>
      <Fade left when={animate} delay={500} distance="10%">
        <h1 className="name">Hi, I&lsquo;m Bhaktij</h1>
      </Fade>
      <Fade bottom when={animate} delay={800} distance="10%">
        <p className="description">
          I develop mobile, web and desktop applications. I&lsquo;ve done work
          for various agencies and startups. I am looking for opportunities to
          build my career that would help me in achieving greater practical
          excellence in the software industry.
        </p>
      </Fade>
      <Fade bottom when={animate} delay={900} distance="10%">
        <button
          className="btn-chat"
          onClick={() => {
            window.location.href = "/meet";
          }}
        >
          Connect<i></i>
        </button>
      </Fade>
      <div className="social-icons-container">
        <Fade left when={animate} delay={2000} distance="30%">
          <a className="social-icon" href="mailto:hello@bhaktijkoli.com">
            <IoMail />
          </a>
        </Fade>
        <Fade left when={animate} delay={2100} distance="30%">
          <a className="social-icon" href="https://wa.me/917710848662">
            <IoLogoWhatsapp />
          </a>
        </Fade>
        <Fade left when={animate} delay={2200} distance="30%">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/bhaktij-koli"
          >
            <IoLogoLinkedin />
          </a>
        </Fade>
        <Fade left when={animate} delay={2300} distance="30%">
          <a className="social-icon" href="https://github.com/bhaktijkoli">
            <IoLogoGithub />
          </a>
        </Fade>
      </div>
    </React.Fragment>
  );

  if (isMobile) {
    return (
      <section id="hero">
        <div className="mobile-overlay">
          <div className="container">{Intro}</div>
        </div>
      </section>
    );
  } else {
    return (
      <section id="hero">
        <div className="overlay">
          <HeroBackground />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">{Intro}</div>
            <div className="col-sm-6" style={{ marginTop: 20 }}>
              <img src="/img/coding.svg" className="coding-image" />
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Hero;
