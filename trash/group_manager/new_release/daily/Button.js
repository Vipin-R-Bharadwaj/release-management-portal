const Button = ({ clickHandler, btnColor, btnName, iconName, iconAlign }) => {
  return (
    <div className="input-field col s12 m6">
      <button
        className={`btn waves-effect waves-light btn-large btnStyling ${btnColor}`}
        onClick={(event) => clickHandler(event)}
      >
        {btnName}
        <i className={`material-icons ${iconAlign}`}>{iconName}</i>
      </button>
    </div>
  );
};

export default Button;
