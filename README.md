<h1 align="center">Automation Teste Mobile Appium WooCommerce</h1>

---

## Sumário
1. [Configuração do Ambiente](#configurando-o-ambiente)
2. [Instalação do Cmder (Opcional)](#2-instalação-do-cmder-opcional)
3. [Instalação do Java JDK 8 ou Superior](#3-instalação-do-java-jdk-8-ou-superior)
4. [Instalação do Android Studio](#4-instalação-do-android-studio)
5. [Instalação do Node.js](#5-instalação-do-nodejs)
6. [Instalação do Appium de forma global](#6-instalação-do-appium-de-forma-global)
7. [Configurar um dispositivo virtual no AVD Manager no Android Studio](#7-configurar-um-dispositivo-virtual-no-avd-manager-no-android-studio)
8. [Instalação do Appium Desktop](#8-instalação-do-appium-desktop)
9. [Configurar os Capabilitys](#9-configurar-os-capabilitys)
10. [Executar o teste de login localmente](#10-executar-o-teste-de-login-localmente)
11. [Executar o teste de login no Sauce Labs](#11-executar-o-teste-de-login-no-sauce-labs)
11. [Link do Board com os cenários de testes](#12)

---

## Configurando o Ambiente

### 1. Instalação do VScode e Extensões
- [Download VScode](https://code.visualstudio.com/download)
- Extensões recomendadas:
  - [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
  - [WebdriverIO](https://webdriver.io/)
  - [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

### 2. Instalação do Cmder (Opcional)
- [Download Cmder](https://cmder.net/)
- Configure nas Variáveis de Ambiente (`Path`) os caminhos:
  - `C:\cmder\vendor\git-for-windows\bin`
  - `C:\cmder\vendor\git-for-windows\usr\bin`

### 3. Instalação do Java JDK 8 ou Superior
- [Download Java JDK](https://www.oracle.com/br/java/technologies/javase/javase8-archive-downloads.html)
- **Variáveis de Ambiente**:
  - `JAVA_HOME`: caminho do JDK (ex.: `C:\Program Files\Java\jdk1.8.0_202`)
  - Adicione `%JAVA_HOME%\bin` ao `Path`.
- **Testar se as configurações estão OK**:
  - No terminal, ao inserir os comandos `echo %JAVA_HOME%` e `echo %PATH%`, deve ser mostrado o caminho completo das pastas java que foram configuradas

### 4. Instalação do Android Studio
- [Download Android Studio](https://developer.android.com/studio)
- Mantenha marcada a opção "Android Virtual Device" durante a instalação.
- Marcar na instalação do not import settings.

- **Configurações de Ambiente Android**:
  - Criar variáveis de ambiente em variáveis do SISTEMA com o caminho completo das pastas
    - Nome da Variável: `ANDROID_HOME`
    - valor da variável: `C:\Users\[SEU USUÁRIO AQUI]\AppData\Local\Android\Sdk`
  - Adicionar configurações na variável path do sistemaAdicionar configurações na variável path do sistema
  
    - `%ANDROID_HOME%\platform-tools`
    - `%ANDROID_HOME%\tools`
    - `%ANDROID_HOME%\tools\lib`
    - `%ANDROID_HOME%\tools\bin`

- **Testar se as configurações estão OK**:
    - No terminal, ao inserir os comandos `echo %ANDROID_HOME%` e `echo %PATH%`, deve ser mostrado o caminho completo das pastas java que foram configuradas

### 5. Instalação do Node.js
  - [Download Node.js](https://nodejs.org/en/)
    - Adicionar configurações na variável path do sistema: `C:\Program Files\nodejs\`
    - Mas verifique antes se não foi criada com a instalação

- **Confirme a Instalação**:
  - Execute no terminal `node --version`
  - Execute no terminal `npm --version`
 
 ### 6. Instalação do Appium de forma global
  - Execute no terminal `npm install appium -g`
  - Execute no terminal `npm install appium-doctor -g`

- **Iniciar o servidor Appium**
  - Comandos para iniciar o servidor Appium `appium`
  - comando realiza um diagnóstico no computador, para identificar se está preparado para criar sessões appium no android, caso não esteja, será mostrado erro
    - No terminal execute `appium-doctor --android`

- **Configuração no Android Studio**
  - Caso ocorra erro ao executar o comando `appium-doctor --android`, deve-se marcar as opções das duas imagens abaixo
    -  [Android SDK](https://i.stack.imgur.com/TIPNE.png)
    - [Android SDK 2](https://i.stack.imgur.com/a0mtv.png)

 ### 7. Configurar um dispositivo virtual no AVD Manager no Android Studio

- Abra o android studio
- Vá na opção AVD Manager
- Clique em Create Virtual Device
- Selecione o tipo de dispositivo Pixel 2 com a opção de play store * Mais leve para executar no computador
- Selecione a versão de imagem do android * Sugiro Instalar a release Android V9 Pie
- Depois de instalado, pode clicar em play para executar, mas antes execute o passo seguinte
- Para resolver um problema, clique em opções da coluna Actions e selecione Wipe Data, para resetar o Android com a as configurações padrão do android 

 ### 8. Instalação do Appium Desktop
- Baixe o [Appium desktop](https://appium.io/)
- Baixe o [Appium-Inspector](https://github.com/appium/appium-inspector/releases)

### 9. Configurar os Capabilitys
- Entenda como funciona as configurações dos capabilitys em: [Appium Documentation > Desired Capabilities](https://appium.io/docs/en/writing-running-appium/caps/)

- **Comando para conseguir pegar o ID e o Nome do Device físico para usar no capability**
  - Execute no terminal `adb devices`
  - Execute no terminal `adb devices -l`

- **Exemplo de Capability para o Appium Inspector**
```
{
  "platformName": "Android",
  "appium:platformVersion": "13",
  "appium:deviceName": "samsung-galaxy-s20",
  "appium:automationName": "UiAutomator2",
  "appium:appPackage": "com.woocommerce.android",
  "appium:appActivity": "com.woocommerce.android.ui.main.MainActivity",
  "appium:noReset": "true",
  "appium:udid": "SEU ID DO DEVICE ANDROID",
  "appium:appWaitActivity": "com.woocommerce.android.ui.*"
}
```

### 10. Executar o teste de login localmente
   -  Após ter configurado o ID do dispositivo no arquivo wdio.conf.js. execute o seguinte comando no terminal:
      - `npm run local:test`

### 11. Executar o teste de login no Sauce Labs
   -  Para executar o testes no device farmexecute o seguinte comando no terminal:
      - `npm run local:test`

    obs.: A configuração para executar com o Sauce Labs, ainda será revisada, portando não está funcionando 

### 12. Link do Board com os cenários de testes

[WebdriverIo Arquitetura Processo Seletivo - WooCommerce](https://github.com/users/QuintilianoNery/projects/7)