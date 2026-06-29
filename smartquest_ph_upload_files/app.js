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

function q(text, choices, answer, explanation, topic, source = 'core') {
  return { text, choices, answer, explanation, topic, source };
}

const ENGLISH_LESSON_PACK_META = [
  { week: 1, topic: "Story Grammar in Literary Texts" },
  { week: 2, topic: "Character Traits and Feelings" },
  { week: 3, topic: "Sequencing Events in Stories" },
  { week: 4, topic: "Cause and Effect in Texts" },
  { week: 5, topic: "Main Idea and Supporting Details" },
  { week: 6, topic: "Context Clues and Vocabulary" },
  { week: 7, topic: "Nouns Pronouns and Verbs" },
  { week: 8, topic: "Adjectives and Adverbs" },
  { week: 9, topic: "Simple and Compound Sentences" },
  { week: 10, topic: "Composing a Short Reaction" }
];

const ENGLISH_PDF_PACK = [
  q("Which story element tells where and when a story happens?", ["Character", "Setting", "Problem", "Theme"], 1, "The setting tells the place and time of a story.", "Week 01 \u00b7 Story Grammar", 'english-pdf-pack'),
  q("In a story, who are the characters?", ["The people or animals in the story", "The page numbers", "The commas and periods", "The title only"], 0, "Characters are the people, animals, or beings that take part in the story.", "Week 01 \u00b7 Story Grammar", 'english-pdf-pack'),
  q("What is the problem in a story?", ["The lesson learned", "The main conflict the character faces", "The place of the story", "A list of adjectives"], 1, "The problem is the conflict or challenge that the character must solve.", "Week 01 \u00b7 Story Grammar", 'english-pdf-pack'),
  q("What part of story grammar explains how the problem is solved?", ["Resolution", "Setting", "Title", "Alphabet"], 0, "The resolution tells how the problem or conflict is fixed.", "Week 01 \u00b7 Story Grammar", 'english-pdf-pack'),
  q("Which sentence best describes a plot?", ["The order of important events in a story", "A word that names a person", "A describing word", "A mark at the end of a sentence"], 0, "Plot is the sequence of important events in a story.", "Week 01 \u00b7 Story Grammar", 'english-pdf-pack'),
  q("After reading a story, why should you identify the beginning, middle, and end?", ["To understand how the story is organized", "To skip the hard words", "To count the letters only", "To avoid reading the ending"], 0, "Beginning, middle, and end help a reader follow the events clearly.", "Week 01 \u00b7 Story Grammar", 'english-pdf-pack'),
  q("Which word is a character trait?", ["Honest", "Crying", "Running", "Yesterday"], 0, "A trait describes a character\u2019s usual personality, such as honest or brave.", "Week 02 \u00b7 Traits and Feelings", 'english-pdf-pack'),
  q("Which word names a feeling?", ["Careful", "Joyful", "Polite", "Lazy"], 1, "Joyful is a feeling because it tells an emotion a character may have.", "Week 02 \u00b7 Traits and Feelings", 'english-pdf-pack'),
  q("A boy returns a lost wallet to its owner. Which trait does he show?", ["Greedy", "Honest", "Sleepy", "Noisy"], 1, "Returning a lost wallet shows honesty.", "Week 02 \u00b7 Traits and Feelings", 'english-pdf-pack'),
  q("What should you use to prove a character trait?", ["Clues from what the character says and does", "Only the cover picture", "A random guess", "The longest word"], 0, "Traits should be supported by text clues, actions, and dialogue.", "Week 02 \u00b7 Traits and Feelings", 'english-pdf-pack'),
  q("Mia smiled and clapped after her friend won. How does Mia probably feel?", ["Happy for her friend", "Angry at her friend", "Bored with the game", "Afraid of the medal"], 0, "Smiling and clapping are clues that Mia feels happy for her friend.", "Week 02 \u00b7 Traits and Feelings", 'english-pdf-pack'),
  q("What is the difference between a trait and a feeling?", ["A trait is a usual quality; a feeling can change", "A trait is always a place", "A feeling is always a noun", "They are exactly the same"], 0, "Traits are more lasting qualities, while feelings can change during the story.", "Week 02 \u00b7 Traits and Feelings", 'english-pdf-pack'),
  q("Which word often shows the first event in a sequence?", ["Finally", "First", "After that", "Last"], 1, "First signals the beginning of a sequence of events.", "Week 03 \u00b7 Sequencing Events", 'english-pdf-pack'),
  q("Which word best shows the last event?", ["Finally", "Before", "At first", "Next"], 0, "Finally often signals the last event or ending step.", "Week 03 \u00b7 Sequencing Events", 'english-pdf-pack'),
  q("Why is sequencing important when reading a story?", ["It helps readers understand the order of events", "It removes all characters", "It makes every story shorter", "It changes nouns into verbs"], 0, "Sequencing helps readers know what happened first, next, and last.", "Week 03 \u00b7 Sequencing Events", 'english-pdf-pack'),
  q("Choose the correct order: wash hands, eat lunch, dry hands.", ["Eat lunch, dry hands, wash hands", "Wash hands, dry hands, eat lunch", "Dry hands, eat lunch, wash hands", "Eat lunch, wash hands, dry hands"], 1, "The logical order is wash hands, dry hands, then eat lunch.", "Week 03 \u00b7 Sequencing Events", 'english-pdf-pack'),
  q("Which question helps you sequence events?", ["What happened next?", "How many vowels are there?", "Is the title long?", "What color is the paper?"], 0, "Asking what happened next helps identify the sequence.", "Week 03 \u00b7 Sequencing Events", 'english-pdf-pack'),
  q("In a sequence, what should \u201cnext\u201d tell you?", ["The event that follows another event", "The main character\u2019s age only", "The opposite word", "The final score"], 0, "Next points to the event that comes after the previous one.", "Week 03 \u00b7 Sequencing Events", 'english-pdf-pack'),
  q("What is a cause?", ["Why something happens", "What happens because of it", "A proper noun", "A describing word"], 0, "The cause is the reason why an event happens.", "Week 04 \u00b7 Cause and Effect", 'english-pdf-pack'),
  q("What is an effect?", ["The result of a cause", "The first letter in a word", "A type of punctuation", "The title of a book"], 0, "The effect is what happens because of the cause.", "Week 04 \u00b7 Cause and Effect", 'english-pdf-pack'),
  q("The ground was wet because it rained. What is the cause?", ["The ground was wet", "It rained", "The ground disappeared", "It was sunny"], 1, "Rain is the cause; the wet ground is the effect.", "Week 04 \u00b7 Cause and Effect", 'english-pdf-pack'),
  q("Which clue word often shows cause and effect?", ["Because", "Under", "Beautiful", "Quickly"], 0, "Because often introduces the reason or cause.", "Week 04 \u00b7 Cause and Effect", 'english-pdf-pack'),
  q("Lina studied every night, so she passed the test. What is the effect?", ["She studied every night", "She passed the test", "She forgot the test", "She lost her pencil"], 1, "Passing the test is the result of studying every night.", "Week 04 \u00b7 Cause and Effect", 'english-pdf-pack'),
  q("Why should a reader find cause and effect in a text?", ["To understand why events happen and what results follow", "To skip all details", "To count only verbs", "To change the story ending"], 0, "Cause and effect helps readers connect reasons with results.", "Week 04 \u00b7 Cause and Effect", 'english-pdf-pack'),
  q("What is the main idea of a paragraph?", ["What the paragraph is mostly about", "A tiny extra fact", "The first punctuation mark", "A character\u2019s name only"], 0, "The main idea is the most important point of a paragraph or text.", "Week 05 \u00b7 Main Idea and Details", 'english-pdf-pack'),
  q("What do supporting details do?", ["Give examples or facts that explain the main idea", "Replace the title", "Hide the topic", "End every sentence"], 0, "Supporting details explain, prove, or give examples for the main idea.", "Week 05 \u00b7 Main Idea and Details", 'english-pdf-pack'),
  q("A paragraph tells that trees give shade, homes for animals, and clean air. What is the main idea?", ["Trees are helpful", "Animals are noisy", "Air is invisible", "Shade is dark"], 0, "The details all support the idea that trees are helpful.", "Week 05 \u00b7 Main Idea and Details", 'english-pdf-pack'),
  q("Which is most likely a supporting detail?", ["Dogs need food and water", "Dogs are important pets", "Pets are fun", "Animals are living things"], 0, "\u201cDogs need food and water\u201d is a detail that can support a main idea about caring for dogs.", "Week 05 \u00b7 Main Idea and Details", 'english-pdf-pack'),
  q("What question can help find the main idea?", ["What is this mostly about?", "How many commas are there?", "Which word is longest?", "Is the paper white?"], 0, "Asking what the text is mostly about helps identify the main idea.", "Week 05 \u00b7 Main Idea and Details", 'english-pdf-pack'),
  q("Why should details match the main idea?", ["So the paragraph is clear and focused", "So the story becomes confusing", "So the title disappears", "So nouns become verbs"], 0, "Matching details keep the writing clear and connected to one main point.", "Week 05 \u00b7 Main Idea and Details", 'english-pdf-pack'),
  q("What are context clues?", ["Words around an unknown word that help explain its meaning", "Marks used only in math", "The last page of a book", "A kind of drawing"], 0, "Context clues are nearby words or sentences that help readers infer meaning.", "Week 06 \u00b7 Context Clues", 'english-pdf-pack'),
  q("The pup was tiny, small enough to fit in a basket. What does tiny mean?", ["Very small", "Very loud", "Very heavy", "Very old"], 0, "The phrase \u201csmall enough to fit in a basket\u201d explains tiny.", "Week 06 \u00b7 Context Clues", 'english-pdf-pack'),
  q("Which action is best when you meet a difficult word?", ["Look for clues before and after the word", "Stop reading forever", "Guess without checking", "Ignore the sentence"], 0, "Good readers use surrounding words to understand difficult words.", "Week 06 \u00b7 Context Clues", 'english-pdf-pack'),
  q("Which clue word may signal an example?", ["For example", "Never", "Under", "Blue"], 0, "For example often introduces a clue that explains the word.", "Week 06 \u00b7 Context Clues", 'english-pdf-pack'),
  q("The room was silent; no one made a sound. What does silent mean?", ["Quiet", "Bright", "Messy", "Crowded"], 0, "\u201cNo one made a sound\u201d gives the meaning of silent.", "Week 06 \u00b7 Context Clues", 'english-pdf-pack'),
  q("Why is vocabulary important in reading?", ["It helps readers understand the text better", "It makes letters disappear", "It replaces all sentences", "It is only for spelling bees"], 0, "Knowing word meanings helps readers understand what they read.", "Week 06 \u00b7 Context Clues", 'english-pdf-pack'),
  q("Which word is a noun?", ["Teacher", "Run", "Quickly", "Blue"], 0, "A noun names a person, place, thing, or animal.", "Week 07 \u00b7 Nouns Pronouns and Verbs", 'english-pdf-pack'),
  q("Which word is a pronoun?", ["They", "School", "Jump", "Soft"], 0, "They is a pronoun because it can replace names of people or things.", "Week 07 \u00b7 Nouns Pronouns and Verbs", 'english-pdf-pack'),
  q("Which word is a verb?", ["Write", "Pencil", "Happy", "Under"], 0, "Write is an action word, so it is a verb.", "Week 07 \u00b7 Nouns Pronouns and Verbs", 'english-pdf-pack'),
  q("Choose the pronoun that can replace \u201cBen and Ana.\u201d", ["He", "She", "They", "It"], 2, "Ben and Ana are two people, so the pronoun is they.", "Week 07 \u00b7 Nouns Pronouns and Verbs", 'english-pdf-pack'),
  q("In the sentence \u201cThe dog barked,\u201d which word is the verb?", ["The", "dog", "barked", "sentence"], 2, "Barked is the action in the sentence.", "Week 07 \u00b7 Nouns Pronouns and Verbs", 'english-pdf-pack'),
  q("Which sentence uses a noun, pronoun, and verb correctly?", ["Rina reads, and she smiles.", "Quickly blue under.", "They pencil happy.", "Runs the it."], 0, "Rina is a noun, she is a pronoun, and reads/smiles are verbs.", "Week 07 \u00b7 Nouns Pronouns and Verbs", 'english-pdf-pack'),
  q("Which word is an adjective in \u201cThe red kite flew high\u201d?", ["red", "kite", "flew", "high"], 0, "Red describes the noun kite, so it is an adjective.", "Week 08 \u00b7 Adjectives and Adverbs", 'english-pdf-pack'),
  q("Which word is an adverb in \u201cThe turtle moved slowly\u201d?", ["turtle", "moved", "slowly", "the"], 2, "Slowly describes how the turtle moved, so it is an adverb.", "Week 08 \u00b7 Adjectives and Adverbs", 'english-pdf-pack'),
  q("What does an adjective describe?", ["A noun or pronoun", "Only a number", "Only a punctuation mark", "A sentence ending"], 0, "Adjectives describe nouns or pronouns.", "Week 08 \u00b7 Adjectives and Adverbs", 'english-pdf-pack'),
  q("What does an adverb often describe?", ["A verb", "A proper noun only", "A comma", "A title"], 0, "Adverbs often describe verbs by telling how, when, or where an action happens.", "Week 08 \u00b7 Adjectives and Adverbs", 'english-pdf-pack'),
  q("Choose the sentence with an adjective.", ["The bright sun shines.", "The sun shines brightly.", "She runs quickly.", "They arrived yesterday."], 0, "Bright describes the noun sun, so it is an adjective.", "Week 08 \u00b7 Adjectives and Adverbs", 'english-pdf-pack'),
  q("Choose the sentence with an adverb.", ["The careful boy reads.", "The boy reads carefully.", "The blue bag is mine.", "The small cat sleeps."], 1, "Carefully tells how the boy reads, so it is an adverb.", "Week 08 \u00b7 Adjectives and Adverbs", 'english-pdf-pack'),
  q("What is a simple sentence?", ["One complete thought", "Two unrelated words", "A list without a verb", "Only a question mark"], 0, "A simple sentence has one complete thought.", "Week 09 \u00b7 Simple and Compound Sentences", 'english-pdf-pack'),
  q("Which is a simple sentence?", ["The bird sings.", "The bird sings, and the cat sleeps.", "Because the bird", "Under the tree"], 0, "\u201cThe bird sings\u201d has one complete thought.", "Week 09 \u00b7 Simple and Compound Sentences", 'english-pdf-pack'),
  q("What is a compound sentence?", ["Two complete thoughts joined together", "One word only", "A sentence with no subject", "A title"], 0, "A compound sentence joins two complete thoughts.", "Week 09 \u00b7 Simple and Compound Sentences", 'english-pdf-pack'),
  q("Which conjunction can join two simple sentences?", ["and", "under", "beautiful", "table"], 0, "And can join two related complete thoughts.", "Week 09 \u00b7 Simple and Compound Sentences", 'english-pdf-pack'),
  q("Choose the compound sentence.", ["I studied, and I passed.", "I studied hard.", "The quiet room.", "Because I studied."], 0, "\u201cI studied\u201d and \u201cI passed\u201d are both complete thoughts joined by and.", "Week 09 \u00b7 Simple and Compound Sentences", 'english-pdf-pack'),
  q("Which punctuation is often used before \u201cbut\u201d in a compound sentence?", ["Comma", "Apostrophe", "Quotation mark", "Colon only"], 0, "A comma is often placed before coordinating conjunctions such as but in a compound sentence.", "Week 09 \u00b7 Simple and Compound Sentences", 'english-pdf-pack'),
  q("What is a short reaction?", ["A brief response that tells your thought or feeling about a text", "A list of random spelling words", "The title page only", "A copied paragraph with no opinion"], 0, "A short reaction tells what you think or feel about what you read.", "Week 10 \u00b7 Short Reaction", 'english-pdf-pack'),
  q("Which sentence gives a clear reaction?", ["I liked the story because the boy helped his friend.", "Story.", "Maybe yes.", "I do not know anything."], 0, "A clear reaction gives an opinion and a reason.", "Week 10 \u00b7 Short Reaction", 'english-pdf-pack'),
  q("What should you include in a good reaction?", ["Your opinion and a reason from the text", "Only your name", "Only the page number", "A random drawing"], 0, "A good reaction states your idea and supports it with a reason or text detail.", "Week 10 \u00b7 Short Reaction", 'english-pdf-pack'),
  q("Which phrase can help explain a reaction?", ["I think this because...", "No reason.", "Whatever.", "The end only."], 0, "\u201cI think this because...\u201d helps connect an opinion with a reason.", "Week 10 \u00b7 Short Reaction", 'english-pdf-pack'),
  q("After reading about a helpful character, which reaction is best?", ["I admire the character because helping others is kind.", "The paper is white.", "I saw three commas.", "The title has letters."], 0, "The best reaction is connected to the text and explains why.", "Week 10 \u00b7 Short Reaction", 'english-pdf-pack'),
  q("Why should a reaction be short but clear?", ["So the reader understands your idea quickly", "So it hides your answer", "So it avoids the text", "So it becomes a math problem"], 0, "A short clear reaction is easy to understand and stays focused on the text.", "Week 10 \u00b7 Short Reaction", 'english-pdf-pack'),
];

