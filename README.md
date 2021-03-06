Chicago Restaurant Demo
02/12/18
Marc Hanger

## Installation
Download the app from GitHub 

Go to the starter directory and install the packages:
```bash
npm install
or for mac users you may have to use:

npm sudo install
or 
yarn install

## Start
Let's start up the server, run:
```bash
npm start
```

and done! The browser will popup and you can start seeing how many violations your favorite restaurants have!
Every changes to the file will refresh the browser automatically
and it'll also compile your changed TypeScripts files to Javascript files.



## Production

You can create production build by running:
```bash
npm run build
```
or you can create production build and then serve it using Browsersync by running:
```bash
npm run serve-build
```
The starter defaults to bundle using [SystemJS Builder extension](https://github.com/ngstarter/systemjs-extension).
There is [Webpack extension](https://github.com/ngstarter/webpack-extension) available too, feel free to swap it as you like.



based on Angular Starter:

[![Build Status](https://travis-ci.org/antonybudianto/angular-starter.svg?branch=master)](https://travis-ci.org/antonybudianto/angular-starter)
[![codecov](https://codecov.io/gh/antonybudianto/angular-starter/branch/master/graph/badge.svg)](https://codecov.io/gh/antonybudianto/angular-starter)
[![Dependency Status](https://david-dm.org/antonybudianto/angular-starter.svg)](https://david-dm.org/antonybudianto/angular-starter)
[![devDependency Status](https://david-dm.org/antonybudianto/angular-starter/dev-status.svg)](https://david-dm.org/antonybudianto/angular-starter#info=devDependencies)

> Live Production Build [Demo](https://antonybudianto.github.io/angular-starter/)

> [Angular Webpack Starter](https://github.com/antonybudianto/angular-webpack-starter) is out! Featuring [AoT compilation](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html), [Lazy loaded module](https://angular.io/docs/ts/latest/api/router/index/Routes-type-alias.html#!#sts=Lazy%20Loading), [Tree-shaking](https://medium.com/@Rich_Harris/tree-shaking-versus-dead-code-elimination-d3765df85c80#.103r6vl29) with [Webpack 2](https://webpack.github.io/docs/roadmap.html#2)

## Introduction
Welcome to Angular Starter!
This starter contains almost everything you need to start developing [Angular 2](https://angular.io/).

### Why choose this starter?
- Extensible via [ngstarter extensions](https://github.com/ngstarter)
- Complete workflow from serve, lint, unit test, e2e test, to bundling
- Support file-based and strong-typed [Environment Variables](https://github.com/antonybudianto/angular-starter/wiki/Environment-Variables)
- 100% code coverage
- 100% [CI/CD](https://github.com/antonybudianto/angular-starter/wiki/Continuous-Integration) pipeline ready
- No global package installation
- No module bundler coupling

### What's included?
* [npm](https://www.npmjs.com/) for package manager
* [TypeScript](http://www.typescriptlang.org/) for the base language
  * with [Typings](https://github.com/typings/typings) for TypeScript definition manager
* [Gulp](http://gulpjs.com/) for workflow (from *serve*, *watch*, *compile*, *test* to *build*)
* [Browsersync](https://www.browsersync.io/) for development server & reload capability
* [SystemJS](https://github.com/systemjs/systemjs) for module loader
* [Codelyzer](https://github.com/mgechev/codelyzer) for static code analyzer
* [Karma](http://karma-runner.github.io/) for test-runner
* [Jasmine](http://jasmine.github.io/) for test framework
* [Istanbul](https://github.com/gotwarlost/istanbul) for test coverage
  * with [Remap Istanbul](https://github.com/SitePen/remap-istanbul) for remapping Javascript to TypeScript coverage
* [SystemJS Builder](https://github.com/systemjs/builder) or [Webpack](https://webpack.github.io/) for module bundling in production

Please visit the [wiki](https://github.com/antonybudianto/angular2-starter/wiki) for more details.

## Prerequisites
You need to have [Node.js and npm](https://nodejs.org/en/)
- Support Node v6.9 - latest
- Support npm v3 - latest

[Global Gulp CLI](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) is not required, since you can map them to npm scripts, but a nice to have for development purpose.

## Extension
You can extend this starter with many extensions built by the community. Browse the extensions [here](https://github.com/ngstarter)

## Contributing
Feel free to submit a PR if there are any issues or new features, please read [this](https://github.com/antonybudianto/angular-starter/wiki/Contributing) before

## Special thanks
* For all contributors who have helped this starter improvement
* John Papa for his awesome [angular-styleguide](https://github.com/johnpapa/angular-styleguide) and [Tour of Heroes](https://github.com/johnpapa/angular2-tour-of-heroes)
* Julie Ralph for her [ng2-test-seed](https://github.com/juliemr/ng2-test-seed) which helped me a lot to get started with testing feature
* Minko Gechev for his [angular2-seed](https://github.com/mgechev/angular2-seed) and [angular2-ngc-rollup-build](https://github.com/mgechev/angular2-ngc-rollup-build) which helped a lot

## License
MIT
