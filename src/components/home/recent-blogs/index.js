import Section from "./index.style";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import Date from "../../../../public/assets/wpengine.com/wp-content/uploads/2023/10/blog-7.jpg"
import BLog from "../../../../public/assets/wp-content/uploads/2023/10/blog-7.jpg";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  stagger,
  easeIn,
} from "framer-motion";
import { useRef } from "react";
function recentBlogs() {
  const [slidesPerView, setSlidesPerView] = useState(2);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      // return '<div className="dot ' + className + '">' + " " + "</div>";
      return '<div className="   ' + className + '">' +
      '<div className="dot">' + " " + "</div>" +
    '</div>';
    },
  };
  useEffect(() => {
    const handleResize = () => {
      //   Adjust the number of slides based on the viewport width
      if (window.innerWidth >= 992) {
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/recent-blog.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {} 
    };

    fetchData();
  }, []);
  return (
    <>
      {data ? (
        <Section   ref={ref}>
          <AnimatePresence>
            {data.title || data.text || data.blogs ? (
              <div
                className=" element-container mt-150  me-auto ms-auto mb-150"
              
              >
                {data.title !== undefined || data.text !== undefined ? (
                  <motion.div
                    initial={{ y: "50px", opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, y: "0px", scale: 1 } : ""}
                    transition={{ ease: "easeOut" }}
                    className="header-text  element-container-740 me-auto ms-auto mb"
                  >
                    {data.title ? (
                      <h2 className="fs-50 fw-7 clr-black text-center mb-20">
                        {data.title}
                      </h2>
                    ) : null}
                    {data.text ? (
                      <p className=" fs-16 clr-black text-center">
                        {data.text}{" "}
                      </p>
                    ) : null}
                  </motion.div>
                ) : null}
                {data.blogs ? (
                  <motion.div
                    initial={{ y: "50px", opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, y: "0px", scale: 1 } : ""}
                    transition={{ ease: "easeOut" }}
                    className="blogs"
                  >
                    <Swiper
                      navigation={true}
                      pagination={pagination}
                      modules={[Pagination]}
                      slidesPerView={slidesPerView}
                      className="row  d-flex flex-xl-r0w g-0  flex-column justify-content-center align-items-center "
                    >
                      {data.blogs.map((index,keyindex) => (
                        index.title || index.date || index.link || index.linktext ?
                        
                        <SwiperSlide key={keyindex} className="col-xl-6 col-12 p-3 d-flex  justify-content-center align-items-center">
                            <div className=" blog row g-0 m- m-xl-0">
                              {index.link !== undefined && index.link ?
                                <Link
                                className="col-xl-6 col-12 img-container"
                                href={index.link}
                              >
                              {index.img?  <div className="img-box  overflow-hidden">
                                  <Image alt="Image"
                                    alt="Image"
                                    className=" object-fit-contain w-100 h-auto"
                                    src={index.img}
                                    height={400}
                                    width={500}
                                   ></Image>
                                </div>:null}
                               
                              </Link>
                              :null}
                            
                              <div className="text col-xl-6 col-12  d-flex flex-column  m   justify-content-eveny    align-items-evenly">
                      {index.date !=undefined && index.date ?
                       <div className="date w-100 mb-3">
                       <svg
                         xmlns="http://www.w3.org/2000/svg"
                         width="20"
                         height="20"
                         fill="#ff5e62"
                         className="bi bi-calendar-check"
                         viewBox="0 0 16 16"
                       >
                         <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                         <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                       </svg>
                       <span className="fs-16 clr-black-50 text-uppercase ms-2 date">
                         {index.date}
                       </span>
                     </div>
                       :null}
                               {index.title !== undefined && index.title ?
                                <h4 className="title">
                                <Link
                                  className=" primary-clr-hover fs-30 fw-6 text-decoration-none clr-black "
                                  href="#"
                                >

                                        {index.title}
                                </Link>
                              </h4>
                               
                               :null}
                                {index.link || index.linktext ? 
                                <div className="primary-btn  me-auto mt-xl-0 w-fit-content  w-fit-content  btn-hover-primary-clr ">
                                  <Link
                                    className=" text-decoration-none "
                                    href={index.link ? index.link :"/"}
                                  >
                                    <span className=" text-decoration-none   text-uppercase  text-white ">
                                      {index.linktext ? index.linktext :"Explore more"}
                                    </span>
                                    <svg
                                      height="18"
                                      width="18"
                                      color="#ff5e62"
                                      className="icon"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 100 100"
                                    >
                                      {" "}
                                      <path
                                        fill="white"
                                        d="M11.22,97.57V3.43a1.38,1.38,0,0,1,2.09-1.18L91.76,49.32a1.38,1.38,0,0,1,0,2.36L13.31,98.75A1.38,1.38,0,0,1,11.22,97.57ZM24,26v49.1a1.37,1.37,0,0,0,2.08,1.18L67,51.68a1.38,1.38,0,0,0,0-2.36L26.05,24.77A1.37,1.37,0,0,0,24,26Z"
                                      ></path>{" "}
                                    </svg>
                                  </Link>
                                </div>
                               :null }
                              </div>
                            </div>
                          </SwiperSlide>
                        :null
                          
                        
                      ))}
                    </Swiper>
                  </motion.div>
                ) : null}
              </div>
            ) : null}
          </AnimatePresence>
        </Section>
      ) : null}
    </>
  );
}

export default recentBlogs;
