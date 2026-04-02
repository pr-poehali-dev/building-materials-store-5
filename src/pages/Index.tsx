import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

// ─── данные каталога ───────────────────────────────────────────────
const categories = [
  { id: "concrete", label: "Бетон", icon: "Cylinder" },
  { id: "lumber",   label: "Доски и брус", icon: "Layers" },
  { id: "roofing",  label: "Кровля", icon: "Home" },
  { id: "all",      label: "Все товары", icon: "Grid3x3" },
];

const products = [
  {
    id: 1, category: "concrete",
    name: "Бетон М200",
    desc: "Универсальный бетон для фундаментов, стяжек, дорожек. Прочность 200 кг/см².",
    unit: "м³", price: 4800,
    tags: ["Популярное", "Опт"],
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    id: 2, category: "concrete",
    name: "Бетон М300",
    desc: "Высокопрочный бетон для несущих конструкций, колонн и перекрытий.",
    unit: "м³", price: 5600,
    tags: ["Хит"],
    img: "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=80",
  },
  {
    id: 3, category: "lumber",
    name: "Доска обрезная 50×150",
    desc: "Хвойные породы, камерная сушка. ГОСТ 8486-86. Длина 6 м.",
    unit: "м³", price: 28000,
    tags: ["Склад"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 4, category: "lumber",
    name: "Брус клееный 100×200",
    desc: "Клееный брус из сосны. Влажность ≤12%. Идеален для домостроения.",
    unit: "м³", price: 52000,
    tags: ["Хит", "Опт"],
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    id: 5, category: "roofing",
    name: "Профнастил С8",
    desc: "Оцинкованный профнастил с полимерным покрытием. Толщина 0.5 мм.",
    unit: "м²", price: 380,
    tags: ["Популярное"],
    img: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600&q=80",
  },
  {
    id: 6, category: "roofing",
    name: "Металлочерепица Монтеррей",
    desc: "Покрытие полиэстер. Гарантия 15 лет. Любой цвет по RAL.",
    unit: "м²", price: 650,
    tags: ["Хит"],
    img: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600&q=80",
  },
];

const advantages = [
  { icon: "ShieldCheck", title: "Гарантия качества", desc: "Все материалы сертифицированы. Работаем напрямую с заводами-производителями." },
  { icon: "Truck",       title: "Быстрая доставка",  desc: "Собственный автопарк. Доставка по городу за 4 часа, по области — на следующий день." },
  { icon: "Package",     title: "Оптовые цены",       desc: "Скидки от объёма от 5 до 25%. Индивидуальные условия для строительных компаний." },
  { icon: "Headphones",  title: "Поддержка 24/7",     desc: "Менеджеры на связи круглосуточно. Поможем подобрать материалы под ваш проект." },
];

const PRICE_PER_KM = 45;   // руб/км
const PRICE_PER_TON = 350; // руб/т

// ─── компонент ────────────────────────────────────────────────────
export default function Index() {
  const [activeCat, setActiveCat] = useState("all");
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // калькулятор доставки
  const [delivWeight, setDelivWeight] = useState(5);
  const [delivDist,   setDelivDist]   = useState(20);
  const delivCost = Math.round(delivWeight * PRICE_PER_TON + delivDist * PRICE_PER_KM);

  // форма заявки
  const [formName,  setFormName]  = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formSent,  setFormSent]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = activeCat === "all"
    ? products
    : products.filter(p => p.category === activeCat);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const navItems = [
    { id: "catalog",  label: "Каталог" },
    { id: "delivery", label: "Доставка" },
    { id: "contacts", label: "Контакты" },
  ];

  return (
    <div
      className="font-golos min-h-screen overflow-x-hidden"
      style={{
        background: "#111210",
        color: "#e8e4da",
        "--clr-bg":      "#111210",
        "--clr-surface": "#1a1c18",
        "--clr-card":    "#222420",
        "--clr-border":  "rgba(255,255,255,0.07)",
        "--clr-accent":  "#e8a020",
        "--clr-accent2": "#c8682a",
        "--clr-text":    "#e8e4da",
        "--clr-muted":   "#8a8880",
      } as React.CSSProperties}
    >

      {/* ══════════ HEADER ══════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#111210]/96 backdrop-blur shadow-[0_1px_0_rgba(255,255,255,0.06)] py-3"
            : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#e8a020] flex items-center justify-center">
              <Icon name="HardHat" size={18} className="text-[#111210]" />
            </div>
            <span className="font-oswald text-xl font-semibold tracking-wider text-[#e8e4da] uppercase">
              СтройБаза
            </span>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(n => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-[#8a8880] hover:text-[#e8e4da] transition-colors text-sm font-medium tracking-wider uppercase"
              >
                {n.label}
              </button>
            ))}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:+78001234567"
              className="flex items-center gap-2 text-[#e8a020] font-oswald text-lg font-medium tracking-wide hover:text-[#f0b030] transition-colors"
            >
              <Icon name="Phone" size={16} />
              8 800 123-45-67
            </a>
            <button
              onClick={() => scrollTo("contacts")}
              className="bg-[#e8a020] text-[#111210] hover:bg-[#f0b030] transition-colors px-5 py-2.5 text-sm font-semibold uppercase tracking-widest"
            >
              Заказать
            </button>
          </div>

          {/* Burger */}
          <button
            className="md:hidden text-[#e8e4da]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#1a1c18] border-t border-white/5 px-5 py-6 flex flex-col gap-5">
            {navItems.map(n => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-left font-oswald text-2xl font-medium text-[#e8e4da] uppercase tracking-wider"
              >
                {n.label}
              </button>
            ))}
            <a
              href="tel:+78001234567"
              className="text-[#e8a020] font-oswald text-xl font-medium"
            >
              8 800 123-45-67
            </a>
          </div>
        )}
      </header>

      {/* ══════════ HERO ══════════ */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* BG */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=85"
            alt="Стройматериалы"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111210]/95 via-[#111210]/75 to-[#111210]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111210] via-transparent to-transparent" />
          {/* texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='1' height='1' fill='%23fff'/%3E%3C/svg%3E\")",
            }}
          />
        </div>

        {/* diagonal accent line */}
        <div
          className="absolute right-0 top-0 w-1 h-full opacity-30"
          style={{ background: "linear-gradient(180deg,transparent,#e8a020,transparent)" }}
        />

        <div className="relative max-w-7xl mx-auto px-5 pt-24 pb-16 w-full">
          <div className="max-w-2xl">

            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#e8a020]" />
              <span className="text-[#e8a020] text-xs font-medium tracking-[0.35em] uppercase">
                Строительные материалы
              </span>
            </div>

            <h1 className="font-oswald text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.95] uppercase tracking-tight mb-6 text-[#e8e4da] animate-fade-up" style={{ animationFillMode: "both" }}>
              Всё для<br />
              <span className="text-[#e8a020]">большой</span><br />
              стройки
            </h1>

            <p className="text-[#8a8880] text-lg leading-relaxed max-w-md mb-10 opacity-0 animate-fade-up"
               style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
              Бетон, доски, брус, кровля — оптом и в розницу. Собственный склад 8&nbsp;000&nbsp;м². Доставка по городу за 4&nbsp;часа.
            </p>

            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up"
                 style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
              <button
                onClick={() => scrollTo("catalog")}
                className="bg-[#e8a020] text-[#111210] hover:bg-[#f0b030] transition-colors px-8 py-4 font-oswald font-semibold text-base uppercase tracking-widest flex items-center gap-2"
              >
                Смотреть каталог
                <Icon name="ArrowRight" size={18} />
              </button>
              <button
                onClick={() => scrollTo("delivery")}
                className="border border-[#e8e4da]/20 text-[#e8e4da] hover:border-[#e8a020]/50 hover:text-[#e8a020] transition-all px-8 py-4 font-oswald font-medium text-base uppercase tracking-widest"
              >
                Рассчитать доставку
              </button>
            </div>

            {/* Stats strip */}
            <div className="mt-16 flex flex-wrap gap-8 opacity-0 animate-fade-up"
                 style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
              {[
                { v: "8 000", l: "м² склада" },
                { v: "15+",   l: "лет на рынке" },
                { v: "2 400", l: "позиций в наличии" },
                { v: "4 ч",   l: "доставка по городу" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-oswald text-3xl font-bold text-[#e8a020]">{s.v}</div>
                  <div className="text-[#8a8880] text-sm mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-10 bg-[#e8a020] animate-pulse" />
          <Icon name="ChevronDown" size={14} className="text-[#e8a020]" />
        </div>
      </section>

      {/* ══════════ ADVANTAGES ══════════ */}
      <section className="bg-[#1a1c18] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-5 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {advantages.map((a, i) => (
            <div key={i} className="bg-[#1a1c18] px-8 py-8 group hover:bg-[#222420] transition-colors duration-300">
              <div className="w-11 h-11 border border-[#e8a020]/30 flex items-center justify-center mb-5 group-hover:bg-[#e8a020]/10 group-hover:border-[#e8a020]/60 transition-all">
                <Icon name={a.icon} fallback="Star" size={20} className="text-[#e8a020]" />
              </div>
              <h3 className="font-oswald text-lg font-semibold uppercase tracking-wide text-[#e8e4da] mb-2">{a.title}</h3>
              <p className="text-[#8a8880] text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ CATALOG ══════════ */}
      <section id="catalog" className="py-24 max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-[#e8a020]" />
              <span className="text-[#e8a020] text-xs font-medium tracking-[0.35em] uppercase">Ассортимент</span>
            </div>
            <h2 className="font-oswald text-[clamp(2rem,4vw,3rem)] font-bold uppercase tracking-tight text-[#e8e4da]">
              Каталог материалов
            </h2>
          </div>
          <p className="text-[#8a8880] text-sm max-w-xs leading-relaxed">
            2&nbsp;400+ позиций в наличии на складе. Оптовые цены при заказе от 5&nbsp;м³.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium uppercase tracking-wider transition-all duration-200 border ${
                activeCat === cat.id
                  ? "bg-[#e8a020] text-[#111210] border-[#e8a020]"
                  : "bg-transparent text-[#8a8880] border-white/10 hover:border-[#e8a020]/40 hover:text-[#e8e4da]"
              }`}
            >
              <Icon name={cat.icon} fallback="Box" size={14} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {filtered.map(p => (
            <div key={p.id} className="bg-[#1a1c18] group hover:bg-[#222420] transition-all duration-300 flex flex-col">
              <div className="relative overflow-hidden h-48">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c18]/80 to-transparent" />
                {/* Tags */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {p.tags.map(t => (
                    <span
                      key={t}
                      className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 ${
                        t === "Хит"
                          ? "bg-[#e8a020] text-[#111210]"
                          : t === "Опт"
                          ? "bg-[#c8682a] text-white"
                          : "bg-black/50 text-[#e8e4da] border border-white/20"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-oswald text-xl font-semibold uppercase tracking-wide text-[#e8e4da] mb-2">
                  {p.name}
                </h3>
                <p className="text-[#8a8880] text-sm leading-relaxed flex-1 mb-5">
                  {p.desc}
                </p>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="font-oswald text-2xl font-bold text-[#e8a020]">
                      {p.price.toLocaleString("ru-RU")} ₽
                    </span>
                    <span className="text-[#8a8880] text-sm ml-1">/ {p.unit}</span>
                  </div>
                  <button
                    onClick={() => scrollTo("contacts")}
                    className="bg-[#e8a020]/10 border border-[#e8a020]/30 text-[#e8a020] hover:bg-[#e8a020] hover:text-[#111210] transition-all duration-200 px-4 py-2 text-xs font-semibold uppercase tracking-widest"
                  >
                    Заказать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => scrollTo("contacts")}
            className="border border-white/15 text-[#8a8880] hover:border-[#e8a020]/50 hover:text-[#e8a020] transition-all px-8 py-3 text-sm uppercase tracking-widest font-medium"
          >
            Нужна позиция не из списка? Свяжитесь с нами
          </button>
        </div>
      </section>

      {/* ══════════ DELIVERY CALCULATOR ══════════ */}
      <section
        id="delivery"
        className="bg-[#1a1c18] border-y border-white/5 py-24"
      >
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#e8a020]" />
              <span className="text-[#e8a020] text-xs font-medium tracking-[0.35em] uppercase">Логистика</span>
            </div>
            <h2 className="font-oswald text-[clamp(2rem,4vw,3rem)] font-bold uppercase tracking-tight text-[#e8e4da] mb-6">
              Доставка материалов
            </h2>

            <div className="space-y-6">
              {[
                { icon: "Clock",   title: "По городу — 4 часа",      desc: "Собственный автопарк из 12 грузовиков. КамАЗы и манипуляторы." },
                { icon: "Map",     title: "По области — следующий день", desc: "Доставляем в радиусе 200 км от города." },
                { icon: "Package", title: "Минимальный заказ 1 м³",   desc: "Без ограничений по весу. Возможна разгрузка краном." },
                { icon: "CreditCard", title: "Оплата при доставке",   desc: "Наличными, картой или безналичный расчёт для юрлиц." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="mt-1 w-9 h-9 border border-[#e8a020]/20 flex items-center justify-center shrink-0 group-hover:border-[#e8a020]/60 group-hover:bg-[#e8a020]/5 transition-all">
                    <Icon name={item.icon} fallback="Check" size={16} className="text-[#e8a020]" />
                  </div>
                  <div>
                    <div className="font-oswald text-base font-semibold uppercase text-[#e8e4da] tracking-wide">{item.title}</div>
                    <div className="text-[#8a8880] text-sm mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — calculator */}
          <div className="bg-[#222420] border border-white/7 p-8">
            <div className="flex items-center gap-3 mb-8">
              <Icon name="Calculator" size={18} className="text-[#e8a020]" />
              <h3 className="font-oswald text-xl font-bold uppercase tracking-wide text-[#e8e4da]">
                Калькулятор доставки
              </h3>
            </div>

            {/* Weight */}
            <div className="mb-8">
              <div className="flex justify-between mb-3">
                <label className="text-sm text-[#8a8880] uppercase tracking-wider font-medium">
                  Вес груза
                </label>
                <span className="font-oswald text-lg font-semibold text-[#e8a020]">
                  {delivWeight} т
                </span>
              </div>
              <input
                type="range" min={1} max={30} step={0.5}
                value={delivWeight}
                onChange={e => setDelivWeight(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 appearance-none cursor-pointer"
                style={{
                  accentColor: "#e8a020",
                  background: `linear-gradient(to right, #e8a020 ${((delivWeight - 1) / 29) * 100}%, rgba(255,255,255,0.1) 0)`,
                }}
              />
              <div className="flex justify-between mt-1 text-xs text-[#8a8880]">
                <span>1 т</span><span>30 т</span>
              </div>
            </div>

            {/* Distance */}
            <div className="mb-8">
              <div className="flex justify-between mb-3">
                <label className="text-sm text-[#8a8880] uppercase tracking-wider font-medium">
                  Расстояние
                </label>
                <span className="font-oswald text-lg font-semibold text-[#e8a020]">
                  {delivDist} км
                </span>
              </div>
              <input
                type="range" min={5} max={200} step={5}
                value={delivDist}
                onChange={e => setDelivDist(Number(e.target.value))}
                className="w-full h-1.5 appearance-none cursor-pointer"
                style={{
                  accentColor: "#e8a020",
                  background: `linear-gradient(to right, #e8a020 ${((delivDist - 5) / 195) * 100}%, rgba(255,255,255,0.1) 0)`,
                }}
              />
              <div className="flex justify-between mt-1 text-xs text-[#8a8880]">
                <span>5 км</span><span>200 км</span>
              </div>
            </div>

            {/* Result */}
            <div className="bg-[#1a1c18] border border-[#e8a020]/20 p-6 mb-6">
              <div className="text-[#8a8880] text-sm mb-1">Примерная стоимость</div>
              <div className="font-oswald text-4xl font-bold text-[#e8a020]">
                {delivCost.toLocaleString("ru-RU")} ₽
              </div>
              <div className="text-[#8a8880] text-xs mt-2">
                Груз {delivWeight} т · {delivDist} км · окончательная цена уточняется у менеджера
              </div>
            </div>

            <button
              onClick={() => scrollTo("contacts")}
              className="w-full bg-[#e8a020] text-[#111210] hover:bg-[#f0b030] transition-colors py-4 font-oswald font-bold text-base uppercase tracking-widest"
            >
              Оформить доставку
            </button>
          </div>
        </div>
      </section>

      {/* ══════════ CTA BANNER ══════════ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1590496793929-36417d3117de?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#111210]/88" />
          {/* striped accent */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg,#e8a020,#e8a020 1px,transparent 1px,transparent 20px)",
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-5 text-center">
          <h2 className="font-oswald text-[clamp(2rem,5vw,4rem)] font-bold uppercase tracking-tight text-[#e8e4da] mb-4">
            Оптовым покупателям —<br />
            <span className="text-[#e8a020]">скидки до 25%</span>
          </h2>
          <p className="text-[#8a8880] text-lg mb-8 max-w-lg mx-auto">
            Работаем с застройщиками, подрядчиками и строительными организациями. Персональный менеджер и отсрочка платежа.
          </p>
          <button
            onClick={() => scrollTo("contacts")}
            className="bg-[#e8a020] text-[#111210] hover:bg-[#f0b030] transition-colors px-10 py-4 font-oswald font-bold text-base uppercase tracking-widest"
          >
            Получить оптовые условия
          </button>
        </div>
      </section>

      {/* ══════════ CONTACTS ══════════ */}
      <section id="contacts" className="bg-[#1a1c18] border-t border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#e8a020]" />
              <span className="text-[#e8a020] text-xs font-medium tracking-[0.35em] uppercase">Свяжитесь с нами</span>
            </div>
            <h2 className="font-oswald text-[clamp(2rem,4vw,3rem)] font-bold uppercase tracking-tight text-[#e8e4da] mb-8">
              Контакты
            </h2>

            <div className="space-y-6">
              {[
                { icon: "Phone", label: "Телефон (бесплатно)", value: "8 800 123-45-67", href: "tel:+78001234567" },
                { icon: "Mail",  label: "Email",               value: "info@stroybaza.ru", href: "mailto:info@stroybaza.ru" },
                { icon: "MapPin",label: "Склад и самовывоз",   value: "ул. Промышленная, 45, склад №3", href: "#" },
                { icon: "Clock", label: "Режим работы",         value: "Пн–Пт 8:00–19:00, Сб 9:00–16:00", href: "#" },
              ].map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  className="flex gap-4 group"
                >
                  <div className="mt-0.5 w-9 h-9 border border-[#e8a020]/20 flex items-center justify-center shrink-0 group-hover:border-[#e8a020]/60 group-hover:bg-[#e8a020]/5 transition-all">
                    <Icon name={c.icon} fallback="Info" size={16} className="text-[#e8a020]" />
                  </div>
                  <div>
                    <div className="text-[#8a8880] text-xs uppercase tracking-widest mb-0.5">{c.label}</div>
                    <div className="text-[#e8e4da] font-medium group-hover:text-[#e8a020] transition-colors">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#222420] border border-white/7 p-8">
            {formSent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-14 h-14 bg-[#e8a020]/10 border border-[#e8a020]/30 flex items-center justify-center mb-5">
                  <Icon name="CheckCheck" size={28} className="text-[#e8a020]" />
                </div>
                <h3 className="font-oswald text-2xl font-bold uppercase text-[#e8e4da] mb-2">Заявка принята!</h3>
                <p className="text-[#8a8880] text-sm max-w-xs">
                  Менеджер свяжется с вами в течение 15 минут в рабочее время.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-oswald text-xl font-bold uppercase tracking-wide text-[#e8e4da] mb-6">
                  Оставить заявку
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs text-[#8a8880] uppercase tracking-widest block mb-1.5">Ваше имя</label>
                    <input
                      type="text"
                      value={formName}
                      onChange={e => setFormName(e.target.value)}
                      placeholder="Иван Петров"
                      required
                      className="w-full bg-[#1a1c18] border border-white/10 text-[#e8e4da] placeholder-[#8a8880]/50 px-4 py-3 text-sm focus:outline-none focus:border-[#e8a020]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#8a8880] uppercase tracking-widest block mb-1.5">Телефон</label>
                    <input
                      type="tel"
                      value={formPhone}
                      onChange={e => setFormPhone(e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="w-full bg-[#1a1c18] border border-white/10 text-[#e8e4da] placeholder-[#8a8880]/50 px-4 py-3 text-sm focus:outline-none focus:border-[#e8a020]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#8a8880] uppercase tracking-widest block mb-1.5">Что нужно?</label>
                    <textarea
                      rows={3}
                      placeholder="Бетон М300, 20 м³, доставка в Пушкино..."
                      className="w-full bg-[#1a1c18] border border-white/10 text-[#e8e4da] placeholder-[#8a8880]/50 px-4 py-3 text-sm focus:outline-none focus:border-[#e8a020]/50 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#e8a020] text-[#111210] hover:bg-[#f0b030] transition-colors py-4 font-oswald font-bold text-base uppercase tracking-widest"
                  >
                    Отправить заявку
                  </button>
                  <p className="text-[#8a8880]/50 text-xs text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="bg-[#111210] border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">

          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-[#e8a020] flex items-center justify-center">
                <Icon name="HardHat" size={16} className="text-[#111210]" />
              </div>
              <span className="font-oswald text-lg font-semibold tracking-wider text-[#e8e4da] uppercase">
                СтройБаза
              </span>
            </div>
            <p className="text-[#8a8880] text-xs">Строительные материалы оптом и в розницу</p>
          </div>

          <div className="flex flex-wrap gap-8 text-sm">
            {navItems.map(n => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-[#8a8880] hover:text-[#e8e4da] transition-colors uppercase tracking-wider text-xs"
              >
                {n.label}
              </button>
            ))}
          </div>

          <p className="text-[#8a8880] text-xs">
            © 2024 СтройБаза. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
