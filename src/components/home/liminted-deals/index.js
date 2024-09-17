import Section from "./index.style";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Img1 from "../../../../public/assets/wp-content/uploads/2023/10/shop-6.jpg";
import {
  AnimatePresence,
  motion,
  useInView,
  stagger,
  easeIn,
  easeInOut, 
} from "framer-motion";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
function LimitedDeals() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<div className="   ' + className + '">' +
      '<div className="dot">' + " " + "</div>" +
    '</div>';
    },
  };
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the number of slides based on the viewport width
      if (window.innerWidth >= 1030) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
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
  useEffect(() => {
    const calculateTimeRemaining = () => {
      const targetDate = new Date("2025-01-01"); // Set your target date here

      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTime({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    };

    const intervalId = setInterval(calculateTimeRemaining, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/limited-deals.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {}
    };

    fetchData();
  }, [setData]);
  return (
    <>
      {data ? (
        data.title !== undefined || data.bodytext || data.product ? (
          <Section>
            <AnimatePresence>
              <div className=" element-container-1720 mt-150 pt-150 pb-150 ">
                {data.title || data.bodytext ? (
                  <motion.div
                    // initial={{ y: "100px", opacity: 0 }}
                    animate={
                      isInView ? { opacity: 1, y: "0px" } : ""
                    }
                    transition={{ duration: "0.5", ease: easeInOut }}
                    className="header-text  element-container-740  me-auto ms-auto mb-20"
                  >
                    {data.title ? (
                      <h2 className="fs-50 clr-black text-center fw-7 mb-20">
                        {data.title}
                      </h2>
                    ) : null}
                    {data.bodytext ? (
                      <p className="fs-16  text-center mb-60">{data.bodytext}</p>
                    ) : null}

                    <div className="timer d-flex flex-row justify-content-center mb-10 position-relative ">
                      <div className="time">
                        <div className="mb-10  radius-50 time-element Days">
                          {time.days}
                        </div>
                        <span className="text ">Days</span>
                      </div>
                      <div className="time">
                        <div className="mb-10  radius-50 time-element hours">
                          {time.hours}
                        </div>
                        <span className="text ">Hours </span>
                      </div>
                      <div className="time">
                        <div className="mb-10  radius-50 time-element minutes">
                          {time.minutes}
                        </div>
                        <span className="text ">Mins</span>
                      </div>
                      <div className="time">
                        <div className="mb-10  radius-50 time-element Seconds">
                          {time.seconds}
                        </div>
                        <span className="text ">Secs</span>
                      </div>
                    </div>
                  </motion.div>
                ) : null}

                {data.product && data.product.length > 0 ? (
                  <div className="row g-0 ">
                    <Swiper
                      pagination={pagination}
                      modules={[Pagination]}
                      ref={ref}
                      slidesPerView={slidesPerView}
                      className="mySwiper d-flex justify-content-center  align-items-center flex-column "
                    >
                      {data.product.map((index,keyindex) =>
                        index.name || index.price || index.img ? (
                          <SwiperSlide key={keyindex} className="m position-relative d-flex justify-content-center  align-items-center ">
                            <div className="product d-flex  justify-content-center  align-items-center ">
                             {index.img ?
                              <div className="img-box overflow-hidden  position-relative">
                              <Image alt="Image"
                                priority
                                alt="Image"
                                height={500}
                                width={500}
                                src={index.img}
                                className="object-fit-contain w-100 h-auto"
                              ></Image>
                            </div>
                             :null}
                             

                              <div className="txt  position-absolute row g-0  
                              ">
                                <div className="left d-flex    flex-column">
                                  {index.link || index.name ? 
                                   <h5 className=" ">
                                   <Link
                                     href={index.link ? index.link :"/"}
                                     className=" clr-black w-100  text-decoration-none mb-20"
                                   >
                                     {index.name}
                                   </Link>
                                 </h5>
                                  :null}
                                 {index.price ? 
                                 <h6 className="clr-black mb-0 ">
                                 ${index.price}
                               </h6>
                                 :null}
                                  
                                </div>
                                <div className="right d-flex flex-row flex-wrap  flex-grow-1 justify-content-sm-evenly justify-content-start align-items-center ">
                                  <Link
                                    href="#"
                                    className="icon text-decoration-none "
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      className="bi bi-cart2"
                                      viewBox="0 0 16 16"
                                    >
                                      {" "}
                                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />{" "}
                                    </svg>
                                  </Link>
                                  <Link
                                    href="#"
                                    className="icon text-decoration-none "
                                  >
                                    <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                                  </Link>

                              
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        ) : null
                      )}
                    </Swiper>
                  </div>
                ) : null}
              </div>
            </AnimatePresence>
          </Section>
        ) : null
      ) : null}
    </>
  );
}

export default LimitedDeals;
