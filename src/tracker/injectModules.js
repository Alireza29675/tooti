const fs = require('fs');
const baseUrl = './src/tracker/injector/dist'

const getModulePath = (moduleName) => `${baseUrl}/${moduleName}.bundle.js`

module.exports = async ({ page, modules = [] }) => {
  for (const moduleName of modules) {
    await page.evaluate(fs.readFileSync(getModulePath(moduleName), 'utf8'));
  }
}