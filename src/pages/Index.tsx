import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const tasks = [
    {
      id: 1,
      emoji: '🚀',
      title: 'Единая AI-платформа документирования и управления требованиями',
      description: 'Сократить трудозатраты на самые объемные процессы: написание спецификаций, анализ требований, создание User Stories и тест-кейсов',
      problem: 'На процессы написания спецификаций, анализ требований, разработку US и тест-кейсов тратится ~42 ч/мес — почти неделя работы',
      timeSpent: '42 ч/мес',
      solutions: [
        'Автоматическая расшифровка и анализ записей встреч',
        'Сквозное генеративное документирование',
        'Автогенерация артефактов валидации',
        'Автоматическая трассировка и глоссарий'
      ],
      effect: 'Повышение автоматизации до 70–80%',
      savings: '25–30 ч/мес',
      color: 'neon-purple'
    },
    {
      id: 2,
      emoji: '🤖',
      title: 'AI-координатор для коммуникаций и административной работы',
      description: 'Освободить БА от рутинных задач, чтобы сфокусироваться на содержательной работе',
      problem: 'Непроизводственные затраты (координация, поиск информации, отчетность) занимают 21.75 ч/мес',
      timeSpent: '21.75 ч/мес',
      solutions: [
        'Чат-бот "BA Assistant"',
        'Умный семантический поиск',
        'Автоматическая отчетность',
        'Ассистент для встреч'
      ],
      effect: 'Повышение автоматизации до 50–60%',
      savings: '10–12 ч/мес',
      color: 'neon-pink'
    },
    {
      id: 3,
      emoji: '🧠',
      title: 'Централизованная AI-модель для анализа бизнес-процессов',
      description: 'Повысить качество и скорость процессов за счет обучения на внутренних данных компании',
      problem: 'Процессы планирования и проектирования требуют креатива, но им не хватает data-driven поддержки',
      timeSpent: '~15 ч/мес',
      solutions: [
        'Knowledge Hub — векторная база всех артефактов',
        'Планировщик и аналитик процессов с BPMN',
        'Валидатор ограничений для регуляторики'
      ],
      effect: 'Повышение автоматизации до 50–60%',
      savings: '5–8 ч/мес',
      color: 'neon-blue'
    }
  ];

  const examples = [
    {
      icon: 'FileText',
      title: 'Автоматизация документации',
      description: 'ИИ генерирует спецификации, User Stories и тест-кейсы на основе записей встреч',
      metric: '70% быстрее'
    },
    {
      icon: 'MessageSquare',
      title: 'Интеллектуальный помощник',
      description: 'Чат-бот отвечает на вопросы команды и находит нужную информацию за секунды',
      metric: '50% меньше вопросов'
    },
    {
      icon: 'GitBranch',
      title: 'Умное планирование',
      description: 'Система предлагает план проекта на основе опыта предыдущих внедрений',
      metric: '60% точнее оценки'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-glow-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-6xl mx-auto text-center animate-fade-in">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/50 px-4 py-2 text-sm font-semibold">
            ИИ для Бизнес-аналитиков
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 gradient-text leading-tight">
            Топ-3 задачи ИИ<br />для оптимизации работы БА
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Автоматизация анализа требований и данных — новая эра эффективности для бизнес-аналитиков
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-left">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6 max-w-xs hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl font-black text-primary mb-2">~40-45</div>
              <div className="text-sm text-muted-foreground">часов экономии в месяц</div>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6 max-w-xs hover:border-secondary/50 transition-all duration-300">
              <div className="text-4xl font-black text-secondary mb-2">70-80%</div>
              <div className="text-sm text-muted-foreground">автоматизация процессов</div>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6 max-w-xs hover:border-accent/50 transition-all duration-300">
              <div className="text-4xl font-black text-accent mb-2">3</div>
              <div className="text-sm text-muted-foreground">ключевых направления</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="relative px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/30 p-8 md:p-12 neon-border animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <Icon name="Lightbulb" className="text-primary flex-shrink-0" size={32} />
              <h2 className="text-3xl font-black text-foreground">Итоговая рекомендация по внедрению</h2>
            </div>
            
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              На основе анализа трудозатрат и потенциала автоматизации, рекомендуется начать с{' '}
              <span className="font-bold text-accent">AI-координатора</span> — он даст быстрый эффект и подготовит почву для масштабирования. 
              Параллельно запускать <span className="font-bold text-primary">Единую AI-платформу</span> как основной драйвер оптимизации. 
              <span className="font-bold text-secondary"> Централизованную AI-модель</span> готовить как стратегический проект.
            </p>

            <div className="flex flex-wrap gap-3">
              <Badge className="bg-primary/20 text-primary border-primary/50 px-4 py-2">
                Экономия ~40-45 ч/мес
              </Badge>
              <Badge className="bg-secondary/20 text-secondary border-secondary/50 px-4 py-2">
                Почти 1 месяц работы в год
              </Badge>
            </div>
          </Card>
        </div>
      </section>

      {/* Tasks Section */}
      <section id="tasks" className="relative px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 gradient-text">
              Три ключевых направления
            </h2>
            <p className="text-xl text-muted-foreground">
              Комплексный подход к автоматизации работы бизнес-аналитика
            </p>
          </div>

          <div className="space-y-8">
            {tasks.map((task, index) => (
              <Card
                key={task.id}
                className="group bg-card/50 backdrop-blur-sm border-border/50 p-8 md:p-10 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="text-6xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {task.emoji}
                  </div>
                  <div className="flex-1">
                    <Badge className={`bg-${task.color}/20 text-${task.color} border-${task.color}/50 mb-4`}>
                      Задача {task.id}
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-black text-foreground mb-3 leading-tight">
                      {task.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4">{task.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="AlertCircle" className="text-destructive" size={20} />
                      <h4 className="font-bold text-destructive">Проблема</h4>
                    </div>
                    <p className="text-foreground/80 text-sm leading-relaxed">{task.problem}</p>
                    <div className="mt-3 text-2xl font-black text-destructive">{task.timeSpent}</div>
                  </div>

                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="CheckCircle" className="text-primary" size={20} />
                      <h4 className="font-bold text-primary">Эффект</h4>
                    </div>
                    <p className="text-foreground/80 text-sm mb-2">{task.effect}</p>
                    <div className="mt-3 text-2xl font-black text-primary">Экономия: {task.savings}</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                    <Icon name="Wrench" size={20} className="text-accent" />
                    Решение
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {task.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-foreground/80">
                        <Icon name="Sparkles" size={16} className="text-accent flex-shrink-0 mt-1" />
                        <span className="text-sm">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="relative px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 gradient-text">
              Примеры применения
            </h2>
            <p className="text-xl text-muted-foreground">
              Реальные сценарии использования ИИ в работе бизнес-аналитика
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {examples.map((example, index) => (
              <Card
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-border/50 p-8 hover:border-primary/50 transition-all duration-500 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={example.icon as any} className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{example.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{example.description}</p>
                <div className="text-2xl font-black text-primary">{example.metric}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 py-12 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            Готовы оптимизировать работу вашей команды бизнес-аналитиков?
          </p>
          <div className="inline-flex items-center gap-2 text-primary font-bold">
            <Icon name="Rocket" size={20} />
            <span>Начните с автоматизации уже сегодня</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
