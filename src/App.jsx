import { useEffect, useMemo, useState } from 'react';

const translations = {
  uz: {
    navSystems: 'Global Systems',
    navPlay: 'Play-Based Learning',
    navActivities: 'Activities',
    navAcademy: 'Teacher Academy',
    navTools: 'Toolkit',
    navVideos: 'Videos',
    navResources: 'Resources',
    navContact: 'Contact',
    heroTag: 'EDUHUB • SMART KINDERGARTEN',
    heroTitle: 'O‘yin orqali <span>o‘rganish.</span><br /> Kattalik orqali emas,<br /> kashfiyot orqali rivojlanish.',
    heroText:
      'O‘zbekiston maktabgacha ta’lim pedagoglari uchun Finlandiya, Singapur, Yaponiya va Xitoy tajribalaridan ilhomlangan amaliy metodlar, play-based learning, mashg‘ulotlar, video darslar va o‘qituvchi vositalari.',
    heroPrimary: 'Tizimlarni o‘rganish →',
    heroSecondary: 'Faoliyatlar kutubxonasi',
    whyTitle: 'Nega Smart Kindergarten?',
    whyLead:
      'Nazariyani amaliyotga aylantiradigan, tarbiyachiga “bugun nima qilaman?” degan savolga aniq javob beradigan platforma.',
    systemsTitle: '4 global yondashuv',
    systemsLead: 'Bu bo‘limlar milliy tizimlarning to‘liq nusxasi emas. Ular tanlangan prinsip va amaliyotlardan ilhomlangan modullar sifatida beriladi.',
    activitiesTitle: '30+ Play-Based Activities',
    activitiesLead:
      'Yosh, mavzu, vaqt va ko‘nikmaga qarab filtrlang. Har bir faoliyatda aniq teacher role, savollar va observation points mavjud.',
    academyTitle: 'Teacher Academy',
    academyLead: 'Har bir modul: WHAT → WHY → HOW → EXAMPLE → CHECKLIST.',
    toolsTitle: 'Teacher Toolkit',
    toolsLead: 'Pedagogning kundalik ishini rejalashtirish va saqlash uchun sodda vositalar.',
    videosTitle: 'Teacher Video Academy',
    videosLead:
      'Video kutubxonasi pedagogik mavzular bo‘yicha saralangan. Sayt og‘ir video fayllarni saqlamaydi; ochiq/public platformalardagi videolarni embed yoki tashqi sahifada ko‘rsatadi.',
    resourcesTitle: 'Practical Resources',
    contactTitle: 'Contact Smart Kindergarten',
    contactLead:
      'Savollar, hamkorlik, pedagoglar bilan ishlash va ta’lim loyihalari bo‘yicha bog‘laning.',
    cta: 'Connect with EduHub',
    savePlan: 'Save Plan',
    resetChecklist: 'Reset checklist',
  },
  ru: {
    navSystems: 'Глобальные системы',
    navPlay: 'Игровое обучение',
    navActivities: 'Активности',
    navAcademy: 'Педагогическая академия',
    navTools: 'Инструменты',
    navVideos: 'Видео',
    navResources: 'Ресурсы',
    navContact: 'Контакты',
    heroTag: 'EDUHUB • SMART KINDERGARTEN',
    heroTitle: 'Учимся через <span>игру.</span><br /> Растём через<br /> исследование.',
    heroText:
      'Практическая платформа для педагогов дошкольного образования Узбекистана, вдохновлённая отдельными подходами Финляндии, Сингапура, Японии и Китая.',
    heroPrimary: 'Изучить подходы →',
    heroSecondary: 'Библиотека активностей',
    whyTitle: 'Почему Smart Kindergarten?',
    whyLead:
      'Практическая среда, которая помогает педагогу планировать игру, задавать вопросы, наблюдать и рефлексировать.',
    systemsTitle: '4 глобальных подхода',
    systemsLead: 'Это не копии национальных систем. Это подборка принципов и практик, адаптированных для вдохновения и применения.',
    activitiesTitle: '30+ игровых активностей',
    activitiesLead:
      'Фильтрация по возрасту, теме, времени и навыкам. В каждой активности есть роль учителя, вопросы и точки наблюдения.',
    academyTitle: 'Педагогическая академия',
    academyLead: 'Каждый модуль: WHAT → WHY → HOW → EXAMPLE → CHECKLIST.',
    toolsTitle: 'Инструменты педагога',
    toolsLead: 'Простые инструменты для планирования и хранения ежедневной работы.',
    videosTitle: 'Видео-академия',
    videosLead:
      'Подборка видеоматериалов по педагогическим темам. Сайт не хранит тяжелые видео-файлы, а направляет на внешние платформы.',
    resourcesTitle: 'Практические ресурсы',
    contactTitle: 'Связаться с Smart Kindergarten',
    contactLead:
      'Вопросы, сотрудничество, работа с педагогами и образовательные проекты — пишите нам.',
    cta: 'Связаться с EduHub',
    savePlan: 'Сохранить план',
    resetChecklist: 'Сбросить список',
  },
  en: {
    navSystems: 'Global Systems',
    navPlay: 'Play-Based Learning',
    navActivities: 'Activities',
    navAcademy: 'Teacher Academy',
    navTools: 'Toolkit',
    navVideos: 'Videos',
    navResources: 'Resources',
    navContact: 'Contact',
    heroTag: 'EDUHUB • SMART KINDERGARTEN',
    heroTitle: 'Learn through <span>play.</span><br /> Grow through<br /> discovery.',
    heroText:
      'A practical early-childhood platform for educators in Uzbekistan, inspired by selected approaches from Finland, Singapore, Japan and China.',
    heroPrimary: 'Explore global systems →',
    heroSecondary: 'Explore activities',
    whyTitle: 'Why Smart Kindergarten?',
    whyLead:
      'A practical platform that turns ideas into classroom actions: plan, play, observe, reflect and improve.',
    systemsTitle: '4 global approaches',
    systemsLead: 'These are not direct copies of national systems. They are inspired modules built from selected principles and practices.',
    activitiesTitle: '30+ play-based activities',
    activitiesLead:
      'Filter by age, topic, time, and skill. Each activity includes teacher role, prompts, and observation points.',
    academyTitle: 'Teacher Academy',
    academyLead: 'Each module: WHAT → WHY → HOW → EXAMPLE → CHECKLIST.',
    toolsTitle: 'Teacher Toolkit',
    toolsLead: 'Simple daily tools designed to help teachers plan, track, and store practice.',
    videosTitle: 'Teacher Video Academy',
    videosLead:
      'A curated collection of teaching videos. This site does not host large video files; it directs users to external platforms.',
    resourcesTitle: 'Practical Resources',
    contactTitle: 'Contact Smart Kindergarten',
    contactLead:
      'Questions, partnerships, teacher work, and education projects — get in touch.',
    cta: 'Connect with EduHub',
    savePlan: 'Save plan',
    resetChecklist: 'Reset checklist',
  },
};

const systems = [
  {
    country: 'finland',
    name: 'Finland',
    flag: '🇫🇮',
    intro: 'Play, autonomy, nature, observation, and well-being-centered learning.',
    key: 'Learning corners, outdoor exploration, calm routines, child agency.',
    adaptation: 'Use natural environments, flexible classroom zones, and observation-based learning.',
  },
  {
    country: 'singapore',
    name: 'Singapore',
    flag: '🇸🇬',
    intro: 'Purposeful play, guided inquiry, language-rich learning, and social-emotional development.',
    key: 'Teacher-guided prompts, structured techniques, and language-rich discussions.',
    adaptation: 'Use teacher questions, guided play structures, and verbal routines.',
  },
  {
    country: 'japan',
    name: 'Japan',
    flag: '🇯🇵',
    intro: 'Routine, responsibility, cooperation, and quiet, purposeful participation.',
    key: 'Clean transitions, community roles, and group rhythm in daily activities.',
    adaptation: 'Introduce routines, shared responsibilities, and group-based classroom tasks.',
  },
  {
    country: 'china',
    name: 'China',
    flag: '🇨🇳',
    intro: 'Structure, creativity, practical tasks, and group learning activities.',
    key: 'Small-group challenges, project work, and hands-on learning stations.',
    adaptation: 'Design activity stations, collaborative tasks, and structured problem solving.',
  },
];

