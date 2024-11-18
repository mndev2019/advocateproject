
import { useEffect, useState } from 'react'

import bannerimg from '../../assets/img/pagebanner.jpg'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
//import { Link } from 'react-router-dom';

import PageBanner from '../../Layout/PageBanner';
import ServiceBox from '../Home/ServiceBox';
import { get_services } from '../../utils';
// import Seo from '../../Seocomponent/Seo';

const Services = () => {
    const [services, setServices] = useState([]);
    const getservices = () => {
        const srs = get_services();

        srs.then((data) => {
            setServices(data.data);
        })
    }
    useEffect(() => {
        getservices();
    }, []);

    return (
        <>
          
            <PageBanner links="Services" banner={bannerimg} title={'Our Practise Areas'} />
            <section className='py-[3rem] bg-blue-gray-50'>
                <div className="container">
                    <div className="flex flex-wrap">
                        {
                            services.map(sr => (
                                <>
                                    <div className="lg:w-1/4 w-full">
                                        <div className="w-full h-full p-3 ">
                                            <ServiceBox service={sr} />
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

export default Services
