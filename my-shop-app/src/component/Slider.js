import { useState, useEffect } from 'react'
import imgSlide01 from '../image/slide-01.jpg'
import imgSlide02 from '../image/slide-02.jpg'
import imgSlide03 from '../image/slide-03.jpg'
import imgSlide04 from '../image/slide-04.jpg'
import imgSlide05 from '../image/slide-05.jpg'
import imgSlide06 from '../image/slide-06.jpg'
import imgSlide07 from '../image/slide-07.jpg'
import imgSlide08 from '../image/slide-08.jpg'
import imgSlide09 from '../image/slide-09.jpg'
import imgSlide10 from '../image/slide-10.jpg'
import imgSlide11 from '../image/slide-11.jpg'
import imgSlide12 from '../image/slide-12.jpg'

const images = [
    { image: imgSlide01 }, { image: imgSlide02 }, { image: imgSlide03 }, { image: imgSlide04 }, { image: imgSlide05 }, { image: imgSlide06 }, { image: imgSlide07 }, { image: imgSlide08 }, { image: imgSlide09 }, { image: imgSlide10 }, { image: imgSlide11 }, { image: imgSlide12 }
];

const Slider = () => {

    const [current, setCurrent] = useState(0);
    const length = images.length
    const intervalTime = 3000;

    const prevSlide = () => {
        current === 0 ? setCurrent(length - 1) : setCurrent(current - 1)
    }
    const nextSlide = () => {
        current === length - 1 ? setCurrent(0) : setCurrent(current + 1)
    }

    const autoChangeSlide = () => {
        nextSlide();
    }
    useEffect(() => {
        const interval = setInterval(autoChangeSlide, intervalTime);
        return () => clearInterval(interval)
    }, [current]);

    return (
        <div className="slide-list">
            <>
                {images.map((data, index) => {
                    return (
                        <div key={index} className="slide-item">
                            <img src={data.image} alt={data.image} className="slide-img" style={{ marginLeft: `-${current}00%`, transition: 'all 0.6s ease' }} />
                        </div>
                    )
                })}
            </>
            <div onClick={prevSlide} className='slide-btn-left'>
                <i className='bx bxs-left-arrow' ></i>
            </div>
            <div onClick={nextSlide} className='slide-btn-right'>
                <i className='bx bxs-right-arrow' ></i>
            </div>
            <div className='slide-radio'>
                {images.map((data, index) => {
                    return (
                        <div key={index}>
                            <input style={{ display: 'none' }} type='radio' name='slideImg' id={`slideImg${index + 1}`} onChange={() => { setCurrent(index) }} />
                            <label className={current === index ? 'slide-radio-btn slide-radio-btn-active' : 'slide-radio-btn'} htmlFor={`slideImg${index + 1}`}></label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Slider;