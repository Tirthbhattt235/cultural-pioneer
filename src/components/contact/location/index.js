import React, { useState, useEffect, useRef } from "react";
import Section from "./index.style";
import Image from "next/image";
import Link from "next/link";
import Imff from "../../../../public/assets/images/Contact-form-image.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
export default function Locations({background}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/contact.json");
        const jsonData = await response.json();
        setData(jsonData.contact);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    

<>
    {data ?
  <Section className=" element-container p-es-30">
    <div className="mb-50  element-container-720 text-center">
    <h1 className="fs-50 fw-7 mb-20">{data.title}</h1>
      <p className="mb-20">{data.text}</p>

    </div>
      <div className="bg-banner" style={{backgroundImage: `url(${data.bg})`}}>
          {data.records?.map((item,index)=>(
              <div className={`loc loc-${index+1}`}>
                <Image
                src={item.img}
                height={120+(index*5)}
                width={100+(index*5)}
                ></Image>
              </div>
          ))} 
      </div>
  </Section>
:null}
</>
  );}