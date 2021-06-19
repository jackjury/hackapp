import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Error from "./components/error";
import WelcomeScreen from "./components/welcomeScreen";
import ImageGameHomePage from "./components/imageGame";
import Main from "./components/main";
import Test from "./components/test";

import Fruit from "./components/fruit";

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
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
