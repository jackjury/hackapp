import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Error from "./components/error";
import HomePage from "./components/home";
import ImageGameHomePage from "./components/image-game";
import Main from "./components/main";

function App() {
  return (
    <div className="App">
      <Main />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/image-game" component={ImageGameHomePage} />
        <Route exact path="/error" component={Error} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
