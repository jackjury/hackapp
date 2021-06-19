import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Error from "./components/Error";
import WelcomeScreen from "./components/WelcomeScreen";
import ImageGameHomePage from "./components/ImageGameHomePage";
import Main from "./components/Main";
import Test from "./components/Test";
import Fruit from "./components/Fruit";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
        <Switch>
          <Route exact path="/jackstest" component={Test} />
          <Route exact path="/" component={WelcomeScreen} />
          <Route exact path="/image-game" component={ImageGameHomePage} />
          <Route exact path="/error" component={Error} />
          <Route exact path="/image-game/fruit" component={Fruit} />
          <Redirect to="/error" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
