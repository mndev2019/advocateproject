//import React from 'react'

//import about1 from 'assets/img/about1.jpg'
//import about2 from 'assets/img/about2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useRef } from 'react';
const About = () => {
    const location = useLocation();
    const pathname = location.pathname;
   
    const dref = useRef(null);
    //const oneref = useRef(null);

    const ftarr = [
        {
            title: "Legal Professionals on board",
            digit: "25"
        },
        {
            title: "Presence of LACCO Legal in Indian Cities",
            digit: "10"
        },
        {
            title: "cumulative years of experience",
            digit: "80"
        }
    ]
    return (
        <>
            <section className='space aboutSection bg-blue-gray-50'>
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 grid-cols-1">

                        <div className={pathname == "/" ? 'col-span-1' : 'col-span-2'}>
                            <div className="w-full h-full">

                                <h2 className='lg:text-[3rem] capitalize sectiontitle text-center text-[1.5rem] lg:mb-20 mb-4  font-semibold text-gray-900'>
                                    It is always better to know the credentials of your attorney
                                </h2>
                                <p className='text-[18px]  tracking-wider  mb-8'>
                                    LACCO stands for Litigation and Corporate Compliances.  LACCO Legal is an emerging full service corporate & commercial law firm with a team of seasoned lawyers having expertise in Litigation, Arbitration, Insolvency & Bankruptcy, Corporate Advisory, Real Estate, Consumer Protection, and Media/IT industry.
                                </p>
                                <p className="text-[18px] tracking-wider mb-8">
                                    Our services cover a wide range of industry areas such as Financial Services, Power, Telecom, Insurance, Consumer Durables, IT, Media, Transport, Energy, Infrastructure, Environment, and Agricultural.
                                </p>
                                {
                                    pathname == "/about-us" && (
                                        <>
                                            <p className="text-[18px] tracking-wider  mb-8">
                                                In addition to our key areas of practice, LACCO Legal believes, that every human being deserves to be respected, and thus, being in this Nobel profession, LACCO Legal aims to provide pro – bono services to the one who are deprived of their human rights.
                                            </p>
                                            <p className="text-[18px] tracking-wider  mb-8">
                                                At LACCO Legal, we foster a culture of collaboration, prioritizing client-centric solutions. We curate specialized teams of experts tailored to address unique client issues effectively. Our commitment to delivering legal and commercial solution goes beyond conventional approaches, understanding and aligning with each client strategic goals and business needs.
                                            </p>
                                            <p className="text-[18px] tracking-wider  mb-8">
                                                We have adopted a strategy that calls for technical proficiency and service delivery in addition to an unmatched depth of understanding in each of our practice areas. We are able to provide accurate, dependable, quick, and economical counsel to a wide range of industry groups and sectors because of this dedication. Our teams wide range of experiences and knowledge allows us to stay tuned in to the changing business environment that our clients must manage.
                                            </p>
                                        </>
                                    )
                                }

                                {
                                    pathname == "/" && (
                                        <>

                                            <div className="flex mt-9">
                                                <Link to={'/about-us'} className="bg-gray-800   text-white transition-all duration-100 hover:bg-gray-300 hover:text-black flex items-center gap-3 t-12 uppercase tracking-wide px-10 py-5 rounded-full">
                                                    Know More  <span className='rotate-[-45deg]'><FontAwesomeIcon icon={faArrowRight} /></span>
                                                </Link>
                                            </div>
                                        </>
                                    )
                                }



                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-9" ref={dref}>
                <div className="container">
                    <div className="flex flex-wrap aboutSection">
                        {
                            ftarr.map((ftr) => (
                                <>
                                    <div className="lg:w-1/3 p-4 w-1/2">
                                        <div className="w-full h-full">
                                            <div className="flex items-center lg:flex-nowrap flex-wrap">
                                                <div className="lg:w-[140px] lg:h-[140px] w-[80px] h-[80px] mx-auto">
                                                    <CircularProgressbar className="firstCircle" strokeWidth="2" value={ftr.digit} text={`${ftr.digit}+`}
                                                        styles={{
                                                            // Customize the background circle color

                                                            path: { stroke: "#000" },
                                                            text: { fill: "#000", fontSize: "20px" }
                                                        }}
                                                    />
                                                </div>
                                                <div className="circlecontent lg:ps-10 lg:mt-0 mt-4  p-0 lg:text-start text-center">
                                                    <h4 className='lg:text-[20px] text-[14px] mb-0 font-bold'>
                                                        {ftr.title}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default About