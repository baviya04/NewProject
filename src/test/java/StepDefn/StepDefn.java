package StepDefn;

import cucumber.api.CucumberOptions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en_old.Ac;
import cucumber.api.junit.Cucumber;

import org.junit.Assert;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class StepDefn extends Commlib{

    //Pagefac sop = new Pagefac(driver);
    Hooks obj=new Hooks();
    @Given("^I am on Home page$")
    public void i_am_on_Home_page() throws InterruptedException {
        obj.openbrowser();

    }


    @When("^I enter the \"([^\"]*)\"on the search button$")
    public void i_enter_the_on_the_search_button(String Product) throws Throwable {
        driver.findElement(By.xpath("//input[@id='header-big-screen-search-box']")).sendKeys(Product);
        driver.findElement(By.xpath("//*[@id=\"header-search-form\"]/button")).click();

    }

    @Then("^I should see  \"([^\"]*)\" results$")
    public void i_should_see_results(String ActProduct) throws Throwable {
         String Expectedresult ="\"Shoes\"";
        ActProduct= driver.findElement(By.xpath("//*[@id=\"plp-results-title-container\"]/div/h1/span")).getText();
        Assert.assertEquals(Expectedresult,ActProduct);
    }

    @When("^I enter all the required fields$")
    public void i_enter_all_the_required_fields() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"platform_modernisation_header\"]/header/div[1]/nav/div[2]/div[2]/div[2]/div/a/span")).click();
        driver.findElement(By.xpath("//*[@id=\"sec\"]/div/a")).click();


    }

    @Then("^I should able to register successfully$")
    public void i_should_able_to_register_successfully() throws Throwable {
        Select drptitle = new Select(driver.findElement(By.id("Title")));
        drptitle.selectByValue("Mrs");
        driver.findElement(By.name("FirstName")).sendKeys("chan");
        driver.findElement(By.name("LastName")).sendKeys("balansiva");
        driver.findElement(By.id("Email")).sendKeys("ventout@gmail.com");
        driver.findElement(By.id("Password")).sendKeys("KiJaa@0412!");
        driver.findElement(By.id("DobDate")).sendKeys("12 12 85");
        driver.findElement(By.id("PhoneNumber")).sendKeys("07478456721");
        driver.findElement(By.id("HouseNumberOrName")).sendKeys("21");
        driver.findElement(By.id("Postcode")).sendKeys("IG1 4BT");
        driver.findElement(By.id("SearchPostcode")).click();
        driver.findElement(By.id("ChkByPost")).click();
        driver.findElement(By.id("SignupButton")).click();
        String regSc=driver.findElement(By.xpath("//*[@id=\"welcome-wrapper\"]/div/div[3]/div/p[1]")).getText();
        Assert.assertEquals("Thank you for registering.",regSc);

    }

    @When("^I enter the existing user$")
    public void i_enter_the_existing_user() throws Throwable {
driver.findElement(By.xpath("//*[@id=\"platform_modernisation_header\"]/header/div[1]/nav/div[2]/div[2]/div[2]/div/a/span")).click();
driver.findElement(By.name("EmailOrAccountNumber")).sendKeys("abty@gmail.com");
driver.findElement(By.name("Password")).sendKeys("Kashikaa@0412!");
driver.findElement(By.id("SignInNow")).click();
            }

    @Then("^I should able to login successfully$")
    public void i_should_able_to_login_successfully() throws Throwable {
   String myAcc= "My Orders";
   String order=driver.findElement(By.xpath("//*[@id=\"pri\"]/div[2]/div[2]/div[1]/h2")).getText();
    Assert.assertEquals(myAcc,order);
    //obj.closebrowser();

    }

    @When("^I add an item in the shopping cart$")
    public void i_add_an_item_in_the_shopping_cart() throws Throwable {
       WebElement main= driver.findElement(By.xpath("//*[@id=\"meganav-link-7\"]/div"));
        Actions actions= new Actions(driver);
        actions.moveToElement(main);
        WebElement perfo=driver.findElement(By.xpath("//*[@id=\"catalogue\"]/div[2]/div/ul/li[6]/a/div/span"));
        Actions actions1= new Actions(driver);
        actions1.moveToElement(perfo);
        actions1.click().build().perform();

    }

    @Then("^I should able to purchase successfully$")
    public void i_should_able_to_purchase_successfully() throws Throwable {

    }















    /*@When("^I enter the \"([^\"]*)\" on the search button$")
    public void i_enter_the_on_the_search_button(String Product) throws InterruptedException {

    sop.search(Product);


    }

    @Then("^I should see \"([^\"]*)\" results$")
    public void i_should_see_results(String Exp)  {
     // String Expectedresult ="\""+Exp+"\"";
      // String Actresult= driver.findElement(By.cssSelector("#plp-results-title-container")).getText();
      //Assert.assertEquals(Expectedresult,Actresult);
      //  driver.findElement(By.xpath("//*[@id=\"platform_modernisation_product_summary_L90012\"]/div/div[1]/div[1]/div/div/div[1]/a/img")).click();
       // driver.findElement(By.xpath("//*[@id=\"Size-L90-012\"]/ul/li[1]")).click();
        //driver.findElement(By.xpath("//*[@id=\"Style786711\"]/section/div[5]/div[7]/div[3]/div/a[1]")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.MICROSECONDS);
        driver.manage().window().maximize();
        driver.manage().window().minimize();




    }

    @Then("^add the product to the basket$")
    public void add_the_product_to_the_basket()  {

      //driver.findElement(By.xpath("//*[@id=\"platform_modernisation_product_summary_L90012\"]/div/div[1]/div[1]/div/div/div[1]/a/img")).click();
       // driver.findElement(By.xpath("//*[@id=\"Size-L90-012\"]/ul/li[1]")).click();
        //driver.findElement(By.xpath("//*[@id=\"Style786711\"]/section/div[5]/div[7]/div[3]/div/a[1]")).click();

    }

    @Then("^Check out$")
    public void check_out()  {
        obj.closebrowser();

    }*/



}
