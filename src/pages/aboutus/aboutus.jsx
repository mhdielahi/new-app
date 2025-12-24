import Navbar from "../../components/Navbar/navbar";
import Naghshe from "./../../assets/images/naghshe.png";
import styled from "./aboutus.module.css";
import Footer from "../../components/footer/Footer";

function Abuotus() {
  return (
    <div className={styled.aboutdiv}>
      <Navbar title="about" />

      <div className="continer">
        <div className={styled.aboutdiv2}>
          <h2>درباره ما</h2>
          <h4>
            ما اینجا جمع شدیم تا محتوا فقط «نوشته» نباشه، بلکه ارزشمند، کاربردی
            و قابل اعتماد باشه. این پلتفرم با هدف انتشار مقالات آموزشی، تحلیلی و
            تجربی راه‌اندازی شده؛ جایی برای یادگیری، رشد و به‌روز موندن در
            دنیایی که هر روز سریع‌تر تغییر می‌کنه. تلاش ما اینه که مقاله‌هایی
            منتشر کنیم که هم ساده و قابل فهم باشن، هم عمیق و دقیق. از آموزش و
            تکنولوژی گرفته تا تجربه‌های واقعی و تحلیل موضوعات روز، محتوایی تولید
            می‌کنیم که به درد بخوره، نه فقط پرکننده صفحه. ما به کیفیت محتوا،
            صداقت در نوشتن و احترام به وقت مخاطب اهمیت می‌دیم. اگر دنبال جایی
            هستی که بتونی بخونی، یاد بگیری و دید بهتری نسبت به موضوعات مختلف
            پیدا کنی، خوشحالیم که اینجایی.
          </h4>
          <p>فعالیت ما در کدام شهرها است؟</p>
          <img src={Naghshe} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Abuotus;
