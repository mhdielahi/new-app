import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerAbout}>
          <h2>مقالات من</h2>
          <p>
            هدف ما ایجاد فضایی برای یادگیری و اشتراک‌گذاری مقالات با کیفیت است.
            به ما بپیوندید و دانش خود را به اشتراک بگذارید.
          </p>
        </div>
        <div className={styles.footerLinks}>
          <h3>لینک‌های مفید</h3>
          <ul>
            <li>
              <a href="#">خانه</a>
            </li>
            <li>
              <a href="#">مقالات</a>
            </li>
            <li>
              <a href="#">درباره ما</a>
            </li>
            <li>
              <a href="#">تماس با ما</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerContact}>
          <h3>تماس با ما</h3>
          <p>ایمیل: info@magalesi.com</p>
          <p>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2025 همه حقوق محفوظ است | مقالات من</p>
      </div>
    </footer>
  );
}
export default Footer;
