const STORAGE_KEY = 'smartquest_ph_state_v1';

const QUESTIONS = {
  science: [
    q('Which is an example of a solid?', ['Milk', 'Air', 'Stone', 'Steam'], 2, 'A solid has a fixed shape and volume. A stone keeps its shape unless force changes it.', 'Matter'),
    q('What happens to ice when heated?', ['It melts into water', 'It becomes soil', 'It disappears forever', 'It turns into wood'], 0, 'Heating ice adds energy, so it changes from solid ice to liquid water.', 'Matter'),
    q('Which material is best for making a raincoat?', ['Paper', 'Cotton', 'Plastic', 'Bread'], 2, 'Plastic is water-resistant, so it helps keep rain from passing through.', 'Materials'),
    q('Which sense organ helps us hear sounds?', ['Eyes', 'Ears', 'Nose', 'Skin'], 1, 'The ears receive sound vibrations and send signals to the brain.', 'Human Body'),
    q('Why do we need food?', ['To make shadows', 'To get energy and nutrients', 'To stop gravity', 'To make air'], 1, 'Food gives the body energy and nutrients needed for growth and repair.', 'Human Body'),
    q('Which body part pumps blood around the body?', ['Lungs', 'Heart', 'Stomach', 'Teeth'], 1, 'The heart is a muscle that pumps blood through blood vessels.', 'Human Body'),
    q('What do plants need to make their own food?', ['Sunlight, water, air', 'Sand only', 'Plastic only', 'Darkness only'], 0, 'Plants use sunlight, water, and carbon dioxide from air to make food.', 'Plants'),
    q('Which part of a plant absorbs water from soil?', ['Flower', 'Fruit', 'Roots', 'Leaf'], 2, 'Roots anchor the plant and absorb water and minerals from the soil.', 'Plants'),
    q('What is the main job of leaves?', ['Absorb shoes', 'Make food for the plant', 'Make rocks', 'Carry babies'], 1, 'Leaves contain chlorophyll and help plants make food through photosynthesis.', 'Plants'),
    q('Which animal is a vertebrate?', ['Worm', 'Snail', 'Dog', 'Jellyfish'], 2, 'Vertebrates have backbones. A dog has a backbone.', 'Animals'),
    q('Which animal group has feathers?', ['Fish', 'Birds', 'Reptiles', 'Amphibians'], 1, 'Birds are the animal group with feathers.', 'Animals'),
    q('Which animal changes from tadpole to adult?', ['Frog', 'Cat', 'Chicken', 'Goat'], 0, 'A frog begins life as a tadpole and later develops legs and lungs.', 'Life Cycles'),
    q('What is a habitat?', ['A place where living things live', 'A type of notebook', 'A kind of weather', 'A machine'], 0, 'A habitat gives living things food, water, shelter, and space.', 'Ecosystems'),
    q('What do we call animals that eat only plants?', ['Carnivores', 'Herbivores', 'Omnivores', 'Decomposers'], 1, 'Herbivores eat plants. Examples include cows and goats.', 'Ecosystems'),
    q('What is the role of decomposers?', ['Break down dead plants and animals', 'Make sunlight', 'Stop rain', 'Eat only metal'], 0, 'Decomposers return nutrients to the soil by breaking down dead matter.', 'Ecosystems'),
    q('Which is a renewable natural resource?', ['Sunlight', 'Coal', 'Plastic', 'Gasoline'], 0, 'Sunlight is renewed naturally every day, unlike coal and gasoline.', 'Environment'),
    q('Which action helps protect the environment?', ['Throwing trash in rivers', 'Recycling paper', 'Burning plastic', 'Cutting all trees'], 1, 'Recycling reduces waste and helps save resources.', 'Environment'),
    q('What causes day and night?', ['Earth rotating on its axis', 'Clouds moving fast', 'The Moon changing color', 'Rain falling'], 0, 'Earth rotates. The side facing the Sun has day; the side away has night.', 'Earth and Space'),
    q('Which is the closest star to Earth?', ['Moon', 'Sun', 'Mars', 'Jupiter'], 1, 'The Sun is a star and is the closest star to Earth.', 'Earth and Space'),
    q('Why does the Moon appear to change shape?', ['Its lit part seen from Earth changes', 'It melts every night', 'It becomes a planet', 'It loses rocks daily'], 0, 'Moon phases happen because we see different amounts of its sunlit half.', 'Earth and Space'),
    q('What tool measures temperature?', ['Thermometer', 'Ruler', 'Compass', 'Weighing scale'], 0, 'A thermometer measures how hot or cold something is.', 'Weather'),
    q('Which instrument shows wind direction?', ['Wind vane', 'Thermometer', 'Microscope', 'Magnet'], 0, 'A wind vane points to show the direction from which the wind blows.', 'Weather'),
    q('What type of weather has strong winds and heavy rain?', ['Sunny day', 'Typhoon', 'Fog only', 'Rainbow'], 1, 'A typhoon can bring strong winds, heavy rain, and flooding.', 'Weather'),
    q('What should you do during lightning?', ['Stand under a tall tree', 'Stay indoors if possible', 'Swim in the sea', 'Hold metal rods'], 1, 'Staying indoors lowers the risk of being struck by lightning.', 'Safety'),
    q('Which is a source of light?', ['Candle flame', 'Mirror', 'Window', 'Book'], 0, 'A candle flame produces light. A mirror only reflects light.', 'Light'),
    q('What happens when light hits a mirror?', ['It reflects', 'It turns into food', 'It becomes a sound', 'It freezes'], 0, 'Mirrors have smooth surfaces that reflect light clearly.', 'Light'),
    q('What is sound made by?', ['Vibrations', 'Stillness', 'Shadows', 'Smell'], 0, 'Sound is produced when objects vibrate.', 'Sound'),
    q('Why can we see our shadow?', ['Light is blocked by our body', 'Air becomes heavy', 'Water evaporates', 'Sound reflects'], 0, 'A shadow forms when an object blocks light.', 'Light'),
    q('What force pulls objects toward Earth?', ['Magnetism', 'Gravity', 'Friction', 'Heat'], 1, 'Gravity is the force that pulls objects toward Earth.', 'Forces'),
    q('Which surface creates more friction?', ['Smooth glass', 'Wet ice', 'Rough concrete', 'Still air'], 2, 'Rough surfaces usually create more friction than smooth surfaces.', 'Forces'),
    q('What can a magnet attract?', ['Iron nail', 'Wooden pencil', 'Plastic spoon', 'Paper cup'], 0, 'Magnets attract some metals, especially iron and steel.', 'Magnetism'),
    q('What is evaporation?', ['Liquid changing to gas', 'Gas changing to liquid', 'Solid changing to liquid', 'Rock changing to soil'], 0, 'Evaporation happens when liquid water changes into water vapor.', 'Water Cycle'),
    q('What is condensation?', ['Water vapor changing into liquid', 'Ice changing to water', 'Soil becoming rock', 'Air becoming fire'], 0, 'Condensation forms water droplets from water vapor, like clouds or dew.', 'Water Cycle'),
    q('Where does rain come from?', ['Clouds', 'Rocks', 'Batteries', 'Plastic bags'], 0, 'Rain falls from clouds when water droplets become heavy enough.', 'Water Cycle'),
    q('Which is a mixture?', ['Salt and water', 'Pure gold', 'One clean ice cube', 'Oxygen only'], 0, 'A mixture is made when two or more substances are combined.', 'Matter'),
    q('Which change is reversible?', ['Melting ice', 'Burning paper', 'Cooking egg', 'Rusting nail'], 0, 'Melted ice can freeze again, so the change can be reversed.', 'Matter'),
    q('What should be done before eating?', ['Wash hands', 'Touch garbage', 'Skip water', 'Play with insects'], 0, 'Washing hands helps remove germs that can cause sickness.', 'Health'),
    q('Which food group helps build muscles?', ['Protein foods', 'Candy only', 'Soft drinks', 'Chips only'], 0, 'Protein foods such as fish, eggs, beans, and meat help build and repair body tissues.', 'Health'),
    q('Why is exercise important?', ['It strengthens the body', 'It removes the need for sleep', 'It stops all rain', 'It makes bones disappear'], 0, 'Exercise helps keep the heart, muscles, and bones strong.', 'Health'),
    q('Which is a safe way to cross the road?', ['Look left and right first', 'Run without looking', 'Close your eyes', 'Play on the road'], 0, 'Looking both ways helps you check for moving vehicles before crossing.', 'Safety'),
    q('What is an ecosystem?', ['Living things and nonliving things interacting', 'Only one animal', 'Only sunlight', 'A toy collection'], 0, 'An ecosystem includes living things and nonliving parts like water, soil, and air.', 'Ecosystems'),
    q('In a food chain, what usually starts the chain?', ['Plants', 'Lions', 'Plastic', 'Rocks'], 0, 'Plants are producers because they make their own food using sunlight.', 'Ecosystems'),
    q('What happens if too many trees are cut?', ['Habitats may be destroyed', 'Animals get more homes', 'Rain stops forever', 'Soil becomes candy'], 0, 'Cutting too many trees can destroy habitats and cause erosion.', 'Environment'),
    q('Which part of the body helps us breathe?', ['Lungs', 'Hair', 'Fingernails', 'Bones only'], 0, 'The lungs take in oxygen and remove carbon dioxide.', 'Human Body'),
    q('Which is a nonliving thing?', ['Rock', 'Dog', 'Grass', 'Mango tree'], 0, 'A rock does not grow, need food, or reproduce, so it is nonliving.', 'Living Things'),
    q('Which living thing can make its own food?', ['Plant', 'Dog', 'Bird', 'Fish'], 0, 'Most plants make their own food using sunlight.', 'Living Things'),
    q('What is soil made of?', ['Tiny rocks, minerals, decayed matter, air, and water', 'Only sugar', 'Only plastic', 'Only metal'], 0, 'Soil is a mixture of tiny rock particles, organic matter, air, and water.', 'Earth'),
    q('Why should we conserve water?', ['Clean water is limited and important', 'Water is useless', 'Water cannot help plants', 'Water makes no difference'], 0, 'People, animals, and plants need clean water, so we should use it wisely.', 'Environment'),
    q('Which is a simple machine?', ['Lever', 'Cloud', 'Rainbow', 'Smoke'], 0, 'A lever is a simple machine that helps move or lift things.', 'Simple Machines'),
    q('What does a pulley help do?', ['Lift loads more easily', 'Make food', 'Create shadows', 'Remove gravity'], 0, 'A pulley can change the direction of force and help lift objects.', 'Simple Machines')
  ],
  math: [
    q('What is 8 × 7?', ['54', '56', '64', '72'], 1, '8 groups of 7 make 56.', 'Multiplication'),
    q('What is 72 ÷ 9?', ['6', '7', '8', '9'], 2, '72 divided into groups of 9 gives 8 groups.', 'Division'),
    q('Which fraction is equal to 1/2?', ['2/4', '1/3', '3/5', '4/5'], 0, '2/4 simplifies to 1/2 because both numerator and denominator divide by 2.', 'Fractions'),
    q('What is 345 + 128?', ['463', '473', '483', '493'], 1, '345 + 128 = 473.', 'Addition'),
    q('What is the perimeter of a square with side 5 cm?', ['10 cm', '15 cm', '20 cm', '25 cm'], 2, 'A square has 4 equal sides. 5 × 4 = 20 cm.', 'Geometry'),
    q('How many centimeters are in 1 meter?', ['10', '50', '100', '1000'], 2, '1 meter is equal to 100 centimeters.', 'Measurement'),
    q('What is 1,000 - 375?', ['625', '635', '725', '825'], 0, '1,000 minus 375 is 625.', 'Subtraction'),
    q('Which number is rounded to 400?', ['349', '351', '449', '501'], 1, '351 rounds to 400 to the nearest hundred.', 'Rounding'),
    q('What is 25% of 100?', ['10', '20', '25', '50'], 2, '25% means 25 out of 100.', 'Percent'),
    q('Which angle is less than 90 degrees?', ['Right angle', 'Obtuse angle', 'Acute angle', 'Straight angle'], 2, 'An acute angle is smaller than 90 degrees.', 'Geometry'),
    q('What is 6 × 12?', ['60', '66', '72', '82'], 2, '6 times 12 equals 72.', 'Multiplication'),
    q('What is the next number: 5, 10, 15, 20, __?', ['22', '23', '24', '25'], 3, 'The pattern adds 5 each time.', 'Patterns'),
    q('Which is the greatest number?', ['0.5', '0.05', '0.55', '0.15'], 2, '0.55 is greater than the other decimal numbers.', 'Decimals'),
    q('How many sides does a hexagon have?', ['5', '6', '7', '8'], 1, 'A hexagon has 6 sides.', 'Geometry'),
    q('What is 3/4 of 20?', ['10', '12', '15', '18'], 2, 'One fourth of 20 is 5, so three fourths is 15.', 'Fractions'),
    q('What time is 30 minutes after 2:15?', ['2:30', '2:45', '3:00', '3:15'], 1, 'Adding 30 minutes to 2:15 gives 2:45.', 'Time'),
    q('Which is an even number?', ['17', '21', '28', '33'], 2, '28 is divisible by 2, so it is even.', 'Numbers'),
    q('What is 9 × 9?', ['72', '81', '90', '99'], 1, '9 times 9 equals 81.', 'Multiplication'),
    q('How many grams are in 1 kilogram?', ['10', '100', '500', '1000'], 3, '1 kilogram equals 1000 grams.', 'Measurement'),
    q('What is 144 ÷ 12?', ['10', '11', '12', '13'], 2, '12 times 12 equals 144, so 144 ÷ 12 = 12.', 'Division')
  ],
  english: [
    q('Which word is an adjective?', ['Run', 'Beautiful', 'Quickly', 'Under'], 1, 'An adjective describes a noun. Beautiful describes what something is like.', 'Adjectives'),
    q('Which sentence uses an adverb?', ['The dog is brown.', 'She sings loudly.', 'That is my bag.', 'The sky is blue.'], 1, 'Loudly describes how she sings, so it is an adverb.', 'Adverbs'),
    q('Choose the correct plural of child.', ['Childs', 'Children', 'Childes', 'Childrens'], 1, 'The plural of child is children.', 'Nouns'),
    q('Which is a complete sentence?', ['Because it rained.', 'The boy runs home.', 'Under the table.', 'Very happy today.'], 1, 'A complete sentence has a subject and predicate.', 'Sentences'),
    q('Which punctuation ends a question?', ['Period', 'Comma', 'Question mark', 'Apostrophe'], 2, 'A question mark is used after a direct question.', 'Punctuation'),
    q('Which word is a verb?', ['Jump', 'Blue', 'Soft', 'Chair'], 0, 'Jump is an action word, so it is a verb.', 'Verbs'),
    q('Choose the antonym of hot.', ['Warm', 'Cold', 'Heat', 'Fire'], 1, 'Cold means the opposite of hot.', 'Vocabulary'),
    q('Choose the synonym of happy.', ['Sad', 'Glad', 'Angry', 'Tired'], 1, 'Glad means almost the same as happy.', 'Vocabulary'),
    q('Which is a proper noun?', ['city', 'school', 'Davao City', 'book'], 2, 'Davao City is a specific place, so it is a proper noun.', 'Nouns'),
    q('What is the past tense of go?', ['Goed', 'Went', 'Going', 'Gone'], 1, 'The simple past tense of go is went.', 'Tenses'),
    q('Which sentence has correct capitalization?', ['i live in davao.', 'I live in Davao.', 'i Live in davao.', 'I live In davao.'], 1, 'The pronoun I and proper noun Davao should be capitalized.', 'Capitalization'),
    q('Which word means “very small”?', ['Tiny', 'Huge', 'Wide', 'Tall'], 0, 'Tiny means very small.', 'Vocabulary'),
    q('Which is a compound word?', ['Sunflower', 'Yellow', 'Slowly', 'Happy'], 0, 'Sunflower is made of sun + flower.', 'Word Study'),
    q('Choose the correct article: ___ apple.', ['A', 'An', 'Thee', 'Them'], 1, 'Use an before words that begin with a vowel sound.', 'Articles'),
    q('Which pronoun can replace “Maria”?', ['He', 'She', 'It', 'They'], 1, 'Maria is one girl, so the pronoun she can replace her name.', 'Pronouns'),
    q('Which word is spelled correctly?', ['Frend', 'Freind', 'Friend', 'Fryend'], 2, 'Friend is the correct spelling.', 'Spelling'),
    q('What is the main idea?', ['The most important point', 'A tiny detail', 'A punctuation mark', 'A type of noun'], 0, 'The main idea is what a paragraph or text is mostly about.', 'Reading'),
    q('Which word shows sequence?', ['First', 'Blue', 'Chair', 'Jump'], 0, 'First helps show the order of events.', 'Reading'),
    q('Which sentence is in future tense?', ['I played yesterday.', 'I play now.', 'I will play tomorrow.', 'I am playing now.'], 2, 'Will play shows an action that will happen in the future.', 'Tenses'),
    q('Which word is a preposition?', ['Under', 'Sing', 'Pretty', 'Fast'], 0, 'Under shows location, so it is a preposition.', 'Grammar')
  ]
};

