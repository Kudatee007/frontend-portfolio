import React from 'react'
import About from '../features/about/About'
import Project from '../features/projects/Project'
import Experience from '../features/experience/Experience'

const Home = () => {
  return (
    <main className='pl-16 xl:px-20'>
        <About />
        <Project />
        <Experience />
    </main>
  )
}

export default Home