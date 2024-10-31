const { expect } = require('@wdio/globals');

exports.checkElementAndVisibleText = async (element, text) => {
    await $(element).isDisplayed()
    await expect($(element)).toHaveText(text)
};

exports.setElementValueAndClick = async (element, text) => {
    await $(element.login.inputWebsiteAddress).isExisting()
    await $(element.login.inputWebsiteAddress).setValue(fixture.websiteAddress)
    await $(element.login.btnContinue).click()
};

exports.takeScreenshot = async () => {
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '');
    const filename = `screenshot-${timestamp}.png`;
    await browser.saveScreenshot(`./screenshots/${filename}`);    
};
