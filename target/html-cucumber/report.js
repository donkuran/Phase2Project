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
formatter.uri("file:src/test/java/features/Products.feature");
formatter.feature({
  "name": "This feature will be used to validate Products and Prices",
  "description": "",
  "keyword": "Feature"
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
  "name": "I enter username \"standard_user\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"secret_sauce\"",
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
formatter.scenario({
  "name": "Validate product prices",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have have landed on the products page",
  "keyword": "When "
});
formatter.match({
  "location": "ProductsSteps.i_have_have_landed_on_the_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Products prices should be as below",
  "rows": [
    {
      "cells": [
        "Sauce Labs Backpack",
        "$29.99"
      ]
    },
    {
      "cells": [
        "Sauce Labs Bike Light",
        "$9.99"
      ]
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt",
        "$15.99"
      ]
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket",
        "$49.99"
      ]
    },
    {
      "cells": [
        "Sauce Labs Onesie",
        "$7.99"
      ]
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)",
        "$15.99"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ProductsSteps.products_prices_should_be_as_below(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});