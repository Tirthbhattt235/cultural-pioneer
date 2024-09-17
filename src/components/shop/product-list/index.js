import React, { useState, useEffect, useRef } from "react";
import Section, { Line, Product, Pagination, LinkBox } from "./index.style";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShoppingBag } from "@mui/icons-material";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import MiniCart from "../../common/mini-cart";
import  Productdetail from '../../../pages/shop/[slug]'
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faCaretDown,
  faCaretUp,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";











export default function Productlist() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/product-list.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const Nblogs = 6;
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [topindex, settopindex] = useState(0);
  const [lastindex, setlastindex] = useState(Nblogs);
  const buttons = () => {
    var btnnumber = 1;
    const ActiveButton = Math.ceil(data.product?.length / Nblogs);

    // Assuming you want to return an array of button elements
    return Array.from({ length: ActiveButton }, (_, index) => {
      const Toppose = (index + 1) * Nblogs;
      const firstPos = index * Nblogs;

      return (
       
          <button
            key={index+'Btns'+Math.random(23)}
            className="page-numbers"
            onClick={() => {
              showblogs(firstPos, Toppose), settopindex(firstPos);
              setlastindex(Toppose);
              setActiveButtonIndex(index);
            }}
            disabled={activeButtonIndex === index}
          >
            0{btnnumber++}
          </button>
        
      );
    });
  };
  const prevbtn = () => {
    if (activeButtonIndex > 0) {
      var btnnumber = 1;
      const ActiveButton = Math.ceil(data.product?.length / Nblogs);

      // Assuming you want to return an array of button elements
      if (activeButtonIndex === 1) {
        const firstpos = 0;
        const Toppose = Nblogs;

        return (
          <>
            <button
              className=" prev-btn d-flex justify-content-between flex-row  align-items-center  "
              onClick={() => {
                showblogs(firstpos, Toppose), settopindex(firstpos);
                setlastindex(Toppose);
                setActiveButtonIndex(activeButtonIndex - 1);
              }}
              disabled={activeButtonIndex === lastindex}
            >
              <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
              Previous
            </button>
          </>
        );
      } else {
        const firstpos = (activeButtonIndex - 1) * Nblogs;
        const Toppose = activeButtonIndex * Nblogs;

        return (
          <>
            <button
              className=" prev-btn d-flex justify-content-between flex-row  align-items-center  "
              onClick={() => {
                showblogs(firstpos, Toppose), settopindex(firstpos);
                setlastindex(Toppose);
              }}
              disabled={activeButtonIndex === lastindex}
            >
              <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
              Previous
            </button>
          </>
        );
      }
    }
  };
  const nextbtn = () => {
    const ActiveButton = Math.ceil(data.product?.length / Nblogs);

    if (activeButtonIndex < ActiveButton - 1) {
      var btnnumber = 1;

      const firstpos = (activeButtonIndex + 1) * Nblogs;
      const Toppose = (activeButtonIndex + 2) * Nblogs;

      return (
        <>
          <button
            className=" next-btn d-flex justify-content-between flex-row  align-items-center  "
            onClick={() => {
              showblogs(firstpos, Toppose), settopindex(firstpos);
              setlastindex(Toppose);
              setActiveButtonIndex(activeButtonIndex + 1);
            }}
          >
            next
            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          </button>
        </>
      );
      // }
    }
  };



  const [displayedBlogs, setDisplayedBlogs] = useState([]);
  const [ActivSortingCategory, setSortingCategory] =
    useState("Default Sorting");
  const [dropdown, setdropdown] = useState();
  const [ActiveCat, SetActiveCat] = useState(0);
  const handledropdown = () => {
    setdropdown(!dropdown);
    setSearchTerm("");
  };
  useEffect(() => {
    const initialBlogs = data.product?.slice(0, Nblogs);
    setDisplayedBlogs(initialBlogs);
   
  }, [data]);
  
