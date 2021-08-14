import Header from './components/Header';
import Visualizer from './components/Visualizer'
import './App.css';
import React, { Component } from 'react';
import mergeSort from './sorting-algorithms/MergeSort';
// eslint-disable-next-line
import {bubbleTest, mergeTest, quickTest, heapTest} from './Test'
import bubbleSort from './sorting-algorithms/BubbleSort';
import quickSort from './sorting-algorithms/QuickSort';
import heapSort from './sorting-algorithms/HeapSort';
class App extends Component {

  constructor(){
    super();
    //get new array
    this.state = {
      array: [],
      canSort: true
    }
    //bind this for functions
    this.createArray = this.createArray.bind(this);
    this.resetArray = this.resetArray.bind(this);
    this.merge = this.merge.bind(this);
    this.bubble = this.bubble.bind(this);
    this.quick = this.quick.bind(this);
    this.heap = this.heap.bind(this);
  }

  componentDidMount(){
    this.resetArray();
  }
  heap(){
    let array = [...this.state.array];
    let animations = [];

    heapSort(array, animations);
    //change state for buttons so cant sort when already sorted
    this.setState({canSort: false})
  }
  quick(){
    let array = [...this.state.array];
    let animations = [];

    quickSort(array, 0, array.length - 1, animations);
  
    //change state for buttons so cant sort when already sorted
    this.setState({canSort: false})
//console.log(animations)
    for(let i = 0; i < animations.length; i++){
      const bars = document.querySelector(".container").childNodes;
      const [j, k, l] = animations[i];

      //get color change necessary
      const color = (
        j === -1 ? 'blue' :
        k === -1 ? 'aqua' :
        l === 2 ? 'violet' :
        l === 3 ? 'aqua' :
        null
      );

      if(j === k){
        setTimeout(() => {
          bars[k].style.background = color;
          bars[k].style.background = color;
        }, i * 6)
        
      } else if(l === 1 && k !== -1 && j !== -1) {
        setTimeout(() => {
          let temp = bars[j].style.height;
          bars[j].style.height = bars[k].style.height;
          bars[k].style.height = temp;
        }, i * 6)
        
      } else {
        setTimeout(() => {
          bars[l].style.background = color;
        }, i * 6)
      }

    }
  }
  bubble(){
    let array = [...this.state.array];
    let animations = []
    bubbleSort(array, animations);

  //change state for buttons so cant sort when already sorted
    this.setState({canSort: false})

    for(let i = 0; i < animations.length; i++){
      const bars = document.querySelector(".container").childNodes;
      const color = i % 3 === 0 ? 'violet' : 'aqua';
      
      const [ind1, ind2] = animations[i];

      if(ind1 !== -1){
        if(i % 3 === 1){
        setTimeout(()=> {
          let temp = bars[ind1].style.height;

          bars[ind1].style.height = bars[ind2].style.height;
          bars[ind2].style.height = temp;
        }, i * 5)
      } else {
        setTimeout(()=>{
          bars[ind1].style.background = color;
          bars[ind2].style.background = color;
        }, i * 5)
      } 
      }
      
    }
    
  }
  merge(){
    let array = [...this.state.array];
    let animations = [];
    mergeSort(array, 0, array.length - 1, animations)
  
    //change state for buttons so cant sort when already sorted
    this.setState({canSort: false})

    for(let i = 0; i < animations.length; i++){

      const bars = document.querySelector(".container").childNodes;
      const color = i % 3 === 0 ? 'violet' : 'aqua';
      if(i % 3 === 2){
        setTimeout(() => {
          const [ind, height] = animations[i];
          bars[ind].style.height = `${height * 10}px`
        }, i* 6);
      } else{
        setTimeout(()=>{
          const [ind1, ind2] = animations[i];

          bars[ind1].style.background = color;
          bars[ind2].style.background = color;
        }, i * 6)

      }

    }

  }
  createArray(size){
    let array = [];

    //push random values onto array
    for(let i = 0; i < size; i++){
      array.push(Math.floor(Math.random() * 44 + 1));
    }

    return array;
  }
  resetArray(){
    const size = Math.floor(Math.random() * 44 + 20);
    const array = this.createArray(size)
    this.setState({ array: array,
    canSort: true })
  }
  render(){
    return (
      <div className="App">  
        <Header onHeapSort={this.heap} onQuickSort={this.quick} onBubbleSort={this.bubble} canSort={this.state.canSort} onMergeSort={this.merge} onNewClick={this.resetArray}/>
        <Visualizer array={this.state.array} />
      </div>
    );
  }
  
}

export default App;
