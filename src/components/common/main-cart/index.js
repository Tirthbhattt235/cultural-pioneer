// import React, { useEffect, useState } from "react";
// import Section, { Thead, T_Body, CouponBox, PriceBox } from "./index.style";
// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClose } from "@fortawesome/free-solid-svg-icons";
// import Link from "next/link";
// export default function Main_cart({ cart_info }) {
//   const [data, setData] = useState();
//   const [itemPrices, setItemPrices] = useState(0);
//   const [updateCart,SetUpdateCart]=useState(false); 
//   const [currQty,setCurrQty] = useState(0)
//   // Function to handle changes in localStorage
//   const handleStorageChange = () => {
//     const arr = window.localStorage.getItem("array3");
//     if (arr) {
//       setData(JSON.parse(arr));
//       updateTotalPrice(JSON.parse(arr));
//     }
//   };
//   const updateTotalPrice = (items) => {
//     let totalPrice = 0;
//     items.forEach((item) => {
//       totalPrice += item.cart_qty * item.minP;
//     });
//     setItemPrices(totalPrice);
//   };


//   useEffect(() => {
//     // Fetch initial data
//     handleStorageChange();
//     // Add event listener for changes in localStorage
//     window.addEventListener("array3", handleStorageChange);
//     // Clean up by removing event listener
//     return () => {
//       window.removeEventListener("array3", handleStorageChange);
//     };
   
//   }, []);

//   const handleIncreaseQuantity = (index,item) => {
//     // Fetch data from localStorage
//     let existingData = JSON.parse(window.localStorage.getItem("array3"));
//     // Update the cart quantity for the item at the given index
//     if( existingData[index].cart_qty < existingData[index].cart_limit){
//       existingData[index].cart_qty += 1;

//     }
//     // Store the updated data back into localStorage
//     window.localStorage.setItem("array3", JSON.stringify(existingData));
//     // Update the state to trigger re-rendering
//     // if(updateCart === true){
//       setData(existingData); 
//       updateTotalPrice(existingData);
//       SetUpdateCart(false)

//     // }
 

//   };

//   const handleDecreaseQuantity = (index,item) => {
//     // Fetch data from localStorage
//     let existingData = JSON.parse(window.localStorage.getItem("array3"));
//     // Decrease the cart quantity for the item at the given index if it's greater than 0
//     if (existingData[index].cart_qty > 1) {
//       existingData[index].cart_qty -= 1;
//       // Store the updated data back into localStorage
//       window.localStorage.setItem("array3", JSON.stringify(existingData));
//       // Update the state to trigger re-rendering
//       setData(existingData);  
//       updateTotalPrice(existingData);
//     }
//     else{
//       existingData[index].cart_qty=0;
//       // Store the updated data back into localStorage
//       window.localStorage.setItem("array3", JSON.stringify(existingData));
//       // Update the state to trigger re-rendering
//       setData(existingData);
//       updateTotalPrice(existingData);
//     }
   
//       // Calculate and update the total price for the item
 
     
    
//   };

//   const [CouponData, setCouponData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/coupon.json');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setCouponData(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);
// const HandleCouponPrice=()=>{
//   const couponValue = document.getElementById("coupon-value").value.trim().toLowerCase();
//   const matchingCoupon = CouponData.coupons.find(coupon => coupon.name.toLowerCase() === couponValue);
    
//   if (matchingCoupon) {
//     console.log("Matching coupon found:", matchingCoupon);
//     const discount = (itemPrices / matchingCoupon.discount)/100
//     setItemPrices(itemPrices-discount)
//     console.log(discount)
//     return matchingCoupon.discount;
//      // Return the discount value
//   } else {
//     console.log("No matching coupon found.");
//     return 0; // Return 0 if no matching coupon is found
//   }
// };


// const additemtocart=()=>{
//   console.log()
//   const product_name=data?.product;
//   return(
//     <div className="line">
//     <p className=" d-flex  align-items-center  mb-0">{tmpCartQty} x "{product_name}"  have been added to your cart. </p>
//     <Link href="/shop/cart"> view cart</Link>
//     </div>
    
