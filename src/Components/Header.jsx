import React from 'react'
import NavigationBar from './NavigationBar'

function Header() {
  return (
    <div id='main'>
        <NavigationBar/>
        <div className='name'>
            <h1><span>Let's start your journey with </span>Dogs Park</h1>
            <p className='detail'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, fuga explicabo rem voluptates, nulla corporis quaerat nisi labore adipisci asperiores doloribus beatae sapiente excepturi error maxime et unde eum dicta?</p>
            <a href='#' className='cv-btn'>Download</a>
        </div>
    </div>
  )
}

export default Header