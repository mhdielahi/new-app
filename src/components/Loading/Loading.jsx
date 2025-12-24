import styled from "./loading.module.css";
function Loading() {
  return (
    <>
      <div className={styled.Loading}>
        <span className={styled.loader}></span>
        <span>لطفا صبر کنید ...</span>
      </div>
    </>
  );
}
export default Loading;
