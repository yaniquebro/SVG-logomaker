//use constructor to show what a shape is
class Shape {
    constructor () {
        this.color = "";
    }

    setColor(colorVar) {
        this.color = colorVar
    }
}

// create triangle and return shape
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// create circle and return shape
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}

// create square and return shape
class Square extends Shape {
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}

// Exports classes (Square, Triangle, Circle)
module.exports = { Triangle, Circle, Square };
