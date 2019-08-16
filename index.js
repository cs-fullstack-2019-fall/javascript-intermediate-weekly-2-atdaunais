class Question {
    constructor(question, answers, correct_answer) {
        this.question = question;
        this.answers = answers;
        this.correct_answer = correct_answer;
    }

    //shows question and answers in console
    quizQuestion() {
        console.log(this.question);
        this.answers.forEach(function (eachElement) {
            console.log(eachElement);
        });
    }

    //asks question once and says whether it's right or wrong
    correctCheck() {
        let userInput = prompt("Enter the number of the correct answer.");
        if (userInput !== this.correct_answer) {
            alert("That is incorrect.");
        } else if (userInput === this.correct_answer) {
            alert("You are correct!");
        }
    }
}

questionArray = [];
let question1 = new Question("Which Zelda game immediately follows the events of Ocarina of Time?", ["1. Twilight Princess", "2. Majora's Mask", "3. Wind Waker"], "2");
let question2 = new Question("What year was the movie Princess Mononoke released in Japan?", ["1. 1997", "2. 1995", "3. 1999"], "1");
let question3 = new Question("Sephiroth is the primary antagonist of which Final Fantasy game?", ["1. 15", "2. 9", "3. 12", "4. 7"], "4");

questionArray.push(question1, question2, question3);
let index_of_a_question = Math.floor(Math.random() * questionArray.length);

//function to execute class methods on any array you input
function askQuestion(anyArray) {
    anyArray[index_of_a_question].quizQuestion();
    anyArray[index_of_a_question].correctCheck();
}

askQuestion(questionArray);