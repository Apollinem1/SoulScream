export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <p className="footer-brand">SoulScream &mdash; школа экстрим-вокала и метал-музыки</p>
          <p className="footer-slogan">Смелее! У тебя все получится &mdash; мы тебя научим.</p>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SoulScream. Все права защищены.</p>
          <p>ИП Иванов&nbsp;И.&nbsp;А. &middot; ИНН&nbsp;000000000000 &middot; ОГРНИП&nbsp;000000000000000</p>
          <p>
            Информация на сайте не является публичной офертой.
            Отправляя заявку, вы соглашаетесь на обработку{" "}
            <a href="#" onClick={(e) => e.preventDefault()}>персональных данных</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
