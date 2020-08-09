const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Who is Founder of Saylani Welfare International Trust?',
    answers: [
      { text: 'Molana Bashir Farooqui Sahab', correct: true },
      { text: 'Faisal Edhi', correct: false },
      { text: 'Najib Ahmed', correct: false },
      { text: 'Afsin Pasha', correct: false }
    ]
  },
  {
    question: 'When Urdu was declared national language of Pakistan in?',
    answers: [
      { text: 'April 1950', correct: false },
      { text: 'April 1955', correct: false },
      { text: 'April 1954', correct: true },
      { text: 'April 1952', correct: false }
    ]
  },
  {
    question: 'In which province maximum languages are spoken?',
    answers: [
      { text: 'Sindh', correct: false },
      { text: 'Balochistan', correct:  true},
      { text: 'Punjab', correct:  false},
      { text: 'KPK', correct:false  }
    ]
  },
  {
    question: 'What Word Urdu means?',
    answers: [
      { text: 'Army', correct: true },
      { text: 'Grapes', correct: false },
      { text: 'A Group of Students', correct: false },
      { text: 'None of them', correct: false }
    ]
  }
,{
    question: 'Who composed the verses of Pakistan national Anthem?',
    answers: [
      { text: 'Nisar Kazmi', correct: false },
      { text: 'Allama Iqbal', correct: false },
      { text: 'Hafeez Jallandri', correct: true },
      { text: 'Faiz Ahmed Faiz', correct: false }
    ]
  },
  {
    question: 'The first Rocket launched by Pakistan was:',
    answers: [
      { text: 'Ghauri', correct: false },
      { text: 'Badar', correct: false },
      { text: 'Ghaznavi', correct: false },
      { text: 'Rehbar', correct: true }
    ]
  },
  {
    question: 'What is he length of Pakistan from North to South?',
    answers: [
      { text: '1200 km', correct: false },
      { text: '2480 km', correct: false },
      { text: '1600 km', correct: true },
      { text: '1365 km', correct: false }
    ]
  },
  {
    question: 'Which river flows through the Salt Range?',
    answers: [
      { text: 'River Gomal', correct: false },
      { text: 'River Soan', correct: true },
      { text: 'River Indus', correct: false },
      { text: 'River Zobe', correct: false }
    ]
  },
  {
    question: 'Which city is famous for its Karana Hill?',
    answers: [
      { text: 'Lahore', correct: false },
      { text: 'Karachi', correct: false },
      { text: 'Turbat', correct: false },
      { text: 'Sangla Hill', correct: true }
    ]
  },
  {
    question: 'What is the name of the combination of smoke and fog?',
    answers: [
      { text: 'Smog', correct: true },
      { text: 'Smogra', correct: false },
      { text: 'Smogum', correct: false },
      { text: 'Smoga', correct: false }
    ]
  }

]