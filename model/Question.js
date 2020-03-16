class Question {
  constructor(id, theme, subTheme, question, addToQuestion, answers, theory) {
    this.id = id;
    this.theme = theme;
    this.subTheme = subTheme;
    this.question = question;
    this.addToQuestion = addToQuestion;
    this.answers = answers;
    this.theory = theory;
  }
}

export default Question;
