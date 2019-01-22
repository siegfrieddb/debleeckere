import React, { Component } from "react";
import classNames from "classnames";
import Link from "gatsby-link";
import "./ReadParents.css"
import PersonGadget from "../PersonGadget/PersonGadget"

const ReadParentStory2 = props => {
  const { parent } = props;
  if (parent) {
    /** Limit words to 19 in GraphQL * */
    const { path, cover, voornaam, achternaam,excerpt } = parent;
    const styles = cover ? { backgroundImage: `url(${cover}` } : null;
    const classes = classNames("read-next-story", props.className, {
      "no-cover": !cover
    });
    return (
      <Link className={classes} style={styles} to={path}>
        <section className="post">
          <h2>{voornaam} {achternaam}</h2>
          <p>{excerpt}&hellip;</p>
        </section>
      </Link>
    );
  }
  
  //no data
  return (
    <Link className={classNames("read-next-story", props.className)} style={null} to={"/"}>
      <section className="post">
        <h2>?</h2>
        <p>Nog geen informatie&hellip;</p>
      </section>
    </Link>
  );
};




/**
 * Links to Previous/Next posts
 */
class ReadParents2 extends Component {
  render() {
    const  related = this.props.related;
    console.log(this.props)
    return (
      <div className="scroller-band">
        <h2 className="flex-item-parents" style={{width:"100%"}}>Ouders:</h2> 
        <PersonGadget   person={vader} />
        <div style={{width:"10px"}}> </div>
        <PersonGadget   person={moeder} />
        <h2 className="flex-item-parents" style={{width:"100%"}}>Kinderen:</h2> 
        <PersonGadget   person={null} />
       </div>

    );
  }
}

export default ReadParents;
