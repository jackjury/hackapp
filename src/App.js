import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
<<<<<<< HEAD
import Error from "./components/Error";
import WelcomeScreen from "./components/WelcomeScreen";
import ImageGameHomePage from "./components/ImageGameHomePage";
import Main from "./components/Main";
=======

import Error from "./components/error";
import WelcomeScreen from "./components/welcomeScreen";
import ImageGameHomePage from "./components/imageGame";
import Main from "./components/main";
import Test from "./components/test";

import Fruit from "./components/fruit";
>>>>>>> f65ec7e364f523c2b2ade3a2b38559e91497200f

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
