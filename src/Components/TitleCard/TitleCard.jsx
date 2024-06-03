    import React, { useEffect, useRef,useState } from 'react';
    import './TitleCard.css'
    import cards_data from '../../assets/logos/cards/Cards_data';
    import { Link } from 'react-router-dom';
    const TitleCard = ({title,category}) => {
    const [apiData,setApiData]= useState([]);
    const cardsRef = useRef();
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTA2YjY2NTUwMWNhMmQ0ODFlODNiMTM3ODA2NGI0YyIsInN1YiI6IjY2NWNkNDRlMTI4ZTVjMmQxODZmOTdjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T7hRHPKhNvMRgD-6WOm5-GL8E_7cmO5lMkxav04Pdk0'
        }
    };
    

    const handleWheel = (event) => {
        event.preventDefault(); // Prevent default scroll behavior
        cardsRef.current.scrollLeft += event.deltaY;
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => setApiData(response.results))
        .catch(err => console.error(err)); 
        cardsRef.current.addEventListener('wheel', handleWheel);
        return () => {
        cardsRef.current.removeEventListener('wheel', handleWheel); // Cleanup on unmount
        };
    }, []);

    return (
        <div className='titlecard'>
        <h2>{title?title:"Popular on Movie_library"}</h2>
        <div className='card-list' ref={cardsRef}>
            {apiData.map((card, index) => {
            return <Link to ={`/player/${card.id}`}className='card' key={index}>
                    <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt='' />
                    <p>{card.original_title}</p>
                    </Link>
            
            })}
        </div>
        </div>
    );
    };

    export default TitleCard;