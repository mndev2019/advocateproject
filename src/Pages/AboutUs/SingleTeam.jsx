//import React from 'react'
import PageBanner from 'layouts/PageBanner'

import contactbanner from 'assets/img/contactbanner.jpg'
import { Link, useParams } from 'react-router-dom'
import { get_profile, url } from 'utils'
import HTMLReactParser from 'html-react-parser'
import quoteimg from 'assets/img/quote.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogBox from 'pages/blogs/BlogBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'

const SingleTeam = () => {
    const parmas = useParams();
    const slug = parmas.url;
    const [team, setTeam] = useState(null);
    const [fimage, setFimage] = useState('');
    const [servs, setServs] = useState([]);

    const get_tems_profile = async () => {
        const res = await get_profile(slug);
        setTeam(res.data)
    }
    useEffect(() => {
        get_tems_profile();
    }, []);
    var settings = {

        dots: false,
        navs: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [

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
    useEffect(() => {
        if (team) {
            setFimage(`url('${url + '/public/uploads/' + team?.profile_img}')`);
            setServs(team?.services)
        }

    }, [team]);


    return (
        <>
            <PageBanner title={team?.name ?? 'Loading...'} links={`Teams, ${team?.name ?? 'Loading...'}`} banner={contactbanner} />
            {
                team && (
                    <>

                        <section className="py-9 profileboxsection" style={{ backgroundImage: fimage }}>
                            <div className="container">
                                <div className="flex">
                                    <div className="md:w-1/3 md:block hidden">
                                        <div className="w-full h-full profilebox" >

                                        </div>
                                    </div>
                                    <div className="md:w-2/3 w-full px-3 md:mt-0 mt-[170px]">
                                        <div className="w-full">
                                            <div className="w-full mb-9 pb-5 border-b border-black">
                                                <div className="flex justify-between">
                                                    <div className="inline-block">
                                                        <h4 className='text-[1.4rem] font-bold  '>{team.name}</h4>
                                                        <p className=' text-[17px] font-bold text-black'> <span className="inline-block w-2 h-2 me-2 rounded-full bg-blue-gray-900"></span> {team.postname}</p>
                                                    </div>
                                                    <div className="inline-flex text-2xl gap-4">
                                                        <Link to={`mailto:${team.email}`}>
                                                            <FontAwesomeIcon icon={faEnvelope} />
                                                        </Link>
                                                        <Link to={`tel:${team.mobile}`}>
                                                            <FontAwesomeIcon icon={faPhone} />
                                                        </Link>
                                                        <Link target='_blank' to={team.linkedin}>
                                                            <FontAwesomeIcon icon={faLinkedin} />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full my-5 teamExpertise">
                                                <label htmlFor="" className='inline-block mb-4 border-b border-black'>Expertise</label>
                                                <ul className='mb-5 flex gap-3 flex-wrap'>

                                                    {
                                                        servs.length && servs.map((ser) => (
                                                            <>
                                                                <li>
                                                                <Link to={'/services/'+ser?.url} className='text-blue-gray-900'>
                                                                        {ser.name}
                                                                    </Link>
                                                                </li>
                                                            </>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                            <div className="w-full mt-20 teamDescription bg-gray-200 rounded-xl p-5">
                                                {HTMLReactParser(team?.description ?? 'loading...')}
                                            </div>
                                            <div className="w-full speclQuote my-9">
                                                <p className='relative py-6 px-9'>
                                                    <div className="absolute -top-[2rem] start-0">
                                                        <img src={quoteimg} alt="quote" width={70} className="max-w-full" />
                                                    </div>
                                                    {HTMLReactParser(team?.quote ?? 'loading...')}
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {
                            team?.qualification && (
                                <>
                                    <section className="py-9 ">
                                        <div className="container">
                                            <div className="flex flex-wrap">
                                                <div className="w-full mb-9">
                                                    <h2 className='lg:text-[3rem] sectiontitle text-center text-[1.5rem] lg:mb-4 mb-4 font-semibold text-gray-900'>
                                                        Qualification
                                                    </h2>
                                                </div>
                                                <div className="w-full teamDescription">
                                                    <div className="w-full px-4">

                                                        {HTMLReactParser(team?.qualification ?? 'loading...')}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </section>
                                </>
                            )
                        }
                        {
                            team?.affiliaction && (
                                <>
                                    <section className="py-9 ">
                                        <div className="container">
                                            <div className="flex flex-wrap">
                                                <div className="w-full mb-9">
                                                    <h2 className='lg:text-[3rem] sectiontitle text-center text-[1.5rem] lg:mb-4 mb-4 font-semibold text-gray-900'>
                                                        Affiliations
                                                    </h2>
                                                </div>
                                                <div className="w-full teamDescription">
                                                    <div className="w-full px-4">

                                                        {HTMLReactParser(team?.affiliaction ?? 'loading...')}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </section>
                                </>
                            )
                        }

                        {
                            team?.blogs.length > 0 && (
                                <>

                                    <section className="py-9">
                                        <div className="container">
                                            <div className="w-full mb-9">
                                                <h2 className='lg:text-[3rem] sectiontitle text-center text-[1.5rem] lg:mb-4 mb-4 font-semibold text-gray-900'>
                                                    Resources
                                                </h2>
                                            </div>
                                            <div className="w-full">
                                                <Slider {...settings}>
                                                    {
                                                        team?.blogs.map(blg => (
                                                            <>
                                                                <Link className='block w-full h-full' to={'/blogs/' + blg.url}>


                                                                    <BlogBox blog={blg} />
                                                                </Link>
                                                            </>
                                                        ))
                                                    }

                                                </Slider>
                                            </div>
                                        </div>
                                    </section>
                                </>
                            )
                        }
                    </>
                )
            }
        </>
    )
}

export default SingleTeam
