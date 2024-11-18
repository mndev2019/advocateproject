//import React from 'react'
import aboutus from '../../assets/img/aboutus.jpg';
import PageBanner from '../../Layout/PageBanner';
import Seo from '../../Seocomponent/Seo';
import About from '../Home/About';
import Teams from './Teams';
import Testimonials from './Testimonials';



const AboutUs = () => {
    return (
        <>
            <Seo title="About Us | Lacco Legal - Trusted Legal Advisors" description="Learn about Lacco Legal's mission, values, and experienced legal team. We are dedicated to providing tailored legal services to businesses and individuals, ensuring excellence and trust in every case.
"
            />
            <PageBanner banner={aboutus} title="About Us" links="About" />
            <About />
            <Teams />
            <Testimonials />
        </>
    )
}
export default AboutUs