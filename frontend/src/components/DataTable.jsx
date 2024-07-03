import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function DataTable() {
    const navigate=useNavigate()
    const [jsonData,setJSONData]=useState([])
    const [id,setID]=useState(null)

useEffect(()=>{fetchData()},[])

const fetchData=()=>{
    axios.get("http://localhost:8000/api/v1/products")
    .then((res)=>{
        setJSONData(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

const deleteProduct=(id)=>{
    // console.log(id)
    axios.delete(`http://localhost:8000/api/v1/products/${id}`)
    .then((res)=>{
        fetchData();
    })
    .catch((err)=>{
        console.log(err)
    })
}

  return (
    <div>
        <Link to='/add'>
       <button>Add Products</button>
       </Link>
       <br/><br/>
        <table >
                <thead >
                    <tr >
                        <th>id</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Read</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {jsonData.length>0?
        jsonData.map((item)=>(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td><Link to={`/read/${item.id}`}><button onMouseEnter={()=>setID(item.id)} onMouseLeave={()=>setID(null)}>Read</button></Link></td>
                        <td><Link to={`/update/${item.id}`}><button onMouseEnter={()=>setID(item.id)} onMouseLeave={()=>setID(null)} >Update</button></Link></td>
                        <td><button onMouseEnter={()=>setID(item.id)} onMouseLeave={()=>setID(null)} onClick={()=>deleteProduct(item.id)}>Delete</button></td>
                </tr>)):null}
                </tbody>
            </table>
    </div>
  )
}

export default DataTable
