import styled from "./input.module.css";

function Input(props) {
  return (
    <>
      <div className={styled.newart}>
        <span>{props.title}</span>
        <input
          name={props.name}
          onChange={props.savechange}
          type={props.type}
          value={props.value}
        />
      </div>
    </>
  );
}

export default Input;
