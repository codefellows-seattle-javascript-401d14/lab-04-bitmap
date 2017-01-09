Lab 04 - Bitmap Project
===
Transform bitmaps in the command line
Built by Irvine, Jaren, and Kenneth
---
## Usage
`node index.js <transform name> <input filepath> <output filepath>`

Available transforms:
- `random` will randomize the color scheme
- `grey` will output the image in grey scale
- `invert` will output a negative of the image
File paths must be relative to the current directory.

## Description
This lab lets the user interact with the command line interface to use transform functions on an existing bitmap file and save the resulting image in a new file in the outputs folder.
There are five core modules:
- **bitmap-constructor.js**
 - Creates a bitmap object from parsing the input bitmap file or buffer.
- **read-bitmap.js**
 - Uses the `fs.readFile` method and the bitmap constructor to create a new bitmap object from the parsed data.
- **transforms.js**
 - `.randomColors()` will randomize the rgb values of each color
 - `.greyScale()` will average the rgb values of each color to create a monochromatic image
 - `.invertColors()` will assign inverted rgb values to make a negative image
- **write-bitmap.js**
 - Uses the `fs.writeFile` method to write the transformed bitmap object to a new bitmap file in the outputs folder.

 - **index.js**
  - The main module that invokes the other modules and passes into them the command line arguments.

## Bitmap Specification
Every bitmap file mainly consists of four sections:
- Bitmap file header
- DIB (device-independent bitmap) header
- Color table
- Pixel array

#### File header
The application reads this first to identify it as a BMP file.
This block of the buffer is 14 bytes long and contains the:
- header field -- usually BM
- file size in bytes
- reserved bytes
- the offset which indicates the starting point of the pixel array

#### DIB header
For this project, this block is 40 bytes long and contains info about the image such as width, height, bits per pixel, vertical/horizontal resolution, etc...
These properties are useful to keep track of for transforms such as stretching or making mirror images, but since the available transforms only modify the color table they are not used.

#### Color table
This block contains the color palette. Each color is represented by 4 bytes: red, green, blue, and alpha. The transforms in this project do not account for the alpha value and so only modify the rgb values.

#### Pixel array
This is the bulk of the bitmap data that details how to place each pixel of the image. Although it doesn't get modified in the current iteration of this project, it is included as a property of the bitmap object in the constructor module in case we want to add transforms using it in the future.

More info on the [bitmap file format](https://en.wikipedia.org/wiki/BMP_file_format)
