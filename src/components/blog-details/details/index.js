import React, { useState, useEffect, useRef, use } from "react";
import Section, { Blog, Review,FormBox } from "./index.style";
import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SearchIcon from "../../../../public/assets/images/wp-content/themes/printme/assets/images/Input-Search-Icon.svg";
import BlogLeftSection from "../../blog/left-section";
import { AnimatePresence, motion, inView, easeIn } from "framer-motion";
import {Swiper,SwiperSlide} from "swiper/react"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
  import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Button } from "bootstrap";
export default function BlogDetailsSection({ blog }) {
  const [data, setdata] = useState();
  const [relatedBlogs,setRelatedBlogs]=useState();
  const [allblogs,setAllBlogs]=useState()
  const [reply,setReply]=useState(false)
  const [slidesPerView,setSlidesPerView]=useState(0)
  const router = useRouter();

  useEffect(() => {
    setdata(blog);
    console.log(blog);
  }, [blog]);

  //////////////////////
  // Time Converter////////
  /////////////////////
  function convertUnixTimestamp(timestamp) {
    // Create a new Date object and multiply the timestamp by 1000
    // because JavaScript works with milliseconds, not seconds
    const date = new Date(timestamp * 1000);

    // Get the components of the date in local time
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const day = ("0" + date.getDate()).slice(-2);
    const year = date.getFullYear();

    // Construct the date string
    const dateString = `${month}-${day}-${year}`;
    // Construct the date and time string
    const dateTimeString = `${year}-${month}-${day}`;

    return dateString;
  }

  //////////////////////
  // Related Blogs////////
  /////////////////////

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/blog.json");
        const jsonData = await response.json();
        setAllBlogs(jsonData.blogs);
       
          
        
      } catch (error) {}
    };

    fetchData();

  }, []);
  useEffect(()=>{
    const referencedIds = allblogs
    ?.flatMap(blog => blog.Refrenced?.map(ref => ref.id))
    .filter(id => id !== undefined); // Filter out undefined ids

  console.log(referencedIds);

  // Filter blogs where blogId is in referencedIds
  const relatedBlogs = allblogs?.filter(blog => referencedIds.includes(blog.blogid));

    // Do something with relatedBlogs
    console.log(relatedBlogs);   
   
    
      console.log(allblogs)
      setRelatedBlogs(relatedBlogs)
    // }
  },[allblogs])






  //////////////////////
  // For reviews Section////////
  /////////////////////
  



  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);

    // Get the components of the date in local time
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const day = ("0" + date.getDate()).slice(-2);
    const year = date.getFullYear();

    let hour = date.getHours();
    const minute = ("0" + date.getMinutes()).slice(-2);

    // Convert hour to 12-hour format and determine AM/PM
    const amPm = hour >= 12 ? "pm" : "am";
    hour = hour % 12 || 12; // Convert 0 to 12 for 12-hour format

    // Construct the date and time string
    const dateString = `${month}-${day}-${year} at ${hour}:${minute} ${amPm}`;

    return dateString;
  };
  const initialValues = {
    Fname: "",
  
    Email: "",
   Website:"",
    Msg: "",
  };
  const validationSchema = Yup.object({
    Fname: Yup.string().required("Please fillup the first name"),
    Email: Yup.string().required("please fill the from "),
    Website: Yup.string()
    .url('Please enter a valid URL')
    .required('Website URL is required'),
  });
  const [rating, setrating] = useState(false);
  const submitForm = (values, { resetForm }) => {
    console.log("Form submitted with values:", values);
    // You can perform further actions here, like sending the form data to a server
    // Reset the form after submission
    resetForm();
  };
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the checkbox value
  };
  
  useEffect(()=>{
    const handleResize = () => {
      // Adjust the number of slides based on the viewport width
    if(window.innerWidth >= 768) {
        setSlidesPerView(3);
      }
       else  if(window.innerWidth >= 450) {
        setSlidesPerView(2);
      }
       else  if(window.innerWidth >= 0) {
        setSlidesPerView(1);
      }
    };
    handleResize();
  },[])


