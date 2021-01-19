// 1431. Kids With the Greatest Number of Candies

var candies = [2, 3, 5, 1, 3]
var extraCandies = 3

function kidWithCandies(candies, extraCandies) {
    var kidWithMostCandies = 0;
    for (var i = 0; i < candies.length; i++) {
        if (candies[i] > kidWithMostCandies) {
            kidWithMostCandies = candies[i]
        }
    }

    for (var j = 0; j < candies.length; j++) {
        if (candies[j] + extraCandies >= kidWithMostCandies) {
            candies[j] = true;
        } else {
            candies[j] = false;
        }
    }
    return candies;
}

kidWithCandies(candies, extraCandies);
for (var z = 0; z < candies.length; z++) {
    console.log(candies[z]);
}

