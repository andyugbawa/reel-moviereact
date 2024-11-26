import React from 'react'
import {Link} from 'react-router-dom'
import "./style1.css"

const TopMovies = () => {
  return (
    <div>


<div className='top_movies'>
      <div className='btn-link'>
      <button className='btn-item' > <Link to="/Film">Home</Link> </button>
      </div>
         <h1>TOP MOVIES</h1>

<div className='top-container'>
   <div className='top-content'>
   <div>
      <img src="./images/sonic3.jpeg" alt="show" className='top-images'/>
   </div>
      <div className='top-text'>
         <p className='top-movies'>SONIC3</p>
      </div>
   </div>

   <div className='top-content1'>
   <div>
      <img src="./images/fall guy.jpeg" alt="show" className='top-images'/>
   </div>
      <div className='top-text'>
         <p className='top-movies'>THE FALL GUY</p>
      </div>
   </div>
   <div className='top-content2'>
   <div>
      <img src="./images/challengers.jpeg" alt="show" className='top-images'/>
   </div>
      <div className='top-text'>
         <p className='top-movies'>THE CHALLENGERS</p>
      </div>
   </div>
   <div className='top-content3'>
   <div>
      <img src="./images/outrun.jpeg" alt="show" className='top-images'/>
   </div>
      <div className='top-text4'>
         <p className='top-movies'>THE OUTRUN</p>
      </div>
   </div>
   </div>
</div>
   



    </div>
  )
}

export default TopMovies
