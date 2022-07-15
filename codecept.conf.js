const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './specs/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://admin-bro-example-app-staging.herokuapp.com/admin/login',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/main.js',
    currentPage: './pages/current.js',
    categoryPage: './pages/category.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptJS'
}