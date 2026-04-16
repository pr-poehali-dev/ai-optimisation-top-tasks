import { useState } from 'react';
import Icon from '@/components/ui/icon';

/* ─── Toast ─── */
const Toast = ({ msg, onClose }: { msg: string; onClose: () => void }) => (
  <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#1e3a5f] border border-blue-400/40 text-white text-sm px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in">
    <span>ℹ️</span><span>{msg}</span>
    <button onClick={onClose} className="ml-2 text-blue-300 hover:text-white">✕</button>
  </div>
);

/* ─── Phone shell — видимый макет без ограничения высоты ─── */
const Phone = ({ children, bg = '#07101f', label }: { children: React.ReactNode; bg?: string; label?: string }) => (
  <div className="flex-shrink-0 w-full max-w-[300px]">
    {label && <p className="text-[10px] text-blue-400/70 font-bold tracking-widest uppercase text-center mb-2">{label}</p>}
    <div className="rounded-[2rem] border-[5px] border-slate-600 shadow-[0_4px_40px_rgba(59,130,246,0.22),0_0_0_1px_rgba(255,255,255,0.04)] overflow-hidden"
      style={{ background: bg }}>
      {/* status bar */}
      <div className="flex items-center justify-between px-5 pt-3 pb-2 text-[9px] text-white/40" style={{ background: bg }}>
        <span className="font-semibold">9:41</span>
        <div className="w-16 h-4 rounded-full bg-black/60 flex items-center justify-center" />
        <div className="flex gap-1 items-center">
          <Icon name="Signal" size={9} /><Icon name="Wifi" size={9} /><Icon name="Battery" size={9} />
        </div>
      </div>
      {/* scrollable content */}
      <div className="overflow-y-auto" style={{ maxHeight: 520, background: bg }}>
        {children}
      </div>
      {/* home bar */}
      <div className="flex justify-center py-2.5" style={{ background: bg }}>
        <div className="w-24 h-1 bg-white/20 rounded-full" />
      </div>
    </div>
  </div>
);

/* ─── Section wrapper ─── */
const Section = ({ id, num, emoji, title, goal, children }: {
  id: string; num: string; emoji: string; title: string; goal: string; children: React.ReactNode;
}) => (
  <section id={id} className="mb-28 scroll-mt-14">
    <div className="flex items-center gap-4 mb-5">
      <div className="w-11 h-11 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-2xl flex-shrink-0">{emoji}</div>
      <div>
        <p className="text-[10px] text-blue-400 font-bold tracking-widest uppercase">{num}</p>
        <h2 className="text-xl font-black text-white leading-tight">{title}</h2>
      </div>
    </div>
    <div className="flex items-start gap-2 bg-blue-500/5 border border-blue-500/12 rounded-xl px-4 py-2.5 mb-10 text-[13px] text-blue-200/60 leading-relaxed">
      <span className="text-blue-400 font-bold flex-shrink-0">Цель:</span>
      <span>{goal}</span>
    </div>
    {children}
  </section>
);

