import { Link } from "react-router-dom";

const NewDashboard = () => {
  return (
    <div>
      <div className="padding-top-40px"></div>
      <div className="row padding-top-40px">
        <div className="col s12 m4">
          <div className="cardPadding">
            <Link to="/dev/newrelease/daily">
              <div className="card formStyle2 hoverable light-green">
                <div className="padding-top-20px"></div>
                <div className="card-title white-text">
                  <b>Daily Release</b>
                </div>
                <div className="padding-top-20px"></div>
                <div class="card-panel">
                  <span>
                    <input disabled id="item" type="text" class="validate" />
                    <label for="item">Item</label>
                    <input disabled id="pod" type="text" class="validate" />
                    <label for="pod">POD</label>
                    <input disabled id="releaseType" type="text" />
                    <label for="releaseType">Release Type</label>
                  </span>
                  <div className="padding-top-20px"></div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="cardPadding">
            <Link to="/dev/newrelease/frontend">
              <div className="card formStyle2 hoverable light-green">
                <div className="padding-top-20px"></div>
                <div className="card-title white-text">Frontend Release</div>
                <div className="padding-top-20px"></div>
                <div class="card-panel">
                  <span class="white-text">
                    <input disabled id="item" type="text" class="validate" />
                    <label for="item">Item</label>
                    <input disabled id="pod" type="text" class="validate" />
                    <label for="pod">POD</label>
                    <input disabled id="releaseType" type="text" />
                    <label for="releaseType">Release Type</label>
                  </span>
                  <div className="padding-top-20px"></div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="cardPadding">
            <Link to="/dev/newrelease/hotfix">
              <div className="card formStyle2 hoverable light-green">
                <div className="padding-top-20px"></div>
                <div className="card-title white-text">Hotfix Release</div>
                <div className="padding-top-20px"></div>
                <div class="card-panel lime-text text-darken-4">
                  <span>
                    <input disabled id="item" type="text" class="validate" />
                    <label for="item">Item</label>
                    <input disabled id="pod" type="text" class="validate" />
                    <label for="pod">POD</label>
                    <input disabled id="releaseType" type="text" />
                    <label for="releaseType">Release Type</label>
                  </span>
                  <div className="padding-top-20px"></div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="padding-top-40px"></div>
      <div className="padding-top-40px"></div>
      <div className="padding-top-40px"></div>
    </div>
  );
};

export default NewDashboard;
