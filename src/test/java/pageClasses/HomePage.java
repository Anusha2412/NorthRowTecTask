package pageClasses;

import drivers.DriversFactory;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;
import java.util.Random;

public class HomePage extends DriversFactory {

    @FindBy(xpath = "//span[contains(text(),'Products')]")
    WebElement TitleProducts;

  /*  @FindBy(xpath = "//div[@class=\"inventory_item\"]")
    List<WebElement> productWebElements;

   */

    public static List<WebElement> isProductAvailable() {
        List<WebElement>productWebElements = driver.findElements(By.xpath("//div[@class=\"inventory_item_name\"]"));


        if (productWebElements.size()==0){
            throw new RuntimeException("Zero products available...");
        }
        return productWebElements;
    }

    public String selectAnyProduct(){
        List<WebElement> productWebElements = isProductAvailable();
        int productSize = productWebElements.size();

        Random random = new Random();
        int randomNumb = random.nextInt(3);

       WebElement selectedElement = productWebElements.get(randomNumb);
      String selectedProductName=  selectedElement.getText();
      selectedElement.click();

      return selectedProductName;

    }





    @FindBy(xpath = "//button[contains(@id, 'add-to-cart')]")
    WebElement addToCart;

    @FindBy(xpath = "//div[@id='shopping_cart_container']")
    WebElement cartBtn;





    //Actions

    public String GetTitle(){
       return TitleProducts.getText();
    }

    public void addToCard(){
        addToCart.click();
    }

    public void clickCartbtn(){
        cartBtn.click();
    }


}

