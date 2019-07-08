function startGame() {
    myGameArea.start();
    jellyfishPiece = new component(32, 32, "red", 125, 50);
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

let myGameArea = {
    canvas: document.createElement("canvas"),
    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        let main = document.getElementById("canvas-container");
        main.insertBefore(this.canvas, main.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function () {
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height)
    }
};

function rightArrow() {
    console.log("right");

}

function leftArrow() {
    console.log("left");
}

function upArrow() {
    console.log("up");
}

function updateGameArea() {
    myGameArea.clear();
    jellyfishPiece.x += 1;
    jellyfishPiece.update();
}



startGame();
