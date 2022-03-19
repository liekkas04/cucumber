package cn.cucumber.fk;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

import static org.junit.Assert.*;

public class TestPawfitShopLogin {
    static  WebDriver driver;
    @Given("^open login page$")
    public void open_login_page() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        if (driver==null){
            driver = new ChromeDriver();
            driver.navigate().to("https://www.pawfit.com/en-gb/customer-account/customer-logon.html");
            driver.manage().window().maximize();
        }
    }
    @When("^insert data to name edittext \"([^\"]*)\"$")
    public void insert_data_to_name_edittext(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.id("signin_userName")).clear();
        driver.findElement(By.id("signin_userName")).sendKeys(arg1);
    }

    @When("^insert data to password edittext \"([^\"]*)\"$")
    public void insert_data_to_password_edittext(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.id("signin_password")).clear();
        driver.findElement(By.id("signin_password")).sendKeys(arg1);
        
    }
    @When("^click login button")
    public void click_login_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        Thread.sleep(1000);
        WebDriverWait wait2 = new WebDriverWait(driver, Duration.ofSeconds(10000));
        wait2.until(ExpectedConditions.elementToBeClickable(By.id("genericLogin-button"))).click();
//        driver.findElement(By.className("genericLogin-button")).click();

    }

    @Then("^login the pawfit shop$")
    public void login_the_pawfit_shop() throws Throwable {
//        assertEquals("2","1");

    }

}
