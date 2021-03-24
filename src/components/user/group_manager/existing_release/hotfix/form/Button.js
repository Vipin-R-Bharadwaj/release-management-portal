const Button = ({ clickHandler }) => {
  return (
    <div className="input-field col s12">
      <button
        className="btn waves-effect waves-light btn-large btnStyling light-green darken-2"
        onClick={(event) => clickHandler(event)}
      >
        Submit
        <i className="material-icons right">send</i>
      </button>
    </div>
  );
};

export default Button;