function q(text, choices, answer, explanation, topic) {
  return { text, choices, answer, explanation, topic };
}

let state = loadState();
let currentScreen = 'home';
let session = null;

const app = document.getElementById('app');
const screenTitle = document.getElementById('screenTitle');
const toast = document.getElementById('toast');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => navigate(btn.dataset.screen));
});
document.getElementById('resetBtn').addEventListener('click', () => {
  if (confirm('Reset saved coins, XP, streak, and scores on this device?')) {
    localStorage.removeItem(STORAGE_KEY);
    state = loadState();
    navigate('home');
    showToast('Progress reset');
  }
});

function loadState() {
  const today = new Date().toISOString().slice(0,10);
  const fallback = {
    player: 'Yohan',
    xp: 0,
    coins: 0,
    streak: 0,
    lastPlayed: null,
    badges: [],
    leaderboard: [],
    subjectStats: {
      science: { answered: 0, correct: 0 },
      math: { answered: 0, correct: 0 },
      english: { answered: 0, correct: 0 }
    },
    dailyDate: today,
    dailyDone: false
  };
  try {
    return { ...fallback, ...(JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}) };
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function navigate(screen) {
  currentScreen = screen;
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.screen === screen));
  const titles = { home: 'Learning Adventure', quest: 'Fight Mode', practice: 'Daily Practice', progress: 'Progress Report' };
  screenTitle.textContent = titles[screen] || 'SmartQuest PH';
  if (screen === 'home') renderHome();
  if (screen === 'quest') renderQuestSetup();
  if (screen === 'practice') renderPractice();
  if (screen === 'progress') renderProgress();
}

