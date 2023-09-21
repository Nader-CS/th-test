const Input = (props) => {
  return (
    <div>
      <input
        placeholder={props.required ? props.name + " *" : props.name}
        className={`${props.className}`}
        required={props.required}
        type={props.type}
      />
    </div>
  );
};

export default Input;
