import React from 'react'

export default function Service(props) {
    var code=require(`../Images/${props.image}`)
    return (
    <div className='service-cont'>
        <img src={code}/>
        <h4>{props.name}</h4>
        <p>{props.desc}</p>
        <button className="service-btn">Enquire now</button>
    </div>
  )
}
