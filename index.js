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
};

function startGame() {
    myGameArea.start();
    jellyFish = new component("./jellyfish.png", 150, 50);
}

function component(image, x, y) {
    this.x = x;
    this.y = y;
    this.angle = 1;
    this.image = new Image();
    this.image.src = image;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = '#000';
        ctx.fillRect(0,0,100,100);

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle / 180 / Math.PI);
        ctx.drawImage(this.image, -16, -16);
        ctx.restore();
    };
}

function rotateLeft() {
    jellyFish.angle -= 100;
}

function rotateRight() {
   jellyFish.angle += 100;
}

function moveAhead() {

}

function updateGameArea() {
    myGameArea.clear();
    jellyFish.update();
}
// 65 is the 'a' key, 68 is the 'd' key, 32 is the space key



document.addEventListener('keydown', event => {
    if (event.keyCode == 65) {
        rotateLeft();
    }
    if (event.keyCode == 68) {
        rotateRight();
    }
    if (event.keyCode == 32) {
        moveAhead();
    }

});



startGame();
