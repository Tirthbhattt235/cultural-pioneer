import { useState, useRef } from "react";
import {
  AnimatePresence,
  motion,
  inView,
  easeIn,
  animate,
  useInView,
} from "framer-motion";
// import {} from "react"
import CountUp from "react-countup";
import LazyLoadComponent from "./LazyLoading";
const linearprogress = ({ done }) => {
  const [style, setStyle] = useState(0);
  const [contentLoaded, setContentLoaded] = useState(false);

  const loadContent = () => {
    // Perform the content loading here
    setContentLoaded(true);
  };
  // setTimeout(() => {
  const newStyle = {
    opacity: 1,
    width: `${done}%`,
  };

  // setStyle(newStyle);
  // }, 200);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <LazyLoadComponent onIntersection={loadContent}>
        {contentLoaded ? (
          <span className="  position-absolute text  right  position-absolute fs-20 fw-5 " style={{ left: `${done}%` }}>
            <CountUp className="ctr-num fs-20" start={0} end={done}></CountUp>%
          </span>
        ) : (
          ""
        )}
      </LazyLoadComponent>
      <div className="progress  ">
        <>
          <motion.div
            initial={{ x: "-200px" }}
            animate={{ x: "0px" }}
            className="progress-done "
            style={newStyle}
          ></motion.div>
        </>
      </div>
    </>
  );
};

export default linearprogress;
