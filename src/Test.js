import mergeSort from "./sorting-algorithms/MergeSort";
import bubbleSort from "./sorting-algorithms/BubbleSort";

function mergeTest(array){

    let arr = [...array];
    
    mergeSort(array, 0, array.length - 1, []);
   
    arr.sort(function(a,b){return a - b});
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== array[i]){
            return false
        }
    }
    return true;
}

function bubbleTest(array){
    let arr = [...array];
    
    bubbleSort(array, []);
   
    arr.sort(function(a,b){return a - b});
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== array[i]){
            return false
        }
    }
    return true;
}
export {bubbleTest, mergeTest};