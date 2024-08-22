
//import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { url } from '../../utils'

const BlogBox = (props) => {

    return (
        <>
            <div className="p-5 w-full h-full relative rounded-ss-2xl rounded-se-2xl rounded-es-2xl overflow-hidden border border-blue-gray-100">
                <ul className="flex list-disc gap-6 ps-5 text-sm mb-4 text-blue-gray-500">
                    <li>
                        {moment(props?.blog?.created_at).format('MMM DD, YYYY')}
                    </li>
                    <li>
                        {props?.blog?.author?.name}
                    </li>
                </ul>
                <figure className="w-full mb-4">
                    <img src={url + '/public/assets/img/' + props?.blog?.image} alt="" className="w-full rounded-2xl" />
                </figure>
                <div className="w-full p-3">
                    <span className="inline-block rounded-full px-3 mb-5 text-nowrap bg-blue-gray-800 text-sm text-white">
                        {props?.blog?.subcategory?.name}
                    </span>
                    <h4 className="text-lg font-bold min-h-[150px]">
                        {props?.blog?.title}
                    </h4>
                    <div className="w-full mt-5">
                        <button>Read more..</button>
                    </div>
                </div>


            </div>
        </>
    )
}
BlogBox.propTypes = {
    blog: PropTypes.shape({
        created_at: PropTypes.string.isRequired,
        author: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired,
        image: PropTypes.string.isRequired,
        subcategory: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
}


export default BlogBox
