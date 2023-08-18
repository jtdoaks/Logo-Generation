const {Circle, Square, Triangle} = require("./shapes.js");

test("should make the shape color blue", () => {
    let shape = new Circle("Circle", "blue", "plk", "pink")
    expect(shape.fill).toBe("blue")
} )
test("should make the text be the letters plk", () => {
    let shape = new Square("Square", "blue", "plk", "pink")
    expect(shape.text).toBe("plk")
} )
test("should make the text color pink", () => {
    let shape = new Triangle("Triangle", "blue", "plk", "pink")
    expect(shape.textColor).toBe("pink")
} )