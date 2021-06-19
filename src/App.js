import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Error from "./components/error";
import WelcomeScreen from "./components/welcomeScreen";
import ImageGameHomePage from "./components/imageGameHomePage";
import Header from "./components/header";
import Test from "./components/test";
import Fruit from "./components/fruit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/image-game" component={Header} />

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