function renderHome() {
  checkNewDay();
  app.innerHTML = `
    <section class="card hero">
      <p class="big">Learn. Fight. Level up.</p>
      <p>Answer kid-friendly questions, earn coins, unlock badges, and review mistakes with animated flashcards.</p>
      <div class="grid two">
        <div class="stat"><strong>${state.xp}</strong><span>Total XP</span></div>
        <div class="stat"><strong>${state.coins}</strong><span>Coins</span></div>
      </div>
    </section>

    <section class="card">
      <h2>Player</h2>
      <div class="row">
        <input class="input" id="playerName" value="${escapeHtml(state.player)}" maxlength="18" />
        <button class="btn" id="saveNameBtn">Save</button>
      </div>
    </section>

    <section class="grid two">
      ${subjectCard('science', 'Science', 'Grade 4 PH Reviewer', '🔬')}
      ${subjectCard('math', 'Math', 'Number Quest', '➗')}
      ${subjectCard('english', 'English', 'Grammar Quest', '📖')}
      <button class="subject-card" data-icon="🔥" id="dailyBtn" style="background:linear-gradient(135deg,#e17055,#fdcb6e)">
        <small>Daily Mission</small>
        <h3>${state.dailyDone ? 'Completed' : 'Win 5 Questions'}</h3>
        <span>${state.streak} day streak</span>
      </button>
    </section>

    <section class="card">
      <div class="row wrap">
        <span class="chip">⚔️ Quiz battle</span>
        <span class="chip">💡 Hints</span>
        <span class="chip">🌓 50/50</span>
        <span class="chip">📱 Installable PWA</span>
      </div>
    </section>
  `;
  document.getElementById('saveNameBtn').onclick = () => {
    state.player = document.getElementById('playerName').value.trim() || 'Player';
    saveState();
    showToast('Player saved');
  };
  document.querySelectorAll('.subject-card[data-subject]').forEach(card => card.onclick = () => startSession(card.dataset.subject, 'medium', 10, true));
  document.getElementById('dailyBtn').onclick = () => {
    if (state.dailyDone) return showToast('Daily mission already done');
    startSession('science', 'easy', 5, true, true);
  };
}

