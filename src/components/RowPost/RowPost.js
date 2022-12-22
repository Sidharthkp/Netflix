import React, { useEffect, useState } from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import { API_KEY, imgUrl } from '../../constants/constants'
import axios from '../../Axios'
function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState("")
    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovies(response.data.results)
        }).catch(err => {
            alert("Network error")
        })
    },);
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };
    const handleMovie = (id) => {
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
            } else {
                console.log("Array");
            }
        })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj, key_id) =>
                (<img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} key={key_id} src={`${imgUrl + obj.backdrop_path}`} alt="" />
                ))}
            </div>
            {urlId && <Youtube opts={opts} videoId={urlId.key} />}
        </div>
    )
}

export default RowPost