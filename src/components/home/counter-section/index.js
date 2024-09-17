import Section from "./index.style";
import Image from "next/image";
import Link from "next/link";
// import { Tween } from "gsap/gsap-core";
import { useRef, useEffect, useState } from "react";

// import { Tween, ScrollTrigger, SplitChars, SplitWords } from "react-gsap";
import Bg from "../../../../public/assets/wp-content/uploads/2023/10/Home-3-Counter-Bg.jpg";
import CountUp from "react-countup";
import LazyLoadComponent from "../../common/LazyLoading";
// import { Tween, ScrollTrigger, SplitChars, SplitWords } from "react-gsap"
import {
  AnimatePresence,
  motion,
  inView,
  easeIn,
  animate,
  useInView,
} from "framer-motion";
import { isNull } from "util";

function counter() {
  const [contentLoaded, setContentLoaded] = useState(false);

  const loadContent = () => {
    // Perform the content loading here
    setContentLoaded(true);
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const imgref = useRef(null);
  const isInView1 = useInView(ref, { once: true });
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/counter.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {}
    };

    fetchData();
  }, []);
  return (
    <>
      {data ? (
        <Section
          className=" position-relative overflow-hidden mt-150 "
          ref={ref}
        >
          {data.img ? (
            <div className=" position-absolute move-image-wrapper h-100 w-100   overflow-hidden  vw-100">
              <Image alt="Image"
                className="move-image-anim w-100 h-100 vh-100 w-auto  "
                style={{ minHeight: "100%", minWidth: "100%" }}
                src={data.img}
                height="100"
                width="1000"
                ref={imgref}
              ></Image>
            </div>
          ) : null}
          <div className="elementor-background-overlay"></div>
          <div className="d-flex position-relative z-3 g-0  main  me-ms-auto  flex-column element-container-1500 pt-150 pb-150  overflow-hidden">
            <AnimatePresence> 
              <>
                <div className="row mb-100">
                  {data.title !== undefined ||
                  data.bodytext !== undefined ||
                  data.BtnLink !== undefined ||
                  data.BtnText !== undefined ? (
                    <div className=" fromLeft col-md-6 col-12 pe-0 ps-0">
                      <motion.div
                        initial={{ x: "-200px", }}
                        animate={
                          isInView
                            ? {
                                x: "0px",

                                opacity: 1,
                              }
                            : ""
                        }
                        transition={{ ease: "easeIn", delay: 0.3 }}
                        className="header-section max-width-65"
                      >
                        {data.title ? (
                          <h2 className=" text-white fs-50 fw-7 mb-20">
                            {data.title}
                          </h2>
                        ) : null}
                        {data.bodytext ? (
                          <p className="text-white mb-50">{data.bodytext}</p>
                        ) : null}
                        {data.BtnLink || data.BtnText ? (
                          <div className=" w  w-fit-content primary-btn me-auto  btn-hover-primary-clr">
                            <Link
                              className=" text-decoration-none d-flex justify-content-between  align-items-center  "
                              href={data.BtnLink ? data.BtnLink : "/"}
                            >
                              <span className=" text-decoration-none fs-18  text-uppercase  text-white ">
                                {data.BtnText ? data.BtnText : "read more"}
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
                        ) : null}
                      </motion.div>
                    </div>
                  ) : null}

                  <div className="col-md-6 col-12 fromright">
                    <motion.div
                      initial={{ x: "200px", opacity: 0 }}
                      animate={
                        isInView
                          ? {
                              x: "0px",

                              opacity: 1,
                            }
                          : ""
                      }
                      transition={{ ease: "easeIn", delay: 0.3 }}
                      className="w-100 h-100 d-flex  justify-content-md-center justify-content-start align-items-center"
                    >
                      <Link
                        href="#"
                        className="play-btn d-flex  justify-content-center align-items-center "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="white"
                          className="bi bi-play-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                        </svg>
                      </Link>
                    </motion.div>
                  </div>
                </div>
                {data.Counter && data.Counter.length > 0 ? (
                  data.title !== undefined || data.number !== undefined ? (
                    <motion.div
                      initial={{ y: "200px", opacity: 0 }}
                      animate={isInView ? { y: "0px", opacity: 1 } : ""}
                      //  exit={{y:"200px",opacity:"0"}}

                      transition={{ ease: "easeIn", delay: 0.3 }}
                      className=" fromBottom row counter flex-row  justify-content-xxl-evenly justify-content-start  align-items-center row"
                    >
                      {data.Counter.map((index,keyindex) => (
                        <LazyLoadComponent
                          className="ctr-item ctr-item  d-flex align-items-center "
                          onIntersection={loadContent}
                          key={keyindex}
                        >
                          {contentLoaded ? (
                            <div key={keyindex}>
                              <h2 className="d-flex justify-content-md-start justify-content-start  align-items-center">
                                <CountUp
                                  className="ctr-num"
                                  start={0}
                                  end={index.number}
                                ></CountUp>
                                <span className="ctr-title ps-3  text-uppercase">
                                  {index.title}
                                </span>
                              </h2>
                            </div>
                          ) : (
                            ""
                          )}
                        </LazyLoadComponent>
                      ))}
                    </motion.div>
                  ) : null
                ) : null}
              </>
            </AnimatePresence>
          </div>
        </Section>
      ) : null}
    </>
  );
}

export default counter;
