// 1491. Average Salary Excluding the Minimum and Maximum Salary

var salary = [25000,48000,57000,86000,33000,10000,42000,3000,54000,29000,79000,40000]

function averageSalary(salary){
    var sorted = salary.sort(function(a,b){return a-b})
    var avgLength = salary.length - 2;
    var sum = 0;
    for(var i=1;i<sorted.length-1;i++){
        sum +=salary[i];
    }

    return (sum/avgLength).toFixed(4);

}

console.log(averageSalary(salary))