const next=(id)=>{
  if((id+1)> allblogs.length){
    id=0
  console.log(allblogs[id-1])
  router.push({
    pathname:  `${allblogs[id].slug}`,
   
  });
  }
 else if((id+1) == allblogs.length){
console.log(id,"id",id+1)

  console.log(allblogs[id-1])
  router.push({
    pathname:  `${allblogs[id].slug}`,
   
  });
id=0
}  
else{
  if(allblogs[id+1]){
    console.log(allblogs[id-1])
    router.push({
      pathname:  `${allblogs[id].slug}`,
     
    });
  }
}
 
}
const prev=(id)=>{
  if(allblogs[id-1]>0){
    console.log(allblogs[id])
    router.push({
      pathname:  `${allblogs[id-2].slug}`,
     
    });
  }
  else if(id==allblogs.length){
    router.push({
      pathname:  `${allblogs[id-2].slug}`,
     
    });
  }
  else{
    id=allblogs.length
    router.push({
      pathname:  `${allblogs[id-1].slug}`,
     
    });
    }
}
  return (
    <>
      {data ? (
        <Section>
          <div className="element-container overflow-visible wrapper   p-es-30">
            <motion.div
              // initial={{ y: "0px" }}
              // animate={{ y: framermotion() }}
              // transition={{
              //   ease: "linear",
              // }}
              className="left"
              // style={rightStyle}
            >
              <BlogLeftSection></BlogLeftSection>
            </motion.div>

            <div className="right">
              <Blog>
                {data.bannerImg ? (
                  <div className="banner mb-35">
                    <Image
                      height={938}
                      width={1240}
                      src={data.bannerImg}
                      className="w-100 h-auto object-fit-contain "
                      alter="BannerImage"
                    ></Image>
                  </div>
                ) : null}
                {data.date || data.author ? (
                  <div className="line pb-15 d-flex  justify-content-between ">
                    <p>
                      {data.date ? (
                        <span className=" date fs-16 ">
                          {convertUnixTimestamp(data.date)}
                        </span>
                      ) : null}
                      {data.reviews?.review?.length > 0 ? (
                        <span className="fs-16 comment">
                          <Link
                            href="/#reviews"
                            className=" text-decoration-none  on link-hover  text-black"
                          >
                            {data.reviews?.review?.length}&nbsp;Comments
                          </Link>
                        </span>
                      ) : null}
                    </p>
                    {data.author ? (
                      <p>
                        By &nbsp;{" "}
                        <span className="primary-clr text-uppercase ">
                          {data.author}
                        </span>
                      </p>
                    ) : null}
                  </div>
                ) : null}
                <div className="horizontal-line mb-15"></div>
                {data.title2 ? (
                  <h4 className=" fs-30 fw-7 mb-20 lh-1_25" style={{'lineHeight':"45px"}}>{data.title2}</h4>
                ) : null}
                {data.bodytext ? (
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{ __html: data.bodytext }}
                  ></div>
                ) : null}
                {data.subImg || data.list?.length > 0 ? (
                  <div className="service-wrapper">
                    {data.subImg ? (
                      <div className="service-left">
                        <Image
                          src={data.subImg}
                          height={490}
                          width={610}
                          className="w-100 h-auto object-fit-contain "
                        ></Image>
                      </div>
                    ) : null}

                    <div className="service-right">
                      {data.list?.length > 0 ? (
                        <ul>
                          {data.list?.map((item, index) => (
                            <li
                              key={index}
                              className="mb-20 d-flex  align-items-start "
                            >
                              <span className="icon me-10 primary-clr">
                                <svg
                                  viewBox="0 0 13.8 15"
                                  width={15}
                                  fill="#ff5e62"
                                >
                                  <path d="M9.6,7.5L2,3.4v8.3L9.6,7.5 M13.8,7.5L0,15V0L13.8,7.5z"></path>
                                </svg>
                              </span>
                              <span className="lh-1_8 fs-16 fw-5">{item.li}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                ) : null}
                {data.sliderTitle || data.imgs?.length>0 ? 
                  <div className="swiper-container">
                      {data.sliderTitle ?<h5 className=" fs-30  fw-7 lh-1_5 mb-20">
                        {data.sliderTitle}
                      </h5> :null}

                      {data.imgs?.length>0 ?
                      <Swiper slidesPerView={slidesPerView} className="mb-20 mb-100">
                          {data.imgs.map((item,index)=>(
                            <SwiperSlide key={index}>
                              <div className="slider-wrapper">
                            <Image
                            height={258}
                            width={386}
                            className="w-100 h-auto object-fit-contain "
                            src={item.img}
                            alt="image "
                            ></Image>

                              </div>
                            </SwiperSlide>
                          ))}


                      </Swiper>
                      :null}
                  </div>
                :null}
                <h4 className="fs-30 fw-6  mb-10">Related Post</h4>
                 {relatedBlogs?.map((blog, index) =>
                blog.bannerImg ||
                blog.title ||
                blog.slug ||
                blog.linktext ||  
                blog.date ? (
                  <div className="blog-box" key={blog.blogid} 
                  // onMouseEnter={() => setHoveredIndex(index)}
                  // onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div
                      className="blog-wrapper"
                    
                    >
                      {blog.bannerImg || blog.slug ? (
                        <div
                          className={`left `}
                        >
                          <Link
                            href={`${blog.slug}`}
                            style={{
                              backgroundImage: `url(${blog.bannerImg})`,
                            }}
                          ></Link>
                        </div>
                      ) : null}
                      {blog.title || blog.slug || blog.linktext || blog.date ? (
                        <div className="right">
                          {blog.date ? (
                            <div className="date mb-20 mt-30">
                              <span className="icon">
                                <FontAwesomeIcon
                                  icon={faCalendar}
                                  width={16}
                                  className="h-auto me-2 "
                                  color="#ff5e62"
                                ></FontAwesomeIcon>
                              </span>
                              {convertUnixTimestamp(blog.date)}
                            </div>
                          ) : null}
                          {blog.subtitle ? (
                            <Link
                              className=" text-decoration-none  text-black "
                              href={blog.slug ? blog.slug : null}
                            >
                              <h4 className=" mb-30 fs-26 link-hover">
                                {blog.subtitle}
                              </h4>
                            </Link>
                          ) : null}
                          {blog.slug || blog.linktext ? (
                            <div className=" w  w-fit-content primary-btn me-auto mb-30 btn-hover-primary-clr">
                              <Link
                                href={blog.slug ? blog.slug : null}
                                className=" text-decoration-none d-flex justify-content-between  align-items-center  "
                                
                              >
                                <span className=" text-decoration-none fs-18  text-uppercase  text-white ">
                                 {blog.linktext ? blog.linktext :"read more"}
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
                            </div>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  </div>
                ) : (
                  NULL
                )
              )}
                {data.reviews?
                <>
                  {data.reviews.review?.length > 0 || data.reviews.title || data.reviews.text || data.reviews.condition ?
                  <>
                  <Review>
                   <div className="reviews ">
                        <h3 className=" fs-28 fw-5 mb-35 text-capitalize ">{data.reviews.review?.length > 0 ?  `comments (${data.reviews.review?.length})` : "No Comments"}</h3>
                {data.reviews.review?.map((rev, id) =>
                  rev.img || rev.date || rev.name || rev.text ? (
                  
                    <div className="review mb-10 d-flex flex-row position-relative " key={id}>
                      
                      {rev.img !== undefined && rev.img ? (
                        <div className=" w-fit-content review-img  ">
                          <div className="img-wrapper">
                            <Image alt="Image" height={55} width={55} src={rev.img} ></Image>
                          </div>
                        </div>
                      ) : null}
                      {rev.date || rev.name || rev.text || rev.ratings ? (
                        <div className="text w-100 d-flex flex-column ">
                          {rev.name || rev.date || rev.ratings ? (
                            <div className=" d-flex justify-content-sm-between justify-content-start  justir  text-sm-start    -flex flex-sm-row flex-column  ">
                              <p className="name-date d-flex  mb-20 flex-column justify-content-center ">
                                {rev.name !== undefined && rev.name ? (
                                  <span className="name fs-18 fw-7 primary-clr">{rev.name} </span>
                                ) : null}
                                
                                {rev.date !== undefined && rev.date ? (
                                  <span className="date">
                                    {formatDate(rev.date)}
                                  </span>
                                ) : null}
                              </p>
                              <div className="reply-btn">
                              <Link href={"/"} onClick={(e)=>{
                                    e.preventDefault();
                                    setReply(true)}} className="">

                                    Reply
                                  </Link>
                              </div>
                                  
                            </div> 
                          ) : null}
                          {rev.text !== undefined && rev.text ? (
                            <p className="fs-16  mt-0 mb-0 m b-0" style={{lineHeight:"28px"}}>{rev.text}</p>
                          ) : null}
                        </div>
                      ) : null}
                      <div className=" horizontal-line"></div>
                    </div>
                  ) : null
                )}
              </div>
              {data.reviews.title || data.reviews.title || data.reviews.text ?
              <div className=" d-flex flex-column form-text mb-20 ">
                {reply === false? 
                <>
              {data.reviews.title ? <h3 className="fs-30 fw-6">{data.reviews.title} </h3> :null}
                
                </>
                :<>
                <h3 className="fs-30 fw-6 mb-0 pr">Reply to Crayon</h3>
                <span className="mt-10 cursor-pointer primary-clr" onClick={()=>setReply(false)}> Cancle Reply</span>
                </>}
              {data.reviews.text?.line ? <span>{data.reviews.text?.line} </span> :null}
              {data.reviews.text?.line1 ? <span>{data.reviews.text?.line1} </span> :null}
              </div>
            :null}
              <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={submitForm}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                 
                  <div className="d-flex flex-column input-row">
                    <div className="input">
                      <label htmlFor="Fname">Name</label>
                      <Field
                        type="text"
                        name="Fname"
                        placeholder="First Name"
                      ></Field>

                      <ErrorMessage
                        name="Fname"
                        component="div"
                        className="error-message"
                      />
                    </div>
                    <div className="input">
                      {" "}
                      <label htmlFor="email">Email</label>
                      <Field
                        type="email"
                        name="Email"
                        placeholder="Your Email"
                      />
                      <ErrorMessage
                        name="Email"
                        component="div"
                        className="error-message"
                      />
                    </div>
                    <div className="input">
                      {" "}
                      <label htmlFor="Website">Website</label>
                      <Field
                        type="url"
                        name="Website"
                        placeholder="Your Website"
                      />
                      <ErrorMessage
                        name="Email"
                        component="div"
                        className="error-message"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column input-row">
                    <div className="overflow-hidden d-flex flex-column  justify-content-between   h-100 ">
                      <label htmlFor="Msg"> Your Review</label>
                      <Field
                        as="textarea"
                        name="Msg"
                        type="textarea"
                        placeholder="Additional Message"
                        rows="5"
                      />
                    </div>
                  </div>

                
                  <div className="w-100  ">
                    {data.reviews.condition !== undefined && data.reviews.condition ?
                      <div className="d-flex mb-20 mt-20 flex-direction-column">
                      <input
                        type="checkbox"
                        checked={isChecked} // Set the checked state of the checkbox
                        onChange={handleCheckboxChange} // Handle checkbox change event
                      />
                      <label className=" ms-10 fs-14 fw-5 mb-0 condition" >
                      {data.reviews.condition}
                      </label>
                    </div>
                    :null}
                  
                    <button
                      type="submit"
                      className="submit primary-btn border-0 mt-10 text-white fs-16 fw-7 ls-1--3"
                    >
                      SUBMIT
                    </button>
                  </div>
                  <div></div>
                </Form>
              )}
            </Formik>
                  </Review>
                  <FormBox>

                  </FormBox>
                  </>
                  
                :null}
                
                </>
                :null}
                <div className="btns"> 
               
          <button  className="prev-btn" onClick={()=>{
            console.log(data.blogid)
            prev(data.blogid)
          }}>prev Button</button>
           <button className="next-btn"  onClick={()=>{
            console.log(data.blogid)
            next(data.blogid)
          }}>Next Button</button>
                </div>
                
                  </Blog>
            </div>
          </div>
         
        </Section>
      ) : null}
    </>
  );
}
