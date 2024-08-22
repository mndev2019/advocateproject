import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { get_data } from 'utils';
import HTMLReactParser from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons';


const Faqs = () => {
    const [open, setOpen] = React.useState(1);
    const [faqs, setFaq] = React.useState([]);
    const [load, setLoad] = useState(6);
    const getfaqs = async () => {
        const res = await get_data('faqs');
        setFaq(res.data);
    }
    const handleLoad = (action) => {
        action === 'increase' ?   setLoad(prev => prev + 6) :   setLoad(6);
    }
    useEffect(() => {
        getfaqs();
    }, []);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <>
            <section className="py-[4rem]" id="faqs">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full mb-5">
                            <div className="text-center mb-4">
                                <span className="text-center border border-gray-800 rounded-full t-14 mb-8 px-8 py-3">Faq's</span>
                            </div>
                            <h2 className="lg:text-[3rem] text-center text-[1.5rem] font-semibold">
                                Frequently Asked Question
                            </h2>
                        </div>
                        {
                            faqs.map((f, i) => (
                                <>
                                    {
                                        i < load && (
                                            <>
                                                <div className=' w-full px-3'>
                                                    <div className="w-full">
                                                        <Accordion open={open === i + 1}>
                                                            <AccordionHeader className='text-start relative justify-between' onClick={() => handleOpen(i + 1)}>
                                                                <p className="inline-block">
                                                                    <span className="me-4">{i + 1}</span>
                                                                    {f.faq}
                                                                </p>
                                                                <span className='absolute right-0'>
                                                                {
                                                                    open === i + 1 ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />
                                                                }
                                                                    
                                                                </span>

                                                            </AccordionHeader>
                                                            <AccordionBody>
                                                                {HTMLReactParser(f.explain ?? "Loading....")}
                                                            </AccordionBody>
                                                        </Accordion>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }

                                </>
                            ))
                        }
                        <div className="w-full mt-4">
                            <div className="text-center">
                            
                                {
                                    load < faqs.length && (
                                        <>
                                            <button onClick={() => handleLoad('increase')} className="bg-gray-800   text-white transition-all duration-100 hover:bg-blue-gray-100 hover:text-black inline-flex items-center gap-3 t-12 uppercase tracking-wide px-10 py-5 rounded-full">
                                                Load More <span className='rotate-[-45deg]'><FontAwesomeIcon icon={faArrowRight} /></span>
                                            </button>
                                        </>
                                    )
                                }
                                {
                                    load >= faqs.length && load > 6 && (
                                        <>
                                            <button onClick={() => handleLoad('decrease')} className="bg-gray-800   text-white transition-all duration-100 hover:bg-blue-gray-100 hover:text-black inline-flex items-center gap-3 t-12 uppercase tracking-wide px-10 py-5 rounded-full">
                                                Load Less <span className='rotate-[-45deg]'><FontAwesomeIcon icon={faArrowRight} /></span>
                                            </button>
                                        </>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqs
