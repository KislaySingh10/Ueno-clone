import React from 'react'

function Card(props) {
    return (
        <div className="card js-slidein block">
            { props.item.image?(
                <img className="small" src={props.item.image} />
            ):(
                <video className="small" autoPlay muted>
                            <source src={props.item.video} type="video/mp4"></source>
                </video>
            )}
            
            <p className="sub-title">{props.item.name}</p>
            <p className="second">{props.item.type}</p>
        </div>
    )
}

export default Card
