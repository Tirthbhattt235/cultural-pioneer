import React, { useState, useEffect, useRef } from "react";
import Section from "./index.style";
import Image from "next/image";
import Link from "next/link";
import Imff from "../../../../public/assets/images/Contact-form-image.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
export default function Inquiry({background}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/about/common.json");
        const jsonData = await response.json();
        setData(jsonData.enquiry);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const initialValues = {
    Fname: "",
    Lname: "",
    Email: "",
    Cname: "",
    Msg: "",
  };
  const validationSchema = Yup.object({
    Fname: Yup.string().required("Please fillup the first name"),
    Lname: Yup.string().required("Please fillup the last name"),
    Email: Yup.string().required("please fill the from "),
    Cname: Yup.string().required("Required"),
  });
  const submitform = () => {
  };
  const submitForm = (values, { resetForm }) => {
    console.log("Form submitted with values:", values);
    // You can perform further actions here, like sending the form data to a server
    // Reset the form after submission
    resetForm();
  };
  return (
    <>
      {data ? (
        data.mailtext ||
        data.img ||
        data.text ||
        data.mail ||
        data.btnlink ||
        data.btntext ? (
          <Section className={`mt-150 ${background}`}>
            <div className="wrapper d-flex flex-row flex-wrap w-100 position-rele   element-container p-es-30 pt-150 pb-150 ">
              {data.mailtext || data.mail || data.img ? (
                <div className="left w-50-1024 position-relative d-flex justify-content-center ">
                  {data.img !== undefined && data.img ? (
                    //  <div className="Img-wrapper w-100 h-auto position-absolute   ">
                    <Image alt="Image"
                      src={data.img}
                      height={700}
                      width={840}
                      className="  w-100    object-fit-cover     "
                    ></Image>
                  ) : //  </div>
                  null}
                  <div className="bg position-absolute "></div>
                  {data.mail || data.mailtext ? (
                    <div className=" position-absolute  bot0  email-box  d-flex flex-row flex-wrap pe-0 ps-0 justify-content-between   align-items-center">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 121.3 94"
                          height={130}
                          width={130}
                        >
                          <g>
                            {" "}
                            <path d="M15,4.5h63.9c5.1,0,9.2,4.1,9.3,9.2v35.1c0,2.5-1,4.8-2.8,6.5C83.6,57,81.3,58,78.8,58H60.7  c-12.4,0-19.5,4.4-30.5,11.2c-1.8,1.1-3.7,2.3-5,3.1c-2.3,1.4-4,1.4-5.4-0.1c-1-1.1-1.4-3-1.4-5.8v-7.7c0-0.2-0.1-0.4-0.2-0.5  C18,58.1,17.9,58,17.7,58H15c-5.1,0-9.2-4.1-9.3-9.2V13.7C5.8,8.6,9.9,4.5,15,4.5 M78.9,8.2H15c-3.1,0-5.5,2.5-5.5,5.5v35.1  c0,3.1,2.5,5.5,5.5,5.5h2.6c2.5,0,4.5,2,4.5,4.5v7.7c0,3.6-0.1,3.4,1.7,2.3c1.9-1.2,3.2-2,4.4-2.7c11.6-7.1,19-11.8,32.5-11.8h18.1  c1.5,0,2.9-0.6,4-1.6c1-1,1.6-2.4,1.6-3.9V13.7C84.4,10.7,82,8.2,78.9,8.2"></path>{" "}
                            <path d="M47,28.2c2.2,0,4,1.8,4,4s-1.8,4-4,4c-2.2,0-4-1.8-4-4S44.7,28.2,47,28.2L47,28.2 M64.8,28.2  c2.2,0,4,1.8,4,4s-1.8,4-4,4c-2.2,0-4-1.8-4-4S62.6,28.2,64.8,28.2L64.8,28.2 M29.1,28.2c2.2,0,4,1.8,4,4s-1.8,4-4,4s-4-1.8-4-4  C25.1,30,26.9,28.2,29.1,28.2"></path>{" "}
                            <path d="M110,35.6H91v13.2c0,3.2-1.3,6.3-3.6,8.6c-2.3,2.3-5.4,3.5-8.6,3.6H60.7c-1.4,0-2.8,0.1-4.2,0.2v11.6  c0,3.1,2.5,5.5,5.5,5.5h12.4c12.8,0,16.6,3.7,28.6,10.9c2.1,1.3,2.9-0.8,2.9-3.2v-5.8c0-1.1,0.9-2,2-2h2c3.1,0,5.5-2.5,5.5-5.5  V41.1C115.5,38.1,113,35.6,110,35.6"></path>
                          </g>
                        </svg>
                      </div>
                      <div className="txt d-flex justify-content-start flex-column ">
                        {data.mailtext !== undefined || data.mailtext ? (
                          <h3 className="fs-26 mb-10 fw-4 ls-1--3">
                            {data.mailtext}
                          </h3>
                        ) : null}
                        {data.mail !== undefined || data.mail ? (
                          <Link
                            href={"mailto:" + data.mail ? data.mail : "/"}
                            className=" text-decoration-none   primary-clr-hover fs-16 fw-4 text-black "
                          >
                            {data.mail}
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}
              {data.text || data.subtext ? (
                <div className="right   position-relative   d-flex flex-column   justify-content-center ">
                  <div className="bannertext position-absolute right-">
                    <h5 className=" text-uppercase fw-9 ">enquiry</h5>
                  </div>
                  {data.text !== undefined && data.text ? (
                    <h3 className="fs-40 mb-20 fw-7 ">{data.text}</h3>
                  ) : null}
                  {data.subtext !== undefined && data.subtext ? (
                    <h6 className="fs-16 mb-30 text-black-50">
                      {data.subtext}
                    </h6>
                  ) : null}
                  <div className="form mt-20">
                    {/* <Formik 
                  onSubmit={submitform}
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                  >
                  <Form action="">
                        <div className="d-flex flex-row input-row">
                              <Field type="text" name="Fname" placeholder="First Name" />
                              <Field type="text" name="Lname" placeholder="Last Name" />
                        </div>
                        <div className="d-flex flex-row input-row">
                              <Field type="email" name="Email" placeholder="Your Email" />
                              <Field type="text" name="Cname"  placeholder="Company Name" />
                        </div>
                        <Field type="textarea"   name="Msg" id="" cols="40" placeholder="Additional Message " rows="10"></Field>

                        <input type="submit"  value="SUBMIT" className="submit fs-16 fw-7 ls-1--3"/>
                  </Form>
                  </Formik> */}

                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={submitForm}
                    >
                      {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                          <div className="d-flex flex-row input-row">
                            <div className="input">
                              <Field
                                type="text"
                                name="Fname"
                                placeholder="First Name"
                              ></Field>

                              <ErrorMessage
                                name="Fname"
                                component="div"
                                className="error-message"
                              />
                            </div>
                            <div className="input">
                              <Field
                                type="text"
                                name="Lname"
                                placeholder="Last Name"
                              />
                              <ErrorMessage
                                name="Lname"
                                component="div"
                                className="error-message"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row input-row">
                            <div className="input">
                              {" "}
                              <Field
                                type="email"
                                name="Email"
                                placeholder="Your Email"
                              />
                              <ErrorMessage
                                name="Email"
                                component="div"
                                className="error-message"
                              />
                            </div>
                            <div className="input">
                              {" "}
                              <Field
                                type="text"
                                name="Cname"
                                placeholder="Company Name"
                              />
                              <ErrorMessage
                                name="Cname"
                                component="div"
                                className="error-message"
                              />
                            </div>
                          </div>
                          <Field
                            as="textarea"
                            name="Msg"
                            placeholder="Additional Message"
                            rows="5"
                          />
                          <button
                            type="submit"
                            className="submit fs-16 fw-7 ls-1--3"
                          >
                            SUBMIT
                          </button>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              ) : null}
            </div>
          </Section>
        ) : null
      ) : null}
    </>
  );
}
