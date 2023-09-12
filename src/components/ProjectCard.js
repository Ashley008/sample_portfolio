import React from 'react'

function ProjectCard(props) {
  return (
  <div className='pt-4 p-2 m-2 hover-bg-blur'>
    {/* img */}
    <img src={props.src} alt="" className='rounded-t-lg' />
    <div className='bg-white rounded-b-lg'>
    {/* title */}
    <h1 className="font-bold text-xl pt-4 p-3">{props.title}</h1>
    {/* description */}
    <p className="pb-5 p-3 text-gray">{props.desc}</p>
    </div>
  </div>
  )
}

export default ProjectCard