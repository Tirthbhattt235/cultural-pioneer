import Section from "./index.style";
import Image from "next/image";
import Link from "next/link";
import Img from "../../../../public/assets/wp-content/uploads/2023/10/Home-2-Slider-T-shirts.png";
import {
  AnimatePresence,
  motion,
  inView,
  easeIn,
  animate,
  useInView,
  easeInOut,
  stagger,
} from "framer-motion";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignRight,
  faAngleLeft,
  faAngleRight,
  faArrowLeft,
  faArrowRight,
  faPlay,
  faMobileAlt,
  faEnvelope,
  faPhone,
  faMailBulk,
  faMailForward
} from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { useState, useEffect } from "react";

function DevlopYourBrand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/devlopYourBrand.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {}
    };

    fetchData();
  }, []);
  return (
    <>
        {
          data ?
          <Section ref={ref}>
          <AnimatePresence>
            <div className=" element-container-1720 me-auto ms-auto pt-150 row g-0 align-items-center  justify-content-center">
            {data.bnimg  ?
                      <div className=" row left-section">
                      {data.bnimg[0].img || data.bnimg[1].img ?
                      <motion.div
                      initial={{ x: "-200px", y: "100px", opacity: 0 }}
                      animate={isInView ? { x: "0px", y: "0px", opacity: 1 } : ""}
                      transition={{
                        // delay:"0.3",
                        duration: "0.5",
                        ease: easeIn,
                      }}
                      className="img-container-bottom col-md-6 col-12 d-flex ps-0 flex-column"
                    >
                      {data.bnimg[0].img ?
                       <Image alt="Image"
                       alt="Image"
                       height={500}
                       width={500}
                       src={data.bnimg[0].img}
                       className=" w-100  object-fit-cover  "
                     ></Image>:null}
                      {data.bnimg[1].img ?
                       <Image alt="Image"
                       alt="Image"
                       height={500}
                       width={500}
                       src={data.bnimg[1].img}
                       className=" w-100  object-fit-cover  "
                     ></Image>:null}
                     
        
                    </motion.div>
                    :null}
                      
                      {data.bnimg[0].img || data.bnimg[1].img ?
                     
                      <motion.div
                        initial={{ x: "200px", y: "100px", opacity: 0 }}
                        animate={isInView ? { x: "0px", y: "0px", opacity: 1 } : ""}
                        transition={{
                          // delay:"0.3",
                          duration: "0.5",
                          ease: easeIn,
                        }}
                        className="col-md-6 col-12 m-md-auto pe-0  m-0 img-container-top d-flex flex-column"
                      >
                       {data.bnimg[2].img ?
                       <Image alt="Image"
                       alt="Image"
                       height={500}
                       width={500}
                       src={data.bnimg[2].img}
                       className=" w-100  object-fit-cover  "
                     ></Image>:null}
                      {data.bnimg[3].img ?
                       <Image alt="Image"
                       alt="Image"
                       height={500}
                       width={500}
                       src={data.bnimg[3].img}
                       className=" w-100  object-fit-cover  "
                     ></Image>:null}
                      </motion.div>:null }
                    </div>
      
      :null}

              <div className=" row g-0  right-section  d-flex justify-content-center align-items-center">
               {data.title !==undefined ||
               data.bodytext !==undefined ?
               <motion.div
               initial={{ y: "20px", opacity: 0 }}
               animate={isInView ? { y: "50px", opacity: 1, y: "0px" } : ""}
               className="header mb-20"
               transition={{
                 delay: "0.3",
                 duration: "0.5",
                 ease: easeIn,
               }}
             >
              {data.title ?
                   <motion.h2 className="fs-50 fw-7 text-black mb-20">
                   {data.title}
                 </motion.h2> 
              :null}
                {data.bodytext ?
                    <p className=" text-black">
                   {data.bodytext}
                 </p> 
              :null}
              
                
             </motion.div>

               :null}
               
               {data.services && data.services.length >0 ?
                <motion.div
                initial={{
                  opacity: 0,
                  x: "100px",
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        x: "0px",
                      }
                    : ""
                }
                transition={{
                  delay: "0.3",
                  ease: easeIn,
                  staggerChildren: 4,
                  delayChildren: 0.7,
                }}
                className="row g-0 flex-wrap  pb-20 mb-20 services"
              >
               {data.services?.map((index,keyindex)=>(
                 index.title !== undefined && index.title ||
                 index.pg !== undefined && index.pg ||
                 index.img !== undefined  && index.img ||
                 index.link !== undefined && index.link
                 ?
                  <motion.div key={keyindex} className="col-xxl-4 col-sm-6 col-12  d-flex flex-column justify-content-start  align-items-start p-20 ps-0 pe-40 ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#ff5e62" height="64" width="64" className="mb-2" viewBox="0 0 100 100" > <path d="M87.78,41.36V80.42A7.81,7.81,0,0,1,80,88.23h-70a7.81,7.81,0,0,1-7.81-7.81V30.56a7.81,7.81,0,0,1,7.81-7.81h58a1.39,1.39,0,0,1,1.39,1.39h0a1.38,1.38,0,0,1-1.39,1.38h-58a5,5,0,0,0-5,5V80.42a5,5,0,0,0,5,5H80a5,5,0,0,0,5-5V41.36A1.38,1.38,0,0,1,86.39,40h0A1.39,1.39,0,0,1,87.78,41.36Z"></path> <path d="M80,48.72V79.28a1.07,1.07,0,0,1-1.07,1.07h-54a1.12,1.12,0,0,1-1.12-1.12V31.71a1,1,0,0,1,1-1h35a1.38,1.38,0,0,1,1.38,1.38h0a1.38,1.38,0,0,1-1.38,1.39H27.54a1,1,0,0,0-1,1v42a1.13,1.13,0,0,0,1.13,1.12H76.14a1.07,1.07,0,0,0,1.07-1.07V48.72a1.39,1.39,0,0,1,1.38-1.39h0A1.39,1.39,0,0,1,80,48.72Z"></path> <rect x="12.99" y="66.38" width="2.77" height="11.16" rx="1.39" ry="1.39" ></rect> <rect x="12.99" y="33.56" width="2.77" height="11.16" rx="1.39" ry="1.39" fill="#ff5e62" ></rect> <path fill="#ff5e62" d="M14.42,49.39a6.18,6.18,0,1,0,6.18,6.18A6.18,6.18,0,0,0,14.42,49.39Zm0,9.58a3.41,3.41,0,1,1,3.4-3.4A3.41,3.41,0,0,1,14.42,59Z" ></path> <path fill="#ff5e62" d="M52.66,56.13a1.39,1.39,0,0,1,.35,2,11.55,11.55,0,0,1-9.77,5,30.79,30.79,0,0,1-5.89-.76,32.26,32.26,0,0,0-4-.61A1.39,1.39,0,0,1,32,60.45h0A1.39,1.39,0,0,1,33.51,59a33.73,33.73,0,0,1,4.37.65c4.69.92,9.13,1.78,12.92-3.17a1.4,1.4,0,0,1,1.86-.33Z" ></path> <path fill="#ff5e62" d="M96.6,15.2l-1.8-1.8a4.81,4.81,0,0,0-6.79,0L75.89,25.52l-5.18,5.19-2.77,2.77-8.61,8.6-1.08,1.08a.79.79,0,0,0-.14.23l-.35,1L54.11,55.14a.6.6,0,0,0,.76.77L65.6,52.25l1-.33a.57.57,0,0,0,.23-.15l1.11-1.11,9.29-9.28L80,38.61l5-5L96.6,22A4.81,4.81,0,0,0,96.6,15.2Zm-38,35.51,1.08-3.19a.6.6,0,0,1,1-.23l2.1,2.1a.6.6,0,0,1-.23,1l-3.18,1.09A.6.6,0,0,1,58.55,50.71Zm26.39-21-5,5L66.39,48.28a.61.61,0,0,1-.85,0l-3.82-3.82a.61.61,0,0,1,0-.85l12.91-12.9,5.18-5.19,2.44-2.43,3.25-3.25a.6.6,0,0,1,.84,0l3.86,3.78a.6.6,0,0,1,0,.85Zm9.7-9.7L93,21.65a.6.6,0,0,1-.84,0l-3.86-3.78a.59.59,0,0,1,0-.85L90,15.36a2,2,0,0,1,2.87,0l1.8,1.8A2,2,0,0,1,94.64,20Z" ></path> </svg>
                 {index.title || index.link ? 
                 <Link
                 href={index.link ? index.link :"/"}
                 className="link-hover fw-7 text-decoration-none fs-20 pb-10 clr-black"
               >
                {index.title}
               </Link>
                 :null}
                 {index.pg ? 
                  <p className="fs-16 mb-0 clr-black  ">
                {index.pg}
                </p>
                 :null}
                  
                 
                </motion.div>
                :null
               

               ))}
                
              </motion.div>
                :null}
               
                  <div className="d-flex flex-md-row flex-column  flex-wrap  align-items-md-center align-items-start ">
                  {data.BtnLink !==undefined  && data.BtnText !==undefined ?
                   <motion.div
                   initial={{ y: "20px", opacity: 0 }}
                   animate={isInView ? { y: "50px", opacity: 1, y: "0px" } : ""}
                   transition={{
                     delay: "0.5",
                     duration: "0.5",
                     ease: easeIn,
                   }}
                   className="   w-fit-content me-15 w-fit-content  link-hover  mb-20"
                 >
 
                   <Link className="primary-btn text-decoration-none   d-flex  justify-content-between  align-items-center " href={data.BtnLink ? data.BtnLink :"/"}>
                     <span className=" text-decoration-none fs-16   text-uppercase  text-white ">
                       {data.BtnText}
                     </span>
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       className="icon"
                       height="18"
                       width="18"
                       viewBox="0 0 100 100"
                     >
                       <path
                         fill="white"
                         d="M11.22,97.57V3.43a1.38,1.38,0,0,1,2.09-1.18L91.76,49.32a1.38,1.38,0,0,1,0,2.36L13.31,98.75A1.38,1.38,0,0,1,11.22,97.57ZM24,26v49.1a1.37,1.37,0,0,0,2.08,1.18L67,51.68a1.38,1.38,0,0,0,0-2.36L26.05,24.77A1.37,1.37,0,0,0,24,26Z"
                       ></path>
                     </svg>
                   </Link>
                 </motion.div>
                :null}
                 
                 {data.lin1!==undefined  && data.email ?
                 <div className="d-flex flex-row me-15  justify-content-center align-items-center mb-20">
                 <div className=" bg-black   text-white icons">
                       <FontAwesomeIcon icon={faPhone} height={20}></FontAwesomeIcon>
                 </div>
                 <div className="d-flex flex-column me">
                      {data.lin1 ?
                       <span className="fs-16">{data.lin1}</span>                        
                      
                       
                      :null}
                      {data.email ?
                       <Link className=" text-decoration-none clr-black fs-14 fw-6 primary-clr-hover" href="/" >{data.email}</Link>                        

                      :null}
                 </div>
           </div>
                 :null}
                  {data.lin2!==undefined  && data.contact ?
                              <div className="d-flex flex-row mt-md-0 me-4 mb-20  justify-content-center align-items-center">

                 <div className=" bg-black   text-white icons">
                       <FontAwesomeIcon icon={faEnvelope} height={20}></FontAwesomeIcon>
                 </div>
                 <div className="d-flex flex-column">
                      {data.lin2 ?
                       <span className="fs-16">{data.lin2}</span>                        
                      
                       
                      :null}
                      {data.contact ?
                       <Link className=" text-decoration-none clr-black fs-14 fw-6 primary-clr-hover" href="/" >{data.contact}</Link>                        

                      :null}
                 </div>
           </div>
                 :null}
                
               
                  </div>
               
              </div>
            </div>
          </AnimatePresence>
        </Section>
          :null
        }
    </>
  
  );
}
export default DevlopYourBrand;
