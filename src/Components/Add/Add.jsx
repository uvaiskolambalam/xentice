import React from 'react'
import './Add.css'
import leftOne from '../../Assets/addOne.png'
import leftTwo from '../../Assets/leftTwo.png'
import rightOne from '../../Assets/addThree.png'
import { useState } from 'react'
import { useEffect } from 'react'
const Add = () => {
    const URL1= leftOne
    const URL2 =leftTwo
    const [image, setImage] = useState(URL2)
    useEffect(() => {
        setInterval(function () {
            if (image === URL1) {
               setImage(URL2)
            } else {
                setImage(URL1)
           }
        },3000)
    },[image])
  return (
      <div className='Add'>
          <div className="Add-left">
              <img src={image} alt="" />
          </div>
          <div className="Add-right">
              <img src={rightOne} alt="" />
              
          </div>
    </div>
  )
}

export default Add