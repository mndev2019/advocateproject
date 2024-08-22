//import React from 'react'
//import quoteimg from 'assets/img/left.png'
//import tprofile from 'assets/img/profile.jpg'
import Slider from "react-slick";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { get_testimonilals, url } from "../../utils";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import HTMLReactParser from "html-react-parser/lib/index";
const Testimonials = () => {
    const [data, setData] = useState([]);
    const getdata = async () => {
        const res = await get_testimonilals();
        setData(res.data)
    }
    useEffect(() => {
        getdata();
    }, []);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className='bg-blue-gray-50 pt-[2rem] pb-[5rem]'>
                <div className="container">
                    <div className="flex">
                        <div className="w-full">
                            <h2 className='lg:text-[3rem] text-center text-[1.5rem] lg:mb-4 mb-4 font-semibold text-gray-900'>
                                Some words from our clients
                            </h2>
                            <Slider {...settings}>
                                {
                                    [...data].map((testm) => (
                                        <>
                                            <div className='p-4'>
                                                <div className="w-full p-4 rounded-xl border shadow-sm bg-white shadow-blue-gray-700">
                                                    <div className="w-full mb-9">
                                                        <div className="flex">
                                                            <div className="w-[80px] me-3">
                                                                <img src={url + '/public/uploads/' + testm.image} alt="" className="w-[80px] h-[80px] rounded-full" />
                                                            </div>
                                                            <div className="inline-block">
                                                                <h4 className='text-[1.4rem] font-bold mb-1'>{testm.name}</h4>
                                                                <p className='text-[14px] font-light text-blue-gray-700'>Chief Finance</p>
                                                                <p className='text-orange-500'>
                                                                    <StarFilled />
                                                                    <StarFilled />
                                                                    <StarFilled />
                                                                    <StarFilled />
                                                                    <StarOutlined />
                                                                </p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="w-full mt-9">
                                                        <p className='text-lg tracking-wider'>{HTMLReactParser(testm.description ?? "Loading...")}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                }
                            </Slider>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Testimonials
