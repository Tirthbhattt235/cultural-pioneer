import Section from "./index.style";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Cup from "../../../../public/assets/wp-content/uploads/2023/10/Home-3-Cup-Before.png";
import {
  AnimatePresence,
  motion,
  inView,
  easeIn,
  animate,
  useInView,
  easeInOut,
} from "framer-motion";
import { useRef } from "react";

import LazyLoadComponent from "../../common/LazyLoading";

import Linearprogress from "../../common/linear-progress";
import { setDate } from "date-fns";
function AdverttizeBanner() {
  const [contentLoaded, setContentLoaded] = useState(false);

  const loadContent = () => {
    // Perform the content loading here
    setContentLoaded(true);
  };
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the number of slides based on the viewport width
      if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    // Initial setup
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<div className="   ' +
        className +
        '">' +
        '<div className="dot">' +
        " " +
        "</div>" +
        "</div>"
      );
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: false });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: false });
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: false });


  const [data, setData] = useState([]);
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("/ad-banner.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {}
    };

    fetchData();
  }, []);
  return (
    <>
      {data ? 
        data.title !== undefined || 
        data.bodytext !== undefined ||
        data.BtnLink !== undefined ||
        data.BtnText !== undefined ? 
          <Section
            className="  pt-100 pb-100 mt-150  "
           
          >
            <AnimatePresence>
            <div className="d-flex row  g-0 element-container me-ms-auto me-auto ms-auto"  ref={ref}>
                {data.imgpath && data.imgpath.length > 0 ? (
                  <div className="col-xl-7 col-12 d-flex position-relative   flex-row  justify-content-center align-items-center">
                    <div className="anim-des"></div>
                    <Swiper
                      pagination={pagination}
                      modules={[Pagination]}
                      slidesPerView={1}
                      className="mySwiper "
                    >
                      {data.imgpath.map((index,keyindex) =>
                        index.img1 !== undefined ||
                        index.img2 !== undefined ||
                        index.link !== undefined ||
                        index.linktext !== undefined ? (
                          <SwiperSlide  key={keyindex+"BannerProducts"+Math.random(4)} className="justify-content-around  align-items-center row flex-row me-0 ms-0  flex-lg-row flex-column d-flex   g-2">
                            <>
                              {index.img1 !== undefined ||
                              index.link !== undefined ||
                              index.linktext !== undefined ? 
                                <div className="img-box-slieder col-lg-6 col-12 p-10 p-10  img-box  position-relative">
                                  
                                    <motion.div
                                      className=" "
                                      // initial={{ x: "-200px", opacity: 0.5 }}
                                      animate={
                                        isInView
                                          ? {
                                              opacity: 1,
                                              x: "0px",
                                            }
                                          : ""
                                      }
                                      //  transition={ea}
                                      transition={{
                                        // duration: 0.5,
                                        ease: "easeOut",
                                      }}
                                    >
                                      <div className=" overflow-hidden">
                                        <Image alt="Image"
                                          alt="Image"
                                          width={500}
                                          height={500}
                                          src={index.img1}
                                          className=" object-fit-contain w-100 h-auto position-relative "
                                        ></Image>
                                        {index.linktext || index.link ? (
                                          <div className="link-wrapper w-100  position-absolute d-flex justify-content-end tp[]">
                                            <Link
                                              href={
                                                index.link ? index.link : "/"
                                              }
                                              className="  text-decoration-none text-white   text-uppercase fw-5 fs-14"
                                            >
                                              {index.linktext
                                                ? index.linktext
                                                : "Before"}
                                            </Link>
                                          </div>
                                        ) : null}
                                      </div>
                                    </motion.div>
                                 
                                </div>
                               : null}
                              {index.img2 !== undefined ||
                              index.link !== undefined ||
                              index.linktext2 !== undefined ? (
                                <div  className="img-box-slieder col-lg-6 col-12 p-10 p-10  img-box  position-relative">
                              
                                    <motion.div
                                      className=" "
                                      // initial={{ x: "-200px", opacity: 0 }}
                                      animate={
                                        isInView
                                          ? {
                                              
                                              opacity: 1,
                                              x: "0px",
                                            }
                                          : ""
                                      }
                                      //  transition={ea}
                                      transition={{
                                        // duration: 0.5,
                                        ease: "easeOut",
                                      }}
                                    >
                                      <div className=" overflow-hidden">
                                        <Image alt="Image"
                                          priority
                                          alt="Image"
                                          width={500}
                                          height={500}
                                          src={index.img1}
                                          className=" object-fit-contain w-100 h-auto position-relative "
                                        ></Image>
                                        {index.linktext2 || index.link ? (
                                          <div className="link-wrapper w-100  position-absolute d-flex justify-content-end tp[]">
                                            <Link
                                              href={
                                                index.link ? index.link : "/"
                                              }
                                              className="  text-decoration-none text-white   text-uppercase fw-5 fs-14"
                                            >
                                              {index.linktext2
                                                ? index.linktext2
                                                : "Before"}
                                            </Link>
                                          </div>
                                        ) : null}
                                      </div>
                                    </motion.div>
                                  
                                </div>
                              ) : null}
                            </>
                          </SwiperSlide>
                        ) : null
                      )}
                    </Swiper>
                  </div>
                ) : null}
                {(data.progressBar !== undefined && data.progressBar) ||
                (data.title !== undefined && data.title) ||
                (data.bodytext !== undefined && data.bodytext) ||
                (data.BtnLink !== undefined && data.BtnLink) ||
                (data.BtnText !== undefined && data.BtnText) ? (
                  <>
                    <div ref={ref2} className="col-xl-5  col-12  d-flex  flex-column  position-relative  justify-content-center right-col ">
                    <div className="anim-des z-0 "></div>
                      <motion.div
                        // initial={{ x: "100px", scale: 0.8 }}
                        animate={
                          isInView2
                            ? {
                                opacity: 1,
                                scale: 1,
                                x: "0px",
                              }
                            : ""
                        }
                        //  transition={ea}
                        transition={{
                          // duration: 0.5, 
                          ease: "easeOut",
                        }}
                        className="z-3"
                      >
                        {data.title ? (
                          <h2 className=" fs-50 fw-7 text-white mb-3">
                            {data.title}
                          </h2>
                        ) : null}
                        {data.bodytext ? (
                          <p className=" fs-16 text-white mb-4">
                            {data.bodytext}
                          </p>
                        ) : null}
                        {data.progressBar ? (
                          <div className=" linear-progress w-100">
                            {data.progressBar.map((index,keyindex) => (
                              <LazyLoadComponent
                                onIntersection={loadContent}
                                className="mb-3"
                                
                              >
                                {contentLoaded ? (
                                  <div className="progress-line position-relative" key={keyindex}>
                                    <h4 className=" position-relative w-75 fs-20 text-white mb-15">
                                      {index.title ? index.title : "quality"}
                                    </h4>
                                    <Linearprogress
                                      done={index.number ? index.number : "50"}
                                    />
                                  </div>
                                ) : (
                                  ""
                                )}
                              </LazyLoadComponent>
                            ))}
                          </div>
                        ) : null}
                      </motion.div>
                    </div>
                  </>
                ) : null}
              </div>
            </AnimatePresence>
              
          </Section>
         : null
       : null}
    </>
  );
}

export default AdverttizeBanner;
