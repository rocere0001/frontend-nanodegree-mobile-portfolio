# About
This is the hand in for the Udacity Project on Page Speed Optimization.
## Example running version
### Main Page
https://rocere0001.github.io/frontend-nanodegree-mobile-portfolio/dist/index.html
### Pizza Site
https://rocere0001.github.io/frontend-nanodegree-mobile-portfolio/dist/views/pizza.html

# How to use
1. Check out the repository
2. Navigate to root directory in bash or cmdline
3. run "npm install"
4. run "gulp"
5. build version will be output in folder /dist
6. Check the pagespeed score on : /dist/index.html and /dist/views/pizza.html

# Optimizations
## Main Site
Gulp Minimize Automization for:
* html, css, js, img, optimizations for images
* set print media for print.css file
* Used webFont Loader for Google Font

Source:
https://github.com/alferov/awesome-gulp#minification
https://css-tricks.com/gulp-for-beginners/

## Pizza site

* function changePizzaSizes(size) -> De-nested all function declarations
* Solved the capitalization of pizza names with CSS instead of JavaScript
* Changed number of moving pizzas to availHeight and width - (Source) https://developer.mozilla.org/en-US/docs/Web/API/Screen
* Increased scroll speed with the debouncing of scroll events - (Source) https://www.html5rocks.com/en/tutorials/speed/animations/
* changed querySelector & querySelectorAll to getElement(s)ByClass/Id
* moved variable declarations out of for looop in function: updatePositions()
* Added transform: translateZ(0) & backface-visibility: hidden to enable hardware acceleration to /views/css/style.css
* changed cols and rows to the available Width and Height in updatePositions()