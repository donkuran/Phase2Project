$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "This feature will be used to validate the Login page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate successful login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I have successfully open the application",
  "keyword": "When "
});
formatter.step({
  "name": "I enter username \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "I should land on the products page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in a browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_in_a_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate successful login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I have successfully open the application",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_have_successfully_open_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on the products page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_land_on_the_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate negative login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have successfully open the application",
  "keyword": "When "
});
formatter.step({
  "name": "I enter username \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "I should be get the error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in a browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_in_a_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate negative login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have successfully open the application",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_have_successfully_open_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be get the error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_be_get_the_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});