const activities = [
  ['Treasure Hunt', '3-4', 'Language', '10-15', 'Vocabulary', 'Hide 5 familiar objects and let children find, name and describe them.', 'What did you find? Where could it be?'],
  ['Mini Market', '4-5', 'Math', '15-25', 'Counting', 'Create a pretend shop with price cards 1–10; children buy, count and compare.', 'How many coins do you need? Which is more?'],
  ['Build a Bridge', '5-6', 'Science', '25-40', 'Problem solving', 'Use blocks, paper and cups to build a bridge that holds a toy.', 'What makes it stronger?'],
  ['Nature Detective', '4-5', 'Nature', '15-25', 'Observation', 'Give children simple picture clues to find leaves, textures and colors outdoors.', 'What is the same? What is different?'],
  ['Story Theater', '5-6', 'Role Play', '15-25', 'Communication', 'Read a short story and let children act out characters and sequence.', 'What happens next?'],
  ['Color Laboratory', '3-4', 'Science', '10-15', 'Experiment', 'Mix primary colors with water droppers and predict the result.', 'What do you think will happen?'],
  ['Water Laboratory', '5-6', 'Science', '25-40', 'Inquiry', 'Test which objects float or sink and record predictions.', 'Why do you think it sank?'],
  ['Shape Hunt', '3-4', 'Math', '10-15', 'Early math', 'Find circles, squares and triangles around the classroom.', 'Where else can we find this shape?'],
  ['Emotion Cards', '4-5', 'SEL', '10-15', 'Emotional literacy', 'Use faces/cards and invite children to name feelings and situations.', 'When might someone feel this way?'],
  ['Restaurant Role Play', '5-6', 'Role Play', '25-40', 'Life skills', 'Children take turns as customer, chef and server; practice polite language.', 'How can we solve this customer problem?'],
  ['Construction Challenge', '5-6', 'Math', '25-40', 'Problem solving', 'Build the tallest stable tower using a limited number of pieces.', 'What could you change?'],
  ['Gardening Day', '4-5', 'Nature', '25-40', 'Life skills', 'Plant seeds, water them and observe changes across days.', 'What does a plant need?'],
  ['Sorting Game', '3-4', 'Math', '10-15', 'Classification', 'Sort objects by color, shape, size or texture.', 'Can we sort it another way?'],
  ['Counting Shop', '4-5', 'Math', '15-25', 'Counting', 'Use pretend money and objects to practice one-to-one counting.', 'How many are left?'],
  ['Animal Rescue', '4-5', 'SEL', '15-25', 'Empathy', 'Create a pretend rescue station where children care for toy animals.', 'What does the animal need?'],
  ['Memory Path', '3-4', 'Physical', '10-15', 'Working memory', 'Arrange 4 actions in a path and invite children to remember the sequence.', 'What comes after the hoop?'],
  ['Sound Detective', '4-5', 'Science', '10-15', 'Listening', 'Make or record everyday sounds and let children identify sources.', 'What clue helped you?'],
  ['Shadow Investigation', '5-6', 'Science', '25-40', 'Prediction', 'Compare shadows of objects at different times or positions.', 'How did the shadow change?'],
  ['Weather Station', '5-6', 'Nature', '15-25', 'Observation', 'Create a daily weather board with symbols, temperature and simple predictions.', 'What might tomorrow be like?'],
  ['Toy Hospital', '4-5', 'Role Play', '15-25', 'Language', 'Set up a pretend clinic for broken toys; children describe problems and solutions.', 'What is wrong? How can we help?'],
  ['Traffic City', '5-6', 'Life Skills', '25-40', 'Safety', 'Create roads with blocks and practice pedestrian/vehicle roles.', 'What should we do at a crossing?'],
  ['Cooking Without Fire', '4-5', 'Life Skills', '15-25', 'Sequencing', 'Make a simple fruit/yogurt cup and follow picture steps.', 'What comes first?'],
  ['Texture Box', '3-4', 'Sensory', '10-15', 'Sensory exploration', 'Explore hidden objects by touch and describe them before looking.', 'How does it feel?'],
  ['Pattern Hunt', '4-5', 'Math', '15-25', 'Patterns', 'Find and create AB, AAB and ABC patterns with classroom objects.', 'What should come next?'],
  ['Dream House', '5-6', 'Art', '25-40', 'Creativity', 'Design a home with recycled materials and explain its purpose.', 'Who could live there?'],
  ['Recycling Game', '5-6', 'Nature', '15-25', 'Environment', 'Sort pretend waste into paper, plastic, organic and other.', 'Why does this belong here?'],
  ['Team Puzzle', '4-5', 'SEL', '15-25', 'Cooperation', 'Give groups puzzle pieces that require sharing and planning.', 'How can we help each other?'],
  ['Little Scientists', '6-7', 'Science', '25-40', 'Inquiry', 'Choose a simple question, make a prediction, test and draw the result.', 'What evidence did you see?'],
  ['Community Helpers', '5-6', 'Role Play', '25-40', 'Social skills', 'Create mini stations for doctor, firefighter, teacher, baker and builder.', 'How does this person help the community?'],
  ['Music & Movement', '3-4', 'Physical', '10-15', 'Motor skills', 'Children match movement to tempo and stop/start cues.', 'Can you move slowly? Quickly?'],
  ['Story Stones', '4-5', 'Language', '15-25', 'Storytelling', 'Use picture stones to create a beginning, middle and end.', 'What could happen next?'],
];

