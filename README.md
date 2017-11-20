# How to use
1. Check out the repository
2. Navigate to root directory in bash or cmdline
3. run "npm install"
4. run "gulp"
5. build version will be output in folder /dist

# Optimizations
## Main Site
Gulp Minimize Automization for:
html, css, js, img, optimizations for images
Manually optimized image(s)

Source:
https://github.com/alferov/awesome-gulp#minification
https://css-tricks.com/gulp-for-beginners/

## Optimize pizza.html

Refactored:
* function changePizzaSizes(size) -> Removed all function declarations
* Solved the capitalization of pizza names with CSS instead of JavaScript
* Changed number of moving pizzas to availHeight and width - https://developer.mozilla.org/en-US/docs/Web/API/Screen
* multiple small improvements 
