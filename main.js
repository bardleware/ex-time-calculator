const fs = require('fs')
const data = require('./network-plus')

fs.writeFile("./test.json", JSON.stringify(data), err => {
  if (err) {
    console.log(err)
  }
  console.log("file Saved Successfully")
})
