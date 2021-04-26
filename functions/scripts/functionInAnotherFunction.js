function average(sum){
    return sum() + " \nInside average"
}

var sumOfNumbers = function(){
    return "Inside Sum"
}

console.log(average(sumOfNumbers))
