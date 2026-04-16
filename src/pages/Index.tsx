import { useState } from 'react';
import Icon from '@/components/ui/icon';

/* ─── toast ───────────────────────────────────────────── */
const Toast = ({ msg, onClose }: { msg: string; onClose: () => void }) => (
  <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#1e3a5f] border border-blue-400/40 text-white text-sm px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in">
    <span className="text-blue-300">ℹ️</span>
    <span>{msg}</span>
    <button onClick={onClose} className="ml-2 text-blue-300 hover:text-white transition-colors">✕</button>
  </div>
);

/* ─── phone frame ─────────────────────────────────────── */
const PhoneFrame = ({ children, bg = '#060d1a' }: { children: React.ReactNode; bg?: string }) => (
  <div className="relative mx-auto w-[300px] flex-shrink-0">
    <div className="rounded-[2.4rem] border-[5px] border-slate-700 shadow-[0_0_60px_rgba(59,130,246,0.18)] overflow-hidden">
      <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px] text-white/50" style={{ background: bg }}>
        <span>9:41</span>
        <div className="flex gap-1.5 items-center">
          <Icon name="Wifi" size={10} />
          <Icon name="Battery" size={10} />
        </div>
      </div>
      <div className="overflow-y-auto" style={{ height: 560, background: bg }}>
        {children}
      </div>
      <div className="flex justify-center py-2" style={{ background: bg }}>
        <div className="w-20 h-1 bg-white/15 rounded-full" />
      </div>
    </div>
  </div>
);

/* ─── section wrapper ─────────────────────────────────── */
const Section = ({ id, num, emoji, title, goal, children }: {
  id: string; num: string; emoji: string; title: string; goal: string; children: React.ReactNode;
}) => (
  <section id={id} className="mb-24">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-11 h-11 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-xl">{emoji}</div>
      <div>
        <p className="text-[10px] text-blue-400 font-bold tracking-widest uppercase">{num}</p>
        <h2 className="text-xl font-black text-white leading-tight">{title}</h2>
      </div>
    </div>
    <div className="flex items-start gap-2 bg-blue-500/5 border border-blue-500/15 rounded-xl px-4 py-2.5 mb-8 text-sm text-blue-200/60">
      <span className="text-blue-400 font-semibold flex-shrink-0">Цель:</span>
      <span>{goal}</span>
    </div>
    {children}
  </section>
);

/* ─── widget description ──────────────────────────────── */
const WDesc = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="flex-1 min-w-0">
    <h4 className="text-sm font-bold text-white mb-2">{title}</h4>
    <div className="text-[13px] text-slate-400 leading-relaxed space-y-1.5">{children}</div>
  </div>
);

/* ─── mini button ─────────────────────────────────────── */
const Btn = ({ label, onClick, c = 'blue' }: { label: string; onClick: () => void; c?: string }) => {
  const cls: Record<string, string> = {
    blue: 'bg-blue-500 hover:bg-blue-400 text-white',
    green: 'bg-emerald-500 hover:bg-emerald-400 text-white',
    yellow: 'bg-amber-500 hover:bg-amber-400 text-white',
    red: 'bg-red-500 hover:bg-red-400 text-white',
    purple: 'bg-purple-500 hover:bg-purple-400 text-white',
    ghost: 'bg-white/8 hover:bg-white/15 text-white border border-white/15',
  };
  return (
    <button onClick={onClick} className={`text-[10px] font-bold px-3 py-1.5 rounded-lg transition-all active:scale-95 ${cls[c] ?? cls.blue}`}>
      {label}
    </button>
  );
};

