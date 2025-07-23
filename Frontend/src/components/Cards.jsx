import React from 'react'

function Cards({item}) {
    console.log(item)
  return (
    <>

<div className="mt-4 my-3 p-3">
  <div className="card bg-base-100 w-92 shadow-sm hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border" >
    <figure className="w-full h-48">
      <img src={item.image} alt="Books" className="w-full h-full object-contain"/>
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        {item.title}
        <div className="badge badge-secondary">{item.category}</div>
      </h2>
      <p>{item.name}</p>
      <div className="card-actions justify-between">
        <div className="badge badge-outline">₹{item.price}</div>
        <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
          Buy Now
        </div>
      </div>
    </div>
  </div>
</div>




    </>
  )
}

export default Cards
