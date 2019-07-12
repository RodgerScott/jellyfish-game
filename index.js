let jellyFish;

let myGameArea = {
    canvas: document.getElementById("gameScreen"),
    start: function() {
        this.context = this.canvas.getContext("2d");
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function startGame() {
    myGameArea.start();
    jellyFish = new component(15, 15, "lightblue", 10, 10);
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    this.newPos = function () {

    }
}

function updateGameArea() {
    myGameArea.clear();
    jellyFish.update();
}
// 65 is the 'a' key, 68 is the 'd' key, 32 is the space key



document.addEventListener('keydown', event => {
    if (event.keyCode == 65) {
        moveLeft();
    }
    if (event.keyCode == 68) {
        moveRight();
    }
    if (event.keyCode == 87) {
        moveUp();
    }
    if (event.keyCode == 83) {
        moveDown();
    }
})

function moveUp () {
    jellyFish.y -= 1;
}

function moveDown () {
    jellyFish.y += 1;
}

function moveRight () {
    jellyFish.x += 1;
}

function moveLeft () {
    jellyFish.x -= 1;
}

startGame();
