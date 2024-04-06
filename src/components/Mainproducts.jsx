import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Productdetailedpage from "./Productdetailedpage";
import styles from "./Main.module.css"

// Create a react application by consuming the following API:
// https://fakestoreapi.com/products
// 1. render the products list,
// 2. create a detail page of each products (tip: use dynamic routing)
// To be submitted on Friday 6th of April, 2024. time: 2am
// Send your repo link to slack and a short video, ta
const Mainproducts= ()=>{
    const url = "https://fakestoreapi.com/products"
    const[data,setData]= useState([])
    const navigate = useNavigate();


    useEffect(()=>{
        fetch(url).then((res)=>{
            return res.json()
            console.log(res)
        }).then((data)=>{
            setData(data)
            console.log(data);
        })
        .catch(()=>{
            console.log(error)
        })
        console.log(data)
    },[])

    const handleClick=(id)=>{
        navigate(`products/${id}`)
        console.log("I was cliceked")
    }
    return(
        <>
         <h1 className={styles.prod}>Products</h1>
    <div className={styles.container}>
   
    {data.map((products) =>{
       return <div  onClick={()=>handleClick(products.id)} key={products.id} className={styles.mainDiv}>
          {/* <h3 className={styles.category}> {products.category}</h3> */}
           {/* <h3 className={styles.description}> {products.description}</h3> */}
         <div className={styles.imgHold}><img src={products.image} className={styles.image} /></div>
         &euro;{products.price}
          {/* {products.rating.rate} */}
          {/* {products.rating.count} */}
          <h3 className={styles.title}>{products.title}</h3>
        </div>
    })}
    </div>
        </>
    )
}

export default Mainproducts
