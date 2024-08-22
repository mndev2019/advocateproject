//import React from 'react'
import  { useEffect, useState } from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
//import { ArrowRightOutlined } from '@ant-design/icons';
import ServiceBox from './ServiceBox';
import { get_services } from '../../utils';
import { RightOutlined } from '@ant-design/icons';
const Services = () => {
    const [data, setData] = useState([]);
    const getdata = async () => {
        const res = await get_services();
        setData(res.data)
    }
    useEffect(() => {
        getdata();
    }, []);
    var settings = {
        dots: false,
        navs: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
       
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    navs: false,
                    dots: false
                }
            },
            {
                breakpoint: 480,

                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    navs: false,
                    dots: false
                }
            }
        ]
    };
  return (
    <>
        <section className="space bg-blue-gray-50">
                <div className="container mx-auto">
                    <div className="">
                        <div className="w-full mb-9">
                            <h2 className='lg:text-[3rem] sectiontitle text-center text-[1.5rem] lg:mb-4 mb-4 font-semibold text-gray-900'>
                                Our Expertise
                            </h2>
                        </div>
                        <div className="w-full">
                            <Slider {...settings}>
                                {
                                    [...data].toReversed().map((serv) => (
                                        <>
                                            <ServiceBox service={serv} />
                                        </>
                                    ))
                                }
                            </Slider>
                        </div>
                        <div className="w-full mt-9">
                            <div className="text-center">
                                <Link to={'/services'} className="bg-gray-800    text-white transition-all duration-100 hover:bg-gray-300 hover:text-black shadow-sm shadow-blue-gray-900 inline-flex items-center gap-3 t-12 uppercase tracking-wide px-10 py-5 rounded-full">
                                    View All  <span className='rotate-[-45deg]'><RightOutlined/></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Services