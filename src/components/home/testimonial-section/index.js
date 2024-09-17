import Section from "./index.style";
import Image from "next/image";
import Link from "next/link";
import Bg from "../../../../public/assets/wp-content/uploads/2023/10/Home-3-CTA-bg.png"
import Img1 from "../../../../public/assets/wp-content/uploads/2023/08/image-into-heading-1.png"
import Img2 from "../../../../public/assets/wp-content/uploads/2023/08/image-into-heading-2.png"
// import Img1 from "../../../../public/assets"

import {
      AnimatePresence,
      motion,
      inView,
      easeIn,
      animate,
      useInView,
      easeInOut,
      stagger,
      easeOut,
    } from "framer-motion";
    import { useRef,useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignRight, faPlay } from "@fortawesome/free-solid-svg-icons";

function testimonial() {
      const ref = useRef(null);
      const isInView = useInView(ref, { once:true});
      const ref1 = useRef(null);
      const isInView1 = useInView(ref, { once:true});
      const ref2 = useRef(null);
      const isInView2 = useInView(ref, { once:true});
      const [data, setData] = useState([]);
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("testimonial.json");
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {}
        };
        fetchData();
      }, [setData
      ]);
    
      return (

            <>
            {data ?
      <Section className="position-relative text-center  mt-150 pt-100 pb-100  z-0 " style={{backgroundImage: `url(${Bg.src})`}}>
            <div className="overlay position-absolute  h-100 w-100 "></div>
      <AnimatePresence>
            <div  className="b clr-black d-flex justify-content-center align-items-center text element-container-1200  me-auto ms-auto me-ms-auto row">
                 {/* {isInView && ( */}
                   <motion.h2
                   initial={{opacity:0,y:"-50px"}}
                   animate={isInView ?({opacity:1,y:"0px"}):""}
                   ref={ref}
                   transition={{
                        duration:"0.6",
                        ease:easeOut
                   }}
                   className="fs-50 fw-7  pe-0 ps-0 justify-content-center align-items-end flex-wrap mb-0">
                   Discover A Range Of Customized Printing 
                   <span className="img-1 w-fit-content  d-inline-block  position-relative "><Image alt="Image" className=" object-fit-contain  "   src={Img1} alt="image"></Image></span>  Products Designed 
                   <span className="img-2 w-fit-content  d-inline-block  position-relative "><Image alt="Image" className=" object-fit-cover h-auto    "   src={Img2} alt="image"></Image></span>To Help And Promote Your Brand. Find Everything 
                   <Link  className="play-btn  img-3 justify-content-center align-items-center d-inline-flex" href="/#">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 16 16" className="bi bi-play-fill"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"></path></svg>< */}
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="" className="icon" width={20} className="ms-1" viewBox="0 0 100 100"><path fill="white" d="M11.22,97.57V3.43a1.38,1.38,0,0,1,2.09-1.18L91.76,49.32a1.38,1.38,0,0,1,0,2.36L13.31,98.75A1.38,1.38,0,0,1,11.22,97.57ZM24,26v49.1a1.37,1.37,0,0,0,2.08,1.18L67,51.68a1.38,1.38,0,0,0,0-2.36L26.05,24.77A1.37,1.37,0,0,0,24,26Z"></path></svg>
                              </Link>
                   You Need For Business At Rock-Bottom Price.
             </motion.h2>
                 {/* )} */}
                <motion.div className="author-sign W-100 "
                   initial={{opacity:0,scale:"0.5"}}
                   
                   animate={isInView?({opacity:1,scale:"1"}):""}
                   ref={ref}
                   transition={{
                        // duration:"",
                        // delay:0.5,
                        duration:1,
                        ease:easeOut
                   }}
                  >
                  <svg viewBox="0 0 100.04982891481481 100.03147685925923" height="150" width="150">
                  <path d="M75,68.3c-2.1-0.3-7.5-1.9-9.4-4.1c-0.4-0.5-0.9-0.9-1.5-1c-3.3-0.4-13.8,10.3-20.4,8.8    c0.1-0.4,0.2-0.9,0.3-1.3c0.6-0.6,1.1-1.4,1.4-2.3c12.1,2.6,18.9-31,14.7-40.1c-0.2-0.4-0.6-0.5-1-0.4    c-8,6.5-12.3,26.3-16.2,42.4c-0.5,0.3-1,0.4-1.5,0.4c-0.2-0.2-0.4-0.4-0.6-0.6c0.4-0.6,0.7-1.2,0.9-1.9c0.2-0.4-0.8-0.7-0.9-0.4    c-0.3,0.4-0.5,0.8-0.8,1.2c-0.5-0.9-0.9-1.8-1.2-2.7c-0.1-0.3-1.1-0.6-1-0.1c0.2,1.8,0.3,3.7,0.3,5.5c-0.7,0.4-1.5,0.8-2.3,0.9    c0.1-0.3,0.2-0.7,0.3-1c0.4-0.8,0.7-1.6,0.9-2.5c0.1-0.4-0.7-0.7-0.9-0.4c-0.5,0.9-0.8,1.8-1,2.9c-0.6,0.8-1.3,1.4-2.2,1.7    c0.4-1.2,0.8-2.4,0.9-3.7c0.1-1-2.9-0.3-3.4,0.4c-0.3,0.4-0.3,1.2-0.9,3.6c-0.2,0.7,1.3,0.7,1.8,0.7c-1.4,2.4-3.3,3.1-4.5,2.8    c0.9-2,2.2-5.2,2.2-7.5c0-0.3-0.5-0.5-0.7-0.5c-1.7,0-1.3-0.2-2.3,1.5c-1.2,2.1-2.1,4.9-0.4,6.5c-2.3,4.2-5.6,6.5-7.2,3.2    c0.6-5.7,0.9-7.9,0.9-7.9c0.7-1.8,1.7-3.5,2.7-5c1.6-1.1,3.2-2.4,4.6-3.8c0.3-0.3-0.5-0.6-0.6-0.6c-2,0.1-3.7,2-5,4    c-0.5,0.3-0.9,0.6-1.4,0.9c0.3-3.6,0.4-5.8,0.8-11.1c9.1-12.7,17-27.6,20-44c0.7-3.7,1.7-10.3-2.1-12.1    C24.6-5.9,21.2,38.8,19.8,56.6c-4.7,6.6-9.8,12.7-15.2,18.5c-0.1,0.1,0.2,0.2,0.3,0.1c5.3-5.3,10.2-11,14.8-17.2    c-0.3,3.7-0.6,7.6-0.8,10.5C9.2,75.1-0.8,81.6,0.1,91c0.4,4.4,3.5,7.7,6.9,8.7c8,2.4,10.4-8.7,11.5-18.2c1.6,1.5,5,2.3,8.1-3.8    c2,0.8,4.5-0.7,5.9-3.4c0.8-0.1,1.5-0.4,2.2-0.8c0.4,0.7,3-0.4,3.6-0.7c0.1,5-0.3,10-0.3,15c0,0.4,0.8,0.6,0.9,0.3    c1.9-4.9,3.5-10,4.7-15.2c6.7,1.9,14.7-6.9,20.3-8.7c1-0.3,0.6,1,3.5,2.6c9.8,5.2,16.2,2.1,24.9,1c14.1-1.8,1.8,11.4-7.6,24    c-0.2,0.2,0.4,0.5,0.5,0.3c3-4,8.9-9.8,12.7-16.1C107.4,59.9,82.8,69.5,75,68.3 M34.3,1.3c12.6-5.5,5.1,27.4-13.5,54    C22,39,24.7,5.5,34.3,1.3 M20.1,68.9c-0.1,0.2-0.2,0.4-0.3,0.6c0-0.1,0-0.2,0-0.4L20.1,68.9 M10.1,99.1    C5.4,100.5-1,94.6,1.5,86.6c2.2-7.2,11.7-13.1,17.4-16.9c-0.1,0.7-0.1,1.3-0.2,2c-1.1,2.5-2.1,6.4-0.9,8.7    C16.9,87.1,15.6,97.4,10.1,99.1 M27.7,69.8H28c-0.2,2.3-0.8,4.6-1.9,6.6C24.7,73.9,28.1,69.8,27.7,69.8 M30.7,73.5    c0.7-3,0.2-3.2,2.1-3.5c-0.2,1.2-0.5,2.4-1,3.5C31.4,73.5,31,73.5,30.7,73.5 M59.4,29.2c3.3,9.5-3.2,40.1-13.8,38.5    c0.1-0.5,0.4-1.2-0.5-1.6C47.8,55.4,52.2,35.8,59.4,29.2 M42.7,71.4l-0.1,0.2c-0.1-0.1-0.2-0.1-0.3-0.1    C42.5,71.4,42.6,71.4,42.7,71.4 M39.2,70.7c0-0.5,0-1-0.1-1.5c0.2,0.3,0.3,0.5,0.5,0.8C39.5,70.2,39.4,70.4,39.2,70.7 M38.9,85    c0.1-4.3,0.4-8.6,0.3-12.9c0.2-0.2,0.4-0.3,0.6-0.5c0.5,0,0.9,0,1.4,0c0.4,0.3,0.8,0.5,1.2,0.7C41.4,76.6,40.3,80.9,38.9,85" />
                  </svg>
                  </motion.div>
                {data.author!==undefined && data.author ||
                data.position!==undefined && data.position  ?
                <motion.div
                initial={{opacity:0,x:"-50px"}}
                animate={isInView2 ?({opacity:1,x:"0px"}):""}
                ref={ref2} 
                transition={{
                     delay:'0.8',
                     duration:"0.5",
                     ease:easeIn
                }}
               className="author-position text-uppercase">
                     <h3 className="clr-black fw-7 fs-18 mb-0">
                     {data.author ? data.author :"Nil Omar"}
                     <span className="clr-black-50 pe-2 fs-18 pe-3">  -  {data.position ? data.position :"CEO"}</span>
                     </h3>
               </motion.div>
                :null}
                       
            </div>
      </AnimatePresence>
</Section>
      :null}
            
            </>
          
      );
}
export default testimonial;