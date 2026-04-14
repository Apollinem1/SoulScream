import { PROCESS_STEPS } from "../data/constants";

export default function Process() {
  return (
    <section id="program" className="section">
      <div className="container reveal">
        <p className="tag tag-center">Как проходит обучение</p>
        <h2 className="section-title">От первого урока до сцены</h2>
        <div className="process-grid">
          {PROCESS_STEPS.map((s, i) => (
            <article key={s.num} className="process-card" style={{ transitionDelay: `${i * 100}ms` }}>
              <span className="process-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
