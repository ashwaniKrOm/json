import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateProduct() {
  const {id}=useParams();
  const navigate = useNavigate(); //navigate back to DataTable page
  const [data,setData]=useState([])

  const [editData,setEditData]=useState({
    id:'',
    title:'',
    category:'',
    price:'',
    description:''
  })
  // console.log(editData)

  // console.log(id)
 useEffect(()=>{
  fetchData();
 },[])

 const fetchData=()=>{
  axios.get(`http://localhost:8000/api/v1/products/${id}`)
  .then((res)=>{
    // console.log(res.data)
    setData(res.data)
    setEditData({
      id: res.data.id,
      title: res.data.title,
      category: res.data.category,
      price: res.data.price,
      description: res.data.description
    })
  })
  .catch((err)=>{
    console.log(err)
  })
 }

  const updateData=()=>{
    axios.put(`http://localhost:8000/api/v1/products/${id}`,editData)
    .then((res)=>{
      console.log("value updated successfully")
    })
    .catch((err)=>{
      console.log(err)
    })
    navigate('/');
  }

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setEditData({...editData,[name]:value})
  }
    
  return (
    <div>
      <form method='PUT'  onSubmit={updateData}>
        <input type="number" name='id'  placeholder={data.id} onChange={handleChange} value={editData.id}/><br/>
        <input type="text" name='title'  placeholder={data.title} onChange={handleChange} value={editData.title}/><br/>
        <input type="text" name='category'  placeholder={data.category} onChange={handleChange} value={editData.category}/><br/>
        <input type="number" name='price'  placeholder={data.price} onChange={handleChange} value={editData.price}/><br/>
        <input type="text" name='description'  placeholder={data.description} onChange={handleChange} value={editData.description}/><br/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default UpdateProduct
