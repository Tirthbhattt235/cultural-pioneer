import React, { useState, useEffect, useRef } from "react";
import Section, { Subsection ,Mainsection } from "./index.style";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
function Aboutus() {
  const [data, setData] = useState([]);
  const [basicdata, setbasicData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/about/about-us.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  
  }, []);

  return (
    <>
      {data ? (
        data.title ||
        data.text1 ||
        data.text2 ||
        data.btnlink ||
        data.btntext ||
        data.img ? (
          <Mainsection className=" element-container pb-150 ">
            <Section className=" element-container pb-150 d-flex align-items-start    flex-row text-white ">
              {data.title ||
              data.text1 ||
              data.text2 ||
              
              data.btnlink ||
              data.btntext ? (
                <div className="left">
                  {data.title !== undefined && data.title ? (
                    <h2 className="fs-60 fw-7 text-uppercase mb-20">{data.title}</h2>
                  ) : null}
                  {data.text1 !== undefined && data.text1 ? (
                    <p className="fs-16 mb-20">{data.text1}</p>
                  ) : null}
                  {data.text2 !== undefined && data.text2 ? (
                    <p className="fs-16 mb-20 mt-20" >{data.text2}</p>
                  ) : null}
                  <div className=" d-flex flex-row line details pt-10 align-items-center  justify-content-start ">
                    {data.btnlink !== undefined &&
                    data.btntext !== undefined ? (
                      <div className="primary-btn me-20  fs-16 w-fit-content btn-hover-primary-clr d-flex align-items-center  ">
                        <Link
                          className=" text-decoration-none  d-flex justify-content-center  align-items-center "
                          href={data.btnlink ? data.btnlink : "/"}
                        >
                          <span className=" text-decoration-none   text-uppercase  ">
                            {data.btntext ? data.btntext : "Get In touch"}
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon"
                            height="18"
                            width="18"
                            viewBox="0 0 100 100"
                            className="mt-0 me-0"
                          >
                            <path
                              // fill="white"
                              fill="currentColor"
                              d="M11.22,97.57V3.43a1.38,1.38,0,0,1,2.09-1.18L91.76,49.32a1.38,1.38,0,0,1,0,2.36L13.31,98.75A1.38,1.38,0,0,1,11.22,97.57ZM24,26v49.1a1.37,1.37,0,0,0,2.08,1.18L67,51.68a1.38,1.38,0,0,0,0-2.36L26.05,24.77A1.37,1.37,0,0,0,24,26Z"
                            ></path>
                          </svg>
                        </Link>
                      </div>
                    ) : null}

                    {data.lin1 !== undefined && data.email ? (
                      <div className="d-flex flex-row me-20  justify-content-center align-items-center ">
                        <div className=" bg-black   text-white icons">
                          <FontAwesomeIcon
                            icon={faPhone}
                            height={20}
                          ></FontAwesomeIcon>
                        </div>
                        <div className="d-flex flex-column me">
                          {data.lin1 ? (
                            <span className="fs-16">{data.lin1}</span>
                          ) : null}
                          {data.email ? (
                            <Link
                              className=" text-decoration-none text-white fs-14 fw-6 primary-clr-hover"
                              href="/"
                            >
                              {data.email}
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    ) : null}
                    {data.lin2 !== undefined && data.contact ? (
                      <div className="d-flex flex-row   justify-content-center align-items-center">
                        <div className=" bg-black   text-white icons">
                        <svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 100 100" fill="white"><g>	<g>		<path d="M62.9,33.8H37.1c-0.9,0-1.7,0.8-1.7,1.7c0,0.9,0.8,1.7,1.7,1.7h25.9c0.9,0,1.7-0.8,1.7-1.7   C64.6,34.6,63.9,33.8,62.9,33.8L62.9,33.8"></path>		<path d="M62.9,41H37.1c-0.9,0-1.7,0.8-1.7,1.7c0,0.9,0.8,1.7,1.7,1.7c0,0,0,0,0,0h25.9c0.9,0,1.7-0.8,1.7-1.7   C64.6,41.8,63.9,41,62.9,41"></path>		<path d="M56.8,48.2H43.2c-0.9,0-1.7,0.8-1.7,1.7c0,0.9,0.8,1.7,1.7,1.7h13.6c0.9,0,1.7-0.8,1.7-1.7   C58.5,49,57.8,48.2,56.8,48.2"></path>		<path d="M68.6,50.7L59.8,57L57,59l-7,5l-7-5l-2.8-2l-8.8-6.3L9.9,35.5H4c-0.1,0.3-0.1,0.7,0,1l0,0   c0,0.2,0,0.4,0,0.6v54.4C4,92,4,92.5,4.2,93l23.7-23.7l3.4-3.4l6.4-6.4l2.8,2l-9.2,9.2l-2.5,2.5L6.3,95.7C7.1,96.2,8,96.4,9,96.4   H91c0.9,0,1.8-0.3,2.6-0.7L71.1,73.2l-2.5-2.5l-9.2-9.2l2.8-2l6.4,6.4l3.4,3.4L95.8,93c0.2-0.5,0.3-1,0.3-1.6V37.1   c0-0.2,0-0.4,0-0.5l0,0c0.1-0.7-0.1-1.4-0.5-2l-5.5,0.9L68.6,50.7z"></path>		<path d="M94.8,33.8L94.8,33.8l-0.9-0.6l-1.1-0.8l-0.2-0.2L76.2,21L51.7,4.1c-1.1-0.7-2.4-0.7-3.5,0L23.8,21   L7.5,32.2l-0.2,0.2l-1.1,0.8l-0.9,0.6l-0.1,0c-0.6,0.4-1,1-1.1,1.7h20.5v-5.7c0-3.8,3.1-6.9,6.9-6.9h37.1c3.8,0,6.9,3.1,6.9,6.9   v5.7h14.6l5.5-0.9C95.4,34.3,95.1,34,94.8,33.8"></path>		<path d="M31.4,39.2v-9.4c0-0.1,0-0.1,0.1-0.1l0,0h37.1c0.1,0,0.1,0,0.1,0.1l0,0v20.9l21.4-15.3l-5,3.6l-13,9.3   V29.8c0-1.9-1.6-3.5-3.5-3.5H31.4c-1.9,0-3.5,1.6-3.5,3.5v18.5l-13-9.3l-5-3.6l21.4,15.3L31.4,39.2z"></path>	</g></g></svg>
                        </div>
                        <div className="d-flex flex-column">
                          {data.lin2 ? (
                            <span className="fs-16">{data.lin2}</span>
                          ) : null}
                          {data.contact ? (
                            <Link
                              className=" text-decoration-none text-white fs-14 fw-6 primary-clr-hover"
                              href="/"
                            >
                              {data.contact}
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}
              {data.img !== undefined && data.img ? (
                <div className="right br10">
                  <div className="img-wrapper position-relative ">
                    <div className="black-bg position-absolute w-100 h-100 br-10 "></div>
                    <div className="br10 overflow-hidden ">
                      <Image alt="Image"
                        src={data.img}
                        width={600}
                        height={420}
                        className=" object-fit-cover  w-100  "
                        style={{height:"420px"}}
                      ></Image>
                    </div>
                    {data.expereince || data.expereincetxt ?
                     <div className="link-wrapper d-flex  flex-row">
                     <span>
                       <span className="number">{data.expereince ? data.expereince :"25"}</span> years
                     </span>

                     <span className="pg ms-20">{data.expereincetxt ? data.expereincetxt: "of Experience in Printing Service"}</span>
                   </div>
                  :null}
                  <div className="icon-wrapper position-absolute ">
                    <svg xmlns="http://www.w3.org/2000/svg"  width="149" height="149" viewBox="0 0 149 149"><defs><clipPath id="arrow-path"><rect data-name="Rectangle 40092" width="149" height="149" fill="none"></rect></clipPath></defs><g data-name="Group 127949" clipPath="url(#arrow-path)"><path data-name="Path 178110" d="M149,74.5A74.5,74.5,0,1,1,74.5,0,74.5,74.5,0,0,1,149,74.5" fill="#000"></path><path data-name="Path 178111" d="M437.143,105.786l.618-8.5,1.4.1-.618,8.5Zm.959.07.088-1.214,2.441.177a1.259,1.259,0,0,0,1.025-.328,1.361,1.361,0,0,0,.419-.9,1.4,1.4,0,0,0-.11-.667,1.214,1.214,0,0,0-.426-.519,1.4,1.4,0,0,0-.716-.235l-2.441-.177.088-1.214,2.235.163a1.305,1.305,0,0,0,.895-.216,1.207,1.207,0,0,0,.12-1.652,1.307,1.307,0,0,0-.854-.343l-2.235-.162.088-1.215,2.271.165a2.941,2.941,0,0,1,1.41.42,2.124,2.124,0,0,1,.791.876,2.158,2.158,0,0,1,.2,1.089,1.959,1.959,0,0,1-.456,1.151,2.6,2.6,0,0,1-1.147.747l.141-.429a2.909,2.909,0,0,1,1.184,1.014,2.259,2.259,0,0,1,.348,1.429,2.333,2.333,0,0,1-.409,1.179,2.358,2.358,0,0,1-1.011.812,3.236,3.236,0,0,1-1.561.222Z" transform="translate(-363.211 -80.832)" fill="#fff"></path><path data-name="Path 178112" d="M500.4,115.323l2.415-8.175,1.343.4-2.415,8.175Zm.923.272.362-1.226,4.578,1.353-.362,1.226Zm1.059-3.585.349-1.179,4.181,1.235-.348,1.179Zm.994-3.363.362-1.226,4.519,1.335-.362,1.226Z" transform="translate(-415.772 -89.026)" fill="#fff"></path><path data-name="Path 178113" d="M559.762,143.449a3.7,3.7,0,0,1-1.342-1.131,3.916,3.916,0,0,1-.612-1.542l1.285-.39a2.655,2.655,0,0,0,.365,1.1,2.422,2.422,0,0,0,.961.838,1.939,1.939,0,0,0,1.131.273.927.927,0,0,0,.749-.511,1.06,1.06,0,0,0,.134-.715,1.7,1.7,0,0,0-.3-.665,5.975,5.975,0,0,0-.549-.652q-.316-.327-.613-.687a3.574,3.574,0,0,1-.489-.765,1.975,1.975,0,0,1-.183-.885,2.361,2.361,0,0,1,.317-1.059,2.181,2.181,0,0,1,.933-.958,2.365,2.365,0,0,1,1.268-.241,3.457,3.457,0,0,1,1.378.419,3.344,3.344,0,0,1,1.172,1,3.173,3.173,0,0,1,.555,1.249l-1.285.39a2.611,2.611,0,0,0-.382-.9,1.976,1.976,0,0,0-.705-.6,1.685,1.685,0,0,0-1-.242.83.83,0,0,0-.655.464.887.887,0,0,0-.1.656,1.781,1.781,0,0,0,.321.627,8.226,8.226,0,0,0,.552.647q.312.332.607.7a3.376,3.376,0,0,1,.477.787,2.1,2.1,0,0,1,.163.922,2.585,2.585,0,0,1-.34,1.1,2.231,2.231,0,0,1-1.569,1.219,3.325,3.325,0,0,1-2.243-.439" transform="translate(-463.468 -112.543)" fill="#fff"></path><path data-name="Path 178114" d="M616.091,171.815l5.291-6.37,1.077.895-5.291,6.37Zm2.494-7.348.817-.983,5.349,4.443-.817.984Z" transform="translate(-511.894 -135.835)" fill="#fff"></path><path data-name="Path 178115" d="M673.8,252.51l7.327-4.356.716,1.2-7.327,4.356Zm2.769,4.658,7.327-4.356.716,1.2-7.327,4.356Zm.967-5.76,1.1-.653,2.433,4.092-1.1.653Z" transform="translate(-559.843 -206.185)" fill="#fff"></path><path data-name="Path 178116" d="M705.339,332.242l9.177.858.285.931-7.131,5.825-.442-1.444,5.8-4.629.15.489-7.408-.61Zm2.078,1.172,1.164-.357,1.322,4.32-1.164.357Z" transform="translate(-586.048 -276.051)" fill="#fff"></path><path data-name="Path 178117" d="M723.257,399.959l8.509-.509.058.972-1.579.521-6.9.413Zm.353,5.9,6.344-5.491,1.87.059-6.344,5.491Zm0,0,1.47-.515,7.014-.419.084,1.4-8.509.509Z" transform="translate(-600.935 -331.893)" fill="#fff"></path><path data-name="Path 178118" d="M720.547,473.752l1.258.231-.4,2.2a3.06,3.06,0,0,0,.093,1.583,2.664,2.664,0,0,0,.849,1.208,3.2,3.2,0,0,0,1.472.648,3.1,3.1,0,0,0,1.589-.092,2.721,2.721,0,0,0,1.218-.835,3.039,3.039,0,0,0,.647-1.435l.4-2.2,1.258.231-.411,2.24a4.506,4.506,0,0,1-.627,1.63,4.248,4.248,0,0,1-1.136,1.2,4.143,4.143,0,0,1-1.5.66,4.475,4.475,0,0,1-3.312-.608,4.14,4.14,0,0,1-1.809-2.659,4.472,4.472,0,0,1-.01-1.735Zm.174-.946,8.384,1.538-.253,1.377-8.384-1.538Z" transform="translate(-598.272 -392.842)" fill="#fff"></path><path data-name="Path 178119" d="M698.472,556.14l3.912,1.751-.572,1.278-3.912-1.751Zm3.032,1.571,6.026-.945-.662,1.478-4.783.7.308-.689,2.664,4.034-.652,1.456-3.3-5.146Z" transform="translate(-579.867 -462.082)" fill="#fff"></path><path data-name="Path 178120" d="M652.62,601.349l6.706,5.261-.6.766-6.776-.812.391-.5,2.4,6.388-.6.766-6.706-5.261.864-1.1,4.771,3.743-.262.2-1.778-4.737.6-.767,5.025.6-.128.3-4.771-3.743Z" transform="translate(-537.936 -499.645)" fill="#fff"></path><path data-name="Path 178121" d="M597.786,658.572l2.4,8.9-.773.592-7.947-4.651,1.2-.918,6.363,3.824-.406.311-2.012-7.155Zm-.374,2.356.74.967-3.587,2.746-.74-.967Z" transform="translate(-491.431 -547.19)" fill="#fff"></path><path data-name="Path 178122" d="M533.009,702.285l1,1.2,2.842,6.425-1.281.567-3.448-7.8Zm0,0,7.361,4.027.6,1.773-7.361-4.027Zm5.4-2.389,3.448,7.8-.891.394-1.04-1.3-2.8-6.325Z" transform="translate(-442.123 -581.525)" fill="#fff"></path><path data-name="Path 178123" d="M441.48,731.331a3.7,3.7,0,0,1,1.739.235,3.91,3.91,0,0,1,1.343.973l-.876,1.019a2.65,2.65,0,0,0-.9-.732,2.421,2.421,0,0,0-1.26-.192,1.938,1.938,0,0,0-1.1.376.926.926,0,0,0-.358.833,1.061,1.061,0,0,0,.271.676,1.709,1.709,0,0,0,.61.4,5.994,5.994,0,0,0,.813.256q.442.107.886.251a3.553,3.553,0,0,1,.822.384,1.975,1.975,0,0,1,.629.648,2.359,2.359,0,0,1,.3,1.064,2.182,2.182,0,0,1-.273,1.309,2.367,2.367,0,0,1-.941.883,3.455,3.455,0,0,1-1.387.386,3.342,3.342,0,0,1-1.524-.215,3.177,3.177,0,0,1-1.138-.757l.876-1.019a2.6,2.6,0,0,0,.805.556,1.973,1.973,0,0,0,.92.132,1.683,1.683,0,0,0,.97-.33.83.83,0,0,0,.3-.743.887.887,0,0,0-.266-.609,1.785,1.785,0,0,0-.607-.357,8.311,8.311,0,0,0-.812-.25q-.442-.113-.887-.263a3.37,3.37,0,0,1-.824-.408,2.1,2.1,0,0,1-.632-.691,2.585,2.585,0,0,1-.3-1.113,2.23,2.23,0,0,1,.671-1.87,3.325,3.325,0,0,1,2.129-.832" transform="translate(-364.481 -607.631)" fill="#fff"></path><path data-name="Path 178124" d="M375.287,736.031l-.164,1.268-4.673-.605.164-1.268Zm.45-3.478-.158,1.22-4.323-.56.158-1.22Zm.48-3.707-.164,1.268-4.734-.613.164-1.268Zm.954.123-1.095,8.453-1.389-.18,1.095-8.453Z" transform="translate(-307.796 -605.07)" fill="#fff"></path><path data-name="Path 178125" d="M309.553,714.024l-.391,1.089-2.029-.729a1.415,1.415,0,0,0-1.059-.024,1.211,1.211,0,0,0-.653.755,1.246,1.246,0,0,0,.028.967,1.325,1.325,0,0,0,.816.681l2.04.733-.412,1.146-2.1-.753a2.975,2.975,0,0,1-1.22-.781,2.335,2.335,0,0,1-.481-2.443,2.43,2.43,0,0,1,.752-1.1,2.266,2.266,0,0,1,1.176-.483,3.126,3.126,0,0,1,1.432.191Zm-2.273-4.659,1.556,4.493-1.387.006-1.831-5.1Zm4.4,1.581-2.882,8.022-1.318-.474,2.882-8.022Z" transform="translate(-252.536 -588.897)" fill="#fff"></path><path data-name="Path 178126" d="M237.934,686.857l-1.647,9.046L235,695.088l1.418-7.273.453.286-5.987,4.382-1.266-.8,7.491-5.346Z" transform="translate(-190.785 -570.259)" fill="#fff"></path><rect data-name="Rectangle 40091" width="8.524" height="1.4" transform="translate(33.183 116.531) rotate(-47.124)" fill="#fff"></rect><path data-name="Path 178127" d="M157.109,602.765a4.32,4.32,0,0,1,.753,1.572,4.16,4.16,0,0,1,.066,1.659,4.236,4.236,0,0,1-.585,1.559A4.781,4.781,0,0,1,154.6,609.6a4.17,4.17,0,0,1-1.657.11,4.514,4.514,0,0,1-3.661-3.346,4.5,4.5,0,0,1-.058-1.627l1.329.195a2.619,2.619,0,0,0,.032,1.123,3.192,3.192,0,0,0,.567,1.149,2.966,2.966,0,0,0,.867.8,2.618,2.618,0,0,0,1.045.353,2.825,2.825,0,0,0,1.129-.1,3.757,3.757,0,0,0,1.973-1.469,2.821,2.821,0,0,0,.424-1.052,2.614,2.614,0,0,0-.039-1.1,2.965,2.965,0,0,0-.515-1.059,3.288,3.288,0,0,0-.98-.918,2.684,2.684,0,0,0-1.072-.348l.194-1.329a4.263,4.263,0,0,1,1.574.543,4.554,4.554,0,0,1,1.357,1.251" transform="translate(-123.947 -499.33)" fill="#fff"></path><path data-name="Path 178128" d="M114.928,550.005l-1.168.52-1.916-4.306,1.168-.52Zm7.011-2.066-7.788,3.465-.569-1.28,7.788-3.465Zm-3.807.641-1.124.5-1.772-3.983,1.124-.5Zm3.416-1.519-1.168.52-1.94-4.361,1.168-.52Z" transform="translate(-92.928 -450.914)" fill="#fff"></path><path data-name="Path 178129" d="M104.664,491.413a3.7,3.7,0,0,1,.009,1.755,3.917,3.917,0,0,1-.777,1.466l-1.13-.725a2.653,2.653,0,0,0,.6-.991,2.423,2.423,0,0,0,.015-1.275,1.939,1.939,0,0,0-.526-1.038.927.927,0,0,0-.875-.239,1.062,1.062,0,0,0-.632.362,1.708,1.708,0,0,0-.311.66,5.96,5.96,0,0,0-.141.841q-.044.452-.125.912a3.572,3.572,0,0,1-.265.868,1.978,1.978,0,0,1-.555.713,2.364,2.364,0,0,1-1.012.445,2.181,2.181,0,0,1-1.334-.089,2.367,2.367,0,0,1-1.005-.809,3.456,3.456,0,0,1-.575-1.32,3.344,3.344,0,0,1,0-1.539,3.174,3.174,0,0,1,.591-1.232l1.131.725a2.609,2.609,0,0,0-.439.875,1.976,1.976,0,0,0,0,.929,1.685,1.685,0,0,0,.462.915.831.831,0,0,0,.778.2.888.888,0,0,0,.566-.348,1.783,1.783,0,0,0,.269-.651,8.289,8.289,0,0,0,.135-.84q.05-.453.137-.915a3.375,3.375,0,0,1,.289-.873,2.1,2.1,0,0,1,.6-.722,2.582,2.582,0,0,1,1.06-.456,2.23,2.23,0,0,1,1.945.4,3.324,3.324,0,0,1,1.12,1.992" transform="translate(-79.711 -406.256)" fill="#fff"></path><path data-name="Path 178130" d="M158.863,121.913v-.686A54.3,54.3,0,0,0,111,175.14h.676a53.69,53.69,0,0,1,47.186-53.226" transform="translate(-92.227 -100.724)" fill="#fff"></path><path data-name="Path 178131" d="M374.039,350.839h10.438l-19.6,19.6,2.036,2.036,19.6-19.6v10.438h2.879V347.96H374.039Z" transform="translate(-303.166 -289.111)" fill="#fff"></path></g></svg>
                  </div>
                   
                  </div>
                </div>
              ) : null}
            </Section>
            {data.title2 ||
            data.pg ||
            data.ios ||
            data.android ||
            data.ratings ||
            data.ratingtext ? (
              <Subsection className=" element-container overflow-visible   ">
                <div className="element-container-170  W-100 d-flex wrapper-container justify-content-center  flex-row flex-wrap ">
                <div className="left">
                  {data.title2 !== undefined && data.title2 ? (
                    <h3 className="mb-20">{data.title2}</h3>
                  ) : null}
                  {data.pg !== undefined && data.pg ? (
                    <p className="mb-0 fs-16">{data.pg}</p>
                  ) : null}
                  <div className=" d-flex flex-row line details mt-40 align-items-center  justify-content-start ">
                    {data.btnlink !== undefined &&
                    data.btntext !== undefined ? (
                      <div className="primary-btn  fs-16  w-fit-content btn-hover-primary-clr d-flex align-items-center  ">
                        <Link
                          className=" text-decoration-none  d-flex justify-content-center  align-items-center "
                          href={data.btnlink ? data.btnlink : "/"}
                        >
                          <span className=" text-decoration-none   text-uppercase  ">
                            {data.btntext ? data.btntext : "Get In touch"}
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon"
                            height="18"
                            width="18"
                            viewBox="0 0 100 100"
                            className="mt-0 me-0"
                          >
                            <path
                              fill="white"  
                              d="M11.22,97.57V3.43a1.38,1.38,0,0,1,2.09-1.18L91.76,49.32a1.38,1.38,0,0,1,0,2.36L13.31,98.75A1.38,1.38,0,0,1,11.22,97.57ZM24,26v49.1a1.37,1.37,0,0,0,2.08,1.18L67,51.68a1.38,1.38,0,0,0,0-2.36L26.05,24.77A1.37,1.37,0,0,0,24,26Z"
                            ></path>
                          </svg>
                        </Link>
                      </div>
                    ) : null}
                    {data.ratings || data.ratingtext ? (
                      <div className="d-flex flex-row ps-40 align-items-center  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 100 20"
                          width={100}
                          fill=" #ff5e62"
                          className="me-20"
                        >
                          <g>
                            {" "}
                            <polygon points="13.8,7.1 11,1.4 8.2,7.1 2,8 6.5,12.4 5.4,18.6 11,15.7 16.6,18.6 15.5,12.4 20,8  "></polygon>{" "}
                            <polygon points="33.3,7.1 30.5,1.4 27.7,7.1 21.5,8 26,12.4 24.9,18.6 30.5,15.7 36.1,18.6 35,12.4 39.5,8  "></polygon>{" "}
                            <polygon points="52.8,7.1 50,1.4 47.2,7.1 41,8 45.5,12.4 44.4,18.6 50,15.7 55.6,18.6 54.5,12.4 59,8  "></polygon>{" "}
                            <polygon points="72.3,7.1 69.5,1.4 66.7,7.1 60.5,8 65,12.4 63.9,18.6 69.5,15.7 75.1,18.6 74,12.4 78.5,8  "></polygon>{" "}
                            <polygon points="98,8 91.8,7.1 89,1.4 86.2,7.1 80,8 84.5,12.4 83.4,18.6 89,15.7 94.6,18.6 93.5,12.4  "></polygon>
                          </g>
                        </svg>
                        <p className="mb-0">{data.ratingtext ? data.ratingtext :"5 Rated App On reviews"}</p>
                      </div>
                    ) : null} 
                  </div>
                </div>
                <div className="right d-flex  flex-row ">
                  {data.ios ? (
                    <div className="card">
                    {data.ios.title ? <h3>{data.ios.title}</h3> : null}
                    {data.ios.version ? <p className="fs-16 fw-7 mb-0">{data.ios.version}</p> : null}
                  {data.ios.btnlink !== undefined &&
                  data.ios.btntext !== undefined ? (
                    <div className="primary-btn 0 fs-18 w-fit-content mt-20 mb-20 btn-hover-primary-clr d-flex align-items-center  ">
                      <Link
                        className=" text-decoration-none  d-flex justify-content-center  align-items-center "
                        href={data.ios.btnlink ? data.ios.btnlink : "/"}
                      >
                        <span className=" text-decoration-none   fs-16 text-uppercase  ">
                          {data.ios.btntext ? data.ios.btntext : "Get In touch"}
                        </span>
                       
                      </Link>
                    </div>
                  ) : null}
                  {data.ios.img ? data.ios.img !==undefined ?
                  <div className="row pe-0 ps-0 img-wrapper">
                    <div className="col-6">   
                      <Image alt="Image" height={80} width={80}
                      src={data.ios.img}
                      ></Image>
                    </div>
                    <div className="col-6 position-relative icon-bar">
                      <div className="icon-wrapper position-absolute  b">
                        <FontAwesomeIcon icon={faApple} fill="white" height="100px"></FontAwesomeIcon>
                      </div>
                    </div>
                  
                  </div>
      :null
                  :null}
                
               
                  </div>
                  ) : null}
                  {data.ios ? (
                    <div className="card">
                      {data.ios.title ? <h3>{data.ios.title}</h3> : null}
                      {data.ios.version ? <p className="fs-16 fw-7 mb-0">{data.ios.version}</p> : null}
                    {data.ios.btnlink !== undefined &&
                    data.ios.btntext !== undefined ? (
                      <div className="primary-btn 0 fs-18 w-fit-content mt-20 mb-20 btn-hover-primary-clr d-flex align-items-center  ">
                        <Link
                          className=" text-decoration-none  d-flex justify-content-center  align-items-center "
                          href={data.ios.btnlink ? data.ios.btnlink : "/"}
                        >
                          <span className=" text-decoration-none   fs-16 text-uppercase  ">
                            {data.ios.btntext ? data.ios.btntext : "Get In touch"}
                          </span>
                          
                        </Link>
                      </div>
                    ) : null}
                    {data.ios.img ? data.ios.img !==undefined ?
                    <div className="row pe-0 ps-0 img-wrapper">
                      <div className="col-6">
                        <Image alt="Image" height={80} width={80}
                        src={data.ios.img}
                        ></Image>
                      </div>
                      <div className="col-6  icon-bar position-relative ">
                        <div className="icon-wrapper position-absolute  b">
                          <FontAwesomeIcon icon={faApple} fill="white" height="100px"></FontAwesomeIcon>
                        </div>
                      </div>
                    
                    </div>
        :null
                    :null}
                  
                     
                    </div>
                  ) : null}
                </div>
                </div>
              </Subsection>
            ) : null}
          </Mainsection>
        ) : null
      ) : null}
    </>
  );
}

export default Aboutus;
