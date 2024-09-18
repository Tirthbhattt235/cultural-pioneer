import Section from "./index.style";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import "../../../../public/data.json";
import Img1 from "../../../../public/assets/images/place.png";
import {
  AnimatePresence,
  motion,
  inView,
  easeIn,
  animate,
  useInView,
  easeInOut,
  stagger,
  easeOut,
} from "framer-motion";
import { useRef } from "react";

function index() {
  const [data, setData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [isfirst, setisFirst] = useState(false);

  const handleHover = (index) => {
    setHoveredIndex(index);
    const btn = document.getElementById(`${index}`)
    if (btn) {
      const other = document.querySelectorAll(".anim-btn");
      other.forEach((item) => (
        item.classList.remove('activer')
      ))
      btn.classList.add('activer')



    }

  };

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        setData(jsonData);
        handleHover(0)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };





    fetchData();

  }, []);
  const handleclick = (event) => {
    event.preventDefault();
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const ref1 = useRef(null);
  const isInView1 = useInView(ref, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref, { once: true });
  return (
    <AnimatePresence>
      {data ? (
        <Section
          onLoad={(e) => handleHover(0)}
        >

          <div className=" element-container-1720  q pt-150 w-100 ">
            {data.title ||
              data.text ||
              data.btntxt ||
              data.btntxt ||
              data.btnlink ? (
              <div
                ref={ref}
                className="row justify-conten g-0 w-100 flex-row justify-content-between align-items-center "
              >
                <motion.div
                  // initial={{ y: "100px", opacity: 0 }}
                  animate={isInView ? { y: "0px", opacity: 1 } : ""}
                  transition={{
                    duration: "0.6",
                    ease: easeOut,
                  }}
                  className="header-text  pb-40 col-xl-3 col-lg-6 justify-content-lg-start  justify-content-center"
                >
                  {data.title !== undefined && data.title ? (
                    <h2 className="fs-50 fw-7  clr-black mb-20 ">
                      {data.title}
                    </h2>
                  ) : null}
                  {data.text !== undefined && data.text ? (
                    <p className="mb-0 clr-black fs-16">{data.text}</p>
                  ) : null}
                </motion.div>

                <div className="col-xl-9 col-lg-6   d-flex  justify-content align-items-center  justify-content-center ">
                  {data.btnlink !== undefined && data.btntxt ? (
                    <motion.div
                      // initial={{ y: "-100px", opacity: 0 }}
                      animate={isInView ? { y: "0px", opacity: 1 } : ""}
                      transition={{
                        duration: "0.6",
                        ease: easeOut,
                      }}
                      className="primary-btn  ms-lg-auto me-lg-0 me-auto w-fit-content   w-fit-content  btn-hover-primary-clr "
                    >
                      <Link
                        href={data.btnlink ? data.btnlink : ""}
                        id={index}
                        className=" text-decoration-none d-flex  justify-content-berween align-items-center "
                      >
                        <span className=" text-decoration-none  fs-18 text-uppercase  text-white ">
                          {data.btntxt ? data.btntxt : "Read More"}
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
                  ) : null}
                </div>
              </div>
            ) : null}

            <div
              ref={ref1}
              className="row g-0 d-flex   justify-content-center align-items-lg-center align-items-start"
            >
              <div className="col-lg-3 pagination-list">
                <motion.ul
                  // initial={{ y: "100px", opacity: 0 }}
                  animate={isInView1 ? { y: "0px", opacity: 1 } : ""}
                  transition={{
                    duration: "0.6",
                    ease: easeOut,
                  }}
                  className="d-flex flex-column pe-0 ps-0 align-items-start p-20 p-md-0  "
                >
                  {data.projects && data.projects.length > 0 ? (
                    <>
                      {data.projects.map((item, index) => (
                        <li
                          key={index + "Cultural PioneersTheme"}
                          onMouseEnter={() => handleHover(index)}
                          // onMouseLeave={() => handleHover(null)}
                          className="h-auto  w-fit-content"
                        >
                          <Link
                            href="/#"
                            onClick={(event) => {
                              event.preventDefault();
                              handleHover(index)
                            }}
                            id={`${index}`}
                            className=" border-0 cursor-pointer  text-decoration-none  fs-30    clr-black anim-btn fs-30 fw-6 text-white"
                          >
                            {" "}
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </>
                  ) : null}
                </motion.ul>
              </div>
              <motion.div
                // initial={{ x: "100px", opacity: 0 }}
                // animate={isInView1 ? { x: "0px", opacity: 1 } : ""}
                transition={{
                  duration: "0.5",
                  staggerChildren: 0.1,
                  ease: easeOut,
                }}
                className="col-lg-9 slider row g-0 justify-content-center  p-20 pe-0 pt-0 "
              >
                {hoveredIndex !== null &&
                  (data.projects ?
                    data.projects.length > 0 ?
                      data.projects[hoveredIndex] ? (
                        data.projects[hoveredIndex].head1 ? (
                          data.projects[hoveredIndex].head2 ? (
                            <>
                              <motion.div
                                // initial={{ x: "100px", opacity: 0 }}
                                animate={isInView1 ? { x: "0px", opacity: 1 } : ""}
                                transition={{
                                  duration: "0.5",
                                  staggerChildren: 0.1,
                                  ease: easeOut,
                                }}
                                className="project-item   col-md-4   radius-50"
                              >
                                <div className="img-box  h-auto  position-relative d-flex  justify-content-center  align-items-center ">
                                  <Image
                                    alt="Image"
                                    src={Img1}
                                    className=" object-fit-contain w-100 h-auto position-relative"
                                  ></Image>
                                  <div className=" top-0 me-auto ms-auto position-absolute w-100 h-100 d-flex justify-content-center align-items-center ">
                                    <div className="icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0"
                                        y="0"
                                        enableBackground="new 0 0 140 140"
                                        viewBox="0 0 140 140"
                                      >
                                        <path d="M98.3 5.5c-.6-.3-1.2-.5-1.9-.5-.6 0-1.2.1-1.7.3-.5.3-.9.8-1.2 1.3-.2.4-.4.9-.4 1.4-.1.3 0 .7.2 1.1.1.4.3.7.6 1 .3.3.5.6.8.9.2.2.5.5.7.8.2.2.3.5.4.8.1.3 0 .6-.1.9-.1.3-.4.6-.8.6s-.9-.1-1.3-.3c-.5-.2-.9-.6-1.2-1-.3-.4-.5-.9-.6-1.4l-1.9.6c.2.7.5 1.4.9 2 .5.6 1.1 1.1 1.8 1.4.9.6 2 .8 3 .6.9-.2 1.7-.9 2.1-1.7.2-.4.4-.9.4-1.4 0-.4 0-.8-.2-1.2-.1-.4-.4-.7-.6-1-.3-.3-.5-.6-.8-.9-.2-.2-.5-.5-.7-.8-.1-.3-.3-.5-.4-.8-.1-.3 0-.6.1-.8.1-.3.4-.5.7-.5.4 0 .8.1 1.2.3.3.1.7.4.9.7.2.4.4.8.5 1.2l1.9-.6c-.1-.7-.4-1.2-.8-1.7s-1-1-1.6-1.3z"></path>
                                        <path d="M102.8 21.8L107 25.4 108.2 24 104 20.4 105.8 18.2 109.6 21.4 110.8 20 107 16.8 108.7 14.8 112.8 18.3 114 16.9 109.9 13.4 109.5 13 108.3 12 101.2 20.4 102.4 21.4z"></path>
                                        <path d="M111.9 30.9L112.2 31.4 115.5 35.9 117 34.8 113.7 30.3 116 28.6 119 32.6 120.5 31.5 117.5 27.5 119.6 26 122.9 30.3 124.4 29.2 121.2 24.8 119.9 23.1 111 29.6z"></path>
                                        <path d="M121.9 49.8L126.5 48.6 127.7 53.2 123.1 54.4 123.6 56.5 134.3 53.7 133.7 51.7 129.5 52.8 128.3 48.2 132.5 47.1 132 45 121.4 47.7z"></path>
                                        <path d="M135.2 65.8c-.3-.7-.7-1.3-1.2-1.8s-1.1-.9-1.8-1.2-1.4-.5-2.2-.5c-1.5 0-3 .5-4.1 1.6-1.1 1-1.7 2.5-1.7 4 0 .8.1 1.5.5 2.3.3.7.7 1.3 1.2 1.8s1.1.9 1.8 1.2c1.4.6 3 .7 4.4.1.6-.3 1.3-.7 1.8-1.2s.9-1.1 1.2-1.8c.6-1.4.6-3 .1-4.5zm-1.9 3.7c-.2.4-.5.8-.8 1.1-.4.3-.8.5-1.2.7-.5.1-1 .2-1.5.2-.6 0-1.3-.2-1.9-.5-.6-.3-1-.8-1.3-1.3-.3-.5-.4-1.2-.4-1.8 0-.5.1-.9.3-1.4.2-.4.5-.8.8-1.1.4-.3.8-.6 1.2-.7.5-.1 1-.2 1.5-.2.6 0 1.3.2 1.9.5.6.3 1 .8 1.3 1.3s.4 1.2.4 1.8c0 .5-.1.9-.3 1.4z"></path>
                                        <path d="M122.1 82.9L128.4 87.3 120.7 87.2 120.2 88.7 129.5 95.6 130.2 93.6 124 89.1 131.7 89.3 132.2 87.8 126 83.4 133.6 83.5 134.2 81.5 122.6 81.4z"></path>
                                        <path
                                          d="M114.3 101.8H116.39999999999999V112.8H114.3z"
                                          transform="rotate(-50.469 115.328 107.338)"
                                        ></path>
                                        <path d="M109.8 118.1L104 111 102.3 112.4 108.1 119.5 105.4 121.7 106.6 123.2 113.7 117.4 112.5 115.9z"></path>
                                        <path d="M86.4 121.4L88.3 127.7 84.5 124.3 83.1 124.7 81.8 129.6 79.9 123.3 77.9 123.9 81.1 134.5 82.6 134.1 84.6 126.8 90.3 131.8 91.7 131.4 88.5 120.8z"></path>
                                        <path d="M69.4 127l-4.5.1-.8-2h-2.3l4.6 10.9h1.8l4.3-11.1h-2.3l-.8 2.1zm-2.1 5.9l-1.6-4.1h3.2l-1.6 4.1zM54.4 123.7l-2.1-.5c-.7-.2-1.5-.3-2.3-.2-.7.1-1.4.3-2 .7-.6.4-1.2.8-1.6 1.4-.5.6-.8 1.3-1 2-.2.7-.2 1.5-.1 2.2.1.7.4 1.4.7 2 .4.6.9 1.2 1.5 1.6.6.5 1.4.8 2.1 1l2.1.5.7.2 1.4.3 2.7-10.7-1.4-.3-.7-.2zm-2.2 8.9l-2.1-.5c-.6-.1-1.2-.5-1.7-.9-.4-.4-.7-.9-.9-1.5-.2-.6-.2-1.3 0-1.9.1-.7.5-1.3.9-1.8.4-.4.9-.8 1.5-.9.6-.2 1.3-.1 1.9 0l2.1.5-1.7 7z"></path>
                                        <path d="M39.7 118.4L34.9 115.7 34 117.3 38.8 120 37.4 122.5 33 120.1 32.1 121.7 36.5 124.1 35.2 126.4 30.4 123.8 29.5 125.4 34.3 128 34.8 128.3 36.2 129.1 41.5 119.5 40.2 118.7z"></path>
                                        <path d="M61.6 10.7V7.8C29 10.3 4.6 38.9 7.2 71.6c1.1 14.1 7.2 27.3 17.2 37.3l1.7-2.3C15.7 96 9.8 81.8 9.8 67c0-29.4 22.6-53.9 51.8-56.3z"></path>
                                        <path d="M57.7 49.9L57.7 83.9 87.2 66.9z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <Link
                                    href="#"
                                    className=" position-absolute w-100  text-decoration-none product-link text-start"
                                  >
                                    <span className=" primary-clr text-uppercase fs-14">
                                      {" "}
                                      {data.projects[hoveredIndex].head1}
                                    </span>
                                    <br />
                                    <span className="text-white  text-uppercase fw-7 fs-20">
                                      {data.projects[hoveredIndex].head2}
                                    </span>
                                  </Link>

                                </div>
                              </motion.div>
                              <motion.div
                                // initial={{ x: "100px", opacity: 0 }}
                                animate={isInView1 ? { x: "0px", opacity: 1 } : ""}
                                transition={{
                                  duration: "1",
                                  staggerChildren: 0.1,
                                  ease: easeOut,
                                }}
                                className="project-item  col-md-4   radius-50"
                              >
                                <div className="img-box  h-auto  position-relative">
                                  <Image
                                    alt="Image"
                                    src={Img1}
                                    className=" object-fit-contain w-100 h-auto position-relative"
                                  ></Image>
                                  <div className=" top-0 me-auto ms-auto position-absolute w-100 h-100 d-flex justify-content-center align-items-center top-0  ">
                                    <div className="icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0"
                                        y="0"
                                        enableBackground="new 0 0 140 140"
                                        viewBox="0 0 140 140"
                                      >
                                        <path d="M98.3 5.5c-.6-.3-1.2-.5-1.9-.5-.6 0-1.2.1-1.7.3-.5.3-.9.8-1.2 1.3-.2.4-.4.9-.4 1.4-.1.3 0 .7.2 1.1.1.4.3.7.6 1 .3.3.5.6.8.9.2.2.5.5.7.8.2.2.3.5.4.8.1.3 0 .6-.1.9-.1.3-.4.6-.8.6s-.9-.1-1.3-.3c-.5-.2-.9-.6-1.2-1-.3-.4-.5-.9-.6-1.4l-1.9.6c.2.7.5 1.4.9 2 .5.6 1.1 1.1 1.8 1.4.9.6 2 .8 3 .6.9-.2 1.7-.9 2.1-1.7.2-.4.4-.9.4-1.4 0-.4 0-.8-.2-1.2-.1-.4-.4-.7-.6-1-.3-.3-.5-.6-.8-.9-.2-.2-.5-.5-.7-.8-.1-.3-.3-.5-.4-.8-.1-.3 0-.6.1-.8.1-.3.4-.5.7-.5.4 0 .8.1 1.2.3.3.1.7.4.9.7.2.4.4.8.5 1.2l1.9-.6c-.1-.7-.4-1.2-.8-1.7s-1-1-1.6-1.3z"></path>
                                        <path d="M102.8 21.8L107 25.4 108.2 24 104 20.4 105.8 18.2 109.6 21.4 110.8 20 107 16.8 108.7 14.8 112.8 18.3 114 16.9 109.9 13.4 109.5 13 108.3 12 101.2 20.4 102.4 21.4z"></path>
                                        <path d="M111.9 30.9L112.2 31.4 115.5 35.9 117 34.8 113.7 30.3 116 28.6 119 32.6 120.5 31.5 117.5 27.5 119.6 26 122.9 30.3 124.4 29.2 121.2 24.8 119.9 23.1 111 29.6z"></path>
                                        <path d="M121.9 49.8L126.5 48.6 127.7 53.2 123.1 54.4 123.6 56.5 134.3 53.7 133.7 51.7 129.5 52.8 128.3 48.2 132.5 47.1 132 45 121.4 47.7z"></path>
                                        <path d="M135.2 65.8c-.3-.7-.7-1.3-1.2-1.8s-1.1-.9-1.8-1.2-1.4-.5-2.2-.5c-1.5 0-3 .5-4.1 1.6-1.1 1-1.7 2.5-1.7 4 0 .8.1 1.5.5 2.3.3.7.7 1.3 1.2 1.8s1.1.9 1.8 1.2c1.4.6 3 .7 4.4.1.6-.3 1.3-.7 1.8-1.2s.9-1.1 1.2-1.8c.6-1.4.6-3 .1-4.5zm-1.9 3.7c-.2.4-.5.8-.8 1.1-.4.3-.8.5-1.2.7-.5.1-1 .2-1.5.2-.6 0-1.3-.2-1.9-.5-.6-.3-1-.8-1.3-1.3-.3-.5-.4-1.2-.4-1.8 0-.5.1-.9.3-1.4.2-.4.5-.8.8-1.1.4-.3.8-.6 1.2-.7.5-.1 1-.2 1.5-.2.6 0 1.3.2 1.9.5.6.3 1 .8 1.3 1.3s.4 1.2.4 1.8c0 .5-.1.9-.3 1.4z"></path>
                                        <path d="M122.1 82.9L128.4 87.3 120.7 87.2 120.2 88.7 129.5 95.6 130.2 93.6 124 89.1 131.7 89.3 132.2 87.8 126 83.4 133.6 83.5 134.2 81.5 122.6 81.4z"></path>
                                        <path
                                          d="M114.3 101.8H116.39999999999999V112.8H114.3z"
                                          transform="rotate(-50.469 115.328 107.338)"
                                        ></path>
                                        <path d="M109.8 118.1L104 111 102.3 112.4 108.1 119.5 105.4 121.7 106.6 123.2 113.7 117.4 112.5 115.9z"></path>
                                        <path d="M86.4 121.4L88.3 127.7 84.5 124.3 83.1 124.7 81.8 129.6 79.9 123.3 77.9 123.9 81.1 134.5 82.6 134.1 84.6 126.8 90.3 131.8 91.7 131.4 88.5 120.8z"></path>
                                        <path d="M69.4 127l-4.5.1-.8-2h-2.3l4.6 10.9h1.8l4.3-11.1h-2.3l-.8 2.1zm-2.1 5.9l-1.6-4.1h3.2l-1.6 4.1zM54.4 123.7l-2.1-.5c-.7-.2-1.5-.3-2.3-.2-.7.1-1.4.3-2 .7-.6.4-1.2.8-1.6 1.4-.5.6-.8 1.3-1 2-.2.7-.2 1.5-.1 2.2.1.7.4 1.4.7 2 .4.6.9 1.2 1.5 1.6.6.5 1.4.8 2.1 1l2.1.5.7.2 1.4.3 2.7-10.7-1.4-.3-.7-.2zm-2.2 8.9l-2.1-.5c-.6-.1-1.2-.5-1.7-.9-.4-.4-.7-.9-.9-1.5-.2-.6-.2-1.3 0-1.9.1-.7.5-1.3.9-1.8.4-.4.9-.8 1.5-.9.6-.2 1.3-.1 1.9 0l2.1.5-1.7 7z"></path>
                                        <path d="M39.7 118.4L34.9 115.7 34 117.3 38.8 120 37.4 122.5 33 120.1 32.1 121.7 36.5 124.1 35.2 126.4 30.4 123.8 29.5 125.4 34.3 128 34.8 128.3 36.2 129.1 41.5 119.5 40.2 118.7z"></path>
                                        <path d="M61.6 10.7V7.8C29 10.3 4.6 38.9 7.2 71.6c1.1 14.1 7.2 27.3 17.2 37.3l1.7-2.3C15.7 96 9.8 81.8 9.8 67c0-29.4 22.6-53.9 51.8-56.3z"></path>
                                        <path d="M57.7 49.9L57.7 83.9 87.2 66.9z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <Link
                                    href="#"
                                    className=" position-absolute w-100  text-decoration-none product-link text-start"
                                  >
                                    <span className=" primary-clr text-uppercase fs-14">
                                      {" "}
                                      {data.projects[hoveredIndex].head1}
                                    </span>
                                    <br />
                                    <span className="text-white  text-uppercase fw-7 fs-20">
                                      {data.projects[hoveredIndex].head2}
                                    </span>
                                  </Link>

                                </div>
                              </motion.div>
                              <motion.div
                                // initial={{ x: "100px", opacity: 0 }}
                                animate={isInView1 ? { x: "0px", opacity: 1 } : ""}
                                transition={{
                                  duration: "1.5",
                                  staggerChildren: 0.1,
                                  ease: easeOut,
                                }}
                                className="project-item  col-md-4   radius-50"
                              >
                                <div className="img-box  h-auto  position-relative">
                                  <Image
                                    alt="Image"
                                    src={Img1}
                                    className=" object-fit-contain w-100 h-auto position-relative"
                                  ></Image>
                                  <div className=" top-0 me-auto ms-auto position-absolute w-100 h-100 d-flex justify-content-center align-items-center ">
                                    <div className="icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0"
                                        y="0"
                                        enableBackground="new 0 0 140 140"
                                        viewBox="0 0 140 140"
                                      >
                                        <path d="M98.3 5.5c-.6-.3-1.2-.5-1.9-.5-.6 0-1.2.1-1.7.3-.5.3-.9.8-1.2 1.3-.2.4-.4.9-.4 1.4-.1.3 0 .7.2 1.1.1.4.3.7.6 1 .3.3.5.6.8.9.2.2.5.5.7.8.2.2.3.5.4.8.1.3 0 .6-.1.9-.1.3-.4.6-.8.6s-.9-.1-1.3-.3c-.5-.2-.9-.6-1.2-1-.3-.4-.5-.9-.6-1.4l-1.9.6c.2.7.5 1.4.9 2 .5.6 1.1 1.1 1.8 1.4.9.6 2 .8 3 .6.9-.2 1.7-.9 2.1-1.7.2-.4.4-.9.4-1.4 0-.4 0-.8-.2-1.2-.1-.4-.4-.7-.6-1-.3-.3-.5-.6-.8-.9-.2-.2-.5-.5-.7-.8-.1-.3-.3-.5-.4-.8-.1-.3 0-.6.1-.8.1-.3.4-.5.7-.5.4 0 .8.1 1.2.3.3.1.7.4.9.7.2.4.4.8.5 1.2l1.9-.6c-.1-.7-.4-1.2-.8-1.7s-1-1-1.6-1.3z"></path>
                                        <path d="M102.8 21.8L107 25.4 108.2 24 104 20.4 105.8 18.2 109.6 21.4 110.8 20 107 16.8 108.7 14.8 112.8 18.3 114 16.9 109.9 13.4 109.5 13 108.3 12 101.2 20.4 102.4 21.4z"></path>
                                        <path d="M111.9 30.9L112.2 31.4 115.5 35.9 117 34.8 113.7 30.3 116 28.6 119 32.6 120.5 31.5 117.5 27.5 119.6 26 122.9 30.3 124.4 29.2 121.2 24.8 119.9 23.1 111 29.6z"></path>
                                        <path d="M121.9 49.8L126.5 48.6 127.7 53.2 123.1 54.4 123.6 56.5 134.3 53.7 133.7 51.7 129.5 52.8 128.3 48.2 132.5 47.1 132 45 121.4 47.7z"></path>
                                        <path d="M135.2 65.8c-.3-.7-.7-1.3-1.2-1.8s-1.1-.9-1.8-1.2-1.4-.5-2.2-.5c-1.5 0-3 .5-4.1 1.6-1.1 1-1.7 2.5-1.7 4 0 .8.1 1.5.5 2.3.3.7.7 1.3 1.2 1.8s1.1.9 1.8 1.2c1.4.6 3 .7 4.4.1.6-.3 1.3-.7 1.8-1.2s.9-1.1 1.2-1.8c.6-1.4.6-3 .1-4.5zm-1.9 3.7c-.2.4-.5.8-.8 1.1-.4.3-.8.5-1.2.7-.5.1-1 .2-1.5.2-.6 0-1.3-.2-1.9-.5-.6-.3-1-.8-1.3-1.3-.3-.5-.4-1.2-.4-1.8 0-.5.1-.9.3-1.4.2-.4.5-.8.8-1.1.4-.3.8-.6 1.2-.7.5-.1 1-.2 1.5-.2.6 0 1.3.2 1.9.5.6.3 1 .8 1.3 1.3s.4 1.2.4 1.8c0 .5-.1.9-.3 1.4z"></path>
                                        <path d="M122.1 82.9L128.4 87.3 120.7 87.2 120.2 88.7 129.5 95.6 130.2 93.6 124 89.1 131.7 89.3 132.2 87.8 126 83.4 133.6 83.5 134.2 81.5 122.6 81.4z"></path>
                                        <path
                                          d="M114.3 101.8H116.39999999999999V112.8H114.3z"
                                          transform="rotate(-50.469 115.328 107.338)"
                                        ></path>
                                        <path d="M109.8 118.1L104 111 102.3 112.4 108.1 119.5 105.4 121.7 106.6 123.2 113.7 117.4 112.5 115.9z"></path>
                                        <path d="M86.4 121.4L88.3 127.7 84.5 124.3 83.1 124.7 81.8 129.6 79.9 123.3 77.9 123.9 81.1 134.5 82.6 134.1 84.6 126.8 90.3 131.8 91.7 131.4 88.5 120.8z"></path>
                                        <path d="M69.4 127l-4.5.1-.8-2h-2.3l4.6 10.9h1.8l4.3-11.1h-2.3l-.8 2.1zm-2.1 5.9l-1.6-4.1h3.2l-1.6 4.1zM54.4 123.7l-2.1-.5c-.7-.2-1.5-.3-2.3-.2-.7.1-1.4.3-2 .7-.6.4-1.2.8-1.6 1.4-.5.6-.8 1.3-1 2-.2.7-.2 1.5-.1 2.2.1.7.4 1.4.7 2 .4.6.9 1.2 1.5 1.6.6.5 1.4.8 2.1 1l2.1.5.7.2 1.4.3 2.7-10.7-1.4-.3-.7-.2zm-2.2 8.9l-2.1-.5c-.6-.1-1.2-.5-1.7-.9-.4-.4-.7-.9-.9-1.5-.2-.6-.2-1.3 0-1.9.1-.7.5-1.3.9-1.8.4-.4.9-.8 1.5-.9.6-.2 1.3-.1 1.9 0l2.1.5-1.7 7z"></path>
                                        <path d="M39.7 118.4L34.9 115.7 34 117.3 38.8 120 37.4 122.5 33 120.1 32.1 121.7 36.5 124.1 35.2 126.4 30.4 123.8 29.5 125.4 34.3 128 34.8 128.3 36.2 129.1 41.5 119.5 40.2 118.7z"></path>
                                        <path d="M61.6 10.7V7.8C29 10.3 4.6 38.9 7.2 71.6c1.1 14.1 7.2 27.3 17.2 37.3l1.7-2.3C15.7 96 9.8 81.8 9.8 67c0-29.4 22.6-53.9 51.8-56.3z"></path>
                                        <path d="M57.7 49.9L57.7 83.9 87.2 66.9z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <Link
                                    href="#"
                                    className=" position-absolute w-100  text-decoration-none product-link text-start"
                                  >
                                    <span className=" primary-clr text-uppercase fs-14">
                                      {" "}
                                      {data.projects[hoveredIndex].head1}
                                    </span>
                                    <br />
                                    <span className="text-white  text-uppercase fw-7 fs-20">
                                      {data.projects[hoveredIndex].head2}
                                    </span>
                                  </Link>

                                </div>
                              </motion.div>
                            </>
                          ) : null
                        ) : null
                      ) : null : null : null)}
              </motion.div>
            </div>
          </div>
        </Section>
      ) : null}
    </AnimatePresence>
  );
}

export default index;
