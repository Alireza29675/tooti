const baseUrl = './src/tracker/injector'

const getScriptModulePath = (moduleName) => `${baseUrl}/js/${moduleName}.js`
const getStyleModulePath = (moduleName) => `${baseUrl}/css/${moduleName}.css`

module.exports = {
  injectScripts: async ({ page, modules = [] }) => {
    for (let moduleName of modules) {
      await page.addScriptTag({ path: getScriptModulePath(moduleName) })
    }
  },
  injectStyles: async ({ page, modules = [] }) => {
    for (let moduleName of modules) {
      await page.addStyleTag({ path: getStyleModulePath(moduleName) })
    }
  }
}