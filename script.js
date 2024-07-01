const questions = [
    {
        question: "How many players are on a Football team?",
        answers: [
            { text:"10", correct:false},
            { text:"11", correct:true},
            { text:"12", correct:false},
            { text:"13", correct:false},
        ]
    },
    {
        question: "Which country has won the most FIFA World Cup titles?",
        answers: [
            { text:"Argentina", correct:false},
            { text:"Germany", correct:false},
            { text:"Brazil", correct:true},
            { text:"France", correct:false},
        ]
    },
    {
        question: "Which year did Michael Jordan win his first NBA championship with Chicago Bulls?",
        answers: [
            { text:"1987", correct:false},
            { text:"1991", correct:true},
            { text:"1993", correct:false},
            { text:"1989", correct:false},
        ]
    },
    {
        question: "Which Tennis player spent the most weeks as World No1?",
        answers: [
            { text:"Djokovic", correct:true,},
            { text:"Federer", correct:false},
            { text:"Murray", correct:false},
            { text:"Nadal", correct:false},
        ]
    },
    {
        question: "Which Country hosted the first modern Olympics Games in 1896?",
        answers: [
            { text:"United Kingdom", correct:false},
            { text:"Greece", correct:true},
            { text:"France", correct:false},
            { text:"United States", correct:false},
        ]
    },
    {
        question: "Who directed the movie 'Inception'?",
        answers: [
            { text:"Christopher Nolan", correct:true},
            { text:"Steven Spielberg", correct:false},
            { text:"James Cameron", correct:false},
            { text:"Quentin Tarantino", correct:false},
        ]
    },
    {
        question: "Which TV series features a chemistry teacher turned Drug Kingpin?",
        answers: [
            { text:"The Sopranos", correct:false},
            { text:"Breaking Bad", correct:true},
            { text:"The Wire", correct:false},
            { text:"Power", correct:false},
        ]
    },
    {
        question: "Which fictional African country is the home of Vibranium?",
        answers: [
            { text:"Zamunda", correct:false},
            { text:"Sokovia", correct:false},
            { text:"Wakanda", correct:true},
            { text:"Genosha", correct:false},
        ]
    },
    {
        question: "In the TV series Friends, what is the name of Ross Geller's second wife?",
        answers: [
            { text:"Rachel", correct:false},
            { text:"Emily", correct:true},
            { text:"Susan", correct:false},
            { text:"Carol", correct:false},
        ]
    },
    {
        question: "What movie is based on an Italian Mafia crime family?",
        answers: [
            { text:"Scarface", correct:false},
            { text:"Menace 2 Society", correct:false},
            { text:"The Godfather", correct:true},
            { text:"The Departed", correct:false},
        ]
    },
    {
        question: "What is the capital of Canada?",
        answers: [
            { text:"Toronto", correct:false},
            { text:"Ottawa", correct:true},
            { text:"Vancouver", correct:false},
            { text:"Montreal", correct:false},
        ]
    },
    {
        question: "Which planet is known as the red planet?",
        answers: [
            { text:"Venus", correct:false},
            { text:"Mars", correct:true},
            { text:"Jupiter", correct:false},
            { text:"Saturn", correct:false},
        ]
    },
    {
        question: "What is the smallest country in the world by land area?",
        answers: [
            { text:"Monaco", correct:false},
            { text:"San Marino", correct:false},
            { text:"Jersey", correct:false},
            { text:"Vatican City", correct:true},
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text:"Vincent Van Gogh", correct:false},
            { text:"Pablo Picasso", correct:false},
            { text:"Leonardo Da Vinci", correct:true},
            { text:"Jean Michel Basquiat", correct:false},
        ]
    },
    {
        question: "What is the longest river in the world?",
        answers: [
            { text:"Amazon River", correct:false},
            { text:"River Thames", correct:false},
            { text:"River Nile", correct:true},
            { text:"Mississippi River", correct:false},
        ]
    },
    {
        question: "Who is the 'Queen of Pop'?",
        answers: [
            { text:"Madonna", correct:true},
            { text:"Beyonce", correct:false},
            { text:"Lady Gaga", correct:false},
            { text:"Taylor Swift", correct:false},
        ]
    },
    {
        question: "Which of these musicians grossed the most money from movies?",
        answers: [
            { text:"Ludacris", correct:false},
            { text:"Ice Cube", correct:false},
            { text:"Mark Wahlberg", correct:true},
            { text:"J-Lo", correct:false},
        ]
    },
    {
        question: "Who had the album titled 'Purple Rain'?",
        answers: [
            { text:"Michael Jackson", correct:false},
            { text:"Luther Vandros", correct:false},
            { text:"Prince", correct:true},
            { text:"Elvis Presley", correct:false},
        ]
    },
    {
        question: "Which artist released the song 'Shape of You'?",
        answers: [
            { text:"Ed Sheeran", correct:true},
            { text:"Bruno Mars", correct:false},
            { text:"Justin Bieber", correct:false},
            { text:"Shawn Mendes", correct:false},
        ]
    },
    {
        question: "Which one of these ladies, WASN'T in the group, 'Destiny's Child'?",
        answers: [
            { text:"LaToya Luckett", correct:false},
            { text:"Keri Hilson", correct:true},
            { text:"Kelly Rowland", correct:false},
            { text:"Michelle Williams", correct:false},
        ]
    },
    {
        question: "Who was the first president of the United States?",
        answers: [
            { text:"Abraham Lincoln", correct:false},
            { text:"George Washington", correct:true},
            { text:"Thomas Jefferson", correct:false},
            { text:"John Adams", correct:false},
        ]
    },
    {
        question: "What year did the Berlin Wall fall?",
        answers: [
            { text:"1985", correct:false},
            { text:"1989", correct:true},
            { text:"1991", correct:false},
            { text:"1999", correct:false},
        ]
    },
    {
        question: "Who was the first female Prime Minister?",
        answers: [
            { text:"Theresa May", correct:false},
            { text:"Liz Truss", correct:false},
            { text:"Margaret Thatcher", correct:true},
            { text:"Queen Elizabeth II", correct:false},
        ]
    },
    {
        question: "What year was the first IPhone released?",
        answers: [
            { text:"1999", correct:false},
            { text:"2010", correct:false},
            { text:"2007", correct:true},
            { text:"2005", correct:false},
        ]
    },
    {
        question: "What year was the Microwave invented?",
        answers: [
            { text:"1950", correct:false},
            { text:"1974", correct:false},
            { text:"1966", correct:false},
            { text:"1946", correct:true},
        ]
    },

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
} 

function showQuestion(){
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display= "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again!";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();
