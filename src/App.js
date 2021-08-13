import Header from './components/Header';
import Visualizer from './components/Visualizer'
import './App.css';
import React, { Component } from 'react';
import mergeSort from './sorting-algorithms/MergeSort';
import mergeTest from './Test'
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
  }

  componentDidMount(){
    this.resetArray();
  }

  merge(){
    let array = this.state.array;
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
        <Header canSort={this.state.canSort} onMergeSort={this.merge} onNewClick={this.resetArray}/>
        <Visualizer array={this.state.array} />
      </div>
    );
  }
  
}

export default App;
