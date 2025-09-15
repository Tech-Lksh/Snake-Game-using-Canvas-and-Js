let canvas = document.querySelector("canvas")
let pen = canvas.getContext("2d")



let snakeCells = [[2,2]];
let cell = 50;

function draw () {
    for(let i of snakeCells){
        pen.fillStyle="rgba(255, 5, 5, 1)";
        pen.fillRect(i[0], i[1], cell, cell);
    };
}
draw();

function update () {

}