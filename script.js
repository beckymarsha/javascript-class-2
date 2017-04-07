// if, if-else, if-ifelse-else, switch, for, do/while, while

// highlight multiple lines, then hold command + slash to comment all lines out

var boxes = document.querySelectorAll('.box');
//boxArray as an alternative

//console.log(boxes.length); 

//if (condition) {
//    block
//}


// if (boxes.length >6) {
//     console.log("There are more than four boxes")
// } else {
//     console.log("There are five or fewer boxes")
// }


// if (boxes.length < 2) {
//     //
// } else if (boxes.length <1) {
//     //
// } else {
//     //
// }


// switch (boxes.length) {
//     case 1:
//         console.log("We have 1 box.");
//         break;

//     case 2:
//         console.log("We have 2 boxes.");
//         break;

//     default:
//     console.log("Default");
//     boxes[0].style.marginLeft = 100 + "px";
//     boxes[1].style.backgroundColor = "blue";
//     break;
// }

var name = "Becky Marshall";
console.log(name.length);

var fruits = [
    "orange",
    "durian",
    "banana",
    "pineapple",
    "pomegranate",
]

console.log(fruits.length);
console.log(fruits[2]);
console.log(fruits[3].length)

var daysInYear = 365.25;
console.log(daysInYear);

if(fruits[3] == "banana") {
    document.body.style.backgroundColor = "#191919";
}

// ++ adds 1, -- subtracts 1

console.log(boxes.length);

function boxClicked(){
        console.log("Box clicked");
}


for (var i = 0; i < boxes.length; i++) {
    console.log(i);
    boxes[i].addEventListener("click", boxClicked);
}

