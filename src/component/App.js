import '../style/App.css';
import Home from "./home";
import Create from "./createsurvey";
import ConfirmSurvey from "./confrim"
import TakeSurvey from "./takesurvey"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div><img alt="survery tiger"  src="https://raw.githubusercontent.com/gourav310/simple-survey-app/main/src/logo.png"/></div>
      <Switch >
          <Route path="/create/:surveyId" render={()=>(<Create />)}></Route>
          <Route path="/takesurvey" render={()=>(<TakeSurvey />)}></Route>
          <Route path="/confirmSurvey/:surveyId" render={()=>(<ConfirmSurvey />)}></Route>
          <Route path="/" render={()=>(<Home />)}></Route>
      </Switch >
    </div>
  );
}

export default App;
