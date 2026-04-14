import { TECHNIQUES } from "../data/constants";

export default function Techniques() {
  return (
    <section className="section section-dark">
      <div className="container reveal">
        <p className="tag tag-center">Чему научим</p>
        <h2 className="section-title">Техники, которые вы освоите</h2>
        <div className="techniques-grid">
          {TECHNIQUES.map((t, i) => (
            <article key={t.name} className="technique-card" style={{ transitionDelay: `${i * 80}ms` }}>
              <h3>{t.name}</h3>
              <p>{t.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
