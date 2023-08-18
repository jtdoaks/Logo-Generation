const {Circle, Square, Triangle} = require("./shapes.js");
test("this is a test", () => {
    let shape = new Circle("Circle", "blue", "plk", "yellow")
    expect(shape.shapeColor).toBe("blue")
} )
test("this is a test", () => {
    let shape = new Square("Square", "blue", "plk", "yellow")
    expect(shape.text).toBe("plk")
} )
test("this is a test", () => {
    let shape = new Triangle("Triangle", "blue", "plk", "yellow")
    expect(shape.textColor).toBe("yellow")
} )