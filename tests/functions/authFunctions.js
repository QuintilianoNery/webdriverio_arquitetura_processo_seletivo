const { expect } = require('@wdio/globals');

exports.login = async (btnSkip, btnLoginStore, assertLoginStore, inputWebsiteAddress, fixWebsiteAddress, btnContinue, inputEmailAddress, fixValidUser, btnLoginContinue, avatarIcon, inputPassword, fixPassword) => {
    if (await $(btnSkip).isDisplayed()) {
        await $(btnSkip).click()
    }
    //click button home
    await $(btnLoginStore).isDisplayed({ timeout: 30000 })
    await expect($(btnLoginStore)).toHaveText(assertLoginStore)
    await $(btnLoginStore).click()
    //Set value Website  
    await $(inputWebsiteAddress).isExisting()
    await $(inputWebsiteAddress).setValue(fixWebsiteAddress)
    await $(btnContinue).click()
    //Set email address
    await $(inputEmailAddress).isExisting()
    await $(inputEmailAddress).setValue(fixValidUser)
    await $(btnLoginContinue).click()
    //Set password
    await $(avatarIcon).isDisplayed({ timeout: 30000 })
    await $(inputPassword).isExisting()
    await $(inputPassword).setValue(fixPassword)
    await $(btnContinue).click()
}

exports.logout = async (btnMenu, btnConfiguration, btnLogout, btnConformLogout, btnLoginStore) => {
    //Logout sucessfully
    await $(btnMenu).waitForDisplayed({ timeout: 30000 })
    await $(btnMenu).isDisplayed({ timeout: 10000 })
    await $(btnMenu).click()
    await $(btnConfiguration).click()
    await $(btnLogout).click()
    await $(btnConformLogout).isDisplayed()
    await $(btnConformLogout).click()
    await $(btnLoginStore).isDisplayed()
};