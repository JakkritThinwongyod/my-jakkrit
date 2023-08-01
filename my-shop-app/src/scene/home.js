import Slider from "../component/Slider";
import imgBanner01 from '../image/banner-01.jpg'
import imgBanner02 from '../image/banner-02.jpg'
const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <div className='full-home-banner'>
                    <div className="home-slide"><Slider /></div>
                    <div className="home-banner-list">
                        <img className="home-banner-item" src={imgBanner01} alt="banner"/>
                        <img className="home-banner-item" src={imgBanner02} alt="banner"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;