const SCIENCE_LESSON_PACK_META = [
  { week: 1, topic: "Science Process Skills" },
  { week: 2, topic: "Properties of Matter" },
  { week: 3, topic: "Changes in Materials" },
  { week: 4, topic: "Proper Use and Disposal of Materials" },
  { week: 5, topic: "Parts and Functions of Plants" },
  { week: 6, topic: "Animals and Their Habitats" },
  { week: 7, topic: "Human Body and Health" },
  { week: 8, topic: "Ecosystems in the Community" },
  { week: 9, topic: "Weather and Safety" },
  { week: 10, topic: "Earth Materials and Natural Resources" }
];

const SCIENCE_PDF_PACK = [
  q("Which science process skill means using your senses to learn about an object?", ["Observing", "Guessing", "Copying", "Decorating"], 0, "Observing means carefully using senses such as sight, touch, smell, or hearing to gather information.", "Week 01 \u00b7 Science Process Skills", "science-pdf-pack"),
  q("A student writes, \"The leaf is green and smooth.\" What skill is being used?", ["Observing", "Measuring money", "Disposing waste", "Predicting weather only"], 0, "Describing color and texture is an observation.", "Week 01 \u00b7 Science Process Skills", "science-pdf-pack"),
  q("Which tool is best for measuring the length of a pencil?", ["Ruler", "Thermometer", "Rain gauge", "Magnifying glass only"], 0, "A ruler measures length in centimeters or inches.", "Week 01 \u00b7 Science Process Skills", "science-pdf-pack"),
  q("What does it mean to predict in science?", ["Tell what may happen based on clues", "Ignore the results", "Write without thinking", "Break the materials"], 0, "A prediction is a careful idea about what may happen, based on evidence or patterns.", "Week 01 \u00b7 Science Process Skills", "science-pdf-pack"),
  q("Why should a young scientist record observations?", ["To remember and compare results", "To hide the evidence", "To make the task unsafe", "To avoid learning"], 0, "Recording observations helps us review, compare, and explain what happened.", "Week 01 \u00b7 Science Process Skills", "science-pdf-pack"),
  q("Which action shows safe science work?", ["Following instructions before touching materials", "Tasting unknown liquids", "Running during an activity", "Throwing tools around"], 0, "Safe work begins with listening, following directions, and handling materials carefully.", "Week 01 \u00b7 Science Process Skills", "science-pdf-pack"),
  q("When classmates share materials and help each other carefully, they show which good habit?", ["Cooperation", "Carelessness", "Guessing only", "Wasting"], 0, "Cooperation helps a group finish a science task safely and correctly.", "Week 01 \u00b7 Science Process Skills", "science-pdf-pack"),
  q("Which question is scientific because it can be tested?", ["Which paper towel absorbs more water?", "Which color is the happiest?", "Which drawing is the prettiest?", "Which story is the funniest?"], 0, "A testable question can be investigated by observing or measuring results.", "Week 01 \u00b7 Science Process Skills", "science-pdf-pack"),
  q("What is matter?", ["Anything that has mass and takes up space", "Only things that are alive", "Only things we can eat", "Only air outside"], 0, "Matter includes solids, liquids, and gases because they have mass and occupy space.", "Week 02 \u00b7 Properties of Matter", "science-pdf-pack"),
  q("Which property tells how heavy or light an object is?", ["Mass", "Color", "Shape", "Smell"], 0, "Mass tells the amount of matter in an object.", "Week 02 \u00b7 Properties of Matter", "science-pdf-pack"),
  q("Which property is being described: \"The ball is round and red\"?", ["Shape and color", "Temperature only", "Sound and taste", "Mass only"], 0, "Round describes shape, and red describes color.", "Week 02 \u00b7 Properties of Matter", "science-pdf-pack"),
  q("Which object is a liquid at room temperature?", ["Water", "Rock", "Pencil", "Chair"], 0, "Water flows and takes the shape of its container, so it is a liquid.", "Week 02 \u00b7 Properties of Matter", "science-pdf-pack"),
  q("What property can help you know if a material is rough or smooth?", ["Texture", "Mass only", "Name", "Price"], 0, "Texture describes how a surface feels.", "Week 02 \u00b7 Properties of Matter", "science-pdf-pack"),
  q("Why is it useful to know the properties of materials?", ["To choose the right material for a task", "To ignore safety", "To make all materials the same", "To stop measuring"], 0, "Knowing properties helps us choose materials, such as waterproof plastic for rain protection.", "Week 02 \u00b7 Properties of Matter", "science-pdf-pack"),
  q("Which material is likely transparent?", ["Clear glass", "Wooden door", "Stone wall", "Metal pot"], 0, "Transparent materials let light pass through clearly.", "Week 02 \u00b7 Properties of Matter", "science-pdf-pack"),
  q("A sponge can soak up water. Which property does this show?", ["Absorbency", "Magnetism", "Hardness only", "Color"], 0, "Absorbency is the ability to take in liquid.", "Week 02 \u00b7 Properties of Matter", "science-pdf-pack"),
  q("Which is a physical change?", ["Cutting paper", "Burning paper", "Cooking an egg", "Rusting a nail"], 0, "Cutting changes the size or shape of paper but does not make a new material.", "Week 03 \u00b7 Changes in Materials", "science-pdf-pack"),
  q("What happens when ice melts?", ["It changes from solid to liquid", "It becomes soil", "It disappears forever", "It becomes wood"], 0, "Melting changes ice into liquid water.", "Week 03 \u00b7 Changes in Materials", "science-pdf-pack"),
  q("Which change is usually hard to reverse?", ["Burning wood", "Folding cloth", "Melting ice", "Cutting clay with a tool"], 0, "Burning makes new substances such as ash and smoke, so it is hard to reverse.", "Week 03 \u00b7 Changes in Materials", "science-pdf-pack"),
  q("What causes many materials to change state from solid to liquid?", ["Adding heat", "Adding darkness", "Removing all air", "Counting them"], 0, "Heat can add energy and cause some solids to melt.", "Week 03 \u00b7 Changes in Materials", "science-pdf-pack"),
  q("Which change happens when water vapor cools and becomes droplets?", ["Condensation", "Melting", "Burning", "Cutting"], 0, "Condensation happens when gas changes back into liquid droplets.", "Week 03 \u00b7 Changes in Materials", "science-pdf-pack"),
  q("Which change makes a new material?", ["Cooking a pancake", "Tearing paper", "Stretching a rubber band", "Sharpening a pencil"], 0, "Cooking changes ingredients into a new material with different properties.", "Week 03 \u00b7 Changes in Materials", "science-pdf-pack"),
  q("Why should learners be careful when testing changes in materials?", ["Heat, sharp tools, or chemicals may be unsafe", "Because science has no rules", "Because results do not matter", "Because materials cannot change"], 0, "Safety matters because some changes involve heat, sharp objects, or substances that should not be touched or tasted.", "Week 03 \u00b7 Changes in Materials", "science-pdf-pack"),
  q("Which example shows dissolving?", ["Sugar mixing evenly in water", "A pencil breaking", "A stone rolling", "A book closing"], 0, "Dissolving happens when a substance spreads evenly in a liquid.", "Week 03 \u00b7 Changes in Materials", "science-pdf-pack"),
  q("What should you do before using a new material in class?", ["Read and follow the instructions", "Open everything quickly", "Throw it away first", "Taste it to check"], 0, "Instructions explain the correct and safe way to use materials.", "Week 04 \u00b7 Proper Use and Disposal", "science-pdf-pack"),
  q("Which action shows proper disposal?", ["Putting used paper in the correct bin", "Throwing trash into a river", "Leaving wrappers on the floor", "Burning plastic anywhere"], 0, "Using the correct bin keeps the classroom and community cleaner.", "Week 04 \u00b7 Proper Use and Disposal", "science-pdf-pack"),
  q("Why should sharp materials be handled carefully?", ["They can cause cuts or injuries", "They always make food", "They turn into water", "They clean themselves"], 0, "Sharp objects can hurt people if they are used carelessly.", "Week 04 \u00b7 Proper Use and Disposal", "science-pdf-pack"),
  q("What should be done with recyclable bottles when possible?", ["Clean and place them in a recycling bin", "Throw them in canals", "Break them in the room", "Hide them under chairs"], 0, "Recycling reduces waste and allows some materials to be used again.", "Week 04 \u00b7 Proper Use and Disposal", "science-pdf-pack"),
  q("Which is a safe way to use glue or paint?", ["Use only the needed amount and close it after", "Smell it closely for a long time", "Put it on food", "Pour it on the floor"], 0, "Using only what is needed prevents waste and mess.", "Week 04 \u00b7 Proper Use and Disposal", "science-pdf-pack"),
  q("Why should materials not be wasted?", ["Resources are limited and should be used wisely", "Waste makes learning better", "All materials are free forever", "It does not affect anyone"], 0, "Using materials wisely helps save money, resources, and the environment.", "Week 04 \u00b7 Proper Use and Disposal", "science-pdf-pack"),
  q("Which item should be kept away from young children after use?", ["Small sharp pins", "Clean paper", "A closed notebook", "A picture card"], 0, "Small or sharp items can be dangerous if handled by young children.", "Week 04 \u00b7 Proper Use and Disposal", "science-pdf-pack"),
  q("What is the best first step when a material spills?", ["Tell the teacher or adult right away", "Step on it", "Laugh and leave", "Spread it around"], 0, "An adult can help clean spills safely and prevent accidents.", "Week 04 \u00b7 Proper Use and Disposal", "science-pdf-pack"),
  q("Which plant part absorbs water and minerals from the soil?", ["Roots", "Flower", "Fruit", "Seed only"], 0, "Roots hold the plant in place and absorb water and minerals.", "Week 05 \u00b7 Parts and Functions of Plants", "science-pdf-pack"),
  q("What is the main job of the stem?", ["Support the plant and carry water", "Make animal sounds", "Catch insects only", "Turn into soil"], 0, "The stem supports the plant and transports water and food between parts.", "Week 05 \u00b7 Parts and Functions of Plants", "science-pdf-pack"),
  q("Which plant part usually makes food for the plant?", ["Leaves", "Roots only", "Fruit only", "Bark only"], 0, "Leaves use sunlight, water, and carbon dioxide to make food.", "Week 05 \u00b7 Parts and Functions of Plants", "science-pdf-pack"),
  q("What do flowers often help a plant make?", ["Seeds or fruits", "Plastic", "Clouds", "Rocks"], 0, "Flowers help many plants reproduce by forming seeds or fruits.", "Week 05 \u00b7 Parts and Functions of Plants", "science-pdf-pack"),
  q("Why are seeds important?", ["They can grow into new plants", "They pump blood", "They make thunder", "They clean metal"], 0, "Seeds contain a young plant and stored food that can grow under the right conditions.", "Week 05 \u00b7 Parts and Functions of Plants", "science-pdf-pack"),
  q("What do most plants need to make their own food?", ["Sunlight, water, and air", "Only plastic", "Only darkness", "Only rocks"], 0, "Plants need sunlight, water, and carbon dioxide from air for food-making.", "Week 05 \u00b7 Parts and Functions of Plants", "science-pdf-pack"),
  q("Which part protects seeds in many plants?", ["Fruit", "Stem", "Root hair", "Soil"], 0, "Fruit can protect seeds and help them spread.", "Week 05 \u00b7 Parts and Functions of Plants", "science-pdf-pack"),
  q("What may happen if a plant is not watered for many days?", ["It may wilt", "It will become a stone", "It will make milk", "It will stop needing sunlight forever"], 0, "Plants need water for support and food-making, so lack of water can make them wilt.", "Week 05 \u00b7 Parts and Functions of Plants", "science-pdf-pack"),
  q("What is a habitat?", ["A place where an animal or plant lives", "A type of pencil", "A math sign", "A kind of song"], 0, "A habitat gives living things food, water, shelter, and space.", "Week 06 \u00b7 Animals and Habitats", "science-pdf-pack"),
  q("Which habitat is best for a fish?", ["Pond or river", "Dry desert sand only", "A bookshelf", "A hot stove"], 0, "Fish need water to breathe, move, and find food.", "Week 06 \u00b7 Animals and Habitats", "science-pdf-pack"),
  q("Which body covering helps birds fly and stay warm?", ["Feathers", "Scales only", "Shell only", "Smooth plastic"], 0, "Feathers are an important bird adaptation for flight and warmth.", "Week 06 \u00b7 Animals and Habitats", "science-pdf-pack"),
  q("Why do animals need shelter?", ["For protection and rest", "To stop eating forever", "To become nonliving", "To turn into plants"], 0, "Shelter helps animals stay safe from weather, enemies, and danger.", "Week 06 \u00b7 Animals and Habitats", "science-pdf-pack"),
  q("Which animal is adapted for swimming?", ["Fish with fins", "Chicken with claws", "Goat with hooves", "Ant with antennae"], 0, "Fins help fish move through water.", "Week 06 \u00b7 Animals and Habitats", "science-pdf-pack"),
  q("What can happen if an animal's habitat is destroyed?", ["It may lose food, shelter, or safety", "It will always get more homes", "It becomes a toy", "It stops needing water"], 0, "Habitat loss can make it hard for animals to survive.", "Week 06 \u00b7 Animals and Habitats", "science-pdf-pack"),
  q("Which animal is likely to live in a forest habitat?", ["Monkey", "Goldfish in a bowl", "Dolphin", "Penguin on ice"], 0, "Many monkeys live in forests where they find trees, food, and shelter.", "Week 06 \u00b7 Animals and Habitats", "science-pdf-pack"),
  q("Which is a good way to protect animal habitats?", ["Avoid throwing trash in rivers and forests", "Cut all trees", "Pollute ponds", "Burn grass for fun"], 0, "Keeping habitats clean helps animals survive.", "Week 06 \u00b7 Animals and Habitats", "science-pdf-pack"),
  q("Which body system helps us breathe?", ["Respiratory system", "Digestive system", "Skeletal system only", "Nervous system only"], 0, "The respiratory system includes the lungs and helps the body take in oxygen.", "Week 07 \u00b7 Human Body and Health", "science-pdf-pack"),
  q("Which organ pumps blood around the body?", ["Heart", "Stomach", "Skin", "Teeth"], 0, "The heart is a muscle that pumps blood through blood vessels.", "Week 07 \u00b7 Human Body and Health", "science-pdf-pack"),
  q("What is the main job of the stomach and intestines?", ["Break down food and absorb nutrients", "Make light", "Move bones only", "Clean the air outside"], 0, "The digestive system breaks food into nutrients the body can use.", "Week 07 \u00b7 Human Body and Health", "science-pdf-pack"),
  q("Why should we wash hands before eating?", ["To remove germs that may cause sickness", "To make food disappear", "To stop the heart", "To avoid drinking water"], 0, "Handwashing lowers the chance of germs entering the body.", "Week 07 \u00b7 Human Body and Health", "science-pdf-pack"),
  q("Which habit helps keep the body healthy?", ["Eating balanced food and exercising", "Skipping sleep always", "Drinking only soft drinks", "Never washing hands"], 0, "Balanced food, exercise, sleep, and cleanliness help the body stay healthy.", "Week 07 \u00b7 Human Body and Health", "science-pdf-pack"),
  q("Which body part protects many organs and gives shape to the body?", ["Skeleton", "Hair", "Tongue only", "Skin color"], 0, "Bones support the body and protect organs such as the brain, heart, and lungs.", "Week 07 \u00b7 Human Body and Health", "science-pdf-pack"),
  q("What should you do when you feel sick or injured?", ["Tell a parent, teacher, or trusted adult", "Hide it forever", "Take random medicine", "Keep playing near traffic"], 0, "Adults can help decide the safe and proper care needed.", "Week 07 \u00b7 Human Body and Health", "science-pdf-pack"),
  q("Why is drinking clean water important?", ["It helps body processes and prevents dehydration", "It replaces all food", "It makes bones disappear", "It stops breathing"], 0, "Clean water helps the body work properly and keeps us hydrated.", "Week 07 \u00b7 Human Body and Health", "science-pdf-pack"),
  q("What is an ecosystem?", ["Living and nonliving things interacting in a place", "Only one rock", "Only one toy", "A list of numbers"], 0, "An ecosystem includes living things plus nonliving parts like water, air, sunlight, and soil.", "Week 08 \u00b7 Ecosystems in the Community", "science-pdf-pack"),
  q("Which is a producer in many food chains?", ["Grass", "Snake", "Eagle", "Mushroom only"], 0, "Plants such as grass make their own food using sunlight.", "Week 08 \u00b7 Ecosystems in the Community", "science-pdf-pack"),
  q("What do consumers do in an ecosystem?", ["Eat plants or other animals", "Make sunlight", "Turn water into stone", "Create air from plastic"], 0, "Consumers get energy by eating other living things.", "Week 08 \u00b7 Ecosystems in the Community", "science-pdf-pack"),
  q("Which living thing helps break down dead matter?", ["Mushroom", "Car", "Plastic bottle", "Glass cup"], 0, "Fungi and bacteria are decomposers that return nutrients to the soil.", "Week 08 \u00b7 Ecosystems in the Community", "science-pdf-pack"),
  q("Which is a nonliving part of an ecosystem?", ["Sunlight", "Dog", "Grass", "Bird"], 0, "Sunlight is nonliving but important for plants and the whole ecosystem.", "Week 08 \u00b7 Ecosystems in the Community", "science-pdf-pack"),
  q("What can happen if too much trash is thrown into a pond?", ["Plants and animals may be harmed", "Fish get cleaner water", "The pond becomes healthier", "Nothing can change"], 0, "Pollution can poison or block the things living in the pond need.", "Week 08 \u00b7 Ecosystems in the Community", "science-pdf-pack"),
  q("Which shows a simple food chain?", ["Grass \u2192 grasshopper \u2192 frog", "Rock \u2192 pencil \u2192 chair", "Water \u2192 shoe \u2192 cloud", "Plastic \u2192 book \u2192 sunlight"], 0, "Grass is eaten by a grasshopper, and the grasshopper can be eaten by a frog.", "Week 08 \u00b7 Ecosystems in the Community", "science-pdf-pack"),
  q("Why should communities protect local ecosystems?", ["They provide clean air, water, food, and homes for living things", "They make trash useful forever", "They stop all weather", "They remove the need for plants"], 0, "Healthy ecosystems support people, animals, and plants.", "Week 08 \u00b7 Ecosystems in the Community", "science-pdf-pack"),
  q("Which instrument measures temperature?", ["Thermometer", "Ruler", "Compass", "Microscope"], 0, "A thermometer measures how hot or cold the air or an object is.", "Week 09 \u00b7 Weather and Safety", "science-pdf-pack"),
  q("Which weather condition may bring strong winds and heavy rain in the Philippines?", ["Typhoon", "Rainbow", "Calm night", "Dry notebook"], 0, "A typhoon can bring strong winds, heavy rain, flooding, and storm warnings.", "Week 09 \u00b7 Weather and Safety", "science-pdf-pack"),
  q("What should you do during lightning if possible?", ["Stay indoors and away from open areas", "Stand under a tall tree", "Swim outside", "Hold metal rods"], 0, "Staying indoors lowers the risk of being struck by lightning.", "Week 09 \u00b7 Weather and Safety", "science-pdf-pack"),
  q("Why should families listen to weather warnings?", ["To prepare and stay safe", "To ignore danger", "To make storms stronger", "To stop studying forever"], 0, "Weather warnings help people prepare before dangerous weather arrives.", "Week 09 \u00b7 Weather and Safety", "science-pdf-pack"),
  q("Which item is useful in an emergency kit?", ["Flashlight", "Broken glass", "Wet paper only", "Unlabeled chemical"], 0, "A flashlight helps people see during a power outage.", "Week 09 \u00b7 Weather and Safety", "science-pdf-pack"),
  q("Which action is safest during a flood?", ["Move to a higher safe place with an adult", "Play in floodwater", "Touch electrical outlets", "Cross strong flowing water"], 0, "Higher safe areas reduce the risk of being swept away or shocked by electricity.", "Week 09 \u00b7 Weather and Safety", "science-pdf-pack"),
  q("What does a rain gauge measure?", ["Amount of rainfall", "Wind direction", "Body temperature", "Length of a plant"], 0, "A rain gauge collects and measures rainfall.", "Week 09 \u00b7 Weather and Safety", "science-pdf-pack"),
  q("Which sign shows it may rain soon?", ["Dark clouds gathering", "A dry towel indoors", "A closed book", "A sharpened pencil"], 0, "Dark clouds can be a weather clue that rain may come.", "Week 09 \u00b7 Weather and Safety", "science-pdf-pack"),
  q("Which is an earth material?", ["Soil", "Plastic toy", "Notebook page", "Rubber slipper"], 0, "Soil is a natural earth material found on Earth's surface.", "Week 10 \u00b7 Earth Materials and Natural Resources", "science-pdf-pack"),
  q("Which natural resource is renewable?", ["Sunlight", "Coal", "Gasoline", "Metal ore"], 0, "Sunlight is renewed naturally and can be used again and again.", "Week 10 \u00b7 Earth Materials and Natural Resources", "science-pdf-pack"),
  q("Why should we conserve water?", ["Clean water is limited and important for life", "Water is useless", "Plants do not need water", "People can drink sand"], 0, "People, animals, and plants need clean water, so it should be used wisely.", "Week 10 \u00b7 Earth Materials and Natural Resources", "science-pdf-pack"),
  q("Which resource comes from trees?", ["Wood", "Glass from sand only", "Metal from ore", "Rain from clouds only"], 0, "Wood is a natural material from trees.", "Week 10 \u00b7 Earth Materials and Natural Resources", "science-pdf-pack"),
  q("What can soil help plants do?", ["Anchor roots and provide water and minerals", "Make plastic", "Pump blood", "Produce electricity by itself"], 0, "Soil supports roots and contains water and minerals plants need.", "Week 10 \u00b7 Earth Materials and Natural Resources", "science-pdf-pack"),
  q("Which action helps save natural resources?", ["Reuse and recycle materials", "Waste clean water", "Cut all trees", "Throw useful items away"], 0, "Reusing and recycling reduce the need for new raw materials.", "Week 10 \u00b7 Earth Materials and Natural Resources", "science-pdf-pack"),
  q("Why are rocks useful?", ["They can be used in buildings, roads, and tools", "They are food for people", "They breathe like animals", "They grow into birds"], 0, "Rocks are natural materials that people use for construction and other purposes.", "Week 10 \u00b7 Earth Materials and Natural Resources", "science-pdf-pack"),
  q("Which is a nonrenewable resource?", ["Coal", "Sunlight", "Wind", "Rainwater"], 0, "Coal forms very slowly, so it can run out when used too much.", "Week 10 \u00b7 Earth Materials and Natural Resources", "science-pdf-pack")
];

