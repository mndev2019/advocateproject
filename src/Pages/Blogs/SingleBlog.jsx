
import React, { useState } from 'react'
import contactimg from '../../assets/img/contactbanner.jpg'

import HTMLReactParser from 'html-react-parser';
import { Link, useParams } from 'react-router-dom';
import PageBanner from '../../Layout/PageBanner';
import { get_single_blog, url } from '../../utils';
const SingleBlog = () => {
    const [data, setData] = useState({});
    const pms = useParams();
    const get_m_blog = async () => {
        const res = await get_single_blog(pms.url);
        setData(res.data)
    }
    React.useEffect(() => {
        get_m_blog();
    }, []);
    return (
        <>
            <PageBanner title={'Knowledge Corner'} links={`Blogs, ${data?.title ?? 'Loading...'}`} banner={contactimg} />
            <section className="py-9 ">
                <div className="container mx-auto">
                    <div className="w-full">
                        
                        <div className="md:w-3/4 w-full mx-auto">
                            <div className="w-full px-4">
                                <h2 className="text-[2.5rem] font-bold mb-9">{data?.title}</h2>
                                <div className="w-full mb-8">
                                    <img src={url + '/public/assets/img/' + data?.image} alt="" className="max-w-full" />
                                </div>
                                <div className="text-justify serviceDetails">
                                    {HTMLReactParser(data?.description ?? 'Loading...')}
                                </div>

                                <div className="w-full flex flex-wrap  items-center">

                                    <div className="w-1/4 ">
                                        <div className="w-full h-full p-4">
                                            <img src={url + '/public/uploads/' + data?.author?.profile_img} alt="" className=" w-40 h-40 mx-auto block rounded-full border object-cover object-top border-blue-gray-200 bg-blue-gray-400" />
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="w-full h-full p-4">
                                            <h2 className="text-lg font-bold">Author : </h2>
                                            <h4 className="text-lg font-bold mb-2">
                                                {data?.author?.name}
                                            </h4>
                                            <p className="text-md">
                                                {data?.author?.postname}
                                            </p>
                                            <div className="w-full my-4">
                                                <Link to={'/teams/' + data?.author?.url} className='text-nowrap text-sm text-center px-5 py-2 rounded-xl bg-blue-gray-800 text-white'>View Profile</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleBlog
