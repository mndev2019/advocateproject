//import React from 'react'
//import wlogo from '../assets/img/white-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { get_contact_value, url } from '../utils';
import { Link } from 'react-router-dom';
import { LinkedinFilled } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Footer() {
  const [email, setEmail] = useState('');
  const [isLoad, setLoad] = useState(false);
  const [logo, setLogo] = useState('');
  const getlogo = async () => {
    const res = await get_contact_value('logo');
    setLogo(res.data.c_value);
  }
  const movetoTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  };
  const [hide, setHide] = useState(false);
  const emailhandler = (e) => {
    setEmail(e.target.value);
  }
  const newslettersubscribe = async () => {
    setLoad(true)
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
      await axios.post(`${url}/api/newsletters`, { email: email }, {
        headers: {
          Accept: 'application/json',
          "Content-Type": 'application/json'
        }
      }).then((resp) => {
        setTimeout(() => {
          setLoad(false)
        }, 2000);
      
        console.log(resp)
      })
    }
  }
  useEffect(() => {
    getlogo();
    window.addEventListener('scroll', function () {
      const topscroll = window.scrollY;
      if (topscroll > 1000) {
        setHide(true)
      } else {
        setHide(false)
      }
    })
  }, []);
  return (
    <>

      {
        hide && (
          <>
            <button onClick={movetoTop} className='fixed right-7 bottom-7 bg-blue-gray-700 hover:bg-blue-gray-200 animation animate-pulse text-white w-[50px] h-[50px] leading-8 rounded-full  z-40'>
            <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </>
        )
      }

      <footer className="bg-footer lg:py-[5rem] py-[3rem] text-white relative">
        <div className="container overflow-x-hidden">
          <div className="flex flex-wrap">
            <div className="lg:w-1/4 w-full p-5">
              <div className="w-full h-full p-3">
              <img src={url + '/public/uploads/' + logo} alt="" className=" lg:max-w-[100%] w-[200px] block invert lg:me-auto me-auto" />
  
              </div>
            </div>

            <div className="lg:w-3/4  w-full p-5">
              <div className="flex flex-wrap pb-[4rem] mb-[3rem] border-b border-gray-400">
                <div className="lg:w-2/3 w-full lg:order-1 order-2">
                  <div className="w-full">
                    <h4 className='mb-10 t-20 lg:block hidden font-bold text-base'>
                      Subscribe to our newsletter! Stay always in touch!
                    </h4>
                    <div className="flex flex-wrap">
                      <div className="lg:w-1/2 w-full">
                        <div className="w-full px-2">
                          <h4 className="text-gray-500 font-bold t-20 mb-5">Our Office</h4>
                          <p className='t-14 text-gray-300 '>
                            D/200, L.G.F., Defence Colony, New Delhi - 110024
                          </p>
                        </div>
                      </div>
                      <div className="lg:w-1/2 w-full">
                        <div className="w-full px-2">
                          <h4 className="text-gray-500 font-bold t-20 mb-5">Contact Us</h4>
                          <p className='t-14 text-gray-300 '>
                            <a href="mailto:info@laccolegal.com" className="border-b border-white">info@laccolegal.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 w-full lg:order-2 order-1">
                  <div className="w-full">
                    <h4 className='mb-10 t-20 lg:hidden block font-bold text-base'>
                      Subscribe to our newsletter! Stay always in touch!
                    </h4>
                    <div className="flex items-center mb-10 relative">
                      {
                        !isLoad && (
                          <>
                            <input type="text" onChange={emailhandler} placeholder='Enter your email id' className="bg-black w-full focus-within:outline-none  text-white border-b border-gray-100 min-h-[50px] px-4 " />
                            <button onClick={newslettersubscribe} className='py-3 w-10 h-full text-center bg-blue-gray-700 border-b-2 border-white'><FontAwesomeIcon icon={faArrowRight} /></button>
                          </>
                        )
                        
                      }
                      {
                        isLoad && (
                          <>
                              <div className="w-full text-black p-2 text-sm text-center bg-gray-400">
                          Thank you for Subscribe us.
                              </div>
                          </>
                        )
                      }

                    </div>
                    <div className="w-full px-2 lg:mt-0">
                      <h4 className="text-gray-500 font-bold t-20 mb-5">Social Media</h4>
                      <div className="w-full h-full flex gap-2 justify-start socialMedia">

                        <Link to={'https://www.linkedin.com/company/lacco-legal'} className='w-6 h-6  leading-6 text-center t-20'>
                          <LinkedinFilled/>
                        </Link>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="w-full">
                <p className="text-md tracking-widest text-white">
                  <span className="font-bold me-3">Disclaimer : </span>
                  <span>
                    Under the rules of the Bar Council of India, an advocate is prohibited from soliciting work or advertising through communication in the public domain. This website is meant solely for the purposes of providing information and not for the purpose of advertising.



                    This website does not solicit potential clients. The contents of this website are solely for the purposes of informing, assisting, and guiding the clients, associates, and other professionals and are not in any way a substitute for professional opinion or advice. Accessing this web site does not in any way create a client-attorney relationship. I urge you to seek advice from your professional counselors before using any information in this website for your requirements.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-4 px-5 t-14 text-center pt-4 border-t border-gray-800">
            &copy; Copyright 2023
          </div>
        </div>
      </footer>
    </>
  )
}
