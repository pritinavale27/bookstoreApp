import React from 'react'
import axios from "axios";
import Cards from './Cards'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getBook } from '../../../Backend/Controller/book.controller';


function Course() {
  const[book,setBook]=useState([])
  useEffect(()=>{
    const getbook=async()=>{
      try {
        const res = await axios.get("http://localhost:4001/book")
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log("Error fetching book:",error)
      }
    };
    getbook();
  },[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">We're delighted to have you <span className="text-pink-500">Here! :) </span></h1>
          <p className="mt-12 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure dolore temporibus rerum perferendis hic facilis aspernatur. Laudantium accusantium repellat hic, expedita soluta necessitatibus eveniet quo magnam consequatur dignissimos quae quibusdam.</p>

          <Link to = "/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
          </Link>
        </div>
        <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {
              book.map((item)=>(
                <div className="h-full">
                  <Cards key={item.id} item={item}/>
                 </div>
              ))
            }
        </div>
      </div>
    </>
  )
}

export default Course
