const { loadElements, loadFixtures, loadAssertions } = require("../../functions/loadFunctions.js");
const { login, logout } = require("../../functions/authFunctions.js");

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
            element.myStoreHomePage.btnMenu,
            element.menu.btnConfiguration,
            element.menu.configuration.btnLogout,
            element.menu.configuration.btnConformLogout,
            element.home.btnLoginStore)
    })

    it('Realizar login e logout com sucesso', async () => {
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
            fixture.login.valid.password
        )
    });
});