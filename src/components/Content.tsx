import React from 'react'
import ImageOne from '../images/egg.jpg'
import ImageTwo from '../images/egg-2.jpg'

function Content() {
  return (
    <>
        <div className='menu-card'>
            <img src={ImageOne} alt="egg" className="h-full rounded mb-20 shadow" />
            <div className='center-content'>
                <h2 className='text-2xl mb-2'>Egg Muffing</h2>
                <p className="mb-2">Cripsy, delicious, and nutritious</p>
                <span>$16</span>
            </div>
        </div>
        <div className='menu-card'>
            <img src={ImageTwo} alt="egg two" className="h-full rounded mb-20 shadow" />
            <div className='center-content'>
                <h2 className='text-2xl mb-2'>Egg Salad</h2>
                <p className="mb-2">Cripsy, delicious, and nutritious</p>
                <span>$12</span>
            </div>
        </div>
    </>
  )
}

export default Content