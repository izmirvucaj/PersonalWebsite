import React from 'react';
import { Button, Carousel, Row, Col } from 'antd';
import towerdefense from '../../assets/images/towerdefense.jpeg';
import newbackg2 from '../../assets/images/backg10.jpeg'; // Arka plan resmi

import dice from '../../assets/images/dice.png';


const items = [
  {
    key: '1',
    title: "Together with my friends, we developed a game called 'Tower Defense' using Flutter.",
    image: towerdefense,
    url: 'https://github.com/izmirvucaj/Tower_Defense.git'
  },
  {
    key: '2',
    title: "I created a simple Dice Roller app in Swift that rolls dice and generates random numbers.",
    image: dice,
    url: 'https://github.com/izmirvucaj/DiceRollerApp.git'
  },
  {
    key: '3',
    title: '',
    content: '',
    url: 'https://your-url-3.com'
  },
  {
    key: '4',
    title: '',
    content: '',
    url: 'https://your-url-4.com'
  }
];

function AppHero() {
  const handleLearnMoreClick = (url) => {
    window.open(url, '_blank');
  }

  return (
    <div
      id="hero"
      className="heroBlock"
      style={{
        backgroundImage: `url(${newbackg2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
      }}
    >
      <Carousel>
        {items.map((item) => {
          return (
            <div key={item.key} className="container-fluid">
              <Row align="middle">
                <Col xs={24} md={12}>
                  <div className="content">
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                    <div className="btnHolder">
                      {(item.key === '1' || item.key === '2') && (
                        <Button type="primary" size="large" onClick={() => handleLearnMoreClick(item.url)}>Learn More</Button>
                      )}
                    </div>
                  </div>
                </Col>
                {item.image && (
                  <Col xs={24} md={12}>
                    <div className="image-content">
                      <img

                        src={item.image}
                        alt={item.title}
                        className={item.key === '2' ? 'dice' : ''} // dice imajı için özel sınıf
                      />

                    </div>
                  </Col>
                )}
              </Row>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;
