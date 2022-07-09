// passing two parameters
function addNumbers(num, str) {
    var add = num + str;
    alert(add);

}
addNumbers(500, "Hurray it has worked");

// Conditions
// create a variable
var food = "apple";

if (food == "meat") {
    alert("we can eat it");
}
else {
    alert("we can't eat it");
}

// loops
// while loops

var i = 1;
while (i < 5) {
    document.write("A statement has run");
    i++;
}

// for loop
// for loop simplifies while loop code

for (var i = 1; i < 5; i++);
document.write("My for loop");


// operators

function add(x, y) {
    result = x * y;
    return result;
}
var theResult = add(3, 5);
document.write(theResult);

// Global Variables & Local Variables

var name = "Akoth";
function printName() {
    var name2 = "Cindy";
    //  document.write(name2) ;

}
printName();

document.write(name);

// Arrays

// It allows us to hold multiple values

var roads = ["Dirt", "murram", "cement"];

alert(roads[1]);


// JavaScript Objects

var Person = {
    age: 30,
    height: 20,
    weight: "50kg",
    hair: "black",

}
// Data types in JavaScript
// Numbers, String, Booleans
// How to switch properties of an object
Person.hair = "red";

document.write(Person.weight);
document.write(Person.hair);

    // Global Objects


    var hello="My name is Dorothy Akoth";
    hello=hello.charAt(4);
    document.write(hello);

    // Date Object

    var todayDate=new Date();
    var useString=todayDate.toDateString();
    document.write(useString);

    // get  ElementById
    function changeImage(){
        // var text=document.getElementById("para1").style.fontStyle="italic";
        // var paragraph=document.getElementsByTagName("p");
        // var changeParaText= paragraph[0].style.fontStyle="italic";
        // var changeParaText=paragraph[1].style.fontStyle="italic";
        // var changeParaText=paragraph[2] .style.fontStyle="italic";
        // var changeParaText= paragraph[3].style.fontStyle="italic";

        // change image
         document.getElementById("image").src="Image/Screenshot_20211017-101543-removebg-preview.png";
        
      }

      function changeColor(){
       var text=document.getElementById("para1").style.color="green";
   }

      function validateTextbox(){
       var box = document.getElementById("name");
       var box2 = document.getElementById("address");

       if(box.value.length < 5  || box2.value.length < 5 ){
           alert("Please enter atleast enter 5 characters");
           box.focus();
           box.style.border="solid 3px red"
           return false;

       }


   }
  














