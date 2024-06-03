import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '../../assets/logos/hero_pic.png'
import hero_title from '../../assets/logos/hero_title.png'
import play_button from '../../assets/logos/play.png'
import info from '../../assets/logos/info.png'
import TitleCard from '../../Components/TitleCard/TitleCard'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
    return (
    <div className = 'home'>
        <Navbar/>
        <div className ='hero'>
            <img src = {hero_banner} alt = '' className = 'banner-img'/>
            <div className='hero-caption'>
                <img src={hero_title} alt='' className='caption-img'/>
                <p>A ski-fi movie of kalki the born of god in 2898AD </p>
            <div className ='hero-btns'>
                <button className='btn'><img src={play_button} alt=''/>Play</button>
                <button className='btn dark-btn'><img src={info} alt=''/>More Info</button>
            </div>
            <TitleCard/>
            </div>
        </div>
        <div className='more-cards'>
            <TitleCard title ={"Blockbuster Movies"} category={"top_rated"}/>
            <TitleCard title={"Only on Movies library"} category={'popular'}/>
            <TitleCard title = {"Upcoming"} category={"upcoming"}/>
            <TitleCard title={"Top Pics for You"} category={"now_playing"}/>
        </div>
        <Footer/>
    </div>
    )
}
export default Home