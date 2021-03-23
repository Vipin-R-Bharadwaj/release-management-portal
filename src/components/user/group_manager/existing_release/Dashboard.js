import { Component } from "react";
import Frontend from "./frontend/Frontend";
import Hotfix from "./hotfix/Hotfix";
import CreatableSelect from "react-select/creatable";
import Daily from "./daily/Daily";
// import pageImg from "../../../../images/page_img.png";

class Dashboard extends Component {
  state = {
    option: null,
    optionList: [
      { label: "Hotfix Relese", value: "1" },
      { label: "Daily Release", value: "2" },
      { label: "Frontend Release", value: "3" },
    ],
  };
  clickHandler = (event) => {
    if (event !== null) {
      const option = event.value;
      this.setState({ option });
    }
  };
  render() {
    return (
      <div className="container">
        {/* <div className="container"> */}
        <div className="padding-top-20px"></div>
        <CreatableSelect
          placeholder="Select Release Type"
          // isClearable
          options={this.state.optionList}
          onChange={(event) => {
            this.clickHandler(event);
          }}
          defaultValue="Select release type"
          maxMenuHeight={150}
        />
        {/* </div> */}
        {this.state.option === "1" ? (
          <Hotfix />
        ) : this.state.option === "2" ? (
          <Daily />
        ) : this.state.option === "3" ? (
          <Frontend />
        ) : (
          <div className="padding-top-20px">
            <div
              className="backgroundImg"
              style={{ filter: "grayscale(50%)" }}
            ></div>
          </div>
        )}
        <div className="padding-top-20px"></div>
      </div>
    );
  }
}

export default Dashboard;
