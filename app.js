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

var string = prompt("enter a string for delete vowel")
function deletevowel(string) {
    var vowel = "aeiouAEIOU";
    var result = ""
    for (i = 0; i < string.length; i++) {
        if (vowel.indexOf(string[i]) === -1) {
            result += string[i]

        }
    }
    return result
}
alert(deletevowel(string))



var text = prompt("enter any text to count pair of vowel")
function countVowelPairs(text) {
    var count = 0;
    var i = 0;
    while (i < text.length - 1) {
        var char1 = text[i].toLowerCase()
        var char2 = text[i + 1].toLowerCase()
        var vowelPairs = []

        switch (true) {
            case (char1 === "a" && (char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u")):
            case (char1 === "e" && (char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u")):
            case (char1 === "i" && (char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u")):
            case (char1 === "o" && (char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u")):
            case (char1 === "u" && (char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u")):
                count++
                vowelPairs.push(char1 + char2)
                console.log(vowelPairs)
                break
        }
        i++
    }
    return count;
}
alert(countVowelPairs(text))


var overtime = +prompt("how many hours do you work in office today")

function overtimepay(overtime) {
    var workinghours = 40
    var overpay = overtime - workinghours
    var pay = overpay * 12
    return pay
}

alert(overtimepay(overtime))


var amount = +prompt("enter your amount")
function currencynotes(amount){
var hundred = Math.floor(amount/100)
var remainamount = amount%100
var fifty = Math.floor(remainamount/50)
var remainamount = remainamount%50
var ten = Math.floor(remainamount/10)

return [hundred,fifty,ten]
}
var notes = currencynotes(amount)
document.write("your amount is"  + amount + "<br>" + "The notes of hundred = " + notes[0] + "<br>" + "The notes of fifty = " + notes[1]  + "<br>" + "The notes of ten = " + notes[2])