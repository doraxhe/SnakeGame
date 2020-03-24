
var snakePosition = '{"body": [{"xCoor": 11,"yCoor": 11},{"xCoor": 11,"yCoor": 10},{"xCoor": 11,"yCoor": 9},{"xCoor": 12,"yCoor": 9},{"xCoor": 13,"yCoor": 9},{"xCoor": 13,"yCoor": 10},{"xCoor": 15,"yCoor": 11},{"xCoor": 13,"yCoor": 11},{"xCoor": 14,"yCoor": 11}]}';
var snakeBody = JSON.parse(snakePosition);
console.log(Object.keys(snakeBody.body).length);



function calculateScore() {    
    console.log(snakeBody);

    var score = "<h2>Score:";
    score += " ";
    score += Object.keys(snakeBody.body).length - 1;
    score += "</h2>";

    document.getElementById("score").innerHTML = score;
}
calculateScore();



var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// getContext() returns an object that provides methods and properties for drawing on the canvas.
// getContext("2d") object can be used to draw text, lines, boxes, circles, and more on the canvas.

// define canvas row and column
const row = 30;
const col = 50;
console.log("width and height " + row + " " + col + " " + canvas.height + " " + canvas.width);

var jsonResponse = '{"food": [{"xCoor": 10,"yCoor": 17}]}';
var foodCoor = JSON.parse(jsonResponse); // create an array obejct from json

function showSnakeAndFood() {
    // Create two dimensional array
    var posArr = new Array(row);
    for (var i = 0; i < row; i++) {
        posArr[i] = new Array(col);
    }

    // Loop to initilize and display 2D array elements
    var grid = "";
    var i, j, n;
    for (i = 0; i < row; i++) {
        grid += "<tr>";
        for (j = 0; j < col; j++) {
            var position = posArr[i][j];

            // show food
            if (i === foodCoor.food[0].yCoor && j === foodCoor.food[0].xCoor) {
                position = "<canvas id='food'></canvas>"; // add canvas to table as td
            }

            // show snake head
            else if (i === snakeBody.body[0].yCoor && j === snakeBody.body[0].xCoor) {
                position = "<canvas id='head'></canvas>";
            }
            
            // Set all other [i][j] to be an empty objects
            else {
                position = "-";
            }

            // show snake trunk
            for (n = 1; n < Object.keys(snakeBody.body).length; n++) {
                if (i === snakeBody.body[n].yCoor && j === snakeBody.body[n].xCoor) {
                    position = "<canvas id='trunk'></canvas>";
                    // console.log("Hello World");
                }
            }

            grid += "<td>" + position + "</td>";
        }
    grid += "</tr>";
    }
    document.getElementById("table").innerHTML += grid; // creation of grid is finished
}

showSnakeAndFood();