import React from 'react'

import './Products.css'
import productImage from '../../Assets/z4ir6Q7IfA1YEiEjGhEdYkdJIm8LqtvBJKlcvESq.jpg'
import wishListIcon from '../../Assets/heart.svg'
import location from '../../Assets/location.svg'
import { all } from 'axios'
const Products = ({allProducts, category,icon }) => {
   console.log(allProducts,'jjj');
    return (
        <div className='Products'>
            <div className='products-heading'>
                <img src={icon} alt="" />
                <p>{category}</p>
            </div>
            <div className='Products-container'>
                {allProducts.filter((item, i) => (
                    item.propertyType?.name == category
                )).map((item, key) => (

                    <div className="product-list">
                        <div className="product-image">
                            <img src={item?.images} alt="Image Not Available" />
                        </div>
                        <div className="product-details">
                            <div className="name-and-wishicon">
                                <p>Bone Avenue</p>
                                <img src={wishListIcon} alt="" />
                            </div>
                            <div className="location-and-prize">
                                <div className='location-and-place'>
                                    <img src={location} alt="" /> <span>{item.location.city}</span>
                                </div>
                                {item?.details?.price?.rate ? <div>
                                        <p className='product-price'>Rs:{item?.details?.price?.rate} {item?.details?.price?.type}</p>
                                    </div> : ""}
                                    

                            </div>
                            <div className="explore">
                                <p>Explore Now</p>
                            </div>
                        </div>
                    </div>

                ))}
            </div>


        </div>
    )
}

export default Products