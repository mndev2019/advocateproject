//import React from 'react'
import { Helmet } from 'react-helmet';

//import { About } from './About'
//import { Contact } from './Contact';
//import whowe from 'assets/img/whowe.jpg'

//import Teams from 'pages/About/Teams';
//import Blogs from './Blogs';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import aboutimg from '../../assets/img/about_2.jpg'
import Disclaimer from '../../Layout/Disclaimer';
import Services from './Services';
import Banner from './Banner';
import { Contact } from './Contact';
import Teams from '../AboutUs/Teams';
import HomeBlog from '../Blogs/HomeBlog';

const Home = () => {
    const aparts = [
        {
            title: "Combination of experience, energy & youth",
            desc: `At LACCO Legal, experienced & seasoned lawyers combines with young, energetic & vibrant lawyers, bringing out peerless legal strategy.`
        },
        {
            title: " 	Networking",
            desc: "With some of the partners having 3 decades of experience and in toto a combination of a century, LACCO Legal connects with every industry. LACCO Legal also connects to every major city in India, and extend its services Pan India."
        },
        {
            title: "	All solutions under a single umbrella",
            desc: "With the areas of the expertise, which LACCO Legal possess, an end-to-end legal solution across the sectors is provided under the same banner, ensuring hassle free experience."
        },
        {
            title: "PAN India presence",
            desc: "Foreign corporates and MNCs operating in India doesn’t have to look for multiple legal hands for multiple location, as LACCO Legal ensures in presence through its principal team or its associate team almost at every prominent city. "
        },
        {
            title: "Stepping into the shoes",
            desc: "At LACCO Legal, we understand the client’s prospective and value the commercial importance, and thus endeavour to provide the best & effective way out to every legal trouble.  "
        },
        {
            title: "Safeguard to Disputes",
            desc: "Our endeavour at LACCO Legal is to comply mandatory legal and regulatory compliances, which would safeguard Corporates from landing up in litigation. "
        },
        {
            title: "Client centric solution",
            desc: "At LACCO Legal, we foster a culture of collaboration, prioritizing client-centric solutions. We curate specialized teams of experts tailored to address unique client issues effectively"
        }
        ,
        {
            title: "Out of the box thinking",
            desc: "As we are a hard believer of traditional way of handling, however, at the same, with the advent of new challenges, we don’t hesitate in enduing innovative solutions."
        }
    ];
    return (
        <>
            <Helmet>
                <title>Home | LACCO Legal </title>
                <meta name="description" content="I am advocate Dheeraj Kumar. Practicing at delhi high court & supreme court. Contact us legal advice, lawyer, law, legal advice, legal assistance, legal issues, legal questions, find a lawyer, legal advice, a lawyer, legal questions, legal answers, free legal advice, legal response, law consultants, legal advisers ask, ask a legal question needs legal help, legal assistance, free legal answers, get free legal answer, find a local lawyers" />
                <meta name="keywords" content="legal advice, lawyer, law" />
                <meta name="author" content="Lacco Legal" />
                <meta property="og:title" content="LACCO Legal" />
                <meta property="og:description" content="I am advocate Dheeraj Kumar. Practicing at delhi high court & supreme court. Contact us legal advice, lawyer, law, legal advice, legal assistance, legal issues, legal questions, find a lawyer, legal advice, a lawyer, legal questions, legal answers, free legal advice, legal response, law consultants, legal advisers ask, ask a legal question needs legal help, legal assistance, free legal answers, get free legal answer, find a local lawyers" />
                <meta property="og:image" content="https://example.com/image.jpg" />
                <meta property="og:url" content="https://example.com/my-page" />
                <meta name="twitter:title" content="LACCO Legal" />
                <meta name="twitter:description" content="I am advocate Dheeraj Kumar. Practicing at delhi high court & supreme court. Contact us legal advice, lawyer, law, legal advice, legal assistance, legal issues, legal questions, find a lawyer, legal advice, a lawyer, legal questions, legal answers, free legal advice, legal response, law consultants, legal advisers ask, ask a legal question needs legal help, legal assistance, free legal answers, get free legal answer, find a local lawyers" />
                <meta name="twitter:image" content="https://example.com/image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <Disclaimer />
          
                <Banner/>
            
            <section className='space aboutSection bg-blue-gray-50 lg:p-20  md:p-10 p-5'>
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                        <div className="col-span-1">
                            <div className="w-full">
                                <img src={aboutimg} alt="" className="max-w-full rounded-ss-lg rounded-bl-xl shadow-md shadow-blue-gray-800" />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className=" w-full">
                                <div className="w-full h-full lg:px-8 px-0">

                                    <h2 className='lg:text-[1.9rem] text-[1.2rem] lg:mb-4 mb-4  font-semibold text-gray-900'>
                                        Who are we
                                    </h2>
                                    <p className='text-[16px]  mb-2'>
                                        LACCO stands for ‘Litigation and Corporate Compliances’.  LACCO Legal is an emerging full service corporate & commercial law firm with a team of seasoned lawyers having expertise in Litigation, Arbitration, Insolvency & Bankruptcy, Corporate Advisory, Real Estate, Consumer Protection, and Media/IT industry.
                                    </p>
                                    <p className="text-[16px]  mb-2">
                                        Our services cover a wide range of industry areas such as Financial Services, Power, Telecom, Insurance, Consumer Durables, IT, Media, Transport, Energy, Infrastructure, Environment, and Agricultural.
                                    </p>
                                    <div className="flex mt-9">
                                        <Link to={'/about-us'} className="bg-gray-800   text-white transition-all duration-100 hover:bg-gray-300 hover:text-black flex items-center gap-3 t-12 uppercase tracking-wide px-10 py-5 rounded-full">
                                            Know More  <span className='rotate-[-45deg]'><FontAwesomeIcon icon={faArrowRight} /></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Services />
            <section className="py-[4rem] bg-footer relative  text-white lg:p-20 md:p-10 p-5">
                <div className="container mx-auto">
                    {/* <div className="absolute top-0 end-0 w-[10rem] opacity-15 rotate-[45deg]"><Plane /></div> */}
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
                        <div className="w-full">
                            <div className="w-full sticky top-0">

                                <h4 className="mb-10 lg:text-[3rem] text-[1.5rem] font-semibold">
                                    What makes us apart?
                                </h4>
                                <figure className="block w-full">
                                    <img src='https://img.freepik.com/premium-photo/conference-room-with-wooden-table-blue-chairs-large-conference-table-set-board-meeting-office-ai-generated_585735-20833.jpg' alt="" className="w-full" />
                                </figure>
                            </div>
                        </div>

                        <div className="w-full">
                            {
                                aparts.map((arr, i) => (
                                    <>
                                        <div className="w-full border-b border-gray-100 lg:pb-40 pb-10 mb-9">
                                            <h5 className='strokeword hidden'>0{i + 1}</h5>
                                            <h4 className='lg:text-[2rem] text-[1.2rem] font-bold'>
                                                {arr.title}
                                            </h4>
                                            <p>
                                                {arr.desc}
                                            </p>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            <Teams/>
            <HomeBlog/>
            <Contact/>

        </>
    )
}

export default Home