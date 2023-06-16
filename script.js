let color = "black";

//function to populate board with size inputted in using paramters entered in size field on HTML. 
// also includes reset code to remove divs when colums/rows are redefined by user
function populateBoard (size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div)=> div.remove());
board.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
board.style.gridTemplateRows=`repeat(${size}, 1fr)`;


let amount = size*size;
for (let i=0; i<amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare) 
    square.style.backgroundColor="grey";
    board.insertAdjacentElement("beforeend", square);
}  
}
// limit inputs of at least 2 and max of 100

function changeSize(input) {
        if (input >= 2 && input <=100) {
            populateBoard(input);
        } else {
                console.log("issues")
            }
        }
// color square function defined as background style of div that's created initially = color of button
function colorSquare() {
    if (color==='random') {
            this.style.backgroundColor=`hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else {
        this.style.backgroundColor=color;
    }
    }

function changeColor(choice) {
    color=choice;
}

function resetBoard(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div)=> div.style.backgroundColor="grey");
}

populateBoard(16);