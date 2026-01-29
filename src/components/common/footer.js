import { useEffect, useState } from 'react';
import { BackTop } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const AppFooter = () => {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowBackTop(true);
      } else {
        setShowBackTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="footer" className="container-fluid">
      <div className="footer">
        <div className="logo">
        <i class="fa-solid fa-code"></i> IZMIR
       
        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
          <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
        </ul>
        <div className="copyright"> &copy; Copyright  2024 Izmir</div>
        <BackTop className={showBackTop ? '' : 'hide'}>
          <div className="ant-back-top-inner"><i class="fa-solid fa-chevron-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;
