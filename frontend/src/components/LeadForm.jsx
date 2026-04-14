import { useState } from "react";
import Select from "./Select";
import { INITIAL_FORM, FORMAT_OPTIONS, COURSE_OPTIONS } from "../data/constants";

export default function LeadForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isLoading, setIsLoading] = useState(false);

  const updateForm = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handlePhoneInput = (e) => {
    const raw = e.target.value.replace(/\D/g, "");
    const digits = raw.startsWith("7") ? raw.slice(1) : (raw.startsWith("8") ? raw.slice(1) : raw);
    let masked = "+7";
    if (digits.length > 0) masked += " (" + digits.slice(0, 3);
    if (digits.length >= 3) masked += ") " + digits.slice(3, 6);
    if (digits.length >= 6) masked += "-" + digits.slice(6, 8);
    if (digits.length >= 8) masked += "-" + digits.slice(8, 10);
    setForm((prev) => ({ ...prev, phone: masked }));
  };

  const handlePhoneKeyDown = (e) => {
    if (e.key === "Backspace" && form.phone.length <= 3) {
      e.preventDefault();
      setForm((prev) => ({ ...prev, phone: "+7" }));
    }
  };

  const handlePhoneFocus = () => {
    if (!form.phone) setForm((prev) => ({ ...prev, phone: "+7" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });
    setIsLoading(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Ошибка отправки.");

      setStatus({
        type: "success",
        text: "Заявка принята! Скоро свяжемся и подберём удобное время."
      });
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus({ type: "error", text: err.message || "Не удалось отправить." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="lead-form" className="section">
      <div className="container form-container reveal">
        <div className="form-left">
          <p className="tag">Запись на урок</p>
          <h2>Оставьте заявку и мы<br />свяжемся с вами</h2>
          <p className="form-hint">
            Также записаться можно по телефону
            <a href="tel:+79609730086"> +7 (960) 973-00-86</a> или через{" "}
            <a href="https://vk.com/soulscream70" target="_blank" rel="noreferrer">
              сообщения сообщества ВКонтакте
            </a>.
          </p>
          <p className="secret-code">промокод: New10</p>
        </div>
        <form className="lead-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Имя
              <input type="text" value={form.name} onChange={updateForm("name")} required />
            </label>
            <label>
              Телефон
              <input
                type="tel"
                value={form.phone}
                onChange={handlePhoneInput}
                onKeyDown={handlePhoneKeyDown}
                onFocus={handlePhoneFocus}
                placeholder="+7 (___) ___-__-__"
                maxLength={18}
                required
              />
            </label>
          </div>
          <div className="form-row">
            <Select
              label="Формат"
              value={form.format}
              options={FORMAT_OPTIONS}
              onChange={(v) => setForm((prev) => ({ ...prev, format: v }))}
            />
            <Select
              label="Направление"
              value={form.course}
              options={COURSE_OPTIONS}
              onChange={(v) => setForm((prev) => ({ ...prev, course: v }))}
            />
          </div>
          <label>
            Комментарий
            <textarea
              rows="4"
              value={form.message}
              onChange={updateForm("message")}
              placeholder="Расскажите про опыт, цели и удобное время"
            />
          </label>
          <label>
            Промокод
            <input
              type="text"
              value={form.promo}
              onChange={updateForm("promo")}
              placeholder="Если есть"
              className="promo-input"
            />
          </label>
          <button className="btn btn-primary btn-lg" disabled={isLoading} type="submit">
            {isLoading ? "Отправка..." : "Отправить заявку"}
          </button>
          {status.text && <p className={`form-status ${status.type}`}>{status.text}</p>}
        </form>
      </div>
    </section>
  );
}
