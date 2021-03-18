import Logo from "../../images/logo-light.png";

const NavBar = () => {
  return (
    <div>
      <div className="padding-top-20px">
        <div className="row">
          <div className="col s12">
            <img src={Logo} alt="Moneyview" className="logo" />
          </div>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default NavBar;
