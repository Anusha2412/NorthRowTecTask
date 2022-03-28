package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageClasses.CartPage;
import pageClasses.HomePage;
import pageClasses.LogInPage;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;
//import static org.junit.Assert.assertThat;



public class Steps {

    LogInPage lp = new LogInPage();
    HomePage hp = new HomePage();
    CartPage cp = new CartPage();

    @Given("^User is on LogIn page$")
    public void user_is_on_LogIn_page() throws Throwable {


        lp.Wait();
        String ExpectedPageTitle = "Swag Labs";
        String ActualPageTitle = lp.getPageTitle();
        assertThat(ActualPageTitle, equalTo(ExpectedPageTitle));

    }

    @When("^User enters username as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
    public void user_enters_username_as_and_Password_as(String username, String password) throws Throwable {


        lp.enterUsername(username);
        lp.enterPassword(password);


    }

    @When("^Click on Login button$")
    public void click_on_Login_button() throws Throwable {
        lp.clickLoginBtn();

    }

    @Then("^User should login successfully$")
    public void user_should_login_successfully() throws Throwable {

        Thread.sleep(5000);
        String ExpectedTitle= "PRODUCTS";
        String ActualTitle= hp.GetTitle();

        assertThat(ActualTitle, equalTo(ExpectedTitle));

    }

    @Given("^User enter login credentials and is on home page$")
    public void User_enter_login_credentials_and_is_on_home_page() throws Throwable {
        lp.enterUsername("standard_user");
        lp.enterPassword("secret_sauce");
        lp.clickLoginBtn();


    }

    @When("^User search for random product$")
    public void User_search_for_random_product() throws Throwable {
        Thread.sleep(2000);
        hp.selectAnyProduct();

    }

    @When("^Add it to the cart$")
    public void add_it_to_the_cart() throws Throwable {

        Thread.sleep(2000);
        hp.addToCard();
    }

    @Then("^User should be able to see all the respective products in the cart$")
    public void User_should_be_able_to_see_all_the_respective_products_in_the_cart() throws Throwable {
        hp.clickCartbtn();
        Thread.sleep(2000);
        String expectedProductName = hp.selectAnyProduct();
        String actualProductName = cp.getProductName();
        assertThat(expectedProductName, equalTo(actualProductName));





    }




}
