import Section, { SubSection } from "./index.style";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useInView,
  stagger,
  easeIn,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";

function Brands() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [data, setData] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/about/common.json");
        const jsonData = await response.json();
        setData(jsonData.brand);
      } catch (error) {}
    };

    fetchData();
    const handleResize = () => {
      // Adjust the number of slides based on the viewport width
      if (window.innerWidth >= 1280) {
        setSlidesPerView(7);

      }
       else if (window.innerWidth >= 1280) {
        setSlidesPerView(6);
      } else  if(window.innerWidth >= 992) {
        setSlidesPerView(5);
      }
       else  if(window.innerWidth >= 768) {
        setSlidesPerView(4);
      }
       else  if(window.innerWidth >= 450) {
        setSlidesPerView(2);
      }
       else  if(window.innerWidth >= 0) {
        setSlidesPerView(1);
      }
    };
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {data ? (
        <>
          <Section
            ref={ref}
            className=" text-black element-container pt-150  "
          >
            <AnimatePresence>
              <div className="    ">
                {data.title !== undefined || data.bodytext !== undefined ? (
                  <motion.div
                    initial={{ y: "-100px", opacity: 0 }}
                    animate={isInView ? { opacity: 1, y: "0px" } : ""}
                    transition={{
                      ease: "easeIn",
                    }}
                    className="header-text element-container-720 p-es-30 me-ms-auto"
                  >
                    {data.title ? (
                      <h2 className="fs-50 fw-7 text-center text-black mb-20">
                        {data.title}
                      </h2>
                    ) : null}
                    {data.bodytext ? (
                      <p className="fs-16 text-black mb-0 text-center">
                        {data.bodytext}
                      </p>
                    ) : null}
                  </motion.div>
                ) : null}

                <motion.div
                  initial={{ y: "100px", opacity: 0 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: "0px" }
                      : { y: "100px", opacity: 0 }
                  }
                  transition={{
                    ease: "easeIn",
                  }}
                  className="brands  5     "
                >
                  <motion.div className="line d-flex flex-row position-relative mb-20 ">
                    {data.Brands?.map((index,keyindex) => (
                      <div className="brand"  key={keyindex}>
                        <Link className="" href="#">
                         
                            <Image alt="Image"
                              className=" "
                              height={70}
                              width={160}
                              src={index.img}
                              alt="Image"
                            ></Image>
                          
                        </Link>
                      </div>
                    ))}
                  </motion.div>
                  <motion.div
                    initial={{ y: "100px", opacity: 0 }}
                    animate={
                      isInView
                        ? { opacity: 1, y: "0px" }
                        : { y: "100px", opacity: 0 }
                    }
                    transition={{
                      ease: "easeIn",
                    }}
                    className="line d-flex flex-row position-relative "
                  >
                    <>
                      {data.Brands?.map((index1,keyindex) => (
                        <div className="brand"  key={keyindex}>
                          <Link className="" href="#">
                              <Image alt="Image"
                                className=" "
                                height={70}
                                width={160}
                                src={index1.img}
                                alt="Image"
                              ></Image>
                          </Link>
                        </div>
                      ))}
                    </>
                  </motion.div>
                </motion.div>
              </div>
            </AnimatePresence>
          </Section >
          {data.imgs && data.imgs.length > 0 ? (
            <SubSection  className="mt-150">
              <Swiper slidesPerView={slidesPerView} className="mb-10">
              {data.imgs.map((index,keyindex) => (
                <SwiperSlide  key={keyindex}>
 <div className="img-container position-rel p-10 overflow-hidden  ">
  <div className="posposition-reative position-relative  overflow-hidden  d-flex  justify-content-center  align-items-center ">

  <Link href={index.imglink}>
                    <Image alt="Image"
                      height={800}
                      width={800}
                      className=" w-100 h-auto object-fit-contain position-relative  "
                      src={index.img}
                    ></Image>
                  </Link>
                  <div className="icon-wrapper position-absolute ">
                    <FontAwesomeIcon
                      width={20}
                      fill="currentColor"
                      icon={faInstagram}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="overlay-bg m-1"></div>
  </div>
                 
                </div>
                </SwiperSlide>
               
              ))}
              </Swiper>
             
            </SubSection>
          ) : null}
        </>
      ) : null}
    </>
  );
}

export default Brands;
