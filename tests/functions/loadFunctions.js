// const { config } = require("../../wdio.conf.js")
const { elementsAndroid } = require("../components/android/elements.js")
const { elementsIos } = require("../components/ios/elements.js")
const { fixtureStagingAndroid } = require("../fixtures/android/data/fixture.staging.js")
const { fixtureProductionAndroid } = require("../fixtures/android/data/fixture.production.js")
const { fixtureStagingIos } = require("../fixtures/ios/data/fixture.staging.js")
const { fixtureProductionIos } = require("../fixtures/ios/data/fixture.production.js")
const { assertionStagingAndroid } = require("../fixtures/android/assertions/assertions.staging.js")
const { assertionProductionAndroid } = require("../fixtures/android/assertions/assertions.production.js")
const { assertionStagingIos } = require("../fixtures/ios/assertions/assertions.staging.js")
const { assertionProductionIos } = require("../fixtures/ios/assertions/assertions.production.js")

// Global variables
const platform = 'android'
const application = 'ebac'
const environment = 'production'
let element, fixture, assertion;

exports.loadElements = () => {
    if (platform == 'android') {
        switch (application) {
            case 'ebac':
                element = elementsAndroid.ebac
                return element
        }
    }

    if (platform == 'ios') {
        switch (application) {
            case 'ebac':
                element = elementsIos.ebac
                return element
        }
    }
}

exports.loadFixtures = () => {
    if (platform == 'android') {
        if (environment == 'staging') {
            switch (application) {
                case 'ebac':
                    fixture = fixtureStagingAndroid.ebac
                    return fixture
            }
        }

        if (environment == 'production') {
            switch (application) {
                case 'ebac':
                    fixture = fixtureProductionAndroid.ebac
                    return fixture
            }
        }
    }

    if (platform == 'ios') {
        if (environment == 'staging') {
            switch (application) {
                case 'ebac':
                    fixture = fixtureStagingIos.ebac
                    return fixture
            }
        }

        if (environment == 'production') {
            switch (application) {
                case 'ebac':
                    fixture = fixtureProductionIos.ebac
                    return fixture
            }
        }
    }
}

exports.loadAssertions = () => {
    if (platform == 'android') {
        if (environment == 'staging') {
            switch (application) {
                case 'ebac':
                    assertion = assertionStagingAndroid.ebac
                    return assertion
            }
        }

        if (environment == 'production') {
            switch (application) {
                case 'ebac':
                    assertion = assertionProductionAndroid.ebac
                    return assertion
            }
        }
    }

    if (platform == 'ios') {
        if (environment == 'staging') {
            switch (application) {
                case 'ebac':
                    assertion = assertionStagingIos.ebac
                    return assertion
            }
        }

        if (environment == 'production') {
            switch (application) {
                case 'ebac':
                    assertion = assertionProductionIos.ebac
                    return assertion
            }
        }
    }
}