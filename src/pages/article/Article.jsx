import Navbar from "../../components/Navbar/navbar";
import image from "./../../assets/images/react.png";
import styles from "./article.module.css";
import Footer from "./../../components/footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

function Article() {
  const param = useParams();
  const [article, setArticle] = useState({});
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);

    axios
      .get(`http://localhost:3003/article/${param.id}`)
      .then((result) => {
        setArticle(result.data);
        setIsloading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsloading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        {isloading ? (
          <Loading />
        ) : (
          <div className={styles.article}>
            <h1>{article.title}</h1>
            <div className={styles.date}>
              <p>تاریخ : {article.date}</p>
              <p>نویسنده : {article.writer}</p>
              <p>مدت زمان خواندن : {article.readingtime} دقیقه</p>
            </div>
            <img src={image} alt="JavaScript Variables" />
            <p className={styles.par}>{article.matn}</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Article;
