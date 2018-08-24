const path = require('path')
const rootPath = path.resolve(__dirname, '../')
const commonPackage = require(path.resolve(rootPath, 'node_modules/@ys/common_dependency/package.json'))

function f () {
  const {dependencies} = commonPackage

  for (let ele in dependencies) {
    /* eslint-disable global-require */
    require(ele)
  }
}
test('common dependencies installed', () => {
  expect(f).not.toThrow()
})
