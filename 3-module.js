// Module
//CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./4-nameModule");
const sayHi = require("./5-functionModule");
sayHi(names.john);
sayHi(names.peter);