useEffect (()=>{
  const btn = document.querySelectorAll(".list-item");
  btn.forEach((button, index) => {
    if (index === ActiveCat) {
      if(button.classList.contains("active")){

      }else{
        button.classList.add("active");

      }
    } else {
      button.classList.remove("active");
    }
  });
},)
  const showblogs = (first, top) => {
    const blogsToDisplay = data.product?.slice(first, top);
    setDisplayedBlogs(blogsToDisplay);
  };
  const HTL = () => {
    const blogsToDisplay = data.product.sort((a, b) => b.minP - a.minP);
      // ?.slice(0, lastindex)
     
    if (blogsToDisplay) {
      setDisplayedBlogs(blogsToDisplay.slice(0, Nblogs));
  setActiveButtonIndex(0); // Reset pagination to first page
  settopindex(0)
  setlastindex(Nblogs)
  setSortingCategory("Sort by price: high to low");

  SetActiveCat(1);

    }
    console.log("hight to low based on min price ");
    console.log(displayedBlogs);
    // })
  };
  const LTH = () => {
    const blogsToDisplay = data.product?.sort((a, b) => a.minP - b.minP);
    // ?.slice(topindex, lastindex)
    if(blogsToDisplay){
      setDisplayedBlogs(blogsToDisplay.slice(0, Nblogs));
      setActiveButtonIndex(0); // Reset pagination to first page
      settopindex(0)
      setlastindex(Nblogs)
      setSortingCategory("Sort by price: low to high");
      SetActiveCat(2);
    }
  
      
    console.log("Low to based on min price ");
    console.log(displayedBlogs);
  
  };

  const popularity = () => {
    const blogsToDisplay = data.product.sort((a, b) => b.popularity - a.popularity);
      // if(blogsToDisplay){
        setDisplayedBlogs(blogsToDisplay.slice(0, Nblogs));
        setActiveButtonIndex(0); // Reset pagination to first page
        settopindex(0)
        setlastindex(Nblogs)
        setSortingCategory("Sort by popularity");
   
      // }
    // setDisplayedBlogs(blogsToDisplay);
    SetActiveCat(3);
    console.log("popularity ");
    console.log(displayedBlogs);
    
  };
  const SortByDate = () => {
    const blogsToDisplay = data.product.sort((a, b) => {
        const dateA = new Date(a.date * 1000);
        const dateB = new Date(b.date * 1000);
        console.log(dateA + "" + dateB);
        if (dateA < dateB) {
          console.log("1");
        } else {
          console.log("0");
        } // Sorting in descending order by date

        return dateA - dateB;
      });
      if(blogsToDisplay){
        setDisplayedBlogs(blogsToDisplay.slice(0, Nblogs));
        setActiveButtonIndex(0); // Reset pagination to first page
        settopindex(0)
        setlastindex(Nblogs)
        
    setSortingCategory("Sort By date");
    SetActiveCat(4);
      }
    console.log("SortBy date ");
   
  };
  const showdefault = () => {
    const blogsToDisplay = data.product;
    if(blogsToDisplay){
      setDisplayedBlogs(blogsToDisplay.slice(0, Nblogs));
      setActiveButtonIndex(0); // Reset pagination to first page
      settopindex(0)
      setlastindex(Nblogs)
      setSortingCategory("Default sorting");
    SetActiveCat(0);
    }
    console.log("Defsult ");
    console.log(displayedBlogs);
    
  };
  const sortByReviews = () => {
    const blogsToDisplay = data.product
      ?.sort((a, b) => b.reviews - a.reviews);
      if(blogsToDisplay){
        setDisplayedBlogs(blogsToDisplay.slice(0, Nblogs));
        setActiveButtonIndex(0); // Reset pagination to first page
        settopindex(0)
        setlastindex(Nblogs)
        SetActiveCat(5);
    setSortingCategory("Sort by average rating");
      }
    // setDisplayedBlogs(blogsToDisplay);
    console.log("Reviews ");
    console.log(blogsToDisplay);
    
  };
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle changes in the search input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const btn = [
    { text: "Default sorting", action: () => showdefault() },
    { text: "Sort by price: high to low", action: () =>HTL() },
    { text: "Sort by price: low to high", action: () => LTH() },
    { text: "Sort by popularity", action: () => popularity() },
    { text: "Short by date", action: () => SortByDate() },
    { text: "Sort by average rating", action: () => sortByReviews() },
  ];
  const filteredButtons = btn.filter((button) =>
    button.text.toLowerCase().includes(searchTerm.toLowerCase())
  );



  useEffect(() => {
window.localStorage.setItem('clr',0)
  }, []);

  const [cart, setCart] = useState(() => {
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
      localStorage.setItem('array3', JSON.stringify(cart));
      setCart(cart)
    }
  }, [cart]);

  const addToCart = (product) => {
    {}
    if (cart.length === 0) {
      // If cart is empty, set the initial cart state
      const c = window.localStorage.getItem('clr')
      console.log("const"+c)
      if(c == 0){
        console.log("inside ADfmasd")
        setCart([product]);
        setCounter(); 
        window.localStorage.setItem('clr',1)
        // Assuming setCounter updates your counter state
      }
     
    } else {
      // If cart already has items, add the new product to it
      const newCart = [...cart, product];
      setCart(newCart);
    }
  };
  
  return (
    <>
      {data ? (
        data.product ? (
          data.product.length > 0 ? (
            <Section className=" element-container p-es-30">
              <div className="div-wrapper flex-column  d-flex  ">
                <Line className=" d-flex  justify-content-sm-between justify-content-center   flex-row flex-wrap">
                  <p className="mb-0">
                    {" "}
                    showing {topindex + 1}-
                    {data.product?.length < lastindex
                      ? data.product?.length
                      : lastindex}{" "}
                    of {data.product?.length} results
                  </p>
                  <div className="sorting-list position-relative    ">
                    <span
                      onClick={() => handledropdown()}
                      className="span-title d-flex  justify-content-between align-items-center  "
                    >
                      {ActivSortingCategory}
                      {dropdown ? (
                        <FontAwesomeIcon
                          className="smooth-transit"
                          icon={faCaretUp}
                        ></FontAwesomeIcon>
                      ) : (
                        <FontAwesomeIcon
                          icon={faCaretDown}
                          className="smooth-transit"
                        ></FontAwesomeIcon>
                      )}
                    </span>
                    {dropdown && (
                      <div className="dropdownlist">
                        <div className="p-10 pb-0">
                          <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearch}
                            className="search"
                          />
                        </div>


                        <ul className="p-10">
                          {filteredButtons.length === 0 ? (
                            <li>No results found</li>
                          ) : (
                            filteredButtons.map((button, index) => (
                              <li key={index+"filterdbtns"+Math.random(34)} className="mb-10">
                                <button
                                  className="list-item"
                                  onClick={() =>{
                                    setdropdown(false)
                                    button?.action()}}
                                >
                                  {button.text}
                                </button>
                              </li>
                            ))
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </Line>
                <Product>
                  {displayedBlogs
                    ? displayedBlogs.map((item, index) =>
                        item.name ||
                        item.img ||
                        item.link ||
                        item.maxP ||
                        item.MinP ||
                        item.popularity ? (
                          <div key={index+"Products"+Math.floor((Math.random(10))*12)} className="product br-10 overflow-hidden  position-relative ">
                            <Link href={item.link}>
                              {item.img !== undefined && item.img ? (
                                <div className="img-box-zoom-in">
                                  <Image alt="Image"
                                    src={item.img}
                                    height={553}
                                    width={553}
                                    className="w-100"
                                  ></Image>
                                </div>
                              ) : null}
                              {item.name || item.minP || item.maxP ? (
                                <LinkBox>
                                  <div className="left">
                                    {item.name !== undefined && item.name ? (
                                      <Link
                                        className=" text-decoration-none mb-10  fs-26 fw-5"
                                        href={item.link ? item.link : "/"}
                                      >
                                        {item.name}
                                      </Link>
                                    ) : null}
                                    {(item.minP !== undefined && item.minP) ||
                                    (item.maxP !== undefined && item.maxP) ? (
                                      <span className="fs-20 fw-5 clr-black">
                                        ${item.minP ? item.minP : item.minP}
                                        &nbsp;-&nbsp;$
                                        {item.maxP ? item.maxP : item.maxP}
                                      </span>
                                    ) : null}
                                  </div>
                                  <div className="right">
                                    {item.link ? (
                                      <Link href={item.link}
                                                                            onClick={(e)=>{
                                                        
                                        window.localStorage.setItem('details',JSON.stringify(item))
                                      }}
                                      >
                                        <FontAwesomeIcon
                                          width={50}
                                          height={50}
                                          icon={faShoppingCart}
                                        ></FontAwesomeIcon>
                                         {/* {cart?.length > 0 && <MiniCart product={cart} />} */}
                                      </Link>
                                    ) : null}
                                    {item.link ? (
                                      <Link href={item.link}>
                                        <FontAwesomeIcon
                                          width={50}
                                          height={50}
                                          icon={faHeart}
                                        ></FontAwesomeIcon>
                                      </Link>
                                    ) : null}
                                  </div>
                                </LinkBox>
                              ) : null}
                            </Link>
                          </div>
                        ) : null
                      )
                    : null}
                </Product>
              </div>
              <Pagination>
                                      
                {prevbtn()}
                {buttons()}
                {nextbtn()}
              </Pagination>
            </Section>
          ) : null
        ) : null
      ) : null}
    </>
  );
}
 