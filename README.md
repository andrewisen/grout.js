<h1 align="center">
  <br>
  <img src="resources/logo.png?raw=true" alt="Grout.js" width="200">
  <br>
  Grout.js
  <br>
</h1>

<h4 align="center">A small (~2KB) JavaScript module for reading <a href="https://www.bevercontrol.com/en" target="_blank">Bever Control's</a> rock grouting files.</h4>

<p align="center">
    <img src="https://github.com/andrewisen/grout.js/actions/workflows/ci.yml/badge.svg"
         alt="Status">
</p>

## Key Features

-   Parse <a href="https://www.bevercontrol.com/en" target="_blank">Bever Control's</a> custom XML files (ver. 1.5)
-   Typescript support

## Rock Grouting Toolkit

[Rock Grouting Toolkit](https://app.rockgroutingtoolkit.com) is using `Grout.js` to generate each graph.

<img src="resources/screenshot.gif?raw=true"
         alt="Screenshot">

This module helps you create a similar application.

## Install

You can install Grout.js from a CDN or NPM. Note that it's named `grout-js`.

### CDN

You can download the latest version of Grout.js from the content delivery network (CDN) [jsDelivr](https://www.jsdelivr.com).

Regular:
`<script src="https://cdn.jsdelivr.net/gh/andrewisen/grout.js/dist/grout.min.js"></script>`

As Module:
`<script src="https://cdn.jsdelivr.net/gh/andrewisen/grout.js/dist/grout.module.min.js"></script>`

### NPM

You can use NPM to install Grout.js. Simply run:
`npm i grout-js`

## How To Use

Regular:

```javascript
import * from 'grout-js';
var grout = new Grout();
var operatingLogs = groutFile.init(xmlString);
```

As Module:

```javascript
import { Grout } from 'grout-js';
var grout = new Grout();
var operatingLogs = groutFile.init(xmlString);
```

`Todo`

## Example

`Coming soon`

## Contact

[hello@rockgroutingtoolkit.com](hello@rockgroutingtoolkit.com)
