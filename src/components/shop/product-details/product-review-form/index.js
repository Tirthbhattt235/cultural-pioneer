import React, { useState, useEffect, useRef } from "react";
import Section from "./index.style";
import Image from "next/image";
import Link from "next/link";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Label } from "@mui/icons-material";
export default function Reviewform({feedback}) {
  const [data, setData] = useState([]);

  useEffect(() => {

    setData(feedback);
  }, []);
  const formatDate = (timestamp) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date(timestamp);
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  };
  const initialValues = {
    Fname: "",
    Email: "",
    Msg: "",
    condition: false
  };
  const validationSchema = Yup.object({
    Fname: Yup.string().required("Please fillup the first name"),
    Email: Yup.string().required("please fill the from "),
    condition: Yup.boolean().required("weew").oneOf([true], "Please agree to the conditions"),
  });
  const [rating, setrating] = useState(false);
  const submitForm = (values, { resetForm }) => {
    // if(isChecked=== true){
      console.log("Form submitted with values:", values);
      // You can perform further actions here, like sending the form data to a server
      // Reset the form after submission
      resetForm();
    // }

  };
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the checkbox value
  };
  return (
    <>
      {data ? (
        <Section className=" element-container p-es-30">
          <div className="wrapper">
            {data.review && data.review.length > 0 ? (
              <div className="reviews">
                {data.review?.map((rev, id) =>
                  rev.img || rev.date || rev.name || rev.text || rev.ratings ? (
                    <div className="review mb-20 d-flex flex-row" key={id}>
                      {rev.img !== undefined && rev.img ? (
                        <div className=" w-fit-content review-img">
                          <div className="img-wrapper">
                            <Image alt="Image" height={35} width={35} src={rev.img}></Image>
                          </div>
                        </div>
                      ) : null}
                      {rev.date || rev.name || rev.text || rev.ratings ? (
                        <div className="text w-100 d-flex flex-column ">
                          {rev.name || rev.date || rev.ratings ? (
                            <div className=" d-flex justify-content-sm-between justify-content-center  text-sm-start  text-center  -flex flex-sm-row flex-column  ">
                              <p className="name-date d-flex  flex-md-row flex-column justify-content-center ">
                                {rev.name !== undefined && rev.name ? (
                                  <span className="name">{rev.name} </span>
                                ) : null}
                                <span className=" d-md-block  d-none">
                                &nbsp;- &nbsp;

                                </span>
                                {rev.date !== undefined && rev.date ? (
                                  <span className="date">
                                    {formatDate(rev.date)}
                                  </span>
                                ) : null}
                              </p>
                              {rev.ratings !== undefined && rev.ratings ? (
                                <Stack
                                  spacing={1}
                                  className="d-flex m-tb-5 align-items-center "
                                >
                                  <Rating
                                    name="half-rating-read"
                                    defaultValue={rev.ratings}
                                    precision={0.5}
                                    readOnly
                                  />
                                </Stack>
                              ) : null}
                            </div>
                          ) : null}
                          <div className="horizontal-line"></div>
                          {rev.text !== undefined && rev.text ? (
                            <p className="fs-16 mt-10 m b-0" style={{lineHeight:"28px"}}>{rev.text}</p>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  ) : null
                )}
              </div>
            ) : null}
            <div className="spacer"></div>
            {data.title !== undefined && data.title ? (
              <h4 className="mb-20 fs-30 fw-6 mt-20">{data.title} </h4>
            ) : null}
            {data.text !== undefined && data.text ? (
              <p className="fs-13 mb-0 d-flex flex-column ">
                {data.text.line !== undefined && data.text.line ? (
                  <span className="lh-normal" style={{ lineHeight: "20px" }}>
                    {data.text.line}
                  </span>
                ) : null}

                {data.text.line1 !== undefined && data.text.line1 ? (
                  <span className="lh-normal" style={{ lineHeight: "20px" }}>
                    {data.text.line1}
                  </span>
                ) : null}
              </p>
            ) : null}
            <div className="spacer"></div>

            {data.title1 !== undefined && data.title1 ? (
              <h5 className="fs-16 fw-5 mt-20 mb-0">{data.title1}</h5>
            ) : null}
            <Stack spacing={1} className=" mb-20" style={{ marginTop: "5px" }}>
              <Rating name="half-rating-read" />
            </Stack>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={submitForm}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                 
                  <div className="d-flex flex-column input-row">
                    <div className="input">
                      <label htmlFor="Fname">Name</label>
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
                      {" "}
                      <label htmlFor="email">Email</label>
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
                  </div>
                  <div className="d-flex flex-column input-row">
                    <div className="overflow-hidden d-flex flex-column  justify-content-between   h-100 ">
                      <label htmlFor="Msg"> Your Review</label>
                      <Field
                        as="textarea"
                        name="Msg"
                        type="textarea"
                        placeholder="Additional Message"
                        rows="5"
                      />
                    </div>
                  </div>

                
                  <div className="w-100  ">
                    {data.condition !== undefined && data.condition ?
                      <div className="d-flex mb-20 mt-20 flex-direction-column flex-wrap  input- position-relative ">
                      <Field
                        type="checkbox"
                        name="condition"
                        // checked={isChecked} // Set the checked state of the checkbox
                        // onChange={handleCheckboxChange} // Handle checkbox change event
                      />
                      <label className=" ms-10 fs-14 fw-5 mb-0 condition" >
                      {data.condition}
                      </label>
                      <br></br>
                      <ErrorMessage
                        name="condition"
                        component="div"
                        className="error-message position-static ms-20 ps-2  position-static   me-auto  w-100"
                      />
                    </div>

                    :null}
                  
                    <button
                      type="submit"
                      className="submit primary-btn border-0 mt-10 text-white fs-16 fw-7 ls-1--3"
                    >
                      SUBMIT
                    </button>
                  </div>
                  <div></div>
                </Form>
              )}
            </Formik>
          </div>
        </Section>
      ) : null}
    </>
  );
}
