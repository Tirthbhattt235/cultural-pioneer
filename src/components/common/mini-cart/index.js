import React, { useState, useEffect, useRef } from "react";
import Section, { Product,Belowtext } from "./index.style";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
export default function MiniCart({ product, isvisible }) {
  const [data, setdata] = useState();
  const [totalPrice,setTotalPrice]=useState(0)
  useEffect(() => {
    const arr = window.localStorage.getItem("array3");
    console.log(JSON.parse(arr));
    if (arr) {
      setdata(JSON.parse(arr));
    }
  }, [data]);
  const [Cart, ShowCart] = useState(isvisible);
  useEffect(() => {
    ShowCart(isvisible);
  }, [isvisible]);
  useEffect(() => {
    calculateTotalPrice();
  }, [data]);

  const calculateTotalPrice = () => {
    let total = 0;
    data?.forEach((prod) => {
      total += prod.cart_qty * prod.minP;
    });
    setTotalPrice(total);
  };
  return (
    <>
      {Cart ? (
        data?.length > 0 ? (
          <>
            {data?.map((prod, index) =>
              prod.name || prod.img || prod.minp ? (
                <Product className=" position-relative ">
                  <div className="text">
                    {prod.name ? (
                      <Link
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        className="link  link-hover fs-16 fw-6 text-black   ps-0  text-capitalize "
                      >
                        {prod.name}
                      </Link>
                    ) : null}
                    <Image src={prod.img} height={60} width={60}></Image>
                    <div className="spacer"></div>
                    <h6 className="fs-12 tex-black">
                      {prod.cart_qty} *
                      ${prod.minP}
                    </h6>
                  </div>
                  <div
                    className="cross cursor-pointer"
                      onClick={(index) => {
                        let array3 =
                          JSON.parse(window.localStorage.getItem("array3")) || [];

                        // Remove the item at the specified index
                        array3.splice(index, 1);

                        // Update the local storage with the modified array
                        window.localStorage.setItem(
                          "array3",
                          JSON.stringify(array3)
                        );
                        // window.localStorage.setItem("clr", 1);
                      }}
                  >
                   ×
                  </div>
                </Product>
              ) : null
            )}
            <Belowtext>
                    <p className=" fs-16 fw-7 d-flex justify-content-between ">Sub Total
                    <span>${totalPrice}</span>
                    </p>
                    <Link href="/shop/cart" className=" primary-btn text-white   ls-1--3 fs-14  text-center w-100">
                     view cart
                    </Link>
                    <Link href="/" className=" primary-btn text-white  ls-1--3 fs-14  text-center w-100">
                   CheckOut
                    </Link>
            </Belowtext>  
          </>
        ) : <h6 className="fs-16 hw-5">Your Cart is Empty</h6>
      ) : null}
    </>
  );
}
