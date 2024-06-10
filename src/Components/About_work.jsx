import React from 'react'


const data_about =[
    {
        image:"/loaction.png",
        head:"We prove every project",
        text:"We track every dollar you raise and show the projects you helped fund with photos and GPS coordinates.",
    },
    {
        image:"/search.png",
        head:"We’re an open book",
        text:"We track every dollar you raise and show the projects you helped fund with photos and GPS coordinates.",
    },
    {
        image:"/spoon.png",
        head:"We work with local partnerships",
        text:"We track every dollar you raise and show the projects you helped fund with photos and GPS coordinates.",
    }
]


const About_work = () => {
  return (
    <div className='my-7 mx-4 md:mx-14 flex flex-col  justify-center'>
      <h1 className='text-[#1D3C49] text-3xl md:text-4xl font-bold  '>How we work</h1>
      <div className='flex flex-col md:flex-row justify-center items-center w-[1/3] '>
          {data_about.map((items,index)=>{
            return(
                <div key={index}className='p-4 px-6 border-b border-[#d3cdcd] md:border-none my-2' >
                     <img src={items.image} alt="" className='mx-auto'/>
                     <h1 className='text-center text-[#1D3C49] font-bold text-lg mb-2'>{items.head}</h1>
                     <p>{items.text}</p>
                </div>
            )
          })}
      </div>
    </div>
  )
}

export default About_work

