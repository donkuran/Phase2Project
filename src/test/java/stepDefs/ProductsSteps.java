package stepDefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import io.cucumber.java.en.*;

public class ProductsSteps {
	
	WebDriver driver = BaseClass.driver;

	@When("I have have landed on the products page")
	public void i_have_have_landed_on_the_products_page() {
	    // Write code here that turns the phrase above into concrete actions
	    
		System.out.println("Inside Products Page");
	}

	@Then("Products prices should be as below")
	public void products_prices_should_be_as_below(io.cucumber.datatable.DataTable dataTable) {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
	    // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
	    // Double, Byte, Short, Long, BigInteger or BigDecimal.
	    //
	    // For other transformations you can register a DataTableType.
	    
		int rows = dataTable.height();

		for (int i = 0; i < rows; i++) {

			String Product = dataTable.cell(i, 0);
			String ExpPrice = dataTable.cell(i, 1);
			
			System.out.println(Product);
			System.out.println(ExpPrice);
			
			String ActPrice=driver.findElement(By.xpath("//div[text()='"+Product+"']/following::div[@class='inventory_item_price'][1]")).getText();
			Assert.assertEquals(ExpPrice, ActPrice);
		}
	}
}
