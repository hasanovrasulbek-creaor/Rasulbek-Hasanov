import { useEffect, useMemo, useState } from 'react';

const translations = {
  uz: {
    navSystems: 'Global Systems', navPlay: 'Play-Based Learning', navActivities: 'Activities', navAcademy: 'Teacher Academy', navTools: 'Toolkit', navVideos: 'Videos', navResources: 'Resources', navContact: 'Contact',
    heroTag: 'EDUHUB • SMART KINDERGARTEN', heroTitle: 'O‘yin orqali <span>o‘rganish.</span><br /> Kattalik orqali emas,<br /> kashfiyot orqali rivojlanish.',
    heroText: 'O‘zbekiston maktabgacha ta’lim pedagoglari uchun Finlandiya, Singapur, Yaponiya va Xitoy tajribalaridan ilhomlangan amaliy metodlar, play-based learning, mashg‘ulotlar, video darslar va o‘qituvchi vositalari.', heroPrimary: 'Tizimlarni o‘rganish →', heroSecondary: 'Faoliyatlar kutubxonasi', whyTitle: 'Nega Smart Kindergarten?', whyLead: 'Nazariyani amaliyotga aylantiradigan, tarbiyachiga “bugun nima qilaman?” degan savolga aniq javob beradigan platforma.', systemsTitle: '4 global yondashuv', systemsLead: 'Tanlangan xalqaro prinsip va amaliyotlardan ilhomlangan modullar.', activitiesTitle: '30+ Play-Based Activities', activitiesLead: 'Yosh, mavzu, vaqt va ko‘nikmaga qarab filtrlang.', academyTitle: 'Teacher Academy', academyLead: 'Har bir modul: WHAT → WHY → HOW → EXAMPLE → CHECKLIST.', toolsTitle: 'Teacher Toolkit', toolsLead: 'Pedagogning kundalik ishini rejalashtirish uchun sodda vositalar.', videosTitle: 'Teacher Video Academy', videosLead: 'Pedagogik mavzular bo‘yicha tanlangan ochiq videolar.', resourcesTitle: 'Practical Resources', contactTitle: 'Contact Smart Kindergarten', contactLead: 'Savollar, hamkorlik va ta’lim loyihalari bo‘yicha bog‘laning.', savePlan: 'Save Plan', resetChecklist: 'Reset checklist'
  },
  ru: {
    navSystems: 'Глобальные системы', navPlay: 'Игровое обучение', navActivities: 'Активности', navAcademy: 'Педагогическая академия', navTools: 'Инструменты', navVideos: 'Видео', navResources: 'Ресурсы', navContact: 'Контакты', heroTag: 'EDUHUB • SMART KINDERGARTEN', heroTitle: 'Учимся через <span>игру.</span><br /> Растём через<br /> исследование.', heroText: 'Практическая платформа для педагогов дошкольного образования Узбекистана, вдохновлённая подходами Финляндии, Сингапура, Японии и Китая.', heroPrimary: 'Изучить подходы →', heroSecondary: 'Библиотека активностей', whyTitle: 'Почему Smart Kindergarten?', whyLead: 'Практическая среда для планирования игры, вопросов, наблюдения и рефлексии.', systemsTitle: '4 глобальных подхода', systemsLead: 'Модули, вдохновлённые международными принципами.', activitiesTitle: '30+ игровых активностей', activitiesLead: 'Фильтрация по возрасту, теме, времени и навыкам.', academyTitle: 'Педагогическая академия', academyLead: 'Каждый модуль: WHAT → WHY → HOW → EXAMPLE → CHECKLIST.', toolsTitle: 'Инструменты педагога', toolsLead: 'Простые инструменты для ежедневного планирования.', videosTitle: 'Видео-академия', videosLead: 'Подборка открытых видео по педагогическим темам.', resourcesTitle: 'Практические ресурсы', contactTitle: 'Связаться с Smart Kindergarten', contactLead: 'Вопросы, сотрудничество и образовательные проекты.', savePlan: 'Сохранить план', resetChecklist: 'Сбросить список'
  },
  en: {
    navSystems: 'Global Systems', navPlay: 'Play-Based Learning', navActivities: 'Activities', navAcademy: 'Teacher Academy', navTools: 'Toolkit', navVideos: 'Videos', navResources: 'Resources', navContact: 'Contact', heroTag: 'EDUHUB • SMART KINDERGARTEN', heroTitle: 'Learn through <span>play.</span><br /> Grow through<br /> discovery.', heroText: 'A practical early-childhood platform for educators in Uzbekistan, inspired by selected approaches from Finland, Singapore, Japan and China.', heroPrimary: 'Explore global systems →', heroSecondary: 'Explore activities', whyTitle: 'Why Smart Kindergarten?', whyLead: 'A practical platform that turns ideas into classroom actions: plan, play, observe, reflect and improve.', systemsTitle: '4 global approaches', systemsLead: 'Inspired modules built from selected international principles.', activitiesTitle: '30+ play-based activities', activitiesLead: 'Filter by age, topic, time, and skill.', academyTitle: 'Teacher Academy', academyLead: 'Each module: WHAT → WHY → HOW → EXAMPLE → CHECKLIST.', toolsTitle: 'Teacher Toolkit', toolsLead: 'Simple daily tools for planning and reflection.', videosTitle: 'Teacher Video Academy', videosLead: 'Curated open videos about early childhood education.', resourcesTitle: 'Practical Resources', contactTitle: 'Contact Smart Kindergarten', contactLead: 'Questions, partnerships, and education projects — get in touch.', savePlan: 'Save plan', resetChecklist: 'Reset checklist'
  }
};

