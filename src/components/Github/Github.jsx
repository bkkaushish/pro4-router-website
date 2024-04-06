import { useState } from "react"
import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"



function Github(){
/*const [data,setData]= useState([])

useEffect(()=>{
fetch('https://api.github.com/users/hiteshchoudhary')
.then(Response=>Response.json())
.then(data=>{
    setData(data)
})
    
},[])*///no use now we using loader for less latency
//for loader

const data = useLoaderData()//hook in react route dom
return(
<div className="text-white bg-gray-600 w-full text-3xl"> Github followers: {data.followers}
<img  className=" p-4"    src={data.avatar_url} alt="Git picture"/>
<a href="https://github.com/bkkaushish" className="text-xl">Visit Github: https://github.com/bkkaushish</a>
</div>
)}

export default Github

//for loader use 
 export const Loader= async()=>{
    const info= await fetch('https://api.github.com/users/bkkaushish')

    return info.json()

 }