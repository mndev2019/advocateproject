//import React from 'react'
import PropTypes from 'prop-types';
import BreadcrumbsWithIcon from './BreadcrumbsWithIcon';


const PageBanner = (props) => {
    return (
        <>
            <section className="page_banner  pageBannerHeight">
                <div className="container mx-auto ">
                    <div className="flex flex-wrap relative px-4 items-center z-10 text-white">
                        <div className="md:w-1/4 w-full">
                            <div className="w-full ">
                                <h1 className="md:text-[1.2rem] font-bold p-0 m-0 text-[1rem]">{props.title}</h1>
                            </div>
                        </div>
                        <div className="md:w-3/4 w-full">
                            <div className="w-full md:text-end text-center flex md:justify-end justify-start md:mt-0 mt-5">
                                <BreadcrumbsWithIcon links={props.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
PageBanner.propTypes = {
    title: PropTypes.string.isRequired,       // title should be a string and is required
    links: PropTypes.arrayOf(                 // links should be an array of objects
        PropTypes.shape({
            text: PropTypes.string.isRequired, // each object in the array should have a text (string)
            url: PropTypes.string.isRequired   // and a url (string)
        })
    ).isRequired,
};

export default PageBanner