const MATH_LESSON_PACK_META = [
  { week: 1, topic: "Place Value of Whole Numbers" },
  { week: 2, topic: "Reading and Writing Large Numbers" },
  { week: 3, topic: "Comparing and Ordering Numbers" },
  { week: 4, topic: "Rounding Numbers" },
  { week: 5, topic: "Addition with Regrouping" },
  { week: 6, topic: "Subtraction with Regrouping" },
  { week: 7, topic: "Multiplication Facts and Strategies" },
  { week: 8, topic: "Division as Sharing and Grouping" },
  { week: 9, topic: "Fractions as Part of a Whole" },
  { week: 10, topic: "Basic Geometry and Measurement" }
];

const MATH_PDF_PACK = [
  q("In 48,326, what digit is in the thousands place?", ["8", "4", "3", "2"], 0, "In 48,326, the places are ten-thousands 4, thousands 8, hundreds 3, tens 2, ones 6.", "Week 01 · Place Value", "math-pdf-pack"),
  q("What is the value of 7 in 75,904?", ["7", "70", "7,000", "70,000"], 3, "The 7 is in the ten-thousands place, so its value is 70,000.", "Week 01 · Place Value", "math-pdf-pack"),
  q("Which number has 5 hundreds?", ["35,241", "12,506", "8,540", "90,015"], 1, "In 12,506, the digit 5 is in the hundreds place.", "Week 01 · Place Value", "math-pdf-pack"),
  q("Which expanded form equals 6,482?", ["6,000 + 400 + 80 + 2", "600 + 40 + 8 + 2", "6,000 + 800 + 40 + 2", "60,000 + 400 + 80 + 2"], 0, "6,482 is made of 6 thousands, 4 hundreds, 8 tens, and 2 ones.", "Week 01 · Place Value", "math-pdf-pack"),
  q("What number is 3,000 + 200 + 40 + 9?", ["3,249", "3,294", "32,409", "3,429"], 0, "Add the place values: 3,000 + 200 + 40 + 9 = 3,249.", "Week 01 · Place Value", "math-pdf-pack"),
  q("Which digit has the greatest value in 92,318?", ["9", "2", "3", "8"], 0, "The 9 is in the ten-thousands place, so it is worth 90,000.", "Week 01 · Place Value", "math-pdf-pack"),
  q("In 10,572, what is the value of the 5?", ["5", "50", "500", "5,000"], 2, "The 5 is in the hundreds place, so it means 500.", "Week 01 · Place Value", "math-pdf-pack"),
  q("Which number shows 4 ten-thousands, 6 hundreds, and 2 ones?", ["40,602", "46,002", "4,602", "40,620"], 0, "4 ten-thousands is 40,000, 6 hundreds is 600, and 2 ones makes 40,602.", "Week 01 · Place Value", "math-pdf-pack"),
  q("How do you read 23,415?", ["Twenty-three thousand four hundred fifteen", "Two thousand three hundred forty-five", "Twenty-three hundred fifteen", "Twenty thousand thirty-four"], 0, "23,415 is read as twenty-three thousand four hundred fifteen.", "Week 02 · Large Numbers", "math-pdf-pack"),
  q("Which is the standard form of fifty-six thousand eight hundred nine?", ["56,809", "56,089", "5,689", "568,009"], 0, "Fifty-six thousand eight hundred nine is written 56,809.", "Week 02 · Large Numbers", "math-pdf-pack"),
  q("Which number is written correctly with commas?", ["123456", "12,3456", "123,456", "1,23,456"], 2, "In standard grouping, 123,456 is written with a comma before the thousands group.", "Week 02 · Large Numbers", "math-pdf-pack"),
  q("What is 90,000 + 7,000 + 300 + 20 + 4 in standard form?", ["97,324", "90,732", "9,732", "97,034"], 0, "Combining the place values gives 97,324.", "Week 02 · Large Numbers", "math-pdf-pack"),
  q("Which word form matches 105,030?", ["One hundred five thousand thirty", "Ten thousand five hundred thirty", "One hundred fifty thousand three", "One thousand five hundred thirty"], 0, "105,030 is one hundred five thousand thirty.", "Week 02 · Large Numbers", "math-pdf-pack"),
  q("Which is the largest number?", ["54,321", "45,321", "54,231", "53,999"], 0, "54,321 has the greatest thousands and hundreds compared with the others.", "Week 02 · Large Numbers", "math-pdf-pack"),
  q("What is the numeral for eight hundred twelve thousand six?", ["812,006", "812,600", "82,106", "801,206"], 0, "Eight hundred twelve thousand six means 812,006.", "Week 02 · Large Numbers", "math-pdf-pack"),
  q("Why is place value important when reading large numbers?", ["It tells the value of each digit", "It makes digits disappear", "It changes all numbers to zero", "It is only for drawing"], 0, "Place value helps us read, write, and understand large numbers correctly.", "Week 02 · Large Numbers", "math-pdf-pack"),
  q("Which symbol makes this true: 4,582 __ 4,528?", [">", "<", "=", "+"], 0, "4,582 is greater because 582 is more than 528 after the thousands are the same.", "Week 03 · Comparing and Ordering", "math-pdf-pack"),
  q("Arrange from least to greatest: 3,450; 3,405; 3,540.", ["3,405; 3,450; 3,540", "3,540; 3,450; 3,405", "3,450; 3,540; 3,405", "3,405; 3,540; 3,450"], 0, "Compare digits from left to right to order the numbers.", "Week 03 · Comparing and Ordering", "math-pdf-pack"),
  q("Which number is between 7,200 and 7,300?", ["7,150", "7,250", "7,350", "7,030"], 1, "7,250 is greater than 7,200 and less than 7,300.", "Week 03 · Comparing and Ordering", "math-pdf-pack"),
  q("Which number is the smallest?", ["18,902", "18,209", "18,920", "19,001"], 1, "18,209 is smallest because after 18 thousand, its hundreds digit is 2.", "Week 03 · Comparing and Ordering", "math-pdf-pack"),
  q("Which statement is true?", ["6,901 < 6,109", "6,901 > 6,109", "6,901 = 6,109", "6,901 < 5,999"], 1, "6,901 is greater than 6,109 because 901 is greater than 109 after the same thousands.", "Week 03 · Comparing and Ordering", "math-pdf-pack"),
  q("To compare 25,678 and 25,768, which place should you check after ten-thousands and thousands are equal?", ["Hundreds", "Ones", "Millions", "Decimal point"], 0, "After 25 thousand is the same, compare the hundreds digits: 6 and 7.", "Week 03 · Comparing and Ordering", "math-pdf-pack"),
  q("Which list is in greatest to least order?", ["9,500; 9,050; 8,995", "8,995; 9,050; 9,500", "9,050; 9,500; 8,995", "9,500; 8,995; 9,050"], 0, "9,500 is greatest, then 9,050, then 8,995.", "Week 03 · Comparing and Ordering", "math-pdf-pack"),
  q("Which digit helps decide that 42,310 is greater than 41,999?", ["The thousands digit", "The ones digit", "The tens digit only", "The comma"], 0, "Both have 4 ten-thousands, but 42,310 has 2 thousands while 41,999 has 1 thousand.", "Week 03 · Comparing and Ordering", "math-pdf-pack"),
  q("Round 4,672 to the nearest hundred.", ["4,600", "4,700", "4,670", "5,000"], 1, "Look at the tens digit, 7. Since it is 5 or more, 4,672 rounds to 4,700.", "Week 04 · Rounding Numbers", "math-pdf-pack"),
  q("Round 38,421 to the nearest thousand.", ["38,000", "39,000", "38,400", "40,000"], 0, "The hundreds digit is 4, so 38,421 rounds down to 38,000.", "Week 04 · Rounding Numbers", "math-pdf-pack"),
  q("Which number rounds to 500 to the nearest hundred?", ["449", "451", "550", "399"], 1, "451 is closer to 500 than to 400.", "Week 04 · Rounding Numbers", "math-pdf-pack"),
  q("Round 9,950 to the nearest thousand.", ["9,000", "9,900", "10,000", "9,950"], 2, "The hundreds digit is 9, so 9,950 rounds up to 10,000.", "Week 04 · Rounding Numbers", "math-pdf-pack"),
  q("What place do you check when rounding 6,384 to the nearest ten?", ["Ones place", "Tens place", "Hundreds place", "Thousands place"], 0, "To round to the nearest ten, check the ones digit.", "Week 04 · Rounding Numbers", "math-pdf-pack"),
  q("Round 6,384 to the nearest ten.", ["6,380", "6,390", "6,300", "6,400"], 0, "The ones digit is 4, so 6,384 rounds down to 6,380.", "Week 04 · Rounding Numbers", "math-pdf-pack"),
  q("Why do we round numbers?", ["To estimate and make numbers easier to use", "To make exact answers impossible", "To remove place value", "To avoid checking work"], 0, "Rounding helps us estimate quickly and judge if answers are reasonable.", "Week 04 · Rounding Numbers", "math-pdf-pack"),
  q("A store sold 1,248 notebooks. About how many is that to the nearest hundred?", ["1,200", "1,300", "1,000", "1,248"], 0, "The tens digit is 4, so 1,248 rounds to 1,200.", "Week 04 · Rounding Numbers", "math-pdf-pack"),
  q("What is 458 + 276?", ["624", "734", "724", "736"], 1, "8 + 6 = 14, regroup 1 ten; 5 + 7 + 1 = 13; 4 + 2 + 1 = 7, so the sum is 734.", "Week 05 · Addition with Regrouping", "math-pdf-pack"),
  q("What is 3,785 + 2,496?", ["6,181", "6,281", "5,281", "6,271"], 1, "Add by place value and regroup: 3,785 + 2,496 = 6,281.", "Week 05 · Addition with Regrouping", "math-pdf-pack"),
  q("When 9 ones plus 8 ones equals 17 ones, what should you do?", ["Regroup 10 ones as 1 ten", "Write 17 in the ones place", "Ignore the 1", "Subtract instead"], 0, "In addition, 10 ones can be regrouped as 1 ten.", "Week 05 · Addition with Regrouping", "math-pdf-pack"),
  q("A shop sold 268 mangoes in the morning and 157 in the afternoon. How many were sold in all?", ["315", "425", "415", "525"], 1, "268 + 157 = 425 mangoes.", "Week 05 · Addition with Regrouping", "math-pdf-pack"),
  q("Which estimate best checks 692 + 318?", ["700 + 300 = about 1,000", "600 + 300 = about 800", "690 - 318 = about 400", "700 × 300 = about 210,000"], 0, "Rounding gives 700 + 300, so an exact answer near 1,000 is reasonable.", "Week 05 · Addition with Regrouping", "math-pdf-pack"),
  q("What is 5,678 + 4,329?", ["9,997", "10,007", "10,107", "9,907"], 1, "5,678 + 4,329 = 10,007 after regrouping ones, tens, hundreds, and thousands.", "Week 05 · Addition with Regrouping", "math-pdf-pack"),
  q("Which operation finds the total number of stickers from two groups?", ["Addition", "Subtraction", "Division only", "Rounding only"], 0, "Addition combines groups to find a total.", "Week 05 · Addition with Regrouping", "math-pdf-pack"),
  q("Why should digits be lined up by place value when adding?", ["So ones, tens, hundreds, and thousands are added correctly", "So the answer looks longer", "So regrouping is avoided forever", "So numbers become fractions"], 0, "Lining up place values keeps each digit in the correct column.", "Week 05 · Addition with Regrouping", "math-pdf-pack"),
  q("What is 804 - 267?", ["537", "547", "637", "557"], 0, "Regroup carefully: 804 - 267 = 537.", "Week 06 · Subtraction with Regrouping", "math-pdf-pack"),
  q("What is 5,000 - 2,356?", ["2,644", "3,644", "2,744", "2,544"], 0, "After regrouping across zeros, 5,000 - 2,356 = 2,644.", "Week 06 · Subtraction with Regrouping", "math-pdf-pack"),
  q("When the top ones digit is smaller than the bottom ones digit, what may be needed?", ["Regroup from the tens place", "Add a comma", "Multiply first", "Erase the problem"], 0, "Regrouping gives more ones so subtraction can be done.", "Week 06 · Subtraction with Regrouping", "math-pdf-pack"),
  q("A library had 642 books. Students borrowed 289. How many books were left?", ["353", "363", "453", "331"], 0, "642 - 289 = 353 books left.", "Week 06 · Subtraction with Regrouping", "math-pdf-pack"),
  q("Which expression means “find how many more”?", ["Subtract the smaller from the larger", "Multiply both numbers", "Add zero only", "Divide by ten always"], 0, "Comparison problems often use subtraction to find the difference.", "Week 06 · Subtraction with Regrouping", "math-pdf-pack"),
  q("What is 3,405 - 1,728?", ["1,677", "1,777", "2,677", "1,687"], 0, "Regroup from the thousands and hundreds as needed: the difference is 1,677.", "Week 06 · Subtraction with Regrouping", "math-pdf-pack"),
  q("How can you check a subtraction answer?", ["Add the difference to the number subtracted", "Subtract again without looking", "Round only and stop", "Use the largest digit only"], 0, "If difference + subtrahend = minuend, the subtraction is likely correct.", "Week 06 · Subtraction with Regrouping", "math-pdf-pack"),
  q("What is 900 - 458?", ["442", "452", "542", "432"], 0, "After regrouping, 900 - 458 = 442.", "Week 06 · Subtraction with Regrouping", "math-pdf-pack"),
  q("What is 7 × 8?", ["54", "56", "64", "72"], 1, "7 groups of 8 make 56.", "Week 07 · Multiplication Facts", "math-pdf-pack"),
  q("Which expression shows 4 groups of 9?", ["4 + 9", "4 × 9", "9 - 4", "9 ÷ 4"], 1, "Multiplication can show equal groups, so 4 groups of 9 is 4 × 9.", "Week 07 · Multiplication Facts", "math-pdf-pack"),
  q("What is 6 × 12?", ["62", "72", "66", "84"], 1, "6 times 12 equals 72.", "Week 07 · Multiplication Facts", "math-pdf-pack"),
  q("Which strategy can help solve 9 × 6?", ["Think 10 × 6 minus 6", "Guess any number", "Subtract 9 from 6", "Count only ones forever"], 0, "10 × 6 is 60, and 60 - 6 = 54.", "Week 07 · Multiplication Facts", "math-pdf-pack"),
  q("A box has 8 pencils. How many pencils are in 5 boxes?", ["13", "35", "40", "45"], 2, "5 groups of 8 pencils make 40 pencils.", "Week 07 · Multiplication Facts", "math-pdf-pack"),
  q("Which fact is related to 3 × 7 = 21?", ["7 × 3 = 21", "21 + 7 = 3", "7 - 3 = 21", "3 ÷ 7 = 21"], 0, "The order of factors can change, but the product stays the same.", "Week 07 · Multiplication Facts", "math-pdf-pack"),
  q("What is the product of 9 and 4?", ["13", "36", "32", "45"], 1, "The product is the answer in multiplication; 9 × 4 = 36.", "Week 07 · Multiplication Facts", "math-pdf-pack"),
  q("Which array shows 3 × 5?", ["3 rows with 5 in each row", "3 + 5 only", "5 take away 3", "3 divided into 5 parts"], 0, "An array for 3 × 5 can have 3 rows of 5 objects.", "Week 07 · Multiplication Facts", "math-pdf-pack"),
  q("What is 32 ÷ 4?", ["6", "7", "8", "9"], 2, "32 shared into 4 equal groups gives 8 in each group.", "Week 08 · Division Sharing and Grouping", "math-pdf-pack"),
  q("If 24 candies are shared equally among 6 children, how many candies does each child get?", ["3", "4", "5", "6"], 1, "24 ÷ 6 = 4 candies each.", "Week 08 · Division Sharing and Grouping", "math-pdf-pack"),
  q("Which expression means 48 split into groups of 8?", ["48 + 8", "48 - 8", "48 × 8", "48 ÷ 8"], 3, "Division is used to split into equal groups.", "Week 08 · Division Sharing and Grouping", "math-pdf-pack"),
  q("What is 45 ÷ 5?", ["7", "8", "9", "10"], 2, "Because 5 × 9 = 45, 45 ÷ 5 = 9.", "Week 08 · Division Sharing and Grouping", "math-pdf-pack"),
  q("Which multiplication fact helps solve 63 ÷ 7?", ["7 × 9 = 63", "7 + 9 = 16", "63 - 7 = 56", "9 - 7 = 2"], 0, "Division and multiplication are related facts.", "Week 08 · Division Sharing and Grouping", "math-pdf-pack"),
  q("A teacher puts 30 pupils into 5 equal teams. How many pupils are in each team?", ["5", "6", "7", "8"], 1, "30 ÷ 5 = 6 pupils per team.", "Week 08 · Division Sharing and Grouping", "math-pdf-pack"),
  q("What does the quotient mean?", ["The answer in division", "The answer in addition", "The number being rounded", "The shape of an angle"], 0, "The quotient is the result of a division problem.", "Week 08 · Division Sharing and Grouping", "math-pdf-pack"),
  q("What is 40 ÷ 10?", ["3", "4", "5", "10"], 1, "40 shared into groups of 10 gives 4 groups.", "Week 08 · Division Sharing and Grouping", "math-pdf-pack"),
  q("Which fraction shows 1 shaded part out of 4 equal parts?", ["1/4", "4/1", "3/4", "1/3"], 0, "The numerator 1 tells shaded parts, and denominator 4 tells total equal parts.", "Week 09 · Fractions as Part of a Whole", "math-pdf-pack"),
  q("What does the denominator tell?", ["The total number of equal parts", "Only the shaded parts", "The answer to addition", "The place value"], 0, "The denominator shows how many equal parts make the whole.", "Week 09 · Fractions as Part of a Whole", "math-pdf-pack"),
  q("Which fraction is equal to one-half?", ["2/4", "1/3", "3/5", "4/5"], 0, "2 out of 4 equal parts is the same amount as 1 out of 2 equal parts.", "Week 09 · Fractions as Part of a Whole", "math-pdf-pack"),
  q("If a pizza is cut into 8 equal slices and 3 are eaten, what fraction was eaten?", ["3/8", "8/3", "5/8", "3/5"], 0, "3 eaten slices out of 8 total equal slices is 3/8.", "Week 09 · Fractions as Part of a Whole", "math-pdf-pack"),
  q("Which fraction is greater?", ["3/4", "1/4", "They are equal", "0/4"], 0, "With the same denominator, the larger numerator means the larger fraction.", "Week 09 · Fractions as Part of a Whole", "math-pdf-pack"),
  q("What fraction of a whole is shaded if all 6 of 6 equal parts are shaded?", ["0/6", "1/6", "6/6", "5/6"], 2, "6/6 means all equal parts are shaded, or one whole.", "Week 09 · Fractions as Part of a Whole", "math-pdf-pack"),
  q("Which example shows a fraction in real life?", ["Half of a sandwich", "A whole pencil only", "A page number", "A street name"], 0, "Half of a sandwich describes a part of a whole.", "Week 09 · Fractions as Part of a Whole", "math-pdf-pack"),
  q("In 5/8, what is the numerator?", ["5", "8", "13", "3"], 0, "The numerator is the top number, which is 5.", "Week 09 · Fractions as Part of a Whole", "math-pdf-pack"),
  q("How many sides does a quadrilateral have?", ["3", "4", "5", "6"], 1, "A quadrilateral is a polygon with 4 sides.", "Week 10 · Geometry and Measurement", "math-pdf-pack"),
  q("Which shape has three sides?", ["Triangle", "Rectangle", "Pentagon", "Circle"], 0, "A triangle has 3 sides.", "Week 10 · Geometry and Measurement", "math-pdf-pack"),
  q("What is the perimeter of a square with side 6 cm?", ["12 cm", "18 cm", "24 cm", "36 cm"], 2, "A square has 4 equal sides, so 4 × 6 = 24 cm.", "Week 10 · Geometry and Measurement", "math-pdf-pack"),
  q("Which tool is best for measuring length?", ["Ruler", "Thermometer", "Clock", "Cup"], 0, "A ruler measures length, such as centimeters or inches.", "Week 10 · Geometry and Measurement", "math-pdf-pack"),
  q("How many centimeters are in 1 meter?", ["10", "100", "500", "1000"], 1, "1 meter is equal to 100 centimeters.", "Week 10 · Geometry and Measurement", "math-pdf-pack"),
  q("Which angle is exactly 90 degrees?", ["Right angle", "Acute angle", "Obtuse angle", "Straight angle"], 0, "A right angle measures exactly 90 degrees.", "Week 10 · Geometry and Measurement", "math-pdf-pack"),
  q("What is the perimeter of a rectangle with length 8 cm and width 3 cm?", ["11 cm", "22 cm", "24 cm", "64 cm"], 1, "Perimeter is 8 + 3 + 8 + 3 = 22 cm.", "Week 10 · Geometry and Measurement", "math-pdf-pack"),
  q("Which unit is better for measuring the mass of a school bag?", ["Kilograms", "Centimeters", "Liters", "Seconds"], 0, "Kilograms measure mass or weight of heavier objects like a school bag.", "Week 10 · Geometry and Measurement", "math-pdf-pack")
];

