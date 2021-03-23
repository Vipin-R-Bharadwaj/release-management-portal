const Button = ({ submitHandler }) => {
  return (
    <div className="input-field col s12">
      <button
        className="btn waves-effect waves-light btn-large btnStyling green darken-4"
        onClick={(event) => submitHandler(event)}
      >
        Submit
        <i className="material-icons right">send</i>
      </button>
    </div>
  );
};

export default Button;
