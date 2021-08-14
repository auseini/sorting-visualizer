import React, { Component } from 'react';
import './Visualizer.css';

class Visualizer extends Component{
   
    componentDidUpdate(prevProps){
        const bars = document.querySelector(".container").childNodes;

        for(let i = 0; i < bars.length; i++){
            bars[i].style.background = 'aqua';
        }
    }

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