const videos = [
  ['Play-Based Learning: Why Play Matters', 'Play-Based Learning', 'https://www.youtube.com/results?search_query=play+based+learning+early+childhood+education'],
  ['Guided Play in Early Childhood', 'Teacher Techniques', 'https://www.youtube.com/results?search_query=guided+play+early+childhood'],
  ['Learning Through Play', 'Global Inspiration', 'https://www.youtube.com/results?search_query=learning+through+play+UNICEF'],
  ['Finnish Early Childhood Education', 'Finland', 'https://www.youtube.com/results?search_query=Finnish+early+childhood+education+play'],
  ['Singapore Nurturing Early Learners', 'Singapore', 'https://www.youtube.com/results?search_query=Singapore+Nurturing+Early+Learners+ECDA'],
  ['Japanese Kindergarten Learning', 'Japan', 'https://www.youtube.com/results?search_query=Japan+kindergarten+early+childhood+education'],
  ['Chinese Early Childhood Education', 'China', 'https://www.youtube.com/results?search_query=China+early+childhood+education+kindergarten'],
  ['Open-Ended Questioning for Teachers', 'Teacher Techniques', 'https://www.youtube.com/results?search_query=open+ended+questions+early+childhood+teachers'],
];

const resources = [
  ['Play-Based Learning Guide', 'Lesson design, objectives, materials, questions, and observation for playful classroom experiences.'],
  ['Teacher Observation Guide', 'Simple observation structures for documenting growth, confidence, and learning progression.'],
  ['International Approaches Guide', 'Selected principles from Finland, Singapore, Japan, and China adapted for local classrooms.'],
  ['Classroom Management Guide', 'Transitions, routines, calm signals, predictable rhythms, and collaborative group norms.'],
  ['Parent Communication Guide', 'A practical way to talk about learning, play, and developmental progress with families.'],
  ['Outdoor Learning Guide', 'Use nature, the school yard, and community space to support discovery, movement, and observation.'],
];

const statCards = [
  { value: '30+', label: 'play activities' },
  { value: '4', label: 'global approaches' },
  { value: '100%', label: 'teacher-centered design' },
  { value: '24/7', label: 'classroom resources' },
];

