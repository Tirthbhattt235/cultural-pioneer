import React, { useState, useEffect, useRef } from "react";
import Section, { SearchBox, CategoryBox, RecentBLogs } from "./index.style";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SearchIcon from "../../../../public/assets/images/wp-content/themes/printme/assets/images/Input-Search-Icon.svg";

export default function BlogLeftSection() {
  const [data, setData] = useState([]);
  const [Categorydata, setCategoryData] = useState([]);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchFound, setSearchFound] = useState(""); // Example additional data
  const [isInputFocused, setIsInputFocused] = useState(false); // State to track input focus
  const [categoryCounts, setCategoryCounts] = useState({});
  const [TagCounts, setTagCounts] = useState({});
  const [tagData, setTagData] = useState();
  const [categoryResultData, setCategoryResultData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/blog.json");
        const jsonData = await response.json();
        setData(jsonData);
        setCategoryData(jsonData.Categorires);
        setTagData(jsonData.tags);
      } catch (error) {
        console.error("Error fet ching data:", error);
      }
    };

    fetchData();
  }, []);

  //////////////////////
  // BLog Search Logic//
  /////////////////////

  useEffect(() => {
    if (data?.blogs?.length > 0) {
      const filteredBlogs = data?.blogs?.filter((blog) =>
        Object.values(blog).some(
          (field) =>
            typeof field === "string" &&
            field.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      if (filteredBlogs.length > 0) {
        setSearchResults(filteredBlogs);
        window.localStorage.setItem(
          "search-results",
          JSON.stringify(filteredBlogs)
        );
        setSearchFound(true);
      } else {
        console.log("No matching results found.");
        setSearchFound(false);
      }
    }
  }, [searchQuery]);
  useEffect(() => {
    window.localStorage.setItem(
      "search-results",
      JSON.stringify(searchResults)
    );
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  //formsubmit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    router.push({
      pathname: "/search-result/",
      query: {
        searchQuery: searchQuery,
      },
    });
    window.localStorage.setItem(
      "search-results",
      JSON.stringify(searchResults)
    );
  };
  const handleTagSubmit = (id,currentTitle) => {
    console.log("tagesult",id)

    const filteredBlogs = data?.blogs?.filter(blog => blog.tag_id ===id);
    
    // Update categoryResultData state with the filtered blogs
    console.log("tagresult",filteredBlogs)
    router.push({
      pathname: `/tags/${currentTitle}`,
      

    });
    window.localStorage.setItem(
      "Tag-Items",
      JSON.stringify(filteredBlogs)
    );
  };
  const handleCatSubmit = (id,currentTitle) => {
    console.log("ctresult",currentTitle)
 
    const filteredBlogs = data?.blogs?.filter(blog => blog.catagory_id ===id);
    
    // Update categoryResultData state with the filtered blogs
    setCategoryResultData(filteredBlogs);
    console.log("ctresult",filteredBlogs)
    router.push({
      pathname: `/category/${currentTitle}`,
      

    });
    window.localStorage.setItem(
      "Category-Items",
      JSON.stringify(filteredBlogs)
    );
  };
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };
  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  //////////////////////
  // Category Logic   //
  /////////////////////

  useEffect(() => {
    // Preprocess data to generate category counts
    const counts = {};
    data.blogs?.forEach((blog) => {
      counts[blog.catagory_id] = (counts[blog.catagory_id] || 0) + 1;
    });
    setCategoryCounts(counts);
  }, [data]);
  useEffect(() => {
    const counts = {};
    data.blogs?.forEach((blog) => {
      counts[blog.tag_id] = (counts[blog.tag_id] || 0) + 1;
    });
    setTagCounts(counts);
    console.log();
  }, [data]);


  //////time converstion
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
  return (
    <>
      {data ? (
        <Section>
          <SearchBox>
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Eg 'Printer service' "
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></input>
              <button
                type="submit"
                value=""
                className="submit"
                style={{ maskImage: `url(${SearchIcon.src})` }}
              />
            </form>
            <div className={isInputFocused ? "resultbox show" : "resultbox"}>
              {searchFound ? (
                <>
                  {searchResults.map((blog) => (
                    <div key={blog.blogid} className="small-blog">
                      <Image
                        height={70}
                        width={70}
                        src={blog.bannerImg}
                        alt="Image"
                      ></Image>
                      <Link
                        href={blog.slug}
                        className=" text-decoration-none   d-flex align-items-center  text-black   link-hover"
                      >
                        <h5>{blog.subtitle}</h5>
                      </Link>
                    </div>
                  ))}
                </>
              ) : (
                <div className="small-blog">
                  <h5>Search Not Found</h5>
                </div>
              )}
            </div>
          </SearchBox>
          {Categorydata.Categorires?.length > 0 ||
          (Categorydata.title && Object.keys(categoryCounts).length > 0) ? (
            <CategoryBox>
              <div className="title fs-26 fw-6 mb-30">
                {Categorydata.title ? Categorydata.title : "Category"}
              </div>
              {Categorydata.Categorires?.length > 0 ? (
                <ul>
                  {Categorydata?.Categorires?.map((cate) =>
                    cate.category || cate.categoryLink || cate.catagory_id ? (
                      <li key={cate.catagory_id} className="">
                        <Link
                          href={cate.categoryLink ? cate.categoryLink : "/"}
                          className="header link-hover"
                          onClick={(e) => {
                            e.preventDefault()
                            handleCatSubmit(cate.catagory_id,cate.category);
                          }}
                        >
                          {cate.category}
                          <span className="ms-10">
                            ({categoryCounts[cate.catagory_id] || 0})
                          </span>
                        </Link>
                      </li>
                    ) : null
                  )}
                </ul>
              ) : null}
            </CategoryBox>
          ) : null}
          <RecentBLogs>
            <div className="title fs-26 fw-6 mb-30">Recent Blogs</div>
            {data.blogs ? (
              <ul>
                {/* Display the 3 latest blogs */}
                {data.blogs
                  .sort((a, b) => b.date - a.date)
                  .slice(0, 3)
                  .map((blog) => (
                    <li key={blog.blogid} className="recent-blog">
                      <Image
                        height={90}
                        width={90}
                        src={blog.bannerImg}
                        className=""
                        alt="Image"
                      />
                      <Link
                        href={blog.slug}
                        className="text-decoration-none text-black link- d-flex justify-content-center link-hover   flex-column "
                      >
                        <h5 className="fs-16 fw-6">{blog.subtitle}</h5>
                        <p className="date primary-clr mb-0 text-uppercase fs-16 fw-6 ">
                          {convertUnixTimestamp(blog.date)}
                        </p>
                      </Link>
                    </li>
                  ))}
              </ul>
            ) : null}
          </RecentBLogs>
          {tagData ? (
            <>
              {tagData.Tags?.length > 0 ||
              (tagData.title && Object.keys(TagCounts).length > 0) ? (
                <CategoryBox className="mt-0">
                  <div className="title fs-26 fw-6 mb-30">
                    {tagData.title ? tagData.title : "Category"}
                  </div>
                  {tagData.Tags?.length > 0 ? (
                    <div className="tag-ul">
                      {tagData?.Tags?.map((cate) =>
                        cate.category ||
                        cate.categoryLink ||
                        cate.catagory_id ? (
                          <div key={cate.catagory_id} className="taglink">
                            <Link
                              href={cate.categoryLink ? cate.categoryLink : "/"}
                              onClick={(e) => {
                                e.preventDefault();
                                handleTagSubmit(cate.catagory_id,cate.category);
                              }}
                              className="header  smooth-transit text-capitalize "
                            >
                              {cate.category}
                              <span className="ms-10">
                                ({TagCounts[cate.catagory_id] || 0})
                              </span>
                            </Link>
                          </div>
                        ) : null
                      )}
                    </div>
                  ) : null}
                </CategoryBox>
              ) : null}
            </>
          ) : null}
        </Section>
      ) : null}
    </>
  );
}
