const path = require('path')
const rootPath = path.resolve(__dirname, '../../')
const CommonUtil = require(path.resolve(rootPath, 'src/util/CommonUtil'))
const {removeExt} = CommonUtil

test('CommonUtil removeExt', () => {
  expect(removeExt('dosth.js')).toBe('dosth')
  expect(removeExt('dosth')).toBe('dosth')
  expect(removeExt('.dosth')).toBe('')
})
