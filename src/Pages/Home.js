import React from 'react'
import '../Components/Home.css';
import Backy from '../images/backy.jpeg';
const Home = () => {
  return (
    <>
    <section>
      <div className='container'>
       <div className='banner'>
         <img src={Backy} alt="computers" />

       </div>
      </div>
    </section>

    </>
  )
}

export default Home