/* ─── index bar widget ────────────────────────────────── */
const IndexBar = ({ value, onClick }: { value: number; onClick: () => void }) => {
  const col = value >= 71 ? '#10b981' : value >= 41 ? '#f59e0b' : '#ef4444';
  const lbl = value >= 71 ? '🟢 Отлично' : value >= 41 ? '🟡 Внимание' : '🔴 Критический';
  return (
    <div className="bg-white/5 rounded-xl p-3 cursor-pointer group" onClick={onClick}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] text-white/40">Индекс защиты</span>
        <span className="text-[10px] font-bold" style={{ color: col }}>{lbl}</span>
      </div>
      <div className="flex items-end gap-2 mb-2">
        <span className="text-3xl font-black text-white">{value}</span>
        <span className="text-[10px] text-white/30 mb-0.5">/100</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${value}%`, background: col }} />
      </div>
      <div className="mt-2 hidden group-hover:grid grid-cols-2 gap-1 text-[9px] text-white/50 border-t border-white/10 pt-2">
        <span>🫁 Здоровье: <b className="text-white">65</b></span>
        <span>🚗 Авто: <b className="text-white">80</b></span>
        <span>🏠 Имущество: <b className="text-white">50</b></span>
        <span>💼 Доход: <b className="text-white">70</b></span>
      </div>
    </div>
  );
};

/* ════════════════════════════════════════════════════════
   MAIN
════════════════════════════════════════════════════════ */
export default function Index() {
  const [toast, setToast] = useState('');
  const say = (m: string) => { setToast(m); setTimeout(() => setToast(''), 3000); };

  const nav = [
    { id: 'sc1', e: '📱', l: 'Финансовое здоровье' },
    { id: 'sc2', e: '📈', l: 'Путь к цели' },
    { id: 'sc3', e: '💸', l: 'Мой поток' },
    { id: 'sc4', e: '🛡️', l: 'Финансовый сон' },
    { id: 'sc5', e: '📊', l: 'Карма и контроль' },
    { id: 'sc6', e: '🎯', l: 'Статусы' },
    { id: 'sc7', e: '🔐', l: 'Зона контроля' },
  ];

  return (
    <div className="min-h-screen bg-[#060d1a] text-white">
      {toast && <Toast msg={toast} onClose={() => setToast('')} />}

      {/* HERO */}
      <div className="relative overflow-hidden border-b border-blue-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(59,130,246,0.14),transparent_65%)]" />
        <div className="container mx-auto px-6 py-16 max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/8 mb-6 text-[11px] text-blue-300 font-bold tracking-wider uppercase">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            Страховой Совкомбанк · Мобильное приложение
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-br from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
            Финтрекер
          </h1>
          <p className="text-lg text-slate-400 max-w-lg mx-auto mb-2">Страховая версия модуля финансового здоровья</p>
          <p className="text-sm text-slate-600">Интерактивная концепция · Презентация функционала</p>
        </div>
      </div>

      {/* NAV */}
      <nav className="sticky top-0 z-40 bg-[#060d1a]/92 backdrop-blur-xl border-b border-blue-500/8">
        <div className="container mx-auto px-4 max-w-5xl flex overflow-x-auto gap-0.5 py-2">
          {nav.map(n => (
            <button key={n.id} onClick={() => document.getElementById(n.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold text-slate-500 hover:text-white hover:bg-blue-500/12 transition-all whitespace-nowrap">
              <span>{n.e}</span>{n.l}
            </button>
          ))}
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16 max-w-5xl">

        {/* ══ SCREEN 1 ══════════════════════════════════════ */}
        <Section id="sc1" num="Раздел 1" emoji="📱" title="Главный экран: «Финансовое здоровье»"
          goal="Показать клиенту общий уровень защиты — от потери денег, здоровья, имущества, дохода.">

          {/* 1.1 */}
          <div className="flex flex-col lg:flex-row gap-10 items-start mb-14">
            <PhoneFrame>
              <div className="px-4 pt-4 pb-6 space-y-3">
                <p className="text-[10px] text-white/35 uppercase tracking-widest font-bold">🫀 Индекс защиты</p>
                <IndexBar value={72} onClick={() => say('Переход: раздел «Финансовый сон»')} />
                <Btn label="Проверить защиту →" onClick={() => say('Открываем раздел «Финансовый сон»')} />
              </div>
            </PhoneFrame>
            <WDesc title="1.1 🫀 Индекс защиты">
              <p>Общий показатель уровня страховой защиты (0–100), рассчитанный на основе наличия полисов, покрытия рисков и своевременности оплаты.</p>
              <p>
                <span className="text-red-400">0–40 🔴 Критический</span> ·{' '}
                <span className="text-amber-400">41–70 🟡 Внимание</span> ·{' '}
                <span className="text-emerald-400">71–100 🟢 Отлично</span>
              </p>
              <p className="text-slate-500 italic">Hover → разбивка: Здоровье 65, Авто 80, Имущество 50, Доход 70.</p>
              <p><span className="text-blue-400">Кнопка:</span> «Проверить защиту» → раздел «Финансовый сон».</p>
            </WDesc>
          </div>

          {/* 1.2 */}
          <div className="flex flex-col lg:flex-row gap-10 items-start mb-14">
            <PhoneFrame>
              <div className="px-4 pt-4 pb-6 space-y-3">
                <p className="text-[10px] text-white/35 uppercase tracking-widest font-bold">🛡️ Запас защиты</p>
                <div className="bg-white/5 rounded-xl p-3 group cursor-pointer" onClick={() => say('Переход: Накопления + защита')}>
                  <div className="flex items-end gap-1.5 mb-1">
                    <span className="text-5xl font-black text-emerald-400">6</span>
                    <span className="text-xs text-white/40 mb-1.5">месяцев 🟢</span>
                  </div>
                  <p className="text-[10px] text-white/50">Подушки хватит на 6 месяцев</p>
                  <div className="hidden group-hover:flex gap-4 text-[9px] text-white/40 border-t border-white/10 pt-2 mt-2">
                    <span>Накопления: <b className="text-white">3 мес</b></span>
                    <span>Покрытие: <b className="text-white">3 мес</b></span>
                  </div>
                </div>
                <Btn label="Увеличить запас →" onClick={() => say('Переход: Накопления + защита')} c="green" />
              </div>
            </PhoneFrame>
            <WDesc title="1.2 🛡️ Запас защиты">
              <p>Сколько месяцев клиент может прожить без дохода при активных полисах и накоплениях.</p>
              <p className="font-mono text-[11px] bg-white/5 rounded-lg px-3 py-1.5 text-white/60">(Накопления + Покрытие) / Расходы в месяц</p>
              <p>
                <span className="text-red-400">&lt;3 мес 🔴</span> · <span className="text-amber-400">3–6 мес 🟡</span> · <span className="text-emerald-400">6+ мес 🟢</span>
              </p>
              <p><span className="text-blue-400">Кнопка:</span> «Увеличить запас» → Финансовый сон → Накопления + защита.</p>
            </WDesc>
          </div>

          {/* 1.3 */}
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <PhoneFrame>
              <div className="px-4 pt-4 pb-6 space-y-3">
                <p className="text-[10px] text-white/35 uppercase tracking-widest font-bold">📉 Темп рисков</p>
                <div className="bg-white/5 rounded-xl p-3 group cursor-pointer" onClick={() => say('Переход: Защита от неожиданностей')}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-amber-400 font-bold text-xs">⚡ Турбулентный</span>
                    <span className="text-[9px] text-white/30">3 мес</span>
                  </div>
                  <svg viewBox="0 0 200 44" className="w-full h-11 mb-1">
                    <polyline points="0,38 40,32 80,18 120,26 160,12 200,22" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="200" cy="22" r="3.5" fill="#f59e0b" />
                  </svg>
                  <p className="hidden group-hover:block text-[9px] text-amber-300 border-t border-white/10 pt-2 mt-1">Вы совершили 5 поездок за 2 месяца. Рекомендуем ВЗР.</p>
                </div>
                <Btn label="Проверить риски →" onClick={() => say('Переход: Защита от неожиданностей')} c="yellow" />
              </div>
            </PhoneFrame>
            <WDesc title="1.3 📉 Темп рисков">
              <p>Динамика рисковой нагрузки за 3 месяца. Статус: «Турбулентный» / «Комфортный» / «Спокойный».</p>
              <p className="text-slate-500 italic">Hover → контекстная подсказка и рекомендация продукта (ВЗР).</p>
              <p><span className="text-blue-400">Кнопка:</span> «Проверить риски» → Финансовый сон → Защита от неожиданностей.</p>
            </WDesc>
          </div>
        </Section>

        {/* ══ SCREEN 2 ══════════════════════════════════════ */}
        <Section id="sc2" num="Раздел 2" emoji="📈" title="Путь к цели"
          goal="Показать, как страхование защищает цели клиента на пути к их достижению.">

          {/* 2.1 */}
          <div className="flex flex-col lg:flex-row gap-10 items-start mb-14">
            <PhoneFrame>
              <div className="px-4 pt-4 pb-6 space-y-3">
                <p className="text-[10px] text-white/35 uppercase tracking-widest font-bold">✈️ Цель: Париж</p>
                <div className="bg-white/5 rounded-xl p-3 group cursor-pointer" onClick={() => say('Открываем оформление ВЗР')}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">✈️ Париж</span>
                    <span className="text-[10px] text-emerald-400 font-bold">65%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mb-2">
                    <div className="h-full w-[65%] bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full" />
                  </div>
                  <div className="flex justify-between text-[9px] text-white/40 mb-1">
                    <span>80 000 ₽ из 120 000 ₽</span>
                    <span>177 дней</span>
                  </div>
                  <p className="hidden group-hover:block text-[9px] text-amber-300 border-t border-white/10 pt-2 mt-1">Оформите ВЗР за 850 ₽, чтобы защитить поездку.</p>
                </div>
                <Btn label="Добавить защиту →" onClick={() => say('Открываем оформление ВЗР')} />
              </div>
            </PhoneFrame>
            <WDesc title="2.1 ✈️ Цель: Париж">
              <p>Прогресс накоплений с привязанной рекомендацией страхового продукта для защиты цели.</p>
              <p className="text-slate-500 italic">Hover → «Оформите ВЗР за 850 ₽, чтобы защитить поездку.»</p>
              <p><span className="text-blue-400">Кнопка:</span> «Добавить защиту» → интерфейс оформления ВЗР.</p>
            </WDesc>
          </div>

          {/* 2.2 */}
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <PhoneFrame>
              <div className="px-4 pt-4 pb-6 space-y-3">
                <p className="text-[10px] text-white/35 uppercase tracking-widest font-bold">📈 Накопления + защита</p>
                <div className="bg-white/5 rounded-xl p-3 group cursor-pointer" onClick={() => say('Переход: Накопления + защита')}>
                  <p className="text-[9px] text-white/40 mb-2">Динамика 6 мес · Страхование добавило +10% к росту</p>
                  <svg viewBox="0 0 200 56" className="w-full h-14 mb-2">
                    <polyline points="0,52 40,44 80,35 120,26 160,18 200,10" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
                    {[0,40,80,120,160,200].map((x,i) => (
                      <rect key={i} x={x-7} y={52-(i*7+4)} width={14} height={i*7+4} fill="rgba(16,185,129,0.25)" rx="2" />
                    ))}
                  </svg>
                  <div className="flex gap-4 text-[9px] text-white/40">
                    <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-blue-400 inline-block rounded" />Накопления</span>
                    <span className="flex items-center gap-1"><span className="w-3 h-2.5 bg-emerald-400/40 inline-block rounded" />Покрытие</span>
                  </div>
                  <p className="hidden group-hover:block text-[9px] text-emerald-300 border-t border-white/10 pt-2 mt-2">Благодаря НСЖ вы накопили на 5 000 ₽ больше.</p>
                </div>
                <Btn label="Увеличить защиту →" onClick={() => say('Переход: Накопления + защита')} c="green" />
              </div>
            </PhoneFrame>
            <WDesc title="2.2 📈 Динамика накоплений + защита">
              <p>Комбинированный график: линия роста накоплений + столбцы страхового покрытия НСЖ.</p>
              <p className="text-slate-500 italic">Hover → «Благодаря НСЖ вы накопили на 5 000 ₽ больше.»</p>
              <p><span className="text-blue-400">Кнопка:</span> «Увеличить защиту» → Финансовый сон → Накопления + защита.</p>
            </WDesc>
          </div>
        </Section>

        {/* ══ SCREEN 3 ══════════════════════════════════════ */}
        <Section id="sc3" num="Раздел 3" emoji="💸" title="Мой поток"
          goal="Показать, как страхование защищает расходы клиента от непредвиденных потерь.">

          {/* 3.1 */}
          <div className="flex flex-col lg:flex-row gap-10 items-start mb-14">
            <PhoneFrame bg="#080f1f">
              <div className="px-4 pt-4 pb-6 space-y-3">
                <p className="text-[10px] text-white/35 uppercase tracking-widest font-bold">🛒 Защита покупок</p>
                {[
                  { name: 'Ноутбук', price: '50 000 ₽', ok: false, tip: 'Защитите от поломки за 150 ₽' },
                  { name: 'Смартфон', price: '30 000 ₽', ok: true, tip: '' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-3 flex items-center justify-between group cursor-pointer"
                    onClick={() => say(item.ok ? `${item.name} уже защищён` : `Оформляем страховку на ${item.name}`)}>
                    <div>
                      <p className="text-[11px] font-semibold text-white">{item.name}</p>
                      <p className="text-[9px] text-white/35">{item.price}</p>
                      {!item.ok && <p className="hidden group-hover:block text-[9px] text-amber-300 mt-0.5">{item.tip}</p>}
                    </div>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${item.ok ? 'bg-emerald-500/15 text-emerald-400' : 'bg-red-500/15 text-red-400'}`}>
                      {item.ok ? '✓ Защищено' : '✕ Риск'}
                    </span>
                  </div>
                ))}
                <Btn label="Защитить →" onClick={() => say('Открываем страхование покупок')} />
              </div>
            </PhoneFrame>
            <WDesc title="3.1 🛒 Защита покупок">
              <p>Список крупных покупок с маркировкой «Защищено» / «Риск». Проактивный оффер в нужный момент.</p>
              <p className="text-slate-500 italic">Hover → «Защитите ноутбук от поломки за 150 ₽.»</p>
              <p><span className="text-blue-400">Кнопка:</span> «Защитить» → интерфейс страхования покупок.</p>
            </WDesc>
          </div>

          {/* 3.2 */}
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <PhoneFrame bg="#080f1f">
              <div className="px-4 pt-4 pb-6 space-y-3">
                <p className="text-[10px] text-white/35 uppercase tracking-widest font-bold">📊 Категории рисков</p>
                <div className="bg-white/5 rounded-xl p-3 group cursor-pointer" onClick={() => say('Открываем страхование здоровья')}>
                  {[
                    { l: 'Здоровье', p: 40, col: '#ef4444' },
                    { l: 'Авто', p: 30, col: '#3b82f6' },
                    { l: 'Имущество', p: 20, col: '#8b5cf6' },
                    { l: 'Доход', p: 10, col: '#f59e0b' },
                  ].map((c, i) => (
                    <div key={i} className="mb-2">
                      <div className="flex justify-between text-[9px] text-white/50 mb-0.5">
                        <span>{c.l}</span><span className="font-bold text-white">{c.p}%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${c.p}%`, background: c.col }} />
                      </div>
                    </div>
                  ))}
                  <p className="hidden group-hover:block text-[9px] text-red-300 border-t border-white/10 pt-2 mt-1">40% рисков — здоровье. Рекомендуем страхование здоровья.</p>
                </div>
                <Btn label="Оформить страхование →" onClick={() => say('Открываем страхование здоровья')} c="red" />
              </div>
            </PhoneFrame>
            <WDesc title="3.2 📊 Категории рисков">
              <p>Диаграмма рисковой нагрузки по 4 категориям с контекстной рекомендацией страхового продукта.</p>
              <p className="text-slate-500 italic">Hover → «40% рисков — здоровье. Рекомендуем страхование.»</p>
              <p><span className="text-blue-400">Кнопка:</span> «Оформить» → страхование здоровья.</p>
            </WDesc>
          </div>
        </Section>

        {/* ══ SCREEN 4 ══════════════════════════════════════ */}
        <Section id="sc4" num="Раздел 4" emoji="🛡️" title="Финансовый сон"
          goal="Показать клиенту уровень защиты от будущих рисков — здоровье, имущество, доход.">

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <PhoneFrame bg="#050c1a">
              <div className="px-3 pt-4 pb-6 space-y-2.5">
                {/* 4.1 */}
                <div className="bg-white/5 rounded-xl p-3 group cursor-pointer" onClick={() => say('Переход: Накопления + защита')}>
                  <p className="text-[9px] text-white/35 mb-1">💤 Запас спокойствия</p>
                  <div className="flex items-end gap-1.5">
                    <span className="text-3xl font-black text-emerald-400">6</span>
                    <span className="text-[10px] text-white/40 mb-0.5">мес 🟢</span>
                  </div>
                  <div className="hidden group-hover:flex gap-3 text-[9px] text-white/40 border-t border-white/10 pt-1.5 mt-1">
                    <span>Накопления: <b className="text-white">3 мес</b></span>
                    <span>Покрытие: <b className="text-white">3 мес</b></span>
                  </div>
                </div>
                {/* 4.2 */}
                <IndexBar value={72} onClick={() => say('Проверяем защиту')} />
                {/* 4.3 */}
                <div className="bg-white/5 rounded-xl p-3 group cursor-pointer" onClick={() => say('Открываем пролонгацию')}>
                  <p className="text-[9px] text-white/35 mb-2">📅 Пролонгация полисов</p>
                  {[
                    { name: 'ОСАГО', date: '15.06.2025' },
                    { name: 'КАСКО', date: '20.07.2025' },
                  ].map((p, i) => (
                    <div key={i} className="flex items-center justify-between mb-1.5">
                      <div>
                        <span className="text-[10px] font-semibold text-white">{p.name}</span>
                        <span className="text-[9px] text-white/35 ml-2">{p.date}</span>
                      </div>
                      <span className="text-[9px] text-amber-400 font-bold">⚠ Продление</span>
                    </div>
                  ))}
                  <p className="hidden group-hover:block text-[9px] text-amber-300 border-t border-white/10 pt-1.5 mt-1">Пролонгируйте ОСАГО, чтобы избежать штрафа.</p>
                </div>
                <Btn label="Продлить полисы →" onClick={() => say('Открываем пролонгацию')} c="yellow" />
              </div>
            </PhoneFrame>
            <div className="flex-1 space-y-5">
              <WDesc title="4.1 💤 Запас спокойствия">
                <p>Месяцы без дохода при работающих полисах. Hover → источники запаса.</p>
              </WDesc>
              <WDesc title="4.2 🛡️ Индекс защиты">
                <p>Шкала 0–100 с цветовой индикацией и разбивкой по категориям при наведении.</p>
                <p><span className="text-blue-400">Кнопка:</span> «Проверить защиту» → текущий раздел.</p>
              </WDesc>
              <WDesc title="4.3 📅 Пролонгация полисов">
                <p>Список полисов, истекающих в ближайшие 30 дней. Проактивное напоминание.</p>
                <p className="text-slate-500 italic">Hover → «Пролонгируйте ОСАГО, чтобы избежать штрафа.»</p>
                <p><span className="text-blue-400">Кнопка:</span> «Продлить» → интерфейс пролонгации.</p>
              </WDesc>
            </div>
          </div>
        </Section>

        {/* ══ SCREEN 5 ══════════════════════════════════════ */}
        <Section id="sc5" num="Раздел 5" emoji="📊" title="Карма и контроль"
          goal="Показать уровень финансовой репутации и безопасности клиента.">

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <PhoneFrame bg="#060e1d">
              <div className="px-3 pt-4 pb-6 space-y-2.5">
                {/* 5.1 */}
                <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/5 border border-amber-500/18 rounded-xl p-3 group cursor-pointer"
                  onClick={() => say('Открываем интерфейс «Поделиться»')}>
                  <p className="text-[9px] text-white/35 mb-1">📈 Карма</p>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-black text-amber-400">890</span>
                    <span className="text-[10px] text-white/40 mb-0.5">баллов</span>
                  </div>
                  <p className="text-[9px] text-white/50 mt-0.5">Отличная репутация. Платежи вовремя.</p>
                  <p className="hidden group-hover:block text-[9px] text-amber-300 border-t border-amber-500/20 pt-1.5 mt-1.5">Вы защищены от мошенничества.</p>
                </div>
                <Btn label="Поделиться 🌟" onClick={() => say('Открываем «Поделиться»')} c="yellow" />
                {/* 5.2 */}
                <div className="bg-white/5 rounded-xl p-3 group cursor-pointer" onClick={() => say('Открываем настройки безопасности')}>
                  <p className="text-[9px] text-white/35 mb-1">🔐 Безопасность</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-emerald-400">✓ Включена</span>
                    <div className="w-8 h-4 rounded-full bg-emerald-500 relative flex-shrink-0">
                      <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full" />
                    </div>
                  </div>
                  <p className="text-[9px] text-white/35 mt-0.5">Face ID + 2FA</p>
                  <p className="hidden group-hover:block text-[9px] text-emerald-300 border-t border-white/10 pt-1.5 mt-1">Ваши средства надёжно защищены.</p>
                </div>
                <Btn label="Настроить →" onClick={() => say('Открываем настройки безопасности')} c="ghost" />
                {/* 5.3 */}
                <div className="bg-white/5 rounded-xl p-3 group cursor-pointer" onClick={() => say('Открываем чат')}>
                  <p className="text-[9px] text-white/35 mb-1">📞 Обращения</p>
                  <p className="text-[11px] font-semibold text-white">Мы всегда на связи</p>
                  <p className="text-[9px] text-white/40">Чат · Телефон · Форма</p>
                  <p className="hidden group-hover:block text-[9px] text-blue-300 border-t border-white/10 pt-1.5 mt-1">Напишите или позвоните — мы рядом.</p>
                </div>
                <Btn label="Написать в чат →" onClick={() => say('Открываем чат поддержки')} />
              </div>
            </PhoneFrame>
            <div className="flex-1 space-y-5">
              <WDesc title="5.1 📈 Карма: 890 баллов">
                <p>Балловая оценка финансовой дисциплины: своевременность оплат, активная защита, отсутствие рисков.</p>
                <p><span className="text-blue-400">Кнопка:</span> «Поделиться» → шаринг статуса.</p>
              </WDesc>
              <WDesc title="5.2 🔐 Безопасность">
                <p>Статус механизмов защиты аккаунта: Face ID, двухфакторная аутентификация.</p>
                <p><span className="text-blue-400">Кнопка:</span> «Настроить» → настройки безопасности.</p>
              </WDesc>
              <WDesc title="5.3 📞 Обращения">
                <p>Быстрый доступ к каналам поддержки по финансовым и страховым вопросам.</p>
                <p><span className="text-blue-400">Кнопка:</span> «Написать в чат» → чат поддержки.</p>
              </WDesc>
            </div>
          </div>
        </Section>

        {/* ══ SCREEN 6 ══════════════════════════════════════ */}
        <Section id="sc6" num="Раздел 6" emoji="🎯" title="Статусы в Финтрекере"
          goal="Геймификация защиты: статусы мотивируют клиентов поддерживать высокий уровень страховой защиты.">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: '🌙', title: 'Глубокий сон',
                from: 'from-blue-950/80', border: 'border-blue-500/25',
                conds: ['Индекс защиты > 80', 'Запас > 6 месяцев', 'Нет просрочек', 'Нет открытых рисков'],
                text: 'Спать можно крепко — подушки хватит на 6 месяцев.',
                btns: [{ l: 'Проверить защиту', a: () => say('Переход: Финансовый сон'), c: 'ghost' as const }],
              },
              {
                icon: '🌟', title: 'Карма',
                from: 'from-amber-950/80', border: 'border-amber-500/25',
                conds: ['Индекс защиты > 80', 'Платежи вовремя', 'Нет рисков'],
                text: 'Сильный статус и хорошая репутация.',
                btns: [{ l: 'Поделиться', a: () => say('Открываем «Поделиться»'), c: 'ghost' as const }],
              },
              {
                icon: '🎯', title: 'В зоне контроля',
                from: 'from-orange-950/80', border: 'border-orange-500/25',
                conds: ['Индекс 50–70', 'Запас 3–6 мес', 'Есть просрочки', 'Есть риски'],
                text: 'Вы в зоне контроля — следите за рисками.',
                btns: [
                  { l: 'Проверить риски', a: () => say('Переход: Защита от неожиданностей'), c: 'ghost' as const },
                  { l: 'Продлить полисы', a: () => say('Открываем пролонгацию'), c: 'ghost' as const },
                ],
              },
            ].map((s, i) => (
              <div key={i} className={`rounded-2xl border ${s.border} bg-gradient-to-br ${s.from} to-transparent p-5`}>
                <div className="text-4xl mb-3">{s.icon}</div>
                <h4 className="font-black text-white mb-3 text-base">{s.title}</h4>
                <div className="space-y-1 mb-4">
                  {s.conds.map((c, j) => (
                    <p key={j} className="text-[10px] text-white/45 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-white/25 flex-shrink-0" />{c}
                    </p>
                  ))}
                </div>
                <p className="text-[11px] text-white/70 italic mb-4">«{s.text}»</p>
                <div className="flex flex-wrap gap-2">
                  {s.btns.map((b, j) => <Btn key={j} label={b.l} onClick={b.a} c={b.c} />)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ══ SCREEN 7 ══════════════════════════════════════ */}
        <Section id="sc7" num="Раздел 7" emoji="🔐" title="Кнопки зоны контроля"
          goal="Быстрый доступ к управлению продуктами, безопасностью и персональными данными.">

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <PhoneFrame bg="#050c19">
              <div className="px-3 pt-4 pb-6 space-y-2">
                {[
                  { e: '💳', l: 'Карты и продукты', col: 'text-blue-400', a: () => say('Управление картами') },
                  { e: '🔐', l: 'Безопасность', col: 'text-emerald-400', a: () => say('Настройки безопасности') },
                  { e: '🔔', l: 'Уведомления и новости', col: 'text-amber-400', a: () => say('Уведомления') },
                  { e: '📞', l: 'Обращения в банк', col: 'text-purple-400', a: () => say('Обращения') },
                  { e: '👤', l: 'Персональные данные', col: 'text-pink-400', a: () => say('Персональные данные') },
                ].map((item, i) => (
                  <button key={i} onClick={item.a}
                    className="w-full flex items-center gap-3 bg-white/5 hover:bg-white/10 rounded-xl px-3 py-2.5 transition-all active:scale-[0.98] group">
                    <span className="text-base">{item.e}</span>
                    <span className={`text-[11px] font-semibold ${item.col}`}>{item.l}</span>
                    <Icon name="ChevronRight" size={13} className="ml-auto text-white/18 group-hover:text-white/45 transition-colors" />
                  </button>
                ))}
              </div>
            </PhoneFrame>
            <div className="flex-1 space-y-4">
              {[
                { e: '💳', t: '7.1 Карты и продукты', items: ['Управление лимитами', 'Смена пин-кодов', 'Блокировка карт', 'Подключённые опции', 'Счёт по умолчанию'] },
                { e: '🔐', t: '7.2 Безопасность', items: ['Face ID / Биометрия', 'История входов', 'Привязанные устройства', 'Проверка телефона', 'Сообщить о мошенничестве'] },
                { e: '🔔', t: '7.3 Уведомления и новости', items: ['Настройка уведомлений', 'Новости банка', 'Акции и предложения'] },
                { e: '📞', t: '7.4 Обращения', items: ['Чат с поддержкой', 'Телефонная поддержка', 'Форма обратной связи'] },
                { e: '👤', t: '7.5 Персональные данные', items: ['Редактирование данных', 'Документы', 'Адреса', 'Контакты'] },
              ].map((g, i) => (
                <div key={i} className="border border-white/6 rounded-xl p-4">
                  <p className="text-sm font-bold text-white mb-2">{g.e} {g.t}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {g.items.map((it, j) => (
                      <span key={j} className="text-[10px] text-white/45 bg-white/5 px-2 py-1 rounded-lg">{it}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

      </div>

      <div className="border-t border-blue-500/8 py-8 text-center text-[11px] text-slate-700">
        Финтрекер · Страховой Совкомбанк · Концепция функционала мобильного приложения
      </div>
    </div>
  );
}
