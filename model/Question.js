class Question {
  constructor(
    id,
    theme,
    subTheme,
    question,
    addToQuestion,
    answers,
    correctAnswer,
    theory
  ) {
    this.id = id;
    this.theme = theme;
    this.subTheme = subTheme;
    this.question = question;
    this.addToQuestion = addToQuestion;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.theory = theory;
  }
}

export default Question;
