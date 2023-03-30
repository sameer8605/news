import React, { useState,useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Demo = ()=>{
    const [data,setData] = useState([])
    const [isloading,setIsloading] = useState(true)
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((datas)=>{
        if(datas){
            console.log(datas)
            setData(datas)
            setIsloading(false)
        }
      
    } )
  },[])

  if(isloading){
    return<h1>Loading.......</h1>
  }
    return(
        <div>
            <h1>My news Blog</h1>
            {data.map((elem)=>{
                return (
                    <h1> 
                        <Link to={`/page/${elem.id}`} key = {elem.id}>{elem.title}</Link>
                         
                        </h1>
                )
            })}
        </div>
    )
}
export default Demo;