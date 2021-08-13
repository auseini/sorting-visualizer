import React, { Component } from 'react';
import './Visualizer.css';

class Visualizer extends Component{
   
    render(){
        return (
        <div className="container">
            {this.props.array.map((value, index) =><div key={index} className="bar"
            style={
            {
                height: `${value*10}px`,
                
            }}></div>)}
        </div>
        )
    }
}
export default Visualizer;