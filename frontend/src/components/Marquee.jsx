import { MARQUEE_ITEMS } from "../data/constants";

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {MARQUEE_ITEMS.map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
}
