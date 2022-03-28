package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import drivers.DriversFactory;

public class Hooks {


        DriversFactory df = new DriversFactory();



        @Before
        public void setUpBrowser(){

            df.openBrowser();
            df.maxBrowser();
            df.openUrl("https://www.saucedemo.com/");
            df.applyImplicitWait();
        }




     /*   @After
        public void tearDown(){
            df.closeBrowser();
        }

      */

    }


