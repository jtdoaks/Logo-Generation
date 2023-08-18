class Shape {

    constructor(shape, fill, text, textColor) {
        this.shape = shape
        this.fill = fill
        this.text = text
        this.textColor = textColor
    }

}

class Circle extends Shape {
    constructor(shape, fill, text, textColor) {
        super(shape, fill, text, textColor)
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">


  <circle cx="150" cy="100" r="80" fill="${this.fill}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>
        `
    }
}

class Square extends Shape {
    constructor(shape, fill, text, textColor) {
        super(shape, fill, text, textColor)
    }

    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">


     <rect width="100%" height="100%" fill="${this.fill}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>
        `
    }
}

class Triangle extends Shape {
    constructor(shape, fill, text, textColor) {
        super(shape, fill, text, textColor)
    }

    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">


     <polygon points="50,10 90,90 10,90 fill:${this.fill};" />

  <text x="50" y="60" font-size="20" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>
        `
    }
}

module.exports = { Circle, Square, Triangle }