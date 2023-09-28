package StepDefn;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class Hooks extends Commlib{
   //public static WebDriver driver;
    @Test
    public void openbrowser() throws InterruptedException {
        //String exp="welcome";
        //System.setProperty("webdriver.chrome.driver","C:\\Users\\Home\\Downloads\\chromedriver\\chromedriver.exe");
        WebDriverManager.chromedriver().clearResolutionCache();
        WebDriverManager.chromedriver().clearDriverCache();
        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--remote-allow-origins=*");
         driver= new ChromeDriver(options);
        //System.out.println("driver inst baviya");
        driver.navigate().to("https://www.next.co.uk/");
       driver.findElement(By.id("onetrust-accept-btn-handler")).click();
        driver.manage().window().maximize();
       // driver.findElement(By.id("")).click();
        //String act=driver.findElement(By.xpath("")).getText();
        //Assert.assertEquals(exp,act);
        Thread.sleep(2000);

    }

    @After
    public void closebrowser()

    {
        driver.close();
    }

}
