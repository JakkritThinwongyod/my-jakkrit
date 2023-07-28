import {useState} from 'react';

const Herder = () => {

  const [language,setLanguage] = useState('ไทย')

  const [changeLanguage,setChangeLanguage] = useState(false)

  const switchLanguage =()=>{
    setChangeLanguage(!changeLanguage)
  }

  return (
    <div className="header">
      <div className="container">
        <div className="link-bar">
          {/* Left-link-bar */}
          <div className="left-link-bar">
            <div className="link-bar-items">
              <a href="/">Seller Centre</a>
            </div>
            <div className="link-bar-items">
              <a href="/">เริ่มต้นขายสินค้า</a>
            </div>
            <div className="link-bar-items">
              <a href="/">ดาวน์โหลด</a>
            </div>
            <div className="link-bar-items">
              <span>ติดตามเราบน</span>
            </div>
            <div className="link-bar-items">
              <a href="/">
                <i className="link-bar-icon bx bxl-facebook-circle"></i>
              </a>
            </div>
            <div className="link-bar-items">
              <a href="/">
                <i className="link-bar-icon bx bxl-instagram-alt"></i>
              </a>
            </div>
            <div className="link-bar-items">
              <a href="/">
                <i className="link-bar-icon bx bxs-message-dots"></i>
              </a>
            </div>
          </div>
          {/* Right-link-bar */}
          <div className="right-link-bar">
            <div className="link-bar-items">
              <a href="/">
                <i className="link-bar-icon bx bx-bell"></i>การแจ้งเตือน
              </a>
            </div>
            <div className="link-bar-items">
              <a href="/">
                <i className="link-bar-icon bx bx-question-mark"></i>ช่วยเหลือ
              </a>
            </div>
            <div className="link-bar-items link-bar-change-language">
              <i className="link-bar-icon bx bx-world"></i>
              <span className='text-change-language' onClick={switchLanguage}>{language}</span>
              <ul className="language-list" style={changeLanguage ? {display:'block'} :{display:'none'} }>
              {/* style={changeLanguage === 'on' ? {display:'box'} : {display:'none'}} */}
                <li className='language-item'>
                  <a onClick={()=>{setLanguage('ไทย')}}>ไทย</a>
                </li>
                <li className='language-item'>
                <a onClick={()=>{setLanguage('Eng')}}>Eng</a>
                </li>
              </ul>
            </div>
            <div className="link-bar-items">
              <a href="/">สมัครใหม่</a>
            </div>
            <div className="link-bar-items">
              <a href="/">เข้าสู่ระบบ</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Herder;
