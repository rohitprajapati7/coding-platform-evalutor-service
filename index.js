const arr =[1,[2,3,[4,5]]];


function flatArray (arr, flattenArray){
console.log(flattenArray);

    for(let i = 0; i<arr.length; i++){
        if(typeof arr[i] === "number"){
            flattenArray.push(arr[i]);
        } else {
            flatArray(arr[i]);
        }
    }
    return flattenArray;
    
}

console.log(flatArray(arr,[]));