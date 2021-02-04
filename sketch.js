var pillarArr = [];
var numArr = [];
var len = 150;
var fillArray = 0;
var sortVar = 1;
var close = 0;
var velocity = 0;

function setup() {
    createCanvas(800, 500);
    noStroke();
    for (var i = 0; i < len; i++) {
        numArr[i] = i + 1;
    }
    while (fillArray < len) {
        var i = Math.floor(Math.random() * numArr.length);
        var num = numArr[i];
        numArr.splice(i, 1);
        var colR = map(num, 0, len, 0, 255);
        var colB = map(num, 0, len, 255, 0);
        pillarArr.push(new Pillar(num, fillArray, colR, colB));
        fillArray++;
    }
    frameRate(30);
}

function draw() {
    background(0);
    for (var i = 0 + close; i < pillarArr.length - close; i++) {
        pillarArr[i].show();
    }
    if (sortVar < pillarArr.length) {
        var einzusortierender_wert = pillarArr[sortVar].height;
        var wertY = pillarArr[sortVar].y;
        var tempColR = pillarArr[sortVar].colR;
        var tempColB = pillarArr[sortVar].colB;
        var j = sortVar;
        while (j > 0 && pillarArr[j - 1].height > einzusortierender_wert) {
            pillarArr[j].height = pillarArr[j - 1].height;
            pillarArr[j].y = pillarArr[j - 1].y;
            pillarArr[j].colR = pillarArr[j - 1].colR;
            pillarArr[j].colB = pillarArr[j - 1].colB;
            j--;
        }
        pillarArr[j].height = einzusortierender_wert;
        pillarArr[j].y = wertY;
        pillarArr[j].colR = tempColR;
        pillarArr[j].colB = tempColB;
        sortVar++;
    } /* else if (close <= len / 2 && pillarArr[len - 1].height < 5) {
        close++;
        velocity = velocity + 1;
        close = close + velocity;
    } else {
        for (var i = 0; i < pillarArr.length; i++) {
            pillarArr[i].shorten();
        }
    }*/
}