import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer>
            <p> CopyRight &cop; 2022</p>
             <Link to="/about">About</Link> 
             {/* <br></br> */}
             {/* <a href='/about'>About from server</a> */}
        </footer>
    </div>
  )
}

export default Footer