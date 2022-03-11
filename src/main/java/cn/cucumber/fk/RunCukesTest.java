package cn.cucumber.fk;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features={"C:\\Users\\rad7\\Desktop\\Cucumber\\src\\main\\resources\\feature\\cucumber.feature"},  //写到具体文件就执行具体feature文件，写到文件夹就依次执行所有文件
        format={"pretty","html:target/cucunber","json:target/cucunber.json"},
        glue={"cn.cucumber.fk"}  //定义的代码路径
)
public class RunCukesTest {
}
