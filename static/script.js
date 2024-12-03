const questions = [
    {
        question: "Qual è la capitale d'Italia?",
        answers: [
            { text: "Roma", correct: true },
            { text: "Milano", correct: false },
            { text: "Napoli", correct: false }
        ]
    },
    {
        question: "Chi ha scritto 'La Divina Commedia'?",
        answers: [
            { text: "Dante Alighieri", correct: true },
            { text: "Petrarca", correct: false },
            { text: "Boccaccio", correct: false }
        ]
    },
    // Aggiungi altre 714 domande qui
];

let currentQuestionIndex = 0;
let score = 0;

// Mostra la domanda corrente
function showQuestion() {
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    const questionElement = questionContainer.querySelector('.question');
    const answersList = questionContainer.querySelector('.answers');
    questionElement.textContent = question.question;
    answersList.innerHTML = ''; // Pulisce le risposte precedenti
    question.answers.forEach(answer => {
        const li = document.createElement('li');
        li.textContent = answer.text;
        li.onclick = () => checkAnswer(li, answer.correct);
        answersList.appendChild(li);
    });
}

// Verifica la risposta
function checkAnswer(selectedElement, isCorrect) {
    if (isCorrect) {
        score++;
        selectedElement.style.backgroundColor = 'green';
    } else {
        selectedElement.style.backgroundColor = 'red';
    }
    // Disabilita le risposte
    const allAnswers = document.querySelectorAll('.answers li');
    allAnswers.forEach(answer => {
        answer.onclick = null;
    });
}

// Vai alla domanda successiva
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Mostra il risultato
function showResult() {
    document.getElementById('question-container').style.display = 'none';
    const resultContainer = document.getElementById('result-container');
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Hai ottenuto ${score} risposte corrette su ${questions.length}`;
    resultContainer.style.display = 'block';
}

// Inizializza il quiz
showQuestion();

