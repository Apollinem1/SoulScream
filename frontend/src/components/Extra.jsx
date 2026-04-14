import { assetUrl } from "../utils/assetUrl";

export default function Extra() {
  return (
    <section className="section section-dark">
      <div className="container extra-split reveal">
        <div className="extra-photo">
          <img src={assetUrl("/photos/stage-lights.png")} alt="Сцена SoulScream" />
        </div>
        <div className="extra-text">
          <p className="tag">Дополнительно</p>
          <h2>Другие направления</h2>
          <ul className="extra-list">
            <li>Акустическая и электрогитара</li>
            <li>Бас-гитара</li>
            <li>Барабаны</li>
            <li>Эстрадный вокал</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
