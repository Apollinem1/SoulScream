import { assetUrl } from "../utils/assetUrl";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <img src={assetUrl("/photos/group.png")} alt="SoulScream — групповое фото" />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content container">
        <p className="tag">Школа экстрим-вокала и метал-музыки</p>
        <h1>
          Преврати<br />
          голос в оружие<br />
          <span className="accent">сцены</span>
        </h1>
        <p className="hero-sub">
          Гроулинг, скриминг, харш и другие техники — безопасно, с наставником и результатом.
          Оффлайн в Томске и онлайн по всему миру.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary btn-lg" href="#lead-form">
            Записаться на урок
          </a>
          <a className="btn btn-glass btn-lg" href="#pricing">
            Смотреть цены
          </a>
        </div>
      </div>
    </section>
  );
}
