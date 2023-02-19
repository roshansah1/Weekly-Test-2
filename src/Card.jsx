import React from "react";

const Card = (props) => {
    
    return(
        <>
        <div className="cards">
           <div className="image">
              <img src={props.poster}/>
           </div>
           <h2> {props.title} </h2>
        </div>
        </>
    )
}

export default Card;