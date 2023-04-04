import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import { IoChevronDownOutline, IoChevronUpOutline, IoSearch } from "react-icons/io5";
function Header() {
    const [toggle,setToggle]=useState(false);
    const menu=[
        {
            id:1,
            name:'Home'
        },
        {
            id:2,
            name:'Movies'
        },
        {
            id:3,
            name:'TV'
        },
        {
            id:4,
            name:'Sports'
        },
        {
            id:5,
            name:'News'
        },
        {
            id:6,
            name:'Hubs'
        },
    ]
  return (
    <div className='flex z-30 justify-between items-center p-4 px-10
    absolute w-full bg-gradient-to-b from-[#1e2126] to-transparent
    '
    >
        <img src={logo} className="w-[65px]"/>
        <ul className='hidden  md:flex gap-8'>
            {menu.map((item)=>(
                <li className={`text-gray-400 text-[18px]
                font-medium cursor-pointer hover:bg-gray-700
                hover:text-white px-3 pb-2 py-1
                ${item.id==1?"bg-gray-700 text-white":null}
                rounded-md transition-all duration-500 ease-in-out`}>{item.name}</li>
            ))}
        </ul>
        <div className='md:hidden '>
             <h2 className='text-white font-medium flex items-center gap-2 px-3 py-2 pb-2 
            bg-gray-700 rounded-md cursor-pointer'
            onClick={()=>setToggle(!toggle)}>Home
           {!toggle? <IoChevronDownOutline className='mt-1'/>:
            <IoChevronUpOutline className='mt-1'/>}
            </h2> 
            {toggle?
            <ul className='absolute bg-gray-700
            w-[200px] text-center mt-3 left-0 right-0
            ml-auto mr-auto rounded-md px-3'>
               {menu.map((item)=>(
                <li className='text-gray-400 text-[18px] 
                font-medium cursor-pointer mb-3 mt-2 
                 hover:bg-gray-600 hover:text-white
                px-3  pb-2 py-1 rounded-md transition-all duration-500'>{item.name}</li>
            ))}  
            </ul>:null}
              
        </div>
        <div className='flex gap-10'>
            <IoSearch className='text-[35px] text-gray-300 
            hover:bg-gray-700 px-[3px] pb-[2px] py-[2px] cursor-pointer
            rounded-md hover:text-white transition-all duration-500 ease-in-out' />
            <h2 className='px-[10px] text-[20px]
            text-gray-300 border-[2px] border-white rounded-full'>R</h2>
        </div>
    </div>
  )
}

export default Header