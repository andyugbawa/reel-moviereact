import React from 'react'
import {Link} from 'react-router-dom'
import "./style1.css"

const Series = () => {
  return (
    <div>

      <div className='series-container'>
      <div className='btn-link'>
        <button className='btn-item' > <Link to="/Film">Home</Link> </button>
      </div>
      <h1>TV SERIES</h1>

      <div className='image-container'>
        <div>
           <img src="./images/black hamptons.jpeg" alt="image" className='images'/>
           <p className='series-title'>THE BLACK HAMPTONS</p>
        </div>
        <div>
           <img src="./images/bank under siege.jpeg" alt="image" className='images'/>
           <p className='series-title'>BANK UNDER SIEGE</p>
        </div>
        <div>
           <img src="./images/black is beauty.jpeg" alt="image" className='images'/>
           <p className='series-title'>BLACK IN BEAUTY</p>
        </div>
      </div>

      <div className='image-container1'>
        <div>
           <img src="./images/sistas.jpeg" alt="image" className='images'/>
           <p className='series-title'>SISTAS</p>
        </div>
        <div>
           <img src="./images/queens men.jpeg" alt="image" className='images'/>
           <p className='series-title'>ALL THE QUEENS MEN</p>
        </div>
        <div>
           <img src="./images/equalizer.jpeg" alt="image" className='images'/>
           <p className='series-title'>THE EQUALIZER</p>
        </div>
      </div>

      <div className='image-container2'>
        <div>
           <img src="./images/family business.jpeg" alt="image" className='images'/>
           <p className='series-title'>THE FAMILY BUSINESS</p>
        </div>
        <div>
           <img src="./images/paris has fallen.jpeg" alt="image" className='images'/>
           <p className='series-title'>PARIS HAS FALLEN</p>
        </div>
        <div>
           <img src="./images/jackal.jpeg" alt="image" className='images'/>
           <p  className='series-title'>THE DAY OF THE JACKAL</p>
        </div>
      </div>
      </div>
    




    </div>
  )
}

export default Series
