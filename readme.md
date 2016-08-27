# Tree-shaking example with Babel and Webpack

This repository shows how to configure Babel and Webpack to enable tree-shaking for development and production builds.

It will eliminate dead code not used by other modules if they have ES2015 module format.

The source code can be found in the ```app/``` folder,
where the main file ```car.js``` doesn't use all the dependencies from ```engine.js```.
The built and transpiled files can be found in the ```/dist``` folder.

For development build run ```npm run webpack``` (ES2015 -> ES5 bundle).

For production build run ```npm run webpack-prod``` (ES2015 -> ES5 bundle -> UglifyJS).

For ES2015 development build run ```npm run webpack-es2015``` (ES2015 -> ES2015 bundle).

For experimental production build run ```npm run webpack-es2015-prod``` (ES2015 -> ES2015 bundle -> Babili).
It uses the [Babili](https://github.com/babel/babili) ES6+ aware minifier 
and solves the issues what UglifyJS has.

Will replace UglifyJS with Babili when it gets stable.

It uses ```babel-preset-latest```, which includes ES2016 and ES2017 features also.
If you want only ES2015 replace the presets in ```.babelrc``` to this:

```
"presets": [
  [
    "es2015",
    {
      "loose": true,
      "modules": false
    }
  ]
]
```

### Requirements

- babel-preset-es2015 >= 6.13.0 or babel-preset-latest
- webpack >= 2.1.0-beta

### Known issues

When transpiling classes with Babel, it generates an IIFE with an assignment to the prototype.
It is considered as a side effect by UglifyJS and it skips removing of it.

See the issues below:

- [Webpack issue](https://github.com/webpack/webpack/issues/2899)
- [UglifyJS issue](https://github.com/mishoo/UglifyJS2/issues/1261)
