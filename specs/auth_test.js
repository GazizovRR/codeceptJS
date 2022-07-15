const assert = require ('assert')
Feature('auth')
Before(({I}) => {
    I.amOnPage('https://admin-bro-example-app-staging.herokuapp.com/admin/login')
    I.resizeWindow(1440, 920)
})
Scenario('Demo user login', async ({ I, mainPage, currentPage }) => {
    await mainPage.login('test@example.com', 'password')
    const name = await currentPage.getProfileName()
    assert.deepStrictEqual(name, 'test@example.com', 'Wrong user name')
})
Scenario('Demo user logout', async ({ I, mainPage, currentPage }) => {
    await mainPage.login('test@example.com', 'password')
    await currentPage.logout()
    const phrase = await currentPage.getPhrase()
    assert.deepStrictEqual(phrase, 'Welcome', 'Wrong phrase')
})
