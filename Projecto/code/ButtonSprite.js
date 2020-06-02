"use strict";

class ButtonSprite extends SpriteImage{
    constructor(x, y, w, h, img, clickable) {
        super(x, y, w, h, 0, img);
        this.clickable = clickable;
    }

    mouseOverButton(ev){ //ev.target é a canvas
        var mx = ev.offsetX;  //mx, my = mouseX, mouseY na canvas
        var my = ev.offsetY;
        if (mx >= this.x && mx <= this.x + this.width && my >= this.y && my <= this.y + this.height) {
            return true;
        }
        else
            return false;
    }
}