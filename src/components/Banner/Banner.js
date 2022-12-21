import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className="banner">
            <div className='content'>
                <h1 className='title'>
                    Movie name
                </h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className='description'>Wednesday is an American coming-of-age supernatural mystery comedy horror streaming television series based on the character Wednesday Addams by Charles Addams.</h1>
            </div>
            <div className="fade_bottom">
                
            </div>
        </div>
    )
}

export default Banner