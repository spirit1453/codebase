/* eslint-disable global-require */
const fs = require('fs')
const {removeExt} = require('./FileUtil')
const path = require('path')
const debugLog = require('debug')('debug')

class Cls {
  static requireAll (folderPath) {
    const result = {}
    const fileAry = fs.readdirSync(folderPath)
    for (let ele of fileAry) {
      if (ele.endsWith('.js')) {
        const fileName = removeExt(ele)
        result[fileName] = require(path.resolve(folderPath, ele))
      }
    }
    debugLog(`${result}`)

    return result
  }
}

Object.freeze(Cls)
module.exports = Cls
