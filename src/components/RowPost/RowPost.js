import React, { useEffect, useState } from 'react'
import './RowPost.css'
import { API_KEY, imgUrl } from '../../constants/constants'
import axios from '../../Axios'
function RowPost(props) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response) => {
            setMovies(response.data.results)
        }).catch(err => {
            alert("Network error")
        })
    }, [])
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj) =>
                    <img className='poster' src={`${imgUrl + obj.backdrop_path}`} alt="" />
                )}
            </div>
        </div>
    )
}

export default RowPost