const { I } = inject();

module.exports = {
  fields: {
    profileName: 'section[class="sc-dIsAE idZUqT admin-bro_Box"] div[class="sc-iJCRLp dpQocQ"]',
    greetings: 'h2'
  },
  button: {
    menu: 'section[class="sc-dIsAE dHfQEO admin-bro_Box"]',
    logout: 'a[class="sc-dIsAE sc-jgPznn idZUqT dnrmlv admin-bro_Box"]',
  },
  async getProfileName() {
    const text = await I.grabTextFrom(this.fields.profileName)
    return text
  },
  async logout() {
    I.waitForVisible('section[class="sc-dIsAE dHfQEO admin-bro_Box"]')
    I.moveCursorTo('section[class="sc-dIsAE dHfQEO admin-bro_Box"]')
    I.click(this.button.logout)
  },
  async getPhrase() {
    const text = await I.grabTextFrom(this.fields.greetings)
    return text
  },
  async openCategories() {
    I.waitForVisible('a[class="sc-dIsAE sc-ArjOu hqCygR jORYPE admin-bro_Box"]')
    I.click('a[class="sc-dIsAE sc-ArjOu hqCygR jORYPE admin-bro_Box"]')
    I.waitForVisible('a[href="/admin/resources/Category"]')
    I.click('a[href="/admin/resources/Category"]')
  }
  // insert your locators and methods here
}