/* ─── Widget pair: phone + description ─── */
const Pair = ({ phone, title, children }: { phone: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="flex flex-col lg:flex-row gap-10 items-start mb-16">
    {phone}
    <div className="flex-1 min-w-0 pt-1">
      <h4 className="text-[15px] font-bold text-white mb-3">{title}</h4>
      <div className="text-[13px] text-slate-400 leading-relaxed space-y-2">{children}</div>
    </div>
  </div>
);

/* ─── Button ─── */
const Btn = ({ label, onClick, c = 'blue' }: { label: string; onClick: () => void; c?: string }) => {
  const map: Record<string, string> = {
    blue: 'bg-blue-500 hover:bg-blue-400 text-white',
    green: 'bg-emerald-500 hover:bg-emerald-400 text-white',
    yellow: 'bg-amber-500 hover:bg-amber-400 text-white',
    red: 'bg-red-500 hover:bg-red-400 text-white',
    purple: 'bg-purple-500 hover:bg-purple-400 text-white',
    ghost: 'bg-white/8 hover:bg-white/15 text-white border border-white/15',
    cyan: 'bg-cyan-600 hover:bg-cyan-500 text-white',
  };
  return (
    <button onClick={onClick}
      className={`text-[10px] font-bold px-3 py-1.5 rounded-lg transition-all active:scale-95 ${map[c] ?? map.blue}`}>
      {label}
    </button>
  );
};

/* ─── IndexBar widget ─── */
const IndexBar = ({ value, onClick }: { value: number; onClick: () => void }) => {
  const col = value >= 71 ? '#10b981' : value >= 41 ? '#f59e0b' : '#ef4444';
  const lbl = value >= 71 ? '🟢 Отлично' : value >= 41 ? '🟡 Внимание' : '🔴 Критический';
  return (
    <div className="bg-white/5 rounded-xl p-3 cursor-pointer group" onClick={onClick}>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[9px] text-white/40 font-semibold">Индекс защиты</span>
        <span className="text-[9px] font-bold" style={{ color: col }}>{lbl}</span>
      </div>
      <div className="flex items-end gap-2 mb-2">
        <span className="text-3xl font-black text-white">{value}</span>
        <span className="text-[10px] text-white/30 mb-0.5">/100</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-1">
        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${value}%`, background: col }} />
      </div>
      <div className="hidden group-hover:grid grid-cols-2 gap-1 text-[9px] text-white/50 border-t border-white/10 pt-2 mt-2">
        <span>🫁 Здоровье: <b className="text-white">65</b></span>
        <span>🚗 Авто: <b className="text-white">80</b></span>
        <span>🏠 Имущество: <b className="text-white">50</b></span>
        <span>💼 Доход: <b className="text-white">70</b></span>
      </div>
    </div>
  );
};

/* ════════════════════════════════ MAIN ════════════════════════════════ */
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="container mx-auto px-6 py-16 max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/8 mb-6 text-[11px] text-blue-300 font-bold tracking-wider uppercase">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            Страховой Совкомбанк · Мобильное приложение
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-br from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">Финтрекер</h1>
          <p className="text-lg text-slate-400 max-w-lg mx-auto mb-2">Страховая версия модуля финансового здоровья</p>
          <p className="text-sm text-slate-600">Интерактивная концепция · Презентация функционала</p>
        </div>
      </div>

      {/* NAV */}
      <nav className="sticky top-0 z-40 bg-[#060d1a]/95 backdrop-blur-xl border-b border-blue-500/8">
        <div className="container mx-auto px-4 max-w-5xl flex overflow-x-auto gap-0.5 py-2 no-scrollbar">
          {nav.map(n => (
            <button key={n.id} onClick={() => document.getElementById(n.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold text-slate-500 hover:text-white hover:bg-blue-500/12 transition-all whitespace-nowrap">
              <span>{n.e}</span>{n.l}
            </button>
          ))}
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16 max-w-5xl">

        {/* ══════════════════════════ SCREEN 1 ══════════════════════════ */}
        <Section id="sc1" num="Раздел 1" emoji="📱" title="Главный экран: «Финансовое здоровье»"
          goal="Показать клиенту общий уровень защиты — не только от потери денег, но и от потери здоровья, имущества, дохода.">

          <Pair title="1.1 🫀 Индекс защиты"
            phone={
              <Phone label="Виджет 1.1">
                <div className="px-4 pb-5 space-y-3">
                  <div className="text-center pt-3 pb-2">
                    <p className="text-[10px] text-white/35 uppercase tracking-widest font-bold mb-3">🫀 Индекс защиты</p>
                    <div className="relative w-28 h-28 mx-auto mb-2">
                      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="10"
                          strokeDasharray={`${(72/100)*251.2} 251.2`} strokeLinecap="round" className="transition-all duration-1000" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-black text-white">72</span>
                        <span className="text-[8px] text-emerald-400 font-bold">/100</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-emerald-400 font-bold mb-1">🟢 Отлично</p>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[['🫁 Здоровье','65','#f59e0b'],['🚗 Авто','80','#10b981'],['🏠 Имущество','50','#ef4444'],['💼 Доход','70','#10b981']].map(([l,v,c],i)=>(
                      <div key={i} className="bg-white/5 rounded-lg p-2">
                        <p className="text-[8px] text-white/40 mb-1">{l}</p>
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{width:`${v}%`,background:c as string}} />
                        </div>
                        <p className="text-[9px] font-bold mt-0.5" style={{color: c as string}}>{v}/100</p>
                      </div>
                    ))}
                  </div>
                  <Btn label="Проверить защиту →" onClick={() => say('Переход: раздел «Финансовый сон»')} />
                </div>
              </Phone>
            }>
            <p>Общий показатель уровня страховой защиты (0–100), рассчитанный на основе наличия и актуальности полисов, покрытия ключевых рисков и своевременности оплаты.</p>
            <p><span className="text-red-400">0–40 🔴 Критический</span> · <span className="text-amber-400">41–70 🟡 Внимание</span> · <span className="text-emerald-400">71–100 🟢 Отлично</span></p>
            <p className="text-slate-500 italic">Разбивка по категориям: Здоровье 65, Авто 80, Имущество 50, Доход 70.</p>
            <p><span className="text-blue-400">Кнопка:</span> «Проверить защиту» → раздел «Финансовый сон».</p>
          </Pair>

          <Pair title="1.2 🛡️ Запас защиты"
            phone={
              <Phone label="Виджет 1.2">
                <div className="px-4 pb-5 space-y-3">
                  <p className="text-[10px] text-white/35 uppercase tracking-widest font-bold mt-3">🛡️ Запас защиты</p>
                  <div className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/10 border border-emerald-500/20 rounded-xl p-4 group cursor-pointer"
                    onClick={() => say('Переход: Накопления + защита')}>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="flex items-end gap-1.5">
                          <span className="text-5xl font-black text-emerald-400">6</span>
                          <span className="text-sm text-white/40 mb-1">мес</span>
                        </div>
                        <p className="text-[10px] text-white/50">Подушки хватит на 6 месяцев</p>
                      </div>
                      <div className="text-3xl">🟢</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
                      <div className="bg-white/5 rounded-lg p-2 text-center">
                        <p className="text-[8px] text-white/40">Накопления</p>
                        <p className="text-base font-black text-blue-400">3 <span className="text-[9px] text-white/40">мес</span></p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2 text-center">
                        <p className="text-[8px] text-white/40">Покрытие</p>
                        <p className="text-base font-black text-emerald-400">3 <span className="text-[9px] text-white/40">мес</span></p>
                      </div>
                    </div>
                  </div>
                  <Btn label="Увеличить запас →" onClick={() => say('Переход: Накопления + защита')} c="green" />
                </div>
              </Phone>
            }>
            <p>Сколько месяцев клиент может прожить без дохода, если все активы и полисы работают штатно.</p>
            <p className="font-mono text-[11px] bg-white/5 rounded-lg px-3 py-2 text-white/60">(Накопления + Страховое покрытие) / Расходы в месяц</p>
            <p><span className="text-red-400">&lt;3 мес 🔴</span> · <span className="text-amber-400">3–6 мес 🟡</span> · <span className="text-emerald-400">6+ мес 🟢</span></p>
            <p><span className="text-blue-400">Кнопка:</span> «Увеличить запас» → Финансовый сон → Накопления + защита.</p>
          </Pair>

          <Pair title="1.3 📉 Темп рисков"
            phone={
              <Phone label="Виджет 1.3">
                <div className="px-4 pb-5 space-y-3">
                  <p className="text-[10px] text-white/35 uppercase tracking-widest font-bold mt-3">📉 Темп рисков</p>
                  <div className="bg-white/5 rounded-xl p-4 cursor-pointer group" onClick={() => say('Переход: Защита от неожиданностей')}>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-amber-400 font-black text-sm">⚡ Турбулентный</span>
                        <p className="text-[9px] text-white/40 mt-0.5">Риски растут</p>
                      </div>
                      <span className="text-[9px] text-white/30">3 мес</span>
                    </div>
                    <svg viewBox="0 0 240 60" className="w-full h-14 mb-2">
                      <defs>
                        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.3"/>
                        </linearGradient>
                      </defs>
                      <path d="M0,52 C20,48 30,40 60,32 C90,24 100,28 130,18 C160,8 180,22 240,14" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round"/>
                      <circle cx="240" cy="14" r="4" fill="#ef4444"/>
                      {[0,60,130,240].map((x,i)=>(
                        <line key={i} x1={x} y1="55" x2={x} y2="52" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                      ))}
                    </svg>
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-2 text-[9px] text-amber-300">
                      Вы совершили 5 поездок за 2 месяца. Рекомендуем ВЗР.
                    </div>
                  </div>
                  <Btn label="Проверить риски →" onClick={() => say('Переход: Защита от неожиданностей')} c="yellow" />
                </div>
              </Phone>
            }>
            <p>Динамика рисковой нагрузки за последние 3 месяца. Статус: «Турбулентный» / «Комфортный» / «Спокойный».</p>
            <p className="text-slate-500 italic">Контекстная подсказка с рекомендацией продукта по поведению клиента.</p>
            <p><span className="text-blue-400">Кнопка:</span> «Проверить риски» → Финансовый сон → Защита от неожиданностей.</p>
          </Pair>
        </Section>

        {/* ══════════════════════════ SCREEN 2 ══════════════════════════ */}
        <Section id="sc2" num="Раздел 2" emoji="📈" title="Путь к цели"
          goal="Показать, как страхование помогает достигать целей — защищая накопления на пути к ним.">

          <Pair title="2.1 ✈️ Цель: Париж"
            phone={
              <Phone label="Виджет 2.1">
                <div className="px-4 pb-5 space-y-3">
                  <p className="text-[10px] text-white/35 uppercase tracking-widest font-bold mt-3">✈️ Путь к цели</p>
                  <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/20 border border-blue-500/20 rounded-xl p-4 cursor-pointer group"
                    onClick={() => say('Открываем оформление ВЗР')}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-xl flex-shrink-0">✈️</div>
                      <div>
                        <p className="text-sm font-black text-white">Париж</p>
                        <p className="text-[9px] text-white/40">Осталось 177 дней</p>
                      </div>
                      <span className="ml-auto text-sm font-black text-blue-400">65%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                      <div className="h-full w-[65%] bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full transition-all duration-1000" />
                    </div>
                    <div className="flex justify-between text-[9px] text-white/40 mb-3">
                      <span>80 000 ₽</span><span>120 000 ₽</span>
                    </div>
                    <div className="bg-amber-500/10 border border-amber-500/25 rounded-lg p-2 text-[9px] text-amber-300 flex items-start gap-1.5">
                      <span>💡</span>
                      <span>Оформите ВЗР за 850 ₽, чтобы защитить поездку.</span>
                    </div>
                  </div>
                  <Btn label="Добавить защиту →" onClick={() => say('Открываем оформление ВЗР')} />
                </div>
              </Phone>
            }>
            <p>Прогресс накоплений на конкретную цель с привязанной рекомендацией страхового продукта (ВЗР) в нужный момент.</p>
            <p className="text-slate-500 italic">«Оформите ВЗР за 850 ₽, чтобы защитить поездку.»</p>
            <p><span className="text-blue-400">Кнопка:</span> «Добавить защиту» → интерфейс оформления ВЗР.</p>
          </Pair>

          <Pair title="2.2 📈 Динамика накоплений + защита"
            phone={
              <Phone label="Виджет 2.2">
                <div className="px-4 pb-5 space-y-3">
                  <p className="text-[10px] text-white/35 uppercase tracking-widest font-bold mt-3">📈 Накопления + защита</p>
                  <div className="bg-white/5 rounded-xl p-4 cursor-pointer group" onClick={() => say('Переход: Накопления + защита')}>
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-[9px] text-white/40">6 месяцев</p>
                      <span className="text-[9px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full">+10% от НСЖ</span>
                    </div>
                    <svg viewBox="0 0 240 70" className="w-full h-16 mb-3">
                      {[0,40,80,120,160,200,240].map((x,i)=>(
                        <rect key={i} x={x-9} y={65-(i*9+5)} width={18} height={i*9+5} fill="rgba(16,185,129,0.2)" rx="2"/>
                      ))}
                      <path d="M0,65 C30,58 60,48 90,38 C120,28 150,22 180,15 C200,11 220,8 240,5"
                        fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/>
                      <circle cx="240" cy="5" r="4" fill="#3b82f6"/>
                    </svg>
                    <div className="flex gap-4 text-[9px] text-white/40 border-t border-white/10 pt-2">
                      <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-blue-400 inline-block rounded"/>Накопления</span>
                      <span className="flex items-center gap-1.5"><span className="w-3 h-2.5 bg-emerald-400/40 inline-block rounded"/>Покрытие НСЖ</span>
                    </div>
                    <p className="text-[9px] text-emerald-300 mt-2">Благодаря НСЖ вы накопили на 5 000 ₽ больше.</p>
                  </div>
                  <Btn label="Увеличить защиту →" onClick={() => say('Переход: Накопления + защита')} c="green" />
                </div>
              </Phone>
            }>
            <p>Комбинированный график: линия роста накоплений + столбцы страхового покрытия НСЖ.</p>
            <p className="text-slate-500 italic">«Благодаря НСЖ вы накопили на 5 000 ₽ больше.»</p>
            <p><span className="text-blue-400">Кнопка:</span> «Увеличить защиту» → Финансовый сон → Накопления + защита.</p>
          </Pair>
        </Section>

        {/* ══════════════════════════ SCREEN 3 ══════════════════════════ */}
        <Section id="sc3" num="Раздел 3" emoji="💸" title="Мой поток"
          goal="Показать, как страхование помогает контролировать расходы и защищает от непредвиденных трат.">

          <Pair title="3.1 🛒 Защита покупок"
            phone={
              <Phone label="Виджет 3.1" bg="#07101f">
                <div className="px-4 pb-5 space-y-3">
                  <p className="text-[10px] text-white/35 uppercase tracking-widest font-bold mt-3">🛒 Защита покупок</p>
                  {[
                    { name: 'Ноутбук', price: '50 000 ₽', ok: false, tip: 'Защитите от поломки за 150 ₽' },
                    { name: 'Смартфон', price: '30 000 ₽', ok: true, tip: '' },
                    { name: 'Телевизор', price: '45 000 ₽', ok: false, tip: 'Страховка от 200 ₽/мес' },
                  ].map((item, i) => (
                    <div key={i}
                      className="bg-white/5 hover:bg-white/8 rounded-xl p-3 flex items-center gap-3 cursor-pointer transition-all group"
                      onClick={() => say(item.ok ? `${item.name} уже защищён` : `Оформляем страховку на ${item.name}`)}>
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-base flex-shrink-0">
                        {item.name === 'Ноутбук' ? '💻' : item.name === 'Смартфон' ? '📱' : '📺'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-semibold text-white">{item.name}</p>
                        <p className="text-[9px] text-white/35">{item.price}</p>
                        {!item.ok && <p className="text-[9px] text-amber-300 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">{item.tip}</p>}
                      </div>
                      <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${item.ok ? 'bg-emerald-500/15 text-emerald-400' : 'bg-red-500/15 text-red-400'}`}>
                        {item.ok ? '✓ Защищено' : '✕ Риск'}
                      </span>
                    </div>
                  ))}
                  <Btn label="Защитить покупку →" onClick={() => say('Открываем страхование покупок')} />
                </div>
              </Phone>
            }>
            <p>Список крупных покупок с маркировкой «Защищено» / «Риск». Проактивный оффер страховки в нужный момент.</p>
            <p className="text-slate-500 italic">Hover → «Защитите ноутбук от поломки за 150 ₽.»</p>
            <p><span className="text-blue-400">Кнопка:</span> «Защитить» → интерфейс страхования покупок.</p>
          </Pair>

          <Pair title="3.2 📊 Категории рисков"
            phone={
              <Phone label="Виджет 3.2" bg="#07101f">
                <div className="px-4 pb-5 space-y-3">
                  <p className="text-[10px] text-white/35 uppercase tracking-widest font-bold mt-3">📊 Категории рисков</p>
                  <div className="bg-white/5 rounded-xl p-4 cursor-pointer group" onClick={() => say('Открываем страхование здоровья')}>
                    <p className="text-[9px] text-white/40 mb-3">Распределение рисков по категориям</p>
                    {[
                      { l: 'Здоровье', p: 40, col: '#ef4444', icon: '🫁' },
                      { l: 'Авто', p: 30, col: '#3b82f6', icon: '🚗' },
                      { l: 'Имущество', p: 20, col: '#8b5cf6', icon: '🏠' },
                      { l: 'Доход', p: 10, col: '#f59e0b', icon: '💼' },
                    ].map((c, i) => (
                      <div key={i} className="mb-2.5">
                        <div className="flex justify-between text-[9px] mb-1">
                          <span className="text-white/50">{c.icon} {c.l}</span>
                          <span className="font-black text-white">{c.p}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full rounded-full transition-all duration-700" style={{ width: `${c.p}%`, background: c.col }} />
                        </div>
                      </div>
                    ))}
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-2 text-[9px] text-red-300 mt-3">
                      40% рисков — здоровье. Рекомендуем страхование здоровья.
                    </div>
                  </div>
                  <Btn label="Оформить страхование →" onClick={() => say('Открываем страхование здоровья')} c="red" />
                </div>
              </Phone>
            }>
            <p>Диаграмма рисковой нагрузки по 4 категориям с контекстной рекомендацией страхового продукта.</p>
            <p className="text-slate-500 italic">«40% рисков — здоровье. Рекомендуем страхование здоровья.»</p>
            <p><span className="text-blue-400">Кнопка:</span> «Оформить» → страхование здоровья.</p>
          </Pair>
        </Section>

        {/* ══════════════════════════ SCREEN 4 ══════════════════════════ */}
        <Section id="sc4" num="Раздел 4" emoji="🛡️" title="Финансовый сон"
          goal="Показать клиенту, насколько он защищён от будущих рисков — здоровье, имущество, доход.">

          <Pair title="4.1–4.3 Запас · Индекс · Пролонгация"
            phone={
              <Phone label="Экран «Финансовый сон»" bg="#050c1a">
                <div className="px-3 pt-3 pb-5 space-y-3">
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">🛡️ Финансовый сон</p>
                  {/* 4.1 */}
                  <div className="bg-gradient-to-r from-emerald-900/30 to-transparent border border-emerald-500/15 rounded-xl p-3 cursor-pointer"
                    onClick={() => say('Переход: Накопления + защита')}>
                    <p className="text-[8px] text-white/35 mb-1">💤 Запас спокойствия</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-end gap-1">
                        <span className="text-3xl font-black text-emerald-400">6</span>
                        <span className="text-[9px] text-white/35 mb-0.5">мес 🟢</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1 text-[8px]">
                        <span className="bg-white/5 rounded px-1.5 py-0.5 text-white/50">Накоп: <b className="text-white">3м</b></span>
                        <span className="bg-white/5 rounded px-1.5 py-0.5 text-white/50">Покр: <b className="text-white">3м</b></span>
                      </div>
                    </div>
                  </div>
                  {/* 4.2 */}
                  <IndexBar value={72} onClick={() => say('Проверяем защиту')} />
                  {/* 4.3 */}
                  <div className="bg-amber-500/8 border border-amber-500/20 rounded-xl p-3 cursor-pointer"
                    onClick={() => say('Открываем пролонгацию')}>
                    <p className="text-[8px] text-white/35 mb-2">📅 Пролонгация полисов</p>
                    {[
                      { name: 'ОСАГО', date: '15.06.2025', urgency: 'high' },
                      { name: 'КАСКО', date: '20.07.2025', urgency: 'med' },
                    ].map((p, i) => (
                      <div key={i} className="flex items-center justify-between mb-1.5">
                        <div>
                          <span className="text-[10px] font-bold text-white">{p.name}</span>
                          <span className="text-[8px] text-white/35 ml-2">{p.date}</span>
                        </div>
                        <span className={`text-[8px] font-bold ${p.urgency === 'high' ? 'text-red-400' : 'text-amber-400'}`}>
                          {p.urgency === 'high' ? '🔴 Срочно' : '🟡 Скоро'}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Btn label="Продлить полисы →" onClick={() => say('Открываем пролонгацию')} c="yellow" />
                </div>
              </Phone>
            }>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-white text-sm mb-1">4.1 💤 Запас спокойствия</p>
                <p className="text-slate-400 text-[13px]">Месяцы без дохода при работающих полисах. Разбивка по источникам.</p>
              </div>
              <div>
                <p className="font-bold text-white text-sm mb-1">4.2 🛡️ Индекс защиты</p>
                <p className="text-slate-400 text-[13px]">Шкала 0–100 с цветовой индикацией и детализацией по категориям.</p>
              </div>
              <div>
                <p className="font-bold text-white text-sm mb-1">4.3 📅 Пролонгация полисов</p>
                <p className="text-slate-400 text-[13px]">Список полисов с истекающим сроком (30 дней). Срочность: 🔴 Срочно / 🟡 Скоро.</p>
                <p className="text-slate-500 text-[12px] italic mt-1">«Пролонгируйте ОСАГО, чтобы избежать штрафа.»</p>
              </div>
            </div>
          </Pair>
        </Section>

        {/* ══════════════════════════ SCREEN 5 ══════════════════════════ */}
        <Section id="sc5" num="Раздел 5" emoji="📊" title="Карма и контроль"
          goal="Показать уровень финансовой репутации, безопасности и доступ к поддержке.">

          <Pair title="5.1–5.3 Карма · Безопасность · Обращения"
            phone={
              <Phone label="Экран «Карма и контроль»" bg="#060e1d">
                <div className="px-3 pt-3 pb-5 space-y-3">
                  {/* 5.1 */}
                  <div className="bg-gradient-to-br from-amber-900/40 to-yellow-900/10 border border-amber-500/20 rounded-xl p-3 cursor-pointer"
                    onClick={() => say('Открываем «Поделиться»')}>
                    <p className="text-[8px] text-white/35 mb-1">📈 Карма</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-end gap-1.5">
                          <span className="text-3xl font-black text-amber-400">890</span>
                          <span className="text-[9px] text-white/35 mb-0.5">баллов</span>
                        </div>
                        <p className="text-[8px] text-white/50">Отличная репутация. Платежи вовремя.</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-amber-400/15 flex items-center justify-center text-xl">🌟</div>
                    </div>
                  </div>
                  <Btn label="Поделиться статусом 🌟" onClick={() => say('Открываем «Поделиться»')} c="yellow" />
                  {/* 5.2 */}
                  <div className="bg-white/5 rounded-xl p-3 cursor-pointer" onClick={() => say('Открываем настройки безопасности')}>
                    <p className="text-[8px] text-white/35 mb-2">🔐 Безопасность</p>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold text-emerald-400">✓ Включена</span>
                      <div className="w-9 h-5 rounded-full bg-emerald-500 relative">
                        <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow" />
                      </div>
                    </div>
                    <p className="text-[8px] text-white/35">Face ID + двухфакторная аутентификация</p>
                  </div>
                  <Btn label="Настроить →" onClick={() => say('Открываем настройки безопасности')} c="ghost" />
                  {/* 5.3 */}
                  <div className="bg-white/5 rounded-xl p-3 cursor-pointer" onClick={() => say('Открываем чат поддержки')}>
                    <p className="text-[8px] text-white/35 mb-1.5">📞 Обращения</p>
                    <p className="text-[10px] font-bold text-white mb-0.5">Мы всегда на связи</p>
                    <div className="flex gap-1.5 flex-wrap">
                      {['💬 Чат 24/7', '📞 Телефон', '📝 Форма'].map((ch, i) => (
                        <span key={i} className="text-[8px] bg-blue-500/15 text-blue-300 px-1.5 py-0.5 rounded">{ch}</span>
                      ))}
                    </div>
                  </div>
                  <Btn label="Написать в чат →" onClick={() => say('Открываем чат поддержки')} />
                </div>
              </Phone>
            }>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-white text-sm mb-1">5.1 📈 Карма: 890 баллов</p>
                <p className="text-slate-400 text-[13px]">Балловая оценка финансовой дисциплины: своевременность оплат, активная защита, отсутствие рисков.</p>
                <p className="text-[13px] mt-1"><span className="text-blue-400">Кнопка:</span> «Поделиться» → шаринг статуса.</p>
              </div>
              <div>
                <p className="font-bold text-white text-sm mb-1">5.2 🔐 Безопасность</p>
                <p className="text-slate-400 text-[13px]">Статус защитных механизмов: Face ID, 2FA. Быстрая настройка.</p>
              </div>
              <div>
                <p className="font-bold text-white text-sm mb-1">5.3 📞 Обращения</p>
                <p className="text-slate-400 text-[13px]">Быстрый доступ к поддержке: чат 24/7, телефон, форма обратной связи.</p>
              </div>
            </div>
          </Pair>
        </Section>

        {/* ══════════════════════════ SCREEN 6 ══════════════════════════ */}
        <Section id="sc6" num="Раздел 6" emoji="🎯" title="Статусы в Финтрекере"
          goal="Геймификация защиты: статусы мотивируют клиентов поддерживать высокий уровень страховой защиты.">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: '🌙', title: 'Глубокий сон',
                from: 'from-blue-950', border: 'border-blue-500/25',
                conds: ['Индекс защиты > 80','Запас > 6 месяцев','Нет просрочек','Нет открытых рисков'],
                text: 'Спать можно крепко — подушки хватит на 6 месяцев.',
                btns: [{ l: 'Проверить защиту', c: 'ghost', a: () => say('Переход: Финансовый сон') }],
              },
              {
                icon: '🌟', title: 'Карма',
                from: 'from-amber-950', border: 'border-amber-500/25',
                conds: ['Индекс защиты > 80','Платежи вовремя','Нет рисков'],
                text: 'Сильный статус и хорошая репутация.',
                btns: [{ l: 'Поделиться', c: 'yellow', a: () => say('Открываем «Поделиться»') }],
              },
              {
                icon: '🎯', title: 'В зоне контроля',
                from: 'from-orange-950', border: 'border-orange-500/25',
                conds: ['Индекс 50–70','Запас 3–6 мес','Есть просрочки','Есть риски'],
                text: 'Вы в зоне контроля — следите за рисками.',
                btns: [
                  { l: 'Проверить риски', c: 'ghost', a: () => say('Переход: Защита от неожиданностей') },
                  { l: 'Продлить полисы', c: 'yellow', a: () => say('Открываем пролонгацию') },
                ],
              },
            ].map((s, i) => (
              <div key={i} className={`rounded-2xl border ${s.border} bg-gradient-to-br ${s.from} to-transparent p-5 flex flex-col`}>
                <div className="text-4xl mb-3">{s.icon}</div>
                <h4 className="font-black text-white text-base mb-3">{s.title}</h4>
                <div className="space-y-1 mb-4 flex-1">
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

        {/* ══════════════════════════ SCREEN 7 ══════════════════════════ */}
        <Section id="sc7" num="Раздел 7" emoji="🔐" title="Кнопки зоны контроля"
          goal="Быстрый доступ к страховым продуктам, безопасности, уведомлениям и персональным данным.">

          {/* Phone + desc */}
          <div className="flex flex-col lg:flex-row gap-10 items-start mb-16">
            <Phone label="Меню зоны контроля" bg="#050c19">
              <div className="px-3 pt-3 pb-5 space-y-2">
                <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-3">Зона контроля</p>
                {[
                  { e: '📁', l: 'Страховые продукты', col: 'text-blue-400', a: () => say('Страховые продукты') },
                  { e: '🛡️', l: 'Безопасность и защита', col: 'text-emerald-400', a: () => say('Безопасность и защита') },
                  { e: '🔔', l: 'Уведомления и новости', col: 'text-amber-400', a: () => say('Уведомления') },
                  { e: '📞', l: 'Обращения в поддержку', col: 'text-purple-400', a: () => say('Обращения в поддержку') },
                  { e: '📄', l: 'Персональные данные', col: 'text-pink-400', a: () => say('Персональные данные') },
                ].map((item, i) => (
                  <button key={i} onClick={item.a}
                    className="w-full flex items-center gap-3 bg-white/5 hover:bg-white/10 rounded-xl px-3 py-3 transition-all active:scale-[0.98] group">
                    <span className="text-lg">{item.e}</span>
                    <span className={`text-[11px] font-bold ${item.col}`}>{item.l}</span>
                    <Icon name="ChevronRight" size={13} className="ml-auto text-white/18 group-hover:text-white/50 transition-colors" />
                  </button>
                ))}
              </div>
            </Phone>
            <div className="flex-1 text-[13px] text-slate-400 leading-relaxed space-y-1">
              <p className="font-bold text-white mb-2">Навигация по разделам</p>
              <p>5 ключевых пунктов меню с адаптированным под страхование содержимым.</p>
              <p>Каждая кнопка раскрывает отдельный экран с полным функционалом — описание ниже.</p>
            </div>
          </div>

          {/* 5 detailed screens */}
          {/* 7.1 */}
          <Pair title="7.1 📁 Страховые продукты"
            phone={
              <Phone label="Экран 7.1" bg="#060f1e">
                <div className="px-3 pt-3 pb-5 space-y-2">
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">📁 Страховые продукты</p>
                  {/* filters */}
                  <div className="flex gap-1.5 flex-wrap">
                    {['Все','Активные','Продление','Не оформлены'].map((f,i) => (
                      <span key={i} className={`text-[8px] px-2 py-0.5 rounded-full font-bold cursor-pointer ${i===0 ? 'bg-blue-500 text-white' : 'bg-white/8 text-white/40 hover:bg-white/15'}`}>{f}</span>
                    ))}
                  </div>
                  {/* categories */}
                  <div className="grid grid-cols-4 gap-1.5">
                    {[['🛡️','Здоровье'],['🚗','Авто'],['🏠','Дом'],['✈️','ВЗР'],['💼','Доход'],['🐾','Pet'],['📱','Гаджеты'],['💰','Финриски']].map(([e,l],i)=>(
                      <button key={i} onClick={() => say(`Категория: ${l}`)}
                        className="bg-white/5 hover:bg-blue-500/15 rounded-lg p-1.5 flex flex-col items-center gap-0.5 transition-all active:scale-95">
                        <span className="text-base">{e}</span>
                        <span className="text-[7px] text-white/40">{l}</span>
                      </button>
                    ))}
                  </div>
                  {/* cards */}
                  {[
                    { name: 'ОСАГО', desc: 'Авто-страхование', cover: '400 000 ₽', status: 'ok' },
                    { name: 'ВЗР', desc: 'Защита путешествий', cover: '50 000 €', status: 'renew' },
                    { name: 'НСЖ', desc: 'Жизнь и накопления', cover: '1 000 000 ₽', status: 'none' },
                  ].map((p, i) => (
                    <div key={i} className="bg-white/5 rounded-xl p-2.5 flex items-center gap-2 cursor-pointer hover:bg-white/8 transition-all"
                      onClick={() => say(`Открываем ${p.name}`)}>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <p className="text-[10px] font-black text-white">{p.name}</p>
                          <span className={`text-[7px] px-1.5 py-0.5 rounded-full font-bold ${p.status==='ok' ? 'bg-emerald-500/15 text-emerald-400' : p.status==='renew' ? 'bg-amber-500/15 text-amber-400' : 'bg-white/10 text-white/40'}`}>
                            {p.status==='ok' ? 'Активен' : p.status==='renew' ? 'Продление' : 'Не оформлен'}
                          </span>
                        </div>
                        <p className="text-[8px] text-white/35">{p.desc} · {p.cover}</p>
                      </div>
                      <button className="text-[8px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-lg flex-shrink-0" onClick={() => say(`Оформляем ${p.name}`)}>
                        {p.status === 'none' ? 'Оформить' : 'Подробнее'}
                      </button>
                    </div>
                  ))}
                </div>
              </Phone>
            }>
            <p>Экран группировки всех страховых продуктов с фильтрами и категориями.</p>
            <p><b className="text-white/80">Категории:</b> Здоровье · Авто · Имущество · ВЗР · Доход · Pet · Гаджеты · Финриски</p>
            <p><b className="text-white/80">Фильтры:</b> по типу, сроку, стоимости, статусу (Активные / Продление / Не оформлены)</p>
            <p><b className="text-white/80">Карточка продукта:</b> название, описание, сумма покрытия, статус, кнопки «Подробнее» и «Оформить».</p>
            <p>Поиск по названию или категории.</p>
          </Pair>

          {/* 7.2 */}
          <Pair title="7.2 🛡️ Безопасность и защита"
            phone={
              <Phone label="Экран 7.2" bg="#060f1e">
                <div className="px-3 pt-3 pb-5 space-y-2">
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">🛡️ Безопасность и защита</p>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[['🛡️','Здоровье'],['🚗','Авто'],['🏠','Дом'],['✈️','Путешест.'],['💼','Доход'],['💰','Фин. риски']].map(([e,l],i) => (
                      <button key={i} onClick={() => say(`Страховой случай: ${l}`)}
                        className="bg-white/5 hover:bg-emerald-500/10 border border-white/5 hover:border-emerald-500/30 rounded-xl p-2 flex flex-col items-center gap-1 transition-all active:scale-95">
                        <span className="text-lg">{e}</span>
                        <span className="text-[7px] text-white/40 text-center">{l}</span>
                      </button>
                    ))}
                  </div>
                  {/* detail */}
                  <div className="bg-white/5 rounded-xl p-3 space-y-2">
                    <p className="text-[9px] font-bold text-emerald-400">Страхование здоровья</p>
                    <div>
                      <p className="text-[8px] text-white/40 mb-0.5">Что покрывает</p>
                      <p className="text-[8px] text-white/70">Госпитализация, операции, лечение онкологии</p>
                    </div>
                    <div>
                      <p className="text-[8px] text-white/40 mb-0.5">Как решается случай</p>
                      <div className="space-y-0.5">
                        {['1. Сообщите о случае в чат','2. Предоставьте документы','3. Выплата в течение 3 дней'].map((s,i)=>(
                          <p key={i} className="text-[8px] text-white/60">{s}</p>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[8px] text-white/40">Макс. выплата</span>
                      <span className="text-[9px] font-black text-white">500 000 ₽</span>
                    </div>
                  </div>
                  <Btn label="Начать решение →" onClick={() => say('Открываем чат для страхового случая')} c="green" />
                </div>
              </Phone>
            }>
            <p>Экран с выбором вида страхования и подробным описанием решения страховых случаев.</p>
            <p><b className="text-white/80">При выборе вида:</b> что покрывает, пошаговое решение случая, сумма выплаты, документы, FAQ, видеоинструкция.</p>
            <p><span className="text-blue-400">Кнопка:</span> «Начать решение» → чат поддержки или форма подачи заявления.</p>
          </Pair>

          {/* 7.3 */}
          <Pair title="7.3 🔔 Уведомления и новости"
            phone={
              <Phone label="Экран 7.3" bg="#070f1d">
                <div className="px-3 pt-3 pb-5 space-y-3">
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">🔔 Уведомления</p>
                  <div className="space-y-1.5">
                    {[
                      { e: '📅', l: 'Пролонгация полиса (за 30 дней)', on: true },
                      { e: '💰', l: 'Напоминание об оплате', on: true },
                      { e: '🛡️', l: 'Изменение условий страхования', on: false },
                      { e: '📢', l: 'Новости по продуктам', on: true },
                      { e: '🎁', l: 'Акции и предложения', on: false },
                    ].map((n, i) => (
                      <div key={i} className="bg-white/5 rounded-xl px-3 py-2 flex items-center justify-between cursor-pointer hover:bg-white/8 transition-all"
                        onClick={() => say(`Переключили: ${n.l}`)}>
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{n.e}</span>
                          <span className="text-[9px] text-white/70">{n.l}</span>
                        </div>
                        <div className={`w-8 h-4.5 rounded-full relative flex-shrink-0 transition-colors ${n.on ? 'bg-blue-500' : 'bg-white/15'}`}
                          style={{height:'18px', width:'32px'}}>
                          <div className={`absolute top-0.5 w-3.5 h-3.5 bg-white rounded-full shadow transition-all ${n.on ? 'right-0.5' : 'left-0.5'}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-[9px] text-white/40 mb-1.5">Каналы</p>
                    <div className="flex gap-1.5 flex-wrap">
                      {['✅ Push','✅ SMS','✅ Email','✅ В приложении'].map((ch,i)=>(
                        <span key={i} className="text-[8px] bg-blue-500/15 text-blue-300 px-2 py-0.5 rounded">{ch}</span>
                      ))}
                    </div>
                  </div>
                  <Btn label="Проверить уведомление →" onClick={() => say('Отправляем тестовое уведомление')} c="ghost" />
                </div>
              </Phone>
            }>
            <p>Настройка уведомлений по страховым продуктам с раздельным управлением по каналам.</p>
            <p><b className="text-white/80">Типы:</b> Пролонгация · Оплата · Изменения условий · Новости · Акции</p>
            <p><b className="text-white/80">Каналы:</b> Push · SMS · Email · В приложении</p>
            <p>История уведомлений за 30 дней. Тест-кнопка для проверки канала.</p>
          </Pair>

          {/* 7.4 */}
          <Pair title="7.4 📞 Обращения в поддержку"
            phone={
              <Phone label="Экран 7.4" bg="#060e1c">
                <div className="px-3 pt-3 pb-5 space-y-2.5">
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">📞 Обращения</p>
                  <div className="space-y-1.5">
                    {[
                      { e: '🛡️', l: 'Решение страхового случая' },
                      { e: '💰', l: 'Оформление выплаты' },
                      { e: '📄', l: 'Документы и справки' },
                      { e: '📅', l: 'Пролонгация полиса' },
                      { e: '💬', l: 'Общие вопросы' },
                    ].map((t,i)=>(
                      <button key={i} onClick={() => say(`Тема: ${t.l}`)}
                        className="w-full flex items-center gap-2.5 bg-white/5 hover:bg-purple-500/10 rounded-xl px-3 py-2 transition-all group">
                        <span>{t.e}</span>
                        <span className="text-[10px] text-white/70 group-hover:text-white transition-colors">{t.l}</span>
                        <Icon name="ChevronRight" size={11} className="ml-auto text-white/20" />
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { e: '📱', l: 'Чат 24/7', c: 'bg-blue-500/15 hover:bg-blue-500/25 text-blue-300' },
                      { e: '📞', l: '8–22ч', c: 'bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300' },
                      { e: '📝', l: 'Форма', c: 'bg-purple-500/15 hover:bg-purple-500/25 text-purple-300' },
                    ].map((ch,i)=>(
                      <button key={i} onClick={() => say(`Открываем: ${ch.l}`)}
                        className={`flex flex-col items-center gap-1 rounded-xl p-2 transition-all active:scale-95 ${ch.c}`}>
                        <span className="text-lg">{ch.e}</span>
                        <span className="text-[8px] font-bold">{ch.l}</span>
                      </button>
                    ))}
                  </div>
                  <Btn label="Начать чат →" onClick={() => say('Открываем чат с оператором')} />
                </div>
              </Phone>
            }>
            <p>Экран с выбором темы обращения и способа связи по страховым вопросам.</p>
            <p><b className="text-white/80">Темы:</b> Страховой случай · Выплата · Документы · Пролонгация · Общие вопросы</p>
            <p><b className="text-white/80">Каналы:</b> Чат 24/7 · Телефон (8–22) · Форма обратной связи</p>
            <p>Блок FAQ с частыми вопросами. <span className="text-blue-400">Кнопка:</span> «Начать чат» → оператор.</p>
          </Pair>

          {/* 7.5 */}
          <Pair title="7.5 📄 Персональные данные"
            phone={
              <Phone label="Экран 7.5" bg="#060d1c">
                <div className="px-3 pt-3 pb-5 space-y-2.5">
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">📄 Персональные данные</p>
                  {/* fields */}
                  <div className="space-y-1.5">
                    {[
                      { l: 'Фамилия', v: 'Иванов' },
                      { l: 'Имя', v: 'Алексей' },
                      { l: 'Дата рождения', v: '12.03.1990' },
                      { l: 'Телефон', v: '+7 900 000-00-00' },
                    ].map((f,i)=>(
                      <div key={i} className="bg-white/5 rounded-lg px-3 py-1.5">
                        <p className="text-[7px] text-white/30">{f.l}</p>
                        <p className="text-[10px] text-white font-semibold">{f.v}</p>
                      </div>
                    ))}
                  </div>
                  {/* docs */}
                  <div>
                    <p className="text-[8px] text-white/35 mb-1.5">Документы</p>
                    <div className="space-y-1">
                      {[
                        { e: '🪪', l: 'Паспорт', s: 'Действителен' },
                        { e: '📋', l: 'Полисы (3 активных)', s: '' },
                        { e: '📊', l: 'История выплат', s: '' },
                      ].map((d,i)=>(
                        <button key={i} onClick={() => say(`Открываем: ${d.l}`)}
                          className="w-full flex items-center gap-2 bg-white/5 rounded-lg px-2.5 py-1.5 hover:bg-white/8 transition-all">
                          <span className="text-sm">{d.e}</span>
                          <span className="text-[9px] text-white/70">{d.l}</span>
                          {d.s && <span className="ml-auto text-[7px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">{d.s}</span>}
                        </button>
                      ))}
                    </div>
                  </div>
                  {/* consents */}
                  <div>
                    <p className="text-[8px] text-white/35 mb-1.5">Согласия</p>
                    <div className="space-y-1">
                      {['Обработка персональных данных','Получение уведомлений','Персональные предложения'].map((s,i)=>(
                        <div key={i} className="flex items-center gap-2 bg-white/5 rounded-lg px-2.5 py-1.5">
                          <span className="text-[9px] text-emerald-400">✅</span>
                          <span className="text-[8px] text-white/60">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Btn label="Сохранить" onClick={() => say('Данные сохранены')} c="green" />
                </div>
              </Phone>
            }>
            <p>Управление персональными данными, связанными со страхованием.</p>
            <p><b className="text-white/80">Данные:</b> ФИО, дата рождения, пол, адреса, телефон, email.</p>
            <p><b className="text-white/80">Документы:</b> паспорт, активные полисы, история выплат, история обращений.</p>
            <p><b className="text-white/80">Согласия:</b> ПД · Уведомления · Персонализированные предложения.</p>
            <p><span className="text-blue-400">Кнопка:</span> «Сохранить» → сохранение изменений.</p>
          </Pair>

        </Section>

      </div>

      <div className="border-t border-blue-500/8 py-8 text-center text-[11px] text-slate-700">
        Финтрекер · Страховой Совкомбанк · Концепция функционала мобильного приложения
      </div>
    </div>
  );
}
