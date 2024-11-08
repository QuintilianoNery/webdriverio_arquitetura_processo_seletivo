//Esta configuração é para executar com o BrowserStack, ainda não está funcionando, devido a falta de assinatura

const { config } = require('../../../wdio.shared.conf')

// Definitions for test execution
const appUrl = 'bs://' // APP URL
const releaseName = 'Testes automatizados EBAC' // Example: Release 1.1.1
const buildNumber = '1234' // buildNumber app
const deviceName = 'Samsung Galaxy S10e'
const deviceVersion = '9.0'

config.specs = [
  '../../../../tests/specs/android/**.spec.js',
]

config.services = [
  [
    'browserstack',
    {
      app: process.env.BROWSERSTACK_APP_ID || appUrl,
      buildIdentifier: '#${BUILD_NUMBER}',
      browserstackLocal: true,
      testObservability: true,
      testObservabilityOptions: {
        'projectName': 'Automação de testes estudo EBAC - APP WooComerce',
        'buildName':'Automated test : 123abc',
        'buildTag': `Build Number: ${buildNumber}`
      },
    },
  ]
]

config.capabilities = [{
  build: process.env.BROWSERSTACK_BUILD_NAME,
  projectName: 'Automação de testes estudo EBAC - APP WooComerce',
  name: 'UIAutomator2',
  deviceName: deviceName,
  platformVersion: deviceVersion,
  platformName: 'android',
  autoGrantPermissions: true,
  fullReset: true,
  language: 'pt',
  locale: 'BR'
}]
config.maxInstances = 1

config.platform = 'android'
config.application = 'WOOCOMMERCE'
config.environment = 'production'

exports.config = config;