const SUBJECT_LABELS = { science: 'Science', math: 'Math', english: 'English' };
const STOP_WORDS = new Set([
  'about','after','again','also','because','before','being','below','between','could','every','first','from','have','into','more','most','only','other','same','should','that','their','there','these','they','this','those','through','under','very','what','when','where','which','while','with','would',
  'ang','mga','nga','kay','ug','sa','si','ni','kang','para','aron','mao','kini','kana','niini','ana','unsa','ngano','giunsa','diha','adto','gikan','kung','apan','pero','dili','wala','naa','pod','pud','nato','natu','inyong','imong','ilang','iyang'
]);


const BOSS_QUESTIONS = {
  science: [
    q('A wet shirt dries under the Sun. Which pair best explains what happens?', ['Heat helps liquid water evaporate into water vapor', 'The shirt absorbs sunlight and becomes heavier', 'Water changes into soil inside the cloth', 'The wind turns water into a solid'], 0, 'Heat from the Sun can help liquid water evaporate into water vapor. This is tricky because the shirt may still look the same, but water leaves it.', 'Weather and Matter', 'boss'),
    q('A plant kept near a window grows better than the same plant in a dark box. What is the best explanation?', ['The plant near the window receives light needed to make food', 'The dark box gives more air than the window', 'Plants grow only because of soil color', 'The window makes roots unnecessary'], 0, 'Plants need sunlight, water, and air. Light helps leaves make food for the plant.', 'Plants', 'boss'),
    q('Which observation is evidence, not just a guess?', ['The magnet picked up three iron clips', 'The magnet is probably magical', 'The clips wanted to move', 'The table looks happy'], 0, 'Evidence is based on what was observed or measured. Counting iron clips is an observation.', 'Science Process Skills', 'boss')
  ],
  math: [
    q('Which number has a 7 in the thousands place?', ['27,415', '72,415', '24,715', '24,175'], 0, 'In 27,415, the digits are 2 ten-thousands, 7 thousands, 4 hundreds, 1 ten, and 5 ones.', 'Place Value', 'boss'),
    q('A store had 1,204 notebooks. It sold 487. About how many notebooks are left?', ['About 700', 'About 1,700', 'About 500', 'About 2,000'], 0, 'Estimate 1,204 as about 1,200 and 487 as about 500. 1,200 - 500 is about 700.', 'Subtraction and Estimation', 'boss'),
    q('Mia shaded 3 equal parts out of 8. Which statement is true?', ['The fraction is 3/8 because 3 of 8 equal parts are shaded', 'The fraction is 8/3 because 8 parts are shaded', 'The fraction is 5/8 because 5 parts are unshaded', 'The fraction is 3/5 because 3 parts are shaded'], 0, 'The numerator tells shaded parts, and the denominator tells total equal parts.', 'Fractions', 'boss')
  ],
  english: [
    q('Which sentence best shows both a feeling and a text clue?', ['Ana felt worried because her hands shook before the contest.', 'Ana was a character.', 'The contest had many letters.', 'Worried means happy all the time.'], 0, 'A good answer names the feeling and gives evidence from the text, such as shaking hands.', 'Character Traits and Feelings', 'boss'),
    q('Which is a compound sentence?', ['The rain stopped, and the children went outside.', 'After the rain stopped.', 'The happy children outside.', 'Because the rain stopped early.'], 0, 'A compound sentence joins two complete thoughts. Both sides can stand as sentences.', 'Simple and Compound Sentences', 'boss'),
    q('Read this: “Ben forgot his umbrella, so his books got wet.” Which is the effect?', ['His books got wet', 'Ben forgot his umbrella', 'Ben owns books', 'The sentence has a comma'], 0, 'The effect is what happened because of the cause. The books got wet because Ben forgot his umbrella.', 'Cause and Effect', 'boss')
  ]
};

