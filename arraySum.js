/**var numbers = [45, 65, 77, 88, 90, 13, 33];
var sum = 0;
for(var i = 0; i<numbers.length; i++){
    var element = numbers[i];
    sum = sum+element;
}
console.log("total of the numbers:", sum); */

function getArraySum(numbers){
    var sum = 0;
    for(var i = 0; i<numbers.length; i++){
        var element = numbers[i];
        sum = sum+element;
    }
    return sum;
}
var numbers = [45, 65, 77, 88, 90, 13, 33];
var result = getArraySum(numbers)
//console.log("total of the numbers:", result); 

var friends = ["Alu", "Bulu", "culu", "dulu", "fulu"];
var allNames = "";
for(var i = 0; i< friends.length;i++){
    var name = friends[i];
    allNames =allNames+name;
}
console.log(allNames)