import { useState } from 'react';
import shopLogo from './image/shop-logo.svg'
import qrCode from './image/qr-code.svg'
import BannerLogin from './image/banner-log-in-01.svg'

const Herder = () => {

  const [language, setLanguage] = useState('ไทย')
  const [showLanguage, setShowLanguage] = useState(false)
  const [showQrCode, setShowQrCode] = useState(false)
  const [showBannerAlert, setShowBannerAlert] = useState(false)
  const [orderCartList,setOrderCartList] = useState(false)

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
            <div className="link-bar-items link-bar-relative" onMouseEnter={() => setShowBannerAlert(true)} onMouseLeave={() => setShowBannerAlert(false)}>
              <a href="/"><i className="link-bar-icon bx bx-bell"></i>การแจ้งเตือน</a>
              <div className='banner-alert' style={showBannerAlert ? { display: "flex"} : { display: "none" }}>
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
          <div className='head-item' style={{ width: '200px', display: "flex", justifyContent: 'center', padding: '1rem' }}>
            <img src={shopLogo} style={{ width: '70px' }} alt='logo' />
          </div>
          <div className='head-item' style={{ display: "flex", alignItems: 'flex-end' }}>
            <div className='search-list'>
              <div className='search-item search-box' >
                <input type='text' placeholder='ค้นหา' className='search-item-input' />
                <button className='search-item-btn'><i className='bx bx-search-alt' ></i></button>
              </div>
              <div className='search-item'>
                <div className='search-item-link-list'>
                  <a href='/'>เสื้อกันหนาว</a>
                  <a href='/'>1 บาท</a>
                  <a href='/'>กางเกง</a>
                  <a href='/'>เสื้อน่ารัก</a>
                  <a href='/'>กระเป๋า</a>
                  <a href='/'>พาวเวอร์แบงค์</a>
                  <a href='/'>รองเท้าผ้าใบ</a>
                  <a href='/'>ชุดเซ็ท</a>
                  <a href='/'>ขนม</a>
                  <a href='/'>ลิป</a>
                  <a href='/'>หูฟังบลูทูธ</a>
                  <a href='/'>iPhone 11</a>
                  <a href='/'>กระเป๋าเป้</a>
                  <a href='/'>พวงกุญแจ</a>
                  <a href='/'>เสื้อคลุม</a>
                </div>
              </div>
            </div>
          </div>
          <div className='head-item order-cart-list ' onMouseEnter={()=>setOrderCartList(true)} onMouseLeave={()=>setOrderCartList(false)}>
            <i className='bx bx-cart-alt' ></i>
            <div className='order-cart-box' style={orderCartList ? {display:'flex'}:{display:'none'}}>
              <img src={BannerLogin} style={{width:'10rem'}} alt='Banner Login'/>
              <span>ยังไม่มีสินค้าในตะกล้า</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Herder;
