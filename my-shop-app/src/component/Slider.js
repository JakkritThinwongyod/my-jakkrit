// import {useState ,useEffect} from 'react';
import { useState } from 'react'
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
    { image: imgSlide01 },
    { image: imgSlide02 },
    { image: imgSlide03 },
    { image: imgSlide04 },
    { image: imgSlide05 },
    { image: imgSlide06 },
    { image: imgSlide07 },
    { image: imgSlide08 },
    { image: imgSlide09 },
    { image: imgSlide10 },
    { image: imgSlide11 },
    { image: imgSlide12 },
];

const Slider = () => {

    const [current, setCurrent] = useState(0);
    const length = images.length

    const prevSlide = () => {
        current === 0 ? setCurrent(length - 1) : setCurrent(current - 1)
    }
    const nextSlide = () => {
        current === length - 1 ? setCurrent(0) : setCurrent(current + 1)

    }
    return (
        <div className='home-slide'>
            {/* radio Check Start */}
            {/* <div>
                <input type='radio' name='slideImg' id='slideImg01' onChange={() => { setCurrent(0) }} />
                <input type='radio' name='slideImg' id='slideImg02' onChange={() => { setCurrent(1) }} />
                <input type='radio' name='slideImg' id='slideImg03' onChange={() => { setCurrent(2) }} />
                <input type='radio' name='slideImg' id='slideImg04' onChange={() => { setCurrent(3) }} />
                <input type='radio' name='slideImg' id='slideImg05' onChange={() => { setCurrent(4) }} />
            </div>
            <div>
                <label for="slideImg01">0</label>
                <label for="slideImg02">0</label>
                <label for="slideImg03">0</label>
                <label for="slideImg04">0</label>
                <label for="slideImg05">0</label>
            </div> */}
            {/* radio Check End */}
            <div onClick={prevSlide} className='slide-btn-left'>
                <i className='bx bxs-left-arrow' ></i>
            </div>
            <div onClick={nextSlide} className='slide-btn-right'>
                <i className='bx bxs-right-arrow' ></i>
            </div>

            <div className="slide-list">
                {images.map((data, index) => {
                    return (
                        <div key={index} className={index === current ? "slide-item slide-item-active" : "slide-item"}>
                            {index === current &&
                                (
                                    <img src={data.image} alt={data.image} className="slide-img" />
                                )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Slider;