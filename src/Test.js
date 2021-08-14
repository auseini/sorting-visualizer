import mergeSort from "./sorting-algorithms/MergeSort";
import bubbleSort from "./sorting-algorithms/BubbleSort";
import quickSort from "./sorting-algorithms/QuickSort";
import heapSort from "./sorting-algorithms/HeapSort";
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
    
    bubbleSort(array, 0, arr.length - 1, []);
   
    arr.sort(function(a,b){return a - b});
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== array[i]){
            return false
        }
    }
    return true;
}

function quickTest(array){
    let arr = [...array];
    
    quickSort(array, 0, array.length - 1, []);
   
    arr.sort(function(a,b){return a - b});
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== array[i]){
            return false
        }
    }
    return true;
}

function heapTest(array){
    let arr = [...array];
    
    heapSort(array, []);
   
    arr.sort(function(a,b){return a - b});
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== array[i]){
            return false
        }
    }
    return true;
}

export {bubbleTest, mergeTest, quickTest, heapTest};