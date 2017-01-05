401 JS --  Lab 04 bitmap
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  
  
## Learning Objectives  
* Students will be able to manipulate binary data using nodejs Buffers 
* Students will be able to architect modular solutions to solving problems

## Resources  
* [Bitmap Specification](https://en.wikipedia.org/wiki/BMP_file_format)
* [NodeJS Buffer docs](https://nodejs.org/api/buffer.html)

## Requirements  
#### Configuration  
<!-- list of files, configurations, tools, ect that are required -->
Your lab directory must include  
* **README.md** -- with a documention about your lab
* **.gitignore** -- with a robust gitignore
* **.eslintrc** -- with the class .eslintrc file
* **.eslintignore** -- with the class .eslintignore
* **.package.json** -- with all dependencies and dev-dependencies 
* **assets/** -- directory for holding image files
* **test/** -- directory for holding unit and integration tests
* **lib/** -- directory for holding program helper modules
* **model/** -- directory for holding object constructor modules
* **index.js** -- main CLI program

 
#### Feature Tasks  
* Create a module **index.js** that will be used as a CLI for transforming bitmap images
 * Your CLI should take three arguments 
    1. tranform name
    2. input file path
    3. output file path
* Create a `Bitmap` constructor module for pasring the bitmap buffer according to the bitmap specification
* Create helper module(s) for transforming the bitmap instance
 * here are some transform ideas (**don't limit yourself to these!!!!**)
    1. grey scale
    2. invert
    3. random colors
    4. mirror image
    5. add a border
    6. tint with a color

###### Here is a proposal for how your CLI might function   
1. Open the bitmap file using fs module and read it into a buffer
2. Use a `Bitmap` constructor to parse the buffer's "bitmap headers" 
3. Run a transform on the bitmap instance
4. Convert the bitmap into a buffer
5. Write the buffer into a new file

####  Documentation  
* Wriate a project description
* Write documentation about the bitmap specification

#### Testing  
* Write unit test every function in your project (including any constructors)
 * Make sure you test edge cases!

## Rubric  
* 2ps Configuration
* 3pts Feature Tasks
* 3pts Tests
* 2pts Documentation
