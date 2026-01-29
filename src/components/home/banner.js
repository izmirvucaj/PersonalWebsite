import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import picture from "../../assets/images/picture.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import "./banner.css";
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Software Developer", "Front End Developer"];
    const period = 500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="banner">
            <Row style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center" }}>
                {/* Metinler bölümü */}
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`Hi! I'm Izmir`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                                <p> 
                                I am a third-year Computer Engineering student at Trakya University. I consider myself a responsible and orderly person. I try to improve myself every day. I actively participate in class discussions and consistently complete my assignments on time. I am passionate about technology and stay updated with the latest developments. I am looking forward to my first work and internship experience.
                                </p>
                                <button onClick={() => console.log('connect')}></button>
                            </div>}
                    </TrackVisibility>
                </Col>
                {/* Resim bölümü */}
                <Col >
                    <div class="content">
                        <img src={picture} alt="Header Img" />
                    </div>
                </Col>
            </Row>
        </section>

    )
}