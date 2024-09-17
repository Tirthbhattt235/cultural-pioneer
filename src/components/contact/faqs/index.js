import React, { useState, useEffect, useRef } from "react";
import Section from "./index.style";
import Image from "next/image";
import Link from "next/link";
import Imff from "../../../../public/assets/images/Contact-form-image.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
export default function Contact({background}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/contact.json");
        const jsonData = await response.json();
        setData(jsonData.faq);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    

<>
    {data ?
  <Section className=" element-container p-es-30 mt-100">
    <div className="mb-70  elementntainer-720 text-center">
    <h1 className="fs-50 fw-7 mb-20">{data.title}</h1>
      <p className="mb-20">{data.text}</p>

    </div>
     <div className="q-wrapper">
      {data?.faqs?.map((item,index)=>(
        <div className="q-card smooth-transit">
          <h4 className="  fs-28 fw-6">
            {index+1}. &nbsp;{item.title}
          </h4>
          <p className="fs-18 fw-4">
            {item.description}
          </p>
        </div>
      ))}
     </div>
  </Section>
:null}
</>
  );}