const GENERIC_WRONG_CHOICES = {
  science: ['It is only a decoration.', 'It happens with no cause.', 'It is not related to living things.', 'It is always exactly the same everywhere.'],
  math: ['It means the numbers are ignored.', 'It is solved by guessing only.', 'It has no pattern or rule.', 'It is always equal to zero.'],
  english: ['It is not part of the sentence.', 'It always means the opposite.', 'It is only used for numbers.', 'It does not change the meaning.']
};

const GENERIC_KEYWORDS = {
  science: ['energy', 'matter', 'plant', 'habitat', 'gravity', 'weather', 'organism', 'water'],
  math: ['sum', 'difference', 'product', 'quotient', 'fraction', 'pattern', 'perimeter', 'value'],
  english: ['noun', 'verb', 'adjective', 'adverb', 'sentence', 'punctuation', 'synonym', 'pronoun']
};

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
  if (confirm('Reset saved coins, XP, streak, and scores on this device? Your Knowledge DB will be kept.')) {
    const keptKnowledge = state.knowledgeBank || [];
    localStorage.removeItem(STORAGE_KEY);
    state = loadState();
    state.knowledgeBank = keptKnowledge;
    saveState();
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
    dailyDone: false,
    knowledgeBank: [],
    aiSettings: { variety: 4 },
    correctCombo: 0,
    bestCombo: 0,
    superMode: false,
    bossesDefeated: 0,
    soundOn: true
  };
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    const merged = { ...fallback, ...saved };
    merged.subjectStats = { ...fallback.subjectStats, ...(saved.subjectStats || {}) };
    merged.knowledgeBank = Array.isArray(saved.knowledgeBank) ? saved.knowledgeBank : [];
    merged.aiSettings = { ...fallback.aiSettings, ...(saved.aiSettings || {}) };
    merged.correctCombo = Number(saved.correctCombo || 0);
    merged.bestCombo = Number(saved.bestCombo || 0);
    merged.superMode = Boolean(saved.superMode && merged.correctCombo >= 10);
    merged.bossesDefeated = Number(saved.bossesDefeated || 0);
    merged.soundOn = saved.soundOn !== false;
    return merged;
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
  const titles = { home: 'Learning Adventure', quest: 'Fight Mode', practice: 'Daily Practice', knowledge: 'Knowledge Database', progress: 'Progress Report' };
  screenTitle.textContent = titles[screen] || 'SmartQuest PH';
  if (screen === 'home') renderHome();
  if (screen === 'quest') renderQuestSetup();
  if (screen === 'practice') renderPractice();
  if (screen === 'knowledge') renderKnowledge();
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
      ${subjectCard('english', 'English', 'Grade 4 Week 1-10', '📖')}
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
        <span class="chip">🧠 Offline AI</span>
        <span class="chip">🔥 Correct streak x${state.correctCombo || 0}</span>
        <span class="chip">${state.superMode ? '⚡ Super mode active' : '⭐ Boss chance 5%'}</span>
        <span class="chip">📖 English Week 1-10</span>
      </div>
    </section>

    <section class="card">
      <h2>Knowledge Database</h2>
      <p class="muted">Paste your lesson notes, reviewer text, or parent-made context. The local AI booster turns it into varied quizzes without API tokens.</p>
      <div class="grid two">
        <div class="stat"><strong>${state.knowledgeBank.length}</strong><span>Saved notes</span></div>
        <div class="stat"><strong>${countGeneratedKnowledgeQuestions()}</strong><span>AI quiz pool</span></div>
      </div>
      <div class="spacer"></div>
      <button class="btn full secondary" id="openKnowledgeBtn">＋ Add Knowledge</button>
    </section>
  `;
  document.getElementById('saveNameBtn').onclick = () => {
    state.player = document.getElementById('playerName').value.trim() || 'Player';
    saveState();
    showToast('Player saved');
  };
  document.querySelectorAll('.subject-card[data-subject]').forEach(card => card.onclick = () => startSession(card.dataset.subject, 'medium', 10, true));
  document.getElementById('openKnowledgeBtn').onclick = () => navigate('knowledge');
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
      <p class="muted">Offline AI pool available now: ${countGeneratedKnowledgeQuestions()} generated questions from your Knowledge DB.</p>
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
      <h2>Question banks</h2>
      <p>This prototype includes ${QUESTIONS.science.length + SCIENCE_PDF_PACK.length} Science questions, ${QUESTIONS.math.length + MATH_PDF_PACK.length} Math questions, and ${QUESTIONS.english.length + ENGLISH_PDF_PACK.length} English questions from the built-in Grade 4 packs. Your Knowledge DB adds ${countGeneratedKnowledgeQuestions()} offline AI-generated questions.</p>
    </section>
  `;
}

