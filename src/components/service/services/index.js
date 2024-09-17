import React, { useState, useEffect, useRef } from "react";
import Section from "./index.style";
import Link from "next/link";
import Image from "next/image";
import { useScroll } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';

// Install Swiper modules
SwiperCore.use([Autoplay]);
export default function Services() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/services.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  usee
  return (
    <>
      {data ? (
        data.title || data.text || data.services?.length > 0 ? (
          <Section className=" element-container p-es-30">
            <div className="wrapper w-100 d-flex  flex-column  align-items-center ">
              {data.title || data.text ? (
                <div className="text d-flex element-container-740  justify-content-center  flex-column  align-items-center ">
                  {data.title ? (
                    <h6 className=" fs-50 fw-7  lh-1_2 mb-20">{data.title}</h6>
                  ) : null}

                  {data.text ? (
                    <p className=" text-center fs-16 lh-24">{data.text}</p>
                  ) : null}
                </div>
              ) : null}
              {data.services?.length > 0 ? (
                <>
                  <div className=" service-wrapper w-100 d-flex  flex-column ">
                    {data.services.map((item, index) =>
                      item.img ||
                      item.title ||
                      item.slug ||
                      item.videolink ||
                      item.imgs?.length > 0 ? (
                        <div className="service" key={index}>
                          <div className="overlay"></div>
                          <div className="left">
                            <span className="index fs-70 mb-20">
                              0{index + 1}
                            </span>
                            {item.title ? (
                              <h4 className=" fs-50 fw-7  text-uppercase ">
                                {item.title}
                              </h4>
                            ) : null}
                            {item.text ? <p>{item.text}</p> : null}
                            {item.servicelist?.length > 0 ? (
                              <div className="service-list h-fit-content">
                                <div className=" d-flex h-fit-content  flex-column ">
                                  {item.servicelist
                                    ?.slice(
                                      0,
                                      Math.ceil(item.servicelist.length / 2)
                                    )
                                    .map((service, serviceIndex) => (
                                      <li key={serviceIndex}>
                                        {service.service}
                                      </li>
                                    ))}
                                </div>
                                <div className=" d-flex flex-column h-fit-content ">
                                  {item.servicelist
                                    ?.slice(
                                      0,
                                      Math.ceil(item.servicelist.length / 2)
                                    )
                                    .map((service, serviceIndex) => (
                                      <li key={serviceIndex}>
                                        {service.service}
                                      </li>
                                    ))}
                                </div>
                              </div>
                            ) : null}
                            {item.slug ||
                            item.btntext ||
                            item.videolink ||
                            item.videotext ? (
                              <div className="line">
                                {item.slug || item.btntext ? (
                                  <Link
                                    href={item.slug ? item.slug : "/"}
                                    className=" btn-hover-primary-clr   text-uppercase  primary-btn w-fit-content fs-18  text-decoration-none  text-white  fw-6 ls-1--3"
                                  >
                                    {item.btntext ? item.btntext : "Knnow More"}
                                  </Link>
                                ) : null}
                                {item.videotext ? (
                                  <p className="  smooth-transit  mb-0  cursor-pointer">
                                    {item.videotext}
                                  </p>
                                ) : null}
                              </div>
                            ) : null}
                          </div>
                          {item.imgs?.length > 0 ? (
                            <div className="right">
                              <Swiper 
                              slidesPerView={1}
                              autoplay={{ delay: 1000 }}
                              >
                                {item.imgs.map((item, imgindex) =>
                                  item.img ? (
                                    <SwiperSlide key={imgindex}>
                                      <Image
                                        src={item.img}
                                        height={700}
                                        width={912}
                                        alt="Service Image"
                                        className="w-100 h-100 object-fit-contain "
                                      ></Image>
                                    </SwiperSlide>
                                  ) : null
                                )}
                              </Swiper>
                            </div>
                          ) : null}
                        </div>
                      ) : null
                    )}
                  </div>
                </>
              ) : null}
            </div>
          </Section>
        ) : null
      ) : null}
    </>
  );
}
