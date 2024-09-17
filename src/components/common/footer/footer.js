import Section, { Topline } from "./assets/footer.style";
import Image from "next/image";
import Img from "./assets/imgs/Footer-2-Mailchimp-bg.png";
import Logo from "../../../../public/assets/wp-content/uploads/2023/08/Logo-dark.svg";
import PaymentMehod from "../../../../public/assets/wp-content/uploads/2023/08/payment.png";
import Img2 from "../../../../public/assets/wp-content/uploads/2023/09/Footer-App-Img-2.png";
import Img1 from "../../../../public/assets/wp-content/uploads/2023/09/Footer-App-Img-1.png";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { faCcPaypal } from "@fortawesome/free-brands-svg-icons";
import { faCcAmazonPay } from "@fortawesome/free-brands-svg-icons";
import { faCcApplePay } from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";
function footer() {
  const [Content, Setcontentloaded] = useState(false);
  useEffect(() => {
    Setcontentloaded(true);
  }, []);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/footer.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {}
    };
  
    fetchData();
  }, []);
  return ( 
    <>
      {data ? (
        <Section className={`d-flex  flex-column  `}>
          <div
            className="topline"
            style={{ backgroundImage: `url(${Img.src})` }}
          >
            <div className="element- element-containe element-container overflow-visible  align-items-center  me-auto d-flex flex-column flex-md-row justify-content-center   flex-wrap  ms-auto">
              <div className="txt  d-flex justify-content-center align-items-center   w-fit-content me-5">
                <h4 className=" mb-0 ">Stay updated</h4>
              </div>
              <div className="interestedform row col-md-8 justify-content-center align-items-start d-flex h-100 ">
                <form
                  className="d-flex col-12 flex-sm-row flex-column justify-content-center wdt-mailchimp-subscribe-form with-btn-icon"
                  name="mailchimpSubscribeForm"
                  action="#"
                  method="post"
                >
                  <input
                    type="email"
                    name="wdt_mc_emailid"
                    required="required"
                    placeholder="Mail ID Here"
                  />
                  <input type="hidden" name="wdt_mc_apikey" value="" />
                  <input type="hidden" name="wdt_mc_listid" value="" />
                  <div className="wdt-mailchimp-subscription-button-holder d-flex  justify-content-center mt-3 mt-sm-0">
                    <button type="submit" name="wdt_mc_submit">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" height={48} width={48} viewBox="0 0 100 100"><path d="M87.56,55.39,28.45,89.16a7.94,7.94,0,0,1-8.67-.5A7.43,7.43,0,0,1,19,88a7.74,7.74,0,0,1-2.2-7.45L22,57a5.39,5.39,0,0,1,5.11-4.2L60.35,52a3.09,3.09,0,0,0,3-3.13.33.33,0,0,0,0-.14,2.94,2.94,0,0,0-3.11-2.84l-33.17.83a5.3,5.3,0,0,1-5.28-4L15.7,19.54a9.11,9.11,0,0,1,3-9A7.79,7.79,0,0,1,27,10L87.35,41.43a7.87,7.87,0,0,1,4.27,6.9A8,8,0,0,1,87.56,55.39Z"></path></svg>

                    </button>
                  </div> 
                </form>
              </div>
            </div>
          </div>
          <div className="mainline d-flex   row w-auto g-0 ">
            {/* <div className="  "> */}

            <div className=" d-flex flex-wrap mb-3">
              {data.text ||
              data.contacttext ||
              data.contact ||
              data.email ||
              data.emalitext ||
              data.paymenttext ? (
                <div className="width-40 lin-1">
                  <Image alt="Image"   src={Logo}></Image>
                  {data.text !== undefined || data.text ? (
                    <p className="mb-0">{data.text}</p>
                  ) : null}

                  <div className="row pt-40 g-0">
                    {data.contact !== undefined &&
                    data.contacttext !== undefined ? (
                      <div className="col-md-6 col-12  mb-md-0 mb-20">
                        <h5>
                          {" "}
                          {data.contacttext
                            ? data.contacttext
                            : "24/7 Customer care"}
                        </h5>
                        <Link href={"tel:+" + data.contact} className="pt-1">
                          <span>+(91){data.contact}</span>
                        </Link>
                      </div>
                    ) : null}
                    {data.email !== undefined &&
                    data.emailtext !== undefined ? (
                      <div className="col-md-6 col-12">
                        <h5>
                          {" "}
                          {data.email ? data.emailtext : "24/7 Customer care"}
                        </h5>
                        <Link href={"mailto" + data.email} className="pt-1">
                          <span>{data.email}</span>
                        </Link>
                      </div>
                    ) : null}
                    <div className="col-12 pt-40 d-flex flex-column">
                      <h5 className="mb-3">Our Payment Mehods</h5>
                      {/* <Image alt="Image"  className='w-100  ' style={{minWidth:"250px",maxWidth:"350px"}} src={PaymentMehod} alt="paymrnt meyhods"></Image> */}
                      <div className="d-flex justify-content justify-content- gx-5  align-items-center  ">
                        <FontAwesomeIcon
                          //   height={25}
                          height={30}
                          className="me-3 m3"
                          icon={faCcVisa}
                        ></FontAwesomeIcon>
                        <FontAwesomeIcon
                          //   height={25}
                          height={30}
                          className="me-3 "
                          icon={faCcPaypal}
                        ></FontAwesomeIcon>
                        <FontAwesomeIcon
                          //   height={25}
                          height={30}
                          className="me-3 "
                          icon={faCcMastercard}
                        ></FontAwesomeIcon>
                        <FontAwesomeIcon
                          //   height={25}
                          height={30}
                          className="me-3 "
                          icon={faCcApplePay}
                        ></FontAwesomeIcon>
                        <FontAwesomeIcon
                          //   height={25}
                          height={30}
                          className="me-3 "
                          icon={faCcAmazonPay}
                        ></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="width-40 p-0 p-0 pe-0 ps-0 links d-flex  flex-sm-row flex-column ">
                {data.quicklinksFtrtitle !== undefined ||
                data.quickLinks !== undefined ? (
                  <div className=" quicklinks p-0">
                    <h5 className="mb-20">
                      {data.quickLinksFtrtitle
                        ? data.quickLinksFtrtitle
                        : "Quick Links"}
                    </h5>
                    {data.quickLinks ? (
                      <ul className="ps-0">
                        {data.quickLinks.map((index,keyindex) =>
                          index.link !== undefined &&
                          index.link &&
                          index.linktext ? (
                            <li  key={keyindex}>
                              <Link href={index.link}>
                                <span>{index.linktext}</span>
                              </Link>
                            </li>
                          ) : null
                        )}
                      </ul>
                    ) : null}
                  </div>
                ) : null}
                {data.ServiceFtrtitle !== undefined ||
                data.services !== undefined ? (
                  <div className="services">
                    {data.ServiceFtrtitle ? (
                      <h5 className="mb-20">{data.ServiceFtrtitle}</h5>
                    ) : null}

                    {data.services ? (
                      <ul className="ps-0">
                        {data.services.map((index,keyindex) =>
                          index.link !== undefined &&
                          index.link &&
                          index.linktext ? (
                            <li  key={keyindex}>
                              <Link href={index.link}>
                                <span>{index.linktext}</span>
                              </Link>
                            </li>
                          ) : null
                        )}
                      </ul>
                    ) : null}
                  </div>
                ) : null}
              </div>
              <div className=" width-20 d-flex flex-column  ">
                {data.Ftr4 ? (
                  data.Ftr4.title && data.Ftr4.title !== undefined ? (
                    <h5 className=" mb-4">{data.Ftr4.title}</h5>
                  ) : null
                ) : null}
                {data.Ftr4 ? (
                  data.Ftr4.text && data.Ftr4.text !== undefined ? (
                    <p className="pt-0 pb-10 mb-20">{data.Ftr4.text}</p>
                  ) : null
                ) : null}

                <div className="row pb-0 mb-20 d-flex ">
                  <Link
                    href="#"
                    className="me-20 d-inline w-auto pe-0  0 pe-20      "
                  >
                    <Image alt="Image"  src={Img1} className="m-0"></Image>
                  </Link>

                  <Link
                    href="#"
                    className="d-inline w-auto  pe-0 ps-0   mb-10 mb-20 "
                  >
                    <Image  alt="Image" src={Img2} className="m-0"></Image>
                  </Link>
                </div>
                {data.Ftr4 ? (
                  data.Ftr4.title2 && data.Ftr4.title2 !== undefined ? (
                    <h5 className=" mb-20">{data.Ftr4.title2}</h5>
                  ) : null
                ) : null}

                {data.socials ? (
                  <ul className="followus d-flex flex-row p-0 ">
                    <li>
                      <Link
                        href={
                          data.socials.InstaLink ? data.socials.InstaLink : "/"
                        }
                        className="d-flex justify-content-center  align-items-center "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="16"
                          fill="white"
                          className="bi bi-instagram"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={
                          data.socials.InstaLink ? data.socials.InstaLink : "/"
                        }
                        className="d-flex justify-content-center  align-items-center "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="16"
                          fill="white"
                          className="bi bi-linkedin"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={
                          data.socials.InstaLink ? data.socials.InstaLink : "/"
                        }
                        className="d-flex justify-content-center  align-items-center "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="16"
                          fill="white"
                          className="bi bi-twitter-x"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={
                          data.socials.InstaLink ? data.socials.InstaLink : "/"
                        }
                        className="d-flex justify-content-center  align-items-center "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="16"
                          fill="white"
                          className="bi bi-youtube"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </div>
            </div>

            {/* </div> */}
          </div>
          <div className="lastline d-flex  justify-content-center align-items-center  w-100 p-3 pt-0 pb-0 text-center">
            <p className="mt-20 mb-20">
             {data.copyright ? data.copyright :" Copyright © 2023 Wedesigntech. All rights reserved"} 
            </p>
          </div>
        </Section>
      ) : null}
    </>
  );
}
export default footer;
