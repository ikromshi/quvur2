"use client";

import { useMemo, useState, FormEvent } from "react";
import {
  Activity,
  ArrowRight,
  Droplets,
  Globe2,
  LockKeyhole,
  Mail,
  Network,
  ShieldCheck,
} from "lucide-react";

interface GateAuthProps {
  children: React.ReactNode;
}

type Language = "en" | "ru" | "uz";

type FeatureCopy = {
  title: string;
  text: string;
};

type LandingCopy = {
  nav: {
    product: string;
    portal: string;
    reach: string;
  };
  language: string;
  heroEyebrow: string;
  heroTitle: string;
  heroText: string;
  heroPrimary: string;
  heroSecondary: string;
  metricA: string;
  metricB: string;
  metricC: string;
  featuresTitle: string;
  featuresText: string;
  features: FeatureCopy[];
  portalTitle: string;
  portalText: string;
  email: string;
  password: string;
  emailPlaceholder: string;
  passwordPlaceholder: string;
  signIn: string;
  signingIn: string;
  invalid: string;
  failed: string;
  secure: string;
  reachTitle: string;
  reachText: string;
  name: string;
  namePlaceholder: string;
  message: string;
  messagePlaceholder: string;
  send: string;
  mailNote: string;
};

const contactEmail = "numanovikrom454@gmail.com";

