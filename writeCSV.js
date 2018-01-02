const fs = require('fs')

module.exports = ( name, thread, encoding = 'utf8' ) => {
  fs.writeFile(`./file/${ name }.csv`, thread, encoding, err => {
    if (err) {
      console.log(`ERROR: ${ err }`)
    }
    console.log("SUCCESS! FILE SAVED SUCCESSFULLY.")
  })
}