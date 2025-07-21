let readlineSync = require("readline-sync");
let kuler = require("kuler");
let score = 0;

let userName = readlineSync.question("What's your name? ");
console.log(kuler(`\nHello ${userName} welcome to Quizify`, "#dc2626"));

console.log("\nPlease select any options by typing either a/b/c/d\n");

const database = {
  data: [
    {
      question: `What is the output of typeof null?`,
      options: {
        a: '"null"',
        b: '"object"',
        c: '"undefined"',
        d: '"number"',
      },
      correctAnswer: "b",
    },
    {
      question: `Which method converts a JSON string into a JavaScript object?`,
      options: {
        a: "JSON.parse()",
        b: "JSON.stringify()",
        c: "JSON.toObject()",
        d: "parse.JSON()",
      },
      correctAnswer: "a",
    },
    {
      question: `Which symbol is used for single-line comments in JavaScript?`,
      options: {
        a: "<!-- -->",
        b: "##",
        c: "//",
        d: "/* */",
      },
      correctAnswer: "c",
    },
    {
      question: `What will console.log(2 + '2') output?`,
      options: {
        a: "4",
        b: "22",
        c: "NaN",
        d: "undefined",
      },
      correctAnswer: "b",
    },
    {
      question: `Which keyword is used to declare a variable that cannot be reassigned?`,
      options: {
        a: "var",
        b: "let",
        c: "const",
        d: "static",
      },
      correctAnswer: "c",
    },
    {
      question: `What is the result of Boolean([])?`,
      options: {
        a: "false",
        b: "true",
        c: "undefined",
        d: "null",
      },
      correctAnswer: "b",
    },
    {
      question: `Which of these is NOT a JavaScript data type?`,
      options: {
        a: "string",
        b: "boolean",
        c: "float",
        d: "undefined",
      },
      correctAnswer: "c",
    },
    {
      question: `How do you write an arrow function?`,
      options: {
        a: "function => () {}",
        b: "() => {}",
        c: "=> () {}",
        d: "function() => {}",
      },
      correctAnswer: "b",
    },
    {
      question: `What is the output of [] == false?`,
      options: {
        a: "true",
        b: "false",
        c: "undefined",
        d: "Error",
      },
      correctAnswer: "a",
    },
    {
      question: `Which method adds a new element to the end of an array?`,
      options: {
        a: "push()",
        b: "pop()",
        c: "shift()",
        d: "unshift()",
      },
      correctAnswer: "a",
    },
  ],
};

/** Leader Board */
const leaderBoard = {
  data: [
    {
      name: "Ashish",
      score: 1,
    },
    {
      name: "Riya",
      score: 3,
    },
    {
      name: "Jay",
      score: 2,
    },
  ],
};

function playGame(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log(kuler("Correct Answer", "#059669"));
    score++;
  } else {
    console.log(kuler("Incorrect Answer", "#b91c1c"));
    console.log(kuler(`Correct Answer is ${correctAnswer}`, "#1d4ed8"));
  }
}

function showQuestionAndOptions(database) {
  for (let i = 0; i < database.data.length; i++) {
    console.log(`\nQ${i + 1} - ${database.data[i].question}\n`);
    for (let key in database.data[i].options) {
      console.log(`${key} - ${database.data[i].options[key]}`);
    }
    let userAnswer = readlineSync
      .question("Enter your answer - (a/b/c/d) - ")
      .toLowerCase();
    playGame(userAnswer, database.data[i].correctAnswer);
  }
}

function showHighScorer(leaderBoard) {
  leaderBoard.data.push({ name: userName, score: score });
  let sortedScoreList = leaderBoard.data.sort((a, b) => b.score - a.score);
  console.log(
    kuler("\nCheck your position on the Leader Board🎉🎉", "#fde047")
  );
  for (let leader of sortedScoreList) {
    console.log(kuler(`${leader.name} -  Score: ${leader.score}`, "#9333ea"));
  }
}

showQuestionAndOptions(database);
console.log(kuler(`\nYour score is - ${score}`, "#5eead4"));
showHighScorer(leaderBoard);
