import React from 'react'

function FeatureHolder(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.img}/>
        </div>
        <div className='s-b-img'>
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quia nulla quaerat earum explicabo minus eveniet, magnam quos ipsum, ThuongTV Dep Trai!</p>
        </div>
    </div>
  )
}

export default FeatureHolder