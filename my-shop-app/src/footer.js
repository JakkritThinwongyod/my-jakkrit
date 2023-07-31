import imgPay01 from './image/pay-01.png'
import imgPay02 from './image/pay-02.png'
import imgPay03 from './image/pay-03.png'
import imgPay04 from './image/pay-04.png'
import imgPay05 from './image/pay-05.png'
import imgPay06 from './image/pay-06.png'
import imgPay07 from './image/pay-07.png'
import imgPay08 from './image/pay-08.png'
import imgPay09 from './image/pay-09.png'
import imgPay10 from './image/pay-10.png'
import imgPay11 from './image/pay-11.png'
import imgPay12 from './image/pay-12.png'

import imgdelivery01 from './image/delivery-01.png'
import imgdelivery02 from './image/delivery-02.png'
import imgdelivery03 from './image/delivery-03.png'
import imgdelivery04 from './image/delivery-04.png'
import imgdelivery05 from './image/delivery-05.png'
import imgdelivery06 from './image/delivery-06.png'
import imgdelivery07 from './image/delivery-07.png'
import imgdelivery08 from './image/delivery-08.png'

import imgQrCode from './image/qr-code.svg'
import imgAppGallery from './image/appGallery.png'
import imgAppStore from './image/appStore.png'
import imgGooglePlay from './image/googlePlay.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="food-list">
                    <div className="footer-item">
                        <span className="footer-item-title">ศูนย์ช่วยเหลือ</span>
                        <div className="footer-item-link column">
                            <a href="/">Help Centre</a>
                            <a href="/">สั่งซื้อสินค้าอย่างไร</a>
                            <a href="/">เริ่มขายสินค้าอย่างไร</a>
                            <a href="/">ช่องทางการชำระเงินใน Shop</a>
                            <a href="/">Shop Coins</a>
                            <a href="/">การจัดส่งสินค้า</a>
                            <a href="/">การคืนเงินและคืนสินค้า</a>
                            <a href="/">การันตีโดย Shopee คืออะไร?</a>
                            <a href="/">ติดต่อ Shopee</a>
                        </div>
                    </div>
                    <div className="footer-item">
                        <span className="footer-item-title" >เกี่ยวกับ SHOP</span>
                        <div className="footer-item-link column">
                            <a href="/">เกี่ยวกับเรา</a>
                            <a href="/">โปรแกรม Affiliate</a>
                            <a href="/">ร่วมงานกับเรา</a>
                            <a href="/">นโยบายของ Shop</a>
                            <a href="/">นโยบายความเป็นส่วนตัว</a>
                            <a href="/">Shop Blog</a>
                            <a href="/">Shop Mall</a>
                            <a href="/">Seller Centre</a>
                            <a href="/">Flash Deals</a>
                            <a href="/">ผู้ติดต่อออนไลน์</a>
                        </div>
                    </div>
                    <div className="footer-item">
                        <span className="footer-item-title">วิธีการชำระเงิน</span>
                        <div className="footer-item-link wrap">
                            <img className="footer-item-pay-img" src={imgPay01} alt="logo" />
                            <img className="footer-item-pay-img" src={imgPay02} alt="logo" />
                            <img className="footer-item-pay-img" src={imgPay03} alt="logo" />
                            <img className="footer-item-pay-img" src={imgPay04} alt="logo" />
                            <img className="footer-item-pay-img" src={imgPay05} alt="logo" />
                            <img className="footer-item-pay-img" src={imgPay06} alt="logo" />
                            <img className="footer-item-pay-img" src={imgPay07} alt="logo" />
                            <img className="footer-item-pay-img" src={imgPay08} alt="logo" />
                            <img className="footer-item-pay-img" src={imgPay09} alt="logo" />
                            <img className="footer-item-pay-img" src={imgPay10} alt="logo" />
                            <img className="footer-item-pay-img" src={imgPay11} alt="logo" />
                            <img className="footer-item-pay-img" src={imgPay12} alt="logo" />
                        </div>
                        <br />
                        <span className="footer-item-title">บริการจัดส่ง</span>
                        <div className="footer-item-link wrap">
                            <img className="footer-item-pay-img" src={imgdelivery01} alt="logo" />
                            <img className="footer-item-pay-img" src={imgdelivery02} alt="logo" />
                            <img className="footer-item-pay-img" src={imgdelivery03} alt="logo" />
                            <img className="footer-item-pay-img" src={imgdelivery04} alt="logo" />
                            <img className="footer-item-pay-img" src={imgdelivery05} alt="logo" />
                            <img className="footer-item-pay-img" src={imgdelivery06} alt="logo" />
                            <img className="footer-item-pay-img" src={imgdelivery07} alt="logo" />
                            <img className="footer-item-pay-img" src={imgdelivery08} alt="logo" />

                        </div>
                    </div>
                    <div className="footer-item">
                        <span className="footer-item-title">ติดตามเรา</span>
                        <div className="footer-item-link column">
                            <a href="/"><i className='bx bxl-facebook-circle'></i>Facebook</a>
                            <a href="/"><i className='bx bxl-instagram-alt' ></i>Instagram</a>
                            <a href="/"><i className='bx bxl-linkedin-square' ></i>LinkedIn</a>
                        </div>
                    </div>
                    <div className="footer-item">
                        <span className="footer-item-title">ดาวน์โหลดแอปพลิเคชั่น</span>
                        <div className="footer-item-link">
                            <img className="footer-item-qrcode-img" src={imgQrCode} alt="logo" />
                            <div className='footer-item-download-app-list'>
                                <img className="footer-item-download-app-item" src={imgAppStore} alt="logo" />
                                <img className="footer-item-download-app-item" src={imgGooglePlay} alt="logo" />
                                <img className="footer-item-download-app-item" src={imgAppGallery} alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="footer-copy-right">
                    <span>© 2023 Shop</span>
                </div>
            </div>
        </div>
    )
}
export default Footer;