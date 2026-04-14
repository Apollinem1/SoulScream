import { assetUrl } from "../utils/assetUrl";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid reveal">
        <div className="about-photo">
          <img src={assetUrl("/photos/vocal-red.png")} alt="Вокалист SoulScream" />
        </div>
        <div className="about-text">
          <p className="tag">О школе</p>
          <h2>Экстрим-вокал — это не крик. Это точная работа голосового аппарата</h2>
          <p>
            Для многих экстрим-вокал — что-то далёкое и непонятное. Но тот, кто хотя бы раз
            пытался разнообразить своё творчество, знает: добиться успеха — это кропотливый
            труд, многодневная практика и упорная работа.
          </p>
          <p>
            Педагоги SoulScream — действующие музыканты с многолетним опытом выступлений.
            Мы выстраиваем систему дыхания, опоры и резонанса шаг за шагом,
            чтобы вы росли быстро и без травм.
          </p>
          <a className="btn btn-primary" href="#lead-form">
            Попробовать бесплатно
          </a>
        </div>
      </div>
    </section>
  );
}
