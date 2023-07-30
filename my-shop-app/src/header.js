import { useState } from 'react';
import shopLogo from './image/shop-logo.svg'
import qrCode from './image/qr-code.svg'
import BannerLogin from './image/banner-log-in-01.svg'

const Herder = () => {

  const [language, setLanguage] = useState('ไทย')
  const [showLanguage, setShowLanguage] = useState(false)
  const [showQrCode, setShowQrCode] = useState(false)
  const [showBannerAlert, setShowBannerAlert] = useState(false)

  return (
    <div className="header">
      <div className="container">
        {/* Start Link Bar */}
        <div className="link-bar">
          {/* Left-link-bar */}
          <div className="left-link-bar">
            <div className="link-bar-items">
              <a href="/">Seller Centre</a>
            </div>
            <div className="link-bar-items">
              <a href="/">เริ่มต้นขายสินค้า</a>
            </div>
            <div className="link-bar-items link-bar-relative" onMouseEnter={() => setShowQrCode(true)} onMouseLeave={() => setShowQrCode(false)}>
              <a href="/">ดาวน์โหลด</a>
              <div className='qr-code-popup' style={showQrCode ? { display: 'block' } : { display: 'none' }}>
                <img src={qrCode} alt='QR-Code' />
                <div className='qr-code-list'>
                  <span style={{ color: 'var(--c-primary)' }}>Appstore</span>
                  <span style={{ color: 'var(--c-primary)' }}>Google Play</span>
                </div>
              </div>
            </div>
            <div className="link-bar-items">
              <span>ติดตามเราบน</span>
            </div>
            <div className="link-bar-items">
              <a href="https://th-th.facebook.com/"><i className="link-bar-icon bx bxl-facebook-circle"></i></a>
            </div>
            <div className="link-bar-items">
              <a href="https://www.instagram.com/"><i className="link-bar-icon bx bxl-instagram-alt"></i></a>
            </div>
          </div>
          {/* Right-link-bar */}
          <div className="right-link-bar">
            <div className="link-bar-items link-bar-relative" onMouseEnter={() => setShowBannerAlert(true)} onMouseLeave={()=>setShowBannerAlert(false)}>
              <a href="/"><i className="link-bar-icon bx bx-bell"></i>การแจ้งเตือน</a>
              <div className='banner-alert' style={showBannerAlert ? { display: "block" } : { display: "none" }}>
                <img src={BannerLogin} alt='banner Alert' />
                <span>ลงชื้อเข้าใช้งานเพือดูการแจ้งเตือน</span>
                <div className='banner-alert-list'>
                  <a href='/' >สมัครใหม่</a>
                  <a href='/' >เข้าสู่ระบบ</a>
                </div>
              </div>
            </div>
            <div className="link-bar-items">
              <a href="/"><i className="link-bar-icon bx bx-question-mark"></i>ช่วยเหลือ</a>
            </div>
            <div className="link-bar-items link-bar-relative" onMouseEnter={() => setShowLanguage(true)} onMouseLeave={() => (setShowLanguage(false))}>
              <i className="link-bar-icon bx bx-world"></i>
              <span>{language}</span>
              <div className="language-list" style={showLanguage ? { display: 'block' } : { display: 'none' }}>
                <button className='language-item' onClick={() => { setLanguage('ไทย') }}>ไทย</button>
                <button className='language-item' onClick={() => { setLanguage('Eng') }}>Eng</button>
              </div>
            </div>
            <div className='link-bar-account'>
              <div className="link-bar-items">
                <a href="/">สมัครใหม่</a>
              </div>
              <div className='link-bar-line'></div>
              <div className="link-bar-items">
                <a href="/">เข้าสู่ระบบ</a>
              </div>
            </div>
          </div>
        </div>
        {/* End Link Bar */}

        {/* Start Head Bar */}
        <div className='head-list'>
          <div><img src={shopLogo} style={{ width: '100px' }} alt='logo' /></div>
          <div>search</div>
          <div>Cart</div>
        </div>
      </div>
    </div>
  );
};
export default Herder;
