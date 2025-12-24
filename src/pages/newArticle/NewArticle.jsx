import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/navbar";
import styled from "./NewArticle.module.css";
import Input from "../../components/input/Input";
import Textarea from "../../components/textarea/textarea";
import axios from "axios";

function NewArticle() {
  var [newArticle, setNewArticle] = useState({
    title: "",
    date: "",
    matn: "",
    readingtime: "",
    athor: "",
  });

  const newarticle = (e) => {
    setNewArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const savetextArea = (e) => {
    setNewArticle((prevState) => ({
      ...prevState,
      matn: e.target.value,
    }));
  };
  const resetArticle = () => {
    setNewArticle({
      title: "",
      date: "",
      matn: "",
      readingtime: "",
      athor: "",
    });
  };

  const senddata = () => {
    axios.post("http://localhost:3003/article", {
      id: 9,
      imageurl:
        "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3210575/react-icon-md.png",

      title: newArticle.title,
      readingtime: newArticle.readingtime,
      writer: newArticle.athor,
      date: newArticle.date,
      matn: newArticle.matn,
    });
    resetArticle();
  };
  return (
    <>
      <Navbar title="mamd" />
      <div className="continer">
        <h1>ساخت مقاله جدید</h1>

        <Input
          title="عنوان"
          name="title"
          savechange={newarticle}
          type="text"
          value={newArticle.title}
        />
        <Input
          title="تاریخ"
          name="date"
          savechange={newarticle}
          type="date"
          value={newArticle.date}
        />
        <Input
          title="مدت زمان خواندن"
          name="readingtime"
          savechange={newarticle}
          type="number"
          value={newArticle.readingtime}
        />
        <Input
          title="نویسنده"
          name="athor"
          savechange={newarticle}
          type="text"
          value={newArticle.athor}
        />
        <Textarea
          title="متن"
          savechange={savetextArea}
          value={newArticle.matn}
        />
        <div className={styled.send}>
          <button onClick={senddata}>ارسال</button>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default NewArticle;
