$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Login.Feature");
formatter.feature({
  "line": 3,
  "name": "As a end user I want to test Login is working as required",
  "description": "",
  "id": "as-a-end-user-i-want-to-test-login-is-working-as-required",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "",
  "description": "",
  "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User is on LogIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"\u003cusername\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 14,
      "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;;;2"
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce"
      ],
      "line": 15,
      "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;;;3"
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ],
      "line": 16,
      "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;;;4"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 17,
      "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;;;5"
    },
    {
      "cells": [
        "Standard_user",
        "secret_sauce"
      ],
      "line": 18,
      "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;;;6"
    },
    {
      "cells": [
        "standard_user",
        "Secret_sauce"
      ],
      "line": 19,
      "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5211441293,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "",
  "description": "",
  "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on LogIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"standard_user\" and Password as \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_LogIn_page()"
});
formatter.result({
  "duration": 392916888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 25
    },
    {
      "val": "secret_sauce",
      "offset": 57
    }
  ],
  "location": "Steps.user_enters_username_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 502032061,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login_button()"
});
formatter.result({
  "duration": 164037216,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_login_successfully()"
});
formatter.result({
  "duration": 5033405673,
  "status": "passed"
});
formatter.before({
  "duration": 2033554926,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "",
  "description": "",
  "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on LogIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"locked_out_user\" and Password as \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_LogIn_page()"
});
formatter.result({
  "duration": 10862868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "locked_out_user",
      "offset": 25
    },
    {
      "val": "secret_sauce",
      "offset": 59
    }
  ],
  "location": "Steps.user_enters_username_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 361094541,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login_button()"
});
formatter.result({
  "duration": 109998831,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_login_successfully()"
});
formatter.result({
  "duration": 45273183878,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//span[contains(text(),\u0027Products\u0027)]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Sivas-MacBook-Pro.local\u0027, ip: \u0027192.168.1.167\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\n\tat pageClasses.HomePage.GetTitle(HomePage.java:63)\n\tat stepDefinitions.Steps.user_should_login_successfully(Steps.java:54)\n\tat ✽.Then User should login successfully(src/test/resources/Login.Feature:10)\n",
  "status": "failed"
});
formatter.before({
  "duration": 2321234038,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "",
  "description": "",
  "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on LogIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"problem_user\" and Password as \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_LogIn_page()"
});
formatter.result({
  "duration": 10240508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "problem_user",
      "offset": 25
    },
    {
      "val": "secret_sauce",
      "offset": 56
    }
  ],
  "location": "Steps.user_enters_username_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 373410819,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login_button()"
});
formatter.result({
  "duration": 152989397,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_login_successfully()"
});
formatter.result({
  "duration": 5022710290,
  "status": "passed"
});
formatter.before({
  "duration": 1993534133,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "",
  "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on LogIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"performance_glitch_user\" and Password as \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_LogIn_page()"
});
formatter.result({
  "duration": 10442609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 25
    },
    {
      "val": "secret_sauce",
      "offset": 67
    }
  ],
  "location": "Steps.user_enters_username_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 312144006,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login_button()"
});
formatter.result({
  "duration": 5140399909,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_login_successfully()"
});
formatter.result({
  "duration": 5025190708,
  "status": "passed"
});
formatter.before({
  "duration": 2346471357,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "",
  "description": "",
  "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on LogIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"Standard_user\" and Password as \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_LogIn_page()"
});
formatter.result({
  "duration": 16293916,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Standard_user",
      "offset": 25
    },
    {
      "val": "secret_sauce",
      "offset": 57
    }
  ],
  "location": "Steps.user_enters_username_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 537283519,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login_button()"
});
formatter.result({
  "duration": 76633935,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_login_successfully()"
});
formatter.result({
  "duration": 62269482781,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//span[contains(text(),\u0027Products\u0027)]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Sivas-MacBook-Pro.local\u0027, ip: \u0027192.168.1.167\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\n\tat pageClasses.HomePage.GetTitle(HomePage.java:63)\n\tat stepDefinitions.Steps.user_should_login_successfully(Steps.java:54)\n\tat ✽.Then User should login successfully(src/test/resources/Login.Feature:10)\n",
  "status": "failed"
});
formatter.before({
  "duration": 2081795439,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "",
  "description": "",
  "id": "as-a-end-user-i-want-to-test-login-is-working-as-required;;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on LogIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"standard_user\" and Password as \"Secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_LogIn_page()"
});
formatter.result({
  "duration": 16241968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 25
    },
    {
      "val": "Secret_sauce",
      "offset": 57
    }
  ],
  "location": "Steps.user_enters_username_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 383750130,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login_button()"
});
formatter.result({
  "duration": 81064762,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_login_successfully()"
});
formatter.result({
  "duration": 199569003508,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//span[contains(text(),\u0027Products\u0027)]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Sivas-MacBook-Pro.local\u0027, ip: \u0027192.168.1.167\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\n\tat pageClasses.HomePage.GetTitle(HomePage.java:63)\n\tat stepDefinitions.Steps.user_should_login_successfully(Steps.java:54)\n\tat ✽.Then User should login successfully(src/test/resources/Login.Feature:10)\n",
  "status": "failed"
});
});