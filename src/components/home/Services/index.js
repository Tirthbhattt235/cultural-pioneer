import Section from "./index.style";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useInView,
  stagger,
  easeIn,
} from "framer-motion";
import { useRef } from "react";
import ServiceImg from "../../../../public/assets/wp-content/uploads/2023/10/home-3-service-1.jpg";
import ServiceImg2 from "../../../../public/assets/wp-content/uploads/2023/10/home-3-service-2.jpg";
import ServiceImg3 from "../../../../public/assets/wp-content/uploads/2023/10/home-3-service-3.jpg";
import ServiceImg4 from "../../../../public/assets/wp-content/uploads/2023/10/home-3-service-4.jpg";
import ServiceImg5 from "../../../../public/assets/wp-content/uploads/2023/10/home-3-service-5.jpg";
import { useState, useEffect } from "react";
function Services() {
  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/service-data.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {}
    };

    fetchData();
  }, []);
  return (
    <>
      {data ? (
        <Section className=" element-container  pe-xl-4 ps-xl-4 pe-3 ps-3  mt-150"  ref={ref}>
          
          <AnimatePresence>
            <div className="d-flex flex-row row  justify-content-center ">
              <div className="header col-xl-6 flex-column  d-flex justify-content-xl-end justify-content-center left-block ">
                {data.title !== undefined || data.pg !== undefined ? (
                  <>
                    {data.title ? (
                      <motion.h2
                        initial={{ x: "-50px", opacity: 0 }}
                        animate={isInView ? { opacity: 1, x: "0px" } : ""}
                        transition={{
                          duration: "0.5",
                          delay: "0.5",
                          ease: easeIn,
                        }}
                       
                        className=" mb-3 fs-50 fw-7"
                      >
                        {data.title}
                      </motion.h2>
                    ) : null}

                    {data.pg ? (
                      <motion.p
                        initial={{ x: "-50px", opacity: 0 }}
                        animate={isInView ? { opacity: 1, x: "0px" } : ""}
                        transition={{ duration: "0.5", ease: easeIn }}
                        className="fs-16 mb-40"
                      >
                        {data.pg}
                      </motion.p>
                    ) : null}
                  </>
                ) : null}
                {data.btnTitle !== undefined ||
                data.btnLink !== undefined ||
                data.imgArr !== undefined ? (
                  <div className="row g-0">
                    <div className="col-md-6 d-flex flex-column img-container-1   align-items-xl-end justify-content-xl-end justify-content-center ">
                      {data.btnTitle || data.btnLink ? (
                        <>
                          <motion.div
                            initial={{ x: "-50px", opacity: 0 }}
                            animate={isInView ? { opacity: 1, x: "0px" } : ""}
                            transition={{ duration: "0.5", ease: easeIn }}
                            className="primary-btn me-auto w-fit-content  -auto btn-hover-primary-clr mb-40 mt-0 "
                          >
                            <Link
                              className=" text-decoration-none mt-"
                              href={data.btnLink}
                            >
                              <span className=" text-decoration-none   text-uppercase  text-white  fs-18">
                                {data.btnTitle}
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon"
                                height="18"
                                width="18"
                                viewBox="0 0 100 100"
                              >
                                <path
                                  fill="white"
                                  d="M11.22,97.57V3.43a1.38,1.38,0,0,1,2.09-1.18L91.76,49.32a1.38,1.38,0,0,1,0,2.36L13.31,98.75A1.38,1.38,0,0,1,11.22,97.57ZM24,26v49.1a1.37,1.37,0,0,0,2.08,1.18L67,51.68a1.38,1.38,0,0,0,0-2.36L26.05,24.77A1.37,1.37,0,0,0,24,26Z"
                                ></path>
                              </svg>
                            </Link>
                          </motion.div>
                        </>
                      ) : null}

                      {data.imgArr && data.imgArr[0] !== undefined ? (
                        data.imgArr[0].imgPath !== undefined ||
                        data.imgArr[0].linkText !== undefined ||
                        data.imgArr[0].link !== undefined ? (
                          <>
                            <div className=" service-img overflow-hidden  x img-box  overflow-hidden    position-relative  ">
                              <motion.div
                                initial={{ y: "700px", opacity: 1 }}
                                animate={
                                  isInView
                                    ? { opacity: 1, y: "0px" }
                                    : { y: "700px", opacity: 1 }
                                }
                                transition={{ duration: "0.5", ease: easeIn }}
                                className="   "
                              >
                                
                                <Image alt="Image"
                                  alt="Image"
                                  className="w-100    w-100 h-100 object-fit-cover    "
                                  width={500}
                                  height={500}
                                  src={data.imgArr[0].imgPath}
                                ></Image>
                                <Link
                                  href={data.imgArr[0].link}
                                  className="  position-absolute service-link text-uppercase text-decoration-none  text-white"
                                >
                                  {data.imgArr[0].linkText}
                                </Link>
                              </motion.div>
                            </div>
                          </>
                        ) : null
                      ) : null}
                    </div>
                    {data.imgArr && data.imgArr[1] !== undefined ? (
                      data.imgArr[1].imgPath !== undefined ||
                      data.imgArr[1].linkText !== undefined ||
                      data.imgArr[1].link !== undefined ? (
                        <>  
                          <div className="col-md-6 col-12 d-flex flex-column  img-container-2 align-items-xl-end justify-content-end  ">
                            <div className=" service-img overflow-hidden  img-box      position-relative  ">
                              <motion.div
                                initial={{ y: "700px", opacity: 1 }}
                                animate={
                                  isInView
                                    ? { opacity: 1, y: "0px" }
                                    : { y: "700px", opacity: 1 }
                                }
                                transition={{ duration: 0.6, ease: easeIn }}
                                className="   "
                              >
                                
                                <Image alt="Image"
                                  alt="Image"
                                  className="w-100 h-100 object-fit-cover   h-auto    "
                                  width={500}
                                  height={500}
                                  src={data.imgArr[1].imgPath}
                                ></Image>
                                <Link
                                  href={data.imgArr[1].link}
                                  className="  position-absolute service-link text-uppercase text-decoration-none  text-white"
                                >
                                  {data.imgArr[1].linkText}
                                </Link>
                              </motion.div>
                            </div>
                          </div>
                        </>
                      ) : null
                    ) : null}
                  </div>
                ) : null}
              </div>
              { 
              data.imgArr ? data.imgArr[3] !== undefined ||
              data.imgArr[4] !== undefined ||
              data.imgArr[2] !== undefined ?
              
                <motion.div
                  // initial={{ y: "+200px", opacity: "0" }}
                  // animate={{ y: "0px", delay: { staggerMenuItems }, opacity: "1" }}
                  // exit={{x:"000px",opacity:"0"}}
                  duration="1"
                  transition="ease"
                  className=" col-xl-6 lign-items-end service-img overflow-hidden right-block position-relative  row flex-row  align-items-end g-0 justify-content-evenly me-0 ms-0  overflow-hidden gx-4 ps-0"
                >
                  {data.imgArr && data.imgArr[2] !== undefined ? (
                    data.imgArr[2].imgPath !== undefined ||
                    data.imgArr[2].linkText !== undefined ||
                    data.imgArr[2].link !== undefined ? (
                      <>
                        <div className=" col-md-6 col-12  img-container-3  overflow-hidden">
                          <div className=" service-img overflow-hidden  img-box  justify-content-center   align-items-center     position-relative  p-0 n1">
                            <motion.div
                              initial={{ y: "700px", opacity: 1 }}
                              animate={
                                isInView
                                  ? { opacity: 1, y: "0px" }
                                  : { y: "700px", opacity: 1 }
                              }
                              transition={{ duration: 0.7, ease: easeIn }}
                              className="   "
                            >
                              
                              <Image alt="Image"
                                alt="Image"
                                className="w-100   w-100 h-100 object-fit-cover   col-3   n-1"
                                width={500}
                                height={500}
                                src={data.imgArr[2].imgPath}
                              ></Image>
                              <Link
                                href={data.imgArr[2].link}
                                className="   service-link position-absolute  text-uppercase text-decoration-none  text-white"
                              >
                                {data.imgArr[2].linkText}
                              </Link>
                            </motion.div>
                          </div>
                        </div>
                      </>
                    ) : null
                  ) : null}

                  <div className="row col-md-6 col-12 align-items-end m-0    img-container-4  justify-content-end overflow-hidden ">
                    {data.imgArr && data.imgArr[3] !== undefined ? (
                      data.imgArr[3].imgPath !== undefined ||
                      data.imgArr[3].linkText !== undefined ||
                      data.imgArr[3].link !== undefined ? (
                        <>
                          <div className=" service-img overflow-hidden p-0 img-box position-relative pb-20  ">
                            <motion.div
                              initial={{ y: "700px", opacity: 1 }}
                              animate={
                                isInView
                                  ? { opacity: 1, y: "0px" }
                                  : { y: "700px", opacity: 1 }
                              }
                              transition={{ duration: 0.8, ease: easeIn }}
                              className=" overflow-hidden  position-relative  z-3  "
                            >
                              
                              <Image alt="Image"
                                alt="Image"
                                className="w-100 h-100 object-fit-cover   col-3   n-2 "
                                src={data.imgArr[3].imgPath}
                                width={500}
                                height={500}
                              ></Image>
                              <Link
                                 href={data.imgArr[3].link}
                                className="   service-link position-absolute  text-uppercase text-decoration-none  text-white"
                              >
                                 {data.imgArr[3].linkText}
                              </Link>
                            </motion.div>
                          </div>
                        </>
                      ) : null
                    ) : null}
                    {data.imgArr && data.imgArr[4] !== undefined ? (
                      data.imgArr[4].imgPath !== undefined ||
                      data.imgArr[4].linkText !== undefined ||
                      data.imgArr[4].link !== undefined ? (
                        <>
                          <div className=" service-img overflow-hiddenn2 img-box p-0   position-relative pt-20  ">
                            <motion.div
                              initial={{ y: "700px", opacity: 1 }}
                              animate={
                                isInView
                                  ? { opacity: 1, y: "0px" }
                                  : { y: "700px", opacity: 1 }
                              }
                              transition={{ duration: 0.9, ease: easeIn }}
                              className=" overflow-hidden   position-relative  z-3 m2  "
                            >
                              
                              <Image alt="Image"
                                alt="Image"
                                className="   w-100 h-100 object-fit-cover   col-3    "
                                src={data.imgArr[4].imgPath}
                                width={500}
                                height={500}
                              ></Image>
                              <Link
                                href={data.imgArr[4].link}
                                className="   service-link position-absolute  text-uppercase text-decoration-none  text-white"
                              >
                                {data.imgArr[4].linkText}
                              </Link>
                            </motion.div>
                          </div>
                        </>
                      ) : null
                    ) : null}
                  </div>
                </motion.div>
               :null: null}
            </div>
          </AnimatePresence>
        </Section>
      ) : null}
    </>
  );
}

export default Services;
