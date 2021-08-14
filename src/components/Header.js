import React, { Component } from 'react';
import './Header.css'

class Header extends Component{

    render(){
        return (
            <div className="header">
                <button onClick={this.props.onMergeSort} disabled={!this.props.canSort} className="merge">Merge Sort</button>
                <button onClick={this.props.onBubbleSort} disabled={!this.props.canSort} className="bubble">Bubble Sort</button>
                <button onClick={this.props.onHeapSort} disabled={!this.props.canSort} >Heap Sort</button>
                <button onClick={this.props.onQuickSort} disabled={!this.props.canSort} >Quick Sort</button>
                <button onClick={this.props.onNewClick} className="newArray">New Array</button>
            </div>
        )
    }
}

export default Header;