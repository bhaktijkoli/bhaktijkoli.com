import React from "react";
import HeroBackground from '../Backgrounds/Hero';
import Fade from 'react-reveal/Fade';

const Hero: React.FC = () => {
    const [animate, setAnimate] = React.useState(false);
    React.useEffect(() => {
        setAnimate(true);
    }, [])
    return (
        <React.Fragment>
            <section id="hero">
                <div className="overlay">
                    <HeroBackground />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <Fade left when={animate} delay={500} distance="10%">
                                <h1 className="name">
                                    Hi, I'm Bhaktij
                                </h1>
                            </Fade>
                            <Fade bottom when={animate} delay={800} distance="10%">
                                <p className="description">
                                    I develop mobile, web and desktop applications.
                                    I've done work for various agencies and startups. I am looking for opportunities to build my career that would help me in achieving greater practical excellence in the software industry.
                                </p>
                            </Fade>
                        </div>
                        <div className="col-sm-6">
                            <img src="/img/coding.svg" className="coding-image" />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Hero;