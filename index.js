const {Circle, Square, Triangle} = require("./lib/shapes.js");
const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        message:"Pick a Shape",
        type: "list",
        name: "shape",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        message:"Enter three letters",
        type: "input",
        name: "letters",
        
    },
    {
        message:"Enter shape color",
        type: "input",
        name: "shapeColor",
        
    },
    {
        message:"Enter text color",
        type: "input",
        name: "textColor",
        
    },
]).then(answers => {
    if(answers.shape == "Circle"){
        let shape = new Circle(answers.shape, answers.shapeColor, answers.letters, answers.textColor)
        fs.writeFileSync("./output/logo.svg", shape.render())
    }
    if(answers.shape == "Square"){
        let shape = new Square(answers.shape, answers.shapeColor, answers.letters, answers.textColor)
        fs.writeFileSync("./output/logo.svg", shape.render())
    }
    if(answers.shape == "Triangle"){
        let shape = new Triangle(answers.shape, answers.shapeColor, answers.letters, answers.textColor)
        fs.writeFileSync("./output/logo.svg", shape.render())
    }
    console.log("Generated logo.svg")
})