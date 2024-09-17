import React, { useState, useEffect, useRef } from "react";
import Section from "./index.style";
import Image from "next/image";
import Link from "next/link";
import Information from "../additional-information";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ProductDetails({description,information}) {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch("/product-details.json");
    //     const jsonData = await response.json();
    //     const response1 = await fetch("/product-details.json");
    //     const jsonData1 = await response1.json();
    //     setData(jsonData.description);
    //     setData1(jsonData1.information);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };

    // fetchData();
    setData(description);
    setData1(information);
  }, []);


  return (
    <>
      {data || data1 ? (
        <Section className=" element-container p-es-30">
          {data ? (
            data.title || data.bodytext || data.list ? (
              <div className="left">
                <div className="wrapper">
                {data.title !== undefined && data.title ? (
                  <h2 className=" fs-30 fw-7 text-center  mb-30">
                    {data.title}
                  </h2>
                ) : null}
                {data.bodytext !== undefined && data.bodytext ? (
                  <p className=" fs-16 fw-4   mb-20">{data.bodytext}</p>
                ) : null}
                {data.list && data?.list?.length > 0 ? (
                  <div className="services">
                    <div className="left-container">
                      {data.list
                        ?.slice(0, Math.ceil(data.list.length / 2))
                        .map((index,keyindex1) => (
                          <li className="fs-16 d-flex flex-row  " key={keyindex1}>
                            <span className="icon">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 10.174999999999999 10"
                              >
                                <path
                                  d="M3.5,6l6.2-5.9C9.8,0,10,0,10.1,0.1c0.1,0.1,0.1,0.2,0,0.3L3.8,9.9C3.7,10,3.5,10,3.4,10    c0,0-0.1-0.1-0.1-0.1L0,4.7C0,4.6,0,4.4,0.1,4.4c0.1-0.1,0.2-0.1,0.3,0L3.5,6z"
                                  fill="#ff5e62"
                                ></path>
                              </svg>
                            </span>
                            {index.service}
                          </li>
                        ))}
                    </div>
                    <div className="right-container">
                      {data.list
                        ?.slice(
                          Math.ceil(data.list.length / 2),
                          data.list?.length
                        )
                        .map((index,keyindex) => (
                          <li className="fs-16 d-flex flex-row" key={keyindex}>
                            <span className="icon">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 10.174999999999999 10"
                              >
                                <path
                                  d="M3.5,6l6.2-5.9C9.8,0,10,0,10.1,0.1c0.1,0.1,0.1,0.2,0,0.3L3.8,9.9C3.7,10,3.5,10,3.4,10    c0,0-0.1-0.1-0.1-0.1L0,4.7C0,4.6,0,4.4,0.1,4.4c0.1-0.1,0.2-0.1,0.3,0L3.5,6z"
                                  fill="#ff5e62"
                                ></path>
                              </svg>
                            </span>
                            {index.service}
                          </li>
                        ))}
                    </div>
                  </div>
                ) : null}
                </div>
               
              </div>
            ) : null
          ) : null}

          {data1 ? <Information></Information> : null}
        </Section>
      ) : null}
    </>
  );
}
