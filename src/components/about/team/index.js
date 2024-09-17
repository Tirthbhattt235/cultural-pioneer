import React, { useState, useEffect, useRef } from "react";
import Section from "./index.style";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Team() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/about/common.json");
        const jsonData = await response.json();
        setData(jsonData.team);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {data ? (
        data.title || data.text || data.team ? (
          <Section className=" element-container p-es-30 pt-150 d-flex justify-content-center  flex-column  align-items-center  ">
            {data.title || data.text ? (
              <div className="header-text element-container-740  p-es-30">
                {data.title !== undefined && data.title ? (
                  <h2 className="w-100 text-center fs-50 fw-7 mb-20 ">
                    {data.title}
                  </h2>
                ) : null}
                {data.text !== undefined && data.text ? (
                  <p className="w-100 fs-16 mb-0 text-center">{data.text}</p>
                ) : null}
              </div>
            ) : null}
            {data.team ? (
              <div className="team">
                {data.team.length > 0
                  ? data.team.map((member, index) =>
                      member.img || member.name || member.position ? (
                        <div className="team-member w- h-100" key={index}>
                          {member.img || member.link ? (
                            <div key={index}>
                              <div className="img-container overflow-hidden ">
                                <Link
                                  className="overflow-hidden"
                                  href={member.link ? member.link : "/"}
                                >
                                  <Image alt="Image"
                                    height={453}
                                    width={390}
                                    src={member.img}
                                    className=" object-fit-contain w-100 h-auto"
                                  ></Image>
                                </Link>
                              </div>
                            </div>
                          ) : null}
                          {member.name || member.position ? (
                            <div className="text">
                              {member.name !== undefined && member.name ? (
                                <h5 className="text-center  ">
                                  <Link
                                    className=" text-decoration-none  text-black primary-clr-hover"
                                    href={member.link ? member.link : "/"}
                                  >
                                    {member.name}
                                  </Link>
                                </h5>
                              ) : null}
                              {member.position || member.twittelink ? (
                                <div className="toggler d-flex justify-content-start flex-column align-items-center ">
                                  {member.position ? (
                                    <div className="position">
                                      <h6 className=" mb-0">
                                        {member.position}
                                      </h6>
                                    </div>
                                  ) : null}

                                  <div className="link d-flex flex-row justify-content-between ">
                                    <li className=" text-decoration-none "> <FontAwesomeIcon
                                    height={16}
                                    width={16}
                                    fill="currentColor"
                                      icon={faFacebookF}
                                    ></FontAwesomeIcon></li>
                                   <li>  
                                    <FontAwesomeIcon
                                    height={16}
                                    width={16}
                                    fill="currentColor"
                                      icon={faTwitter}
                                    ></FontAwesomeIcon></li>
                                   <li><FontAwesomeIcon
                                    height={16}
                                    width={16}
                                    fill="currentColor"
                                    icon={faLinkedinIn}
                                    ></FontAwesomeIcon></li>
                                  
                                    
                                  </div>
                                </div>
                              ) : null}
                            </div>
                          ) : null}
                        </div>
                      ) : null
                    )
                  : null}
              </div>
            ) : null}
          </Section>
        ) : null
      ) : null}
    </>
  );
}
