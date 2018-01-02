const fs = require('fs')
const data = require('./network-plus')
const parseCSV = require('./calculate-time')
const writeCSV = require('./writeCSV')

const theCSV = data.sections.reduce((csvString, currentSection) => {
  return csvString + parseCSV(currentSection.name, currentSection.t)
},'')

writeCSV( `network_plus_${new Date()}`, theCSV )
