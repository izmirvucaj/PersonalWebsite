import { useState, useEffect, useCallback } from "react";
import { Row, Col } from "react-bootstrap";

import picture from "../../assets/images/picture.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import "./banner.css";
import TrackVisibility from 'react-on-screen';

const toRotate = ["Software Developer", "Front End Developer"];
const period = 500;

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [, setIndex] = useState(1);

    const tick = useCallback(() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prev => prev - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prev => prev + 1);
        }
    }, [loopNum, isDeleting, text]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [text, delta, tick]);

    return (
        <section className="banner" id="banner">
            <Row style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center" }}>
                {/* Metinler bölümü */}
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`Hi! I'm Izmir`} <span className="txt-rotate" dataPeriod="1000" data-rotate={['Web Developer', 'Web Designer', 'UI/UX Designer']}><span className="wrap">{text}</span></span></h1>
                                <p> 
                                I am a Computer Engineering graduate from Trakya University in Turkey. I am a responsible and well-organized individual with a strong commitment to continuous self-improvement. I have a strong passion for technology and closely follow the latest developments in the field. I am eager to begin my professional career and gain hands-on experience through my first full-time role.
                                </p>
                                <button type="button" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                                  İletişime Geç
                                  <ArrowRightCircle size={20} />
                                </button>
                            </div>}
                    </TrackVisibility>
                </Col>
                {/* Resim bölümü */}
                <Col xs={12} md={6} xl={5}>
                    <div className="content banner-profile">
                        <img src={picture} alt="Izmir" className="banner-profile-img" />
                    </div>
                </Col>
            </Row>
        </section>

    )
}