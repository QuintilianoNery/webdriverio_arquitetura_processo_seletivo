exports.elementsAndroid = {
    ebac: {
        home: {
            btnCriateNewStore: 'android=new UiSelector().resourceIdMatches(".*:id/button_get_started")',
            btnLoginStore: 'android=new UiSelector().resourceIdMatches(".*:id/button_login_store")',
            btnSkip: 'android=new UiSelector().resourceIdMatches(".*:id/button_skip")'
    
        },
        login: {
            btnContinue: 'android=new UiSelector().resourceIdMatches(".*:id/bottom_button")',
            btnLoginContinue: 'android=new UiSelector().resourceIdMatches(".*:id/login_continue_button")',
            inputWebsiteAddress: 'android=new UiSelector().resourceIdMatches(".*:id/input")',
            inputEmailAddress: 'android=new UiSelector().resourceIdMatches(".*:id/input")',
            inputPassword: 'android=new UiSelector().resourceIdMatches(".*:id/input")',
            avatarIcon: 'android=new UiSelector().resourceIdMatches(".*:id/avatar_container")'
        },
        myStoreHomePage: {
            titleMyStoreHomePage: 'android=new UiSelector().resourceIdMatches(".*:id/collapsing_toolbar")',
            subTitleMyStoreHomePage: 'android=new UiSelector().resourceIdMatches(".*:id/toolbar_subtitle")',
            myStoreStats: 'android=new UiSelector().resourceIdMatches(".*:id/my_store_stats_container")',
            navigationButtons: 'android=new UiSelector().resourceIdMatches(".*:id/bottom_nav")',
            btnMenu: '//android.widget.FrameLayout[@content-desc="Menu"]/android.widget.FrameLayout/android.widget.ImageView',
        },
        menu: {
            btnConfiguration: '//android.view.View[@content-desc="Configurações"]',
            configuration: {
                btnLogout: 'android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("FAZER LOGOUT").resourceIdMatches(".*:id/btn_option_logout"))',
                btnConformLogout: 'android=new UiSelector().resourceIdMatches(".*:id/button1")',
            }
        },
    }
}