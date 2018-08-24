const path = require('path')
const rootPath = path.resolve(__dirname, '../../')
const gitUtil = require(path.resolve(rootPath, 'src/util/gitUtil'))

const {deleteBr} = gitUtil

test('gitUtil.', () => {
  expect(deleteBr).not.toThrow()
})