const copy = {
  en: {
    nav: {
      product: "Platform",
      portal: "Portal",
      reach: "Reach out",
    },
    language: "Language",
    heroEyebrow: "Water network intelligence",
    heroTitle: "Model, test, and understand complex water systems.",
    heroText:
      "QUVUR brings hydraulic modeling, water quality analysis, and operational scenario planning into a fast browser workspace built for engineering teams.",
    heroPrimary: "Company portal",
    heroSecondary: "Reach out",
    metricA: "Network scenarios",
    metricB: "Quality simulations",
    metricC: "Browser workspace",
    featuresTitle: "A clearer way to work with water infrastructure",
    featuresText:
      "Build and review distribution networks, inspect flow behavior, compare operating conditions, and evaluate chemical transport without heavyweight desktop setup.",
    features: [
      {
        title: "Hydraulic insight",
        text: "Study pressure, demand, storage, pumps, valves, and flow direction across connected pipe systems.",
      },
      {
        title: "Water quality runs",
        text: "Explore age, concentration, and treatment scenarios so teams can reason about changes before they happen.",
      },
      {
        title: "Engineering workflow",
        text: "Import model files, run simulations, review outputs, and share findings from a focused web interface.",
      },
    ],
    portalTitle: "Company log-in portal",
    portalText:
      "Authorized teams can sign in to open the modeling workspace and continue active projects.",
    email: "Email",
    password: "Password",
    emailPlaceholder: "name@company.com",
    passwordPlaceholder: "Enter your password",
    signIn: "Sign in",
    signingIn: "Signing in...",
    invalid: "Invalid email or password",
    failed: "Something went wrong. Please try again.",
    secure: "Protected access for company users",
    reachTitle: "Reach out",
    reachText:
      "Tell us about your water network, modeling goals, or deployment needs. We will get back to you directly.",
    name: "Name",
    namePlaceholder: "Your name",
    message: "Message",
    messagePlaceholder: "What would you like to model or discuss?",
    send: "Send email",
    mailNote:
      "Your message opens in your mail app and is addressed to our team.",
  },
  ru: {
    nav: {
      product: "Платформа",
      portal: "Портал",
      reach: "Связаться",
    },
    language: "Язык",
    heroEyebrow: "Аналитика водных сетей",
    heroTitle: "Моделируйте, проверяйте и понимайте сложные водные системы.",
    heroText:
      "QUVUR объединяет гидравлическое моделирование, анализ качества воды и планирование сценариев в быстрой браузерной среде для инженерных команд.",
    heroPrimary: "Портал компании",
    heroSecondary: "Связаться",
    metricA: "Сценарии сети",
    metricB: "Симуляции качества",
    metricC: "Рабочая среда в браузере",
    featuresTitle: "Более понятная работа с водной инфраструктурой",
    featuresText:
      "Создавайте и проверяйте распределительные сети, анализируйте потоки, сравнивайте режимы работы и оценивайте перенос химических веществ без тяжелой установки на компьютер.",
    features: [
      {
        title: "Гидравлическая картина",
        text: "Изучайте давление, спрос, резервуары, насосы, клапаны и направление потоков в связанных трубопроводных системах.",
      },
      {
        title: "Качество воды",
        text: "Оценивайте возраст воды, концентрации и сценарии обработки, чтобы команды могли заранее понимать последствия изменений.",
      },
      {
        title: "Инженерный процесс",
        text: "Импортируйте модели, запускайте расчеты, просматривайте результаты и делитесь выводами в удобном веб-интерфейсе.",
      },
    ],
    portalTitle: "Портал входа компании",
    portalText:
      "Авторизованные команды могут войти, открыть рабочую среду моделирования и продолжить активные проекты.",
    email: "Email",
    password: "Пароль",
    emailPlaceholder: "name@company.com",
    passwordPlaceholder: "Введите пароль",
    signIn: "Войти",
    signingIn: "Вход...",
    invalid: "Неверный email или пароль",
    failed: "Что-то пошло не так. Попробуйте еще раз.",
    secure: "Защищенный доступ для пользователей компании",
    reachTitle: "Связаться",
    reachText:
      "Расскажите о вашей водной сети, целях моделирования или требованиях к внедрению. Мы ответим напрямую.",
    name: "Имя",
    namePlaceholder: "Ваше имя",
    message: "Сообщение",
    messagePlaceholder: "Что вы хотите смоделировать или обсудить?",
    send: "Отправить email",
    mailNote:
      "Ваше сообщение откроется в почтовом приложении и будет адресовано нашей команде.",
  },
  uz: {
    nav: {
      product: "Platforma",
      portal: "Portal",
      reach: "Bog'lanish",
    },
    language: "Til",
    heroEyebrow: "Suv tarmoqlari tahlili",
    heroTitle: "Murakkab suv tizimlarini modellashtiring, sinang va tushuning.",
    heroText:
      "QUVUR gidravlik modellashtirish, suv sifati tahlili va operatsion ssenariylarni tezkor brauzer ish muhitida birlashtiradi.",
    heroPrimary: "Kompaniya portali",
    heroSecondary: "Bog'lanish",
    metricA: "Tarmoq ssenariylari",
    metricB: "Sifat simulyatsiyalari",
    metricC: "Brauzer ish muhiti",
    featuresTitle: "Suv infratuzilmasi bilan aniqroq ishlash",
    featuresText:
      "Taqsimlash tarmoqlarini yarating va tekshiring, oqim holatini ko'ring, ish rejimlarini solishtiring va kimyoviy modda tarqalishini og'ir desktop sozlamalarisiz baholang.",
    features: [
      {
        title: "Gidravlik tushuncha",
        text: "Bosim, talab, saqlash inshootlari, nasoslar, klapanlar va ulangan quvur tizimlaridagi oqim yo'nalishini o'rganing.",
      },
      {
        title: "Suv sifati hisoblari",
        text: "Suv yoshi, konsentratsiya va tozalash ssenariylarini baholab, o'zgarishlar ta'sirini oldindan tushuning.",
      },
      {
        title: "Muhandislik jarayoni",
        text: "Model fayllarini import qiling, simulyatsiyalarni ishga tushiring, natijalarni ko'rib chiqing va xulosalarni ulashing.",
      },
    ],
    portalTitle: "Kompaniya kirish portali",
    portalText:
      "Ruxsat berilgan jamoalar modellashtirish ish muhitini ochish va loyihalarni davom ettirish uchun tizimga kirishi mumkin.",
    email: "Email",
    password: "Parol",
    emailPlaceholder: "name@company.com",
    passwordPlaceholder: "Parolni kiriting",
    signIn: "Kirish",
    signingIn: "Kirilmoqda...",
    invalid: "Email yoki parol noto'g'ri",
    failed: "Nimadir xato ketdi. Qayta urinib ko'ring.",
    secure: "Kompaniya foydalanuvchilari uchun himoyalangan kirish",
    reachTitle: "Bog'lanish",
    reachText:
      "Suv tarmog'ingiz, modellashtirish maqsadlaringiz yoki joriy etish ehtiyojlaringiz haqida yozing. Sizga bevosita javob beramiz.",
    name: "Ism",
    namePlaceholder: "Ismingiz",
    message: "Xabar",
    messagePlaceholder:
      "Nimani modellashtirish yoki muhokama qilishni xohlaysiz?",
    send: "Email yuborish",
    mailNote:
      "Xabaringiz pochta ilovasida ochiladi va jamoamizga yuborishga tayyor bo'ladi.",
  },
} satisfies Record<Language, LandingCopy>;

