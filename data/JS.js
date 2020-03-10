export default [
  {
    id: "sdsdsdsd",
    question: "Inside which HTML element do we put the JavaScript?",
    addToQuestion: null,
    answers: ["<js>", "<script>", "<scripting>", "<javascript>"],
    correctAnswer: "<script>"
  },
  {
    id: "rtrrrt",
    question:
      "What is the correct JavaScript syntax to change the content of the HTML element below?",
    addToQuestion: '<p id="demo">This is a demonstration.</p>',
    answers: [
      " #demo.innerHTML = 'Hello World!';",
      " document.getElementByName('p').innerHTML = 'Hello World!';",
      " document.getElementById('demo').innerHTML = 'Hello World!';",
      " document.getElement('p').innerHTML = 'Hello World!';"
    ],
    correctAnswer:
      " document.getElementById('demo').innerHTML = 'Hello World!';"
  }
];
