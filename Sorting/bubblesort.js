var arr = [1,4,5,3,2];

let bubbleSort = (arr) => {
    for(let i=0;i<arr.length-1;i++){
        let swapped = false;
        for(let j=0;j<arr.length - i - 1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }

        if(swapped === false){
            return arr;
        }
    }
}

console.log(bubbleSort(arr))