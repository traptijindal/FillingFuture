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
    
          <div className='flex flex-col md:flex-row justify-center items-center '>
     {data_Work.map((items,index)=>{
        return(
            <div key={index} className=' md:w-[30%] relative h-40'>
                <img src={items.image} alt="" className=' h-24 md:h-56 '/>
               <div className='absolute  flex flex-col justify-center items-center md:mx-20'>
               <p className='text-sm text-center md:text-base '>{items.number}</p>
                <p className='text-sm text-center md:text-base'>{items.desc}</p>
                </div>
            </div>     
        )
      })}
     </div>
    
  )
}

export default WorkImg