function subjectCard(subject, title, subtitle, icon) {
  const stats = state.subjectStats[subject] || { answered: 0, correct: 0 };
  const acc = stats.answered ? Math.round((stats.correct / stats.answered) * 100) : 0;
  return `
    <button class="subject-card ${subject}" data-subject="${subject}" data-icon="${icon}">
      <small>${subtitle}</small>
      <h3>${title}</h3>
      <span>${stats.answered} answered · ${acc}% correct</span>
    </button>
  `;
}

function renderQuestSetup() {
  app.innerHTML = `
    <section class="card">
      <h2>Choose your fight</h2>
      <p class="muted">Defeat the monster by answering questions. Wrong answers show an animated flashcard explanation.</p>
      <label>Subject</label>
      <select class="input" id="subjectSelect">
        <option value="science">Science</option>
        <option value="math">Math</option>
        <option value="english">English</option>
      </select>
      <div class="spacer"></div>
      <label>Difficulty</label>
      <select class="input" id="difficultySelect">
        <option value="easy">Easy</option>
        <option value="medium" selected>Medium</option>
        <option value="hard">Hard</option>
      </select>
      <div class="spacer"></div>
      <button class="btn full" id="fightBtn">⚔️ Start Fight</button>
    </section>
    <section class="card">
      <h2>Game rules</h2>
      <p>Correct answer: damage the monster, +10 XP, +3 coins. Wrong answer: your HP drops and the app explains the lesson.</p>
    </section>
  `;
  document.getElementById('fightBtn').onclick = () => {
    startSession(document.getElementById('subjectSelect').value, document.getElementById('difficultySelect').value, 10, true);
  };
}

