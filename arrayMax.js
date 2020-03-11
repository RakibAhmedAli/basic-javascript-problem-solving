var marks = [45, 81, 63, 98, 56, 35, 23, 99, 66];
var max = marks[0];  //array first index 0 hoy, tai eita dhore niche
for (var i = 0; i<marks.length; i++){
    var element = marks[i];     //i er value change hbe tai seta nirdisto kore deya hoyeche
    if(element>max){
        max= element;
    }
}
//console.log("Highest value is: ", max);

var numbers = [12, 45, 65, 21, 6, 68];
var smallest = numbers[0];
for(var i = 0; i < numbers.length; i++){
    var num = numbers[i];
    if(num < smallest){
        smallest = num;
    }
}
console.log(smallest)