//   );
//  }
//  useEffect(()=>{
//   setCurrQty()
//  },[])
//   return (
//     <>
//       {data ? 
//       data.length >0 ?
//       (
//         <Section className=" element-container p-es-30">
//           <table className="w-100">
//             <Thead>
//               <tr>  
//                 <td className="th-1">
//                   <p>Product</p>
//                 </td>
//                 <td className="th-2">
//                   <p>&nbsp;</p>
//                 </td>
//                 <td className="th-3">
//                   <p>Price</p>
//                 </td>
//                 <td className="th-4">
//                   <p>Quantity</p>
//                 </td>
//                 <td className="th-5">
//                   <p>Sub total</p>
//                 </td>
//                 <td className="th-6">
//                   <p>&nbsp;</p>
//                 </td>
//               </tr>
//             </Thead>
//             <T_Body>
//               {data.length > 0 ? (
//                 data.map((item, index) =>
//                   item.img ||
//                   item.name ||
//                   item.minP ||
//                   item.cart_limit ||
//                   item.cart_qty ? (
//                     <tr key={index}>
//                       {item.img ? (
//                         <td className="td-1">
//                           <Image src={item.img} height={80} alt="Image" width={80}></Image>
//                         </td>
//                       ) : null}
//                       {item.name ? (
//                         <td className="td-2">
//                           <Link href={item.link} className=" link-hover text-black text-decoration-none ">
//                           <span className=" fs-16 text-capitalize ">{item.name}</span> &nbsp;
//                           <span className=" fs-16 text-capitalize ">-{item.cart_activeCatagory}'s,</span>
//                          &nbsp; <span className=" fs-16 text-capitalize ">{item.cart_activeclr}</span>
                          
//                           </Link>
                         
//                         </td>
//                       ) : null}
//                       {item.minP ? (
//                         <td className="td-3">
//                           <p className=" fs-16">$&nbsp;{item.minP}</p>
//                         </td>
//                       ) : null}
//                       {item.cart_limit || item.cart_qty ? (
//                         <td className="td-4 qty-adder ">
//                           <div className="wrapper">
//                           <button className="btnn"   onClick={()=>{
//                             // if(updateCart === true){
//                               handleDecreaseQuantity(index,item)
//                             // }
//                             }} >-</button>
//                           {item.cart_qty ? <p>{item.cart_qty}</p> : null}
//                           <button className="btnn" onClick={()=>{
//                             // if(updateCart === true){
//                               handleIncreaseQuantity(index,item)

//                             // }
//                             }}  >+</button>
//                           </div>
//                         </td>
//                       ) : null}
//                       {item.minP || item.cart_qty ? (
//                         <td className="td-5  ">
//                             {item.cart_qty ? (
//                               <>
//                               <p
//                               >$&nbsp;{item.cart_qty * item.minP}</p>
//                               </>
                              
                              
//                             ) : null}
//                         </td>
//                       ) : null}
                      
//                       <td className="td-6  ">
//                         <p
//                           onClick={(index) => {
                           
//                             let array3 =
//                               JSON.parse(
//                                 window.localStorage.getItem("array3")
//                               ) || [];

//                             // Remove the item at the specified index
//                             array3.splice(index, 1);

//                             // Update the local storage with the modified array
//                             window.localStorage.setItem(
//                               "array3",
//                               JSON.stringify(array3)
//                             );
//                             handleStorageChange()
//                             // window.localStorage.setItem("clr", 1);
//                           }}
//                         >
//                           <FontAwesomeIcon
//                             icon={faClose}
//                             height={20}
//                             width={20}
//                             color="red"
//                             className=" cursor-pointer"
//                           ></FontAwesomeIcon>
//                         </p>
//                       </td>
//                     </tr>
//                   ) : null
//                 )
//               ) : (
//                 <tr>
//                   <td className="">
//                     <h2> Cart is empty</h2>
//                   </td>
//                 </tr>
//               )}
//             </T_Body>
//           </table>
//           <div className="text">
//               <Link rel="stylesheet" onClick={(e)=>{
//                 e.preventDefault();
//                 SetUpdateCart(true)
//               }} className=" primary-btn d-flex  justify-content-center  w-fit-content text-decoration-none   text-uppercase ls-1--3 fs-20 text-white btn-hover-primary-clr  ms-auto " href="/" 
              
//               >
//                <span> UPdate cart</span> 
//                 </Link>
//                 <CouponBox>
//                   <form action="" className=" d-flex flex-row  flex-wrap w-100">
//                     <label htmlFor="coupon" className=" fs-26 fw-7 mb-15 w-100">Coupon:</label>
//                     <input type="text" name="coupon" className="" id="coupon-value"  />
//                     <Link href="/" onClick={(e)=>{
//                       e.preventDefault()
//                       HandleCouponPrice()}} className="primary-btn  d-flex-jfc-aic w-fit-content fs-16  b btn-hover-primary-clr fw-5 text-decoration-none  text-white ls-1--3 text-uppercase ">
//                       apply coupon
//                     </Link>
//                   </form>
//                 </CouponBox>
//                 <PriceBox>
//                   <h4 className=" fs-26 fw-7 mb-15 w-100">SubTotal</h4>
//                   <div className="line d-flex  flex-row">
//                     <h2 className=" flex-grow-1 "> total</h2>
//                     <h2 className="price text-end">
//                     $&nbsp;{itemPrices}
//                     </h2>
//                   </div>
//                   <div className="line final d-flex  flex-row">
//                     <h2 className=" flex-grow-1 "> total</h2>
//                     <h2 className="price text-end">
//                      $&nbsp; {itemPrices}
//                     </h2>
//                   </div>
//                 </PriceBox>
//           </div>
//         </Section>
//       ):
//       <div className="element-container-1720  overflow-visible ">
//         <div className=" w-100  added-to-cart   p-es-30">
//          Your cart is currently empty.
//         </div>