function renderPractice() {
  app.innerHTML = `
    <section class="card">
      <h2>Practice mode</h2>
      <p class="muted">No monster battle. Best for calm review and parent-guided learning.</p>
      <div class="grid">
        <button class="btn full" onclick="startSession('science','easy',10,false)">🔬 Science practice</button>
        <button class="btn full secondary" onclick="startSession('math','easy',10,false)">➗ Math practice</button>
        <button class="btn full secondary" onclick="startSession('english','easy',10,false)">📖 English practice</button>
      </div>
    </section>
    <section class="card">
      <h2>Science bank</h2>
      <p>This prototype includes ${QUESTIONS.science.length} Grade 4 science reviewer questions plus Math and English starter banks.</p>
    </section>
  `;
}

function startSession(subject, difficulty, count, battle, daily = false) {
  const pool = shuffle([...QUESTIONS[subject]]);
  const selected = pool.slice(0, Math.min(count, pool.length));
  session = {
    subject,
    difficulty,
    questions: selected,
    index: 0,
    score: 0,
    wrong: [],
    battle,
    daily,
    playerHp: 100,
    monsterHp: 100,
    usedHint: false,
    usedFifty: false,
    locked: false
  };
  renderQuestion();
}

function renderQuestion() {
  const item = session.questions[session.index];
  const progress = Math.round((session.index / session.questions.length) * 100);
  app.innerHTML = `
    ${session.battle ? battleStage() : ''}
    <section class="card">
      <div class="row" style="justify-content:space-between;align-items:flex-start">
        <span class="chip">${capitalize(session.subject)} · ${item.topic}</span>
        <span class="chip">${session.index + 1}/${session.questions.length}</span>
      </div>
      <div class="spacer"></div>
      <div class="progressbar"><div style="width:${progress}%"></div></div>
      <h2 style="margin-top:18px">${item.text}</h2>
      <div id="options">
        ${item.choices.map((choice, i) => `<button class="option" data-index="${i}">${String.fromCharCode(65+i)}. ${choice}</button>`).join('')}
      </div>
      <div class="row wrap" style="margin-top:14px">
        <button class="btn ghost" id="hintBtn">💡 Hint</button>
        <button class="btn ghost" id="fiftyBtn">🌓 50/50</button>
      </div>
    </section>
    <section class="flashcard" id="flashcard">
      <div class="flash-top">
        <div><strong>Review Flashcard</strong><p class="muted" id="flashTopic"></p></div>
        <div class="lesson-icon">💡</div>
      </div>
      <p id="flashText"></p>
      <button class="btn full" id="continueBtn">Continue</button>
    </section>
  `;
  document.querySelectorAll('.option').forEach(btn => btn.onclick = () => answerQuestion(Number(btn.dataset.index)));
  document.getElementById('hintBtn').onclick = showHint;
  document.getElementById('fiftyBtn').onclick = useFifty;
  document.getElementById('continueBtn').onclick = nextQuestion;
}

