$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Feature/Search.feature");
formatter.feature({
  "line": 1,
  "name": "Validate the search functionality",
  "description": "",
  "id": "validate-the-search-functionality",
  "keyword": "Feature"
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
  "duration": 24308421600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Validate the Brand tab",
  "description": "",
  "id": "validate-the-search-functionality;validate-the-brand-tab",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on brand and select the brand",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should able to see the selected brand",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefn.i_am_on_Home_page()"
});
formatter.result({
  "duration": 18354834100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.i_click_on_brand_and_select_the_brand()"
});
formatter.result({
  "duration": 263062100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.i_should_able_to_see_the_selected_brand()"
});
formatter.result({
  "duration": 30513925300,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.id: //*[@id\u003d\"plp-seo-heading\"]/h1 (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:84)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:230)\r\n\tat StepDefn.StepDefn.i_should_able_to_see_the_selected_brand(StepDefn.java:147)\r\n\tat ✽.Then I should able to see the selected brand(src/test/java/Feature/Search.feature:29)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#\\/\\/\\*\\[\\@id\\\u003d\\\"plp\\-seo\\-heading\\\"\\]\\/h1\"}\n  (Session info: chrome\u003d118.0.5993.117)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_362\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e4093ffc5f1c1a628cfb6f2885de3de6, findElement {using\u003did, value\u003d//*[@id\u003d\"plp-seo-heading\"]/h1}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 118.0.5993.117, chrome: {chromedriverVersion: 118.0.5993.70 (e52f33f30b91..., userDataDir: C:\\Users\\Home\\AppData\\Local...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:64097}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:64097/devtoo..., se:cdpVersion: 118.0.5993.117, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: e4093ffc5f1c1a628cfb6f2885de3de6\r\n\tat sun.reflect.GeneratedConstructorAccessor19.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:171)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:168)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:205)\r\n\tat StepDefn.StepDefn.i_should_able_to_see_the_selected_brand(StepDefn.java:147)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});