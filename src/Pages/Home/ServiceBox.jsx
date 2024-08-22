//import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { url } from '../../utils';
import { RightOutlined } from '@ant-design/icons';
const ServiceBox = ({service}) => {
    function cleanString(input) {
        const string = input.substr(0, 150);
        var noHtml = string.replace(/<\/?[^>]+(>|$)/g, "");
        // Remove special characters
        var cleanString = noHtml.replace(/[^a-zA-Z0-9 ']/g, "");
        return cleanString;
    }
    return (
        <>
            <div className="w-full service-block-one">
                <Link to={'/services/' + service?.url} className="block w-full inner-box">
                    <div className="icon-box te-icon-box">
                        <div className="imagebox rounded-ss-xl rounded-se-xl overflow-hidden">
                            <img src={`${url}/${service?.thumbnail}`} alt="" className="img-fluid" />
                        </div>

                    </div>
                    <div className="w-full  text-justify p-3 ">
                        <div className="town-service-title min-h-[260px]">
                            <h3 className='mb-4 text-center'>
                                {service?.name}
                            </h3>
                            <p className='text-sm tracking-wider leading-6'>
                                {cleanString(service?.description)}  <span className="text-primary">Read more...</span>
                            </p>
                        </div>
                        <div className="link te-btn w-full absolute bottom-3 start-0 px-4">
                            <button className="transition-all duration-100 bg-gray-300 text-black shadow-sm shadow-blue-gray-900 inline-flex items-center justify-center gap-3 t-12 uppercase tracking-wide px-10 py-3 w-full  rounded-full">
                                Explore  <span className='rotate-[-45deg]'>
                                    <RightOutlined/>
                                </span>
                            </button>
                        </div>
                    </div>

                </Link>
            </div>
        </>
    )
}
ServiceBox.propTypes ={
    service : PropTypes.object   
}

export default ServiceBox