    import React, { useState, useEffect } from 'react';
    import './Player.css';
    import back_arrow from '../../assets/logos/backarrow.png';
    import {useNavigate,useParams} from 'react-router-dom';
    const Player = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [apiData, setApiData] = useState({
        name: '',
        key: '',
        published_at: '',
        type: '', 
    });

    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTA2YjY2NTUwMWNhMmQ0ODFlODNiMTM3ODA2NGI0YyIsInN1YiI6IjY2NWNkNDRlMTI4ZTVjMmQxODZmOTdjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T7hRHPKhNvMRgD-6WOm5-GL8E_7cmO5lMkxav04Pdk0',
        },
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then((response) => response.json())
        .then((response) => {
            // Handle cases where there might not be results or the expected format
            if (response.results && response.results.length > 0) {
            setApiData(response.results[0]);
            } else {
            console.warn('No video data found in API response.');
            }
        })
        .catch((err) => console.error(err));
    }, []);

    return (
        <div className='player'>
        <img src={back_arrow} alt='' onClick = {()=>{navigate(-2)}}/>
        <iframe
            width='90%'
            height='90%'
            src={`https://www.youtube.com/embed/${apiData.key}`}
            title='trailer'
            frameBorder='0'
            allowFullScreen
        ></iframe>
        <div className='player-info'>
            <p>{apiData.published_at.slice(0,10)}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
        </div>
        </div>
    );
    };

    export default Player;