//         <Link href="/" className=" primary-btn  w-fit-content text-uppercase  text-decoration-none   text-white  h-100  fs-16 fw-6 ls-1--3">
//           Return to Shop 
//         </Link>
//         </div>
//      : null}
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import Section, { Thead, T_Body, CouponBox, PriceBox } from "./index.style";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Main_cart({ cart_info }) {
  const [data, setData] = useState([]);
  const [itemPrices, setItemPrices] = useState(0);
  const [currQty, setCurrQty] = useState(0);
  const [tempQty, setTempQty] = useState({});
  const [updateCart, setUpdateCart] = useState(false);
  const [CouponData, setCouponData] = useState(null);
  const [updateMsg,setUpdateMsg]=useState(false)

  useEffect(() => {
    const handleStorageChange = () => {
      const arr = window.localStorage.getItem("array3");
      if (arr) {
        setData(JSON.parse(arr));
        updateTotalPrice(JSON.parse(arr));
      }
    };

    // Fetch initial data
    handleStorageChange();

    // Add event listener for changes in localStorage
    window.addEventListener("array3", handleStorageChange);

    // Clean up by removing event listener
    return () => {
      window.removeEventListener("array3", handleStorageChange);
    };
  }, [data]);

  const updateTotalPrice = (items) => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.cart_qty * item.minP;
    });
    setItemPrices(totalPrice);
  };

  const handleIncreaseQuantity = (index, item) => {
      const cartQty = tempQty[index] || item.cart_qty;
      const newQty = cartQty + 1;
      
      // Check if the new quantity exceeds the cart limit
      if (newQty > item.cart_limit) {
        // If so, return without updating the quantity
        return;
      }
      
      // Update the temporary quantity
      const updatedTempQty = { ...tempQty };
      updatedTempQty[index] = newQty;
      setTempQty(updatedTempQty);
    
  };

  // const handleDecreaseQuantity = (index, item) => {
  //   const cartQty = tempQty[index] || item.cart_qty;
  
  //   // Prevent decrementing further when quantity reaches 1
  //   if (updatedTempQty[index] === 0) {
  //     const existingData = JSON.parse(window.localStorage.getItem("array3"));
  //     const updatedData = existingData.filter((_, i) => i !== index);
  //     window.localStorage.setItem("array3", JSON.stringify(updatedData));
  //     setData(updatedData);
  //     updateTotalPrice(updatedData);
  //   }
    
  //   // Decrease the quantity
  //   const updatedTempQty = { ...tempQty };
  //   updatedTempQty[index] = cartQty - 1;
  //   setTempQty(updatedTempQty);
  // };
  const handleDecreaseQuantity = (index, item) => {
    const cartQty = tempQty[index] || item.cart_qty;
  
    // Decrease the quantity
    const updatedTempQty = { ...tempQty };
    updatedTempQty[index] = Math.max(cartQty - 1,0); // Ensure the quantity does not go below 0
  
    // If the updated quantity becomes 0, remove the item from localStorage
    if (updatedTempQty[index] === 0) {

      return

    } else {
      setTempQty(updatedTempQty);
    }
  };
  const handleUpdateCart = () => {
    const existingData = JSON.parse(window.localStorage.getItem("array3"));
    const updatedData = existingData.map((item, index) => ({
      ...item,
      cart_qty: tempQty[index] || item.cart_qty,
    }));
    window.localStorage.setItem("array3", JSON.stringify(updatedData));
    setData(updatedData);
    updateTotalPrice(updatedData); // Update subtotal and total
    setUpdateCart(false);
  };
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/coupon.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCouponData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleApplyCoupon = () => {
    const couponValue = document.getElementById("coupon-value").value.trim().toLowerCase();
    const matchingCoupon = CouponData?.coupons.find(coupon => coupon.name.toLowerCase() === couponValue);
    if (matchingCoupon) {
      console.log("Matching coupon found:", matchingCoupon);
      const discount = itemPrices / matchingCoupon.discount / 100;
      setItemPrices(itemPrices - discount);
      console.log(discount);
      return matchingCoupon.discount;
    } else {
      console.log("No matching coupon found.");
      return 0;
    }
  };

  return (
    <>
      {data && data.length > 0 ? (
        <>
        {updateMsg ?
         <div className="element-container-1720 overflow-visible">
         <div className="w-100 added-to-cart p-es-30">
         Cart updated
         </div>
         
       </div>
      :null}
        <Section className="element-container p-es-30">
          <table className="w-100">
            <Thead>
              <tr>  
                <td className="th-1">
                  <p>Product</p>
                </td>
                <td className="th-2">
                  <p>&nbsp;</p>
                </td>
                <td className="th-3">
                  <p>Price</p>
                </td>
                <td className="th-4">
                  <p>Quantity</p>
                </td>
                <td className="th-5">
                  <p>Sub total</p>
                </td>
                <td className="th-6">
                  <p>&nbsp;</p>
                </td>
              </tr>
            </Thead>
            <T_Body>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="td-1">
                    {item.img && <Image src={item.img} height={80} alt="Image" width={80}></Image>}
                  </td>
                  <td className="td-2">
                    {item.name && (
                      <Link href={item.link} className="link-hover text-black text-decoration-none ">
                        <span className="fs-16 text-capitalize">{item.name}</span> &nbsp;
                        <span className="fs-16 text-capitalize">-{item.cart_activeCatagory}'s,</span>
                        &nbsp; <span className="fs-16 text-capitalize">{item.cart_activeclr}</span>
                      </Link>
                    )}
                  </td>
                  <td className="td-3">
                    {item.minP && <p className="fs-16">$&nbsp;{item.minP}</p>}
                  </td>
                  <td className="td-4 qty-adder">
                    {item.cart_limit || item.cart_qty ? (
                      <div className="wrapper">
                        <button className="btnn" onClick={() => handleDecreaseQuantity(index, item)}>-</button>
                        <p>{tempQty[index] || item.cart_qty}</p>
                        <button className="btnn" onClick={() => handleIncreaseQuantity(index, item)}>+</button>
                      </div>
                    ) : null}
                  </td>
                  <td className="td-5">
                    {(item.minP && item.cart_qty) && (
                      <p>$&nbsp;{item.cart_qty * item.minP}</p>
                    )}
                  </td>
                  <td className="td-6">
                    <p onClick={() => {
                      let array3 = JSON.parse(window.localStorage.getItem("array3")) || [];
                      array3.splice(index, 1);
                      window.localStorage.setItem("array3", JSON.stringify(array3));
                      // handleStorageChange();
                    }}>
                      <FontAwesomeIcon
                        icon={faClose}
                        height={20}
                        width={20}
                        color="red"
                        className="cursor-pointer"
                      />
                    </p>
                  </td>
                </tr>
              ))}
            </T_Body>
          </table>
          <div className="text">
            <Link
              rel="stylesheet"
              onClick={(e) => {
                e.preventDefault();
                setUpdateCart(true);
                handleUpdateCart()
                setUpdateMsg(true)
              }}
              className="primary-btn d-flex justify-content-center w-fit-content text-decoration-none text-uppercase ls-1--3 fs-20 text-white btn-hover-primary-clr ms-auto"
              href="/"
            >
              <span>Update cart</span>
            </Link>
            <CouponBox>
              <form action="" className="d-flex flex-row flex-wrap w-100">
                <label htmlFor="coupon" className="fs-26 fw-7 mb-15 w-100">Coupon:</label>
                <input type="text" name="coupon" className="" id="coupon-value" />
                <Link
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleApplyCoupon();
                  }}
                  className="primary-btn d-flex-jfc-aic w-fit-content fs-16 b btn-hover-primary-clr fw-5 text-decoration-none text-white ls-1--3 text-uppercase"
                >
                  apply coupon
                </Link>
              </form>
            </CouponBox>
            <PriceBox>
              <h4 className="fs-26 fw-7 mb-15 w-100">SubTotal</h4>
              <div className="line d-flex flex-row">
                <h2 className="flex-grow-1">Total</h2>
                <h2 className="price text-end">$&nbsp;{itemPrices}</h2>
              </div>
              <div className="line final d-flex flex-row">
                <h2 className="flex-grow-1">Total</h2>
                <h2 className="price text-end">$&nbsp;{itemPrices}</h2>
              </div>
            </PriceBox>
          </div>
        </Section>
        </>
      
      ) : (
        <>
        {updateMsg ?
         <div className="element-container-1720 overflow-visible">
         <div className="w-100 added-to-cart p-es-30">
           Cart updated
         </div>
       
       </div>
      :null}
  <div className="element-container-1720 overflow-visible">
          <div className="w-100 added-to-cart p-es-30">
            Your cart is currently empty.
          </div>
          <Link
            href="/shop"
            className="primary-btn w-fit-content text-uppercase text-decoration-none text-white h-100 fs-16 fw-6 ls-1--3"
          >
            Return to Shop
          </Link>
        </div>
        </>
      
      )}
    </>
  );
}
