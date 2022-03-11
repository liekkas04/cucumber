package cn.cucumber.demo;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"C:\\Users\\rad7\\Desktop\\Cucumber\\src\\main\\resources\\feature\\360.feature"},
        format = {"pretty", "html:target/cucumber", "json:target/cucumber.json"},
        glue = {"cn.cucumber.demo"}
)
public class RunCukesTest {
}