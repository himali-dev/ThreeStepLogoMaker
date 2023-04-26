// initialized inquirer module for questions
const inquirer = require("inquirer");
// logo class with constructor
class Logo{
  constructor(){
      this.textElement = ''
      this.shapeElement = ''
  }
  render(){

      return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="600" height="400">${this.shapeElement}${this.textElement}</svg>`
  }
  setTextElement(text,color){
      this.textElement = `<text x="300" y="150" font-size="120" text-anchor="middle" fill="${color}">${text}</text>`
  }
  setShapeElement(shape){
      this.shapeElement = shape.render()

  }

}
// Array of questions is created in order to make the logo in 3 steps
const questions = [
  {
      type: "input",
      name: "logoText",
      message: "Enter the charaters of your logo (Max: 3 characters only)",
  },
  {
      type: "input",
      name: "text-color",
      message: "Enter the color of the text:",
  },
  {
      type: "input",
      name: "shape",
      message: "Enter the color of the shape:",
  },
  {
      type: "list",
      name: "image",
      message: "Which shape would you like for your logo?",
      choices: ["Triangle", "Square", "Circle"],
  },
];


// write data to svg file
function writeLogo(fileName, data) {
	console.log("Writing [" + data + "] to file [" + fileName + "]")
    filesystem.writeLogo(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Hurray, you have Generated a logo.svg in just 3 steps!");
    });
}

async function init() {
    console.log("Starting init");
	var svgString = "";
	var svg_file = "logo.svg";

// Capture answers
const answers = await inquirer.prompt(questions);

	//logo_text
	var logo_text = "";
	if (answers.logoText.length > 0 && answers.logoText.length < 4) {
		// 1-3 chars, valid entry
		logo_text = answers.logoText;
	} else {
		// 0 or 4+ chars, invalid entry
		console.log("Please make sure to have text length of max 3 chars");
        return;
	}
	console.log("Logo text: [" + logo_text + "]");
