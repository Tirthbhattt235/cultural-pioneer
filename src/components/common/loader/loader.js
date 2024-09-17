// import { useState,useEffect} from "react";
import { useState,useEffect } from "react";
import Main from "./assets/loader.style"
 function loader(){
      const [Timeout,SetTimer]=useState(null);
      useEffect(() => {
            // Function to handle the fade-out effect
            const fadeOutLoader = () => {
              const loader = document.querySelector('.pre-loader');
              if (loader) {
            //     loader.style.opacity = '0';
                setTimeout(() => {
                  loader.style.display = 'none';
                }, 3000); // Hide after 500ms
              }
            };
        
            // Check if the document is ready
            if (document.readyState === 'loading') {
              // If the document is still loading, wait for it to complete
              document.addEventListener('DOMContentLoaded', fadeOutLoader);
            } else {
              // If the document is already loaded, execute the fade-out logic
              fadeOutLoader();
            }
        
            // Clean up the event listener
            // return () => {
            //   document.removeEventListener('DOMContentLoaded', fadeOutLoader);
            // };
          }, []);
     
      return(
            <>
             <Main>
                  <div className="pre-loader loader3" id="loader3">
            <div className="loader-inner">
                    <input id="loader3-button" type="checkbox" checked  readOnly/>
                    <label className="loader3-button-label" htmlFor="button"></label>
                    <div className="loader3-top"></div>
                    <div className="loader3-middle"></div>
                    <div className="loader3-trace"></div>
                    <div className="loader3-paper"></div>
            </div>
        </div>
        </Main>
            </>
           
      );
}
export default loader;