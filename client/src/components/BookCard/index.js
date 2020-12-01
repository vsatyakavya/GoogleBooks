import React from "react";
import "./style.css";
import {Btn} from "../Form"

function BookCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.thumbnail} />
      </div>
       <div className="content">
        
      
          
            <a rel="noreferrer noopener" target="_blank" href={props.href}>
              
              <button className="btn btn-secondary" style={{margingRight: 10}}>view</button>

            
            </a>
            <button className="btn btn-secondary"  onClick={props.onClick}>Save</button>

        
      
      </div>
      
    </div>
  );
}

export default BookCard;
