import React from "react";
import classNames from "classnames";
import "./MainHeader2.css";
import Img from "gatsby-image"

class MainHeader2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "auto",
      height: "100hv",
      top: "0px",
      left: "0px"
    }
    if (!this.props.cover){
      throw new Error("no cover specified")
    }
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    var aspect = this.props.cover.fluid.aspectRatio;
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); 
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  
    var calcH;
    var calcW;


    
    if (this.props.fillRatioHeight){
       h = h*this.props.fillRatioHeight
    }
    else if (this.props.fillHeight){
      h = this.props.fillHeight
    }
    else if (w <= 900){
      h = w / aspect
    } 
    if (!this.props.noscale)
    {
        calcH = h;
        calcW = h * aspect;
        if (calcW > w){
          calcW = w;
        }
        calcW = w;
        
    }
    else{
      if (w/h > aspect){
        calcH = h;
        calcW = calcH *aspect;
      }
      else{
        calcW = w;
        calcH = w/aspect;
      }
    }
    var calcTop = (h-calcH)/2;
    var calcLeft = (w-calcW)/2;
    
    if (this.props.fillRatioHeight || this.props.fillHeight)
    {
      calcTop = 0;
    }
    
    this.setState({width:calcW,height:calcH,top:calcTop,left:calcLeft});
  }
  render() {
    const { children, cover } = this.props;

    const classes = classNames("main-header", this.props.className, {
      "no-cover": !cover,"fillHeight": this.props.fillHeight || this.props.fillRatioHeight  
    });

    
//<header className={classes}>
    return (
      <div className={classes} style={this.props.style} >
        <Img style={{overflow:"hidden", height:this.state.height, width:this.state.width,left:this.state.left,top:this.state.top }}
          fluid={this.props.cover.fluid} />
        {children}
      </div>
      /*
     <div className={classes}   >
        <Img style={{display: "block",
          "max-width":"1000px",
          "max-height":"100hv",
          "width": "auto",
          "height": "100hv"}}
          fluid={this.props.cover.fluid} />
          {children}
      </div>   */
      
    );
  }
}



export default MainHeader2;
