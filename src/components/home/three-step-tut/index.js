import Section from "./index.style";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useInView, easeIn } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import Img1 from "../../../../public/assets/wp-content/uploads/2023/10/Home-3-number-img-1.png";
function ThreeSteps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/ThreeSteps.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {}
    };

    fetchData();
  }, [setData]);
  return (
    <>
      {data ? (
        <Section
          ref={ref}
          className="    element-container-1720   mb-150 d-flex pt-150 flex-column justify-content-center align-items-center"
        >
          <AnimatePresence>
            {data.title !== undefined ||
            data.Subtitle !== undefined ||
            data.stepse !== undefined ? (
              <motion.div
                initial={{ y: "300px", opacity: 0 }}
                animate={isInView ? { y: "0px", opacity: 1 } : ""}
                duration="1"
                transition={{
                  delay: 0.5,
                }}
                className="header-text"
              >
                {data.title ? (
                  <h2 className=" fw-7  text-black mb-3 fs-50 d-flex  justify-content-center  flex-wraps ">
                    {data.title}
                  </h2>
                ) : null}
                {data.Subtitle ? <p className="mb-0">{data.Subtitle}</p> : null}
              </motion.div>
            ) : null}
          </AnimatePresence>

          <AnimatePresence>
            <motion.div
              initial={{ y: "100px", opacity: 0 }}
              animate={isInView ? { y: "0px", opacity: 1 } : ""}
              duration="0.8"
              transition={{
                delay: 0.5,
              }}
              className=""
            >
              {data.steps !== undefined && data.steps.length > 0 ? (
                <div className="three-steps row g-0 position-relative 
                ">
                  {data.steps?.map((index, inc,keyindex) =>
                    (index.title !== undefined && index.title) ||
                    (index.bodytext !== undefined && index.bodytext) ||
                    (index.img !== undefined && index.img) ? (
                      <div key={keyindex+"steps"+""+Math.random(50)} className="step-`${index}` step col-md-4 col-12  d-flex flex-column  justify-content-center  align-items-center ">
                        {index.img !== undefined || index.link !== undefined ? (
                          <div className="img-box   ">
                            <Link href={index.link ? index.link : "/"}>
                              <Image alt="Image"
                                priority
                                height={500}
                                width={500}
                                src={index.img}
                                alt="Image"
                                className="w-100 h-auto object-fit-contain "
                              ></Image>
                            </Link>
                          </div>
                        ) : null}

                        <div className="step-number">{inc + 1}</div>
                        {index.title !== undefined ||
                        index.bodytext !== undefined ? (
                          <div className="step-info ">
                            {index.title ?
                             <h5>
                             <Link
                                 href={index.link ? index.link : "/"}
                               className=" w-100 me-auto d-block fw-7 link-hover  text-decoration-none  text-black  text-center "
                             >
                               {index.title}
                             </Link>
                           </h5>
                            :null}
                            {index.bodytext ?
                            <p className="text-center mb-20">
                              {index.bodytext}
                          </p>
                            :null}
                           
                            
                          </div>
                        ) : null}
                      </div>
                    ) : null
                  )}

                  
                </div>
              ) : null}

             
                {
                  data.BtnLink !==undefined || data.BtnText !==undefined ?
                  <motion.div
                  initial={{ y: "300px", opacity: "0" }}
                  animate={isInView ?{ y: "0px", opacity: "1" }:{ y: "300px", opacity: "0" }}
                  duration="1"
                  transition={{
                    delay: 0.5,
                  }}
                  className=""
                >
                  <div className="primary-btn me-auto ms-auto  w-fit-content btn-hover-primary-clr ">
                    <Link
                      className=" text-decoration-none  d-flex justify-content-center  align-items-center "
                      href={data.link ? data.link : "/"}
                    >
                      <span className=" text-decoration-none   text-uppercase  text-white ">
                        {data.BtnText ? data.BtnText:"Read more"}
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
                  </div>
                </motion.div>
                  :null
                }
               
             
            </motion.div>
          </AnimatePresence>
        </Section>
      ) : null}
    </>
  );
}
export default ThreeSteps;