function battleStage() {
  return `
    <section class="card">
      <div class="battle-stage" id="battleStage">
        <div class="avatar" id="avatar">
          <div class="character"><span class="mouth"></span></div>
          <div class="hp"><div id="playerHp" style="width:${session.playerHp}%"></div></div>
          <strong>${escapeHtml(state.player)}</strong>
        </div>
        <div class="monster" id="monster">
          <div class="monster-body"><span class="horn left"></span><span class="horn right"></span><span class="mouth"></span></div>
          <div class="hp"><div id="monsterHp" style="width:${session.monsterHp}%"></div></div>
          <strong>${monsterName(session.subject)}</strong>
        </div>
      </div>
    </section>
  `;
}

function answerQuestion(choiceIndex) {
  if (session.locked) return;
  session.locked = true;
  const item = session.questions[session.index];
  const buttons = [...document.querySelectorAll('.option')];
  buttons.forEach(btn => btn.disabled = true);
  buttons[item.answer].classList.add('correct');
  const correct = choiceIndex === item.answer;
  if (!correct) buttons[choiceIndex].classList.add('wrong');

  if (correct) {
    session.score++;
    animateBattle('monster');
    session.monsterHp = Math.max(0, session.monsterHp - (session.difficulty === 'hard' ? 28 : 22));
    updateHpBars();
    showToast('Correct! +10 XP');
    setTimeout(nextQuestion, 700);
  } else {
    session.wrong.push(item);
    animateBattle('avatar');
    session.playerHp = Math.max(0, session.playerHp - (session.difficulty === 'hard' ? 28 : 20));
    updateHpBars();
    showFlashcard(item);
  }
}

