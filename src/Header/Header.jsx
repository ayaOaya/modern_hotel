import React from 'react'
import "./style.scss";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

export default function Header() {
  /* const scroll = new LocomotiveScroll(); */
 

 /*  const { scroll } = LocomotiveScroll() */
  
  return (
    <>
<div className="bgimg"> 
      <div className="navbar">
        <div className="container">
          <h1 className="logo">LUXURIOUS</h1>
          <ul className='ul'>
            <li className='li'><a className='a' href="/">HOME</a></li>
            <li className='li'><a className='a' href="/">HOUSES</a></li>
            <li className='li'><a className='a' href="/">ROOMS</a></li>
            <li className='li'><a className='a' href="/">POOLS</a></li>
            <li className='li'><a className='a' href="/">ABOUT</a></li>
            <li className='icon li'></li>
            <li className='btn li'><a className='a' href="/">CONTACT</a></li>
          </ul>
        </div>
      </div>



      <div className="header">
        <h1 className="title">BEST PLACE TO BE IN YOUR HOLIDAY</h1>
        <div className="bokingcontainer">
          {/* here goes all the stuff for the boking container area */}
        </div>
      </div>
      </div>


      <div className="brown-bg"></div>



      <div className="imgContainer">
        <div className="wraperr">
          <div className="each">
         <a href="/"><img className='img' src="./public\hotelimg\pexels-binyamin-mellish-1396132.jpg" alt="house" /> </a>
         <div className="overlay">
          <div className="content">
            <p>4 Rooms <br /> 3 Bathrooms <br /> 1 Pool</p>
          </div>
         </div>
        </div>
        </div>

        <div className="wraperr">
           <div className="each">
         <a href="/"><img className='img' src="./public\hotelimg\pexels-binyamin-mellish-1396132.jpg" alt="house" /></a>
          <div className="overlay">
          <div className="content">
            <p>4 Rooms <br /> 3 Bathrooms <br /> 1 Pool</p>
          </div>
         </div>
        </div>
        </div>

        <div className="wraperr">
           <div className="each">
         <a href="/"><img className='img' src="./public\hotelimg\pexels-binyamin-mellish-1396132.jpg" alt="house" /></a>
          <div className="overlay">
          <div className="content">
            <p>4 Rooms <br /> 3 Bathrooms <br /> 1 Pool</p>
          </div>
         </div>
        </div>
        </div>

        <div className="wraperr">
           <div className="each">
         <a href="/"><img className='img' src="./public\hotelimg\pexels-binyamin-mellish-1396132.jpg" alt="house" /></a>
          <div className="overlay">
          <div className="content">
            <p>4 Rooms <br /> 3 Bathrooms <br /> 1 Pool</p>
          </div>
         </div>
        </div>
        </div>

        <div className="wraperr">
           <div className="each">
          <a href="/"><img className='img' src="./public\hotelimg\pexels-binyamin-mellish-1396132.jpg" alt="house" /></a>
           <div className="overlay">
          <div className="content">
            <p>4 Rooms <br /> 3 Bathrooms <br /> 1 Pool</p>
          </div>
         </div>
        </div>
        </div>

        <div className="wraperr">
           <div className="each">
         <a href="/"><img className='img' src="./public\hotelimg\pexels-binyamin-mellish-1396132.jpg" alt="house" /></a>
          <div className="overlay">
          <div className="content">
            <p>4 Rooms <br /> 3 Bathrooms <br /> 1 Pool</p>
          </div>
         </div>
        </div>
        </div>

        <div className="wraperr">
           <div className="each">
        <a href="/"><img className='img' src="./public\hotelimg\pexels-binyamin-mellish-1396132.jpg" alt="house" /></a>
         <div className="overlay">
          <div className="content">
            <p>4 Rooms <br /> 3 Bathrooms <br /> 1 Pool</p>
          </div>
         </div>
        </div>
        </div>


        <div className="wraperr">
           <div className="each">
          <a href="/"><img className='img' src="./public\hotelimg\pexels-binyamin-mellish-1396132.jpg" alt="house" /></a>
           <div className="overlay">
          <div className="content">
            <p>4 Rooms <br /> 3 Bathrooms <br /> 1 Pool</p>
          </div>
         </div>
        </div>
        </div>
      </div>
      


    
    </>
  )
}
