const fs = require('fs');
const baseUrl = './src/tracker/modules/dist'

const getModulePath = (moduleName) => `${baseUrl}/${moduleName}.bundle.js`

module.exports = {
  inject: async ({ page, modules = [] }) => {
    for (const moduleName of modules) {
      await page.evaluate(fs.readFileSync(getModulePath(moduleName), 'utf8'));
    }
  }
}