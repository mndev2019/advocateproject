//import React from 'react'
import OwlCarousel from 'react-owl-carousel';

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import client1 from 'assets/img/client-1.png'
import client2 from 'assets/img/client-2.png'
import client3 from 'assets/img/client-3.png'

const Clients = () => {
    const options = {
        items: 6,
        loop: true,
        margin: 0,
        autoplay: true,
        nav: false,

        smartSpeed: 450,
        responsive: {
            0: {
                items: 2,
                nav: false,
                loop: true,

            },
            600: {
                items: 3,
                nav: false,
                loop: true
            },
            1000: {
                items: 5,
                nav: false,
                loop: true
            }
        }

    };

    return (
        <>
            <section className='py-[4rem]'>
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:mb-10 mb-5">
                            <div className="text-center">
                                <span className="px-5 py-3 border rounded-full border-gray-900">
                                    Valuable Clients
                                </span>
                                <h2 className="lg:text-[3rem] text-[1.5rem] mt-10 text-gray-800">Ready to Get Started?</h2>
                            </div>
                        </div>
                        <div className="w-full">
                            <OwlCarousel className="owl-theme w-full relative lg:border-e border-gray-800 " {...options}>
                                {
                                    [client1, client2, client3].map((img) => (
                                        <>
                                         <div className="item ">
                                            <figure className='w-full min-h-[200px] flex items-center  border border-e-0 p-6 border-gray-800'>
                                                <img src={img} alt="" className="w-full max-w-[170px] mx-auto " />
                                            </figure>
                                        </div>
                                        </>
                                    ))
                                }
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Clients