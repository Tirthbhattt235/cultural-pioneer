import Section, {
  Ramboline,
  MiddleLine,
  MainLine,
} from "./assets/header.style";
import Image from "next/image";
import Img from "../../../../public/assets/svgs/Light-Logo.svg";
import { useState, useEffect } from "react";
import HeaderIcon from "../../../../public/header-icon.svg";
import Img1 from "./assets/imgs/menu21.png";
import Img2 from "./assets/imgs/megaMenuBanner.png";
import Link from "next/link";
import About from "../../../pages/about"
import { AnimatePresence, motion, inView, easeIn } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignRight,
  faAngleLeft,
  faAngleRight,
  faArrowLeft,
  faArrowRight,
  faPlay,
  faMobileAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";
import MiniCart from "../mini-cart";
function header() {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [Icon, SetIcon] = useState(false);
  const [Iconindex, SetIconindex] = useState(null);
  const [ColMenu, SetColMenu] = useState(true);
  const [SubSideNav, ShowSubSideNav] = useState(false);
  const [Childindex, SetChildIndex] = useState(null);
  const [SideNav, ShowSideNav] = useState(false);
  const [Cart, ShowCart] = useState(false)
  const handleMouseEnter = (index) => {
    // console.log(activeSubMenu)
    setActiveSubMenu(index);
  };
  const handleicon = (index) => {
    SetIcon(true);
    SetIconindex(index);
  };
  const handleMouseLeave = (index) => {
    setActiveSubMenu(null);
  };

  const closearrow = () => {
    SetIconindex(null);
  };
  const handleclick = () => { };
  useEffect(() => {
    if (window.innerWidth >= 1200) {
      SetColMenu(true);
    } else {
      SetColMenu(false);
    }
  }, []);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/header-data.json");
        const jsonData = await response.json();
        setData(jsonData);


      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const hadleSubClick = (index) => {
    ShowSubSideNav(true);

    SetChildIndex(index);
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    ShowSideNav(true);
  };

  return (
    <>
      <Section className="">
        {SideNav ? (
          <>
            <div className="w-100 h-100 position-fixed menu-overlay "></div>
          </>
        ) : null}
        <header className="header w-100">
          <Ramboline>
            <div className="element1"></div>
            <div className="element2"></div>
            <div className="element3"></div>
            <div className="element4"></div>
            <div className="element5"></div>
            <div className="element6"></div>
          </Ramboline>
          <MainLine className=" headerl==   pe-xl-4 ps-xl-4 pe-3 ps-3 d-flex  align-items-center  overflow-visible  element-container">
            <div className=" div-container header-last element-container w-100   overflow-visible  d-flex justify-content-center me-auto  ms-auto  align-item-center row g-0">
              <div className="d-xl-none d-flex col-8   res-icon">
                <Link href="">
                  <Image alt="Image" className="header-logo" src={Img}></Image>
                </Link>
              </div>
              <div className=" col-xl-2  d-xl-flex search-container d-none justify-content-start div-container">
                <form action="" className="searchform">
                  <input
                    id="s"
                    name="s"
                    type="text"
                    placeholder="Eg 'search Destination'"
                    className="text_input"
                  />

                  <a
                    name="submit"
                    type="submit"
                    style={{ border: "none" }}
                    className="search"
                  >
                    <i className="bi bi-search"></i>
                  </a>
                </form>
              </div>

              <div className=" col-xl-8 col-12 d-xl-flex d-none  justify-content-center  line-2 div-container">
                <ul className="mb-0 position-relative p-0  flex-xl-row flex-column ">
                  <li className=" -center text-start justify-content-xl-center justify-content-start align-items-xl-center  align-items-start  ">
                    <Link href='/'>Home</Link>
                  </li>
                  <li
                    className=" -center text-start justify-content-xl-center justify-content-start align-items-xl-center  align-items-start  "
                    onMouseEnter={() => handleMouseEnter(5)}
                  >
                    <a onClick={() => handleMouseEnter(5)} href="/places">
                      Popular Places
                    </a>
                  
                  </li>
                  <li className="d-xl-block d-none">
                    <Link href="">
                      <Image alt="Image" className="logo header-logo" src={Img}></Image>
                    </Link>
                  </li>
                  <li className=" -center text-start justify-content-xl-center justify-content-start align-items-xl-center  align-items-start  ">
                    <Link href='/about'>About</Link>
                  </li>
                  <li className=" -center text-start justify-content-xl-center justify-content-start align-items-xl-center  align-items-start  ">
                    <Link href='/contact'>Contact Us</Link>
                  </li>

                </ul>
              </div>

              <div className="col-xl-2 col-4 d-flex justify-content-end line-3 div-container">
                <ul className="mb-0">
                  <li className="d-md-flex d-none justify-content-center  align-items-cener">
                    <Link href="/authorization">
                      <i className="bi bi-person"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {data ? (
              <>
                <AnimatePresence>
                  {inView && SideNav && (
                    <motion.div
                      initial={{ x: "300px" }}
                      animate={{ x: "0px" }}
                      className="side-nav "
                      transition="linear"
                    >
                      <div className=" right  ms-auto">
                        <div
                          className="closebtn me-2  d-flex  justify-content-end"
                          onClick={(e) => ShowSideNav(false)}
                        >
                          <div
                            className="close-button  pt-3 pb-3"

                          >
                            <span>&times;</span>
                          </div>
                        </div>
                        <ul className="d-flex flex-column p-0 ">
                          {data.map((item, index, keyindex) => (
                            <li
                              key={keyindex}
                              className=" list-unstyled d-flex  justify-content-start flex-column   pe-3 ps-3   d-flex flex- justify-content-between "
                              onMouseEnter={(e) => {
                                handleicon(index);
                              }}
                              onMouseLeave={(e) => {
                                SetIconindex(null);
                              }}
                            >
                              <div
                                className="parent-link d-flex justify-content justify-content-between align-items-center   "
                                onClick={(e) => hadleSubClick(index)}
                              >
                                {item.title}

                                {item.hasChild === true && (
                                  <li className="sidespan -5">

                                    {Icon === true && Iconindex === index ? (
                                      <FontAwesomeIcon
                                        icon={faArrowRight}
                                        height={16}
                                        className=""
                                        width={16}
                                      ></FontAwesomeIcon>
                                    ) : (
                                      <FontAwesomeIcon
                                        icon={faAngleRight}
                                        height={16}
                                        className=""
                                        width={16}
                                      ></FontAwesomeIcon>
                                    )}

                                    {/* <Image alt="Image" src={HeaderIcon} alt="image"></Image> */}
                                  </li>
                                )}
                              </div>
                              {item.hasChild === true &&
                                (SubSideNav && index === Childindex ? (
                                  <motion.div
                                    initial={{ x: "200px" }}
                                    animate={{ x: "0px" }}
                                    transition="linear"
                                    duration={1}
                                    className="sub-side-nav "
                                  >
                                    {data[Childindex].structMenu == true ? (
                                      <div className="struct-submenu">
                                        <div className="closebtn  d-flex  justify-content-end">
                                          <div className="w-100 d-flex pe-xl-4 ps-xl-4 pe-3 ps-3  justify-content-between  ">
                                            <div
                                              onClick={(e) => {
                                                ShowSubSideNav(false);
                                                closearrow();
                                              }}
                                              className=" d-flex  justify-content-center  align-items-center "
                                            >
                                              <FontAwesomeIcon
                                                icon={faAngleLeft}
                                                fill="black"
                                                height={16}
                                                className=""
                                                width={16}
                                              ></FontAwesomeIcon>
                                            </div>

                                            <div
                                              className="close-button   pt-3 pb-3"
                                              onClick={(e) => {
                                                ShowSideNav(false);

                                                ShowSubSideNav(false);
                                                closearrow();
                                              }}
                                            >
                                              <span>&times;</span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="w-100 text-start sub-side-header  pe-3 ps-3">
                                          <a href="/">{item.title}</a>
                                        </div>
                                        <div className=" line-1  ">
                                          <div className="servicewrapper  row m-0  gy-3  d-flex justify-content-center  ">
                                            <div className="serviceitem img-box col-12 p-0  overflow-hidden  ">
                                              <Image alt="Image"
                                                src={Img1}
                                                className="position-relative  object-fit-cover w-100  object-fit-contain "
                                              />
                                              <div className="link-wrapper">
                                                <Link href="#">
                                                  Shop Now
                                                  <i className="bi bi-caret-right"></i>
                                                </Link>
                                              </div>
                                            </div>
                                            <div className="serviceitem img-box col-12  p-0   overflow-hidden ">
                                              <Image alt="Image"
                                                src={Img1}
                                                className="position-relative  object-fit-cover w-100  object-fit-contain "
                                              />
                                              <div className="link-wrapper">
                                                <Link href="#">
                                                  Shop Now
                                                  <i className="bi bi-caret-right"></i>
                                                </Link>
                                              </div>
                                            </div>
                                            <div className="serviceitem img-box col-12  p-0  overflow-hidden ">
                                              <Image alt="Image"
                                                src={Img1}
                                                className="position-relative  object-fit-cover w-100  object-fit-contain "
                                              />
                                              <div className="link-wrapper">
                                                <Link href="#">
                                                  Shop Now
                                                  <i className="bi bi-caret-right"></i>
                                                </Link>
                                              </div>
                                            </div>
                                            <div className="serviceitem img-box col-12  p-0  overflow-hidden ">
                                              <Image alt="Image"
                                                src={Img1}
                                                className="position-relative  object-fit-cover w-100  object-fit-contain "
                                              />
                                              <div className="link-wrapper">
                                                <Link href="#">
                                                  Shop Now
                                                  <i className="bi bi-caret-right"></i>
                                                </Link>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row g-0 d-flex justify-content-center ">
                                          <div className="service2wrapper mb-3  row m-0  gy-3 p-0 d-block d-flex justify-content-center align-items-center">
                                            <div className="serviceitem col-12 p-0  overflow-hidden p-0  overflow-hidden">
                                              <Image alt="Image"
                                                src={Img2}
                                                className="w-100  object-fit-contain position-relative object-fit-contain  object-fit-fill "
                                                height={300}
                                                width={510}
                                              />
                                              <div className="textwrapper ">
                                                <h4 className="mb-3  fs-30">
                                                  Personlized t-shirts
                                                </h4>
                                                <span className="mb-3 fs-14">
                                                  We Design evrry day Cloths{" "}
                                                </span>
                                                <div className="link-wrapper">
                                                  <Link href="#">
                                                    Shop Now
                                                    <i className="bi bi-caret-right"></i>
                                                  </Link>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="serviceitem col-12 p-0  overflow-hidden">
                                              <Image alt="Image"
                                                src={Img2}
                                                className="w-100  object-fit-contain position-relative object-fit-contain  object-fit-fill "
                                                height={300}
                                                width={510}
                                              />
                                              <div className="textwrapper ">
                                                <h4 className="mb-3  fs-30">
                                                  Personlized t-shirts
                                                </h4>
                                                <span className="mb-3 fs-14">
                                                  We Design evrry day Cloths{" "}
                                                </span>
                                                <div className="link-wrapper">
                                                  <Link href="#">
                                                    Shop Now
                                                    <i className="bi bi-caret-right"></i>
                                                  </Link>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="serviceitem col-12 p-0  overflow-hidden">
                                              <Image alt="Image"
                                                src={Img2}
                                                className="w-100  object-fit-contain position-relative object-fit-contain  object-fit-fill "
                                                height={300}
                                                width={510}
                                              />
                                              <div className="textwrapper ">
                                                <h4 className="mb-3  fs-30">
                                                  Personlized t-shirts
                                                </h4>
                                                <span className="mb-3 fs-14">
                                                  We Design evrry day Cloths{" "}
                                                </span>
                                                <div className="link-wrapper">
                                                  <Link href="#">
                                                    Shop Now
                                                    <i className="bi bi-caret-right"></i>
                                                  </Link>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ) : (
                                      <>
                                        <div className="w-100 d-flex  pe-3 ps-3  justify-content-between  ">
                                          <div
                                            onClick={(e) => {
                                              ShowSubSideNav(false);

                                              //  console.log("inside "+Childindex)
                                              closearrow();
                                            }}
                                            className=" d-flex  justify-content-center  align-items-center "
                                          >
                                            <FontAwesomeIcon
                                              icon={faAngleLeft}
                                              fill="black"
                                              height={16}
                                              className=""
                                              width={16}
                                            ></FontAwesomeIcon>
                                          </div>

                                          <div
                                            className="close-button   pt-3 pb-3"
                                            onClick={(e) => {
                                              ShowSideNav(false);
                                              closearrow();
                                              ShowSubSideNav(false);
                                            }}
                                          >
                                            <span>&times;</span>
                                          </div>
                                        </div>
                                        <div className="w-100 text-start sub-side-header  pe-3 ps-3">
                                          <a href="/">{item.title}</a>
                                        </div>
                                        <ul className=" list-unstyled ">
                                          {data[Childindex].submenuLink.map(
                                            (subItem, SubItemIndex, keyindex) => (
                                              <li
                                                key={SubItemIndex + 2}
                                                className="pe-3 ps-3 d-flex  justify-content-between "
                                              >
                                                {subItem.title}
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </>
                                    )}
                                  </motion.div>
                                ) : null)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : null}
          </MainLine>
        </header>
      </Section>
    </>
  );
}
export default header;
