package stepDefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import io.cucumber.java.en.*;

public class ProductsSteps {

	WebDriver driver = BaseClass.driver;

	@When("I have have landed on the products page")
	public void i_have_have_landed_on_the_products_page() {

		System.out.println("Inside Products Page");
	}

	@Then("Products prices should be as below")
	public void products_prices_should_be_as_below(io.cucumber.datatable.DataTable dataTable) {

		int rows = dataTable.height();

		for (int i = 0; i < rows; i++) {

			String Product = dataTable.cell(i, 0);
			String ExpPrice = dataTable.cell(i, 1);

			String ActPrice = driver
					.findElement(By
							.xpath("//div[text()='" + Product + "']/following::div[@class='inventory_item_price'][1]"))
					.getText();
			Assert.assertEquals(ExpPrice, ActPrice);
		}
	}
}
