//Every file in node is module
// module - We store only minimum

const names = require("./names")
const sayHi = require('./utils')
const data = require('./alternate')
//console.log(names)

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)