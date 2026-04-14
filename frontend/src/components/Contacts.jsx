export default function Contacts() {
  return (
    <section id="contacts" className="section section-dark">
      <div className="container contacts-layout reveal">
        <div>
          <p className="tag">Контакты</p>
          <h2>Приходите, звоните, пишите</h2>
          <p className="contact-addr">Томск, Большая Подгорная улица, 87 блок 6</p>
        </div>
        <div className="contact-links">
          <a href="tel:+79609730086" className="social-pill">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
            +7 (960) 973-00-86
          </a>
          <a href="https://vk.com/soulscream70" className="social-pill" target="_blank" rel="noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.77 18.77h1.15s.35-.04.52-.23c.16-.18.16-.51.16-.51s-.02-1.56.7-1.79c.71-.22 1.63 1.49 2.6 2.15.73.5 1.29.39 1.29.39l2.59-.04s1.35-.08.71-1.14c-.05-.09-.38-.78-1.94-2.2-1.64-1.49-1.42-1.25.55-3.83 1.2-1.57 1.68-2.53 1.53-2.94-.14-.39-1.02-.29-1.02-.29l-2.92.02s-.22-.03-.38.07c-.15.09-.25.31-.25.31s-.45 1.2-1.05 2.22c-1.26 2.15-1.77 2.26-1.97 2.13-.48-.31-.36-1.24-.36-1.9 0-2.07.31-2.93-.61-3.15-.31-.07-.53-.12-1.31-.13-.99-.01-1.83 0-2.31.24-.31.15-.56.5-.41.52.18.03.6.11.82.41.28.39.27 1.25.27 1.25s.16 2.43-.38 2.73c-.37.21-.88-.21-1.97-2.16-.56-1-.98-2.1-.98-2.1s-.08-.2-.23-.3c-.18-.13-.43-.17-.43-.17l-2.78.02s-.42.01-.57.19c-.14.17-.01.51-.01.51s2.12 4.95 4.51 7.45c2.19 2.29 4.68 2.14 4.68 2.14Z"/></svg>
            Вконтакте
          </a>
          <a href="https://rutube.ru/channel/70723622/" className="social-pill" target="_blank" rel="noreferrer">
            <img src="/photos/rutube-logo.png" alt="" width="18" height="18" className="social-pill-img" />
            RuTube
          </a>
          <a href="https://www.instagram.com/pro.ivana/" className="social-pill" target="_blank" rel="noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
            Instagram
          </a>
          <a href="https://2gis.ru/tomsk/firm/70000001111519315/84.953548%2C56.503529?m=84.953548%2C56.503529%2F16" className="social-pill" target="_blank" rel="noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            2ГИС
          </a>
        </div>
      </div>
    </section>
  );
}
