
import { useState } from 'react'
import contactbanner from '../../assets/img/contactbanner.jpg'
import { Input, Radio, Button, Alert } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
//import loadingimg from '../../assets/img/loading.svg'
import loadingimg from '../../assets/img/loading.svg';
import PageBanner from '../../Layout/PageBanner';
import { url } from '../../utils';
import Seo from '../../Seocomponent/Seo';
//import Googlemap from 'layouts/Googlemap';

const Career = () => {
    const [fdata, setFdata] = useState({});
    const [resume, setResume] = useState('')
    const [document, setDocument] = useState('')
    const [errors, setErrors] = useState([]);
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const validate = () => {
        let err = []
        if (!fdata?.category) {
            err.push({ path: "category", 'message': "*Category is required" })
        }
        if (!fdata?.name) {
            err.push({ path: "name", 'message': "*Name is required" })
        }
        if (!fdata?.email) {
            err.push({ path: "email", 'message': "*Email is required" })
        }
        if (!fdata?.mobile) {
            err.push({ path: "mobile", 'message': "*Mobile is required" })
        }
        if (!fdata?.gender) {
            err.push({ path: "gender", 'message': "*Gender is required" })
        }
        setErrors(err)

        if (err.length > 0) {
            return false;
        }
        return true;

    }
    const handleformdata = (e) => {
        const arr = { ...fdata };
        const key = e.target.name;
        const value = e.target.value;
        arr[key] = value;
        setFdata(arr);
        console.log(fdata)
    }
    const submitForm = async () => {
        setLoading(true)
        if (!validate()) {
            setLoading(false)
            return false;

        }

        const f_data = new FormData();
        Object.entries(fdata).forEach(([ke, va]) => {
            f_data.append(ke, va)
        });
        f_data.append('resume', resume);
        f_data.append('document', document);
        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${url}/api/career`,
            data: f_data
        }
        await axios.request(config).then((resp) => {
            const res = resp.data;
            if (res.success == 1) {
                setIsSent(true)
                setFdata({})
                setMessage(res.message);
                setLoading(false)
            }
        })
    }
    return (
        <>
            <Seo title="Careers | Join Lacco Legal - Grow with Us
" description="Explore exciting career opportunities at Lacco Legal. Join our team of dedicated legal professionals and contribute to delivering exceptional legal services. Discover your next step with us today!
"
            />
            <PageBanner links="Career" title="Career" banner={contactbanner} />
            <section className="py-5 px-4" id="career">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="w-full">
                            <div className="w-full mb-5">
                                <h2 className='lg:text-[3rem] text-[1.5rem] lg:mb-4 mb-4 font-semibold text-gray-900'>
                                    Career With Us
                                </h2>
                                <p className="mt-4 text-md tracking-wider">We welcome motivated and technically qualified professionals who can think of out of the box solutions at all levels of experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-12 grid-cols-1">

                        <div className="md:col-span-4 col-span-1">
                            <div className="w-full">
                                <img src="https://img.freepik.com/free-photo/side-view-smiley-female-judge-with-gavel_23-2148453378.jpg" alt="" className="max-w-full" />
                            </div>
                        </div>
                        <div className="md:col-span-8 col-span-1">
                            <div className="w-full relative h-full flex flex-wrap p-6 py-9  shadow-sm shadow-blue-gray-800  bg-blue-gray-50">
                                <div className="w-full mb-4">
                                    <h4 className="text-[2.2rem] border-s ps-3 border-black">Application Form</h4>
                                </div>
                                {
                                    loading && (
                                        <>
                                            <div className="w-full absolute flex top-0 h-full bg-white/30 z-30 items-center">
                                                <img src={loadingimg} alt="" className="mx-auto" />
                                            </div>
                                        </>
                                    )
                                }

                                {
                                    isSent && (
                                        <>
                                            <div className="w-full mb-5">
                                                <Alert>{message}</Alert>
                                            </div>

                                        </>
                                    )
                                }

                                <div className="md:w-1/2 w-full">
                                    <div className="w-full form-group">
                                        <select label="Select One" onChange={handleformdata} className='w-full border border-blue-gray-200 rounded-md active:outline-none outline-none p-2 bg-transparent' name="category">
                                            <option>---Select---</option>
                                            <option>Retainership</option>
                                            <option>Internship</option>
                                            <option>Research Fellows</option>
                                        </select>
                                        <span className="text-red-700 text-sm">
                                            {errors.find(obj => obj.path == "category")?.message}
                                        </span>
                                    </div>
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <div className="w-full form-group">
                                        <Input label="Enter Name" type='text' onChange={handleformdata} name="name" value={fdata?.name} />
                                        <span className="text-red-700 text-sm">
                                            {errors.find(obj => obj.path == "name")?.message}
                                        </span>
                                    </div>
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <div className="w-full form-group">
                                        <Input label="Enter Email" type='text' onChange={handleformdata} name="email" value={fdata?.email} />
                                        <span className="text-red-700 text-sm">
                                            {errors.find(obj => obj.path == "email")?.message}
                                        </span>
                                    </div>
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <div className="w-full form-group">
                                        <Input label="Enter Mobile" type='text' onChange={handleformdata} name="mobile" value={fdata?.mobile} />
                                        <span className="text-red-700 text-sm">
                                            {errors.find(obj => obj.path == "mobile")?.message}
                                        </span>
                                    </div>
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <div className="w-full form-group">
                                        <label htmlFor="">Select Gender</label>
                                        <div className="flex gap-10">
                                            <Radio label="Male" onChange={handleformdata} name="gender" value={'Male'} checked={fdata?.gender === "Male"} />
                                            <Radio label="Female" onChange={handleformdata} name="gender" value={'Female'} checked={fdata?.gender === "Female"} />

                                        </div>
                                        <span className="text-red-700 text-sm">
                                            {errors.find(obj => obj.path == "gender")?.message}
                                        </span>
                                    </div>
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <div className="w-full form-group">
                                        <Input label="Maximum Qualification" type='text' onChange={handleformdata} name="qualification" value={fdata?.qualification} />
                                    </div>
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <div className="w-full form-group">
                                        <Input label="Total Work Experience" type='text' onChange={handleformdata} name="experience" value={fdata?.experience} />
                                    </div>
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <div className="w-full form-group">
                                        <label htmlFor="">Have you previously applied for a position at this firm?</label>
                                        <div className="flex gap-10">
                                            <Radio label="Yes" onChange={handleformdata} name="previous_applied" value={1} checked={fdata?.previous_applied == 1} />
                                            <Radio label="No" onChange={handleformdata} name="previous_applied" value={0} checked={fdata?.previous_applied == 0} />
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <div className="w-full form-group">
                                        <label htmlFor="">Upload CV</label>
                                        <Input label="" accept='.pdf, .PDF' onChange={(event) => setResume(event.target.files[0])} type='file' />
                                        <span className="text-danger text-sm">Pdf. Only</span>
                                    </div>
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <div className="w-full form-group">
                                        <label htmlFor="">Research Paper/Articles/Blogs</label>
                                        <Input label="" type='file' accept='.pdf, .PDF' onChange={(event) => setDocument(event.target.files[0])} />
                                        <span className="text-danger text-sm">Pdf. Only</span>
                                    </div>
                                </div>
                                <div className="w-full mt-4 text-end">
                                    <Button onClick={submitForm} className="bg-gray-800    text-white transition-all duration-100 hover:bg-gray-300 hover:text-black shadow-sm shadow-blue-gray-900 inline-flex  justify-center items-center gap-3 t-12 uppercase tracking-wide px-10 py-3 rounded-full">
                                        Submit  <span className='rotate-[-45deg]'><FontAwesomeIcon icon={faArrowRight} /></span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Career
