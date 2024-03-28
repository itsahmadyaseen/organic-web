import React from 'react'
import { FaHandHoldingMedical } from "react-icons/fa6";


const Edge = () => {
    const pic= {
        url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
      }
  return (
    <div className="mt-40 container mx-auto bg-slate-400 " id="teacher">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold mt-4 sm:text-[1.875rem] text-[1.5rem] mb-5 text-center sm:mr-5">
          GET THE ‘TULSI’ <br /> WELLNESS EDGE
          </div>
          <div className='flex'>
            <div className='mt-4'><FaHandHoldingMedical className='text-3xl'/></div>
            <div className='ml-4'>
                <h3 className='font-bold'>GUARD AGAINST COUGH, COLD & POLLUTION</h3>
                <p className="text-md  leading-7 text-gray mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis debitis dolorum facilis culpa, quidem voluptate suscipit
            deserunt. Magni neque at eos dolore dignissimos fugit repudiandae?
            Aut laudantium asperiores et!
          </p>
          </div>
            </div>
            <div className='flex'>
            <div className='mt-4'><FaHandHoldingMedical className='text-3xl'/></div>
            <div className='ml-4'>
                <h3 className='font-bold'>GUARD AGAINST COUGH, COLD & POLLUTION</h3>
                <p className="text-md  leading-7 text-gray mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis debitis dolorum facilis culpa, quidem voluptate suscipit
            deserunt. Magni neque at eos dolore dignissimos fugit repudiandae?
            Aut laudantium asperiores et!
          </p>
          </div>
            </div>
            <div className='flex'>
            <div className='mt-4'><FaHandHoldingMedical className='text-3xl'/></div>
            <div className='ml-4'>
                <h3 className='font-bold'>GUARD AGAINST COUGH, COLD & POLLUTION</h3>
                <p className="text-md  leading-7 text-gray mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis debitis dolorum facilis culpa, quidem voluptate suscipit
            deserunt. Magni neque at eos dolore dignissimos fugit repudiandae?
            Aut laudantium asperiores et!
          </p>
          </div>
            </div>
            <button className='bg-Lime text-white w-24 h-10 rounded-lg ml-10 mb-2 cursor-pointer'>Shop Now</button>
          
        </div>
        <div className="p-4  md:w-3/4 sm:row-start-1">
          <img src={pic.url} alt="" className='rounded-lg w-full h-full' />
        </div>
      </div>
      
      
    </div>
  )
}

export default Edge