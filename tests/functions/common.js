exports.checkElementAndVisibleText = async (element, text) => {
    await $(element).isDisplayed()
    await expect($(element)).toHaveText(text)
};

exports.setElementValueAndClick = async (element, text) => {
    await $(element.login.inputWebsiteAddress).isExisting()
    await $(element.login.inputWebsiteAddress).setValue(fixture.websiteAddress)
    await $(element.login.btnContinue).click()
};

exports.logout = async (menu, configuration, logout, ConformLogout, loginStore) => {
    //Logout sucessfully
    await $(menu).waitForDisplayed({ timeout: 30000 })
    await $(menu).isDisplayed({ timeout: 10000 })
    await $(menu).click()
    await $(configuration).click()
    await $(logout).click()
    await $(ConformLogout).isDisplayed()
    await $(ConformLogout).click()
    await $(loginStore).isDisplayed()
};