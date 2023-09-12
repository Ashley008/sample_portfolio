import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <>
    <div className='bg-emerald-50 py-3'>
    <div className='grid grid-cols-1 divide-y m-5'>
        <h1 className='text-4xl py-2 ' id='projects'>Projects</h1>
    <div className='flex flex-col md:flex-row'>
    {/* //cards for each project */}
    <ProjectCard title="Project 1" desc="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Asperiores Aperiam Porro Impedit Tenetur Quo Hic Omnis Doloribus Dolores Enim Deleniti." src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800"/>
    <ProjectCard title="Project 2" desc="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Asperiores Aperiam Porro Impedit Tenetur Quo Hic Omnis Doloribus Dolores Enim Deleniti." src="https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800"/>
    <ProjectCard title="Project 3" desc="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Asperiores Aperiam Porro Impedit Tenetur Quo Hic Omnis Doloribus Dolores Enim Deleniti." src="https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800"/>
    </div>
    </div>
    </div>
    </>
    
  )
}

export default Projects