// multification table of 1 to 10

var series;

for (var i = 1; i <= 10; i++){
    series = i + " = ";
    for (var j = 1; j < 10; j++){
        series = series + i*j + " ";
        series += i*j + " ";
    }
    console.log(series);
}