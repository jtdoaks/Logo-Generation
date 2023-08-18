# Shape Logo Generator - README

This repository contains a simple command-line application for generating SVG logos based on different shapes. The user is prompted to choose a shape (Circle, Square, or Triangle), provide three letters, a shape color, and a text color. The application then generates an SVG logo with the specified parameters and saves it as "logo.svg" in the "./output" directory.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Learnings](#learnings)

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run the following command to install the necessary dependencies: npm install.

## Usage

1. After installing the dependencies, navigate to the project directory.
2. Open a terminal and run the following command: node.index.js.
3. The application will prompt you to:
- Pick a shape (Circle, Square, Triangle)
- Enter three letters
- Enter shape color
- Enter text color
4. Once you've provided the required information, the application will generate an SVG logo based on your inputs and save it as "logo.svg" in the "./output" directory.

## Dependencies

This application relies on the following external libraries:

- [`inquirer`](https://www.npmjs.com/package/inquirer): Used to create interactive command-line prompts for user input.
- [`fs`](https://nodejs.org/api/fs.html): The built-in Node.js file system module, used to write the generated SVG logo to a file.

