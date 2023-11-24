import React from 'react'
import { Button } from 'flowbite-react'
import axios from 'axios'
import { useState,useEffect } from 'react'




const Body = () => {
    const [mainData, setMaindata] = useState()
    const [inputText,setInputtext] = useState("");
const filterData = (inputText,mainData)=>{
let filtered = mainData?.filter((ele,index)=>{
    return mainData[index]?.title.includes(inputText)
})

setMaindata(filterData)

console.log(filtered)
    }


    useEffect(()=>{
        fetchData()
    },[])

    const fetchData  = ()=>{
        try {
           axios.get("https://fakestoreapi.com/products").then((res)=>{
               setMaindata(res.data)
            })
      
        } catch (error) {
            return error    
        }
      
    }



  return (
   <>
   <input type="text"  placeholder='Enter your food' value={inputText} onChange={(e)=>{ setInputtext(e.target.value)}}/>
   <Button onClick={ ()=>{
    filterData(inputText,mainData)
   } }>Search</Button>

   <div className='cards'>
  {mainData?.map((ele,index)=>{
    return (<div key={Math.random()}> <h1 key={Math.random()}> {ele.title}</h1>
    <p key={index}>{ele.price}</p>
    <img src={ele.image} style={{width:"50px"}} alt="product-images" />
     </div> 
    )
  })}
   </div>
   </>
  )
}

export default Body
