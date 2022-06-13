// Push Front
function pushFront(arr,val){
    var temp1 = arr[0];
    console.log (temp1)
    var temp2 = arr[1];
    for (var i=0; i<arr.length-1 && temp1 !=undefined; i++){
        arr[i+1] = temp1;
        temp1 = temp2;
        temp2 = arr[i+2];
    }
    arr[0] = val;
    return arr;
}
// console.log(pushFront([9,2,17,-4,6],-5));

// Pop Front
function popFront(arr){
    var temp = arr[0];
    for (var i=arr.length-1; i>=0; i--){
        arr[i-1] = arr[i];
    }
    return temp;
}
// console.log(popFront([9,2,17,-4,6],-5));

// Insert at
function insertAt(arr, ind, val){
    for (var i= arr.length - 1; i>=ind; i-- ){
        arr[i+1] = arr[i];
    }
    arr[ind]=val;
    return arr;
}
// console.log(insertAt([9,2,17,-4,6],2,-5));

// Swap Pairs
function swapPairs(arr){
    var temp = arr[i];
    for (var i=0; i<arr.length-1; i+=2){
        arr[i]=arr[i+1];
        arr[i+1]= temp;
    }
    return arr;
}
console.log(swapPairs(['tenet','raw',98,'logic','viento']));