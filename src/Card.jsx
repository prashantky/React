import React from "react";
function Card(props){
    return (<div>
<div className="card"> 
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <img  className="circle" src={props.img} alt="avatar-img"/>
                <div className="bottom">
                    <p className="text">{props.tel}</p>
                    <p className="text">{props.email}</p>
                </div>
            </div>
        </div>
    </div>);
}
export default Card; 