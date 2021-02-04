function Pillar(h, xPos, colorR, colorB) {
    this.width = 5;
    this.height = h * 2;
    this.x = 25 + (xPos * this.width);
    this.y = 400 - this.height;
    this.colR = colorR;
    this.colB = colorB;
    this.gravity;
    
    this.show = function() {
        fill(this.colR, 0, this.colB);
        rect(this.x, this.y, this.width, this.height);
    }
    
    this.shorten = function() {
        this.gravity = map(this.height, 2, 200, 0, 10);
        this.y = this.y + this.gravity;
        this.height = this.height - this.gravity;
    }
}