import React, { useState, useEffect, useRef } from "react";
import Section, { Blog } from "./index.style";
import Image from "next/image";
import Link from "next/link";
import BlogLeftSection from "../left-section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
export default function BlogRightSection() {
  const [data, setData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/blog.json");
        const jsonData = await response.json();
        setData(jsonData.blogs || []); // Set default empty array if blogs is not present
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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

  const PaginationComponent = ({ items }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3; 
  
    // Retrieve the current page number from localStorage
    useEffect(() => {
      const storedPage = localStorage.getItem('currentPage');
      if (storedPage !== null) {
        setCurrentPage(parseInt(storedPage, 10));
      }
    }, []);
  
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
      // Store the current page number in localStorage
      localStorage.setItem('currentPage', selected);
    };
  
    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const displayedItems = items.slice(startIndex, endIndex);
      return (
      <div>
        {/* Display items for the current page */}
        { <>
         {displayedItems?.map((blog, index) =>
                blog.bannerImg ||
                blog.title ||
                blog.slug ||
                blog.linktext ||  
                blog.date ? (
                  <Blog key={blog.blogid} 
                  // onMouseEnter={() => setHoveredIndex(index)}
                  // onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div
                      className="blog-wrapper"
                    
                    >
                      {blog.bannerImg || blog.slug ? (
                        <div
                          className={`left ${
                            hoveredIndex === index ? "hover" : ""
                          }`}
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
                            <div className="date">
                              <span className="icon">
                                <FontAwesomeIcon
                                  icon={faCalendar}
                                  width={16}
                                  className="h-auto "
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
                              <h4 className=" mb-30 fs-26 link-hover fw-6 lh-1_25">
                                {blog.subtitle}
                              </h4>
                            </Link>
                          ) : null}
                          {blog.slug || blog.linktext ? (
                            <div className=" w  w-fit-content primary-btn me-auto mb-30  btn-hover-primary-clr">
                              <Link
                                href={blog.slug ? blog.slug : null}
                                className=" text-decoration-none d-flex justify-content-between  align-items-center  "
                                
                              >
                                <span className=" text-decoration-none fs-16  text-uppercase  text-white ">
                                 {blog.linktext ? blog.linktext :"read more"}
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon"
                                  height="16"
                                  width="16"
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
                  </Blog>
                ) : (
                  NULL
                )
              )}
      </>}
        
        {/* Pagination component */}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  };


  return (
    <>
      {data ? (
        data.length > 0 ? (

          <Section className=" element-container overflow-visible   p-es-30">
            <div className="left">
              <BlogLeftSection></BlogLeftSection>
            </div>
            <div className="right">
            {/* <PaginatedItems itemsPerPage={4} /> */}
            <PaginationComponent items={data} />
            </div>
          </Section>
        ) : null
      ) : null}
    </>
  );
}
