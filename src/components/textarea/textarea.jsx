import styled from "./textarea.module.css";

function Textarea(props) {
  return (
    <>
      <div className={styled.Textarea}>
        <span>{props.title}</span>
        <textarea onChange={props.savechange} value={props.value}></textarea>
      </div>
    </>
  );
}

export default Textarea;
