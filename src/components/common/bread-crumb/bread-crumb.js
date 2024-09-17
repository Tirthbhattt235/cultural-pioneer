import React from "react";
import Section from "./bread-crumb.style";
import Link from "next/link";
import { useRouter } from "next/router";
import Imfff from "../../../../public/assets/images/wp-content/themes/printme/assets/images/Breadcrumb-Line-Circle.png"

 function Breadcrumb( {SearchProp}) {
  const router = useRouter();
  const { pathname } = router;

  // Extract the page name from the pathname
  const getPageName = () => {
    const pathArray = pathname.split("/");
    return (pathArray.slice(1,pathArray.length).map((path,keyindex)=>
    <span className="current fs-16 fw-500 text-black "  key={keyindex}>
     
    <span className="slash"></span>
    {path}
    
    </span>
    
    ));
  };
  const getPageName1 = () => {
    const pathArray = pathname.split("/");
    return pathArray[pathArray.length - 1];
  };
  // Get the page name dynamically
 const page =getPageName1();
  const pageTitl = getPageName();
  return (
    <>
      <Section className=" element-container-1720"> 
        <div className="wrapper"
        >
        <h1 className="fs-50  fw-7 text-white w-100 ">{page=== "[slug]"? null: page} {SearchProp ?SearchProp:null}</h1>
        <div className="bread-crumb">
          <Link
            href="/"
            className=" fs-16 fw-5 text-decoration-none text-white"
          >
            Home
          </Link> 
          <span className="current fs-16 fw-500 text-black ">{pageTitl}</span>
          
        </div>
        <div className="img-wrapper" 
           style={{ backgroundImage: `url(${Imfff.src})` }}>

          </div>
        </div>
        
      </Section>
    </>
  );
}
export default Breadcrumb


