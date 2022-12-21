import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className="banner">
            <div className='content'>
                <img className='wednesday' src="https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfCsAW7SAIq26sADYMnCvMlPGtA38HXcJSt3KRnz6sXaVI-pBYp8mNfkcI26cNQFGwCpiicIA9ZwripZ1Au9e1EsOXJZIdqddJRhA4GALLfNV0ax5BZfSfZL1mQY0vm6ue0M4MXjREjOdtzgi-eB3GayauwrYaK7WWfzlQOuoobOjNuCoOCnOA.png?r=50a" alt="" />
                <h1 className='title'>
                    Wednesday
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