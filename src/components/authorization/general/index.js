import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState, useEffect, useRef } from "react";
import Section from "./index.style";
import Image from "next/image";
import Link from "next/link";
import * as Yup from "yup";
import BG from "../../../../public/assets/images/wp-content/uploads/2023/08/Faq-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faClose,
  faEye,
  faEyeSlash,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
export default function Signin() {
  const [BoxIsVisible,ShowBox]=useState(false)
  const initialValues = {
    name: '',
    number: '',
    email: '',
    password: '',
    reEnterPassword: '',
    termsAndConditions: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    number: Yup.string().required('Number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
    reEnterPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Password confirmation is required'),
    termsAndConditions: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Here you can do whatever you want with the form values, like sending them to an API
    console.log(values);
    // For demonstration purposes, let's navigate to a success page
    ShowBox(false)
    setSubmitting(false);
  };

  return (
    <Section className=" mt-100 mb-100 p-es-30">
      <div className="wrapper element-container overflow-visible    w-100">
        <div
          className="left"
          style={{
            backgroundImage: `url(${BG.src})`,
            backgroundSize: "cover", // Adjust as needed
            backgroundPosition: "center", // Adjust as needed
          }}
        >
          <div className="divspacer"></div>
        </div>
        <div className="right">
          <div className="heading ">
            <h2 className="fs-60 fw-6 text-uppercase ps-20  mb-20 ls-1--3">
              New TO site
            </h2>
            <p className="fs-16 mb-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              quod, laborum eligendi officia corporis in nemo, voluptatum
              dolorum cupiditate accusamus natus magnam unde fuga quasi cum
              distinctio dignissimos. Consequatur, itaque.
            </p>
            <div className="spacer"></div>
            <div className="primary-btn mt-20 w-fit-content btn-hover-primary-clr mt-15">
              <Link
                className="d-flex text-uppercase  text-decoration-none  text-white  ls-1--3 justify-content-center  align-items-center "
                href="/"
              onClick={(e)=>{
                e.preventDefault();
                ShowBox(true)}}
>
                Sign In
                <span className="icon">
                  <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
                </span>
              </Link>
            </div>
          </div>
        </div>
        {BoxIsVisible ?
        <div className="hidden-box m-0">
          <div className="formcontainer">
          <div className=" element-container-720   form-wrapper w-100">
          <Formik
             initialValues={initialValues}
             validationSchema={validationSchema}
             onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form >
                <div className=" d-flex  justify-content-end ">
                 <div className="cross w-fit-content cursor-pointer"
                 onClick={()=>ShowBox(false)}
                 >
                  <FontAwesomeIcon
                  icon={faClose}
                  width={25}
                  className="h-auto"
                  ></FontAwesomeIcon>
                 </div>
                </div>
                <h2 className="mb-20 fs-40 fw-7">New User ?</h2>
                <div className="input-row">
                  <label htmlFor="name">Username</label>
                  <Field
                    type="text"
                    className="w-100"
                    name="name"
                    placeholder="Username"
                  ></Field>
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="input-row">
                  <label htmlFor="number">ENter Your contact Number</label>
                  <Field
                     type="contact"
                    className="w-100"
                    name="number"
                    placeholder="number"
                  ></Field>
                  <ErrorMessage
                    name="number"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="input-row">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    className="w-100"
                    name="email"
                    placeholder="Email"
                  ></Field>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="input-row position-relative ">
                  <div className="input-wrapper d-flex flex-column ">
          <label htmlFor="password">New Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div"  className="error-message"/>
        </div>

        <div className="input-wrapper d-flex flex-column ">
          <label htmlFor="reEnterPassword">Confirm Password</label>
          <Field type="password" name="reEnterPassword" />
          <ErrorMessage name="reEnterPassword" component="div"  className="error-message"/>
        </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error-message"
                  />
                  <div className="spacer"></div>
                 <div className="w-100 d-flex flex-row flex-wrap justify-contenr mt-20  align-items-md-center ">
                 <label>
        <Field
          type="checkbox"
          name="termsAndConditions"
          className="h-auto me-10"
         
        />
        I agree to the terms and conditions
      </label>
      <ErrorMessage name="termsAndConditions"  className="w-100" component="div" />
                 </div>
                </div>
                <div className="spacer"></div>
                <div className="w-100">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="submit fs-16 fw-7 ls-1--3  d-flex   smooth-transit  text-uppercase  justify-content-between align-items-center   "
                  >
                    Sign-In
                    <span className="icon ms-2">
                      <FontAwesomeIcon
                        icon={faArrowAltCircleRight}
                      ></FontAwesomeIcon>
                    </span>
                  </button> 
                </div>
              </Form>
            )}
          </Formik>
          </div>
          </div>
        
        </div>
       :null}
      </div>
    </Section>
  );
}
