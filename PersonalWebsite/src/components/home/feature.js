import { Row, Col } from "antd";
import React, { useState } from "react";
import { Card } from 'antd';
import Image1 from "../../assets/images/c.svg";
import Image2 from "../../assets/images/python.svg";
import Image3 from "../../assets/images/flutter-logo.svg";
import Image4 from "../../assets/images/java.svg";
import Image5 from "../../assets/images/react.png";
import Image6 from "../../assets/images/JavaScript.png";

const { Meta } = Card;

function AppFeature() {
    const [clickedCard, setClickedCard] = useState(null);

    // Resimler ve açıklamaları bir liste içinde tanımla
    const features = [
        { image: Image1, title: "C", description: "C programlama dili" },
        { image: Image3, title: "Flutter", description: "Flutter framework" },
        { image: Image2, title: "Python", description: "Python programlama dili" },
        { image: Image4, title: "Java", description: "Java programlama dili" },
        { image: Image5, title: "React", description: "React framework" },
        { image: Image6, title: "JavaScript", description: "JavaScript programlama dili" },
    ];

    const handleCardClick = (index) => {
        setClickedCard(index);
    };

    return (
        <div id='feature' className="block featureBlock bgGray">
            <div className="container-skills">
                <Row gutter={[34, 50]}>
                    {features.map((feature, index) => (
                        <Col key={index} span={8}>
                            <Card
                                hoverable
                                bordered
                                className={`card-hover-effect ${clickedCard === index ? 'card-clicked' : ''}`} // CSS sınıflarını burada ekleyin
                                style={{ width: '74%', height: '110%' }}
                                onClick={() => handleCardClick(index)} // Tıklama olayını burada ekleyin
                            >
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '50%' }}>
                                    <img alt={feature.title} src={feature.image} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
                                    <div style={{ position: 'absolute', bottom: '0', width: '100%', color: 'white', padding: '4px' }}>
                                        <Meta
                                            title={feature.title}
                                        />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default AppFeature;
