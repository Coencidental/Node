const fs = require("fs")

fs.appendFile('foo.txt', "Hello content!", (err) => {
  if(err) {
    console.error(err)
  } else {
    console.log('Saved!')
  }
})

console.log("Started append")