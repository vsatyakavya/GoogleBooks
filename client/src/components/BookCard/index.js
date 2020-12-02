import React from "react";
import "./style.css";
import {Btn} from "../Form"
import API from "../../utils/API";




function BookCard(props) {
  function onSave() {
    API.saveBook({
      title: props.title,
      authors: props.authors,
      description: props.description,
      image:props.thumbnail,
      link:props.href,
  
    })
      .then(res => console.log("done"))
      .catch(err => console.log(err));
  
  }

  function onDelete() {
    API.deleteBook(props.id)
      .then(res => console.log("done"))
      .catch(err => console.log(err));
  
  }

  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.thumbnail} />
      </div>
       <div className="content">
        
      
          
            <a rel="noreferrer noopener" target="_blank" href={props.href}>
              
              <button className="btn btn-secondary" style={{margingRight: 10}}>view</button>

            
            </a>
            <button className="btn btn-secondary"  onClick={props.type== "save"?onSave:onDelete}>Save</button>
            

        
      
      </div>
      
    </div>
  );
}

export default BookCard;
