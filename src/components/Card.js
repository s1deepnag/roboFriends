//import React, {Component} from "react";
import React from "react";


const Card = (props) => {
    // destructuring..! can use the props directly now, if this is a function instead
    // of a class, can do destructuring in fun parameter itself..
    // Card({name, email, id}) {.....} like so. Code is Clean and looks COOOOLLL...!
    //const {name, email, id} = this.props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 '>
            <img alt='robots' src={`https://robohash.org/${props.id}?200*200`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;