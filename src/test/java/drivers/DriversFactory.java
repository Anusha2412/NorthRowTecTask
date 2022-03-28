package drivers;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.PageFactory;

import java.io.File;
import java.io.IOException;
import java.util.ResourceBundle;
import java.util.concurrent.TimeUnit;

public class DriversFactory {
    public static WebDriver driver;
    ResourceBundle rb;






    // 2. Constructor
    public DriversFactory(){
        PageFactory.initElements(driver, this);
    }




    // 3. Methods:

    private String br= "";

    public void openBrowser(){

        rb =ResourceBundle.getBundle("Config");
        br= rb.getString("browser");
        switch (br){
            case "firefox":
                WebDriverManager.firefoxdriver().setup();
                driver=new FirefoxDriver();
                break;

            case "ie":
                WebDriverManager.iedriver().setup();
                driver=new InternetExplorerDriver();
                break;

            default:
                WebDriverManager.chromedriver().setup();
                driver=new ChromeDriver();
        }
    }

    public String getCurrentUrl(){
        driver.getCurrentUrl();
        return null;
    }

    public void openUrl(String Url){
        driver.get(Url);
    }

    public void maxBrowser(){
        driver.manage().window().maximize();
    }

    public void closeBrowser(){
        driver.quit();
    }

    public void applyImplicitWait() {
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }

    public String getPageTitle(){
        return driver.getTitle();

    }

    public String getPageSource(){
        return driver.getPageSource();
    }

    public void Wait(){
        driver.manage().timeouts().implicitlyWait(10000, TimeUnit.SECONDS);
    }



}


