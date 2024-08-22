
import  { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { get_service_details, rest_services, url } from '../../utils';
import parse from 'html-react-parser';
//import { Input } from "@material-tailwind/react";
//import { Textarea } from "@material-tailwind/react";
import PageBanner from '../../Layout/PageBanner';

const SingleService = () => {

  const params = useParams();
  const srl = params.url;
  const [service, setService] = useState({});
  const [services, setServices] = useState([]);
  const location = useLocation();
  const getservicedetails = async () => {
    const srs = await get_service_details(srl);
    console.log(srs)
    setService(srs.data);
  }
  const get_rest_services = async () => {
    const srs = await rest_services(srl);
    console.log(srs)
    setServices(srs.data);
  }
  useEffect(() => {
    getservicedetails();
    get_rest_services();
  }, [location.pathname]);
  return (
    <>

      <PageBanner banner={url + '/' + service?.image} title={service?.name ?? 'Loading...'} links={`Services, ${service?.name ?? ""}`} />
      <section className='py-[4rem]'>
        <div className="container">
          <div className="flex flex-wrap">
            <div className="md:w-3/4">
              <div className="w-full px-2 serviceDetails">
                <h2 className='text-[2.4rem] uppercase tracking-wider font-bold mb-4'>{service.name}</h2>
                <div className="w-full ">
                  {parse(service?.description ?? 'Loading...')}
                </div>

              </div>
            </div>
            <div className="md:w-1/4 w-full">
              <div className="w-full p-2 sticky top-0">
                <h4 className="mb-4 text-[1.4rem] font-bold  border-s-4 border-blue-gray-500 ps-3">
                  Practise Area
                </h4>
                <ul>
                  {
                    services.map((sr) => (
                      <>

                        <li className='mb-3'>
                          <Link to={'/services/'+sr.url} className='block rounded-lg border bg-blue-gray-50 shadow-sm shadow-blue-gray-500  border-blue-gray-200 p-2'>
                            <div className="flex justify-between items-center">
                              <img src={url + '/' + sr.icon} alt="" className="w-9" />
                              <button className="px-2 py-[3px] text-[10px] font-light uppercase bg-blue-gray-600 text-white rounded-lg">Read more</button>
                            </div>


                            <div className="d-inlne-block">
                              <p className="text-sm font-bold text-black/80">
                                {sr.name}
                              </p>
                            </div>
                          </Link>
                        </li>
                      </>
                    ))
                  }

                </ul>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleService
