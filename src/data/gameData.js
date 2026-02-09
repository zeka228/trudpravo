import shuffleQ from "./shuffleQ";

// Law
export const answersLaw = [
  {id: 1, t: ""},
  {id: 2, t: ""},
  {id: 3, t: ""},
  {id: 4, t: ""},
  {id: 5, t: ""},
  {id: 6, t: ""},
  {id: 7, t: ""},
  {id: 8, t: ""},
  {id: 9, t: ""}
]
const questionsLawRaw = [
  { q: "", va: [] },
  { q: "", va: [] },
  { q: "", va: [] },
  { q: "", va: [] },
  { q: "", va: [] },
  { q: "", va: [] },
  { q: "", va: [] },
  { q: "", va: [] }
];
export const questionsLaw = shuffleQ(questionsLawRaw);

// Discipline
export const answersDiscipline = [
  {id: 1, t: ""},
  {id: 2, t: ""},
  {id: 3, t: ""},
  {id: 4, t: ""},
  {id: 5, t: ""},
  {id: 6, t: ""},
  {id: 7, t: ""}
];
const questionsDisciplineRaw = [
  { q: "", va: [] },
  { q: "", va: [] },
  { q: "", va: [] },
  { q: "", va: [] }
];
export const questionsDiscipline = shuffleQ(questionsDisciplineRaw);

// Work
export const answersWork = [
  {id: 1, t: ""},
  {id: 2, t: ""},
  {id: 3, t: ""},
  {id: 4, t: ""},
  {id: 5, t: ""},
  {id: 6, t: ""}
];
const questionsWorkRaw = [
  { q: "", va: [] },
  { q: "", va: [] },
  { q: "", va: [] },
  { q: "", va: [] },
  { q: "", va: [] }
];
export const questionsWork = shuffleQ(questionsWorkRaw);

// Salary
export const answersSalary = [
  {id: 1, t: ""},
  {id: 2, t: ""},
  {id: 3, t: ""},
  {id: 4, t: ""}
];
const questionsSalaryRaw = [
  { q: "", va: [] },
  { q: "", va: [] },
  { q: "", va: [] }
];
export const questionsSalary = shuffleQ(questionsSalaryRaw);