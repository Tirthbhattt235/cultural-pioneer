import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { faArrowUp ,faAngleUp } from "@fortawesome/free-solid-svg-icons"
 function scrollToTop() {
  const scrollButton = useRef(null);
  const [showTopBtn, setShowTopBtn] = useState(true);
  const [fullarrow,Setfullarrow]=useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        Setfullarrow(false);
        setShowTopBtn(false);
        if (scrollButton.current) {
          scrollButton.current.classList.remove("opacity-0");
        }
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
   
  };
  return (
    <>
      {showTopBtn && (
        <button
          onClick={goToTop}
          className="scroll-top"
          id="scroll-top"
          ref={scrollButton}
          onMouseEnter={()=>{Setfullarrow(true)}}
          onMouseLeave={()=>{Setfullarrow(false)}}
        >
          {fullarrow ?(<FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>):(<FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon>)}
          

        </button>
      )}
    </>
  );
}
export default scrollToTop