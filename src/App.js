import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/login/LoginPage";
import NavBar from "./components/layout/NavBar";

import DevNewRelease from "./components/user/dev/release/DevNewRelease";
import DevDailyForm from "./components/user/dev/new_release/daily/DevDailyForm";
import DevFrontendForm from "./components/user/dev/new_release/frontend/DevFrontendForm";
import DevHotfixForm from "./components/user/dev/new_release/hotfix/DevHotfixForm";

import DevExistingRelease from "./components/user/dev/release/DevExistingRelease";

import DevDaily from "./components/user/dev/existing_release/daily/DevDaily";
import DevDailyDetails from "./components/user/dev/existing_release/daily/DevDailyDetails";

import DevFrontend from "./components/user/dev/existing_release/frontend/DevFrontend";
import DevFrontendDetails from "./components/user/dev/existing_release/frontend/DevFrontendDetails";

import DevHotfix from "./components/user/dev/existing_release/hotfix/DevHotfix";
import DevHotfixDetails from "./components/user/dev/existing_release/hotfix/DevHotfixDetails";

import Release from "./components/release/existingrelease/Release";
import ReleaseDetails from "./components/release/existingrelease/ReleaseDetails";
import Daily from "./components/release/existingrelease/daily/Daily";
import Frontend from "./components/release/existingrelease/frontend/Frontend";
import Hotfix from "./components/release/existingrelease/hotfix/Hotfix";

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

          <Route exact path="/:role/existingrelease/all">
            <Release />
          </Route>
          <Route exact path="/:role/existingrelease/daily">
            <Daily />
          </Route>
          <Route exact path="/:role/existingrelease/frontend">
            <Frontend />
          </Route>
          <Route exact path="/:role/existingrelease/hotfix">
            <Hotfix />
          </Route>
          <Route exact path="/:role/existingrelease/:releaseType/:id">
            <ReleaseDetails />
          </Route>

          {/* Developer */}
          {/* New Release page */}
          <Route exact path="/dev/newrelease">
            <DevNewRelease />
          </Route>
          <Route exact path="/dev/newrelease/hotfix">
            <DevHotfixForm />
          </Route>
          <Route exact path="/dev/newrelease/frontend">
            <DevFrontendForm />
          </Route>
          <Route exact path="/dev/newrelease/daily">
            <DevDailyForm />
          </Route>
          {/* Existing Release page  */}
          <Route exact path="/dev/existingrelease/all">
            <DevExistingRelease />
          </Route>
          {/* Release Details */}
          <Route exact path="/dev/existingrelease/frontend">
            <DevFrontend />
          </Route>
          {/* Release Details */}
          <Route exact path="/dev/existingrelease/daily">
            <DevDaily />
          </Route>
          {/* Release Details */}
          <Route exact path="/dev/existingrelease/hotfix">
            <DevHotfix />
          </Route>
          {/* Release Details */}
          <Route exact path="/dev/existingrelease/daily/:id">
            <DevDailyDetails />
          </Route>
          <Route exact path="/dev/existingrelease/frontend/:id">
            <DevFrontendDetails />
          </Route>
          <Route exact path="/dev/existingrelease/hotfix/:id">
            <DevHotfixDetails />
          </Route>

          {/* Manager */}
          {/* New Release page */}
          {/* <Route exact path="/manager/newrelease">
            <NewRelease />
          </Route>
          <Route exact path="/manager/newrelease/hotfix">
            <HotfixForm />
          </Route>
          <Route exact path="/manager/newrelease/frontend">
            <FrontendForm />
          </Route>
          <Route exact path="/manager/newrelease/daily">
            <DailyForm />
          </Route> */}
          {/* Existing Release page  */}
          {/* <Route exact path="/manager/existingrelease/all">
            <ExistingRelease />
          </Route> */}
          {/* Release Details */}
          {/* <Route exact path="/manager/existingrelease/frontend">
            <Frontend />
          </Route> */}
          {/* Release Details */}
          {/* <Route exact path="/manager/existingrelease/daily">
            <Daily />
          </Route> */}
          {/* Release Details */}
          {/* <Route exact path="/manager/existingrelease/hotfix">
            <Hotfix />
          </Route> */}
          {/* Release Details */}
          {/* <Route exact path="/manager/existingrelease/daily/:id">
            <DailyDetails />
          </Route>
          <Route exact path="/manager/existingrelease/frontend/:id">
            <FrontendDetails />
          </Route>
          <Route exact path="/manager/existingrelease/hotfix/:id">
            <HotfixDetails />
          </Route> */}

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
