// const yargs = require('yargs')
// const {argv} = yargs
const childProcess = require('child_process')

const cmdUtil = {
    exec(cmd,option){
        option = option || {}
        const {log} = option
        const result = childProcess.exec(cmd).toString()
        if(log){
            console.log(log)
        }

        return result
    }
}

Object.freeze(cmdUtil)
module.exports = cmdUtil