function startSession(subject, difficulty, count, battle, daily = false) {
  const pool = shuffle(getQuestionPool(subject));
  if (!pool.length) {
    showToast('Add questions or knowledge first');
    return;
  }

  const bossEncounter = Boolean(battle && !daily && Math.random() < 0.05);
  const selected = pool.slice(0, Math.min(count, pool.length));
  const bossQuestion = bossEncounter ? getBossQuestion(subject) : null;
  if (bossQuestion) {
    const remaining = selected.filter(item => !sameText(item.text, bossQuestion.text));
    selected.splice(0, selected.length, bossQuestion, ...remaining.slice(0, Math.max(0, count - 1)));
  }

  session = {
    subject,
    difficulty,
    questions: selected,
    index: 0,
    score: 0,
    wrong: [],
    battle,
    daily,
    isBoss: bossEncounter,
    bossName: bossEncounter ? bossName(subject) : null,
    playerHp: bossEncounter ? 120 : 100,
    monsterHp: bossEncounter ? 150 : 100,
    maxPlayerHp: bossEncounter ? 120 : 100,
    maxMonsterHp: bossEncounter ? 150 : 100,
    usedHint: false,
    usedFifty: false,
    locked: false
  };
  renderQuestion();
  if (bossEncounter) {
    setTimeout(() => {
      showToast(`⚠️ Boss encounter: ${session.bossName}!`);
      playComboSound('boss');
    }, 250);
  }
}

function renderQuestion() {
  const item = session.questions[session.index];
  const progress = Math.round((session.index / session.questions.length) * 100);
  const combo = state.correctCombo || 0;
  app.innerHTML = `
    ${session.battle ? battleStage() : ''}
    <section class="card">
      <div class="row" style="justify-content:space-between;align-items:flex-start">
        <span class="chip">${capitalize(session.subject)} · ${item.topic}</span>
        <span class="chip">${session.index + 1}/${session.questions.length}</span>
      </div>
      <div class="row wrap combo-row">
        <span class="combo-chip">🔥 Correct streak x${combo}</span>
        <span class="combo-chip">🏆 Best x${state.bestCombo || 0}</span>
        ${state.superMode ? '<span class="combo-chip super-chip">⚡ Super Saiyan Mode</span>' : '<span class="combo-chip">⭐ Super at x10</span>'}
        ${session.isBoss ? '<span class="combo-chip boss-chip">👑 Boss Question</span>' : ''}
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
  const combo = state.correctCombo || 0;
  const playerPct = Math.round((session.playerHp / (session.maxPlayerHp || 100)) * 100);
  const monsterPct = Math.round((session.monsterHp / (session.maxMonsterHp || 100)) * 100);
  const characterClass = `character ${state.superMode ? 'super-saiyan' : ''}`;
  const monsterClass = `monster ${session.isBoss ? 'boss-monster' : ''}`;
  return `
    <section class="card battle-card ${session.isBoss ? 'boss-card' : ''}">
      <div class="battle-status row wrap">
        <span class="combo-chip">🔥 Combo x${combo}</span>
        <span class="combo-chip">Next: ${comboNextLabel(combo)}</span>
        ${session.isBoss ? '<span class="combo-chip boss-chip">👑 5% Boss Encounter</span>' : ''}
      </div>
      <div class="battle-stage ${state.superMode ? 'super-stage' : ''}" id="battleStage">
        <div class="avatar ${state.superMode ? 'super-avatar' : ''}" id="avatar">
          <div class="${characterClass}"><span class="mouth"></span></div>
          <div class="hp"><div id="playerHp" style="width:${playerPct}%"></div></div>
          <strong>${escapeHtml(state.player)}</strong>
        </div>
        <div class="${monsterClass}" id="monster">
          <div class="monster-body"><span class="horn left"></span><span class="horn right"></span><span class="mouth"></span></div>
          <div class="hp"><div id="monsterHp" style="width:${monsterPct}%"></div></div>
          <strong>${session.isBoss ? escapeHtml(session.bossName) : monsterName(session.subject)}</strong>
        </div>
      </div>
    </section>
  `;
}

function answerQuestion(choiceIndex) {
  if (session.locked) return;
  initAudio();
  session.locked = true;
  const item = session.questions[session.index];
  const buttons = [...document.querySelectorAll('.option')];
  buttons.forEach(btn => btn.disabled = true);
  buttons[item.answer].classList.add('correct');
  const correct = choiceIndex === item.answer;
  if (!correct) buttons[choiceIndex].classList.add('wrong');

  if (correct) {
    session.score++;
    state.correctCombo = (state.correctCombo || 0) + 1;
    state.bestCombo = Math.max(state.bestCombo || 0, state.correctCombo);
    const effect = comboEffect(state.correctCombo);
    if (state.correctCombo >= 10) {
      state.superMode = true;
      addBadge('Super Streak x10');
    }
    animateBattle('monster', effect);
    const damage = calculateDamage(effect);
    session.monsterHp = Math.max(0, session.monsterHp - damage);
    updateHpBars();
    saveState();
    showToast(`Correct streak x${state.correctCombo}: ${effect.label}`);
    setTimeout(nextQuestion, effect.wait || 820);
  } else {
    session.wrong.push(item);
    state.correctCombo = 0;
    state.superMode = false;
    saveState();
    animateBattle('avatar', { type: 'enemy-hit', label: 'Combo reset', sound: 'wrong', wait: 650 });
    session.playerHp = Math.max(0, session.playerHp - (session.isBoss ? 30 : (session.difficulty === 'hard' ? 28 : 20)));
    updateHpBars();
    showToast('Wrong answer. Combo reset to x0');
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
  const bossBonus = session.isBoss && won ? 35 : 0;
  const xpEarned = session.score * 10 + (won ? 25 : 0) + bossBonus;
  const coinsEarned = session.score * 3 + (won ? 10 : 0) + (session.isBoss && won ? 18 : 0);
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
  if (session.isBoss && won) {
    state.bossesDefeated = (state.bossesDefeated || 0) + 1;
    addBadge('Boss Breaker');
  }
  if (percent === 100) addBadge('Perfect Quest');
  if (state.xp >= 500) addBadge('500 XP Learner');
  state.leaderboard.push({ name: state.player, score: percent, subject: session.subject, combo: state.correctCombo || 0, date: new Date().toLocaleDateString() });
  state.leaderboard = state.leaderboard.sort((a,b) => b.score - a.score).slice(0, 10);
  saveState();

  app.innerHTML = `
    <section class="card hero center">
      <p class="big">${won ? 'Victory!' : 'Good try!'}</p>
      <p>${state.player} scored ${session.score}/${total} (${percent}%).</p>
      <div class="grid two">
        <div class="stat"><strong>+${xpEarned}</strong><span>XP earned</span></div>
        <div class="stat"><strong>+${coinsEarned}</strong><span>Coins earned</span></div>
        <div class="stat"><strong>x${state.correctCombo || 0}</strong><span>Current streak</span></div>
        <div class="stat"><strong>x${state.bestCombo || 0}</strong><span>Best streak</span></div>
      </div>
      ${session.isBoss ? `<p class="muted">${won ? 'Boss defeated! Extra rewards earned.' : 'Boss survived this time.'}</p>` : ''}
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


function renderKnowledge() {
  const bank = state.knowledgeBank || [];
  const subjectCounts = Object.keys(SUBJECT_LABELS).map(subject => {
    const saved = bank.filter(item => item.subject === subject).length;
    const generated = countGeneratedKnowledgeQuestions(subject);
    return `<div class="stat"><strong>${generated}</strong><span>${SUBJECT_LABELS[subject]} AI Qs · ${saved} notes</span></div>`;
  }).join('');

  app.innerHTML = `
    <section class="card hero ai-hero">
      <p class="big">Offline AI Knowledge DB</p>
      <p>Paste context once. SmartQuest stores it on this device and creates varied quiz questions without API keys, tokens, or internet.</p>
    </section>

    <section class="card">
      <h2>Add lesson context</h2>
      <p class="muted">Paste short reviewer notes, textbook paragraphs, vocabulary lists, or your own explanations. Use clear sentences for better questions.</p>
      <label>Subject</label>
      <select class="input" id="kbSubject">
        <option value="science">Science</option>
        <option value="math">Math</option>
        <option value="english">English</option>
      </select>
      <div class="spacer"></div>
      <label>Topic / title</label>
      <input class="input" id="kbTitle" maxlength="42" placeholder="Example: Plants, Fractions, Adverbs" />
      <div class="spacer"></div>
      <label>Context</label>
      <textarea class="input textarea" id="kbText" rows="8" placeholder="Paste lesson context here. Example: Plants need sunlight, water, and air to make food. Roots absorb water from the soil."></textarea>
      <div class="row wrap" style="margin-top:14px">
        <button class="btn" id="saveKnowledgeBtn">💾 Save to DB</button>
        <button class="btn secondary" id="previewAiBtn">🧠 Preview AI Quiz</button>
      </div>
      <p class="micro muted">Note: This is a token-free local quiz generator, not a cloud LLM. It uses keyword extraction, cloze questions, summaries, and distractor templates.</p>
    </section>

    <section class="card hidden" id="aiPreviewCard">
      <h2>AI quiz preview</h2>
      <div id="aiPreview"></div>
    </section>

    <section class="card">
      <h2>Built-in lesson packs</h2>
      <p class="muted">Science has ${SCIENCE_PDF_PACK.length} ready questions, Math has ${MATH_PDF_PACK.length} ready questions, and English has ${ENGLISH_PDF_PACK.length} ready questions across first-term topics.</p>
      <h3>Science</h3>
      <div class="row wrap">
        ${SCIENCE_LESSON_PACK_META.map(item => `<span class="chip">W${String(item.week).padStart(2, '0')} ${escapeHtml(item.topic)}</span>`).join('')}
      </div>
      <div class="spacer"></div>
      <h3>Math</h3>
      <div class="row wrap">
        ${MATH_LESSON_PACK_META.map(item => `<span class="chip">W${String(item.week).padStart(2, '0')} ${escapeHtml(item.topic)}</span>`).join('')}
      </div>
      <div class="spacer"></div>
      <h3>English</h3>
      <div class="row wrap">
        ${ENGLISH_LESSON_PACK_META.map(item => `<span class="chip">W${String(item.week).padStart(2, '0')} ${escapeHtml(item.topic)}</span>`).join('')}
      </div>
    </section>

    <section class="card">
      <h2>Database power</h2>
      <div class="grid two">${subjectCounts}</div>
    </section>

    <section class="card">
      <div class="row" style="justify-content:space-between;align-items:flex-start">
        <div>
          <h2>Saved Knowledge</h2>
          <p class="muted">These notes are mixed into Fight and Practice questions automatically.</p>
        </div>
        ${bank.length ? '<button class="btn ghost" id="clearKnowledgeBtn">Clear</button>' : ''}
      </div>
      <div class="knowledge-list">
        ${bank.length ? bank.map(renderKnowledgeItem).join('') : '<p class="muted">No saved notes yet. Paste your first lesson context above.</p>'}
      </div>
    </section>
  `;

  document.getElementById('saveKnowledgeBtn').onclick = saveKnowledgeFromForm;
  document.getElementById('previewAiBtn').onclick = previewKnowledgeFromForm;
  document.querySelectorAll('[data-delete-knowledge]').forEach(btn => btn.onclick = () => deleteKnowledge(btn.dataset.deleteKnowledge));
  document.querySelectorAll('[data-fight-subject]').forEach(btn => btn.onclick = () => startSession(btn.dataset.fightSubject, 'medium', 10, true));
  const clearBtn = document.getElementById('clearKnowledgeBtn');
  if (clearBtn) clearBtn.onclick = clearKnowledgeBank;
}

function renderKnowledgeItem(item) {
  const date = item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'Saved';
  const generated = buildKnowledgeQuestionsFromItems([item], item.subject).length;
  return `
    <div class="knowledge-item">
      <div>
        <strong>${escapeHtml(item.title || `${capitalize(item.subject)} Note`)}</strong>
        <p class="muted">${capitalize(item.subject)} · ${item.factCount || extractFacts(item.content).length} facts · ${generated} AI questions · ${date}</p>
        <small>${escapeHtml(shortenText(item.content, 140))}</small>
      </div>
      <div class="row wrap knowledge-actions">
        <button class="btn secondary" data-fight-subject="${item.subject}">Fight</button>
        <button class="btn ghost" data-delete-knowledge="${item.id}">Delete</button>
      </div>
    </div>
  `;
}

function saveKnowledgeFromForm() {
  const subject = document.getElementById('kbSubject').value;
  const title = document.getElementById('kbTitle').value.trim() || `${capitalize(subject)} Notes`;
  const content = document.getElementById('kbText').value.trim();
  const facts = extractFacts(content);
  if (content.length < 20 || facts.length < 1) return showToast('Paste clearer lesson context first');

  state.knowledgeBank = state.knowledgeBank || [];
  state.knowledgeBank.unshift({
    id: `kb_${Date.now()}_${Math.random().toString(16).slice(2)}`,
    subject,
    title,
    content,
    factCount: facts.length,
    createdAt: new Date().toISOString()
  });
  saveState();
  showToast(`Saved ${facts.length} learning points`);
  renderKnowledge();
}

function previewKnowledgeFromForm() {
  const subject = document.getElementById('kbSubject').value;
  const title = document.getElementById('kbTitle').value.trim() || `${capitalize(subject)} Preview`;
  const content = document.getElementById('kbText').value.trim();
  const facts = extractFacts(content);
  if (content.length < 20 || facts.length < 1) return showToast('Paste context to preview');

  const tempItem = { id: 'preview', subject, title, content, factCount: facts.length, createdAt: new Date().toISOString() };
  const sample = buildKnowledgeQuestionsFromItems([tempItem], subject).slice(0, 5);
  const previewCard = document.getElementById('aiPreviewCard');
  const preview = document.getElementById('aiPreview');
  previewCard.classList.remove('hidden');
  preview.innerHTML = sample.map((item, index) => `
    <div class="preview-question">
      <strong>${index + 1}. ${escapeHtml(item.text)}</strong>
      <ol type="A">
        ${item.choices.map((choice, i) => `<li class="${i === item.answer ? 'answer' : ''}">${escapeHtml(choice)}</li>`).join('')}
      </ol>
      <p class="muted">Flashcard: ${escapeHtml(item.explanation)}</p>
    </div>
  `).join('') || '<p class="muted">Add more complete sentences to create questions.</p>';
}

function deleteKnowledge(id) {
  if (!confirm('Delete this saved lesson context?')) return;
  state.knowledgeBank = (state.knowledgeBank || []).filter(item => item.id !== id);
  saveState();
  showToast('Knowledge removed');
  renderKnowledge();
}

function clearKnowledgeBank() {
  if (!confirm('Clear all saved Knowledge DB notes?')) return;
  state.knowledgeBank = [];
  saveState();
  showToast('Knowledge DB cleared');
  renderKnowledge();
}

function getQuestionPool(subject) {
  return [ ...(QUESTIONS[subject] || []), ...getBuiltInQuestionPack(subject), ...buildKnowledgeQuestions(subject) ];
}

function getBuiltInQuestionPack(subject) {
  if (subject === 'science') return SCIENCE_PDF_PACK;
  if (subject === 'math') return MATH_PDF_PACK;
  if (subject === 'english') return ENGLISH_PDF_PACK;
  return [];
}

function countGeneratedKnowledgeQuestions(subject = null) {
  if (subject) return buildKnowledgeQuestions(subject).length;
  return Object.keys(SUBJECT_LABELS).reduce((sum, key) => sum + buildKnowledgeQuestions(key).length, 0);
}

function buildKnowledgeQuestions(subject) {
  const items = (state.knowledgeBank || []).filter(item => item.subject === subject);
  return buildKnowledgeQuestionsFromItems(items, subject);
}

function buildKnowledgeQuestionsFromItems(items, subject) {
  const facts = [];
  items.forEach(item => {
    extractFacts(item.content).slice(0, 30).forEach((text, index) => {
      facts.push({
        text,
        subject: item.subject || subject,
        topic: item.title || `${capitalize(subject)} Note`,
        index
      });
    });
  });

  const allTopics = unique(items.map(item => item.title).filter(Boolean));
  const allFacts = facts.map(f => f.text);
  const allKeywords = unique(facts.map(f => extractKeyword(f.text)).filter(Boolean));
  const questions = [];

  facts.forEach((fact, factIndex) => {
    const topic = fact.topic;
    const relatedFacts = allFacts.filter(text => text !== fact.text);
    const keywords = allKeywords.filter(word => word && !sameText(word, extractKeyword(fact.text)));
    const definition = parseDefinition(fact.text);

    questions.push(makeQuestion(
      `Which statement matches your note about ${topic}?`,
      shortenText(fact.text, 92),
      falseChoicesFromFact(fact.text, subject, keywords),
      fact.text,
      topic
    ));

    const keyword = extractKeyword(fact.text);
    if (keyword) {
      questions.push(makeQuestion(
        `Complete the note: ${escapeForQuestion(fact.text, keyword)}`,
        keyword,
        keywords.concat(GENERIC_KEYWORDS[subject] || GENERIC_KEYWORDS.science),
        fact.text,
        topic
      ));
    }

    questions.push(makeQuestion(
      `What is the best topic for this note: “${shortenText(fact.text, 76)}”?`,
      topic,
      allTopics.filter(t => t !== topic).concat(['Unrelated detail', 'Guessing only', 'Random example', 'No main idea']),
      `This note belongs under ${topic}. ${fact.text}`,
      topic
    ));

    if (definition) {
      questions.push(makeQuestion(
        `Based on your notes, what does “${definition.term}” mean?`,
        shortenText(definition.meaning, 88),
        facts.map(f => parseDefinition(f.text)?.meaning).filter(Boolean).map(text => shortenText(text, 88)).concat(GENERIC_WRONG_CHOICES[subject] || []),
        fact.text,
        topic
      ));
    } else if (factIndex % 2 === 0) {
      questions.push(makeQuestion(
        `Which idea should you remember from ${topic}?`,
        shortenText(fact.text, 92),
        falseChoicesFromFact(fact.text, subject, keywords),
        fact.text,
        topic
      ));
    }
  });

  return uniqueQuestions(questions).slice(0, 120);
}


function falseChoicesFromFact(text, subject, keywords = []) {
  const fact = shortenText(text, 92);
  const choices = [];
  const generic = GENERIC_WRONG_CHOICES[subject] || GENERIC_WRONG_CHOICES.science;

  const negated = negateFact(fact);
  if (negated && !sameText(negated, fact)) choices.push(negated);

  const keyword = extractKeyword(fact);
  const replacement = keywords.find(word => keyword && !sameText(word, keyword)) || (GENERIC_KEYWORDS[subject] || [])[0];
  if (keyword && replacement) choices.push(shortenText(fact.replace(new RegExp(escapeRegExp(keyword), 'i'), replacement), 92));

  const numberChanged = fact.replace(/\d+/, match => String(Number(match) + 1));
  if (!sameText(numberChanged, fact)) choices.push(numberChanged);

  return unique(choices.concat(generic, ['It is not supported by the saved note', 'It is an unrelated idea']));
}

function negateFact(text) {
  const rules = [
    [/\bneeds\b/i, 'does not need'],
    [/\bneed\b/i, 'do not need'],
    [/\bhelps\b/i, 'does not help'],
    [/\bhelp\b/i, 'do not help'],
    [/\buses\b/i, 'does not use'],
    [/\buse\b/i, 'do not use'],
    [/\babsorbs\b/i, 'does not absorb'],
    [/\bmake\b/i, 'cannot make'],
    [/\bmakes\b/i, 'does not make'],
    [/\bcan\b/i, 'cannot'],
    [/\bis\b/i, 'is not'],
    [/\bare\b/i, 'are not'],
    [/\bhas\b/i, 'does not have'],
    [/\bhave\b/i, 'do not have']
  ];
  for (const [pattern, replacement] of rules) {
    if (pattern.test(text)) return shortenText(text.replace(pattern, replacement), 92);
  }
  return `It is false that ${text.charAt(0).toLowerCase()}${text.slice(1)}`;
}

function makeQuestion(text, correct, wrongs, explanation, topic) {
  const cleanCorrect = normalizeChoice(correct);
  let choices = unique([cleanCorrect, ...wrongs.map(normalizeChoice).filter(Boolean)])
    .filter(choice => choice && !sameText(choice, cleanCorrect))
    .slice(0, 3);
  choices.unshift(cleanCorrect);

  const fillers = ['Not enough information', 'A different lesson', 'Only an opinion', 'None of these details'];
  fillers.forEach(fill => {
    if (choices.length < 4 && !choices.some(choice => sameText(choice, fill))) choices.push(fill);
  });

  choices = shuffle(choices.slice(0, 4));
  return q(text, choices, choices.findIndex(choice => sameText(choice, cleanCorrect)), explanation, topic || 'Knowledge DB', 'knowledge');
}

function extractFacts(content) {
  return unique(String(content || '')
    .replace(/\r/g, '\n')
    .replace(/([.!?])\s+/g, '$1\n')
    .split(/\n+|;+/)
    .map(cleanFact)
    .filter(fact => fact.length >= 12 && fact.length <= 260 && /[a-zA-Z]/.test(fact))
  ).slice(0, 80);
}

function cleanFact(text) {
  return String(text || '')
    .replace(/^\s*(?:[-•*]|\d+[.)])\s*/, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[.。]+$/, '');
}

