import { useEffect, useState } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { useLocation, useParams } from 'react-router-dom';
import styles from "./detailed.module.css"



const Productdetailedpage=()=>{
    let {id} = useParams()
    const url = "https://fakestoreapi.com/products/" + id
    const [data, setData] = useState([])


    console.log(id);
    useEffect(()=>{
        fetch(url).then((res)=>{
            return res.json()
        }).then((data)=>{
            setData(data)
        })
        .catch((error)=>{
            console.log("wahala", error)
        })
        console.log(data)
       
    },[])

    let location = useLocation()
  
    return(
        <div>
        <div className={styles.cardContainer}>
         <h3 className={styles.category}> {data.category}</h3> 
        <h3 className={styles.descrpt}>{data.description}</h3>
        <p>&euro;{data. price}</p>

        <img src={data.image} alt="" width={200} height={200} />
        </div>





            

        </div>
    )
}

export default Productdetailedpage
