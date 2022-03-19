package cn.cucumber.fk;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import gherkin.formatter.model.Feature;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.time.Duration;


@RunWith(Cucumber.class)
@CucumberOptions(features ="C:\\Users\\rad7\\Desktop\\Cucumber\\src\\main\\resources\\feature\\ApiTest.feature",
        plugin = {"pretty","html:target/cucumber","json:target/cucumber.json"},glue = "cn.cucumber.fk")
public class PawfitShopTestAop {
    static  WebDriver driver;
    @BeforeClass
    public static void init(){

//        driver = new ChromeDriver();
//        driver.navigate().to("https://www.pawfit.com/en-gb/customer-account/customer-logon.html");
//        driver.manage().window().maximize();
    }

    @AfterClass
    public static void close(){
//        driver.close();
    }
}
