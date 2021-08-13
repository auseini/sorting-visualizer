import mergeSort from "./sorting-algorithms/MergeSort";
import assert from "assert";

function mergeTest(array){

    let arr = [...array];
    
    mergeSort(array, 0, array.length - 1);
   
    arr.sort(function(a,b){return a - b});
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== array[i]){
            return false
        }
    }
    return true;
}

export default mergeTest;