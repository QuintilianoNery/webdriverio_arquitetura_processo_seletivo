const { loadElements, loadFixtures, loadAssertions } = require("../../functions/loadFunctions.js");
// const { checkElementAndVisibleText } = require("../../functions/common.js");
const { expect } = require('@wdio/globals');
const { logout } = require("../../functions/common.js");


// Global variables
const element = loadElements()
const fixture = loadFixtures()
const assertion = loadAssertions()


//deveria verificar os elementos o que acontece antes de preencher os campos, onde estão desabilitados
//Deveria validar elementos importantes da tela
afterEach(async () => {
    await driver.pause(5000)
})

describe('Login', () => {
    afterEach(async () => {
        //Logout sucessfully
        await logout(
            element.myStoreHomePage.btnMenu,
            element.menu.btnConfiguration,
            element.menu.configuration.btnLogout,
            element.menu.configuration.btnConformLogout,
            element.home.btnLoginStore)
    })

    it('Realizar login com credencial válidaccc', async () => {
    //Realizar login com credencial válida
    if (await $(element.home.btnSkip).isDisplayed()) {
        await $(element.home.btnSkip).click()
    }
    //click button home
    await $(element.home.btnLoginStore).isDisplayed({ timeout: 30000 })
    await expect($(element.home.btnLoginStore)).toHaveText(assertion.home.btnLoginStore)
    await $(element.home.btnLoginStore).click()
    //Set value Website  
    await $(element.login.inputWebsiteAddress).isExisting()
    await $(element.login.inputWebsiteAddress).setValue(fixture.websiteAddress)
    await $(element.login.btnContinue).click()
    //Set email address
    await $(element.login.inputEmailAddress).isExisting()
    await $(element.login.inputEmailAddress).setValue(fixture.login.valid.user)
    await $(element.login.btnLoginContinue).click()
    //Set password
    await $(element.login.avatarIcon).isDisplayed({ timeout: 30000 })
    await $(element.login.inputPassword).isExisting()
    await $(element.login.inputPassword).setValue(fixture.login.valid.password)
    await $(element.login.btnContinue).click()
    //Validate Login sucessfully
    await $(element.myStoreHomePage.titleMyStoreHomePage).isDisplayed()
    await $(element.myStoreHomePage.subTitleMyStoreHomePage).isDisplayed()
    await $(element.myStoreHomePage.myStoreStats).isDisplayed()
    await $(element.myStoreHomePage.navigationButtons).isDisplayed()
});
});