const languages: Array<{ id: Language; label: string }> = [
  { id: "en", label: "EN" },
  { id: "ru", label: "RU" },
  { id: "uz", label: "UZ" },
];

export function GateAuth({ children }: GateAuthProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window !== "undefined") {
      return document.cookie.includes("gate_auth=authenticated");
    }
    return false;
  });
  const [language, setLanguage] = useState<Language>("en");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const t = copy[language];

  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent("QUVUR inquiry");
    const body = encodeURIComponent(
      [
        contactName ? `Name: ${contactName}` : "",
        contactMessage ? `Message: ${contactMessage}` : "",
      ]
        .filter(Boolean)
        .join("\n\n"),
    );

    return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }, [contactMessage, contactName]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/gate-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        setIsAuthenticated(true);
      } else {
        setError(t.invalid);
      }
    } catch {
      setError(t.failed);
    } finally {
      setIsLoading(false);
    }
  };

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.location.href = mailtoLink;
  };

  if (isAuthenticated) {
    return children;
  }

  return (
    <main className="landing-shell">
      <nav className="landing-nav" aria-label="Primary">
        <a href="#top" className="brand-mark" aria-label="QUVUR">
          <span className="brand-symbol">
            <Droplets size={20} strokeWidth={2.4} />
          </span>
          <span>QUVUR</span>
        </a>

        <div className="nav-links">
          <a href="#platform">{t.nav.product}</a>
          <a href="#portal">{t.nav.portal}</a>
          <a href="#reach-out">{t.nav.reach}</a>
        </div>

        <div className="language-switch" aria-label={t.language}>
          <Globe2 size={16} aria-hidden="true" />
          {languages.map((item) => (
            <button
              key={item.id}
              type="button"
              className={item.id === language ? "active" : ""}
              onClick={() => setLanguage(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-text">{t.heroText}</p>
          <div className="hero-actions">
            <a className="primary-action" href="#portal">
              {t.heroPrimary}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="secondary-action" href="#reach-out">
              <Mail size={18} aria-hidden="true" />
              {t.heroSecondary}
            </a>
          </div>
        </div>

        <div className="banner-frame" aria-hidden="true">
          <img src="/banner.png" alt="" className="banner-image" />
        </div>
      </section>

      <section className="metric-strip" aria-label="Platform highlights">
        <div>
          <strong>12+</strong>
          <span>{t.metricA}</span>
        </div>
        <div>
          <strong>24h</strong>
          <span>{t.metricB}</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>{t.metricC}</span>
        </div>
      </section>

      <section id="platform" className="info-section">
        <div className="section-intro">
          <p className="eyebrow">{t.nav.product}</p>
          <h2>{t.featuresTitle}</h2>
          <p>{t.featuresText}</p>
        </div>

        <div className="feature-grid">
          {t.features.map(
            (feature: { title: string; text: string }, index: number) => {
              const Icon =
                index === 0 ? Network : index === 1 ? Activity : ShieldCheck;
              return (
                <article className="feature-card" key={feature.title}>
                  <span className="feature-icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              );
            },
          )}
        </div>
      </section>

      <section className="portal-reach-grid">
        <article id="portal" className="portal-panel">
          <div className="panel-heading">
            <span className="feature-icon">
              <LockKeyhole size={22} aria-hidden="true" />
            </span>
            <div>
              <h2>{t.portalTitle}</h2>
              <p>{t.portalText}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="gate-form">
            <label>
              <span>{t.email}</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                required
                autoComplete="email"
              />
            </label>

            <label>
              <span>{t.password}</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t.passwordPlaceholder}
                required
                autoComplete="current-password"
              />
            </label>

            {error && <div className="gate-error">{error}</div>}

            <button
              type="submit"
              className="submit-button"
              disabled={isLoading}
            >
              {isLoading ? t.signingIn : t.signIn}
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </form>

          <p className="secure-note">
            <ShieldCheck size={16} aria-hidden="true" />
            {t.secure}
          </p>
        </article>

        <article id="reach-out" className="reach-panel">
          <div className="panel-heading">
            <span className="feature-icon">
              <Mail size={22} aria-hidden="true" />
            </span>
            <div>
              <h2>{t.reachTitle}</h2>
              <p>{t.reachText}</p>
            </div>
          </div>

          <form onSubmit={handleContactSubmit} className="contact-form">
            <label>
              <span>{t.name}</span>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder={t.namePlaceholder}
                autoComplete="name"
              />
            </label>

            <label>
              <span>{t.message}</span>
              <textarea
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                placeholder={t.messagePlaceholder}
                rows={5}
                required
              />
            </label>

            <button type="submit" className="submit-button">
              {t.send}
              <Mail size={18} aria-hidden="true" />
            </button>
          </form>

          <p className="mail-note">
            <ShieldCheck size={16} aria-hidden="true" />
            {t.mailNote}
          </p>
        </article>
      </section>

      <style jsx>{`
        .landing-shell {
          min-height: 100vh;
          color: #0f2742;
          background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.72),
              transparent 34%
            ),
            radial-gradient(
              circle at 14% 12%,
              rgba(37, 112, 174, 0.16),
              transparent 28%
            ),
            radial-gradient(
              circle at 86% 18%,
              rgba(118, 179, 220, 0.16),
              transparent 30%
            ),
            linear-gradient(180deg, #f5faff 0%, #ffffff 48%, #eaf5fc 100%);
          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            sans-serif;
          overflow-x: hidden;
        }

        .landing-nav {
          position: sticky;
          top: 0;
          z-index: 20;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 28px;
          width: min(1160px, calc(100% - 32px));
          margin: 14px auto 0;
          padding: 10px 12px;
          border: 1px solid rgba(174, 208, 228, 0.62);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.74);
          box-shadow:
            0 18px 60px rgba(9, 70, 112, 0.09),
            inset 0 1px 0 rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
        }

        .brand-mark,
        .nav-links a,
        .hero-actions a {
          color: inherit;
          text-decoration: none;
        }

        .brand-mark {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #053b65;
        }

        .brand-symbol,
        .feature-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #0d7fc2;
          background: linear-gradient(180deg, #eef9ff, #d9ecf8);
          border: 1px solid rgba(130, 184, 216, 0.7);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .brand-symbol {
          width: 38px;
          height: 38px;
          border-radius: 8px;
        }

        .nav-links {
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .nav-links a {
          border-radius: 999px;
          padding: 9px 14px;
          color: #183f5c;
          font-size: 14px;
          font-weight: 650;
          transition:
            background 180ms ease,
            color 180ms ease;
        }

        .nav-links a:hover {
          background: #e5f3ff;
          color: #075985;
        }

        .language-switch {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          min-height: 42px;
          padding: 4px;
          border: 1px solid #c5dfef;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.86);
          color: #315470;
          box-shadow: 0 12px 30px rgba(13, 90, 145, 0.1);
        }

        .language-switch button {
          width: 38px;
          height: 30px;
          border: 0;
          border-radius: 999px;
          background: transparent;
          color: #42657d;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
        }

        .language-switch button.active {
          color: #ffffff;
          background: #0b78b8;
        }

        .hero-section {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(460px, 1.05fr);
          align-items: center;
          gap: 46px;
          width: min(1160px, calc(100% - 32px));
          min-height: clamp(560px, calc(100vh - 148px), 700px);
          margin: 0 auto;
          padding: 34px 0 48px;
        }

        .hero-copy {
          position: relative;
          z-index: 2;
        }

        .eyebrow {
          margin: 0 0 14px;
          color: #0b78b8;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        h1,
        h2,
        h3,
        p {
          margin-top: 0;
        }

        h1 {
          max-width: 760px;
          margin-bottom: 24px;
          color: #052d4d;
          font-size: clamp(40px, 5vw, 66px);
          line-height: 1.02;
          letter-spacing: 0;
          text-wrap: balance;
        }

        .hero-text {
          max-width: 610px;
          margin-bottom: 34px;
          color: #395d78;
          font-size: 18px;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .primary-action,
        .secondary-action,
        .submit-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 48px;
          border-radius: 8px;
          padding: 0 18px;
          font-weight: 800;
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            background 180ms ease;
        }

        .primary-action,
        .submit-button {
          border: 1px solid #0b6fa9;
          color: #ffffff;
          background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.16),
              transparent 42%
            ),
            linear-gradient(180deg, #128bd0 0%, #075f95 100%);
          box-shadow:
            0 16px 32px rgba(7, 106, 164, 0.22),
            inset 0 1px 0 rgba(255, 255, 255, 0.22);
        }

        .hero-actions .primary-action {
          color: #ffffff;
        }

        .secondary-action {
          border: 1px solid rgba(174, 208, 228, 0.95);
          color: #0b5d8f;
          background: rgba(255, 255, 255, 0.88);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95);
        }

        .primary-action:hover,
        .secondary-action:hover,
        .submit-button:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 20px 34px rgba(7, 106, 164, 0.2);
        }

        .banner-frame {
          position: relative;
          aspect-ratio: 2940 / 1590;
          min-height: 420px;
          border: 1px solid rgba(123, 179, 214, 0.42);
          border-radius: 8px;
          background: #eef7fd;
          box-shadow:
            0 36px 90px rgba(8, 67, 109, 0.17),
            inset 0 1px 0 rgba(255, 255, 255, 0.92);
          overflow: hidden;
        }

        .banner-frame:before {
          content: "";
          position: absolute;
          inset: 12px;
          z-index: 1;
          border: 1px solid rgba(255, 255, 255, 0.68);
          border-radius: 6px;
          pointer-events: none;
        }

        .banner-frame:after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.34),
            transparent 34%,
            rgba(5, 45, 77, 0.08)
          );
          pointer-events: none;
        }

        .banner-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .metric-strip,
        .info-section,
        .portal-reach-grid {
          width: min(1160px, calc(100% - 32px));
          margin: 0 auto;
        }

        .metric-strip {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          border: 1px solid rgba(191, 218, 234, 0.9);
          border-radius: 8px;
          background: rgba(191, 218, 234, 0.9);
          overflow: hidden;
          box-shadow: 0 24px 70px rgba(13, 83, 133, 0.12);
        }

        .metric-strip div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          min-height: 96px;
          padding: 24px 28px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.9),
            rgba(247, 252, 255, 0.88)
          );
        }

        .metric-strip strong {
          color: #075985;
          font-size: 32px;
          line-height: 1;
        }

        .metric-strip span {
          color: #42657d;
          font-size: 14px;
          font-weight: 700;
          text-align: right;
        }

        .info-section {
          padding: 110px 0 82px;
        }

        .section-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(320px, 0.8fr);
          gap: 56px;
          align-items: end;
          margin-bottom: 34px;
        }

        .section-intro h2,
        .panel-heading h2 {
          margin-bottom: 0;
          color: #052d4d;
          font-size: clamp(28px, 4vw, 48px);
          line-height: 1.08;
          letter-spacing: 0;
        }

        .section-intro p:not(.eyebrow),
        .panel-heading p,
        .feature-card p,
        .secure-note,
        .mail-note {
          color: #4b6980;
          line-height: 1.65;
        }

        .feature-grid,
        .portal-reach-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .feature-card,
        .portal-panel,
        .reach-panel {
          position: relative;
          border: 1px solid rgba(190, 218, 235, 0.88);
          border-radius: 8px;
          background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.94),
              rgba(247, 252, 255, 0.9)
            ),
            linear-gradient(135deg, rgba(255, 255, 255, 0.7), transparent);
          box-shadow:
            0 24px 70px rgba(8, 67, 109, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.95);
          overflow: hidden;
        }

        .feature-card:before,
        .portal-panel:before,
        .reach-panel:before {
          content: "";
          position: absolute;
          inset: 0 0 auto;
          height: 3px;
          background: linear-gradient(90deg, #0c74ad, #8dc8ea, #ffffff);
        }

        .feature-card {
          min-height: 260px;
          padding: 28px;
        }

        .feature-icon {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          margin-bottom: 22px;
        }

        .feature-card h3 {
          margin-bottom: 10px;
          color: #073b62;
          font-size: 20px;
          letter-spacing: 0;
        }

        .portal-reach-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          align-items: stretch;
          padding-bottom: 92px;
        }

        .portal-panel,
        .reach-panel {
          display: flex;
          min-height: 100%;
          flex-direction: column;
          padding: 32px;
        }

        .panel-heading {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 16px;
          margin-bottom: 28px;
        }

        .panel-heading .feature-icon {
          margin: 2px 0 0;
        }

        .panel-heading h2 {
          font-size: 28px;
        }

        .panel-heading p {
          margin: 12px 0 0;
        }

        .gate-form,
        .contact-form {
          display: grid;
          gap: 16px;
          align-content: start;
        }

        label {
          display: grid;
          gap: 8px;
          color: #244a66;
          font-size: 13px;
          font-weight: 800;
        }

        input,
        textarea {
          width: 100%;
          border: 1px solid #bcd8ea;
          border-radius: 8px;
          background: #ffffff;
          color: #0d2f4a;
          font: inherit;
          font-size: 15px;
          font-weight: 500;
          outline: none;
          transition:
            border-color 180ms ease,
            box-shadow 180ms ease;
        }

        input {
          height: 48px;
          padding: 0 14px;
        }

        textarea {
          resize: vertical;
          min-height: 132px;
          padding: 13px 14px;
        }

        input::placeholder,
        textarea::placeholder {
          color: #83a0b5;
        }

        input:focus,
        textarea:focus {
          border-color: #0d82c9;
          box-shadow: 0 0 0 4px rgba(13, 130, 201, 0.13);
        }

        .submit-button {
          width: 100%;
          cursor: pointer;
          font-size: 15px;
        }

        .submit-button:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }

        .gate-error {
          border: 1px solid #fecaca;
          border-radius: 8px;
          padding: 12px 14px;
          color: #b91c1c;
          background: #fff1f2;
          font-size: 14px;
          font-weight: 700;
        }

        .secure-note,
        .mail-note {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          margin: 20px 0 0;
          font-size: 14px;
        }

        .portal-panel .secure-note {
          margin-top: auto;
          padding-top: 20px;
        }

        @media (max-width: 980px) {
          .landing-nav {
            grid-template-columns: 1fr;
            justify-items: center;
            gap: 12px;
          }

          .hero-section,
          .section-intro,
          .portal-reach-grid {
            grid-template-columns: 1fr;
          }

          .hero-section {
            min-height: auto;
            padding-top: 34px;
          }

          .banner-frame {
            min-height: 420px;
          }

          .feature-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 680px) {
          .landing-nav {
            position: relative;
            grid-template-columns: auto auto;
            justify-content: space-between;
            justify-items: stretch;
            gap: 12px;
            padding: 12px;
          }

          .nav-links {
            grid-column: 1 / -1;
            width: 100%;
            justify-content: space-between;
          }

          .nav-links a {
            padding: 8px 9px;
            font-size: 13px;
          }

          h1 {
            margin-bottom: 18px;
            font-size: 36px;
            line-height: 1.05;
          }

          .hero-text {
            font-size: 16px;
            line-height: 1.55;
            margin-bottom: 24px;
          }

          .hero-actions,
          .metric-strip,
          .feature-grid,
          .portal-reach-grid {
            grid-template-columns: 1fr;
          }

          .hero-actions {
            display: grid;
          }

          .hero-section {
            gap: 24px;
            padding: 18px 0 26px;
          }

          .banner-frame {
            min-height: 180px;
          }

          .metric-strip div {
            min-height: 84px;
          }

          .portal-panel,
          .reach-panel,
          .feature-card {
            padding: 24px;
          }
        }
      `}</style>
    </main>
  );
}
