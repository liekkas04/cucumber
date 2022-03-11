package cn.cucumber.fk;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.junit.Assert.assertEquals;

class IsItWeekend {
    static String isItWeekend(String today) {
        if (today.equals("Sunday")||today.equals("Saturday")) {
            return "Yeah";
        }
        return "Nope";
    }
}

public class isWeekendSteps {
    private String today;
    private String actualAnswer;
    @Given("^today is \"([^\"]*)\"$")
    public void today_is(String today) throws Throwable {
        this.today=today;
    }

    @When("^I ask whether it's Weekend yet$")
    public void i_ask_whether_it_s_Weekend_yet() throws Throwable {
        this.actualAnswer=IsItWeekend.isItWeekend(today);
    }

    @Then("^I should be told \"([^\"]*)\"$")
    public void i_should_be_told(String expectedAnswer) throws Throwable {
        assertEquals(expectedAnswer,actualAnswer);
    }
}
