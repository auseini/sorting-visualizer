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
      array: []
    }
    //bind this for functions
    this.createArray = this.createArray.bind(this);
    this.resetArray = this.resetArray.bind(this);
    this.merge = this.merge.bind(this);
    this.bubble = this.bubble.bind(this);
    this.quick = this.quick.bind(this);
    this.heap = this.heap.bind(this);
    this.complete = this.complete.bind(this);
  }

  componentDidMount(){
    this.resetArray();
  }
  complete(bars){

    for(let i = 0; i < bars.length; i++){
      setTimeout(() => {
        bars[i].style.background = '#E1de6a';
      }, i * 6);
    }
  }
  heap(){
    let array = [...this.state.array];
    let animations = [];

    heapSort(array, animations);
    
    //change state for buttons so cant sort when already sorted

    const bars = document.querySelector(".container").childNodes;
    for(let i = 0; i < animations.length; i++){
      
      const [j, k, l] = animations[i];

      const color = (
        l === 1 ? 'blue' :
        l === 2 ? 'violet' :
        l === 3 ? 'aqua' :
        null
      );

      if( l !== 0 ){
        setTimeout(() => {
          bars[j].style.background = color;
        }, i * 6)
        
      } else {
        setTimeout(() => {
          bars[j].style.height = `${k * 10}px`;
          // let temp = bars[j].style.height;
          // bars[j].style.height = bars[k].style.height;
          // bars[k].style.height = temp;
        }, i * 6)
      }
      if(i === animations.length - 1){
        setTimeout(() => {
          this.complete(bars);
        }, i * 6)
      }
    }
    
  }
  quick(){
    let array = [...this.state.array];
    let animations = [];

    quickSort(array, 0, array.length - 1, animations);
   
    //change state for buttons so cant sort when already sorted

    for(let i = 0; i < animations.length; i++){
      const bars = document.querySelector(".container").childNodes;
      const [j, k, l] = animations[i];

      //get color change necessary
      const color = (
        l === -1 ? 'blue' :
        l === -2 ? 'aqua' :
        l === 2 ? 'violet' :
        l === 3 ? 'aqua' :
        null
      );

      if(l !== 1){
        setTimeout(() => {
          bars[k].style.background = color;
        }, i * 6)
        
      } else {
        setTimeout(() => {
          bars[j].style.height = `${k * 10}px`;
        }, i * 6)
      } 
      if(i === animations.length - 1){
        setTimeout(() => {
          this.complete(bars);
        }, i * 6)
      }
    }
  }
  bubble(){
    let array = [...this.state.array];
    let animations = []
    bubbleSort(array, animations);

    //change state for buttons so cant sort when already sorted

    for(let i = 0; i < animations.length; i++){
      const bars = document.querySelector(".container").childNodes;
      const color = i % 4 === 0 ? 'violet' : 'aqua';
      
      const [ind1, ind2] = animations[i];

      if(ind1 !== -1){
        if(i % 4 === 1 || i % 4 === 2){
          setTimeout(()=> {
            bars[ind1].style.height = `${ind2 * 10}px`;
          }, i * 2.5)
        } else {
            setTimeout(()=>{
              bars[ind1].style.background = color;
              bars[ind2].style.background = color;
            }, i * 2.5)
        } 
      }
      if(i === animations.length - 1){
        setTimeout(() => {
          this.complete(bars);
        }, i * 2.5)
      }
    }
    
  }
  merge(){
    let array = [...this.state.array];
    let animations = [];
    mergeSort(array, 0, array.length - 1, animations)
  
    //change state for buttons so cant sort when already sorted
    

    for(let i = 0; i < animations.length; i++){

      const bars = document.querySelector(".container").childNodes;
      const color = i % 3 === 0 ? 'violet' : 'aqua';
      if(i % 3 === 2){
        setTimeout(() => {
          const [ind, height] = animations[i];
          bars[ind].style.height = `${height * 10}px`
        }, i * 6);
      } else{
        setTimeout(()=>{
          const [ind1, ind2] = animations[i];

          bars[ind1].style.background = color;
          bars[ind2].style.background = color;
        }, i * 6)

      }
      if(i === animations.length - 1){
        setTimeout(() => {
          this.complete(bars);
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
    this.setState({ array: array})
  }
  render(){
    return (
      <div className="App">  
        <Header onHeapSort={this.heap} onQuickSort={this.quick} onBubbleSort={this.bubble} onMergeSort={this.merge} onNewClick={this.resetArray}/>
        <Visualizer array={this.state.array} />
      </div>
    );
  }
  
}

export default App;