const systems = [
  ['finland', 'Finland', '🇫🇮', 'Play, autonomy, nature, observation, and well-being.', 'Flexible learning corners and outdoor exploration.'],
  ['singapore', 'Singapore', '🇸🇬', 'Purposeful play, guided inquiry, and language-rich learning.', 'Teacher-guided prompts and structured discussion.'],
  ['japan', 'Japan', '🇯🇵', 'Routine, responsibility, cooperation, and community.', 'Shared roles, calm transitions, and group rhythm.'],
  ['china', 'China', '🇨🇳', 'Structure, creativity, practical tasks, and group learning.', 'Hands-on stations and collaborative challenges.']
];

const activities = [
  ['Treasure Hunt', '3-4', 'Language', '10-15', 'Vocabulary', 'Hide familiar objects and let children find, name, and describe them.', 'What did you find? Where could it be?'],
  ['Mini Market', '4-5', 'Math', '15-25', 'Counting', 'Create a pretend shop with price cards; children buy, count, and compare.', 'How many coins do you need?'],
  ['Build a Bridge', '5-6', 'Science', '25-40', 'Problem solving', 'Use blocks, paper, and cups to build a bridge that holds a toy.', 'What makes it stronger?'],
  ['Nature Detective', '4-5', 'Nature', '15-25', 'Observation', 'Find leaves, textures, and colors outdoors using picture clues.', 'What is the same? What is different?'],
  ['Story Theater', '5-6', 'Role Play', '15-25', 'Communication', 'Act out characters and sequence from a short story.', 'What happens next?'],
  ['Color Laboratory', '3-4', 'Science', '10-15', 'Experiment', 'Mix primary colors with droppers and predict the result.', 'What do you think will happen?'],
  ['Water Laboratory', '5-6', 'Science', '25-40', 'Inquiry', 'Test which objects float or sink and record predictions.', 'Why do you think it sank?'],
  ['Emotion Cards', '4-5', 'SEL', '10-15', 'Emotional literacy', 'Name feelings and connect them to everyday situations.', 'When might someone feel this way?'],
  ['Dream House', '5-6', 'Art', '25-40', 'Creativity', 'Design a home with recycled materials and explain its purpose.', 'Who could live there?'],
  ['Music & Movement', '3-4', 'Physical', '10-15', 'Motor skills', 'Match movement to tempo and stop/start cues.', 'Can you move slowly? Quickly?']
];

const videos = [
  ['Play-Based Learning: Why Play Matters', 'Play-Based Learning', 'https://www.youtube.com/results?search_query=play+based+learning+early+childhood+education'],
  ['Guided Play in Early Childhood', 'Teacher Techniques', 'https://www.youtube.com/results?search_query=guided+play+early+childhood'],
  ['Learning Through Play', 'Global Inspiration', 'https://www.youtube.com/results?search_query=learning+through+play+UNICEF'],
  ['Outdoor Learning for Young Children', 'Outdoor Learning', 'https://www.youtube.com/results?search_query=outdoor+learning+early+childhood']
];

