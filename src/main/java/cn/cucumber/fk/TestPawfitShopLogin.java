package cn.cucumber.fk;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestPawfitShopLogin {
    WebDriver driver;
    @Given("^用户启动pawfit shop登录界面$")
    public void goToPawfit(){
        driver = new ChromeDriver();
        driver.navigate().to("https://www.pawfit.com/en-gb/customer-account/customer-logon.html");
        driver.manage().window().maximize();
    }

}