function extractKeyword(text) {
  const matches = String(text || '').match(/[A-Za-z][A-Za-z'-]{3,}/g) || [];
  const ranked = matches
    .map(word => word.replace(/^[^A-Za-z]+|[^A-Za-z]+$/g, ''))
    .filter(word => word.length > 3 && !STOP_WORDS.has(word.toLowerCase()))
    .sort((a, b) => scoreKeyword(b, text) - scoreKeyword(a, text));
  return ranked[0] || null;
}

function scoreKeyword(word, text) {
  let score = word.length;
  if (/^[A-Z]/.test(word)) score += 5;
  if (String(text).toLowerCase().startsWith(word.toLowerCase())) score += 4;
  return score;
}

function parseDefinition(text) {
  const match = String(text || '').match(/^(.{2,48}?)\s+(?:is|are|means|refers to|helps|needs|uses|causes)\s+(.{5,160})$/i);
  if (!match) return null;
  const term = cleanFact(match[1]).replace(/^(the|a|an)\s+/i, '');
  const meaning = cleanFact(match[2]);
  if (!term || !meaning || term.length > 54) return null;
  return { term, meaning };
}

function escapeForQuestion(text, keyword) {
  return shortenText(String(text).replace(new RegExp(escapeRegExp(keyword), 'i'), '____'), 150);
}

function normalizeChoice(choice) {
  return shortenText(cleanFact(choice), 96);
}

function shortenText(text, max = 100) {
  const clean = String(text || '').replace(/\s+/g, ' ').trim();
  return clean.length > max ? `${clean.slice(0, max - 1).trim()}…` : clean;
}

function unique(list) {
  const seen = new Set();
  return list.filter(item => {
    const key = String(item || '').toLowerCase().trim();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function uniqueQuestions(list) {
  const seen = new Set();
  return list.filter(item => {
    const key = `${item.text}|${item.choices.join('|')}`.toLowerCase();
    if (seen.has(key) || item.answer < 0) return false;
    seen.add(key);
    return true;
  });
}

function sameText(a, b) {
  return String(a || '').toLowerCase().trim() === String(b || '').toLowerCase().trim();
}

function escapeRegExp(str) {
  return String(str).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
        <div class="stat"><strong>${state.correctCombo || 0}</strong><span>Correct streak</span></div>
        <div class="stat"><strong>${state.bestCombo || 0}</strong><span>Best streak</span></div>
        <div class="stat"><strong>${state.bossesDefeated || 0}</strong><span>Boss wins</span></div>
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
          <div><strong>${escapeHtml(row.name)}</strong><br><small class="muted">${capitalize(row.subject)} · ${row.date} · x${row.combo || 0} streak</small></div>
          <strong>${row.score}%</strong>
        </div>
      `).join('') : '<p class="muted">Play a round to create leaderboard records on this device.</p>'}
    </section>
  `;
}

function updateHpBars() {
  const player = document.getElementById('playerHp');
  const monster = document.getElementById('monsterHp');
  if (player) player.style.width = `${Math.round((session.playerHp / (session.maxPlayerHp || 100)) * 100)}%`;
  if (monster) monster.style.width = `${Math.round((session.monsterHp / (session.maxMonsterHp || 100)) * 100)}%`;
}

function comboEffect(combo) {
  if (combo >= 10) return { level: combo, type: 'super', label: 'Super Saiyan transformation', hits: 1, fire: true, large: true, powerUp: true, super: true, explosion: true, sound: 'super', wait: 1250 };
  if (combo === 9) return { level: combo, type: 'fireball', label: 'Large fireball', fireball: true, large: true, powerUp: true, sound: 'fireball', wait: 1080 };
  if (combo === 8) return { level: combo, type: 'double-fire-explosion-fireball', label: 'Double fire explosion + fireball', hits: 2, fire: true, fireball: true, powerUp: true, explosion: true, sound: 'fireball', wait: 1150 };
  if (combo === 7) return { level: combo, type: 'fire-explosion', label: 'Fire slash explosion', hits: 1, fire: true, powerUp: true, explosion: true, sound: 'explosion', wait: 980 };
  if (combo === 6) return { level: combo, type: 'fire-slash', label: 'Double fire slash', hits: 2, fire: true, sound: 'fireSlash', wait: 820 };
  if (combo === 5) return { level: combo, type: 'fire-slash', label: 'Fire slash', hits: 1, fire: true, sound: 'fireSlash', wait: 760 };
  if (combo === 4) return { level: combo, type: 'yellow-slash', label: 'Double yellow slash', hits: 2, yellow: true, sound: 'yellowSlash', wait: 760 };
  if (combo === 3) return { level: combo, type: 'yellow-slash', label: 'Yellow slash', hits: 1, yellow: true, sound: 'yellowSlash', wait: 700 };
  if (combo === 2) return { level: combo, type: 'slash', label: 'Double slash', hits: 2, sound: 'doubleSlash', wait: 700 };
  return { level: combo, type: 'slash', label: 'Simple slash', hits: 1, sound: 'slash', wait: 650 };
}

function calculateDamage(effect) {
  const base = session.difficulty === 'hard' ? 28 : session.difficulty === 'easy' ? 24 : 22;
  const bossNerf = session.isBoss ? 0.8 : 1;
  const hitBonus = (effect.hits || 1) > 1 ? 7 : 0;
  const fireBonus = effect.fire ? 8 : 0;
  const powerBonus = effect.powerUp ? 12 : 0;
  const superBonus = effect.super ? 24 : 0;
  return Math.round((base + hitBonus + fireBonus + powerBonus + superBonus) * bossNerf);
}

function comboNextLabel(combo) {
  const next = combo + 1;
  if (next === 1) return 'simple slash';
  if (next === 2) return 'double slash';
  if (next === 3) return 'yellow slash';
  if (next === 4) return 'double yellow';
  if (next === 5) return 'fire slash';
  if (next === 6) return 'double fire';
  if (next === 7) return 'explosion';
  if (next === 8) return 'fireball';
  if (next === 9) return 'large fireball';
  if (next === 10) return 'Super Saiyan';
  return 'super combo';
}

function animateBattle(target, effect = { type: 'slash', hits: 1, label: 'Slash' }) {
  if (!session.battle) return;
  const targetEl = document.getElementById(target);
  const stage = document.getElementById('battleStage');
  const avatar = document.getElementById('avatar');
  if (!stage) return;

  playComboSound(effect.sound || effect.type || 'slash');

  if (targetEl) {
    targetEl.classList.add('hit');
    setTimeout(() => targetEl.classList.remove('hit'), 520);
  }

  if (effect.powerUp && avatar) {
    avatar.classList.add(effect.super ? 'super-transform' : 'power-up');
    createAura(stage, effect.super);
    setTimeout(() => avatar.classList.remove('power-up', 'super-transform'), 1100);
  }

  const hitCount = effect.hits || 1;
  const delay = effect.powerUp ? 360 : 0;

  if (effect.fireball || effect.super) {
    if (effect.hits) {
      for (let i = 0; i < hitCount; i++) {
        setTimeout(() => createSlash(stage, effect, i), delay + i * 120);
      }
    }
    setTimeout(() => createFireball(stage, Boolean(effect.large || effect.super)), effect.powerUp ? 520 : 80);
    if (effect.explosion || effect.super || effect.large) setTimeout(() => createExplosion(stage, Boolean(effect.super)), 820);
    return;
  }

  for (let i = 0; i < hitCount; i++) {
    setTimeout(() => createSlash(stage, effect, i), delay + i * 130);
  }
  if (effect.explosion) setTimeout(() => createExplosion(stage, false), delay + 420);
}

function createSlash(stage, effect, index = 0) {
  const slash = document.createElement('div');
  slash.className = `slash ${effect.yellow ? 'yellow-slash' : ''} ${effect.fire ? 'fire-slash' : ''} ${index % 2 ? 'slash-alt' : ''}`;
  stage.appendChild(slash);
  setTimeout(() => slash.remove(), 620);
}

function createAura(stage, superMode = false) {
  const aura = document.createElement('div');
  aura.className = `battle-aura ${superMode ? 'super-aura' : ''}`;
  stage.appendChild(aura);
  setTimeout(() => aura.remove(), 1100);
}

function createExplosion(stage, superMode = false) {
  const explosion = document.createElement('div');
  explosion.className = `explosion ${superMode ? 'super-explosion' : ''}`;
  stage.appendChild(explosion);
  setTimeout(() => explosion.remove(), 850);
}

function createFireball(stage, large = false) {
  const fireball = document.createElement('div');
  fireball.className = `fireball ${large ? 'large-fireball' : ''}`;
  stage.appendChild(fireball);
  setTimeout(() => fireball.remove(), 900);
}

let audioCtx = null;
function initAudio() {
  if (!state.soundOn) return;
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    audioCtx = new AudioContext();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
}

function playComboSound(kind = 'slash') {
  if (!state.soundOn) return;
  initAudio();
  if (!audioCtx) return;
  const now = audioCtx.currentTime;
  const gain = audioCtx.createGain();
  gain.connect(audioCtx.destination);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(kind === 'boss' ? 0.12 : 0.08, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.32);

  const osc = audioCtx.createOscillator();
  osc.connect(gain);
  osc.type = kind.includes('fire') || kind.includes('explosion') || kind.includes('super') ? 'sawtooth' : 'triangle';
  const map = {
    slash: [520, 240],
    doubleSlash: [640, 260],
    yellowSlash: [740, 360],
    fireSlash: [320, 120],
    explosion: [220, 55],
    fireball: [260, 680],
    super: [220, 880],
    wrong: [160, 90],
    boss: [90, 180]
  };
  const [start, end] = map[kind] || map.slash;
  osc.frequency.setValueAtTime(start, now);
  osc.frequency.exponentialRampToValueAtTime(Math.max(40, end), now + 0.28);
  osc.start(now);
  osc.stop(now + 0.34);

  if (kind === 'doubleSlash' || kind === 'fireSlash' || kind === 'super') {
    setTimeout(() => playComboSound(kind === 'super' ? 'explosion' : 'slash'), 90);
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
function bossName(subject) {
  return ({ science: 'Lab Dragon', math: 'Number Titan', english: 'Grammar Hydra' })[subject] || 'Boss Monster';
}
function getBossQuestion(subject) {
  const list = BOSS_QUESTIONS[subject] || BOSS_QUESTIONS.science;
  const item = shuffle([...list])[0];
  return { ...item, choices: [...item.choices], topic: `Boss · ${item.topic}`, source: 'boss', isBoss: true };
}
function escapeHtml(str) {
  return String(str).replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
}

navigate('home');
