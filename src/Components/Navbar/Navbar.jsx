import React, {useEffect, useRef} from 'react'
import './Navbar.css'
import logo from '../../assets/logos/title.png'
import search_icon from '../../assets/logos/search.png'
import profile_icon from '../../assets/logos/profile.png'
import caret_icon from '../../assets/logos/caret.png'
import bell_icon from '../../assets/logos/bell.png'
import { logout } from '../../firebase'


const Navbar = () => {

    const navRef = useRef();
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY >=80){
                navRef.current.classList.add('nav-dark')
            }else{
                navRef.current.classList.remove('nav-dark')
            }
        })
    })
    return (
    <div className ='navbar'>
        <div ref={navRef} className ='navbar-left'>
            <img src={logo} alt=''  />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Language</li>
            </ul>  
        </div>
        <div className ='navbar-right'>
            <img src ={search_icon} alt ="" className ='icons' />
            <p>Children</p>
            <img src ={bell_icon} alt ="" className ='icons' />
            <div className ='navbar-profile'>
                <img src={profile_icon} alt="" className='profile' />
                <img src = {caret_icon} alt="" className='profile' />
                <div className = 'dropdown'>
                    <p onClick={()=>{logout()}} >Sign Out of Movies library</p>
                </div>

            </div>
        </div>

    </div>
    )
}

export default Navbar
