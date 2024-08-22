//import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { EyeFilled, LinkedinFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { get_teams, url } from "../../utils";

const Teams = () => {
    const [data, setData] = useState([]);
    const getdata = async () => {
        const res = await get_teams();
        setData(res.data)
    }
    useEffect(() => {
        getdata();
    }, []);
    var settings = {
        dots: false,
       
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    navs: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    navs: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    navs: true,
                    dots: false
                }
            }
        ]
    };
    return (
        <>
            <section className='bg-blue-gray-100/70 pt-[2rem] pb-[5rem]'>
                <div className="container">
                    <div className="flex">
                        <div className="w-full">

                            <h2 className='lg:text-[3rem] text-center text-[1.5rem] lg:mb-4 mb-4 font-semibold text-gray-900'>
                                Our Valuable Team
                            </h2>
                            <Slider {...settings}>
                                {
                                    [...data].map(testm => (
                                        <>
                                            <div className=''>
                                                <div className="w-full profilebox border overflow-hidden">

                                                    <div className="block relative">
                                                        <div className="w-full">
                                                            <img src={url + '/public/uploads/' + testm.profile_img} alt="" className="w-full" />
                                                        </div>

                                                        <div className="overlay absolute left-0  top-0  h-full bg-blue-gray-900/80 backdrop-blur-sm z-10">
                                                            <div className="absolute top_overlay  flex flex-col  justify-center p-2 end-3 text-center z-20  items-center text-white">
                                                                <a href={testm.linkedin} className='text-[2rem] block mb-3'>
                                                                    <LinkedinFilled />
                                                                </a>
                                                                <a href={'/teams/'+testm.url} className='text-[2rem] block mb-3'>
                                                                    <EyeFilled />
                                                                </a>
                                                            </div>
                                                            <div className="absolute bottom_overlay text-white w-full bottom-3 left-0 text-center">
                                                                <h4 className='text-[1.4rem] font-bold'>{testm.name}</h4>
                                                                <p> <span className="inline-block w-2 h-2 me-2 rounded-full bg-white"></span> {testm.postname}</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="w-full p-2">
                                                        <Link to={'/teams/'+testm.url} className="w-full  h-full bg-black text-white p-2 block text-center">View Profile</Link>
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

export default Teams
