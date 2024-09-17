import React, { useState, useEffect, useRef } from "react";
import Section from "./index.style";
import Image from "next/image";
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Android from "../../../../public/assets/images/wp-content/uploads/2023/08/google-play-2048x607.png";
import Ios from "../../../../public/assets/images/wp-content/uploads/2023/08/App-store-2048x607.png";
export default function Faq() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/about/common.json");
        const jsonData = await response.json();
        setData(jsonData.faq);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const [expanded, setExpanded] = React.useState("panel0");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : panel);
  };

  return (
    <>
      {data ? (
        data.title ||
        data.img ||
        data.text ||
        data.QA ||
        data.playstorelink ||
        data.ppstorelink ? (
          <Section className=" element-container d-flex flex-row flex-wrap  ">
            {data.img ||
            data.text ||
            data.playstorelink ||
            data.appstorelink ? (
              <div
                className="left d-flex  align-items-end"
                style={{ backgroundImage: `url(${data.img})` }}
              >
                <div className="spacer"></div>
                {data.title ||
                data.text ||
                data.playstorelink ||
                data.appstorelink ? (
                  <div className="question-box text-white ">
                    {data.title !== undefined && data.title ? (
                      <h3 className="fs-40 fw-5 mb-20">{data.title}</h3>
                    ) : null}
                    {data.text !== undefined && data.text ? (
                      <p className="fs-16 mb-0">{data.text}</p>
                    ) : null}
                    {data.playstorelink !== undefined && data.playstorelink ? (
                      <Link
                      
                        href={data.playstorelink ? data.playstorelink : "/"}
                      >
                        <Image alt="Image" className="me-20 mt-20" src={Android} width={200}></Image>
                      </Link>
                    ) : null}
                    {data.appstorelink !== undefined && data.appstorelink ? (
                      <Link  href={data.appstorelink ? data.appstorelink : "/"}>
                        <Image alt="Image" className="m mt-20" src={Ios} width={200}></Image>
                      </Link>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ) : null}
            {data.QA ||
            data.title2 ||
            data.text2 ||
            data.btntext2 ||
            data.btnlink ? (
              <div className="right">
                {data.QA || data.QA.length > 0 ? (
                  <div className="accordian">
                    {/* <Accordion> */}
                    {data.QA.map((index, item,keyindex) =>
                      index.question !== undefined &&
                      index.question &&
                      index.answer !== undefined &&
                      index.answer ? (
                        <Accordion
                          className="accor-item"
                          expanded={expanded === "panel" + item}
                          onChange={handleChange("panel" + item)}
                          key={item+""+"Q-A"+Math.floor(300*23)}
                        >
                          <AccordionSummary
                            className="m-0 question"
                            aria-controls="panel2-content"
                            id="panel2-header"
                          >
                            <Typography className="m-0">
                              {index.question}
                              <span className="icon">
                                {expanded === "panel" + item ? (
                                  <FontAwesomeIcon
                                    icon={faAngleUp}
                                    width={17}

                                  ></FontAwesomeIcon>
                                ) : (
                                  <FontAwesomeIcon
                                  width={17}

                                    icon={faAngleDown}
                                  ></FontAwesomeIcon>
                                )}
                              </span>
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails className="answer">
                            <Typography>{index.answer}</Typography>
                          </AccordionDetails>
                        </Accordion>
                      ) : null
                    )}
                    {/* </Accordion> */}
                  </div>
                ) : null}
                {data.title2 || data.text2 || data.btnlink || data.btnlink ? (
                  <div className="question-box ">
                    {data.title2 || data.text2 ? (
                      <div className="w-55 p-10">
                        {data.title2 !== undefined && data.title2 ? (
                          <h2 className="mb-20 fs-24 fw-6">{data.title2}</h2>
                        ) : null}
                        {data.text2 !== undefined && data.text2 ? (
                          <p className=" fs-16 ">{data.text2}</p>
                        ) : null}
                      </div>
                    ) : null}
                    {data.btntext || data.btnlink ? (
                      <div className="w-45 p-10  d-flex justify-content-end  align-items-center ">
                        <div className="primary-btn w-fit-content bck  ">
                          <Link
                            className=" text-decoration-none fs-18  text-white text-uppercase "
                            href={data.btnlink ? data.btnlink : "/"}
                          >
                            {data.btntext ? data.btntext : "get in touch "}
                            <span className="icon d-flex justify-content-center  align-items-center ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mt-0 me-0"
                                height="18"
                                width="18"
                                viewBox="0 0 100 100"
                              >
                                <path
                                  fill="white"
                                  d="M11.22,97.57V3.43a1.38,1.38,0,0,1,2.09-1.18L91.76,49.32a1.38,1.38,0,0,1,0,2.36L13.31,98.75A1.38,1.38,0,0,1,11.22,97.57ZM24,26v49.1a1.37,1.37,0,0,0,2.08,1.18L67,51.68a1.38,1.38,0,0,0,0-2.36L26.05,24.77A1.37,1.37,0,0,0,24,26Z"
                                ></path>
                              </svg>
                            </span>
                          </Link>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ) : null}
          </Section>
        ) : null
      ) : null}
    </>
  );
}
