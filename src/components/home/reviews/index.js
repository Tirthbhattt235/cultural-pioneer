import Section from "./index.style";
import Image from "next/image";
import Link from "next/link";
import Bg from "../../../../public/assets/wp-content/uploads/2023/08/img-box-bg.png";
import Photo from "../../../../public/assets/wp-content/uploads/2023/10/home-three-testimonial-1-100x100.jpg";
import {
  AnimatePresence,
  motion,
  useInView,
  stagger,
  easeIn,
  easeInOut,
} from "framer-motion";
import { useRef } from "react"; 
import { useState, useEffect } from "react";

function reviews() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/reviews.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {}
    };

    fetchData();
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      {data ? (
        data.title !== undefined ||
        data.bodytext !== undefined ||
        data.reviews !== undefined ? (
          <Section style={{ backgroundImage: `url(${Bg.src})` }}>
            <AnimatePresence>
              <div className=" element-container pt-150 pb-150 row w-100  main-block d-flex  flex-row flex-wrap ">
                <div className="line-one d-flex justify-content-center align-items-center">
                  {data.title !== undefined ||
                  data.bodytext !== undefined ||
                  data.BtnLink !== undefined ||
                  data.BtnText !== undefined ? (
                    <div ref={ref} className="header-text ">
                      {data.title ? (
                        <motion.h2
                          // initial={{ y: "-50px", opacity: 0 }}
                          animate={isInView ? { opacity: 1, y: "0px" } : ""}
                          transition={{
                            ease: easeInOut,
                          }}
                          className=" fs-50 fw-7 clr-black mb-20"
                        >
                         
                          {data.title}
                        </motion.h2>
                      ) : null}
                      {data.bodytext ? (
                        <p className=" fs-16  mb-20 clr-black ">
                          {data.bodytext}
                        </p>
                      ) : null}
                      {data.BtnLink || data.BtnText ? (
                        <motion.div
                          // initial={{ y: "50px", opacity: 0 }}
                          animate={
                            isInView
                              ? { opacity: 1, y: "0px" }:""
                              // : { y: "50px", opacity: 0 }
                          }
                          transition={{
                            ease: easeInOut,
                          }}
                          className="primary-btn  me-auto  w-fit-content mt-40  w-fit-content  btn-hover-primary-clr "
                        >
                          <Link
                            className=" text-decoration-none  d-flex  justify-content-between  align-items-center   "
                            href={data.BtnLink ? data.BtnLink : "/"}
                          >
                            <span className=" text-decoration-none   text-uppercase  text-white fs-18 ">
                              {data.BtnText ? data.BtnText : "read more"}
                            </span>
                            <svg
                              height="32"
                              width="32"
                              color="#ff5e62"
                              className="  icon "
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                            >
                              <path
                                fill="white"
                                d="M11.22,97.57V3.43a1.38,1.38,0,0,1,2.09-1.18L91.76,49.32a1.38,1.38,0,0,1,0,2.36L13.31,98.75A1.38,1.38,0,0,1,11.22,97.57ZM24,26v49.1a1.37,1.37,0,0,0,2.08,1.18L67,51.68a1.38,1.38,0,0,0,0-2.36L26.05,24.77A1.37,1.37,0,0,0,24,26Z"
                              ></path>
                            </svg>
                          </Link>
                        </motion.div>
                      ) : null}
                    </div>
                  ) : null}
                </div>
                {data.reviews && data.reviews.length > 0 ? (
                 <>
                  <div className=" line-two d-lg-block d-none"></div>
                    <div className=" line-three reviews  position-relative ">
                      {data.reviews.map((index, ind,keyindex) => (
                        <motion.div
                        key={keyindex}
                          // initial={{ x: "200px" }}
                          animate={isInView ? { x: "0px" } : ""}
                          transition={{
                            ease: easeInOut,
                            delay: 0.1,
                          }}
                          key={ind + "review"}
                          className="review mb-4 me-lg-auto ms-lg-auto  me-0 ms-0 w-100 position-absolue"
                        >
                          <div className="box d-flex flex-row position-relative d-flex flex-lg-row  flex-column">
                            {index.img ? (
                              <Image alt="Image"
                                height={100}
                                src={Photo}
                                alt="Image"
                                className=""
                              ></Image>
                            ) : null}
                            <div className="text">
                              {index.text ? (
                                <p className="fs-18 clr-black mb-20">{index.text}</p>
                              ) : null}

                              {index.link || index.author || index.position ? (
                                <Link
                                  href={index.link}
                                  className=" text-decoration-none   link-hover hover"
                                >
                                  <span className="name clr-black fw-6 fs-20">
                                    {index.author}
                                  </span>

                                  <span className="designaiton primary-clr-hover ps-2 link-hover primary-clr text-uppercase fs-18">
                                    {" "}
                                    - &nbsp;{index.position}
                                  </span>
                                </Link>
                              ) : null}
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className=" position-absolute " height={32} viewBox="0 0 100 100 " fill="currentcolor">
    <path d="M42.82,51.76c-.34,14.06-6.8,25.08-18.38,33a39.22,39.22,0,0,1-22,6.87c-.24,0-.51,0-.75,0V77.85c1.35-.08,2.71,0,4-.24a27.5,27.5,0,0,0,22.94-22c.35-1.69.41-3.43.61-5.22H1.71V9.27c.34,0,.69-.06,1-.06H42.88c0,.33,0,.53,0,.75C42.92,23.89,43.16,37.83,42.82,51.76Z" />
    <path d="M97.86,50.26c-.37,17.82-8.94,30.54-25,38.09a36.72,36.72,0,0,1-15.32,3.27h-.7V78a27.33,27.33,0,0,0,22.1-11.38,26.72,26.72,0,0,0,5.28-16.14H56.77V9.27H97.92v1C97.92,23.58,98.14,36.92,97.86,50.26Z" />
  </svg>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                 </>
                   
                ) : null}
              </div>
            </AnimatePresence>
          </Section>
        ) : null
      ) : null}
    </>
  );
}

export default reviews;
