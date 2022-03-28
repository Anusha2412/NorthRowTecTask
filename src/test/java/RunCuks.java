



import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        //features = "src/test/resources/Search.Feature",
        features = "src/test/resources/Login.Feature",
        dryRun = false,
        strict = false,
        plugin = {"json:target/cucumber.json"}

)


public class RunCuks {

}
