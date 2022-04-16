package stepDefs;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.*;

public class LoginSteps {

	WebDriver driver = BaseClass.driver;

	@Given("I have opened the application in a browser")
	public void i_have_opened_the_application_in_a_browser() {

		driver.get("https://www.saucedemo.com/");

		// Maximize window
		driver.manage().window().maximize();

		// wait for browser to load - implicit
		driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS);

	}

	@When("I have successfully open the application")
	public void i_have_successfully_open_the_application() {

		System.out.println("Application opened");
	}

	@When("I enter username {string}")
	public void i_enter_username(String UserNameVal) {

		WebElement UserName = driver.findElement(By.name("user-name"));
		UserName.sendKeys(UserNameVal);
	}

	@When("I enter password {string}")
	public void i_enter_password(String PasswordVal) {

		WebElement Password = driver.findElement(By.id("password"));
		Password.sendKeys(PasswordVal);
	}

	@When("I click on the Login Button")
	public void i_click_on_the_login_button() {

		WebElement LoginBtn = driver.findElement(By.name("login-button"));
		LoginBtn.click();
	}

	@Then("I should land on the products page")
	public void i_should_land_on_the_products_page() {

		System.out.println("Inside Products Page");
	}

	@Then("I should be get the error message {string}")
	public void i_should_be_get_the_error_message(String ExpMsg) {

		WebElement ErrorMsg = driver.findElement(By.xpath("//div[@id='login_button_container']//h3"));

		String ActualMsg = ErrorMsg.getText();

		Assert.assertEquals(ExpMsg, ActualMsg);
	}

}
