



import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        //features = "src/test/resources/Search.Feature",
        features = "src/test/resources/Login.Feature",
        dryRun = false,
        strict = false,
        plugin = {"json:target/cucumber.json",
                "pretty", "html:reports/myreports.html",
                "rerun:target/rerun.txt"}

)


public class RunCuks {

}
