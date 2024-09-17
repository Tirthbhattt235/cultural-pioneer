import Section from "./herosecction.style";
import Bg1 from "../../../../public/assets/wp-content/uploads/2023/09/Home-3-Slider-1-dot-img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import Image from "next/image";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, inView, easeIn } from "framer-motion";

import Img1 from "../../../../public/assets/wp-content/uploads/2023/09/Home-3-Slider-1-Tshirt.gif";
function heroSection() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      // return '<div className="dot ' + className + '">' + " " + "</div>";
      return '<div className="   ' + className + '">' +
      '<div className="dot">' + " " + "</div>" +
    '</div>';
    },
  };
  const handleslidechange = (swiperindex) => {
    var activeIndex = swiperindex;
  };
  const [currentIndex, setCurrentIndex] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/heroSection.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {}
    };

    fetchData();
  }, [setData]);
  return (
    <>
      {data ? (
        data.imgpath !== undefined || data.Slider !== undefined ? (
          <Section
            className=" overflow-hidden "
            style={{ backgroundImage: `url(${Bg1.src})` }}
          >
            <div className="HeroSection me-auto ms-auto  \ pt-250 pb-150 element-container">
              <div className="row pe-xl-4 ps-xl-4 pe-3 ps-3 h-100 d-flex g-0    flex-md-row-reverse justify-content-center  align-items-center  ">
                {data.imgpath ? (
                  <div className="col-md-6   col-12 d-flex justify-content-center align-items-md-start align-items-center">
                    <Image alt="Image"
                      alt="Image"
                      src={Img1}
                      className="w-100 h-100 "
                    ></Image>
                  </div>
                ) : null}

                {data.Slider ? (
                  data.Slider.length > 0 ? (
                    <div className="col-md-6 col-12 mt-4 mt-md-0 mt-5 txt h-100 d-flex justify-content-center align-items-end">
                      <Swiper
                        navigation={true}
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper"
                        onSlideChange={(newIndex) =>
                          setCurrentIndex(newIndex.activeIndex + 1)
                        }
                      >
                        {data.Slider.map((item,keyindex) => (
                          <SwiperSlide className=" text-md-start text-center" key={keyindex}>
                            <AnimatePresence>
                              {inView && (
                                <motion.div
                                  initial={{ x: "100px", opacity: "0" }}
                                  animate={{ x: "0px", opacity: "1" }}
                                  exit={{ opacity: "0" }}
                                  duration="0.8"
                                  transition="linear"
                                >
                                  {item.title !== undefined ||
                                  item.subtitle !== undefined ||
                                  item.Bodytext !== undefined ? (
                                    <div className="header">
                                      {item.title ? (
                                        <span className="mb-3">{item.title}</span>
                                      ) : null}

                                      {item.subtitle ? (
                                        <h1 className=" fs-60 fw-7 mt-3 mb-3">
                                          {item.subtitle}
                                        </h1>
                                      ) : null}
                                      {item.Bodytext ? (
                                        <p className="mb-0">{item.Bodytext}</p>
                                      ) : null}
                                    </div>
                                  ) : null}
                                  {item.qualities ?  <div className="services mb-20 mt-3">
                                    <ul className="ps-0 mb-0 d-flex  justify-content-md-center justify-content-start flex-column   ">
                                      {
                                        item.qualities?.map((serviceIndex,keyindex)=>(
                                          serviceIndex.service ?
                                          <li key={keyindex} className="text-start text-sm-center text-md-start d-flex  align-items-center ">
                                          <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 10.174999999999999 10"
                                          >
                                            <path
                                              d="M3.5,6l6.2-5.9C9.8,0,10,0,10.1,0.1c0.1,0.1,0.1,0.2,0,0.3L3.8,9.9C3.7,10,3.5,10,3.4,10    c0,0-0.1-0.1-0.1-0.1L0,4.7C0,4.6,0,4.4,0.1,4.4c0.1-0.1,0.2-0.1,0.3,0L3.5,6z"
                                              fill="#ff5e62"
                                            />
                                          </svg>
                                          <span className="mt-0">
                                           {serviceIndex.service}
                                          </span>
                                        </li>
                                          :null
                                          
                                        ))
                                      }
                                     
                                      
                                    </ul>
                                  </div> :null}
                                 
                                 {item.BtnLink || item.BtnText ?
                                 <div className="link-wrapper "> 
                                 <Link
                                   href={item.BtnLink ? item.BtnLink :"#"} 
                                   className="mt-4 me-auto ms-md-1 ms-auto primary-btn  d-flex justify-content-between  "
                                 >
                                   {item.BtnText ? item.BtnText : "Read more"}
                                   <svg
                                     xmlns="http://www.w3.org/2000/svg"
                                     className="ms-20"
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
                                :null}
                                  
                                  {/* </div> */}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  ) : null
                ) : null}
              </div>
            </div>
          </Section>
        ) : null
      ) : null}
    </>
  );
}
export default heroSection;