function showHint() {
  if (session.usedHint) return showToast('Hint already used');
  session.usedHint = true;
  const item = session.questions[session.index];
  showToast(`Hint: Topic is ${item.topic}`);
}

function useFifty() {
  if (session.usedFifty) return showToast('50/50 already used');
  session.usedFifty = true;
  const item = session.questions[session.index];
  const wrongIndexes = item.choices.map((_, i) => i).filter(i => i !== item.answer);
  shuffle(wrongIndexes).slice(0, 2).forEach(i => {
    const btn = document.querySelector(`.option[data-index="${i}"]`);
    if (btn) btn.style.opacity = .25;
  });
}

function showFlashcard(item) {
  document.getElementById('flashTopic').textContent = item.topic;
  document.getElementById('flashText').textContent = item.explanation;
  document.getElementById('flashcard').classList.add('show');
}

function nextQuestion() {
  session.index++;
  session.locked = false;
  session.usedHint = false;
  session.usedFifty = false;
  if (session.index >= session.questions.length || session.playerHp <= 0 || session.monsterHp <= 0) return finishSession();
  renderQuestion();
}

function finishSession() {
  const total = session.questions.length;
  const percent = Math.round((session.score / total) * 100);
  const won = percent >= 70 || session.monsterHp <= 0;
  const xpEarned = session.score * 10 + (won ? 25 : 0);
  const coinsEarned = session.score * 3 + (won ? 10 : 0);
  state.xp += xpEarned;
  state.coins += coinsEarned;
  const stats = state.subjectStats[session.subject];
  stats.answered += total;
  stats.correct += session.score;
  updateStreak();
  if (session.daily && !state.dailyDone) {
    state.dailyDone = true;
    state.coins += 20;
    addBadge('Daily Hero');
  }
  if (percent === 100) addBadge('Perfect Quest');
  if (state.xp >= 500) addBadge('500 XP Learner');
  state.leaderboard.push({ name: state.player, score: percent, subject: session.subject, date: new Date().toLocaleDateString() });
  state.leaderboard = state.leaderboard.sort((a,b) => b.score - a.score).slice(0, 10);
  saveState();

  app.innerHTML = `
    <section class="card hero center">
      <p class="big">${won ? 'Victory!' : 'Good try!'}</p>
      <p>${state.player} scored ${session.score}/${total} (${percent}%).</p>
      <div class="grid two">
        <div class="stat"><strong>+${xpEarned}</strong><span>XP earned</span></div>
        <div class="stat"><strong>+${coinsEarned}</strong><span>Coins earned</span></div>
      </div>
    </section>
    <section class="card">
      <h2>What to review</h2>
      ${session.wrong.length ? session.wrong.map(item => `<div class="badge-item"><span>${item.topic}</span><small>${item.explanation}</small></div>`).join('') : '<p>Excellent. No wrong answers this round.</p>'}
    </section>
    <section class="grid two">
      <button class="btn" onclick="startSession('${session.subject}','${session.difficulty}',10,${session.battle})">Play again</button>
      <button class="btn secondary" onclick="navigate('progress')">View progress</button>
    </section>
  `;
}

