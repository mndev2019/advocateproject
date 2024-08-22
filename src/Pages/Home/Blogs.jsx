//import React from 'react'
//import moment from 'moment'
import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { get_blogs} from 'utils'
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import BlogBox from 'pages/blogs/BlogBox';

const Blogs = () => {
    const [data, setData] = useState([]);
    const getdata = async () => {
        const res = await get_blogs();
        setData(res.data)
    }
    useEffect(() => {
        getdata();
    }, []);
    var settings = {

        dots: false,
        navs: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    navs: true
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
     <section className='bg-blue-gray-50 pt-[2rem] pb-[5rem]'>
                <div className="container" id="services">
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <h2 className='lg:text-[3rem] text-center text-[1.5rem] lg:mb-4 mb-4 font-semibold text-gray-900'>
                                Knowledge Corner
                            </h2>
                        </div>

                        <div className="w-full mb-4">

                            <Slider {...settings}>
                                {
                                    [...data].map(blg => (
                                        <>
                                            
                                                <div className="w-full h-full  overflow-hidden">
                                                    <Link className='block w-full h-full bg-white' to={'/blogs/' + blg.url}>

                                                            <BlogBox blog={blg}/>

                                                        
                                                    </Link>


                                                </div>
                                            
                                        </>
                                    ))
                                }

                            </Slider>
                        </div>
                        <div className="w-full">
                            <div className="text-center">
                                <Link to={'/knowledge-corner'} className="bg-gray-800    text-white transition-all duration-100 hover:bg-gray-300 hover:text-black shadow-sm shadow-blue-gray-900 inline-flex items-center gap-3 t-12 uppercase tracking-wide px-10 py-5 rounded-full">
                                    View All  <span className='rotate-[-45deg]'><FontAwesomeIcon icon={faArrowRight} /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
   </>
  )
}

export default Blogs