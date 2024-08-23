import React from 'react'
import { get_blogs } from '../../utils';
import {  useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import BlogBox from './BlogBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HomeBlog = () => {
    const [data, setData] = useState([]);
    const get_all_blogs = async () => {
        const res = await get_blogs();
        setData(res);
    }
    React.useEffect(() => {
        get_all_blogs();
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
            <section className="lg:p-20 md:p-10 p-5">
                <div className="container mx-auto">
                <div className="w-full mb-9">
                            <h2 className='lg:text-[3rem] sectiontitle text-center text-[1.5rem] lg:mb-4 mb-4 font-semibold text-gray-900'>
                                Blogs & Articles
                            </h2>
                        </div>
                    <div className="w-full">
                        <Slider {...settings}>

                            {
                                data?.data && data?.data.map((blg) => (
                                    <>
                                        <div className=" w-full h-full">
                                            <Link className=' w-full h-full' to={'/blogs/' + blg.url}>
                                                <div className="m-2">
                                                    <BlogBox blog={blg} />
                                                </div>
                                            </Link>
                                        </div>
                                    </>
                                ))
                            }

                        </Slider>

                    </div>
                    <div className="w-full">
                            <div className="text-center">
                                <Link to={'/knowledge-corner'} className="bg-gray-800 mt-5   text-white transition-all duration-100 hover:bg-gray-300 hover:text-black shadow-sm shadow-blue-gray-900 inline-flex items-center gap-3 t-12 uppercase tracking-wide px-10 py-5 rounded-full">
                                    View All  <span className='rotate-[-45deg]'><FontAwesomeIcon icon={faArrowRight} /></span>
                                </Link>
                            </div>
                        </div>
                </div>
            </section>
        </>
    )
}

export default HomeBlog