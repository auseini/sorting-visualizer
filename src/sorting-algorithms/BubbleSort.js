function bubbleSort(array, animations){
    let n = array.length;

    //go through each pair of elements and swap if necessary
    for(let i = 0; i< n - 1; i++){
        for(let j = 0; j < n - i - 1; j++){
            animations.push([j, j+1]);

            if(array[j] > array[j+1]){
                swap(array, j, j+1, animations);
            } else{
                animations.push([-1, -1]);
                animations.push([-1, -1]);
            }

            animations.push([j, j+1]);
        }
    }
}

function swap(array, i, j, animations){
    let temp = array[i];

    array[i] = array[j];
    array[j] = temp;

    animations.push([i, array[i]]);
    animations.push([j, array[j]]);
}

export default bubbleSort;