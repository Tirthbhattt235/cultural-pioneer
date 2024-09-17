import React, { useState, useEffect, useRef } from "react";
import Section from "./index.style";
import Image from "next/image";
import Link from "next/link";
import Imgg from "../../../../../public/assets/images/wp-content/uploads/2023/10/shop-2.2.jpg";
import Img1 from "../../../../../public/assets/images/wp-content/uploads/2023/10/shop-2.1-1-768x768.jpg";
import Img2 from "../../../../../public/assets/images/wp-content/uploads/2023/10/shop-2.3.jpg";
import Img3 from "../../../../../public/assets/images/wp-content/uploads/2023/10/shop-2.jpg";
import ProductGallary from "../product-gallary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
  faStarHalf,
  faStarHalfStroke,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faCheck,
  faClose,
  faCross,
  faRightLeft,
} from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion, inView, easeIn } from "framer-motion";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import MiniCart from "../../../common/mini-cart";

export default function Productdetails({details,gallary,maindata}) {
  const [data, setData] = useState([]);
  const [clr, SetClr] = useState([]);
  const [Gallary, SetGallary] = useState([]);
  const [ProductDetail, SetProductDetail] = useState([]);
  const [availStock, Setstock] = useState(null);
  const [cart, Setcart] = useState(0);
  const [price, Setprice] = useState();
  const [activeCategory, SetActiveCategory] = useState();
  const [activeClr, SetActiveClr] = useState();
  const [btn, setbtn] = useState(false);
  const [addedToCart,setAddedToCart]=useState();
  const [tmpCartQty,setTempCartQty]=useState();
  useEffect(()=>{
    if(details){
      setData(details)
    }
    if(gallary){
      SetGallary(gallary)
    }
    if(maindata){
      SetProductDetail(maindata)
    }
   
      },[details,gallary,maindata])


  const clrclick = (stock, clr, price) => {
    Setstock(stock);
    Setprice();
    Setcart(0);
    SetActiveClr(clr);
    Setprice(price);
  };
  const handleclick = (clrs, name) => {
    console.log(clrs);
    SetClr(clrs);
    SetActiveCategory(name);
    console.log(clr[0]?.red?.price);
    setbtn(true);
    SetActiveClr(null);
  };
  const [leftTop, setLeftTop] = useState(0);
  const [rightTop, setRightTop] = useState(0);
  const [rightOffset, setRightOffset] = useState(0);

  const handleScroll = () => {
    const leftElement = document.querySelector(".left");
    const rightElement = document.querySelector(".right");

    if (!leftElement || !rightElement) return;
    setLeftTop(leftElement.getBoundingClientRect().top);
    setRightTop(rightElement.getBoundingClientRect().top);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const leftElement = document.querySelector(".left");
    const rightElement = document.querySelector(".right");

    if (!leftElement || !rightElement) return;

    const maxOffset =
      leftElement.getBoundingClientRect()?.height -
      rightElement.getBoundingClientRect().height;
    const currentOffset = Math.max(0, -leftTop + 50);
    setRightOffset(Math.min(maxOffset, currentOffset));
  }, [leftTop]);
  const framermotion = () => {
    if (window.innerWidth > 1024) return rightOffset;
  };
  const rightStyle = {
    position: "absolute",
    right: 0,
    paddingRight:30,
    
    
  };
  const [CartProd, setCartProd] = useState(() => {
    if (typeof window !== 'undefined') {
      // Check if window is defined (client-side environment)
      const storedCart = window.localStorage.getItem('array3');
      return storedCart ? JSON.parse(storedCart) : [];
    } else {
      // Fallback if window is not defined (server-side environment)
      return [];
    }
  });
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if window is defined (client-side environment)
      localStorage.setItem('array3', JSON.stringify(CartProd));
      setCartProd(CartProd)
    }
  }, [CartProd]);

  const addToCart = (product) => {  
    {}
    if (CartProd.length === 0) {
      // If cart is empty, set the initial cart state
      const c = window.localStorage.getItem('clr')
      console.log("const"+c)
      if(c == 0){
        console.log("inside ADfmasd")
        setCartProd([product]);
        setCounter(); 
        window.localStorage.setItem('clr',1)
        // Assuming setCounter updates your counter state
      }
     
    } else {
      // If cart already has items, add the new product to it
      const newCart = [...cart, product];
      setCartProd(newCart);
    }
  };

   const additemtocart=()=>{
    console.log()
    const product_name=data?.product;
    return(
      <div className="line">
      <p className=" d-flex  align-items-center  mb-0">{tmpCartQty} x "{product_name}"  have been added to your cart. </p>
      <Link href="/shop/cart"> view cart</Link>
      </div>
      
    );
   }
  return (
    <>
      {data ? (
        data.product ? (
          
          <>
          {addedToCart ?
            <div className=" w-100 element-container-1720 added-to-cart p-es-30">
              {additemtocart()}
            </div>
            
          :null}
          <Section className=" element-container position-relative  p-es-30">
            
            {Gallary &&
             <div className="left">
             <ProductGallary info={Gallary}></ProductGallary>
           </div>
            }
           
            {data.product || data.review || data.bodytext ? (
              <motion.div
                initial={{ y: "0px" }}
                animate={{ y: framermotion() }}
                transition={{
                  ease: "linear",
                }}
                className="right"
                style={rightStyle}
              >
                <div className="header-text">
                  {data.product !== undefined && data.product ? (
                    <h2 className="fs-32 fw-7 ">{data.product}</h2>
                  ) : null}
                  <div className="spacer"></div>
                  <div className=" d-flex  mb-10 mt-10 flex-row w-fit-content  position-relative  ">
                    {/* <div className="STARS"> */}

                    {/* </div> */}
                    <div className=" d-flex   flex-row">
                      <Stack spacing={1} className="d-flex align-items-center ">
                        <Rating
                          name="half-rating-read"
                          defaultValue={data.review}
                          readOnly
                        />
                      </Stack>
                      <p className=" mb-0" style={{ marginLeft: "5px" }}>
                        {" "}
                        (1 customer review)
                      </p>
                    </div>
                  </div>
                  <div className="spacer"></div>

                  {data.minP !== undefined || data.maxP !== undefined ? (
                    <p className="price fs-26 fw-4 mb-10 mt-10  ls-normal  lh-normal">
                      ${data.minP}&nbsp;-&nbsp;${data.maxP}
                    </p>
                  ) : null}
                  <div className="spacer"></div>

                  {data.bodytext !== undefined && data.bodytext ? (
                    <div className="fs-16 fw-4 mt-10 mb-10">
                      {data.bodytext}
                    </div>
                  ) : null}
                  <div className="spacer"></div>

                  <div className="line"></div>
                  <div className="spacer"></div>

                  {data.materials ? (
                    <div className="material mt-10 mb-10">
                      <div className="left-div d-flex flex-column ">
                        <h6 className="fs-20 fw-6 mb-15">
                          Materail{" "}
                          {activeCategory ? (
                            <span className="selected">
                              :&nbsp;
                              {activeCategory}
                            </span>
                          ) : null}
                        </h6>
                        <div className="d-flex flex-rows category">
                          {activeClr &&
                          activeCategory &&
                          activeCategory !== "kid" ? (
                            <a
                              onClick={() =>
                                handleclick(
                                  data.materials[0].availClr,
                                  data.materials[0].title
                                )
                              }
                              className="me-15 fs-16 link-wrapper text-decoration-none text-black d-flex  flex-column justify-content-center  align-items-center "
                            >
                              <p className=" opacity-50  mb-0">
                                {data.materials[0].title}
                              </p>

                              <div className="  close">
                                <FontAwesomeIcon
                                  icon={faClose}
                                ></FontAwesomeIcon>
                              </div>
                            </a>
                          ) : (
                            <a
                              onClick={() =>
                                handleclick(
                                  data.materials[0].availClr,
                                  data.materials[0].title
                                )
                              }
                              className="me-15 fs-16 link-wrapper text-decoration-none text-black d-flex  flex-column justify-content-center  align-items-center "
                            >
                              {data.materials[0].title}
                              <span className="">{data.materials[0].title}</span>
                            </a>
                          )}

                          {activeClr &&
                          activeCategory &&
                          activeCategory !== "women" ? (
                            <a
                              onClick={() =>
                                handleclick(
                                  data.materials[1].availClr,
                                  data.materials[1].title
                                )
                              }
                              className="me-15   fs-16 link-wrapper position-relative    ms-10 text-decoration-none text-black d-flex  flex-column justify-content-center  align-items-center  "
                            >
                              <p className=" opacity-50  mb-0">
                                {data.materials[1].title}
                              </p>

                              <div className="  close">
                                <FontAwesomeIcon
                                  icon={faClose}
                                ></FontAwesomeIcon>
                              </div>
                            </a>
                          ) : (
                            <a
                              onClick={() =>
                                handleclick(
                                  data.materials[1].availClr,
                                  data.materials[1].title
                                )
                              }
                              className="me-15 fs-16 link-wrapper position-relative  ms-10 text-decoration-none text-black d-flex  flex-column justify-content-center  align-items-center  "
                            >
                              {data.materials[1].title}

                              <span className="">  {data.materials[1].title}</span>
                            </a>
                          )}
                          {activeClr &&
                          activeCategory &&
                          activeCategory !== "men" ? (
                            <a
                              onClick={() =>
                                handleclick(
                                  data.materials[2].availClr,
                                  data.materials[2].title
                                )
                              }
                              className="ms-10 fs-16 link-wrapper text-decoration-none text-black d-flex  flex-column justify-content-center  align-items-center "
                            >
                              <p className=" opacity-50  mb-0">
                                {data.materials[2].title}
                              </p>

                              <div className="  close">
                                <FontAwesomeIcon
                                  icon={faClose}
                                ></FontAwesomeIcon>
                              </div>
                            </a>
                          ) : (
                            <a
                              onClick={() =>
                                handleclick(
                                  data.materials[2].availClr,
                                  data.materials[2].title
                                )
                              }
                              className="ms-10 fs-16 link-wrapper text-decoration-none text-black d-flex  flex-column justify-content-center  align-items-center "
                            >
                              {data.materials[2].title}
                              <span className="">{data.materials[2].title}</span>
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="right-div">
                        <h6 className="fs-20 fw-6 mb-15">
                          Color{" "}
                          {activeClr ? (
                            <span className="selected">
                              : &nbsp;{activeClr}{" "}
                            </span>
                          ) : null}
                        </h6>

                        <div className="dots">
                          {clr[0]?.red.qty > 0 ? (
                            <>
                              {activeClr === clr[0]?.red?.clrtext ? (
                                <>
                                  <div
                                    onClick={() =>
                                      clrclick(
                                        clr[0]?.red?.qty,
                                        clr[0]?.red?.clrtext,
                                        clr[0]?.red?.price
                                      )
                                    }
                                    className="dot red d-flex  justify-content-center  align-items-center "
                                  >
                                    <FontAwesomeIcon
                                      icon={faCheck}
                                      fill="white"
                                      color="white"
                                    ></FontAwesomeIcon>
                                    <span className="">{clr[0]?.red?.clrtext}</span>
                                  </div>
                                </>
                              ) : (
                                <div
                                  onClick={() =>
                                    clrclick(
                                      clr[0]?.red?.qty,
                                      clr[0]?.red?.clrtext,
                                      clr[0]?.red?.price
                                    )
                                  }
                                  className="dot red"
                                >
                                  <span className="">{clr[0]?.red?.clrtext}</span>
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="dot redish opacity-25 ">
                              <FontAwesomeIcon
                                icon={faClose}
                                color="white"
                              ></FontAwesomeIcon>
                            </div>
                          )}
                          {clr[1]?.green.qty > 0 ? (
                            <>
                              {activeClr ===  clr[1]?.green?.clrtext ? (
                                <>
                                  <div
                                    onClick={() =>
                                      clrclick(
                                        clr[1]?.green?.qty,
                                        clr[1]?.green?.clrtext,
                                        clr[1]?.green?.price
                                      )
                                    }
                                    className="dot green d-flex  justify-content-center  align-items-center "
                                  >
                                    <FontAwesomeIcon
                                      icon={faCheck}
                                      fill="white"
                                      color="white"
                                    ></FontAwesomeIcon>
                                    <span className="">{clr[1]?.green?.clrtext}</span>
                                  </div>
                                </>
                              ) : (
                                <div
                                  onClick={() =>
                                    clrclick(
                                      clr[1]?.green?.qty,
                                      clr[1]?.green?.clrtext,
                                      clr[1]?.green?.price
                                    )
                                  }
                                  className="dot green"
                                >
                                  <span className="">{clr[1]?.green?.clrtext}</span>
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="dot greenish opacity-25 ">
                              <FontAwesomeIcon
                                icon={faClose}
                                color="white"
                              ></FontAwesomeIcon>
                            </div>
                          )}
                          {clr[2]?.gray.qty > 0 ? (
                            <>
                              {activeClr === clr[2]?.gray?.clrtext ? (
                                <>
                                  <div
                                    onClick={() =>
                                      clrclick(
                                        clr[2]?.gray?.qty,
                                        clr[2]?.gray?.clrtext,
                                        clr[2]?.gray?.price
                                      )
                                    }
                                    className="dot black d-flex  justify-content-center  align-items-center "
                                  >
                                    <FontAwesomeIcon
                                      icon={faCheck}
                                      fill="white"
                                      color="white"
                                    ></FontAwesomeIcon>
                                    <span className="">{clr[2]?.gray?.clrtext}</span>
                                  </div>
                                </>
                              ) : (
                                <div
                                  onClick={() =>
                                    clrclick(
                                      clr[2]?.gray?.qty,
                                      clr[2]?.gray?.clrtext,
                                      clr[2]?.gray?.price
                                    )
                                  }
                                  className="dot black"
                                >
                                  <span className="">{clr[2]?.gray?.clrtext}</span>
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="dot grayish opacity-25 ">
                              <FontAwesomeIcon
                                icon={faClose}
                                color="white"
                              ></FontAwesomeIcon>
                            </div>
                          )}
                          {activeClr && activeCategory !== undefined ? (
                            <span
                              className="ms-20 cursor-pointer fs-14 d-flex align-items-center "
                              onClick={() => {
                                SetActiveClr(null);
                                SetActiveCategory(null);
                                Setprice(null);
                                Setstock(null);
                                SetClr([null]);
                              }}
                            >
                              {" "}
                              clear
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <div className="cart">
                        {price && price !== undefined ? (
                          <div className="price">$&nbsp; {price}</div>
                        ) : null}
                        <div className="spacer"></div>
                        {availStock ? (
                          <>
                          {availStock > 0 ?
                          <div className="stock">{availStock} in stock</div>

                          :
                          <div className="stock">Stock not availlble</div>

                        }
                          </>
                          
                        ) :      <div className="stock">Stock not availlble</div>}
                        <div className="d-flex flex-row carting">
                          <div className="d-flex flex-row justify-content-cente adder  align-items-center ">
                            <input
                              type="button"
                              value="-"
                              onClick={() => {
                                if (cart > 0) {
                                  Setcart(cart - 1);
                                }
                              }}
                              className=" primary-clr-hover"
                            />

                            <h4 className=" primary-clr-hover">{cart}</h4>
                            <input
                              type="button"
                              className=" primary-clr-hover"
                              value="+"
                              onClick={() => {
                                if(availStock){
                                  if (availStock > cart) {
                                    Setcart(cart + 1);
                                  }
                                }
                                else{
                                  Setcart(cart + 1);
                                }
                                if (availStock > cart) {
                                  
                                }
                              }}
                            />
                          </div>
                          {clr && activeCategory && cart > 0 ? (
                            data.btnlink || data.btntext ? (
                              <div className="primary-btn w-fit-content btn-hover-primary-clr">
                                <Link
                                  className="d-flex text-uppercase  text-decoration-none  text-white  ls-1--3 justify-content-center  align-items-center "
                                  href={  "/" }
                                  onClick={(e)=>{
                                      e.preventDefault();
                                      console.log("for",cart,":",data)
                                      setTempCartQty(cart)
                                      setAddedToCart(true)
                                      let existingData = window.localStorage.getItem('array3');
                                   console.log("existingData type:", typeof existingData); // Debugging: check the type of existingData
                                   // Initialize existingArray as an empty array
                                   let existingArray = [];
                                   // If there's existing data
                                   if (existingData) {
                                     // Try parsing it as an array
                                     try {
                                       existingArray = JSON.parse(existingData);
                                       // Check if it's an object, if so, convert it to an array with a single element
                                       if (typeof existingArray === 'object' && !Array.isArray(existingArray)) {
                                         existingArray = [existingArray];
                                       }
                                     } catch (error) {
                                       // Handle parsing error
                                       console.error("Error parsing existingData:", error);
                                     }
                                   }
                                   console.log("existingArray before push:", existingArray); // Debugging: check the value of existingArray before push
                                   // Append the new value to the array
                                   if(cart > 0){

                                   }
                                   const existingIndex = existingArray.findIndex(item => item.id === maindata.id && item.cart_activeCatagory === activeCategory && item.cart_activeclr === activeClr)
                                   if (existingIndex !== -1) {
                                       // If the ID exists, update the quantity
                                       existingArray[existingIndex].cart_limit =   availStock;
                                       if(existingArray[existingIndex].cart_qty+cart <= existingArray[existingIndex].cart_limit){
                                        existingArray[existingIndex].cart_qty +=   cart;
                                       
                                        existingArray[existingIndex].cart_activeCatagory= activeCategory;
                                        existingArray[existingIndex].cart_activeclr=   activeClr;
                                         Setstock(existingArray[existingIndex].cart_limit- existingArray[existingIndex].cart_qty,)
                                        Setcart(availStock)
                                        }
                                       else{
                                        console.log("out of Stock ")
                                       }
                                   } else {
                                       // If the ID doesn't exist, add it to the array with qty as 1
                                       existingArray.push({...maindata,cart_qty:cart,cart_limit:availStock,cart_activeCatagory:activeCategory,cart_activeclr:activeClr});
                                   }
                                   
                                  //  existingArray.push({...maindata,cart_qty:cart,cart_limit:availStock});
                                   // Store the updated array back into localStorage
                                   window.localStorage.setItem('array3', JSON.stringify(existingArray));
                                   console.log(existingArray);
                                
                                  }}
                                >
                                  <span className="icon me-10 d-flex justify-content-center  align-items-center">
                                    <FontAwesomeIcon
                                      icon={faCartShopping}
                                    ></FontAwesomeIcon>
                                  </span>
                                 
                                  {data.btntext ? data.btntext : "add to cart"}
                                </Link>
                              </div>
                            ) : null
                          ) : data.btnlink || data.btntext ? (
                            <div className="primary-btn w-fit-content btn-hover-primary-clr opacity-50   cursor-not-allowed">
                              <Link
                                className="d-flex text-uppercase  text-decoration-none cursor-not-allowed  text-white  ls-1--3 justify-content-center  align-items-center "
                                href={data.btnlink ? data.btnlink : "/"}
                                onClick={(e)=>{
                                  e.preventDefault()
                                }}
                              >
                                <span className="icon me-10 d-flex justify-content-center  align-items-center">
                                  <FontAwesomeIcon
                                    icon={faCartShopping}
                                  ></FontAwesomeIcon>
                                </span>
                                {data.btntext ? data.btntext : "add to cart"}
                              </Link>
                            </div>
                          ) : null}
                        </div>
                        <div className="d-flex flex-row mt-10 mb-10 buy-btns">
                          {clr && activeCategory ? (
                            data.btnlink2 || data.btntext2 ? (
                              <div className="primary-btn w-fit-content btn-hover-primary-clr me-30 mt-15 d-flex align-items-center">
                                <Link
                                  className="d-flex text-uppercase  text-decoration-none  text-white  ls-1--3 justify-content-center  align-items-center "
                                  href={data.btnlink2 ? data.btnlink2 : "/"}
                                >
                                  <span className="icon me-10 d-flex justify-content-center  align-items-center">
                                    <FontAwesomeIcon
                                      icon={faHeart}
                                    ></FontAwesomeIcon>
                                  </span>
                                  {data.btntext2
                                    ? data.btntext2
                                    : "add to cart"}
                                </Link>
                              </div>
                            ) : null
                          ) : data.btnlink2 || data.btntext2 ? (
                            <div className="primary-btn w-fit-content btn-hover-primary-clr mt-15 me-30 cursor-not-allowed opacity-50 d-flex align-items-center">
                              <Link
                                className="d-flex text-uppercase  text-decoration-none cursor-not-allowed  text-white  ls-1--3 justify-content-center  align-items-center "
                                href={data.btnlink2 ? data.btnlink2 : "/"}
                                
                              >
                                <span className="icon me-10 d-flex justify-content-center  align-items-center">
                                  <FontAwesomeIcon
                                    icon={faHeart}
                                  ></FontAwesomeIcon>
                                </span>
                                {data.btntext2 ? data.btntext2 : "add to cart"}
                              </Link>
                            </div>
                          ) : null}

                          {data.btnlink3 || data.btntext3 ? (
                            <div className="primary-btn w-fit-content btn-hover-primary-clr mt-15">
                              <Link
                                className="d-flex text-uppercase  text-decoration-none  text-white  ls-1--3 justify-content-center  align-items-center "
                                href={data.btnlin3 ? data.btnlink3 : "/"}
                              >
                                {data.btntext3 ? data.btntext3 : "add to cart"}
                              </Link>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ) : null}
                  <div className="line"></div>
                  <div className="details">
                    {data.tag.name !== undefined || data.tag.value ? (
                      <h4 className="fs-16">
                        <span className="fw-7">{data.tag.name}</span>:&nbsp;
                        <span className="text-black-50"> {data.tag.value}</span>
                      </h4>
                    ) : null}
                    {data.category.name !== undefined || data.category.value ? (
                      <h4 className="fs-16">
                        <span className="fw-7">{data.category.name}</span>
                        :&nbsp;
                        <span className="text-black-50">
                          {" "}
                          {data.category.value}
                        </span>
                      </h4>
                    ) : null}
                    {data.dimansion.name !== undefined ||
                    data.dimansion.value ? (
                      <h4 className="fs-16">
                        <span className="fw-7">{data.dimansion.name}</span>:
                        &nbsp;
                        <span className="text-black-50">
                          {" "}
                          {data.dimansion.value}
                        </span>
                      </h4>
                    ) : null}
                  </div>
                  <div className="spacer"></div>
                </div>
              </motion.div>
            ) : null}
          </Section>
          </>
        ) : null
      ) : null}
    </>
  );
}
