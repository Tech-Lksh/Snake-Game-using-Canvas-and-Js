let canvas = document.querySelector("canvas")
let pen = canvas.getContext("2d")

pen.fillStyle="rgba(255, 5, 5, 1)"
pen.fillRect(10, 10, 40, 40)
pen.clearRect(10, 10, 40, 40)