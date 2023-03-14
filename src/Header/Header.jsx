import React, { useEffect } from 'react'
import "./style.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Header() {
  gsap.registerPlugin(ScrollTrigger);
useEffect(() =>{
  /* let tl = new gsap.timeline({
    scrollTrigger: {
      trigger: ".image",
      start: "top bottom",
      end: "+100",
      scrub: 1
    }
  });
  tl.to('.image', {
    backgroundSize: "100%"
  }, .2); */
  

  gsap.to(".image",{
    backgroundSize: "100%",  scrollTrigger: {
      trigger: ".image",
      start: "top bottom",
      end: "+100",
      scrub: 1
    }
  });

  gsap.to("#one",{
    backgroundSize: "100%", scrollTrigger: {
      trigger: ".photo",
      start: "top bottom",
      end: "+100",
      scrub: 1
    }
  });


   gsap.to("#three",{
    backgroundSize: "100%", scrollTrigger: {
      trigger: ".photo3",
      start: "top bottom",
      end: "top top",
      scrub: 1
    }
  }) 
  gsap.to("#lu",{
    backgroundSize: "100%", scrollTrigger: {
      trigger: ".photo5",
      start: "top bottom",
      end: "+100",
      scrub: 1
    }
  }
  )

  gsap.to("#special",{
    backgroundSize: "100%", scrollTrigger: {
      trigger: ".photo8",
      start: "top bottom",
      end: "+100",
      scrub: 1
    }
  }
  )

 /*  tl.from(".image", {
    rotation: 'rotation',
    x: 'positionX',
    y: 'positionY',
  
  }, "-=10") */
  
}, [])


  return (
    <>
    <div className="ff">
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
         <a href="/page"><div className="new-container">
          <div id='one' className="photo"></div>
          </div></a>
          <a href="/page"> 
         <div className="overlay" >
          <div className="content">
            <p>4 Rooms <br /> 3 Bathrooms <br /> 1 Pool</p>
           
          </div>
         </div>
         
         </a>
        </div>
        </div>

      
        <div className="wraperr">
           <div className="each">
         <a href="/"><div className="new-container">
          <div id='one' className="photo2"></div>
          </div></a>
          <div className="overlay">
          <div className="content">
            <p>4 Rooms <br /> 3 Bathrooms <br /> 1 Pool</p>
          </div>
         </div>
        </div>
        </div>

        <div className="wraperr">
           <div className="each">
         <a href="/"><div className="new-container">
          <div id='three' className="photo3"></div>
          </div></a>
          <div className="overlay">
          <div className="content">
            <p>4 Rooms <br /> 3 Bathrooms <br /> 1 Pool</p>
          </div>
         </div>
        </div>
        </div>

        <div className="wraperr">
           <div className="each">
         <a href="/"><div className="new-container">
          <div id='three' className="photo4"></div>
          </div></a>
          <div className="overlay">
          <div className="content">
            <p>4 Rooms <br /> 3 Bathrooms <br /> 1 Pool</p>
          </div>
         </div>
        </div>
        </div>

        <div className="wraperr">
           <div className="each">
          <a href="/"><div className="new-container">
          <div id='lu' className="photo5"></div>
          </div></a>
           <div className="overlay">
          <div className="content">
            <p>4 Rooms <br /> 3 Bathrooms <br /> 1 Pool</p>
          </div>
         </div>
        </div>
        </div>

        <div className="wraperr">
           <div className="each">
         <a href="/"><div className="new-container">
          <div id='lu' className="photo6"></div>
          </div></a>
          <div className="overlay">
          <div className="content">
            <p>4 Rooms <br /> 3 Bathrooms <br /> 1 Pool</p>
          </div>
         </div>
        </div>
        </div>






       <div className="wraperr">
           <div className="each">
        <a href="/"><div className="new-container"><div id='special' className='photo7'></div> </div></a>
         <div className="overlay">
          <div className="content">
            <p>4 Rooms <br /> 3 Bathrooms <br /> 1 Pool</p>
          </div>
         </div>
        </div>
        </div>


        
       <div className="wraperr">
           <div className="each">
        <a href="/"><div className="new-container"><div id='special'      className='photo8'></div> </div></a>
         <div className="overlay">
          <div className="content">
            <p>4 Rooms <br /> 3 Bathrooms <br /> 1 Pool</p>
          </div>
         </div>
        </div>
        </div>
      </div>

{/* <br /><br /><br /><br />
<br /><br /><br /><br />

<br /><br /><br /><br />
<br /><br /><br /><br />
<h3 className='h3'>hello </h3>



    
        <div className="img-container">
          <div className="image"></div>
        </div>
      */}
        </div>
    </>
  )
}
