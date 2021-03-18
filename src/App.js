import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/login/LoginPage";
import NavBar from "./components/layout/NavBar";
import LoginSuccess from "./components/login/LoginSuccess";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Switch>
          {/* login page */}
          <Route exact path="/" component={Login} />
          {/* login success */}
          <Route path="/dev" component={LoginSuccess} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
