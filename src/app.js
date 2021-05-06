const addScriptTags = async (page) => {
  await page.addScriptTag({
    path: './src/client-scripts/css-path.js'
  })
  await page.addScriptTag({
    path: './src/client-scripts/tracker.js'
  })
}

const waitForNavigation = async (page) => {
  await page.waitForNavigation({ timeout: 0, waitUntil: 'load' })
  addScriptTags(page)
  waitForNavigation(page)
}

module.exports = async function app(browser) {
  const page = await browser.newPage();
  await page.exposeFunction('reportEvent', info => console.log(info));
  waitForNavigation(page)
  await page.goto('https://example.com');
}