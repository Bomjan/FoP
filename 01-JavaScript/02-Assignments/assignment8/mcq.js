// Sundra Bomjan, SOC 1C

class MCQ {
  constructor(question, options, answer, category) {
    this.question = question;
    this.choices = options;
    this.answer = answer;
    this.category = category;
  }
  getQuestion() {
    let fullQuestion = `${this.question}`;
    this.choices.forEach((opt, index) => {
      fullQuestion += `\n(${index + 1}) ${opt}`;
    });
    return fullQuestion;
  }
}

class Quiz {
  constructor() {
    this.questionPool = [];

    this.questionPool.push(
      new MCQ(
        "What does RAM stand for?",
        [
          "Read After Modification",
          "Random Access Memory",
          "Run All Modules",
          "Remote Access Machine",
        ],
        1,
        1
      )
    );

    this.questionPool.push(
      new MCQ(
        "Which protocol is used to transfer web pages?",
        ["FTP", "SMTP", "HTTP", "SSH"],
        2,
        1
      )
    );

    this.questionPool.push(
      new MCQ(
        "Which data structure uses FIFO order?",
        ["Stack", "Queue", "Tree", "Graph"],
        1,
        1
      )
    );

    this.questionPool.push(
      new MCQ(
        "What is the main purpose of a firewall?",
        [
          "To store passwords",
          "To block unauthorized access",
          "To increase RAM",
          "To cool the CPU",
        ],
        1,
        1
      )
    );

    this.questionPool.push(
      new MCQ(
        "Which country won the first FIFA World Cup?",
        ["Argentina", "Brazil", "Uruguay", "Italy"],
        2,
        2
      )
    );

    this.questionPool.push(
      new MCQ(
        "Who is known as 'The King of Football'?",
        ["Ronaldo Nazário", "Lionel Messi", "Pele", "Maradona"],
        2,
        2
      )
    );

    this.questionPool.push(
      new MCQ(
        "Which club does 'You'll Never Walk Alone' belong to?",
        ["Chelsea", "Manchester United", "Liverpool", "Barcelona"],
        2,
        2
      )
    );

    this.questionPool.push(
      new MCQ(
        "What does CPU stand for?",
        [
          "Central Processing Unit",
          "Control Performance Utility",
          "Central Power Unit",
          "Computer Processing Usage",
        ],
        0,
        1
      )
    );

    this.questionPool.push(
      new MCQ(
        "Which player has won the most Ballon d'Or awards?",
        ["Cristiano Ronaldo", "Lionel Messi", "Luka Modric", "Ronaldinho"],
        1,
        2
      )
    );

    this.questionPool.push(
      new MCQ(
        "Which of these is NOT an operating system?",
        ["Linux", "Windows", "Python", "macOS"],
        2,
        1
      )
    );
  }
  getNumberOfQuestions() {
    return this.questionPool.length;
  }
  getQuestionAt(i) {
    return this.questionPool[i];
  }
}

var quiz = new Quiz();
for (var i = 0; i < quiz.getNumberOfQuestions(); i++) {
  var q = quiz.getQuestionAt(i);
  console.log(i + 1 + ". " + q.getQuestion());
  console.log("Correct Answer: " + q.choices[q.answer]);
  console.log("Category: " + (q.category == 1 ? "IT" : "Football"));
  console.log();
}
