import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.observe-element').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const processes1 = [
    { name: 'Анализ "сырых" требований, нормативных документов', time: '10,50 ч/мес', auto: '70%', saved: '7,35 ч/мес' },
    { name: 'Написание и оформление спецификаций требований (SRS, FSD)', time: '12,75 ч/мес', auto: '50%', saved: '6,38 ч/мес' },
    { name: 'Разработка пользовательских историй (US) и критериев приемки', time: '9,00 ч/мес', auto: '60%', saved: '5,40 ч/мес' }
  ];

  const processes3 = [
    { name: 'Транскрибация и анализ записей встреч', time: '5,25 ч/мес', auto: '95%', saved: '4,99 ч/мес' },
    { name: 'Подготовка и согласование повесток, материалов к встречам', time: '3,00 ч/мес', auto: '80%', saved: '2,40 ч/мес' },
    { name: 'Написание и рассылка вопросов, сбор доп. ответов', time: '3,75 ч/мес', auto: '85%', saved: '3,19 ч/мес' },
    { name: 'Подготовка материалов для UAT', time: '4,50 ч/мес', auto: '60%', saved: '2,70 ч/мес' }
  ];

  const processesProject = [
    { name: 'Координация с командами, ответы на вопросы в чатах', time: '10,50 ч/мес', auto: '20%', saved: '2,10 ч/мес' },
    { name: 'Поиск информации в прошлых проектах, базах знаний', time: '6,75 ч/мес', auto: '90%', saved: '6,08 ч/мес' },
    { name: 'Административная работа, отчетность по статусу', time: '4,50 ч/мес', auto: '80%', saved: '3,60 ч/мес' },
    { name: 'Создание и поддержка глоссария, моделей данных', time: '3,75 ч/мес', auto: '70%', saved: '2,63 ч/мес' },
    { name: 'Трассировка требований и управление изменениями', time: '6,00 ч/мес', auto: '90%', saved: '5,40 ч/мес' },
    { name: 'Разработка тест-кейсов и тестовых сценариев', time: '9,75 ч/мес', auto: '75%', saved: '7,31 ч/мес' }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(66,153,225,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 py-12 max-w-7xl relative z-10">
        
        <div className="text-center mb-12 observe-element">
          <div className="inline-block px-4 py-2 border border-primary/50 rounded-full mb-6 bg-primary/10 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-primary font-medium">СИСТЕМА ОПТИМИЗАЦИИ БА 2.0</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4 gradient-text tracking-tight">
            Новая эра автоматизации
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Точная экономия времени и ресурсов с применением искусственного интеллекта
          </p>
        </div>

        <Card className="observe-element hologram-card p-8 mb-12 scan-line">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-5xl">📌</div>
            <div className="flex-1">
              <h2 className="text-3xl font-black text-foreground mb-4">
                Итоговая рекомендация по внедрению
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                На основе трудозатрат и потенциала автоматизации, необходимо реализовывать задачи в следующем порядке:
              </p>
            </div>
          </div>
          
          <div className="grid gap-4 mb-8">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex-shrink-0">1</div>
              <div>
                <strong className="text-foreground">Задача 1 – Этап 1:</strong>
                <span className="text-muted-foreground ml-2">Усовершенствование пространства «Генератор БТ» — предоставить ИИ доступ к файлам БТ в Pyrus/Minerva.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex-shrink-0">2</div>
              <div>
                <strong className="text-foreground">Задача 2 – Этап 2:</strong>
                <span className="text-muted-foreground ml-2">Расширить доступ ИИ к Confluence и КИС (Деметра, Эластик, ЛИС, Диасофт) для глубокого анализа.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex-shrink-0">3</div>
              <div>
                <strong className="text-foreground">Задача 3:</strong>
                <span className="text-muted-foreground ml-2">Запустить AI-помощник для встреч — автоматизация подготовки, проведения и оформления встреч.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex-shrink-0">4</div>
              <div>
                <strong className="text-foreground">Проект «Централизованная AI-модель для БА»:</strong>
                <span className="text-muted-foreground ml-2">Создать единое приложение для автоматизации всех ключевых процессов.</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 neon-border">
              <div className="flex items-center gap-3 mb-2">
                <Icon name="Zap" size={24} className="text-primary" />
                <span className="text-sm text-muted-foreground">Общий потенциал (при полной реализации)</span>
              </div>
              <div className="text-4xl font-black text-primary">~62 ч/мес</div>
              <p className="text-xs text-muted-foreground mt-2">Более 1,5 полных рабочих месяца в год</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/30">
              <div className="flex items-center gap-3 mb-2">
                <Icon name="Target" size={24} className="text-secondary" />
                <span className="text-sm text-muted-foreground">Реалистичная экономия (1-й год)</span>
              </div>
              <div className="text-4xl font-black text-secondary">40–50 ч/мес</div>
              <p className="text-xs text-muted-foreground mt-2">1 полный рабочий месяц в год после адаптации</p>
            </div>
          </div>
        </Card>

        <Card className="observe-element hologram-card p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-5xl">🚀</div>
            <div className="flex-1">
              <Badge className="bg-primary/20 text-primary border-primary/50 mb-3">
                Задача 1 – Этап 1
              </Badge>
              <h2 className="text-3xl font-black text-foreground mb-3">
                Усовершенствование пространства «Генератор БТ»
              </h2>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-5 rounded-lg bg-destructive/10 border-l-4 border-destructive">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="AlertCircle" className="text-destructive" size={24} />
                <h3 className="text-xl font-bold text-destructive">Проблема</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Сейчас ИИ не может анализировать файлы БТ, приложенные в задачах Pyrus (в формах:{' '}
                <em>Доработка КИС, СК в МП, Чат-боты, Инициация проекта, Оценка ИИ</em>) и Minerva — из-за ограничений доступа со стороны СБ.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-secondary/10 border-l-4 border-secondary">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Lightbulb" className="text-secondary" size={24} />
                <h3 className="text-xl font-bold text-secondary">Решение</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Предоставить ИИ доступ к файлам БТ, чтобы он мог обогатить свою Базу Знаний и генерировать более структурированные и точные драфты требований — не только на основе контекста задачи (описания, комментариев, протоколов), но и на основе содержимого приложенных файлов.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-accent/10 border-l-4 border-accent">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="BarChart3" className="text-accent" size={24} />
                <h3 className="text-xl font-bold text-accent">Экономия по процессам</h3>
              </div>
              <div className="space-y-3">
                {processes1.map((proc, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-card/50 border border-border">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-foreground">{proc.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">{proc.time} → {proc.auto} автоматизации</div>
                    </div>
                    <div className="text-lg font-black text-destructive ml-4">{proc.saved}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-between">
                <span className="text-lg font-bold text-foreground">Итого по Задаче 1:</span>
                <span className="text-3xl font-black text-primary">19,13 ч/мес</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="observe-element hologram-card p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-5xl">🚀</div>
            <div className="flex-1">
              <Badge className="bg-primary/20 text-primary border-primary/50 mb-3">
                Задача 2 – Этап 2
              </Badge>
              <h2 className="text-3xl font-black text-foreground mb-3">
                Усовершенствование пространства «Генератор БТ» (расширение)
              </h2>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-5 rounded-lg bg-yellow-500/10 border-l-4 border-yellow-500">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Target" className="text-yellow-500" size={24} />
                <h3 className="text-xl font-bold text-yellow-500">Цель</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Дать ИИ доступ к полному контексту для написания более глубоких и точных требований.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-secondary/10 border-l-4 border-secondary">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wrench" className="text-secondary" size={24} />
                <h3 className="text-xl font-bold text-secondary">Решение</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border">
                  <Icon name="CheckCircle2" size={20} className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Доступ к Confluence:</strong>
                    <p className="text-foreground/70 text-sm mt-1">
                      ИИ получает доступ ко всем разделам Confluence (кроме закрытых по решению ИТ) и может анализировать не только текст, но и приложенные файлы.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border">
                  <Icon name="CheckCircle2" size={20} className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Доступ к КИС:</strong>
                    <p className="text-foreground/70 text-sm mt-1">
                      Расширить доступ ИИ к системам: <em>Деметра, Эластик СКБС, Эластик СКБСЖ, ЛИС, Диасофт Инлайф</em> — для анализа шифров, наименований продуктов, типов (коллективный и т.д.).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border">
                  <Icon name="CheckCircle2" size={20} className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Улучшение промпта:</strong>
                    <p className="text-foreground/70 text-sm mt-1">
                      Дополнить промпт для «Генератора БТ», чтобы ИИ анализировал не только задачи в Pyrus/Minerva, но и реальный функционал и данные из КИС — это сократит время на совещания и однотипные вопросы в ИТ.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-accent/10 border-l-4 border-accent">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="TrendingUp" className="text-accent" size={24} />
                <h3 className="text-xl font-bold text-accent">Ожидаемый эффект</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-3">
                Повышение качества драфтов БТ, снижение количества уточнений, экономия времени на согласовании и анализе. Глубокая интеграция с реальными данными компании.
              </p>
              <div className="p-4 rounded-lg bg-primary/20 border border-primary/50 inline-flex items-center gap-3">
                <span className="text-foreground">Дополнительная экономия:</span>
                <span className="text-2xl font-black text-primary">~2,5 ч/мес</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="observe-element hologram-card p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-5xl">🤖</div>
            <div className="flex-1">
              <Badge className="bg-primary/20 text-primary border-primary/50 mb-3">
                Задача 3
              </Badge>
              <h2 className="text-3xl font-black text-foreground mb-3">
                AI-помощник БА для проведения встреч и проработки БТ
              </h2>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-5 rounded-lg bg-yellow-500/10 border-l-4 border-yellow-500">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Target" className="text-yellow-500" size={24} />
                <h3 className="text-xl font-bold text-yellow-500">Цель</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Автоматизировать подготовку, проведение и оформление встреч — сократить трудозатраты на проработку вопросов с заинтересованными сторонами и написание первичного драфта требований.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-secondary/10 border-l-4 border-secondary">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Workflow" className="text-secondary" size={24} />
                <h3 className="text-xl font-bold text-secondary">Как это работает</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Calendar" size={20} className="text-primary" />
                    <strong className="text-sm text-foreground">Подготовка встречи</strong>
                  </div>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• Создание встречи в Outlook</li>
                    <li>• Анализ задачи и контекста</li>
                    <li>• Генерация вопросов для обсуждения</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Video" size={20} className="text-primary" />
                    <strong className="text-sm text-foreground">Проведение встречи</strong>
                  </div>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• Анализ речи в реальном времени</li>
                    <li>• Предложение наводящих вопросов</li>
                    <li>• Запись ключевых моментов</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="FileCheck" size={20} className="text-primary" />
                    <strong className="text-sm text-foreground">После встречи</strong>
                  </div>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• Формирование драфта в Word</li>
                    <li>• Список вопросов и ответов</li>
                    <li>• Предварительные оценки сроков</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-accent/10 border-l-4 border-accent">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="BarChart3" className="text-accent" size={24} />
                <h3 className="text-xl font-bold text-accent">Экономия по процессам</h3>
              </div>
              <div className="space-y-3">
                {processes3.map((proc, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-card/50 border border-border">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-foreground">{proc.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">{proc.time} → {proc.auto} автоматизации</div>
                    </div>
                    <div className="text-lg font-black text-destructive ml-4">{proc.saved}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-between">
                <span className="text-lg font-bold text-foreground">Итого по Задаче 3:</span>
                <span className="text-3xl font-black text-primary">13,28 ч/мес</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="observe-element hologram-card p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-5xl">🧠</div>
            <div className="flex-1">
              <Badge className="bg-primary/20 text-primary border-primary/50 mb-3">
                Проект
              </Badge>
              <h2 className="text-3xl font-black text-foreground mb-3">
                Централизованная AI-модель для Бизнес-Аналитиков
              </h2>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-5 rounded-lg bg-yellow-500/10 border-l-4 border-yellow-500">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Target" className="text-yellow-500" size={24} />
                <h3 className="text-xl font-bold text-yellow-500">Цель</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Полностью освободить БА от рутинных задач — координации, ответов на вопросы, отчётности — чтобы сфокусироваться на содержательной работе.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-destructive/10 border-l-4 border-destructive">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="AlertCircle" className="text-destructive" size={24} />
                <h3 className="text-xl font-bold text-destructive">Проблема</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                На непроизводственные задачи (<em>координация, встречи, отчётность</em>) тратится{' '}
                <span className="px-2 py-1 bg-yellow-500/20 rounded font-bold">21.75 ч/мес</span> — значительная часть рабочего времени.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-secondary/10 border-l-4 border-secondary">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Package" className="text-secondary" size={24} />
                <h3 className="text-xl font-bold text-secondary">Что будет в приложении</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { icon: 'FileText', title: 'Генерация БТ', desc: 'Основной модуль для написания требований с ИИ-подсказками' },
                  { icon: 'Users', title: 'Проведение встреч', desc: 'Хранение встреч, вопросов, ответов, протоколов ИИ' },
                  { icon: 'GitBranch', title: 'Схемы AS IS / TO BE', desc: 'ИИ помогает генерировать диаграммы на основе описания' },
                  { icon: 'ListChecks', title: 'Тест-кейсы и User Stories', desc: 'Автоматическая генерация по шаблонам' },
                  { icon: 'Shield', title: 'Проверка БТ', desc: 'ИИ проверяет полноту, логику, соответствие шаблонам' },
                  { icon: 'BarChart3', title: 'Дайджесты и статистика', desc: 'Еженедельные подборки, рейтинг БА для мотивации' }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon name={item.icon as any} size={16} className="text-primary" />
                      <strong className="text-sm text-foreground">{item.title}</strong>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-lg bg-accent/10 border-l-4 border-accent">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="BarChart3" className="text-accent" size={24} />
                <h3 className="text-xl font-bold text-accent">Экономия по процессам</h3>
              </div>
              <div className="space-y-2">
                {processesProject.map((proc, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-card/50 border border-border">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-foreground">{proc.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">{proc.time} → {proc.auto} автоматизации</div>
                    </div>
                    <div className="text-lg font-black text-destructive ml-4">{proc.saved}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-between">
                <span className="text-lg font-bold text-foreground">Итого по Проекту:</span>
                <span className="text-3xl font-black text-primary">27,12 ч/мес</span>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/50 cyber-glow">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Trophy" className="text-primary" size={32} />
                <h3 className="text-2xl font-black text-foreground">Общий потенциал экономии</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">При полной реализации всех задач:</p>
                  <div className="text-4xl font-black gradient-text">~62 ч/мес</div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">В реальности (1-й год):</p>
                  <div className="text-4xl font-black text-secondary">40–50 ч/мес</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Эквивалентно <strong className="text-foreground">1 полному рабочему месяцу в год</strong> после адаптации и настройки системы.
              </p>
            </div>
          </div>
        </Card>

        <footer className="observe-element text-center py-12 mt-12 border-t border-border/50">
          <div className="inline-block px-6 py-3 rounded-full bg-primary/10 border border-primary/50 mb-4">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" size={20} className="text-primary" />
              <span className="text-primary font-bold">Готовы начать трансформацию?</span>
            </div>
          </div>
          <p className="text-lg text-muted-foreground">
            Оптимизируйте работу вашей команды бизнес-аналитиков уже сегодня
          </p>
        </footer>

      </div>
    </div>
  );
};

export default Index;
