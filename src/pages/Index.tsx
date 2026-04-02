import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const projects = [
  {
    id: 1,
    title: "Квартира на Патриарших",
    area: "120 м²",
    style: "Современный минимализм",
    year: "2024",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: 2,
    title: "Загородный дом",
    area: "340 м²",
    style: "Скандинавский",
    year: "2024",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    id: 3,
    title: "Пентхаус Москва-Сити",
    area: "280 м²",
    style: "Лофт",
    year: "2023",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
];

const services = [
  {
    icon: "Pencil",
    title: "Дизайн-проект",
    desc: "Полная документация: планировки, чертежи, 3D-визуализации и ведение авторского надзора.",
  },
  {
    icon: "Layers",
    title: "Концепция",
    desc: "Разработка идеи пространства: настроение, материалы, цвета. Быстрый старт без лишней бюрократии.",
  },
  {
    icon: "Compass",
    title: "Авторский надзор",
    desc: "Контроль строительных работ на всех этапах, чтобы проект был реализован точно по замыслу.",
  },
  {
    icon: "Package",
    title: "Комплектация",
    desc: "Подбор мебели, света, текстиля и декора. Работаем с проверенными поставщиками.",
  },
];

const stats = [
  { value: "127", label: "проектов реализовано" },
  { value: "8", label: "лет на рынке" },
  { value: "4.9", label: "средняя оценка клиентов" },
  { value: "12", label: "наград в области дизайна" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="font-golos bg-[#0e0e0c] text-[#f0ebe0] min-h-screen overflow-x-hidden"
      style={
        {
          "--cream": "#f0ebe0",
          "--sand": "#c8b89a",
          "--dark": "#0e0e0c",
          "--dark2": "#161612",
          "--dark3": "#1e1e19",
          "--accent": "#c8a96e",
        } as React.CSSProperties
      }
    >
      {/* ───────────── HEADER ───────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0e0e0c]/95 backdrop-blur-md border-b border-white/5 py-4"
            : "py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="font-cormorant text-2xl font-light tracking-[0.2em] text-[#f0ebe0]">
            ФОРМА
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {["Проекты", "Услуги", "О нас", "Контакты"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-light text-[#c8b89a] hover:text-[#f0ebe0] transition-colors tracking-widest uppercase"
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            className="hidden md:block border border-[#c8a96e]/60 text-[#c8a96e] hover:bg-[#c8a96e] hover:text-[#0e0e0c] transition-all duration-300 px-6 py-2.5 text-sm tracking-widest uppercase font-medium"
          >
            Обсудить проект
          </button>

          <button
            className="md:hidden text-[#f0ebe0]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0e0e0c]/98 border-t border-white/5 px-6 py-8 flex flex-col gap-6">
            {["Проекты", "Услуги", "О нас", "Контакты"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-xl font-cormorant font-light text-[#f0ebe0] tracking-wider"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ───────────── HERO ───────────── */}
      <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1800&q=90"
            alt="Интерьер"
            className="w-full h-full object-cover animate-scale-in"
            style={{ animationDuration: "2s", animationFillMode: "backwards" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0c] via-[#0e0e0c]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0c]/60 to-transparent" />
        </div>

        {/* Декоративная линия */}
        <div
          className="absolute top-1/2 right-12 hidden lg:block"
          style={{ transform: "translateY(-50%)" }}
        >
          <div className="w-px h-48 bg-gradient-to-b from-transparent via-[#c8a96e]/40 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <p
              className="text-[#c8a96e] text-sm tracking-[0.4em] uppercase mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              Студия интерьерного дизайна · Москва
            </p>

            <h1
              className="font-cormorant text-[clamp(3.5rem,8vw,7rem)] font-light leading-[0.9] mb-8 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              Архитектура
              <br />
              <em className="italic text-[#c8a96e]">вашего</em>
              <br />
              пространства
            </h1>

            <p
              className="text-[#c8b89a] font-light text-lg leading-relaxed max-w-lg mb-12 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              Создаём интерьеры, отражающие характер владельца.
              От концепции до реализации — с вниманием к каждой детали.
            </p>

            <div
              className="flex flex-wrap gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              <button className="bg-[#c8a96e] text-[#0e0e0c] hover:bg-[#d4b87a] transition-all duration-300 px-8 py-4 text-sm tracking-widest uppercase font-semibold">
                Смотреть проекты
              </button>
              <button className="border border-[#f0ebe0]/30 text-[#f0ebe0] hover:border-[#f0ebe0]/70 transition-all duration-300 px-8 py-4 text-sm tracking-widest uppercase font-light">
                Узнать стоимость
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs tracking-[0.3em] uppercase text-[#c8b89a] rotate-90 origin-center mb-4">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[#c8b89a] to-transparent" />
        </div>
      </section>

      {/* ───────────── STATS ───────────── */}
      <section className="border-y border-white/5 bg-[#161612]">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-cormorant text-[3.5rem] font-light text-[#c8a96e] leading-none mb-1">
                {s.value}
              </div>
              <div className="text-[#c8b89a] text-sm font-light tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────── PROJECTS ───────────── */}
      <section id="проекты" className="py-28 max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase mb-4">
              Избранные работы
            </p>
            <h2 className="font-cormorant text-[clamp(2.5rem,5vw,4rem)] font-light leading-tight">
              Проекты
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-[#c8b89a] hover:text-[#f0ebe0] transition-colors text-sm tracking-widest uppercase group"
          >
            Все проекты
            <Icon
              name="ArrowRight"
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>

        {/* Project Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveProject(i)}
              className={`whitespace-nowrap px-5 py-2 text-sm tracking-widest uppercase transition-all duration-300 border ${
                activeProject === i
                  ? "border-[#c8a96e] text-[#c8a96e] bg-[#c8a96e]/5"
                  : "border-white/10 text-[#c8b89a]/60 hover:border-white/20 hover:text-[#c8b89a]"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          ))}
        </div>

        {/* Active Project */}
        <div className="grid lg:grid-cols-5 gap-0 border border-white/8">
          <div className="lg:col-span-3 relative overflow-hidden h-[400px] lg:h-[560px]">
            <img
              key={activeProject}
              src={projects[activeProject].img}
              alt={projects[activeProject].title}
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0c]/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="font-cormorant text-[5rem] font-light leading-none text-white/10 select-none">
                {String(activeProject + 1).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="lg:col-span-2 bg-[#161612] p-10 flex flex-col justify-between">
            <div>
              <p className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-6">
                {projects[activeProject].style}
              </p>
              <h3 className="font-cormorant text-4xl font-light mb-6 leading-snug">
                {projects[activeProject].title}
              </h3>
              <div className="w-12 h-px bg-[#c8a96e] mb-8" />

              <dl className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <dt className="text-[#c8b89a] text-sm font-light tracking-wide">
                    Площадь
                  </dt>
                  <dd className="text-[#f0ebe0] font-light">
                    {projects[activeProject].area}
                  </dd>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <dt className="text-[#c8b89a] text-sm font-light tracking-wide">
                    Стиль
                  </dt>
                  <dd className="text-[#f0ebe0] font-light">
                    {projects[activeProject].style}
                  </dd>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <dt className="text-[#c8b89a] text-sm font-light tracking-wide">
                    Год
                  </dt>
                  <dd className="text-[#f0ebe0] font-light">
                    {projects[activeProject].year}
                  </dd>
                </div>
              </dl>
            </div>

            <button className="mt-8 w-full border border-[#c8a96e]/50 text-[#c8a96e] hover:bg-[#c8a96e] hover:text-[#0e0e0c] transition-all duration-300 py-4 text-sm tracking-widest uppercase font-medium">
              Смотреть проект
            </button>
          </div>
        </div>

        {/* Other projects preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-px">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`relative overflow-hidden h-20 cursor-pointer group ${
                activeProject === i ? "opacity-40" : "opacity-100"
              }`}
              onClick={() => setActiveProject(i)}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0e0e0c]/50 group-hover:bg-[#0e0e0c]/30 transition-all" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-cormorant text-sm text-white/70 tracking-widest uppercase">
                  {p.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────── SERVICES ───────────── */}
      <section
        id="услуги"
        className="py-28 bg-[#161612] border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase mb-4">
              Что мы делаем
            </p>
            <h2 className="font-cormorant text-[clamp(2.5rem,5vw,4rem)] font-light leading-tight max-w-lg">
              Полный цикл создания интерьера
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-[#161612] p-8 hover:bg-[#1e1e19] transition-all duration-300 group"
              >
                <div className="w-10 h-10 border border-[#c8a96e]/30 flex items-center justify-center mb-8 group-hover:border-[#c8a96e] group-hover:bg-[#c8a96e]/10 transition-all duration-300">
                  <Icon name={s.icon} fallback="Star" size={18} className="text-[#c8a96e]" />
                </div>
                <h3 className="font-cormorant text-2xl font-light mb-4 text-[#f0ebe0]">
                  {s.title}
                </h3>
                <p className="text-[#c8b89a] text-sm font-light leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── PROCESS ───────────── */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase mb-4">
              Как мы работаем
            </p>
            <h2 className="font-cormorant text-[clamp(2.5rem,5vw,4rem)] font-light leading-tight mb-12">
              Процесс создания идеального пространства
            </h2>

            <div className="space-y-0">
              {[
                { n: "01", title: "Знакомство", desc: "Встреча, изучение задачи, бриф и обмеры объекта." },
                { n: "02", title: "Концепция", desc: "Разработка стилевого решения, настроения и материалов." },
                { n: "03", title: "Проект", desc: "Полная рабочая документация и 3D-визуализации." },
                { n: "04", title: "Реализация", desc: "Авторский надзор и комплектация объекта." },
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex gap-8 py-7 border-b border-white/5 group hover:border-[#c8a96e]/20 transition-all duration-300"
                >
                  <span className="font-cormorant text-5xl font-light text-white/10 group-hover:text-[#c8a96e]/30 transition-colors min-w-[3rem] leading-none">
                    {step.n}
                  </span>
                  <div>
                    <h4 className="font-cormorant text-xl font-light text-[#f0ebe0] mb-1">
                      {step.title}
                    </h4>
                    <p className="text-[#c8b89a] text-sm font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
                alt="Процесс работы"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-[#0e0e0c] border border-white/10 p-6 max-w-[200px]">
              <div className="font-cormorant text-3xl font-light text-[#c8a96e] mb-1">
                12 нед
              </div>
              <div className="text-[#c8b89a] text-xs font-light tracking-wide leading-relaxed">
                среднее время реализации проекта
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section className="relative py-32 overflow-hidden bg-[#161612] border-t border-white/5">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(200,169,110,0.15) 80px, rgba(200,169,110,0.15) 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(200,169,110,0.15) 80px, rgba(200,169,110,0.15) 81px)",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase mb-6">
            Начнём?
          </p>
          <h2 className="font-cormorant text-[clamp(3rem,6vw,5.5rem)] font-light leading-tight mb-8">
            Расскажите нам
            <br />
            <em className="italic text-[#c8a96e]">о своём проекте</em>
          </h2>
          <p className="text-[#c8b89a] font-light text-lg max-w-lg mx-auto mb-12 leading-relaxed">
            Оставьте заявку — мы свяжемся в течение часа и ответим на все вопросы.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="text"
              placeholder="Ваш телефон или email"
              className="w-full sm:w-80 bg-transparent border border-white/20 text-[#f0ebe0] placeholder-[#c8b89a]/50 px-6 py-4 text-sm focus:outline-none focus:border-[#c8a96e]/60 transition-colors"
            />
            <button className="w-full sm:w-auto bg-[#c8a96e] text-[#0e0e0c] hover:bg-[#d4b87a] transition-all duration-300 px-10 py-4 text-sm tracking-widest uppercase font-semibold whitespace-nowrap">
              Отправить заявку
            </button>
          </div>

          <p className="mt-6 text-[#c8b89a]/50 text-xs tracking-wide">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </div>
      </section>

      {/* ───────────── FOOTER ───────────── */}
      <footer className="bg-[#0e0e0c] border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10 pb-10 border-b border-white/5">
            <div>
              <div className="font-cormorant text-3xl font-light tracking-[0.2em] text-[#f0ebe0] mb-2">
                ФОРМА
              </div>
              <p className="text-[#c8b89a] text-sm font-light">
                Студия интерьерного дизайна · Москва
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="tel:+74951234567"
                className="text-[#c8b89a] hover:text-[#f0ebe0] transition-colors font-light"
              >
                +7 (495) 123-45-67
              </a>
              <a
                href="mailto:hello@forma.studio"
                className="text-[#c8b89a] hover:text-[#f0ebe0] transition-colors font-light"
              >
                hello@forma.studio
              </a>
            </div>

            <div className="flex gap-4">
              {["Instagram", "Send"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#c8b89a] hover:border-[#c8a96e]/50 hover:text-[#c8a96e] transition-all duration-300"
                >
                  <Icon name={icon} fallback="Link" size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#c8b89a]/50 text-xs">
              © 2024 Студия «Форма». Все права защищены.
            </p>
            <nav className="flex gap-6">
              {["Политика конфиденциальности", "Условия использования"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-[#c8b89a]/50 hover:text-[#c8b89a] text-xs transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}