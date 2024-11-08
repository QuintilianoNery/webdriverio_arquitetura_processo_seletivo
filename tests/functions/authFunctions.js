const { expect } = require('@wdio/globals');
const { checkElementAndVisibleText, takeScreenshot } = require("../../tests/functions/common.js");


exports.login = async (btnSkip, btnLoginStore, assertLoginStore, inputWebsiteAddress, fixWebsiteAddress, btnContinue, inputEmailAddress, fixValidUser, btnLoginContinue, avatarIcon, inputPassword, fixPassword) => {
    //Clicar no botão Skip Onboarding
    if (await $(btnSkip).isDisplayed()) {
        await $(btnSkip).click()
    }
    //Clicar no botão home
    await $(btnLoginStore).isDisplayed({ timeout: 30000 })
    await expect($(btnLoginStore)).toHaveText(assertLoginStore)
    await $(btnLoginStore).click()
    //Preencher campo Website
    await $(inputWebsiteAddress).waitForDisplayed({ timeout: 30000 })
    await $(inputWebsiteAddress).isExisting()
    await $(inputWebsiteAddress).setValue(fixWebsiteAddress)
    await $(btnContinue).click()
    //Preencher email
    await $(inputEmailAddress).isExisting()
    await $(inputEmailAddress).setValue(fixValidUser)
    await $(btnLoginContinue).click()
    //Preencher senha
    await $(avatarIcon).isDisplayed({ timeout: 30000 })
    await $(inputPassword).isExisting()
    await $(inputPassword).setValue(fixPassword)
    await $(btnContinue).click()
}

exports.logout = async (btnMenu, btnConfiguration, btnLogout, btnConfirmLogout, btnLoginStore) => {
    //Logout com sucesso
    await $(btnMenu).waitForDisplayed({ timeout: 30000 })
    await $(btnMenu).isDisplayed({ timeout: 10000 })
    await $(btnMenu).isExisting()
    await $(btnMenu).click()

    await $(btnConfiguration).waitForDisplayed({ timeout: 30000 })
    await $(btnConfiguration).isDisplayed({ timeout: 10000 })
    await $(btnConfiguration).click()

    await $(btnLogout).waitForDisplayed({ timeout: 30000 })
    await $(btnLogout).isDisplayed({ timeout: 10000 })
    await $(btnLogout).click()

    await $(btnConfirmLogout).waitForDisplayed({ timeout: 30000 })
    await $(btnConfirmLogout).isDisplayed({ timeout: 10000 })
    
    await takeScreenshot();
    await $(btnConfirmLogout).click()
    
    await $(btnLoginStore).isDisplayed()
};