package pageClasses;

import drivers.DriversFactory;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LogInPage extends DriversFactory {

    @FindBy(id ="user-name")
    WebElement UserName;

    @FindBy(id = "password")
    WebElement Password;

    @FindBy(id= "login-button")
    WebElement LoginBtn;



//Action Methods:

   public void enterUsername(String username){
    UserName.sendKeys(username);
    }

    public void enterPassword(String password){
    Password.sendKeys(password);
    }

    public void clickLoginBtn(){
    LoginBtn.click();
    }
}
