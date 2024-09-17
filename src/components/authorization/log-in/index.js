import React, { useState, useEffect, useRef } from "react";
import Section from "./index.style";
import Image from "next/image";
import Link from "next/link";
import BG from "../../../../public/assets/images/wp-content/uploads/2023/08/Faq-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faBuildingLock,
  faClose,
  faEye,
  faEyeSlash,
  faLock,
  faSignIn,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";

export default function Login() {
  const [passwordBox, SetPasswordBox] = useState();
  const [ResetBox, SetResetBox] = useState();
  const initialvalues = {
    Username: "",
    password: "",
  };
  const validationSchema = Yup.object({
    Username: Yup.string().required("Please fillup the Username"),
    password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
  });
  const submitForm = (values, { resetForm }) => {
    console.log("Form submitted with values:", values);
    // You can perform further actions here, like sending the form data to a server
    // Reset the form after submission
    resetForm();
  };

  const initialValues4 = {
    password:"",
    reEnterPassword:""
  };
  const initialvalues1 = {
    emailOrUsername: "",
  };

  const validationSchema1 = Yup.object().shape({
    emailOrUsername: Yup.string()
    .required('Contact number or Email is required')
    .test(
      'contactOrEmail',
      'Invalid contact number or email',
      value => {
        // Regex to check if value is a valid email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Regex to check if value is a valid contact number (10 digits)
        const contactRegex = /^[0-9]{10}$/;
        
        return emailRegex.test(value) || contactRegex.test(value);
      }
    ),
  });
  const validationSchema2 = Yup.object().shape({
   
    password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
    reEnterPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Password confirmation is required'),
  });

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
    SetPasswordBox(!passwordBox);
    SetResetBox(true);
  };
  const handleSubmit2 = (values, { resetForm }) => {
    // Handle form submission here
    console.log(values);
    resetForm();
    SetResetBox(false);
    console.log("password changed suucessfully");
  };
  const [eye, eyeclose] = useState(true);
  return (
    <Section className=" mt-100 mb-100 ">
      <div className=" element-container-720  ">
        <div className="text  ext-center   ">
          <h2 className="heading fs-60 fw-7 ls-1--3 mb-20">
            Already An User ?
          </h2>

          <Formik
            initialValues={initialvalues}
            validationSchema={validationSchema}
            onSubmit={submitForm}
          >
            {({ isSubmitting}) => (
              <Form >
                <div className="input-row">
                  <label htmlFor="username">
                    <span className="icon   me-10">
                      <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </span>
                    Username
                  </label>
                  <Field
                    type="text"
                    className="w-100"
                    name="Username"
                    placeholder="Username"
                  ></Field>
                  <ErrorMessage
                    name="Username"
                    component="div"
                    className="error-message"
                  />
                </div>
                {/* <div className="input-row">
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
                </div> */}
                <div className="input-row position-relative ">
                  <span className="icon   me-10">
                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                  </span>
                  <label htmlFor="password">Password</label>
                  <div className=" position-relative ">
                    <Field
                      type="text"
                      className={`w-100 ${eye ? "black-dots-input" : ""}`}
                      name="password"
                      placeholder="Password"
                    ></Field>
                    <div className="password">
                      {eye ? (
                        <FontAwesomeIcon
                          className=" smooth-transit"
                          icon={faEyeSlash}
                          onClick={() => eyeclose(false)}
                        ></FontAwesomeIcon>
                      ) : (
                        <FontAwesomeIcon
                          className=" smooth-transit"
                          icon={faEye}
                          onClick={() => eyeclose(true)}
                        ></FontAwesomeIcon>
                      )}
                    </div>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error-message"
                  />
                  <div className="spacer"></div>
                  <Link
                    className="forgot mt-10"
                    href="/"
                    onClick={(event) => {
                      event.preventDefault();
                      SetPasswordBox(true);
                    }}
                  >
                    {" "}
                    Forgot Password
                  </Link>
                </div>
                <div className="spacer"></div>
                <div className="w-100">
                  <button
                    type="submit"
                    className="submit fs-16 fw-7 ls-1--3  d-flex   smooth-transit  text-uppercase  justify-content-between align-items-center   "
                  >
                    Login
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
          {passwordBox ? (
            <div className="hidden-box br-15">
              <Formik
                initialValues={initialvalues1}
                validationSchema={validationSchema1}
                onSubmit={handleSubmit}
                className="element-container-720  "
              >
                {({ isSubmitting }) => (
                  <Form
                    className=" element-container-720 w-100"
                  >
                    <div
                      onClick={() => SetPasswordBox(false)}
                      className="  d-flex  justify-content-end "
                    >
                      <FontAwesomeIcon
                        icon={faClose}
                        height={30}
                        width={30}
                      ></FontAwesomeIcon>
                    </div>
                    <div className="input-wrapper">
                      <p className=" fs-16 mb-20">
                        Lost your password? Please enter your username or email
                        address. You will receive a link to create a new
                        password via email.
                      </p>
                      <label
                        htmlFor="emailOrUsername"
                        className="text-black fw-5"
                      >
                        Enter a registerd Email or Username
                      </label>
                      <Field type="text" name="emailOrUsername" />
                      <ErrorMessage
                        name="emailOrUsername"
                        component="div"
                        className="error-message"
                      />
                    </div>

                    <button
                      type="submit"
                      className="submit w-fit-content  text-uppercase  ls-1--3 fs-16 fw-5"
                    >
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          ) : null}
          {ResetBox && (
            <div className="hidden-box br-15">
             
              <Formik
                initialValues={initialValues4}
                validationSchema={validationSchema2}
                onSubmit={handleSubmit2}
              >
                 
                {({isSubmitting }) => (
                  <Form >
                    <div className=" d-flex  justify-content-end ">
               
               <span onClick={()=>SetResetBox(false)}>
                 <FontAwesomeIcon icon={faClose} width={25} className=" h-auto "></FontAwesomeIcon>
               </span>
             </div>
                    <div className="input-row position-relative ">
                      <h2 htmlFor="password   fs-40 mb-20 fw-6">Password</h2>
                      <div className="input-wrapper d-flex flex-column ">
                        <label htmlFor="password">New Password</label>
                        <Field type="password" name="password" />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <div className="input-wrapper d-flex flex-column ">
                        <label htmlFor="reEnterPassword">
                          Confirm Password
                        </label>
                        <Field type="password" name="reEnterPassword" />
                        <ErrorMessage
                          name="reEnterPassword"
                          component="div"
                          className="error-message"
                        />
                      </div>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="error-message"
                      />
                      <div className="spacer"></div>
                    </div>
                    <button
                      type="submit"
                      className="submit fs-16 fw-7 ls-1--3 w-fit-content  d-flex   smooth-transit  text-uppercase  justify-content-between align-items-center   "
                    >
                     Set A Password
                      <span className="icon ms-2">
                        <FontAwesomeIcon
                          icon={faArrowAltCircleRight}
                        ></FontAwesomeIcon>
                      </span>
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
