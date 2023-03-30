import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Page = ()=>{
    const {userId} = useParams();
    console.log(userId)
    const [news,setNews] = useState("")
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        .then((res)=>res.json())
        .then((datas)=>{
            if(datas){
                console.log(datas)
                setNews(datas)
                
            }
          
        } )
      },[])
return(
    <>
    <h1>{news.title}</h1>
    <h2>{news.body}</h2>
    </>
)
}
export default Page