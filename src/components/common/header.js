import React from 'react';
import { Anchor, ConfigProvider } from 'antd';
import { GithubOutlined, LinkedinFilled } from '@ant-design/icons'
const { Link } = Anchor;


const AppHeader = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: 'white',
          spacing: '8px',
          lineHeight: 1,
          fontSize: '16px'
        },
      }}

    >
      <div className='container-fluid'>
        <div className='header'>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Anchor className='ant-anchor-wrapper' targetOffset='60'
              >
              <Link href='#banner' title='Home' />
              <Link href='#feature' title='Skills' />
              <Link href='#hero' title='Project' />
              <Link href='#contact' title='Contact' />
            </Anchor>
          </div>

          <div className="icon-container">
            <a href="https://github.com/izmirvucaj" target="_blank" rel="noopener noreferrer" className="github">
              <GithubOutlined style={{ fontSize: '18px', color: '#fff' }} />
            </a>
            <a href="https://www.linkedin.com/in/izmir-vucaj-3a5a9226a/" target="_blank" rel="noopener noreferrer" className="linkedin">
              <LinkedinFilled style={{ fontSize: '18px', color: '#fff' }} />
            </a>

          </div>
        </div>
      </div>
    </ConfigProvider>

  );
}

export default AppHeader;
