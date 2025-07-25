import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

import Cards from './Cards';
import { useState } from 'react';
import { useEffect } from 'react';

function FreeBook() {

  const[book,setBook]=useState([])
    useEffect(()=>{
      const getbook=async()=>{
        try {
          const res = await axios.get("http://localhost:4001/book")
          
          const data = res.data.filter((data)=>data.category==="Free");
          console.log(data)
          setBook(data);
        } catch (error) {
          console.log("Error fetching book:",error)
        }
      };
      getbook();
    },[])

    
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    // console.log(filterData);
  return( <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
      <h1 className="font-semibold text-xl pb-2">Free Offered Cources</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illum sunt nisi deserunt tempora? Delectus, sunt. Maiores nulla neque quae dolorum necessitatibus doloremque ut atque ab, aliquid assumenda ex saepe.</p>
      </div>
    
    <div>
    <Slider {...settings}>
        {book.map((item)=>(
          <Cards item={item} key={item.id} />
        )

        )}
      </Slider>

    </div>
    </div>
    </>
  )
}

export default FreeBook
