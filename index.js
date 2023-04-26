// Array of questions is created in order to make the logo in 3 steps
const questions = [
  {
      type: "input",
      name: "text",
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
