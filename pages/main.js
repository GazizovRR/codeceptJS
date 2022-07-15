const { I } = inject();

module.exports = {
  fields: {
    email: 'input[name="email"]',
    password: 'input[name="password"]',
    
  },
  button: {
    login: 'button[class="sc-gsTCUz iqPZMe admin-bro_Button"]',
  },

  async login (email, password) {
    I.click(this.fields.email)
    I.fillField(this.fields.email, email)
    I.click(this.fields.password)
    I.fillField(this.fields.password, password)
    I.click(this.button.login)
  },
  // insert your locators and methods here
}
