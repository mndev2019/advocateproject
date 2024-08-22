//import React from 'react'
import aboutus from '../../assets/img/aboutus.jpg';
import PageBanner from '../../Layout/PageBanner';
import About from '../Home/About';
import Teams from './Teams';
import Testimonials from './Testimonials';



const AboutUs = () => {
    return (
        <>
            <PageBanner banner={aboutus} title="About Us" links="About" />
            <About/>
            <Teams/>
            <Testimonials/>
        </>
    )
}
export default AboutUs