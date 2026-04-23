let score = 0;

const questionOne = prompt(`What is the capital of France?
    [1] Paris
    [2] London
    [3] Rome
    `);

const answerOne = Number(questionOne);

if (Number.isNaN(answerOne)) {
  alert("Please enter a number");
} else if (answerOne < 1 || answerOne > 3) {
  alert("Please enter 1, 2 or 3");
} else {
  if (answerOne == 1) score++;
}

const questionTwo = prompt(`What is the capital of England?
    [1] Paris
    [2] London
    [3] Rome
    `);

const answerTwo = Number(questionTwo);

if (Number.isNaN(answerTwo)) {
  alert("Please enter a number");
} else if (answerTwo < 1 || answerTwo > 3) {
  alert("Please enter 1, 2 or 3");
} else {
  if (answerTwo == 2) score++;
}

const questionThree = prompt(`What is the capital of Italy?
    [1] Paris
    [2] London
    [3] Rome
    `);

const answerThree = Number(questionThree);

if (Number.isNaN(answerThree)) {
  alert("Please enter a number");
} else if (answerThree < 1 || answerThree > 3) {
  alert("Please enter 1, 2 or 3");
} else {
  if (answerThree == 3) score++;
}

if (score == 0) {
  alert(`Your score is ${score}; You failed`);
} else if (score >= 1 && score <= 2) {
  alert(`Your score is ${score}; Good!`);
} else {
  alert(`Your score is ${score}; Great!`);
}
