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

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        
        <Card className="observe-element bg-gradient-to-r from-blue-50 to-blue-100 border-l-8 border-primary shadow-lg p-8 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-4xl">📌</div>
            <h1 className="text-3xl font-black text-foreground">
              Итоговая рекомендация по внедрению ИИ для бизнес-аналитиков
            </h1>
          </div>
          
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            На основе трудозатрат и потенциала автоматизации, необходимо реализовывать задачи в следующем порядке:
          </p>
          
          <ol className="space-y-3 mb-6 ml-6">
            <li className="text-foreground leading-relaxed">
              <strong className="text-primary">Задача 1 – Этап 1</strong>: Усовершенствование пространства{' '}
              <span className="font-bold">&laquo;Генератор БТ&raquo;</span> — предоставить ИИ доступ к файлам БТ в Pyrus/Minerva.
            </li>
            <li className="text-foreground leading-relaxed">
              <strong className="text-primary">Задача 2 – Этап 2</strong>: Расширить доступ ИИ к Confluence и КИС (Деметра, Эластик, ЛИС, Диасофт) для глубокого анализа.
            </li>
            <li className="text-foreground leading-relaxed">
              <strong className="text-primary">Задача 3</strong>: Запустить{' '}
              <span className="font-bold">AI-помощник для встреч</span> — автоматизация подготовки, проведения и оформления встреч.
            </li>
            <li className="text-foreground leading-relaxed">
              <strong className="text-primary">Проект «Централизованная AI-модель для БА»</strong> — создать единое приложение для автоматизации всех ключевых процессов.
            </li>
          </ol>
          
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Badge className="bg-primary/20 text-primary border-primary/50 px-6 py-3 text-base">
              <Icon name="Clock" size={20} className="mr-2" />
              Экономия: ~40–45 ч/мес
            </Badge>
            <Badge className="bg-secondary/20 text-secondary border-secondary/50 px-6 py-3 text-base">
              <Icon name="TrendingUp" size={20} className="mr-2" />
              Почти 1 месяц работы в год
            </Badge>
          </div>
        </Card>

        <Card className="observe-element task-card bg-white border-2 border-primary/30 shadow-lg p-8 mb-8">
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
            <div className="bg-red-50 border-l-4 border-destructive p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="AlertCircle" className="text-destructive" size={24} />
                <h3 className="text-xl font-bold text-destructive">Проблема</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Сейчас ИИ не может анализировать файлы БТ, приложенные в задачах Pyrus (в формах:{' '}
                <em>Доработка КИС, СК в МП, Чат-боты, Инициация проекта, Оценка ИИ</em>) и Minerva — из-за ограничений доступа со стороны СБ.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-secondary p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Lightbulb" className="text-secondary" size={24} />
                <h3 className="text-xl font-bold text-secondary">Решение</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Предоставить ИИ доступ к файлам БТ, чтобы он мог обогатить свою Базу Знаний и генерировать более структурированные и точные драфты требований — не только на основе контекста задачи (описания, комментариев, протоколов), но и на основе содержимого приложенных файлов.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-accent p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Target" className="text-accent" size={24} />
                <h3 className="text-xl font-bold text-accent">Ожидаемый эффект</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-3">
                Быстрая оптимизация — этим пространством уже пользуются{' '}
                <span className="highlight-box font-bold">71,4% БА</span>. Экономия времени на первичной проработке требований.
              </p>
            </div>
          </div>
        </Card>

        <Card className="observe-element task-card bg-white border-2 border-primary/30 shadow-lg p-8 mb-8">
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
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Target" className="text-yellow-600" size={24} />
                <h3 className="text-xl font-bold text-yellow-700">Цель</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Дать ИИ доступ к полному контексту для написания более глубоких и точных требований.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-secondary p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Wrench" className="text-secondary" size={24} />
                <h3 className="text-xl font-bold text-secondary">Решение</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Доступ к Confluence:</strong>
                    <p className="text-foreground/70 mt-1">
                      ИИ получает доступ ко всем разделам Confluence (кроме закрытых по решению ИТ) и может анализировать не только текст, но и приложенные файлы.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Доступ к КИС:</strong>
                    <p className="text-foreground/70 mt-1">
                      Расширить доступ ИИ к системам: <em>Деметра, Эластик СКБС, Эластик СКБСЖ, ЛИС, Диасофт Инлайф</em> — для анализа шифров, наименований продуктов, типов (коллективный и т.д.).
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Улучшение промпта:</strong>
                    <p className="text-foreground/70 mt-1">
                      Дополнить промпт для «Генератора БТ», чтобы ИИ анализировал не только задачи в Pyrus/Minerva, но и реальный функционал и данные из КИС — это сократит время на совещания и однотипные вопросы в ИТ.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-accent p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="TrendingUp" className="text-accent" size={24} />
                <h3 className="text-xl font-bold text-accent">Ожидаемый эффект</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Повышение качества драфтов БТ, снижение количества уточнений, экономия времени на согласовании и анализе. Глубокая интеграция с реальными данными компании.
              </p>
            </div>
          </div>
        </Card>

        <Card className="observe-element task-card bg-white border-2 border-primary/30 shadow-lg p-8 mb-8">
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
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Target" className="text-yellow-600" size={24} />
                <h3 className="text-xl font-bold text-yellow-700">Цель</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Автоматизировать подготовку, проведение и оформление встреч — сократить трудозатраты на проработку вопросов с заинтересованными сторонами и написание первичного драфта требований.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-secondary p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Workflow" className="text-secondary" size={24} />
                <h3 className="text-xl font-bold text-secondary">Как это работает</h3>
              </div>
              
              <div className="space-y-4 mt-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Calendar" size={18} className="text-primary" />
                    <strong className="text-foreground">Подготовка встречи:</strong>
                  </div>
                  <ul className="ml-6 space-y-1 text-sm text-foreground/70">
                    <li>• Пользователь создаёт встречу в Outlook, указывает: название, ссылку на задачу / описание, приглашает заинтересованных лиц</li>
                    <li>• ИИ анализирует: задачу, контекст встречи, похожие реализованные проекты, релевантных заинтересованных лиц</li>
                    <li>• ИИ улучшает описание встречи, расширяет список З.Л., предлагает вопросы для обсуждения</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Video" size={18} className="text-primary" />
                    <strong className="text-foreground">Проведение встречи:</strong>
                  </div>
                  <ul className="ml-6 space-y-1 text-sm text-foreground/70">
                    <li>• Во время встречи (VK Teams / MTS link) — ИИ работает в отдельном окне, анализирует речь участников</li>
                    <li>• В режиме реального времени предлагает наводящие вопросы, уточнения, помогает не упустить ключевые моменты</li>
                    <li>• Заносит ответы в свою базу</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="FileCheck" size={18} className="text-primary" />
                    <strong className="text-foreground">После встречи:</strong>
                  </div>
                  <ul className="ml-6 space-y-1 text-sm text-foreground/70">
                    <li>• ИИ формирует готовый файл в Word — драфт требований или краткий список вопросов и ответов</li>
                    <li>• Может готовить предварительные ответы на вопросы заказчика (например, сроки доработок) — на основе комментариев и полей релизов в задаче</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-accent p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Zap" className="text-accent" size={24} />
                <h3 className="text-xl font-bold text-accent">Ожидаемый эффект</h3>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <Badge className="bg-accent/20 text-accent border-accent/50 px-4 py-2">
                  Автоматизация: 50–60%
                </Badge>
                <Badge className="bg-destructive/20 text-destructive border-destructive/50 px-4 py-2">
                  Экономия: 10–12 ч/мес
                </Badge>
              </div>
              <p className="text-foreground/70 mt-3">
                Снижение контекстных переключений, ускорение анализа требований.
              </p>
            </div>
          </div>
        </Card>

        <Card className="observe-element task-card bg-white border-2 border-primary/30 shadow-lg p-8 mb-8">
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
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Target" className="text-yellow-600" size={24} />
                <h3 className="text-xl font-bold text-yellow-700">Цель</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Полностью освободить БА от рутинных задач — координации, ответов на вопросы, отчётности — чтобы сфокусироваться на содержательной работе.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-destructive p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="AlertCircle" className="text-destructive" size={24} />
                <h3 className="text-xl font-bold text-destructive">Проблема</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                На непроизводственные задачи (<em>координация, встречи, отчётность</em>) тратится{' '}
                <span className="highlight-box font-bold">21.75 ч/мес</span> — значительная часть рабочего времени.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-secondary p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Package" className="text-secondary" size={24} />
                <h3 className="text-xl font-bold text-secondary">Что будет в приложении</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3 mt-4">
                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="FileText" size={16} className="text-primary" />
                    <strong className="text-sm">Генерация БТ</strong>
                  </div>
                  <p className="text-xs text-foreground/70">Основной модуль для написания требований с ИИ-подсказками</p>
                </div>
                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="Users" size={16} className="text-primary" />
                    <strong className="text-sm">Проведение встреч</strong>
                  </div>
                  <p className="text-xs text-foreground/70">Хранение встреч, вопросов, ответов, протоколов ИИ</p>
                </div>
                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="GitBranch" size={16} className="text-primary" />
                    <strong className="text-sm">Схемы AS IS / TO BE</strong>
                  </div>
                  <p className="text-xs text-foreground/70">ИИ помогает генерировать диаграммы на основе описания</p>
                </div>
                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="ListChecks" size={16} className="text-primary" />
                    <strong className="text-sm">Тест-кейсы и User Stories</strong>
                  </div>
                  <p className="text-xs text-foreground/70">Автоматическая генерация по шаблонам</p>
                </div>
                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="Shield" size={16} className="text-primary" />
                    <strong className="text-sm">Проверка БТ</strong>
                  </div>
                  <p className="text-xs text-foreground/70">ИИ проверяет полноту, логику, соответствие шаблонам</p>
                </div>
                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="BarChart3" size={16} className="text-primary" />
                    <strong className="text-sm">Дайджесты и статистика</strong>
                  </div>
                  <p className="text-xs text-foreground/70">Еженедельные подборки, рейтинг БА для мотивации</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Rocket" className="text-purple-600" size={24} />
                <h3 className="text-xl font-bold text-purple-700">Первые шаги</h3>
              </div>
              <ol className="ml-6 space-y-2 text-foreground/80">
                <li>1. Реализовать само приложение (веб-интерфейс или интеграция в Confluence/Outlook)</li>
                <li>2. Запустить раздел «Генерация БТ» как MVP</li>
                <li>3. Добавить раздел «Проведение встреч» — интеграция с Outlook и VK Teams</li>
                <li>4. Постепенно добавлять остальные разделы</li>
              </ol>
            </div>

            <div className="bg-blue-50 border-l-4 border-accent p-5 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Trophy" className="text-accent" size={24} />
                <h3 className="text-xl font-bold text-accent">Ожидаемый эффект</h3>
              </div>
              <div className="flex flex-wrap gap-4 items-center mb-3">
                <Badge className="bg-secondary/20 text-secondary border-secondary/50 px-4 py-2 text-base">
                  Полная автоматизация рутины
                </Badge>
                <Badge className="bg-destructive/20 text-destructive border-destructive/50 px-4 py-2 text-base">
                  Экономия: 20+ ч/мес на БА
                </Badge>
              </div>
              <p className="text-foreground/70">
                Повышение качества и скорости работы.
              </p>
            </div>
          </div>
        </Card>

        <footer className="observe-element text-center py-8 border-t border-border mt-12">
          <p className="text-muted-foreground mb-4 text-lg">
            Готовы оптимизировать работу вашей команды бизнес-аналитиков?
          </p>
          <div className="inline-flex items-center gap-2 text-primary font-bold text-xl">
            <Icon name="Sparkles" size={24} />
            <span>Начните с автоматизации уже сегодня</span>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Index;
