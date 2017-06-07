package stepdefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

import java.util.concurrent.TimeUnit;

/**
 * Created by Swapnil on 6/6/2017.
 */
public class stepdef {
    WebDriver driver = null;
    Actions action = null;

    //Creating driver instance
    @Before
    public void setUp() {
        driver = new FirefoxDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        action = new Actions(driver);
    }

    //Navigating to home page
    @Given("^I am at the Home page$")
    public void home_url() {
        driver.navigate().to("http://todomvc.com/");
    }

    //Clicking on AngularJS link
    @When("^I click the AngularJS link$")
    public void AngularJS_link_click(){
        driver.findElement(By.xpath("//iron-pages/div[1]/ul/li[2]/a")).click();
    }

    //Verify the AngularJS page title
    @Then("^I am at the AngularJS page$")
    public void assert_at_AngularJSPage() {
       assert driver.getTitle().contains("TodoMVC");
    }

    // Type any text in todobox
    @When("^I type \"(.*)\" in the todo box$")
    public void type_todo_box(String todos){
        driver.findElement(By.id("new-todo")).sendKeys(todos);
    }

    //Clicking the Enter button
    @When("^I click Enter button$")
    public void click_Enter(){
        driver.findElement(By.id("new-todo")).sendKeys(Keys.RETURN);
    }

    //Verify that the to-do item is listed
    @Then("^I can see \"(.*)\" in the list$")
    public void verify_list(String todos){
        String listValue = driver.findElement(By.cssSelector("#todo-list")).getText();
        assert (listValue.contains(todos));
    }

    //Double click on the to-do item and clear it
    @When("^I doubleclick on the \"(.*)\" in the list$")
    public void doubleclick_first_element(String todos) {
        action.doubleClick(driver.findElement(By.cssSelector("#todo-list > li > div > label"))).perform();
        for (int i=0;i<todos.length();i++)
        action.sendKeys(Keys.DELETE).perform();
    }

    //Enter the modified text in the to-do item
    @When("^I type \"([^\"]*)\" in the first list item$")
    public void modify_first_list_item(String todoModified){
        action.sendKeys(todoModified).perform();
    }

    //Clicking on the completed checkbox
    @When("^I click on completed checkbox of first item$")
    public void click_completed_checkbox()  {
        driver.findElement(By.cssSelector("#todo-list > li > div > input")).click();
    }

    //Verify the first to-do item is striked out
    @Then("^I see the first item is striked out$")
    public void verify_first_item_striked_out()  {
        String textDecor = driver.findElement(By.cssSelector("#todo-list > li > div > label")).getCssValue("text-decoration");
        assert textDecor.equalsIgnoreCase("line-through");
    }

    //Verify that the first to-do item is active
    @Then("^I see the first item active$")
    public void verify_first_item_active()  {
        String textDecor = driver.findElement(By.cssSelector("#todo-list > li > div > label")).getCssValue("text-decoration");
        assert textDecor.equalsIgnoreCase("none");
    }

    //Click on the mark all button
    @Then("^I click MarkAll button$")
    public void click_MarkAll_button(){
        driver.findElement(By.id("toggle-all")).click();
    }

    //Click on the completed filter button
    @When("^I click Completed button$")
    public void click_Completed_button(){
        driver.findElement(By.cssSelector("#filters > li:nth-child(3) > a")).click();
    }

    //Click on the close icon for an item
    @When("^I click on Close Icon$")
    public void click_Close_Icon(){
        ((JavascriptExecutor) driver).executeScript("document.querySelector('#todo-list > li > div > button').click();");
    }

    //Verify that there are no entries in the list
    @Then("^There are no todo entries$")
    public void no_entries_verification(){
        try{
            driver.findElement(By.cssSelector("#todo-list > li"));
            assert false;
        }catch (Exception e){
            assert true;
        }
    }

    //Click on the clear completed button
    @When("^I click on ClearCompleted button$")
    public void clear_completed_functionality(){
        driver.findElement(By.id("clear-completed")).click();
    }


    // Closing the browser instance
    @After
    public void tearDown() {
        driver.quit();
    }

}
