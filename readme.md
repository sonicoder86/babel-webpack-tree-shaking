# Tree-shaking example with Babel and Webpack

This repository shows how to configure Babel and Webpack to enable tree-shaking for development and production builds.

It will eliminate dead code not used by other modules if they have ES2015 module format.

The source code can be found in the ```app/``` folder,
where the main file ```car.js``` doesn't use all the dependencies from ```engine.js```.
The built and transpiled files can be found in the ```/dist``` folder.

For development build run ```npm run webpack```.

For production build run ```npm run webpack-prod```.

For experimental production build run ```npm run webpack-babili```.
It uses the [babili](https://github.com/babel/babili) ES6+ aware minifier.

### Requirements

- babel-preset-es2015 >= 6.13.0
- webpack >= 2.1.0-beta

### Known issues

When transpiling classes with Babel, it generates an IIFE with an assignment to the prototype.
It is considered as a side effect by UglifyJS and it skips removing of it.

See the issues below:

- [Webpack issue](https://github.com/webpack/webpack/issues/2899)
- [UglifyJS issue](https://github.com/mishoo/UglifyJS2/issues/1261)

When minifying the bundled file with babili it removes unused classes in contrary to UglifyJS,
but it ignores ```comments: false``` flag so comments remain in the bundle.

- [Babili issue](https://github.com/babel/babili/issues/67)
