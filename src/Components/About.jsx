import React from 'react'
import chplay from '../images/ThuongTV/chplay2.png'
import appstore from '../images/ThuongTV/app-store.png'

function About(props) {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.img} alt=''/>
        </div>
        <div className='about-text'>
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro similique deleniti saepe veritatis laboriosam eaque labore nihil! In facere repellendus recusandae animi? Enim eos eveniet doloribus harum repudiandae quasi. Laboriosam.</p>
            <button>{props.button}</button>
        </div>
    </div>
  )
}

export default About