const resources = [
  ['Play-Based Learning Guide', 'Lesson design, objectives, materials, questions, and observation.'],
  ['Teacher Observation Guide', 'Simple structures for documenting growth and learning.'],
  ['International Approaches Guide', 'Selected principles adapted for local classrooms.'],
  ['Classroom Management Guide', 'Transitions, routines, and predictable rhythms.'],
  ['Parent Communication Guide', 'A positive way to discuss learning with families.'],
  ['Outdoor Learning Guide', 'Use nature and community space for discovery.']
];

const academy = ['Understanding Play-Based Learning', 'Planning a Play-Based Lesson', 'Teacher as Facilitator', 'Questioning Techniques', 'Observation & Documentation', 'Classroom Management'];

function App() {
  const [language, setLanguage] = useState('uz');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [age, setAge] = useState('');
  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState('');
  const [modal, setModal] = useState(null);
  const [plan, setPlan] = useState({ date: '', age: '', theme: '', objective: '', activity: '', observe: '' });
  const [status, setStatus] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const t = translations[language];

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('eduhubPlan') || 'null');
      if (saved) setPlan(saved);
    } catch { /* ignore malformed local storage */ }
  }, []);

  const filteredActivities = useMemo(() => activities.filter((item) => {
    const query = search.trim().toLowerCase();
    return (!query || item.join(' ').toLowerCase().includes(query)) && (!age || item[1] === age) && (!category || item[2] === category) && (!duration || item[3] === duration);
  }), [search, age, category, duration]);

  const savePlan = () => {
    localStorage.setItem('eduhubPlan', JSON.stringify(plan));
    setStatus('Lesson plan saved successfully.');
    window.setTimeout(() => setStatus(''), 2200);
  };

  const submitContact = (event) => {
    event.preventDefault();
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:info@eduhub.uz?subject=Smart Kindergarten Contact&body=${body}`;
  };

  return (
    <>
      <header className="topbar"><div className="container topbar-inner"><span>EduHub • Smart Kindergarten</span><span>+998 93 448 55 99</span></div></header>
      <nav className="nav"><div className="container nav-inner">
        <a href="#home" className="brand" aria-label="EduHub home"><span className="brand-mark">EH</span><span><strong>EduHub</strong><small>Smart Kindergarten</small></span></a>
        <div className="nav-links"><a href="#systems">{t.navSystems}</a><a href="#play">{t.navPlay}</a><a href="#activities">{t.navActivities}</a><a href="#academy">{t.navAcademy}</a><a href="#tools">{t.navTools}</a><a href="#videos">{t.navVideos}</a><a href="#resources">{t.navResources}</a><a href="#contact">{t.navContact}</a></div>
        <div className="nav-actions"><div className="lang-switcher" aria-label="Language selector">{['uz', 'ru', 'en'].map((item) => <button key={item} type="button" className={item === language ? 'active' : ''} onClick={() => setLanguage(item)}>{item.toUpperCase()}</button>)}</div><button type="button" className="menu-button" aria-label="Toggle menu" onClick={() => setMobileOpen((open) => !open)}>☰</button></div>
      </div>{mobileOpen && <div className="mobile-menu container">{['systems', 'play', 'activities', 'academy', 'tools', 'videos', 'resources', 'contact'].map((id) => <a key={id} href={`#${id}`} onClick={() => setMobileOpen(false)}>{t[`nav${id[0].toUpperCase()}${id.slice(1)}`]}</a>)}</div>}</nav>

      <main id="home">
        <section className="hero section"><div className="container hero-grid"><div className="hero-copy"><span className="eyebrow">{t.heroTag}</span><div className="hero-badges"><span>Playful</span><span>Research-inspired</span><span>Teacher-first</span></div><h1 dangerouslySetInnerHTML={{ __html: t.heroTitle }} /><p>{t.heroText}</p><div className="cta-row"><a href="#systems" className="btn btn-primary">{t.heroPrimary}</a><a href="#activities" className="btn btn-secondary">{t.heroSecondary}</a></div></div><div className="hero-visual"><div className="floating-badge floating-badge-top">Global learning design</div><div className="orb orb-one" /><div className="orb orb-two" /><div className="panel"><div className="panel-label">Smart Classroom</div><h3>Discover • Play • Observe • Reflect</h3><div className="mini-grid"><div className="mini-card"><strong>🎭 Play</strong><span>Role play & storytelling</span></div><div className="mini-card"><strong>🔎 Explore</strong><span>Inquiry & discovery</span></div><div className="mini-card"><strong>🤝 Grow</strong><span>Social & life skills</span></div></div></div></div></div></section>

        <section className="section alt-section"><div className="container"><h2>{t.whyTitle}</h2><p className="section-lead">{t.whyLead}</p><div className="stat-grid">{[['30+', 'play activities'], ['4', 'global approaches'], ['100%', 'teacher-first design'], ['24/7', 'classroom resources']].map(([value, label]) => <div className="stat-card" key={label}><div className="stat-value">{value}</div><div className="stat-label">{label}</div></div>)}</div></div></section>

        <section id="systems" className="section"><div className="container"><h2>{t.systemsTitle}</h2><p className="section-lead">{t.systemsLead}</p><div className="grid-4">{systems.map((item) => <button type="button" className="system-card" key={item[0]} onClick={() => setModal({ type: 'system', item })}><div className="flag">{item[2]}</div><h3>{item[1]}</h3><p>{item[3]}</p><span className="pill">Explore →</span></button>)}</div></div></section>

        <section id="play" className="section alt-section"><div className="container"><h2>Play-Based Learning Academy</h2><p className="section-lead">Play is a structured learning environment where children construct knowledge through action, conversation, and reflection.</p><div className="grid-3">{[['🎯', 'Purposeful Play', 'Define the goal while leaving room for choice and creativity.'], ['🧩', 'Guided Play', 'Shape the environment, ask prompts, and scaffold when needed.'], ['🔭', 'Inquiry & Discovery', 'Use open questions to deepen curiosity and thinking.']].map(([icon, title, text]) => <article className="info-card" key={title}><span className="icon">{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section id="activities" className="section"><div className="container"><h2>{t.activitiesTitle}</h2><p className="section-lead">{t.activitiesLead}</p><div className="filters"><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search activities..." /><select value={age} onChange={(event) => setAge(event.target.value)}><option value="">Age</option><option>3-4</option><option>4-5</option><option>5-6</option></select><select value={category} onChange={(event) => setCategory(event.target.value)}><option value="">Category</option>{['Language', 'Math', 'Science', 'Art', 'Physical', 'SEL', 'Nature', 'Role Play'].map((item) => <option key={item}>{item}</option>)}</select><select value={duration} onChange={(event) => setDuration(event.target.value)}><option value="">Duration</option><option>10-15</option><option>15-25</option><option>25-40</option></select></div><div className="activity-grid">{filteredActivities.length ? filteredActivities.map((item) => <article className="activity-card" key={item[0]}><div className="chip-row"><span className="chip">{item[1]}</span><span className="chip">{item[2]}</span><span className="chip">{item[3]} min</span></div><h3>{item[0]}</h3><p className="small-copy">Skill: {item[4]}</p><p>{item[5]}</p><button type="button" className="btn btn-secondary" onClick={() => setModal({ type: 'activity', item })}>Open activity</button></article>) : <div className="empty-state"><h3>No activities found</h3><p>Try another filter set.</p></div>}</div></div></section>

        <section id="academy" className="section alt-section"><div className="container"><h2>{t.academyTitle}</h2><p className="section-lead">{t.academyLead}</p><div className="grid-3">{academy.map((title, index) => <article className="academy-card" key={title}><span className="module-tag">MODULE {String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>Practical methods, examples, reflection, and classroom-ready guidance.</p></article>)}</div></div></section>

        <section id="tools" className="section"><div className="container"><h2>{t.toolsTitle}</h2><p className="section-lead">{t.toolsLead}</p><div className="tool-layout"><div className="tool-panel"><h3>Daily lesson planner</h3><div className="form-stack">{[['date', 'date'], ['age', 'Age group'], ['theme', 'Theme'], ['objective', 'Learning objective']].map(([name, placeholder]) => <input key={name} name={name} type={name === 'date' ? 'date' : 'text'} value={plan[name]} onChange={(event) => setPlan({ ...plan, [name]: event.target.value })} placeholder={placeholder} />)}<textarea name="activity" value={plan.activity} onChange={(event) => setPlan({ ...plan, activity: event.target.value })} placeholder="Activity and materials" /><textarea name="observe" value={plan.observe} onChange={(event) => setPlan({ ...plan, observe: event.target.value })} placeholder="Observation / reflection" /><button type="button" className="btn btn-primary" onClick={savePlan}>{t.savePlan}</button>{status && <div className="status success">{status}</div>}</div></div><div className="tool-panel checklist-panel"><h3>Observation checklist</h3>{['Language & communication', 'Motor development', 'Social interaction', 'Problem solving', 'Creativity', 'Independence'].map((item) => <label key={item}><input type="checkbox" />{item}</label>)}<button type="button" className="btn btn-secondary" onClick={() => document.querySelectorAll('.checklist-panel input').forEach((input) => { input.checked = false; })}>{t.resetChecklist}</button></div></div></div></section>

        <section id="videos" className="section alt-section"><div className="container"><h2>{t.videosTitle}</h2><p className="section-lead">{t.videosLead}</p><div className="video-grid">{videos.map((video) => <article className="video-card" key={video[0]}><div className="video-visual">▶</div><div className="video-body"><h3>{video[0]}</h3><p>{video[1]}</p><a className="btn btn-secondary" href={video[2]} target="_blank" rel="noreferrer">Watch / Search</a></div></article>)}</div></div></section>

        <section id="resources" className="section"><div className="container"><h2>{t.resourcesTitle}</h2><div className="grid-3">{resources.map(([title, text]) => <article className="resource-card" key={title}><span className="icon">📘</span><h3>{title}</h3><p>{text}</p><button type="button" className="btn btn-secondary" onClick={() => setModal({ type: 'resource', item: [title, text] })}>Read guide</button></article>)}</div></div></section>

        <section id="contact" className="section alt-section"><div className="container contact-layout"><div><h2>{t.contactTitle}</h2><p className="section-lead">{t.contactLead}</p><div className="contact-links"><a className="contact-link" href="tel:+998934485599">📞 +998 93 448 55 99</a><a className="contact-link" href="https://www.instagram.com/h_rasulbek_571/" target="_blank" rel="noreferrer">📷 Instagram</a><a className="contact-link" href="https://t.me/Hasanov_Rasulbek" target="_blank" rel="noreferrer">✈️ Telegram</a></div></div><form className="contact-form" onSubmit={submitContact}><input required name="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Name / Ism" /><input required type="email" name="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="Email" /><textarea required rows="6" name="message" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="Message / Xabar" /><button className="btn btn-primary" type="submit">Prepare message</button></form></div></section>
      </main>

      <footer className="footer"><div className="container footer-grid"><div><div className="brand footer-brand"><span className="brand-mark">EH</span><span><strong>EduHub</strong><small>Smart Kindergarten</small></span></div><p>International inspiration. Local adaptation. Practical learning.</p></div><div><h4>Explore</h4><a href="#systems">Global systems</a><a href="#activities">Activities</a><a href="#videos">Videos</a></div><div><h4>Contact</h4><a href="tel:+998934485599">+998 93 448 55 99</a><a href="https://t.me/Hasanov_Rasulbek">Telegram</a></div></div></footer>

      {modal && <div className="modal-overlay" onClick={() => setModal(null)}><div className="modal-card" onClick={(event) => event.stopPropagation()}><div className="modal-header"><div><span className="module-tag">{modal.type.toUpperCase()}</span><h3>{modal.item[1]}</h3></div><button className="close-button" type="button" onClick={() => setModal(null)}>✕</button></div><div className="modal-body">{modal.type === 'activity' ? <div className="modal-grid"><div><h4>Learning objective</h4><p>{modal.item[5]}</p><h4>Teacher role</h4><p>Observe, ask guiding questions, and support without taking over.</p></div><div><h4>Questions to ask</h4><p>{modal.item[6]}</p><h4>Observation points</h4><ul><li>Communication</li><li>Independence</li><li>Problem solving</li><li>Cooperation</li></ul></div></div> : modal.type === 'system' ? <div className="modal-grid"><div><h4>Key principles</h4><p>{modal.item[3]}</p></div><div><h4>Local adaptation</h4><p>{modal.item[4]}</p></div></div> : <><p>{modal.item[2]}</p><ol><li>Choose one idea.</li><li>Adapt it to your classroom.</li><li>Try, observe, and reflect.</li></ol></>}</div></div></div>}
    </>
  );
}

export default App;
