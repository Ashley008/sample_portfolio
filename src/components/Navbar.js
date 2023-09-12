import React from 'react'

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-teal-100 ">
    <div className="bg-teal-100">
    <a className="navbar-brand m-4" href="/">WebDev</a>
    <ul className="inline-flex md:justify-start">
        <li className='ml-3 cursor-pointer'> <a href="#technologies">Skills</a>
            
        </li>
        <li className='ml-3 cursor-pointer'><a href="#projects">Projects</a>
            
        </li>
    </ul>
    </div>
    
    </nav>
    </>
  )
}

export default Navbar