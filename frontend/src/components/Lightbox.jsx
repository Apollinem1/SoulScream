import { GALLERY_PHOTOS } from "../data/constants";

export default function Lightbox({ index, onClose, onPrev, onNext }) {
  if (index < 0) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lb-close" aria-label="Закрыть">&times;</button>
      <button
        className="lb-arrow lb-prev"
        aria-label="Назад"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
      >
        &#8249;
      </button>
      <img
        className="lb-img"
        src={GALLERY_PHOTOS[index].src}
        alt={GALLERY_PHOTOS[index].alt}
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="lb-arrow lb-next"
        aria-label="Вперёд"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
      >
        &#8250;
      </button>
      <p className="lb-counter">{index + 1} / {GALLERY_PHOTOS.length}</p>
    </div>
  );
}
