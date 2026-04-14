import { GALLERY_PHOTOS } from "../data/constants";

export default function Gallery({ onPhotoClick }) {
  return (
    <section id="gallery" className="section section-dark">
      <div className="container reveal">
        <p className="tag tag-center">Наши выступления</p>
        <h2 className="section-title">SoulScream на сцене</h2>
        <div className="gallery">
          {GALLERY_PHOTOS.map((p, i) => (
            <figure key={p.src} className="gallery-item" onClick={() => onPhotoClick(i)}>
              <img src={p.src} alt={p.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
