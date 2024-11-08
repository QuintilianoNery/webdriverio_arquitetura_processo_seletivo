const { loadElements, loadFixtures, loadAssertions } = require("../../functions/loadFunctions.js");
const { login, logout } = require("../../functions/authFunctions.js");
const { checkElementAndVisibleText, takeScreenshot } = require("../../functions/common.js");

// Variáveis globais
const element = loadElements()
const fixture = loadFixtures()
const assertion = loadAssertions()

//Finaliza a sessão após executar cada teste
afterEach(async () => {
    await driver.pause(5000)
})

describe('Login', () => {
    afterEach(async () => {
        //Inserindo informações para a função Logout
        await logout(
            element.menu.btnMenu,
            element.menu.btnConfiguration,
            element.menu.configuration.btnLogout,
            element.menu.configuration.btnConfirmLogout,
            element.home.btnLoginStore
        )
    })

    it('Realizar login com sucesso', async () => {
        //Inserindo informações para a função Login 
        await login(
            element.home.btnSkip,
            element.home.btnLoginStore,
            assertion.home.btnLoginStore,
            element.login.inputWebsiteAddress,
            fixture.websiteAddress,
            element.login.btnContinue,
            element.login.inputEmailAddress,
            fixture.login.valid.user,
            element.login.btnLoginContinue,
            element.login.avatarIcon,
            element.login.inputPassword,
            fixture.login.valid.password,
        )
        await checkElementAndVisibleText(element.myStoreHomePage.textEbacStore, assertion.myStoreHomePage.subTitleMyStoreHomePage);
        await takeScreenshot();
    });
});

describe('Logout', () => {
    beforeEach(async () => {
        await login(
            element.home.btnSkip,
            element.home.btnLoginStore,
            assertion.home.btnLoginStore,
            element.login.inputWebsiteAddress,
            fixture.websiteAddress,
            element.login.btnContinue,
            element.login.inputEmailAddress,
            fixture.login.valid.user,
            element.login.btnLoginContinue,
            element.login.avatarIcon,
            element.login.inputPassword,
            fixture.login.valid.password
        )
    })
    it('Realizar logout com sucesso', async () => {
        await logout(
            element.menu.btnMenu,
            element.menu.btnConfiguration,
            element.menu.configuration.btnLogout,
            element.menu.configuration.btnConfirmLogout,
            element.home.btnLoginStore
        )
        await takeScreenshot();
    });
});

//Obs.: Foram criados dois testes, um para login e outro para logout, porém no dia a dia o ideal seria em apenas um teste realizar as as duas funcionalidades
//Porém como eu estava testando a função, resolvi criar testes apartados