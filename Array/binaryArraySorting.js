//Test Data
var arr = [1,0,1,1,1,1,1,0,0,0]

binaryArraySorting = (arr) =>{
    var count =0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]==0){
            var temp = arr[i];
            arr[i] = arr[count];
            arr[count] = temp;
            count++;
        }
    }
}
binaryArraySorting(arr)

for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}