import Section from "./index.style";
import Image from "next/image";
import Link from "next/link";
import Brand from "../../../../public/assets/wp-content/uploads/2023/10/Home-3-Brand-Logo-5-100x100.png";
import {
  AnimatePresence,
  motion,
  useInView,
  stagger,
  easeIn,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

function brands() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/brands.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {}
    };

    fetchData();
  }, []);
  return (
    <>
      {data ? (
        <Section
          ref={ref}
          className=" background-gradient  pt-150 pb-150 "
        >
          <AnimatePresence>
            <div className="    ">
              {data.title !== undefined || data.bodytext !== undefined ? (
                <motion.div
                  initial={{ y: "-100px", opacity: 0 }}
                  animate={isInView ? { opacity: 1, y: "0px" } : ""}
                  transition={{
                    ease: "easeIn",
                  }}
                  className="header-text element-container-740 me-ms-auto"
                >
                  {data.title ? (
                    <h2 className="fs-50 fw-7 text-center text-white mb-20">
                      {data.title}
                    </h2>
                  ) : null}
                  {data.bodytext ? (
                    <p className="fs-16 text-white mb-0 text-center">
                      {data.bodytext}
                    </p>
                  ) : null}
                </motion.div>
              ) : null}

              <motion.div
                initial={{ y: "100px", opacity: 0 }}
                animate={isInView ? { opacity: 1, y: "0px" } : { y: "100px", opacity: 0 }}
                transition={{
                  ease: "easeIn",
                }}
                className="brands overflow-hidden 5     "
              >
                <motion.div className="line d-flex flex-row position-relative mb-20 ">
                  { data.Brands?.map((index,keyindex) => (
                        <div className="brand" key={keyindex}>
                          <Link className="" href="#">
                            <div className="mask">
                            <Image alt="Image"
                              className=" "
                              height={150}
                              width={150}
                              src={index.img}
                              alt="Image"
                            ></Image>


                            </div>

                           
                          </Link>
                        </div>
                      ))
                   }
                </motion.div>
                <motion.div
                  initial={{ y: "100px", opacity: 0 }}
                  animate={isInView ? { opacity: 1, y: "0px" } : { y: "100px", opacity: 0 }}
                  transition={{
                    ease: "easeIn",
                  }}
                  className="line d-flex flex-row position-relative "
                >
                <>
                {
                   data.Brands?.map((index1,keyindex) => (
                    <div className="brand" key={keyindex}>
                          <Link className="" href="#">
                            <div className="mask">
                            <Image alt="Image"
                              className=" "
                              height={150}
                              width={150}
                              src={index1.img}
                              alt="Image"
                            ></Image>


                            </div>

                           
                          </Link>
                        </div>
                  ))
                    }
                </>
                </motion.div>
              </motion.div>
            </div>
          </AnimatePresence>
        </Section>
      ) : null}
    </>
  );
}

export default brands;
