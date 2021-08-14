
function quickSort(array, low, high, animations){

    if(low < high){
        let pivot = partition(array, low, high, animations);

        //quick sort around pivoit which is in right spot
        quickSort(array, low, pivot - 1, animations);
        quickSort(array, pivot + 1, high, animations);
    }
}

function partition(array, low, high, animations){
    let pivot = array[high];

    //add animation, -1 as first dig to signify pivot color change
    animations.push([-1, high, high]);

    //keeps track of index
    let idx = low - 1;

    for(let i = low; i <= high; i++){
        //2 meangs go to new color
        animations.push([i, i, 2]);
        

        if(array[i] < pivot){
            //brings elements lower than pivot, down 
            idx++;
            animations.push([idx, idx, 2])
            swap(array, idx, i, animations); 
            animations.push([idx, idx, 3])
        }

        //3 is revert to old color
        animations.push([i, i, 3]);
       
    }
    //change pivot color back
    animations.push([high, -1, high]);
    //move pivot to its correct spot
    swap(array, idx + 1, high, animations);
    return (idx + 1);
}

function swap(array, i, j, animations){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    //1 means swap
    animations.push([i, j, 1]);
}

export default quickSort;