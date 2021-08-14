import React, { Component } from 'react';
import './Header.css'

class Header extends Component{
    constructor(props){
        super(props);

        this.state = {canSort: true};

        this.updateSort = this.updateSort.bind(this);
        this.merge = this.merge.bind(this);
        this.bubble = this.bubble.bind(this);
        this.quick = this.quick.bind(this);
        this.heap = this.heap.bind(this);
        this.newClick = this.newClick.bind(this);
    }

   
    updateSort(){
        this.setState({canSort: !this.state.canSort});
    }

    merge(){
        this.updateSort();
        this.props.onMergeSort();
    }
    quick(){
        this.updateSort();
        this.props.onQuickSort();
    }
    bubble(){
        this.updateSort();
        this.props.onBubbleSort();
    }
    heap(){
        this.updateSort();
        this.props.onHeapSort();
    }
    newClick(){
        this.setState({canSort: true});
        this.props.onNewClick();
    }
    render(){
        return (
            <div className="header">
                <button onClick={this.merge} disabled={!this.state.canSort}>Merge Sort</button>
                <button onClick={this.bubble} disabled={!this.state.canSort}>Bubble Sort</button>
                <button onClick={this.heap} disabled={!this.state.canSort}>Heap Sort</button>
                <button onClick={this.quick} disabled={!this.state.canSort}>Quick Sort</button>
                <button onClick={this.newClick} className="newArray">New Array</button>
            </div>
        )
    }
}

export default Header;