function App() {
  const [language, setLanguage] = useState('uz');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [age, setAge] = useState('');
  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState('');
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState({ type: 'idle', message: '' });
  const [plan, setPlan] = useState({ date: '', age: '', theme: '', objective: '', activity: '', observe: '' });
  const [checklist, setChecklist] = useState({
    language: false,
    motor: false,
    social: false,
    problem: false,
    creativity: false,
    independence: false,
  });

  const t = translations[language];

  useEffect(() => {
    const savedPlan = JSON.parse(localStorage.getItem('eduhubPlan') || '{}');
    if (Object.keys(savedPlan).length) setPlan(savedPlan);
  }, []);

  const filteredActivities = useMemo(() => {
    const q = search.trim().toLowerCase();
    return activities.filter((item) => {
      const allText = item.join(' ').toLowerCase();
      const matchesQuery = !q || allText.includes(q);
      const matchesAge = !age || item[1] === age;
      const matchesCategory = !category || item[2] === category;
      const matchesDuration = !duration || item[3] === duration;
      return matchesQuery && matchesAge && matchesCategory && matchesDuration;
    });
  }, [search, age, category, duration]);

  const savePlan = () => {
    localStorage.setItem('eduhubPlan', JSON.stringify(plan));
    setFormState({ type: 'success', message: 'Lesson plan saved successfully.' });
    setTimeout(() => setFormState({ type: 'idle', message: '' }), 2200);
  };

  const handleInput = (event) => {
    setPlan((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormState({ type: 'error', message: 'Please fill in all fields before sending.' });
      return;
    }

    setFormState({ type: 'loading', message: 'Sending your message...' });

    try {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('message', formData.message);

      const response = await fetch('https://formsubmit.co/ajax/info@eduhub.uz', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setFormState({ type: 'success', message: 'Thanks! Your message was sent successfully.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormState({
        type: 'error',
        message: 'The form is set up for a real email delivery. Replace the placeholder email before deployment.',
      });
    }
  };

  return (
    <>
      <header className="topbar">
        <div className="container topbar-inner">
          <span>EduHub • Smart Kindergarten</span>
          <span>+998 93 448 55 99</span>
        </div>
      </header>

      <nav className="nav">
        <div className="container nav-inner">
          <a href="#home" className="brand" aria-label="EduHub home">
            <span className="brand-mark">EH</span>
            <span>
              <strong>EduHub</strong>
              <small>Smart Kindergarten</small>
            </span>
          </a>

          <div className="nav-links">
            <a href="#systems">{t.navSystems}</a>
            <a href="#play">{t.navPlay}</a>
            <a href="#activities">{t.navActivities}</a>
            <a href="#academy">{t.navAcademy}</a>
            <a href="#tools">{t.navTools}</a>
            <a href="#videos">{t.navVideos}</a>
            <a href="#resources">{t.navResources}</a>
            <a href="#contact">{t.navContact}</a>
          </div>

          <div className="nav-actions">
            <div className="lang-switcher" aria-label="Language selector">
              {['uz', 'ru', 'en'].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={item === language ? 'active' : ''}
                  onClick={() => setLanguage(item)}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="menu-button"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((open) => !open)}
            >
              ☰
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="mobile-menu container">
            <a href="#systems" onClick={() => setMobileOpen(false)}>{t.navSystems}</a>
            <a href="#play" onClick={() => setMobileOpen(false)}>{t.navPlay}</a>
            <a href="#activities" onClick={() => setMobileOpen(false)}>{t.navActivities}</a>
            <a href="#academy" onClick={() => setMobileOpen(false)}>{t.navAcademy}</a>
            <a href="#tools" onClick={() => setMobileOpen(false)}>{t.navTools}</a>
            <a href="#videos" onClick={() => setMobileOpen(false)}>{t.navVideos}</a>
            <a href="#resources" onClick={() => setMobileOpen(false)}>{t.navResources}</a>
            <a href="#contact" onClick={() => setMobileOpen(false)}>{t.navContact}</a>
          </div>
        )}
      </nav>

      <main id="home">
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">{t.heroTag}</span>
              <h1 dangerouslySetInnerHTML={{ __html: t.heroTitle }} />
              <p>{t.heroText}</p>
              <div className="cta-row">
                <a href="#systems" className="btn btn-primary">{t.heroPrimary}</a>
                <a href="#activities" className="btn btn-secondary">{t.heroSecondary}</a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Education overview visual">
              <div className="orb orb-one" />
              <div className="orb orb-two" />
              <div className="panel">
                <div className="panel-label">Smart Classroom</div>
                <h3>Discover • Play • Observe • Reflect</h3>
                <div className="mini-grid">
                  <div className="mini-card">
                    <strong>🎭 Play</strong>
                    <span>Role play & storytelling</span>
                  </div>
                  <div className="mini-card">
                    <strong>🔎 Explore</strong>
                    <span>Inquiry & discovery</span>
                  </div>
                  <div className="mini-card">
                    <strong>🤝 Grow</strong>
                    <span>Social & life skills</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section alt-section">
          <div className="container">
            <h2>{t.whyTitle}</h2>
            <p className="section-lead">{t.whyLead}</p>
            <div className="stat-grid">
              {statCards.map((item) => (
                <div className="stat-card" key={item.label}>
                  <div className="stat-value">{item.value}</div>
                  <div className="stat-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="systems" className="section">
          <div className="container">
            <h2>{t.systemsTitle}</h2>
            <p className="section-lead">{t.systemsLead}</p>
            <div className="grid-4">
              {systems.map((item) => (
                <button
                  key={item.country}
                  type="button"
                  className="system-card"
                  onClick={() => setSelectedActivity({ type: 'system', system: item })}
                >
                  <div className="flag">{item.flag}</div>
                  <h3>{item.name}</h3>
                  <p>{item.intro}</p>
                  <span className="pill">Explore →</span>
                </button>
              ))}
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Approach</th>
                    <th>Teacher role</th>
                    <th>Environment</th>
                    <th>Play / exploration</th>
                    <th>Uzbekistan adaptation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Finland</td>
                    <td>Observer, facilitator</td>
                    <td>Flexible, nature-friendly</td>
                    <td>High autonomy, exploration</td>
                    <td>Nature walks, learning corners, observation</td>
                  </tr>
                  <tr>
                    <td>Singapore</td>
                    <td>Purposeful guide</td>
                    <td>Structured, language-rich</td>
                    <td>Guided inquiry & purposeful play</td>
                    <td>Language stations, guided play, prompt-based learning</td>
                  </tr>
                  <tr>
                    <td>Japan</td>
                    <td>Model, coach, facilitator</td>
                    <td>Routine & community-oriented</td>
                    <td>Group play and everyday learning</td>
                    <td>Roles, routines, daily responsibility, teamwork</td>
                  </tr>
                  <tr>
                    <td>China</td>
                    <td>Structured facilitator</td>
                    <td>Organized group setting</td>
                    <td>Hands-on, group and creative tasks</td>
                    <td>Activity stations, collaborative tasks, projects</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="play" className="section alt-section">
          <div className="container">
            <h2>Play-Based Learning Academy</h2>
            <p className="section-lead">Play is not a break. It is a structured learning environment where children construct knowledge through action, conversation, and reflection.</p>
            <div className="grid-3">
              <article className="info-card">
                <span className="icon">🎯</span>
                <h3>Purposeful Play</h3>
                <p>The teacher defines the goal, while still leaving room for choice, creativity, and child-led exploration.</p>
              </article>
              <article className="info-card">
                <span className="icon">🧩</span>
                <h3>Guided Play</h3>
                <p>Teachers shape the environment, ask prompts, and scaffold with support only when needed.</p>
              </article>
              <article className="info-card">
                <span className="icon">🔭</span>
                <h3>Inquiry & Discovery</h3>
                <p>Curiosity is encouraged through questions such as “What happens next?” and “Why do you think that?”</p>
              </article>
            </div>
          </div>
        </section>

        <section id="activities" className="section">
          <div className="container">
            <h2>{t.activitiesTitle}</h2>
            <p className="section-lead">{t.activitiesLead}</p>

            <div className="filters">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search activities..."
              />
              <select value={age} onChange={(e) => setAge(e.target.value)}>
                <option value="">Age</option>
                <option value="3-4">3-4</option>
                <option value="4-5">4-5</option>
                <option value="5-6">5-6</option>
                <option value="6-7">6-7</option>
              </select>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Category</option>
                <option value="Language">Language</option>
                <option value="Math">Math</option>
                <option value="Science">Science</option>
                <option value="Art">Art</option>
                <option value="Physical">Physical</option>
                <option value="SEL">SEL</option>
                <option value="Nature">Nature</option>
                <option value="Life Skills">Life Skills</option>
                <option value="Role Play">Role Play</option>
                <option value="Sensory">Sensory</option>
              </select>
              <select value={duration} onChange={(e) => setDuration(e.target.value)}>
                <option value="">Duration</option>
                <option value="10-15">10-15</option>
                <option value="15-25">15-25</option>
                <option value="25-40">25-40</option>
              </select>
            </div>

            <div className="activity-grid">
              {filteredActivities.length ? (
                filteredActivities.map((item, index) => (
                  <article key={`${item[0]}-${index}`} className="activity-card">
                    <div className="chip-row">
                      <span className="chip">{item[1]}</span>
                      <span className="chip">{item[2]}</span>
                      <span className="chip">{item[3]} min</span>
                    </div>
                    <h3>{item[0]}</h3>
                    <p className="small-copy">Skill: {item[4]}</p>
                    <p>{item[5]}</p>
                    <button type="button" className="btn btn-secondary" onClick={() => setSelectedActivity({ type: 'activity', activity: item })}>
                      Open activity
                    </button>
                  </article>
                ))
              ) : (
                <div className="empty-state">
                  <h3>No activities found</h3>
                  <p>Try another filter set.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="academy" className="section alt-section">
          <div className="container">
            <h2>{t.academyTitle}</h2>
            <p className="section-lead">{t.academyLead}</p>
            <div className="grid-3">
              <article className="academy-card">
                <span className="module-tag">MODULE 01</span>
                <h3>Understanding Play-Based Learning</h3>
                <p>Learn the difference between free play, guided play, and purposeful play.</p>
              </article>
              <article className="academy-card">
                <span className="module-tag">MODULE 02</span>
                <h3>Planning a Play-Based Lesson</h3>
                <p>Set objectives, materials, classroom setup, questions, and reflection points.</p>
              </article>
              <article className="academy-card">
                <span className="module-tag">MODULE 03</span>
                <h3>Teacher as Facilitator</h3>
                <p>Support children without taking over the learning process or solving everything too early.</p>
              </article>
              <article className="academy-card">
                <span className="module-tag">MODULE 04</span>
                <h3>Questioning Techniques</h3>
                <p>Use open-ended, exploratory, and reflective prompts to deepen thinking.</p>
              </article>
              <article className="academy-card">
                <span className="module-tag">MODULE 05</span>
                <h3>Observation & Documentation</h3>
                <p>Turn classroom moments into notes, evidence, and future planning choices.</p>
              </article>
              <article className="academy-card">
                <span className="module-tag">MODULE 06</span>
                <h3>Classroom Management</h3>
                <p>Create smoother transitions, calm routines, and predictable rhythms for young learners.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="tools" className="section">
          <div className="container">
            <h2>{t.toolsTitle}</h2>
            <p className="section-lead">{t.toolsLead}</p>
            <div className="tool-layout">
              <div className="tool-panel planner-panel">
                <h3>Daily lesson planner</h3>
                <div className="form-stack">
                  <input type="date" name="date" value={plan.date} onChange={handleInput} />
                  <input type="text" name="age" value={plan.age} onChange={handleInput} placeholder="Age group" />
                  <input type="text" name="theme" value={plan.theme} onChange={handleInput} placeholder="Theme" />
                  <input type="text" name="objective" value={plan.objective} onChange={handleInput} placeholder="Learning objective" />
                  <textarea name="activity" rows="4" value={plan.activity} onChange={handleInput} placeholder="Activity and materials" />
                  <textarea name="observe" rows="4" value={plan.observe} onChange={handleInput} placeholder="Observation / reflection" />
                  <button type="button" className="btn btn-primary" onClick={savePlan}>{t.savePlan}</button>
                  {formState.message && <div className={`status ${formState.type}`}>{formState.message}</div>}
                </div>
              </div>

              <div className="tool-panel checklist-panel">
                <h3>Observation checklist</h3>
                <label>
                  <input type="checkbox" checked={checklist.language} onChange={() => setChecklist((current) => ({ ...current, language: !current.language }))} />
                  Language & communication
                </label>
                <label>
                  <input type="checkbox" checked={checklist.motor} onChange={() => setChecklist((current) => ({ ...current, motor: !current.motor }))} />
                  Motor development
                </label>
                <label>
                  <input type="checkbox" checked={checklist.social} onChange={() => setChecklist((current) => ({ ...current, social: !current.social }))} />
                  Social interaction
                </label>
                <label>
                  <input type="checkbox" checked={checklist.problem} onChange={() => setChecklist((current) => ({ ...current, problem: !current.problem }))} />
                  Problem solving
                </label>
                <label>
                  <input type="checkbox" checked={checklist.creativity} onChange={() => setChecklist((current) => ({ ...current, creativity: !current.creativity }))} />
                  Creativity
                </label>
                <label>
                  <input type="checkbox" checked={checklist.independence} onChange={() => setChecklist((current) => ({ ...current, independence: !current.independence }))} />
                  Independence
                </label>
                <button type="button" className="btn btn-secondary" onClick={() => setChecklist({ language: false, motor: false, social: false, problem: false, creativity: false, independence: false })}>
                  {t.resetChecklist}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="videos" className="section alt-section">
          <div className="container">
            <h2>{t.videosTitle}</h2>
            <p className="section-lead">{t.videosLead}</p>
            <div className="video-grid">
              {videos.map((video) => (
                <article className="video-card" key={video[0]}>
                  <div className="video-visual">
                    <span>▶</span>
                  </div>
                  <div className="video-body">
                    <h3>{video[0]}</h3>
                    <p>{video[1]}</p>
                    <a href={video[2]} target="_blank" rel="noreferrer" className="btn btn-secondary">Watch / Search</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="resources" className="section">
          <div className="container">
            <h2>{t.resourcesTitle}</h2>
            <div className="grid-3">
              {resources.map((item) => (
                <article className="resource-card" key={item[0]}>
                  <span className="icon">📘</span>
                  <h3>{item[0]}</h3>
                  <p>{item[1]}</p>
                  <button type="button" className="btn btn-secondary" onClick={() => setSelectedActivity({ type: 'resource', resource: item[0] })}>
                    Read guide
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section alt-section">
          <div className="container contact-layout">
            <div>
              <h2>{t.contactTitle}</h2>
              <p className="section-lead">{t.contactLead}</p>
              <div className="contact-links">
                <a href="tel:+998934485599" className="contact-link">📞 +998 93 448 55 99</a>
                <a href="https://www.instagram.com/h_rasulbek_571/" target="_blank" rel="noreferrer" className="contact-link">📷 Instagram</a>
                <a href="https://t.me/Hasanov_Rasulbek" target="_blank" rel="noreferrer" className="contact-link">✈️ Telegram</a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" name="name" value={formData.name} onChange={handleFormChange} placeholder="Name / Ism" />
              <input type="email" name="email" value={formData.email} onChange={handleFormChange} placeholder="Email" />
              <textarea rows="6" name="message" value={formData.message} onChange={handleFormChange} placeholder="Message / Xabar" />
              <button type="submit" className="btn btn-primary">Prepare message</button>
              {formState.message && <div className={`status ${formState.type}`}>{formState.message}</div>}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="brand footer-brand">
              <span className="brand-mark">EH</span>
              <span>
                <strong>EduHub</strong>
                <small>Smart Kindergarten</small>
              </span>
            </div>
            <p>International inspiration. Local adaptation. Practical learning.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <a href="#systems">Global systems</a>
            <a href="#activities">Activities</a>
            <a href="#videos">Videos</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="tel:+998934485599">+998 93 448 55 99</a>
            <a href="https://www.instagram.com/h_rasulbek_571/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://t.me/Hasanov_Rasulbek" target="_blank" rel="noreferrer">Telegram</a>
          </div>
        </div>
      </footer>

      {selectedActivity && (
        <div className="modal-overlay" onClick={() => setSelectedActivity(null)}>
          <div className="modal-card" onClick={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="module-tag">
                  {selectedActivity.type === 'activity' ? 'ACTIVITY' : selectedActivity.type === 'system' ? 'GLOBAL APPROACH' : 'RESOURCE'}
                </span>
                <h3>
                  {selectedActivity.type === 'activity'
                    ? selectedActivity.activity[0]
                    : selectedActivity.type === 'system'
                      ? selectedActivity.system.name
                      : selectedActivity.resource}
                </h3>
              </div>
              <button type="button" className="close-button" onClick={() => setSelectedActivity(null)}>✕</button>
            </div>

            {selectedActivity.type === 'activity' && (
              <div className="modal-body">
                <div className="modal-grid">
                  <div>
                    <h4>Learning objective</h4>
                    <p>{selectedActivity.activity[5]}</p>
                    <h4>Teacher role</h4>
                    <p>Observe closely, ask guiding questions, and support without taking over the play process.</p>
                  </div>
                  <div>
                    <h4>Questions to ask</h4>
                    <p>{selectedActivity.activity[6]}</p>
                    <h4>Observation points</h4>
                    <ul>
                      <li>Communication</li>
                      <li>Problem solving</li>
                      <li>Independence</li>
                      <li>Cooperation</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {selectedActivity.type === 'system' && (
              <div className="modal-body">
                <div className="modal-grid">
                  <div>
                    <h4>Key principles</h4>
                    <p>{selectedActivity.system.key}</p>
                    <h4>Adaptation idea</h4>
                    <p>{selectedActivity.system.adaptation}</p>
                  </div>
                  <div>
                    <h4>Why it matters</h4>
                    <p>This approach supports autonomy, inquiry, social learning, and teacher observation without rigid control.</p>
                  </div>
                </div>
              </div>
            )}

            {selectedActivity.type === 'resource' && (
              <div className="modal-body">
                <p>This guide is intentionally practical and concise. Use it as a support tool for classroom planning, child observation, and reflective teaching.</p>
                <ol>
                  <li>Choose one idea.</li>
                  <li>Adapt it to your learning environment.</li>
                  <li>Try it with children.</li>
                  <li>Observe and document what happened.</li>
                  <li>Improve the next session.</li>
                </ol>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
