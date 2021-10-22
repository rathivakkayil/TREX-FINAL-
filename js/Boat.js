class Boat {
    constructor(x, y, width, height, pos) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.position = pos;
      this.cannon_image = loadImage("assets/canon.png");
      this.cannon_base = loadImage("assets/cannonBase.png");
    }