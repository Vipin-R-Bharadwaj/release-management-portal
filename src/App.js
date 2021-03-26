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

// Admin Section
import AdminDashboard from "./components/user/admin/AdminDashboard";
import AdminAdd from "./components/user/admin/AdminAdd";

// Devops Section
import DevopsDashboard from "./components/user/dev_ops/DevopsDashboard";
import ReleaseManagerDashboard from "./components/user/release_manager/ReleaseManagerDashboard";

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
          <Route exact path="/admin/add/:id">
            <AdminAdd />
          </Route>

          {/* Devops Section */}
          <Route exact path="/devops/home">
            <DevopsDashboard />
          </Route>

          {/* Release Manager Section */}
          <Route exact path="/releasemanager/home">
            <ReleaseManagerDashboard />
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
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
