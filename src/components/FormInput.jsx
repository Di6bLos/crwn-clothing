const FormInput = ({label, id, ...otherProps}) => {
  return (<div className="group">
    <input className="form-input" {...otherProps} />
    <label className={`${otherProps.value.length ? "shrink" : null} form-input-label`} htmlFor={id}>{label}</label>
  </div>);
};

export default FormInput