//import React from 'react'
//import advimg from 'assets/img/contactimg.png';
import advimg from '../../assets/img/contactimg.png'
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Googlemap from '../../Layout/Googlemap';
import { send_query } from '../../utils';
import { Alert } from '@material-tailwind/react';
export const Contact = () => {
    const location = useLocation();
    const [fdata, setFdata] = useState({});
    const [show, setShow] = useState(false)
    const [msg, setMsg] = useState('')
    const formhandler = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        const arr = { ...fdata };
        arr[key] = value;
        setFdata(arr);

    }
    const submitform = async () => {

        const res = await send_query(fdata);
        if (res.success == 1) {
            setShow(true);
            setMsg(res.message)
        }

    }
    return (
        <>
            <section className="lg:p-20 md:p-10 p-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full">
                                <div className="w-full px-4">
                                    <h4 className="mb-10 lg:text-[3rem] text-[1.5rem] font-semibold">
                                        Reach us out for a legal evaluation & solution
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">

                        <div className="col-span-1">
                            <div className=" w-full h-full">
                                <div className="w-full px-2 h-full">
                                    {
                                        location.pathname == "/" ? (<>
                                            <img src={advimg} alt="" className="w-full h-full object-cover rounded-lg" />
                                        </>) : (<>
                                            <Googlemap />
                                        </>)
                                    }

                                </div>
                            </div>

                        </div>
                        <div className="col-span-1">
                            <div className="w-full h-full px-2">

                                <div className='w-full p-4 bg-blue-gray-50 rounded-lg shadow-sm shadow-blue-gray-500'>
                                    {
                                        show && (
                                            <>
                                                <Alert className='mb-9'>{msg}</Alert>
                                            </>
                                        )
                                    }
                                    <div className="flex flex-wrap">
                                        <div className="w-full p-2 mb-6">
                                            <div className="w-full">
                                                <input type="text" value={fdata?.name} name='name' onChange={formhandler} placeholder='Enter Name*' className="w-full focus-within:outline-none focus-within:shadow-none pb-4 bg-transparent border-b border-gray-700" />
                                            </div>
                                        </div>
                                        <div className="w-full  p-2 mb-6">
                                            <div className="w-full">
                                                <input type="text" value={fdata?.email} name='email' onChange={formhandler} placeholder='Enter Email*' className="w-full focus-within:outline-none focus-within:shadow-none pb-4 bg-transparent border-b border-gray-700" />
                                            </div>
                                        </div>
                                        <div className="w-full p-2 mb-6">
                                            <div className="w-full">
                                                <input type="text" value={fdata?.mobile} name='mobile' onChange={formhandler} placeholder='Enter Mobile*' className="w-full focus-within:outline-none focus-within:shadow-none pb-4 bg-transparent border-b border-gray-700" />
                                            </div>
                                        </div>
                                        <div className="w-full p-2 mb-6">
                                            <div className="w-full">
                                                <textarea type="text" value={fdata?.message} name='message' onChange={formhandler} placeholder='Enter message*' className="w-full focus-within:outline-none focus-within:shadow-none pb-4 bg-transparent border-b border-gray-700" ></textarea>
                                            </div>
                                        </div>
                                        <div className="w-full p-2">
                                            <button onClick={submitform} className="bg-gray-800   text-white transition-all duration-100 hover:bg-gray-300 hover:text-black inline-flex items-center gap-3 t-12 uppercase tracking-wide px-[3rem] py-5 rounded-full">
                                                Submit <span className='rotate-[-45deg]'><FontAwesomeIcon icon={faArrowRight} /></span>
                                            </button>
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
