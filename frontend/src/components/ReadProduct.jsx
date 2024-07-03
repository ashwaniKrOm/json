import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ReadProduct() {
    const {id}= useParams();
    const [indivisualData,setIndivisualData]=useState({});
    console.log(id)

    useEffect(()=>{
        fetchDataToRead();
    },[id])

    const fetchDataToRead =()=>{
        axios.get(`http://localhost:8000/api/v1/products/${id}`)
        .then((res)=>{
            setIndivisualData(res.data);
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (


<div>
        <p>{indivisualData.id}</p>
        <p>{indivisualData.title}</p>
        <p>{indivisualData.category}</p>
        <p>{indivisualData.price}</p>
        <p>{indivisualData.description}</p>

        <div><Link to='/'><button>Go to Product Page</button></Link></div>
        </div>

 
  )
}

export default ReadProduct
