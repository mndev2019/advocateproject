

import contactimg from '../../assets/img/contactbanner.jpg'


// import moment from 'moment';
import { Link } from 'react-router-dom';
import BlogBox from './BlogBox';
import PageBanner from '../../Layout/PageBanner';
import { get_blogs } from '../../utils';
import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Blogs = () => {
    const [data, setData] = useState([]);
    const get_all_blogs = async () => {
        const res = await get_blogs();
        setData(res);
    }
    useEffect(() => {
        get_all_blogs();
    }, []);

    return (
        <>
            <PageBanner title="Knowledge Corner" links="Knowledge Corner" banner={contactimg} />
            <section className="lg:p-20 md:p-10 p-5">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
                        {
                            data?.data && data?.data.map((blg) => (
                                <>
                                    <div className=" w-full h-full">
                                        <Link className=' w-full h-full' to={'/blogs/' + blg.url}>
                                            <BlogBox blog={blg} />
                                        </Link>
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

export default Blogs
