//import React from 'react'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import {
  Button,
  Dialog,
  DialogBody,
  Input,
  Textarea,
  Menu,
  MenuHandler,
  MenuList,
  Navbar,
  Typography,
  IconButton,
  Collapse
} from "@material-tailwind/react";
import { get_contact_value, get_services, send_query, url } from '../utils';
import { Alert } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ThemeNavbar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = useState(false)
  const handleOpen = () => setOpen(!open);
  const [msg, setMsg] = useState('')
  const [services, setServices] = useState([]);

  const [logo, setLogo] = useState('');
  const [fdata, setFdata] = useState({});
  const formhandler = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const arr = { ...fdata };
    arr[key] = value;
    setFdata(arr);

  }
  const getserviceslist = async () => {
    const res = await get_services();
    setServices(res.data)
  }
  const getlogo = async () => {
    const res = await get_contact_value('logo');
    setLogo(res.data.c_value);
  }
  React.useEffect(() => {
    getserviceslist();
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );

  }, []);
  useEffect(() => {
    getlogo();
    setOpenNav(false);
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);
  const submitform = async () => {

    const res = await send_query(fdata);
    if (res.success == 1) {
      setShow(true);
      setMsg(res.message)
    }

  }
  const navList = (
    <>
      <div className='w-full flex text-black  md:flex-row flex-col  md:items-center justify-start md:gap-7 gap-4 mt-[30px]'>
        <Link to={'/'} className={`t-14 nav-link uppercase font-bold ${location.pathname == '/' ? 'active' : ''}`}>Home</Link>
        <Link to={'/about-us'} className={`t-14 nav-link uppercase font-bold ${location.pathname == '/about-us' ? 'active' : ''}`}>About Us</Link>

        <Menu>
          <MenuHandler>
            <button className='t-14 text-start nav-link  uppercase font-bold'>Expertise</button>
          </MenuHandler>
          <MenuList className='dropdowncustom top-[100%] -m-1 rounded-none bg-white text-black z-50 shadow-md shadow-[#001e50]'>
            {
              services.map((link) => (
                <>
                  <Link to={'/services/' + link.url} className=' mb-2 last-of-type:mb-0 block outline-none active:outline-none'>
                    {link.name}
                  </Link>
                </>
              ))
            }

          </MenuList>
        </Menu>

        <Link to={'/knowledge-corner'} className={`t-14 nav-link uppercase font-bold ${location.pathname == '/knowledge-corner' ? 'active' : ''}`}>Knowledge Corner</Link>
        <Link to={'/contact-us'} className={`t-14 nav-link uppercase font-bold ${location.pathname == '/contact-us' ? 'active' : ''}`}>Contact Us</Link>
        <Link to={'/career'} className={`t-14 nav-link uppercase font-bold ${location.pathname == '/career' ? 'active' : ''}`}>Career</Link>
        <Button onClick={handleOpen} className='bg-black lg:ms-auto text-end inline-flex gap-2 items-center text-white max-w-[190px]   t-12 uppercase tracking-wide px-6 py-3 rounded-full '>
          Get in touch <span className='rotate-[-45deg] inline-block'><FontAwesomeIcon icon={faArrowRight} /></span>
        </Button>
      </div>
    </>
  );
  return (
    <>
      <Dialog open={open} handler={handleOpen}>

        <DialogBody className='p-0 m-0'>
          <div className="w-100  bg-blue-gray-50 text-white p-4 shadow-sm shadow-blue-gray-800 rounded-lg ">
            <div className="form-group mb-3">
              <h4 className="mb-4 text-[1.4rem] font-bold text-blue-gray-800  border-s-4 border-blue-gray-500 ps-3">
                Make An Appointment
              </h4>
            </div>
            {
              show && (
                <>
                  <Alert className='mb-9'>{msg}</Alert>
                </>
              )
            }

            <div className="form-group mb-3">
              <Input label="Enter Name" value={fdata?.name} name='name' onChange={formhandler} maxLength={'50'} />
              <small className='text-[10px] text-danger'>*Name is Required</small>
            </div>
            <div className="form-group mb-3">
              <Input label="Enter Email" value={fdata?.email} name='email' onChange={formhandler} />
              <small className='text-[10px] text-danger'>*Email is Required</small>
            </div>
            <div className="form-group mb-3">
              <Input label="Enter Mobile" value={fdata?.mobile} name='mobile' onChange={formhandler} />
              <small className='text-[10px] text-danger'>*Mobile is Required</small>
            </div>
            <div className="form-group mb-3">
              <Input type='datetime-local' name='prefer_time' onChange={formhandler} label="Enter Preferred  Date & Time" />
            </div>
            <div className="form-group mb-3">
              <Textarea label="Enter Message" value={fdata?.message} name='message' onChange={formhandler} />
            </div>
            <div className="form-group">
              <button onClick={submitform} className="w-full text-white uppercase px-5 py-3 rounded-lg bg-blue-gray-800">Submit</button>
            </div>
          </div>
        </DialogBody>

      </Dialog>


      <section id="top__header" >
        <div className="container">
          <div className="flex w-full max-w-screen-sm:items-center lg:p-0 p-4">
            <div className="lg:w-1/4 md:w-1/8 md:block hidden">
              <div className="w-full lg:border-e lg:border-slate-300 h-full flex items-center p-5">
                <img src={url + '/public/uploads/' + logo} alt="" className=" lg:max-w-[100%] w-[200px] block lg:me-auto me-auto" />
              </div>
            </div>
            <div className="lg:w-3/4 md:w-7/8 w-full">
              <div className="w-full h-full">
                <div className="w-full">
                  <Navbar className="mx-auto  shadow-none max-w-screen-xl px-4 lg:px-8 py-0">
                    <div className="container mx-auto flex items-center lg:justify-start justify-between  text-blue-gray-900">
                      <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                      >
                        <img src={url + '/public/uploads/' + logo} alt="" className=" lg:max-w-[100%] w-[200px] md:hidden inline-block lg:me-auto me-auto" />
                      </Typography>
                      <div className="hidden lg:block lg:w-full">{navList}</div>

                      <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                      >
                        {openNav ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 6h16M4 12h16M4 18h16"
                            />
                          </svg>
                        )}
                      </IconButton>
                    </div>
                    <Collapse open={openNav}>
                      <div className="container mx-auto">
                        {navList}
                      </div>
                    </Collapse>
                  </Navbar>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ThemeNavbar