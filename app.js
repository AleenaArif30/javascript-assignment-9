var base = +prompt("enter a base")
var power = +prompt("enter a power of base")
function powerrais() {
    var result = base;
    for (i = 1; i < power; i++) {
        result *= base
    }
    return result
}
alert(powerrais());
var year = +prompt("enter a year to chek whether the year is leap or not")
function leapyear() {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return year + " is a leap year "
    }
    else {
        return "The year is not leap year"
    }

}
alert(leapyear())

var a = +prompt("enter a sides of triangle of a")
var b = +prompt("enter a sides of triangle of b")
var c = +prompt("enter a sides of triangle of c")
function calculatesidesoftriangle(a, b, c) {
    return (a + b + c) / 2;


}

function calculatareaoftriangle() {
    var s = calculatesidesoftriangle(a, b, c)
    return Math.sqrt(s * (s - a) * (s - b) * (s - c))
}
var area = calculatareaoftriangle(a, b, c);
document.write("The sides of a triangle are " + calculatesidesoftriangle(a, b, c) + "<br>" + "The area of triangle is " + area.toFixed(2));

document.write("<br>" + "<br>")

var sub1 = +prompt("enter a marks of 1st subject");
var sub2 = +prompt("enter a marks of 2nd subject");
var sub3 = +prompt("enter a marks of 3rd subject");
function mainfuc() {
    function average(sub1, sub2, sub3) {
        return (sub1 + sub2 + sub3) / 3
    }
    function percentage(sub1, sub2, sub3) {
        var totalmarks = 300;
        var obtainmarks = sub1 + sub2 + sub3
        return (obtainmarks / totalmarks) * 100

    }
    var aver = average(sub1, sub2, sub3);
    var percent = percentage(sub1, sub2, sub3)

    alert("The average marks is " + aver);
    alert("The percentage is " + percent);

}

mainfuc();

var str = prompt("enter a string ")
var char = prompt("enter a charater")
function index(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }

    }
    return -1;
}
alert(index(str, char))

var distance = +prompt("enter a distance btween two cities in km")
function meter(distance) {
    return distance * 1000
}
function centimeter(distance) {

    return distance * 100000
}

function feet(distance) {

    return distance * 3281
}

function inches(distance) {

    return distance * 39370
}
document.write("The distance between two cities in km is " + distance + "<br> " + "distance in meter :" + meter(distance) + "<br> " + "distance in meter :" + "<br> " + "distance in centimeter :" + centimeter(distance) + "<br> " + "distance in feet :" + feet(distance) + "<br> " + "distance in inches :" + inches(distance))