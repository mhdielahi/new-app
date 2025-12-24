import Navbar from "./../../components/Navbar/navbar";
import styled from "./Home.module.css";
import Article from "../../components/Article/Article";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

function Home() {
  const [isloading, setIsloading] = useState(false);
  const [article, setArticle] = useState([]);
  useEffect(() => {
    setIsloading(true);

    axios
      .get("http://localhost:3003/article")
      .then((resault) => {
        setArticle(resault.data);
        setIsloading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsloading(false);
      });
  }, []);

  return (
    <div>
      <Navbar title="mamad" />
      <div className="continer">
        <h3 className={styled.h3}>مقالات جدید</h3>

        {isloading ? (
          <Loading />
        ) : (
          <div className={styled.ArticleRaw}>
            {article.map((article) => (
              <Link to={`/article/${article.id}`}>
                <Article Article={article} />
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
export default Home;
