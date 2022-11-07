const Alexander = new Student({
  id: 1,
  fullName: "Alexander González Blanco",
  email: "alexgbcr@proton.me",
  username: "alegbcr",
  score: 0,
  instagram: "@alegbcr",
  twitter: "alegbcr",
});

const beginnersLevel_B1 = new Course({
  id: 1,
  nameLevel: "Beginners 1",
  lessonNumber: "Unit 1",
  lessons: [
    "Greetings",
    "Subject Pronouns",
    'The Verb "To Be',
    "Possessive Adjectives",
    "Demonstrative Adjectives",
  ],
});

const beginners = new LearningLevel({
  id: 1,
  levelName: "Beginners Level (B1)",
});

Alexander.addNewCourse(beginnersLevel_B1);
beginnersLevel_B1.addLesson("Interrogative Pronouns");
beginners.addNewCourse(beginnersLevel_B1);
