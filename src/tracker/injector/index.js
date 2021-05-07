const fs = require('fs');
const baseUrl = './src/tracker/injector'

const getScriptModulePath = (moduleName) => `${baseUrl}/js/${moduleName}.js`
const getStyleModulePath = (moduleName) => `${baseUrl}/css/${moduleName}.css`

module.exports = {
  injectScripts: async ({ page, modules = [] }) => {
    for (const moduleName of modules) {
      await page.evaluate(fs.readFileSync(getScriptModulePath(moduleName), 'utf8'));
    }
  },
  injectStyles: async ({ page, modules = [] }) => {
    for (const moduleName of modules) {
      await page.addStyleTag({ path: getStyleModulePath(moduleName) })
    }
  }
}