$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Feature/Search.feature");
formatter.feature({
  "line": 1,
  "name": "Validate the search functionality",
  "description": "",
  "id": "validate-the-search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Search By Products type",
  "description": "",
  "id": "validate-the-search-functionality;search-by-products-type",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I enter the \"\u003cProduct\u003e\"on the search button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see  \"\u003cActProduct\u003e\" results",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "validate-the-search-functionality;search-by-products-type;",
  "rows": [
    {
      "cells": [
        "Product",
        "ActProduct"
      ],
      "line": 10,
      "id": "validate-the-search-functionality;search-by-products-type;;1"
    },
    {
      "cells": [
        "Shoes",
        "Shoes"
      ],
      "line": 11,
      "id": "validate-the-search-functionality;search-by-products-type;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefn.i_am_on_Home_page()"
});
formatter.result({
  "duration": 13352409400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Search By Products type",
  "description": "",
  "id": "validate-the-search-functionality;search-by-products-type;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I enter the \"Shoes\"on the search button",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see  \"Shoes\" results",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shoes",
      "offset": 13
    }
  ],
  "location": "StepDefn.i_enter_the_on_the_search_button(String)"
});
formatter.result({
  "duration": 4768972600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shoes",
      "offset": 15
    }
  ],
  "location": "StepDefn.i_should_see_results(String)"
});
formatter.result({
  "duration": 232284700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefn.i_am_on_Home_page()"
});
formatter.result({
  "duration": 9992133500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Add New USER",
  "description": "",
  "id": "validate-the-search-functionality;add-new-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I enter all the required fields",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.i_enter_all_the_required_fields()"
});
formatter.result({
  "duration": 9755293800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.i_should_able_to_register_successfully()"
});
formatter.result({
  "duration": 6715161100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"welcome-wrapper\"]/div/div[3]/div/p[1]\"}\n  (Session info: chrome\u003d117.0.5938.63)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_362\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [cccb499d82fc0a754c72e8b8a16c860f, findElement {using\u003dxpath, value\u003d//*[@id\u003d\"welcome-wrapper\"]/div/div[3]/div/p[1]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 117.0.5938.63, chrome: {chromedriverVersion: 117.0.5938.92 (67649b10b92b..., userDataDir: C:\\Users\\Home\\AppData\\Local...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63534}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63534/devtoo..., se:cdpVersion: 117.0.5938.63, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: cccb499d82fc0a754c72e8b8a16c860f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat StepDefn.StepDefn.i_should_able_to_register_successfully(StepDefn.java:69)\r\n\tat ✽.Then I should able to register successfully(src/test/java/Feature/Search.feature:15)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefn.i_am_on_Home_page()"
});
formatter.result({
  "duration": 10633082700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify the Existing user",
  "description": "",
  "id": "validate-the-search-functionality;verify-the-existing-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I enter the existing user",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.i_enter_the_existing_user()"
});
formatter.result({
  "duration": 7998261000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.i_should_able_to_login_successfully()"
});
formatter.result({
  "duration": 43455900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"pri\"]/div[2]/div[2]/div[1]/h2\"}\n  (Session info: chrome\u003d117.0.5938.63)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_362\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [0242deddde12903e56b6a2f4824cbeda, findElement {using\u003dxpath, value\u003d//*[@id\u003d\"pri\"]/div[2]/div[2]/div[1]/h2}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 117.0.5938.63, chrome: {chromedriverVersion: 117.0.5938.92 (67649b10b92b..., userDataDir: C:\\Users\\Home\\AppData\\Local...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63707}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63707/devtoo..., se:cdpVersion: 117.0.5938.63, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 0242deddde12903e56b6a2f4824cbeda\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat StepDefn.StepDefn.i_should_able_to_login_successfully(StepDefn.java:85)\r\n\tat ✽.Then I should able to login successfully(src/test/java/Feature/Search.feature:19)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefn.i_am_on_Home_page()"
});
formatter.result({
  "duration": 10928515600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Validate the Complete Checkout",
  "description": "",
  "id": "validate-the-search-functionality;validate-the-complete-checkout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I add an item in the shopping cart",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I should able to purchase successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.i_add_an_item_in_the_shopping_cart()"
});
formatter.result({
  "duration": 114888300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"catalogue\"]/div[2]/div/ul/li[6]/a/div/span\"}\n  (Session info: chrome\u003d117.0.5938.63)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_362\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4a9a656da22c5612104d90ac4a170b1c, findElement {using\u003dxpath, value\u003d//*[@id\u003d\"catalogue\"]/div[2]/div/ul/li[6]/a/div/span}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 117.0.5938.63, chrome: {chromedriverVersion: 117.0.5938.92 (67649b10b92b..., userDataDir: C:\\Users\\Home\\AppData\\Local...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63864}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63864/devtoo..., se:cdpVersion: 117.0.5938.63, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 4a9a656da22c5612104d90ac4a170b1c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat StepDefn.StepDefn.i_add_an_item_in_the_shopping_cart(StepDefn.java:96)\r\n\tat ✽.When I add an item in the shopping cart(src/test/java/Feature/Search.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefn.i_should_able_to_purchase_successfully()"
});
formatter.result({
  "status": "skipped"
});
});