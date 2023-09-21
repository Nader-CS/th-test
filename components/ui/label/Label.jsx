const Label = (props) => {
  return (
    <div>
      <label className={props.className}>{props.name}</label>
    </div>
  );
};

export default Label;
