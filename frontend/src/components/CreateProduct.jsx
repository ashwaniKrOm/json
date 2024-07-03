import React, { useState } from 'react'
import axios from 'axios';

function CreateProduct() {

    const [data,setData]=useState({
        id:'',
        title:'',
        category:'',
        price:'',
        description:''
    })

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setData({...data,[name]:value})
    }

    const addProduct=()=>{
        axios.post("http://localhost:8000/products",data)
        .then((res)=>{
                console.log(res)
        })
        .catch((err)=>console.log(err))
    }

  return (
    <div>
      <form action="POST" onSubmit={addProduct}>
        <input type="number" name='id'  placeholder='id' onChange={handleChange} value={data.id}/><br/>
        <input type="text" name='title'  placeholder='title' onChange={handleChange} value={data.title}/><br/>
        <input type="text" name='category'  placeholder='category' onChange={handleChange} value={data.category}/><br/>
        <input type="number" name='price'  placeholder='price' onChange={handleChange} value={data.price}/><br/>
        <input type="text" name='description'  placeholder='description' onChange={handleChange} value={data.description}/><br/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default CreateProduct
