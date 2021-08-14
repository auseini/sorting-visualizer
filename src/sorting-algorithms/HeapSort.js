
function heapSort(array, animations){
    let n = array.length;

    //get max heap
    for(let i = Math.floor(n/2) - 1; i >= 0; i--){
        heapify(array, n, i, animations);
    }

    //move root o end then heapify the rest
    for(let i = array.length - 1; i  > 0; i--){
        swap(array, 0, i, animations)

        //call ceapify again on smaller heap
        heapify(array, i, 0, animations)
    }

}

function heapify(array, heapSize, root, animations){

    //1 is change to largest color
    animations.push([root, root, 1]);

    let largest = root;
    let left = root * 2 + 1;
    let right = root * 2 + 2;

    if(left < heapSize){
        // 2 is change to comparing color
        animations.push([left, left, 2]);

        //find alrgest between children
        if (array[left] > array[largest]){
            //3 m,eans revert to oirig color
            animations.push([root, root, 3]);
            
            largest = left;
            animations.push([left, left, 1]);
        } else{
            animations.push([left, left, 3]);
        }
    }
    

    if(right < heapSize){
        animations.push([right, right, 2]);

        if(array[right] > array[largest]){
            animations.push([largest, largest, 3]);

            largest = right;
            animations.push([right, right, 1])
        } else{
            animations.push([right, right, 3]);
        }
    }
    

    if(largest !== root){
        swap(array, root, largest, animations);

        //heapify at new index
        heapify(array, heapSize, largest, animations);
    } else{
        animations.push([root, root, 3]);
    }
}

function swap(array, i, j, animations){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    
    //0 means swap animation
    animations.push([i, array[i], 0]);
    animations.push([j, array[j], 0]);
    animations.push([i, i, 3]);
    animations.push([j, j, 3]);
}

export default heapSort;