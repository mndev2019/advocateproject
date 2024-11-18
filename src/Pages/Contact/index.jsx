// import React, { useState } from 'react'
// import contactbanner from 'assets/img/contactbanner.jpg'
import contactbanner from '../../assets/img/contactbanner.jpg'
import mailimg from '../../assets/img/mail.png'
import locationimg from '../../assets/img/location.png'
import callimg from '../../assets/img/call.png'
//import calendar from '../../assets/img/calendar.png'
import { Contact as Cont } from '../../Pages/Home/Contact'
// import Googlemap from 'layouts/Googlemap'
import PageBanner from '../../Layout/PageBanner'
import Seo from '../../Seocomponent/Seo'
const Contact = () => {

  return (
    <>
     <Seo title="Contact Us | Lacco Legal - Get in Touch with Our Legal Experts" description="Reach out to Lacco Legal for expert legal guidance. Contact us today for consultations or inquiries about our services. We're here to help you navigate your legal needs effectively.
"
            />
      <PageBanner title="Contact us" links="Contact Us" banner={contactbanner} />
      <section className='py-[4rem] contactusdetails '>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 grid-cols-2">
            <div className="w-full box ">
              <div className="w-full h-full p-2 md:border-0 border-b border-blue-gray-400">
                <div className="w-full">
                  <img src={mailimg} alt="" className="max-w-full mx-auto" />
                  <h4>E-mail us</h4>
                  <a href="mailto:info@laccolegal.com">info@laccolegal.com</a>
                </div>
              </div>
            </div>
            <div className="w-full box  ">
              <div className="w-full h-full p-2 md:border-0 border-b border-blue-gray-400">
                <div className="w-full">
                  <img src={locationimg} alt="" className="max-w-full mx-auto" />
                  <h4>Office</h4>
                  <a href="mailto:info@laccolegal.com">D/200, L.G.F., Defence Colony, New Delhi - 110024</a>
                </div>
              </div>
            </div>
            <div className="w-full box ">
              <div className="w-full h-full p-2 ">
                <div className="w-full">
                  <img src={callimg} alt="" className="max-w-full mx-auto" />
                  <h4>Call Us</h4>
                  <a href="tel:+91 - 11 - 4905 2705">+91 - 11 - 4905 2705</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cont />

    </>
  )
}

export default Contact
