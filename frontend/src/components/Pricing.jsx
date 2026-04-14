export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container pricing-layout reveal">
        <div className="pricing-info">
          <p className="tag">Стоимость</p>
          <h2>Простая и честная модель оплаты</h2>
          <p className="pricing-note">
            Одинаковая стоимость для оффлайн и онлайн формата.
            Оплата разово или абонементом — как удобнее.
          </p>
        </div>
        <div className="pricing-cards">
          <article className="price-card">
            <p className="price-label">Разовое занятие</p>
            <p className="price-value">850 <span>₽ / час</span></p>
            <p className="price-desc">Идеально для первого знакомства с преподавателем и форматом.</p>
          </article>
          <article className="price-card price-card-accent">
            <p className="price-badge">Акция</p>
            <p className="price-label">Абонемент 4+1</p>
            <p className="price-value">3 400 <span>₽</span></p>
            <p className="price-desc">Оплачиваешь 4 урока — 5-й в подарок. Постоянная акция.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
