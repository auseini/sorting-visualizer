
function heapSort(array){
    let n = array.length;

    //get max heap
    for(let i = Math.floor(n/2) - 1; i >= 0; i++){
        heapify(array, n, i);
    }

    //

}

function heapify(array, heapSize, root){

}

export default heapSort;