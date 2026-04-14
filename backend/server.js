import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import axios from "axios";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = Number(process.env.PORT) || 8787;
const frontendDistPath = process.env.FRONTEND_DIST_PATH
  ? path.resolve(process.env.FRONTEND_DIST_PATH)
  : path.resolve(__dirname, "../frontend/dist");

app.use(cors());
app.use(express.json());

function escapeHtml(raw) {
  return String(raw)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function buildLeadText(lead) {
  return [
    "Новая заявка с сайта SoulScream",
    `Дата: ${new Date().toLocaleString("ru-RU")}`,
    `Имя: ${lead.name}`,
    `Телефон: ${lead.phone}`,
    `Формат: ${lead.format || "-"}`,
    `Направление: ${lead.course || "-"}`,
    `Комментарий: ${lead.message || "-"}`,
    lead.promo ? `Промокод: ${lead.promo}` : null
  ].filter(Boolean).join("\n");
}

async function sendEmail(text, lead) {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
    SMTP_TO
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_TO) {
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });

  await transporter.sendMail({
    from: SMTP_FROM || SMTP_USER,
    to: SMTP_TO,
    subject: `Новая заявка SoulScream (${lead.name})`,
    text,
    html: `<pre style="font-family: Arial, sans-serif">${escapeHtml(text)}</pre>`
  });

  return true;
}

async function sendVk(text) {
  const { VK_GROUP_TOKEN, VK_PEER_ID, VK_API_VERSION = "5.199" } = process.env;

  if (!VK_GROUP_TOKEN || !VK_PEER_ID) {
    return false;
  }

  const params = new URLSearchParams({
    access_token: VK_GROUP_TOKEN,
    peer_id: VK_PEER_ID,
    random_id: String(Math.floor(Math.random() * 1_000_000_000)),
    message: text,
    v: VK_API_VERSION
  });

  const response = await axios.post("https://api.vk.com/method/messages.send", params);

  if (response.data?.error) {
    throw new Error(`VK API error: ${response.data.error.error_msg}`);
  }

  return true;
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/lead", async (req, res) => {
  const { name, phone, format, course, message } = req.body ?? {};

  if (!name || !phone) {
    return res.status(400).json({ message: "Имя и телефон обязательны." });
  }

  const lead = {
    name: String(name).trim(),
    phone: String(phone).trim(),
    format: String(format || "").trim(),
    course: String(course || "").trim(),
    message: String(message || "").trim()
  };

  const leadText = buildLeadText(lead);
  const channels = [];

  try {
    const [emailSent, vkSent] = await Promise.all([sendEmail(leadText, lead), sendVk(leadText)]);

    if (!emailSent && !vkSent) {
      return res.status(500).json({
        message: "Не настроены каналы доставки. Проверьте переменные SMTP/VK."
      });
    }

    if (emailSent) {
      channels.push("email");
    }
    if (vkSent) {
      channels.push("vk");
    }

    return res.json({ ok: true, channels });
  } catch (error) {
    return res.status(500).json({
      message: "Не удалось отправить заявку.",
      details: error instanceof Error ? error.message : String(error)
    });
  }
});

if (fs.existsSync(frontendDistPath)) {
  app.use(express.static(frontendDistPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(frontendDistPath, "index.html"));
  });
}

app.listen(port, () => {
  console.log(`SoulScream backend running on http://localhost:${port}`);
});
