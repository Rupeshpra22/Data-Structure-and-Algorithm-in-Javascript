var inputArray = [2,1,3,5,4];
var size = 5;

function bubbleSort(inputArray, size){
    for(var i=0;i<size-1;i++){
        var swapped = false;
        for(var j=0;j<size-i-1;j++){
            if(inputArray[j]>inputArray[j+1]){
                var temp = inputArray[j];
                inputArray[j] = inputArray[j+1];
                inputArray[j+1] = temp;
            }
            swapped = true;
        }
        if(swapped == false){
            break;
        }
    }
}

bubbleSort(inputArray, size);
for(var z=0;z<size;z++){
    console.log(inputArray[z]);
}