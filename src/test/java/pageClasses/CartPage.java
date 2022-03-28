package pageClasses;

import drivers.DriversFactory;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import static org.hamcrest.MatcherAssert.assertThat;

public class CartPage extends DriversFactory {

    HomePage hp = new HomePage();

    @FindBy(xpath = "//div[@class='inventory_item_name']")
    WebElement ProductName;


    //Actions

    public String getProductName(){
        return ProductName.getText();
    }



}
