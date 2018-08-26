
const path = require('path')
const rootPath = path.resolve(__dirname, '../../')
const ModuleUtil = require(path.resolve(rootPath, 'src/util/ModuleUtil'))
const {requireAll} = ModuleUtil
const resourceFolder = path.resolve(rootPath, 'test/resource')

test('ModuleUtil requireAll', () => {
  const result = requireAll(path.resolve(resourceFolder, 'ModuleUtil'))
  expect(result.obj.a).toBe(12)
  expect(result.obj2.b).toBe(12)
})
