import React, { useState, useEffect, useRef } from "react";
import Section from "./index.style";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
export default function AdditionalInformation() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/product-details.json");
        const jsonData = await response.json();
        setData(jsonData.information);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
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
  return (
    <>
      {data ? (
        data.title || data.imgs || data.text ? (
          <div className="right">
            <div className="wrapper">
              {data.title !== undefined && data.title ? (
                <h2 className=" fs-30 fw-7 text-center  mb-30">{data.title}</h2>
              ) : null}
              {data.imgs && data.imgs.length > 0 ? (
                <Swiper
                  className="mb-30"
                  slidesPerView={slidesPerView}
                  pagination={Pagination}
                >
                  {data.imgs.map((item, index) =>
                    item.img !== undefined && item.img ? (
                      <SwiperSlide key={index}>
                        <div className="img-wrapper">
                          <Image
                            alt="Image"
                            width={360}
                            height={275}
                            className=" object-fit-contain w-100 h-auto"
                            src={item.img}
                          ></Image>
                        </div>
                      </SwiperSlide>
                    ) : null
                  )}
                </Swiper>
              ) : null}
              {data.text !== undefined && data.text ? (
                <p className=" fs-16 fw-4 txt-center  mb-0">{data.text}</p>
              ) : null}
            </div>
          </div>
        ) : null
      ) : null}
    </>
  );
}
