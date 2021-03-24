import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/login/LoginPage";
import NavBar from "./components/layout/NavBar";

// New Release - Common for all (except admin)
import NewDashboard from "./components/release/newrelease/NewDashboard";
import DailyForm from "./components/release/newrelease/daily/DailyForm";
import FrontendForm from "./components/release/newrelease/frontend/FrontendForm";
import HotfixForm from "./components/release/newrelease/hotfix/HotfixForm";

// Existing Release
import Release from "./components/release/existingrelease/Release";
import ReleaseDetails from "./components/release/existingrelease/ReleaseDetails";
import Daily from "./components/release/existingrelease/daily/Daily";
import Frontend from "./components/release/existingrelease/frontend/Frontend";
import Hotfix from "./components/release/existingrelease/hotfix/Hotfix";

import AdminDashboard from "./components/user/admin/AdminDashboard";
import DevopsDashboard from "./components/user/dev_ops/DevopsDashboard";

// Developer

// Developer New Release
// import DevNewRelease from "./components/user/dev/release/DevNewRelease";

// import DevDailyForm from "./components/user/dev/new_release/daily/DevDailyForm";
// import DevFrontendForm from "./components/user/dev/new_release/frontend/DevFrontendForm";
// import DevHotfixForm from "./components/user/dev/new_release/hotfix/DevHotfixForm";

// Developer Existing Release
// import DevExistingRelease from "./components/user/dev/release/DevExistingRelease";

// import DevDaily from "./components/user/dev/existing_release/daily/DevDaily";
// import DevDailyDetails from "./components/user/dev/existing_release/daily/DevDailyDetails";

// import DevFrontend from "./components/user/dev/existing_release/frontend/DevFrontend";
// import DevFrontendDetails from "./components/user/dev/existing_release/frontend/DevFrontendDetails";

// import DevHotfix from "./components/user/dev/existing_release/hotfix/DevHotfix";
// import DevHotfixDetails from "./components/user/dev/existing_release/hotfix/DevHotfixDetails";

// Developer End

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

          {/* Admin Section */}
          <Route exact path="/admin/home">
            <AdminDashboard />
          </Route>

          {/* Devops Section */}
          <Route exact path="/devops/home">
            <DevopsDashboard />
          </Route>

          {/* New Release */}
          <Route exact path="/:role/newrelease">
            <NewDashboard />
          </Route>
          <Route exact path="/:role/newrelease/daily">
            <DailyForm />
          </Route>
          <Route exact path="/:role/newrelease/frontend">
            <FrontendForm />
          </Route>
          <Route exact path="/:role/newrelease/hotfix">
            <HotfixForm />
          </Route>

          {/* Existing Release */}
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
          {/* <Route exact path="/dev/newrelease">
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
          </Route> */}
          {/* Existing Release page  */}
          {/* <Route exact path="/dev/existingrelease/all">
            <DevExistingRelease />
          </Route> */}
          {/* Release Details */}
          {/* <Route exact path="/dev/existingrelease/frontend">
            <DevFrontend />
          </Route> */}
          {/* Release Details */}
          {/* <Route exact path="/dev/existingrelease/daily">
            <DevDaily />
          </Route> */}
          {/* Release Details */}
          {/* <Route exact path="/dev/existingrelease/hotfix">
            <DevHotfix />
          </Route> */}
          {/* Release Details */}
          {/* <Route exact path="/dev/existingrelease/daily/:id">
            <DevDailyDetails />
          </Route>
          <Route exact path="/dev/existingrelease/frontend/:id">
            <DevFrontendDetails />
          </Route>
          <Route exact path="/dev/existingrelease/hotfix/:id">
            <DevHotfixDetails />
          </Route> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
