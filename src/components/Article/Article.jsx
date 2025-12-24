import styled from "./article.module.css";
import images from "./../../assets/images/1.png";
function Article(props) {
  console.log(props);

  return (
    <div className={styled.maghale}>
      <img src={props.Article.imageurl} alt="" />

      <h3>{props.Article.title}</h3>
      <p>خواندن در{props.Article.readingtime} دقیقه</p>
    </div>
  );
}
export default Article;
