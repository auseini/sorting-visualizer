import { buildQueries } from "@testing-library/react";


function mergeSort(array, left, right, animations){
    if(left >= right){
        return;
    }
  
    //find middle and recursivly call on left and right halves of array
    let middle = parseInt((right-left)/2) + left;
   
    mergeSort(array, left, middle, animations);
    mergeSort(array, middle + 1, right, animations);
    merge(array, left, middle, right, animations)
}

function merge(array, left, middle, right, animations){

    //get 2 arrays, for left and right side
    let leftSize = middle - left + 1;
    let rightSize = right - middle;
    let leftArr = Array(leftSize);
    let rightArr = Array(rightSize);

    for(let i = 0; i < leftSize; i++){
        leftArr[i] = array[left + i];
    }
    for(let i = 0; i < rightSize; i++){
        rightArr[i] = array[middle + i + 1];
    }
  
    //compare elements between array and add to array
    // index variables
    let l = 0;
    let r = 0;
    let k = left;

    while(l < leftSize && r < rightSize){
        animations.push([l + left, middle + r])
        animations.push([l + left, r + middle])

        if(leftArr[l] <= rightArr[r]){
            animations.push([k, leftArr[l]]);

            array[k] = leftArr[l];
            l++;
        } else{
            animations.push([k, rightArr[r]]);

            array[k] = rightArr[r];
            r++;
        }
        k++;
        
    }

    //if anything is remaining copy them to array
    while(l < leftSize){
        animations.push([l, l]);
        animations.push([l, l]);
        animations.push([k, leftArr[l]]);

        array[k] = leftArr[l];
        l++;
        k++;
    }
    while(r < rightSize){
        animations.push([r + middle, r + middle]);
        animations.push([r + middle, r + middle]);
        animations.push([k, rightArr[r]]);
        

        array[k] = rightArr[r];
        k++;
        r++;
    }

    // bars.childNodes[7].style.background = 'red';
    // setTimeout(()=>{bars.childNodes[7].style.background = 'blue';}, 1000);
    


}

export default mergeSort;