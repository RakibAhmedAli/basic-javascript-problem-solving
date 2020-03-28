var monthName = "March, 2020"
var days = 31
var startingDay = 0;

console.log("\n\n Calendar of", monthName, ":\n");
console.log("SUN   Mon   TUE   WED   THU   FRI   SAT");

for(var i = 0; i <= 5; i++){
    var dayRow = "";
    for (var j = 1; j <= 7; j++){
        var currentDay = 7 * i + j - startingDay;

        if (currentDay > days){
            break;
        } else if (currentDay < 1){
            currentDay = " ";
        }
        if (currentDay > 9){
            dayRow += currentDay + "    ";
        } else {
            dayRow += currentDay + "     ";
        }      
    } 
    console.log(dayRow);
}