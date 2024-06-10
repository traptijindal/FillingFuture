import React from 'react'


const data_Work=[
    {
       image:"/eartg 1.png",
       number:"30",
       desc:"Countries",
    },

    {
      image:"/food 1.png",
      number:"17,663,191",
      desc:"People already served",
    },

    {
       image:"/project.png",
       number:"37,015",
       desc:"Campaigns funded ",
    }, 
]

const WorkImg = () => {
  return (
    
          <div className='flex flex-col md:flex-row justify-center items-center mb-5 md:mb-10'>
     {data_Work.map((items,index)=>{
        return(
            <div key={index} className=' md:w-[30%] relative h-60 md:h-40 mb-6'>
                <div className='flex justify-center'>
                <img src={items.image} alt="" className=' h-48 md:h-60 '/>
                </div>
               <p className='text-xl text-center md:text-2xl font-bold text-[#1D3C49]'>{items.number}</p>
                <p className='text-base text-center md:text-xl'>{items.desc}</p>
               
            </div>     
        )
      })}
     </div>
    
  )
}

export default WorkImg
