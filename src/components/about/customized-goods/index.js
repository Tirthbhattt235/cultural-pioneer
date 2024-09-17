import React from "react";
import Section from "./customized-goods.style";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import Image from "next/image";
function Customgoods() { 
  const [data, setData] = useState([]);
  const [Cat1, SetCat1] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/about/customized-goods.json");
        const jsonData = await response.json();
        setData(jsonData);
       
      } catch (error) {}
    };

    fetchData();
  }, []);
  const handleclick = (index) => {
    SetCat1(index);
  };
  return (
    <>
      {data ? (
        data.title !== undefined ||
        data.Category1 !== undefined ||
        data.Category1 !== undefined ? (
          <Section className=" element-container">
            <div className="header-text d-flex  justify-content-center flex-column  ">
              {data.title !== undefined && data.title ? (
                <h2 className="fw-7 fs-50 text-center me-auto ms-auto text-black ">
                  {data.title}
                </h2>
              ) : null}
              {data.Category1.head || data.Category2.head ? (
                <div className="tags d-flex justify-content-center ">
                  <ul className="Btn-tag  mb-0 text-decoration-none l list-unstyled d-flex flex-row text-decoration-none  ">
                    <li>
                      {Cat1 === 0 ? (
                        <a
                          className="text-decoration-none fs-20 fw-6   active  "
                          onClick={() => SetCat1(0)}
                        >
                          {data.Category1.head
                            ? data.Category1.head
                            : "Selling online"}
                        </a>
                      ) : (
                        <a
                          className="text-decoration-none fs-20 fw-6    "
                          onClick={() => SetCat1(0)}
                        >
                          {data.Category1.head
                            ? data.Category1.head
                            : "Selling online"}
                        </a>
                      )}
                    </li>
                    <li>
                      {Cat1 === 1 ? (
                        <a
                          className="text-decoration-none fs-20 fw-6   active  "
                          onClick={() => SetCat1(1)}
                        >
                          {data.Category2.head
                            ? data.Category2.head
                            : "Selling online"}
                        </a>
                      ) : (
                        <a
                          className="text-decoration-none fs-20 fw-6    "
                          onClick={() => SetCat1(1)}
                        >
                          {data.Category2.head
                            ? data.Category2.head
                            : "Selling online"}
                        </a>
                      )}
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>
            <div className="content w-100 ">
              {data.Category1 && data.Category2 ? (
                <>
                  {Cat1 === 0 && (
                    <>
                      <div className="left">
                        <div className="text">
                          {data.Category1.subtitle !== undefined &&
                          data.Category1.subtitle ? (
                            <h5 className="fs-18 fw-4 text-uppercase  mb-10 ls-1--5">
                              {data.Category1.subtitle}
                            </h5>
                          ) : null}
                          {data.Category1.title !== undefined &&
                          data.Category1.title ? (
                            <h3 className="fs-40 fw-7 mb-20 ">
                              {data.Category1.title}
                            </h3>
                          ) : null}
                          {data.Category1.pg !== undefined &&
                          data.Category1.pg ? (
                            <p className="fs-16   ">{data.Category1.pg}</p>
                          ) : null}
                        </div>
                        {data.Category1.services ? (
                          <ul className="ps-0">
                            {data.Category1.services
                              ? data.Category1.services.map((index,keyindex) => (
                                  <li className=" d-flex  flex-row"  key={keyindex}>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12  "
                                      fill="currentColor"
                                      className="bi bi-circle-fill"
                                      viewBox="0 0 16 16"
                                    >
                                      <circle cx="8" cy="8" r="8" />
                                    </svg>
                                    <div className="service">
                                      {index.title !== undefined &&
                                      index.title ? (
                                        <h4 className="main-point fs-24 fw-7 mb-10">
                                          {index.title}
                                        </h4>
                                      ) : null}
                                      {index.text !== undefined &&
                                      index.text ? (
                                        <span className="sub-point fs-18">
                                          {index.text}
                                        </span>
                                      ) : null}
                                    </div>
                                    <></>
                                    <></>
                                  </li>
                                ))
                              : null}
                          </ul>
                        ) : null}
                        <div className="line"></div>
                        <ul className="details d-flex flex-row ps-0 ">
                          {data.address !== undefined && data.address ? (
                            <li className="d-flex flex-row ms-0">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 100 100"
                                  height={25}
                                  width={25}
                                >
                                  <path d="M50.25,5A38.74,38.74,0,0,0,22.66,70.92l4.42,3.82,0,0,10.38,9L51,95.44,64.32,83.31l12-10.91A38.73,38.73,0,0,0,50.25,5Zm0,57.68a18.95,18.95,0,1,1,19-19A19,19,0,0,1,50.25,62.68Z"></path>
                                </svg>
                              </span>
                              <span className="fs-16 fw-5 pl-5">
                                {data.address}
                              </span>
                            </li>
                          ) : null}
                          {data.mail !== undefined && data.mail ? (
                            <li className="d-flex flex-row  ">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 100 100"
                                  height={25}
                                  width={25}
                                >
                                  <path d="M80.67,17.28A.62.62,0,0,1,81,18.41l-6.83,5L55.37,37.22l-2.76,2.05-1.41,1H48.8l-1.41-1-2.76-2.05L25.8,23.42l-6.83-5a.62.62,0,0,1,.36-1.13Z"></path>
                                  <path d="M96,73.43a9.8,9.8,0,0,1-9.78,9.79H13.78A9.8,9.8,0,0,1,4,73.43S4,40,4.08,29.11a1.77,1.77,0,0,1,2.79-1.42L10.13,30,44.61,54.34a6.93,6.93,0,0,0,4,1.28h2.76a6.93,6.93,0,0,0,4-1.28L89.87,30l3.26-2.32a1.77,1.77,0,0,1,2.79,1.42C96,40,96,73.43,96,73.43Z"></path>
                                </svg>
                              </span>
                              <span className="fs-16 fw-5 pl-5">
                                {data.mail}
                              </span>
                            </li>
                          ) : null}
                          {data.number !== undefined && data.number ? (
                            <li className="d-flex flex-row me-0">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  // xmlns:xlink="http://www.w3.org/1999/xlink"

                                  viewBox="0 0 100 100"
                                  height={25}
                                  width={25}
                                  className=""
                                >
                                  <path d="M69.164,74.43c-4.565,2.21-23.612-8.814-30.306-15.509c-1.876-1.877-3.624-3.877-5.234-5.987  c-1.055-1.387-2.035-2.796-2.941-4.225c-2.015-3.601-3.823-7.314-5.415-11.121c-0.056-0.16-0.108-0.319-0.163-0.479  c-0.527-2.123,1.471-4.603,3.777-6.663c3.684-2.296,7.458-5.057,7.458-6.688c-0.012-0.706-0.062-1.411-0.149-2.112  C36.034,20.858,28.982,6.65,28.982,6.65c-0.349-0.875-0.756-1.725-1.218-2.546l0,0c-0.303-0.459-0.666-0.875-1.079-1.238  c-3.779-0.31-7.584-0.087-11.301,0.663c-3.478,1.367-6.738,3.233-9.678,5.54L5.218,9.47C5.035,9.625,4.854,9.781,4.673,9.939  c-9.338,8.63-0.173,32.644,0.42,34.167c2.455,6.082,5.504,11.908,9.102,17.392c6.854,10.473,15.984,19.263,26.709,25.714  c5.483,3.29,11.318,5.953,17.396,7.94c10.584,3.963,22.454,2.297,31.538-4.426c0,0,9.921-12.304,9.657-18.135  c-0.325-1.704-1.383-3.178-2.893-4.031c-1.961-1.344-4.076-2.449-6.299-3.292c-1.845-0.753-3.725-1.429-5.619-2.043  c-0.948-0.308-1.901-0.601-2.858-0.881c-0.812-0.384-1.704-0.57-2.602-0.541c-0.756,0.159-1.484,0.429-2.161,0.801  c-0.834,0.577-1.483,1.385-1.866,2.324c-0.499,0.9-1.009,1.793-1.53,2.681c-1.211,2.13-2.544,4.188-3.993,6.164  c-0.169,0.231-0.34,0.451-0.513,0.659"></path>
                                </svg>
                              </span>
                              <span className="fs-16 fw-5 pl-5">
                                {data.number}
                              </span>
                            </li>
                          ) : null}
                        </ul>
                        {data.Category1.btnlink !== undefined &&
                        data.Category1.btntext !== undefined ? (
                          <div className="primary-btn me-auto mt-40  fs-18 w-fit-content btn-hover-primary-clr ">
                            <Link
                              className=" text-decoration-none  d-flex justify-content-center  align-items-center "
                              href={
                                data.Category1.btnlink
                                  ? data.Category1.btnlink
                                  : "/"
                              }
                            >
                              <span className=" text-decoration-none  fs-16 text-uppercase  text-white ">
                                {data.Category1.btntext
                                  ? data.Category1.btntext
                                  : "Get In touch"}
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon"
                                height="18"
                                width="18"
                                viewBox="0 0 100 100"
                                className="mt-0 me-0"
                              >
                                <path
                                  fill="white"
                                  d="M11.22,97.57V3.43a1.38,1.38,0,0,1,2.09-1.18L91.76,49.32a1.38,1.38,0,0,1,0,2.36L13.31,98.75A1.38,1.38,0,0,1,11.22,97.57ZM24,26v49.1a1.37,1.37,0,0,0,2.08,1.18L67,51.68a1.38,1.38,0,0,0,0-2.36L26.05,24.77A1.37,1.37,0,0,0,24,26Z"
                                ></path>
                              </svg>
                            </Link>
                          </div>
                        ) : null}
                      </div>
                      {data.Category1.imgs !== undefined &&
                      data.Category1.imgs ? (
                        <div className="right d-flex flex-lg-row flex-column  ">
                          <div className="left-img-container  d-flex  flex-column ">
                            {" "}
                            <div className="img-box">
                              {data.Category1.imgs[0].img  !==undefined ?
                              <Image alt="Image" src={data.Category1.imgs[0].img}
                              height={400}
                              className=" object-fit-contain  h-auto w-100"
                              width={400}  ></Image>
                              
                              :null}
                            </div>
                            <div className="img-box">
                              {data.Category1.imgs[2].img  !==undefined ?
                              <Image alt="Image" src={data.Category1.imgs[2].img}
                              height={400}
                              className=" object-fit-contain  h-auto w-100"
                              width={400}  ></Image>
                              
                              :null}
                            </div>
                          </div>
                          <div className="right-img-container d-flex  flex-column ">
                          <div className="img-box">
                              {data.Category1.imgs[1].img  !==undefined ?
                              <Image alt="Image" src={data.Category1.imgs[1].img}
                              height={400}
                              className=" object-fit-contain  h-auto w-100"
                              width={400}  ></Image>
                              
                              :null}
                            </div>
                            <div className="img-box">
                              {data.Category1.imgs[3].img  !==undefined ?
                              <Image alt="Image" src={data.Category1.imgs[3].img}
                              height={400}
                              className=" object-fit-contain  h-auto w-100"
                              width={400}  ></Image>
                              
                              :null}
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </>
                  )}
                  {Cat1 === 1 && (
                    <>
                      <div className="left">
                        <div className="text">
                          {data.Category2.subtitle !== undefined &&
                          data.Category2.subtitle ? (
                            <h5 className="fs-18  text-uppercase fw-4  mb-10 ls-1--5">
                              {data.Category2.subtitle}
                            </h5>
                          ) : null}
                          {data.Category2.title !== undefined &&
                          data.Category2.title ? (
                            <h3 className="fs-40 fw-7 mb-20 ">
                              {data.Category2.title}
                            </h3>
                          ) : null}
                          {data.Category2.pg !== undefined &&
                          data.Category2.pg ? (
                            <p className="fs-16   ">{data.Category2.pg}</p>
                          ) : null}
                        </div>
                        {data.Category2.services ? (
                          <ul className="ps-0">
                            {data.Category2.services
                              ? data.Category2.services.map((index,keyindex) => (
                                  <li className=" d-flex  flex-row"  key={keyindex}>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12  "
                                      fill="currentColor"
                                      className="bi bi-circle-fill"
                                      viewBox="0 0 16 16"
                                    >
                                      <circle cx="8" cy="8" r="8" />
                                    </svg>
                                    <div className="service">
                                      {index.title !== undefined &&
                                      index.title ? (
                                        <h4 className="main-point fs-24 fw-7 mb-10">
                                          {index.title}
                                        </h4>
                                      ) : null}
                                      {index.text !== undefined &&
                                      index.text ? (
                                        <span className="sub-point fs-18">
                                          {index.text}
                                        </span>
                                      ) : null}
                                    </div>
                                    <></>
                                    <></>
                                  </li>
                                ))
                              : null}
                          </ul>
                        ) : null}
                        <div className="line"></div>
                        <ul className="details d-flex flex-row ps-0 ">
                          {data.address !== undefined && data.address ? (
                            <li className="d-flex flex-row ms-0">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 100 100"
                                  height={25}
                                  width={25}
                                >
                                  <path d="M50.25,5A38.74,38.74,0,0,0,22.66,70.92l4.42,3.82,0,0,10.38,9L51,95.44,64.32,83.31l12-10.91A38.73,38.73,0,0,0,50.25,5Zm0,57.68a18.95,18.95,0,1,1,19-19A19,19,0,0,1,50.25,62.68Z"></path>
                                </svg>
                              </span>
                              <span className="fs-16 fw-5 pl-5">
                                {data.address}
                              </span>
                            </li>
                          ) : null}
                          {data.mail !== undefined && data.mail ? (
                            <li className="d-flex flex-row  ">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 100 100"
                                  height={25}
                                  width={25}
                                >
                                  <path d="M80.67,17.28A.62.62,0,0,1,81,18.41l-6.83,5L55.37,37.22l-2.76,2.05-1.41,1H48.8l-1.41-1-2.76-2.05L25.8,23.42l-6.83-5a.62.62,0,0,1,.36-1.13Z"></path>
                                  <path d="M96,73.43a9.8,9.8,0,0,1-9.78,9.79H13.78A9.8,9.8,0,0,1,4,73.43S4,40,4.08,29.11a1.77,1.77,0,0,1,2.79-1.42L10.13,30,44.61,54.34a6.93,6.93,0,0,0,4,1.28h2.76a6.93,6.93,0,0,0,4-1.28L89.87,30l3.26-2.32a1.77,1.77,0,0,1,2.79,1.42C96,40,96,73.43,96,73.43Z"></path>
                                </svg>
                              </span>
                              <span className="fs-16 fw-5 pl-5">
                                {data.mail}
                              </span>
                            </li>
                          ) : null}
                          {data.number !== undefined && data.number ? (
                            <li className="d-flex flex-row me-0">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  // xmlns:xlink="http://www.w3.org/1999/xlink"

                                  viewBox="0 0 100 100"
                                  height={25}
                                  width={25}
                                  className=""
                                >
                                  <path d="M69.164,74.43c-4.565,2.21-23.612-8.814-30.306-15.509c-1.876-1.877-3.624-3.877-5.234-5.987  c-1.055-1.387-2.035-2.796-2.941-4.225c-2.015-3.601-3.823-7.314-5.415-11.121c-0.056-0.16-0.108-0.319-0.163-0.479  c-0.527-2.123,1.471-4.603,3.777-6.663c3.684-2.296,7.458-5.057,7.458-6.688c-0.012-0.706-0.062-1.411-0.149-2.112  C36.034,20.858,28.982,6.65,28.982,6.65c-0.349-0.875-0.756-1.725-1.218-2.546l0,0c-0.303-0.459-0.666-0.875-1.079-1.238  c-3.779-0.31-7.584-0.087-11.301,0.663c-3.478,1.367-6.738,3.233-9.678,5.54L5.218,9.47C5.035,9.625,4.854,9.781,4.673,9.939  c-9.338,8.63-0.173,32.644,0.42,34.167c2.455,6.082,5.504,11.908,9.102,17.392c6.854,10.473,15.984,19.263,26.709,25.714  c5.483,3.29,11.318,5.953,17.396,7.94c10.584,3.963,22.454,2.297,31.538-4.426c0,0,9.921-12.304,9.657-18.135  c-0.325-1.704-1.383-3.178-2.893-4.031c-1.961-1.344-4.076-2.449-6.299-3.292c-1.845-0.753-3.725-1.429-5.619-2.043  c-0.948-0.308-1.901-0.601-2.858-0.881c-0.812-0.384-1.704-0.57-2.602-0.541c-0.756,0.159-1.484,0.429-2.161,0.801  c-0.834,0.577-1.483,1.385-1.866,2.324c-0.499,0.9-1.009,1.793-1.53,2.681c-1.211,2.13-2.544,4.188-3.993,6.164  c-0.169,0.231-0.34,0.451-0.513,0.659"></path>
                                </svg>
                              </span>
                              <span className="fs-16 fw-5 pl-5">
                                {data.number}
                              </span>
                            </li>
                          ) : null}
                        </ul>
                        {data.Category2.btnlink !== undefined &&
                        data.Category2.btntext !== undefined ? (
                          <div className="primary-btn me-auto mt-40  fs-18 w-fit-content btn-hover-primary-clr ">
                            <Link
                              className=" text-decoration-none  d-flex justify-content-center  align-items-center "
                              href={
                                data.Category2.btnlink
                                  ? data.Category2.btnlink
                                  : "/"
                              }
                            >
                              <span className=" text-decoration-none fs-16  text-uppercase  text-white ">
                                {data.Category2.btntext
                                  ? data.Category2.btntext
                                  : "Get In touch"}
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon"
                                height="18"
                                width="18"
                                viewBox="0 0 100 100"
                                className="mt-0 me-0"
                              >
                                <path
                                  fill="white"
                                  d="M11.22,97.57V3.43a1.38,1.38,0,0,1,2.09-1.18L91.76,49.32a1.38,1.38,0,0,1,0,2.36L13.31,98.75A1.38,1.38,0,0,1,11.22,97.57ZM24,26v49.1a1.37,1.37,0,0,0,2.08,1.18L67,51.68a1.38,1.38,0,0,0,0-2.36L26.05,24.77A1.37,1.37,0,0,0,24,26Z"
                                ></path>
                              </svg>
                            </Link>
                          </div>
                        ) : null}
                      </div>
                      {data.Category2.imgs !== undefined &&
                      data.Category2.imgs ? (
                        <div className="right d-flex flex-md-row flex-column  ">
                          <div className="left-img-container  d-flex  flex-column ">
                            {" "}
                            <div className="img-box">
                              {data.Category2.imgs[0].img  !==undefined ?
                              <Image alt="Image" src={data.Category2.imgs[0].img}
                              height={400}
                              className=" object-fit-contain h-auto w-100"
                              width={400}  ></Image>
                              
                              :null}
                            </div>
                            <div className="img-box">
                              {data.Category2.imgs[2].img  !==undefined ?
                              <Image alt="Image" src={data.Category2.imgs[2].img}
                              height={400}
                              className=" object-fit-contain  h-auto w-100"
                              width={400}  ></Image>
                              
                              :null}
                            </div>
                          </div>
                          <div className="right-img-container d-flex  flex-column ">
                          <div className="img-box">
                              {data.Category2.imgs[1].img  !==undefined ?
                              <Image alt="Image" src={data.Category2.imgs[1].img}
                              height={400}
                              className=" object-fit-contain h-auto w-100"
                              width={400}  ></Image>
                              
                              :null}
                            </div>
                            <div className="img-box">
                              {data.Category2.imgs[3].img  !==undefined ?
                              <Image alt="Image" src={data.Category2.imgs[3].img}
                              height={400}
                              className=" object-fit-contain h-auto w-100"
                              width={400}  ></Image>
                              
                              :null}
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </>
                  )}
                </>
              ) : null}
            </div>
          </Section>
        ) : null
      ) : null}
    </>
  );
}

export default Customgoods;
