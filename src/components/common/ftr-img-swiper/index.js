
import React, { useState, useEffect, useRef } from "react";
import Section from "./index.style";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
export default function Ftrswiper() {
  const [data, setData] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("/about/common.json");
        const jsonData = await response.json();
        setData(jsonData.brand);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
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
      data.imgs && data.imgs.length > 0 ? (
            <Section  className="mt-150">
              <Swiper slidesPerView={slidesPerView} className="mb-10">
              {data.imgs.map((index,keyindex) => (
                <SwiperSlide key={keyindex}>
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
             
            </Section>
          ) : null
      ) : null}
    </>
  );
}