function renderProgress() {
  const rows = Object.entries(state.subjectStats).map(([subject, s]) => {
    const acc = s.answered ? Math.round((s.correct / s.answered) * 100) : 0;
    return `
      <div class="badge-item">
        <span>${capitalize(subject)}<br><small class="muted">${s.correct}/${s.answered} correct</small></span>
        <strong>${acc}%</strong>
      </div>
    `;
  }).join('');
  app.innerHTML = `
    <section class="card">
      <h2>Learning progress</h2>
      <div class="grid two">
        <div class="stat"><strong>${state.xp}</strong><span>Total XP</span></div>
        <div class="stat"><strong>${state.coins}</strong><span>Coins</span></div>
        <div class="stat"><strong>${state.streak}</strong><span>Day streak</span></div>
        <div class="stat"><strong>${state.badges.length}</strong><span>Badges</span></div>
      </div>
    </section>
    <section class="card">
      <h2>Subjects</h2>
      <div class="badge-list">${rows}</div>
    </section>
    <section class="card">
      <h2>Badges</h2>
      <div class="row wrap">${state.badges.length ? state.badges.map(b => `<span class="chip">🏅 ${b}</span>`).join('') : '<span class="muted">No badges yet.</span>'}</div>
    </section>
    <section class="card">
      <h2>Local leaderboard</h2>
      ${state.leaderboard.length ? state.leaderboard.map((row, i) => `
        <div class="leaderboard-row">
          <div class="rank">${i+1}</div>
          <div><strong>${escapeHtml(row.name)}</strong><br><small class="muted">${capitalize(row.subject)} · ${row.date}</small></div>
          <strong>${row.score}%</strong>
        </div>
      `).join('') : '<p class="muted">Play a round to create leaderboard records on this device.</p>'}
    </section>
  `;
}

function updateHpBars() {
  const player = document.getElementById('playerHp');
  const monster = document.getElementById('monsterHp');
  if (player) player.style.width = `${session.playerHp}%`;
  if (monster) monster.style.width = `${session.monsterHp}%`;
}

function animateBattle(target) {
  if (!session.battle) return;
  const targetEl = document.getElementById(target);
  const stage = document.getElementById('battleStage');
  if (targetEl) {
    targetEl.classList.add('hit');
    setTimeout(() => targetEl.classList.remove('hit'), 450);
  }
  if (stage) {
    const slash = document.createElement('div');
    slash.className = 'slash';
    stage.appendChild(slash);
    setTimeout(() => slash.remove(), 430);
  }
}

function updateStreak() {
  const today = new Date().toISOString().slice(0,10);
  if (state.lastPlayed === today) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0,10);
  state.streak = state.lastPlayed === yesterday ? state.streak + 1 : 1;
  state.lastPlayed = today;
}

function checkNewDay() {
  const today = new Date().toISOString().slice(0,10);
  if (state.dailyDate !== today) {
    state.dailyDate = today;
    state.dailyDone = false;
    saveState();
  }
}

function addBadge(name) {
  if (!state.badges.includes(name)) state.badges.push(name);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1400);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }
function monsterName(subject) {
  return ({ science: 'Atom Goblin', math: 'Number Ogre', english: 'Grammar Pup' })[subject] || 'Quiz Monster';
}
function escapeHtml(str) {
  return String(str).replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
}

navigate('home');
