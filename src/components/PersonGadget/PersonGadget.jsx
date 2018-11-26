import React, { Component } from "react";
import classNames from "classnames";
import Link from "gatsby-link";
import "./PersonGadget.css";
import Img from "gatsby-image";



const PersonGadget = props => {
    var personInfo = props.person;
    
    if (personInfo) {
      var voorgrond = null;
      if (personInfo.voorgrond)
      {
          voorgrond = personInfo.voorgrond;
      }
      
      const { person, slug ,info } = personInfo;
      console.log(info)
      console.log(slug)
      var text= "geen informatie"
      if (info)
      {
        text = info.voornaam + " " + info.achternaam;
      }
      else if (person)
      {
        text = person; 
      }
      if (voorgrond)
      {
        return (

            <Link className="flex-container" to={slug}  >
            
                <Img className="flex-item-gadget-photo" fixed={voorgrond.fixed}> </Img>
                <div className="flex-item-gadget" > {info.voornaam} {info.achternaam} </div>
                <div className="flex-item-gadget"> {info.geboren} </div>
                
            </Link>
          );
      }
      
      
    }
    //no data
    return (
      <div className="flex-container">
        <div className="flex-item-gadget" style={{height:"255px"}} ></div>
        <div className="flex-item-gadget">{text}</div>
        <div className="flex-item-gadget"> {"?"} </div>
        </div>
        
    );
  };
  export default PersonGadget;