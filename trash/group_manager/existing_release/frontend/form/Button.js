const Button = () => {
  return (
    <div className="input-field col s12">
      <button
        type="submit"
        className="btn waves-effect waves-light btn-large btnStyling green darken-4"
        // onClick={(event) => submitHandler(event)}
      >
        Update
        <i className="material-icons right">send</i>
      </button>
    </div>
  );
};

export default Button;
