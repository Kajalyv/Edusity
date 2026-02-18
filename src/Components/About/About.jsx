import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel voluptatibus facilis totam corporis ducimus eos aliquid dolorum hic iusto, accusamus quos optio quae doloremque autem, dolores beatae voluptatum velit!
            Alias quod voluptate inventore </p>
            <p>aliquam in ratione sed, numquam odio dolore praesentium, aut repellendus minima magni minus iusto. Impedit, officia. Repellendus quaerat quod voluptate quae at eos ipsum ipsam beatae!</p>
            <p>Nurturing Tomorrow's Leaders Today Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel voluptatibus facilis totam corporis ducimus eos aliquid dolorum hic iusto, accusamus quos optio quae doloremque autem, dolores beatae</p>
        </div>
      
    </div>
  )
}

export default About
