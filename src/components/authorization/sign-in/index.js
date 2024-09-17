// import React, { useState, useEffect, useRef } from "react";
// import Section from "./index.style";
// import Image from "next/image";
// import Link from "next/link";
// import BG from "../../../../public/assets/images/wp-content/uploads/2023/08/Faq-image.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowAltCircleRight,
//   faClose,
//   faEye,
//   faEyeSlash,
//   faSignIn,
// } from "@fortawesome/free-solid-svg-icons";
// import * as Yup from "yup";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";

// export default function Login() {
//   const [passwordBox,SetPasswordBox]=useState()
//   const initialvalues = {
//     Username: "",
//     email: "",
//     password: "",
//   };
//   const validationSchema = Yup.object({
//     Username: Yup.string().required("Please fillup the first name"),
//     email: Yup.string().required("please fill the Email "),
//     password: Yup.string().required("Required"),
//   });
//   const submitForm = (values, { resetForm }) => {
//     console.log("Form submitted with values:", values);
//     // You can perform further actions here, like sending the form data to a server
//     // Reset the form after submission
//     resetForm();
//   };
  
//     const initialValues1 = {
//       newPassword: '',
//       confirmPassword: '',
//       emailOrUsername: ''
//     };
  
//     const validationSchema1 = Yup.object().shape({
//       newPassword: Yup.string()
//         .min(8, 'Password must be at least 8 characters')
//         .required('Required'),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
//         .required('Required'),
//       emailOrUsername: Yup.string().required('Required')
//     });
  
//     const handleSubmit = (values, { resetForm }) => {
//       // Handle form submission here
//       console.log(values);
//       resetForm();
//       SetPasswordBox(!passwordBox)
//     };
//   const [eye, eyeclose] = useState(true);
//   return (
//     <Section className=" mt-100 mb-100 ">
//       <div className=" element-container  ">
//         <div className="text  ext-center   ">
//           <h2 className="heading fs-60 fw-7 ls-1--3 mb-20">
//             Already An User ?
//           </h2>
//           <p className="mb-20  fs-24  clr-black-50">
//             {" "}
//             Lorem ipsum dolor sit amet, consectetur adipisici
//           </p>
//           <Formik
//             initialValues={initialvalues}
//             validationSchema={validationSchema}
//             onSubmit={submitForm}
//           >
//             {({ handleSubmit }) => (
//               <Form onSubmit={handleSubmit}>
//                 <div className="input-row">
//                   <label htmlFor="username">Username</label>
//                   <Field
//                     type="text"
//                     className="w-100"
//                     name="Username"
//                     placeholder="Username"
//                   ></Field>
//                   <ErrorMessage
//                     name="Username"
//                     component="div"
//                     className="error-message"
//                   />
//                 </div>
//                 <div className="input-row">
//                   <label htmlFor="email">Email</label>
//                   <Field
//                     type="email"
//                     className="w-100"
//                     name="email"
//                     placeholder="Email"
//                   ></Field>
//                   <ErrorMessage
//                     name="email"
//                     component="div"
//                     className="error-message"
//                   />
//                 </div>
//                 <div className="input-row position-relative ">
//                   <label htmlFor="password">Password</label>
//                   <div className=" position-relative ">
//                     <Field
//                       type="text"
//                       className={`w-100 ${eye ? "black-dots-input" : ""}`}
//                       name="password"
//                       placeholder="Password"
//                     ></Field>
//                     <div className="password">
//                       {eye ? (
//                         <FontAwesomeIcon
//                           className=" smooth-transit"
//                           icon={faEyeSlash}
//                           onClick={() => eyeclose(false)}
//                         ></FontAwesomeIcon>
//                       ) : (
//                         <FontAwesomeIcon
//                           className=" smooth-transit"
//                           icon={faEye}
//                           onClick={() => eyeclose(true)}
//                         ></FontAwesomeIcon>
//                       )}
//                     </div>
//                   </div>
//                   <ErrorMessage
//                     name="password"
//                     component="div"
//                     className="error-message"
//                   />
//                   <div className="spacer"></div>
//                   <Link className="forgot mt-10" href="/"
//                   onClick={(event)=>{
//                     event.preventDefault()
//                     SetPasswordBox(true)
//                   }}
//                   > Forgot Password</Link>
//                 </div>
//                 <div className="spacer"></div>
//                 <div className="w-100">
//                   <button
//                     type="submit"
//                     className="submit fs-16 fw-7 ls-1--3  d-flex   smooth-transit  text-uppercase  justify-content-between align-items-center   "
//                   >
//                     Login
//                     <span className="icon ms-2">
//                       <FontAwesomeIcon
//                         icon={faArrowAltCircleRight}
//                       ></FontAwesomeIcon>
//                     </span>
//                   </button> 
//                 </div>
//               </Form>
//             )}
//           </Formik>
//            {passwordBox ? 
//            <div   className="hidden-box br-15">
            
//            <Formik
//       initialValues={initialValues1}
//       validationSchema={validationSchema1}
//       onSubmit={handleSubmit}
//       className="element-container-720  "
//     >
//         {({ handleSubmit }) => (
//               <Form onSubmit={handleSubmit} className=" element-container-720 w-100">


// <div onClick={()=>SetPasswordBox(false)} className="  d-flex  justify-content-end ">
//               <FontAwesomeIcon icon={faClose} height={30} width={30}></FontAwesomeIcon>
//             </div>
//             <div className="input-wrapper">
//           <label htmlFor="emailOrUsername">Enter a registerd Email or Username</label>
//           <Field type="text" name="emailOrUsername" />
//           <ErrorMessage name="emailOrUsername" component="div" className="error-message" />
//         </div>
//         <div className="input-wrapper">
//           <label htmlFor="newPassword">New Password</label>
//           <Field type="password" name="newPassword" />
//           <ErrorMessage name="newPassword" component="div"  className="error-message"/>
//         </div>

//         <div className="input-wrapper">
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <Field type="password" name="confirmPassword" />
//           <ErrorMessage name="confirmPassword" component="div"  className="error-message"/>
//         </div>

       

//         <button type="submit" className="submit" onClick={handleSubmit}>Submit</button>
//               </Form>)}
      
  
//     </Formik>
//      </div>
//            :null}
          
//         </div>
//       </div>
//     </Section>
//   );
// }
