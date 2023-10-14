import React from 'react'
import Menu from '../components/Menu';
import '../assets/styles/Cesar.css'

export default function Home() {
  return (
    <div className='contenedor'>
      <Menu />
      <section className="imgcontainer">
        <div className='overlay'></div>
      </section>
    </div>
  )
}