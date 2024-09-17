import React, { useState, useEffect, useRef } from "react";
import Section from "./index.style";
import Image from "next/image";
import Link from "next/link";
import {Swiper,SwiperSlide} from "swiper/react"
export default function ProductGallary({info}) {
  const [data, setData] = useState([]);
  const [BannerImg,SetBannerImg]=useState([]);
  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch("/product-details.json");
    //     const jsonData = await response.json();
    //     console.log(jsonData.gallary)
    //     SetBannerImg(jsonData?.gallary[0])
    //     setData(jsonData.gallary);
       
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };

    // fetchData();  
    setData(info)
    SetBannerImg(info[0])
  }, []);
  // useEffect(()=>{

  //   if(data[1]){
  //     if(data[1].img ){
  //       handleClick(data[0].img,0)

  //     }
  //   }
  // },[data])
  const handleClick=(item,index)=>{
    SetBannerImg(item)
    console.log(item)
    const imgs= document.querySelectorAll('.img-container')
    imgs.forEach((imgbox,imgboxindex)=>{
      if (imgboxindex ===  index ){
        imgbox.classList.add('active')
        imgbox.classList.remove('border-trans')
      }
      else{
        imgbox.classList.remove('active')
        imgbox.classList.add('border-trans')

      }
  })

  }
  return (
    <>
      {data ? (
        
        data?.length > 0 ? (
          <Section className=" element-container">
            {BannerImg ?
            BannerImg.img ?
             <div className="banner-img">
             <Image alt="Image" src={BannerImg.img}  height={860} width={860}/>
           </div>
           :null
          :null}
           <Swiper slidesPerView={4} className="mb-20">
            {data.map((item,index,keyindex)=>(
              item.img ?
              <SwiperSlide  key={index}>
                <div className="img-container">
                <Image alt="Image"
                width={205}
                height={205}
                priority
                src={item.img}
                className=" w-100 object-fit-cover  h-auto"
                onClick={()=>{handleClick(item,index)}}

                ></Image>
                </div>
               
              </SwiperSlide>
              :null
              
            ))}
           </Swiper>
           
          </Section>
        ) : null
      ) : null}
    </>
  );
}
