import React from 'react'

import img1 from '../../public/39cfa9b9-ceee-43df-b9e4-ac1fd3761831_PK-1976-688.jpg_2200x2200q80.jpg_.webp'
import img2 from '../../public/67e65f49-40f1-4977-8060-779a0979b7b8_PK-1976-688.jpg_2200x2200q80.jpg_.webp'
import img3 from '../../public/b4d9663c-dda0-4506-b77b-379566fdedb5_PK-1976-688.jpg_2200x2200q80.jpg_.webp'
import img4 from '../../public/fc495642-994b-4dc2-8322-630928bea9e3_PK-1976-688.jpg_2200x2200q80.jpg_.webp'
import Image from 'next/image'


export default function Carousel() {
  return (
    <div>
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
            <Image
            src={img1}
            alt='1'
            className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <Image
            alt='2'
            src={img2}
            className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
            <Image
            alt='3'
            src={img3}
            className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
            <Image
            alt='4'
            src={img4}
            className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
        </div>
    </div>
  )
}