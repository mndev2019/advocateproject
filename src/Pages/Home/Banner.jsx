//import React from 'react'
import banner1 from '../../assets/img/banner1.jpg'
import banner2 from '../../assets/img/banner2.jpeg'
import banner3 from '../../assets/img/banner3.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import 'animate.css';
//import { Link } from '../../../node_modules/react-router-dom/dist/index';
//import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index';
//import { faArrowRight } from '../../../node_modules/@fortawesome/free-solid-svg-icons/index';

const Banner = () => {
    const banners = [
        {
            image: banner1,
            h4: "We are responsive and operate to provide clients with innovative solutions."
        },
        {
            image: banner2,
            h4: "We solve your legal problem with utmost energy and unmatchable execution."
        },
        {
            image: banner3,
            h4: "Our expertise and experience across sectors brings a true partnership with every engagement."
        }

    ];
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <section className='overflow-hidden'>
                <Slider {...settings}>
                    {
                        banners.map((ban, ind) => (
                            <div key={ind} className="item relative w-full h-full">
                                <div className="wrapBody absolute top-0 start-0 w-full h-full">
                                    <div className="flex w-full h-full justify-center items-center ">
                                        <div className=" text-center  textcontent lg:w-[50%] w-[100%] h-auto lg:p-2 p-4 overflow-hidden">
                                            <div className="w-full text-center">
                                                <h4 className="lg:text-[3rem] mb-8 text-white font-bold  animate__animated animate__zoomInDown">
                                                    {ban.h4}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img src={ban.image} alt="" className="w-full lg:h-[650px] h-[470px] object-cover" />
                            </div>
                        ))
                    }
                </Slider>
            </section>

        </>
    )
}

export default Banner