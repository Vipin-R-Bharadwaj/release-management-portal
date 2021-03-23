import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/login/LoginPage";
import NavBar from "./components/layout/NavBar";

import NewRelease from "./components/release/NewRelease";
import DailyForm from "./components/user/dev/new_release/daily/DailyForm";
import FrontendForm from "./components/user/dev/new_release/frontend/FrontendForm";
import HotfixForm from "./components/user/dev/new_release/hotfix/HotfixForm";

import ExistingRelease from "./components/release/ExistingRelease";

import Daily from "./components/user/dev/existing_release/daily/Daily";
import DailyDetails from "./components/user/dev/existing_release/daily/DailyDetails";

import Frontend from "./components/user/dev/existing_release/frontend/Frontend";
import FrontendDetails from "./components/user/dev/existing_release/frontend/FrontendDetails";

import Hotfix from "./components/user/dev/existing_release/hotfix/Hotfix";
import HotfixDetails from "./components/user/dev/existing_release/hotfix/HotfixDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          {/* login page */}
          <Route exact path="/">
            <Login />
          </Route>
          {/* Developer */}
          {/* New Release page */}
          <Route exact path="/dev/newrelease">
            <NewRelease />
          </Route>
          <Route exact path="/dev/newrelease/hotfix">
            <HotfixForm />
          </Route>
          <Route exact path="/dev/newrelease/frontend">
            <FrontendForm />
          </Route>
          <Route exact path="/dev/newrelease/daily">
            <DailyForm />
          </Route>
          {/* Existing Release page  */}
          <Route exact path="/dev/existingrelease/all">
            <ExistingRelease />
          </Route>
          {/* Release Details */}
          <Route exact path="/dev/existingrelease/frontend">
            <Frontend />
          </Route>
          {/* Release Details */}
          <Route exact path="/dev/existingrelease/daily">
            <Daily />
          </Route>
          {/* Release Details */}
          <Route exact path="/dev/existingrelease/hotfix">
            <Hotfix />
          </Route>
          {/* Release Details */}
          <Route exact path="/dev/existingrelease/daily/:id">
            <DailyDetails />
          </Route>
          <Route exact path="/dev/existingrelease/frontend/:id">
            <FrontendDetails />
          </Route>
          <Route exact path="/dev/existingrelease/hotfix/:id">
            <HotfixDetails />
          </Route>
          {/* <Route exact path="/dev/existingrelease/daily/:id">
            <Daily />
          </Route> */}

          {/* Manager */}
          {/* New Release page */}
          {/* <Route exact path="/manager/newrelease">
            <NewRelease />
          </Route> */}
          {/* Existing Release page  */}
          {/* <Route exact path="/manager/existingrelease">
            <ExistingRelease />
          </Route> */}
          {/* Release Details */}
          {/* <Route exact path="/manager/existingrelease/:id">
            <ReleaseDetails />
          </Route> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
