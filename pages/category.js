const { I } = inject();

module.exports = {
  locators: {
    elementTitle: 'section[data-testid="property-list-title"]',
    elementAction: 'div[class="sc-khIgXV eZiEu admin-bro_ButtonGroupItem"]',
    showAction: 'a[data-testid="action-show"]',
    editAction: 'a[data-testid="action-edit"]',
    deleteAction: 'a[data-testid="action-delete"]',
    elementId: 'td[data-property-name="_id"] section',
    idInForm: 'section[data-testid="property-show-_id"] section',
    emptyList: 'h4[class="sc-dIvqjp eWrPxJ sc-kfYqjs jpcbJh admin-bro_Header admin-bro_H4"]',
  },
  fields: {
    title: '#title',
    owner: '#owner',
    nested: 'input[id="nested.field"]',
    nestedValue: 'input[id="nested.value"]',
  },
  buttons: {
    createNew: 'a[data-testid="action-new"]',
    save: 'button[data-testid="button-save"]',
    cancel: 'a[class="styled-back-button__StyledLink-uyhg9d-0 esrSCj"]',
  },
  async createNew(title, owner, nested, nestedValue) {
    I.waitForVisible(this.buttons.createNew)
    I.click(this.buttons.createNew)
    I.fillField(this.fields.title, title)
    I.fillField(this.fields.owner, owner)
    I.fillField(this.fields.nested, nested)
    I.fillField(this.fields.nestedValue, nestedValue)
    I.click(this.buttons.save)
  },
  async show() {
    I.waitForVisible(this.locators.elementAction)
    I.moveCursorTo(this.locators.elementAction)
    I.click(this.locators.showAction)
    I.waitForVisible(this.buttons.cancel)
  },
  async editTitle(title) {
    I.waitForVisible(this.locators.elementAction)
    I.moveCursorTo(this.locators.elementAction)
    I.click(this.locators.editAction)
    I.waitForVisible(this.buttons.cancel)
    I.fillField(this.fields.title, title)
    I.click(this.buttons.save)
  },
  async delete() {
    I.waitForVisible(this.locators.elementAction)
    I.moveCursorTo(this.locators.elementAction)
    I.amAcceptingPopups()
    I.click(this.locators.deleteAction)
    I.acceptPopup()
  },
  async getFirstTitle() {
    I.wait(2)
    const firstTitle = await I.grabTextFrom(this.locators.elementTitle)
    return firstTitle
  },
  async getPhrase() {
    const text = await I.grabTextFrom(this.locators.emptyList)
    return text
  },
  // insert your locators and methods here
}
