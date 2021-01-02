var arr = [5,13,6,9,12,11,8]
var l= 0;
var h = arr.length-1;
var p = 6

//Time Complexity: O(n)
//Space Complexity: O(n)
function naivePartitionMethod(arr,l,h,p){
    //Create a new temp array with the size of l-h-1(basically the size of the given array)
    var temp = new Array(h-l-1);
    var index = 0;

    //This iteration will add those element in temp array which are less than or equal to arr[p]
    for(var i=l;i<=h;i++){
        if(arr[i]<=arr[p]){
            temp[index] = arr[i];
            index++;
        }
    }

    //This iteration will add those element in temp array which are greater than arr[p]
    for(var j=l;j<=h;j++){
        if(arr[j]>arr[p]){
            temp[index] = arr[j];
            index++;
        }
    }

    //Copying the temp array in the original arr array
    for(var z=l;z<h;z++){
        arr[z] = temp[z];
    }
}

naivePartitionMethod(arr,l,h,p);
for(var m=l;m<=h;m++){
    console.log(arr[m]);
}