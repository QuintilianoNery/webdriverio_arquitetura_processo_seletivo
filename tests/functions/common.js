const { expect } = require('@wdio/globals');

exports.checkElementAndVisibleText = async (element, text) => {
    await $(element).isDisplayed()
    await expect($(element)).toHaveText(text)
};

// exports.setElementValueAndClick = async (element, text) => {
//     await $(element.login.inputWebsiteAddress).isExisting()
//     await $(element.login.inputWebsiteAddress).setValue(fixture.websiteAddress)
//     await $(element.login.btnContinue).click()
// };

//Captura e salva screenshots
exports.takeScreenshot = async () => {
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '');
    const filename = `screenshot-${timestamp}.png`;
    await browser.saveScreenshot(`./screenshots/${filename}`);
};


//Deleta todos os screenshots
exports.deleteScreenshots = async () => {
    const fs = require('fs');
    const screenshotDir = './screenshots';

    if (fs.existsSync(screenshotDir)) {
        fs.readdirSync(screenshotDir).forEach(file => {
            if (file.endsWith('.png')) {
                fs.unlinkSync(`${screenshotDir}/${file}`);
            }
        });
    }
};

const fs = require('fs');
const path = require('path');

exports.deleteAllureReports = async () => {
    const reportDir = './allure-report';
    const resultsDir = './allure-results';

    if (fs.existsSync(reportDir)) {
        fs.readdirSync(reportDir).forEach((file) => {
            const filePath = path.join(reportDir, file);
            fs.unlinkSync(filePath);
        });
    }

    if (fs.existsSync(resultsDir)) {
        fs.readdirSync(resultsDir).forEach((file) => {
            const filePath = path.join(resultsDir, file);
            fs.unlinkSync(filePath);
        });
    }
};