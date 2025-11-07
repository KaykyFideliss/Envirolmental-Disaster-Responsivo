
var startButton = document.querySelector("#start-btn");
var themeButtons = document.querySelectorAll(".theme-btn");
var startLayout = document.querySelector(".start-screen");
var chooseThemeLayout = document.querySelector(".choose-theme-screen");
var mainLayout = document.querySelector(".main");
var overLayout = document.querySelector(".game-over");
var activeBar = document.querySelector("#timer");
var livesCount = document.querySelector("#lives");
var questionText = document.querySelector("#question");
var choiceButtons = document.querySelectorAll(".choice");
var scoreLabel = document.querySelector("#score");
var restartButton = document.querySelector("#restart-btn");
var backToThemesButton = document.querySelector("#back-to-themes-btn"); // Novo botão

var sfxRight = new Audio("https://sndup.net/tmhq/d");
var sfxWrong = new Audio("https://sndup.net/vmg6/d");

// Perguntas para cada tema
var desmatamentoQuestions = [
 {
    question: "Qual é a principal causa do desmatamento na Amazônia brasileira?",
    choices: ["Expansão urbana", "Instalação de usinas nucleares", "Pecuária extensiva", "Mineração em áreas costeiras"],
    correct: 2
  },
  {
    question: "Que impacto o desmatamento pode causar sobre o ciclo da água na Amazônia?",
    choices: ["Aumento da umidade local", "Redução das chuvas", "Diminuição da temperatura", "Expansão das áreas de irrigação"],
    correct: 1
  },
  {
    question: "O que caracteriza o efeito 'borda' causado pelo desmatamento em florestas?",
    choices: ["Microclima alterado nas bordas, favorecendo espécies exóticas", "Aumento da biodiversidade nas bordas das florestas", "Criação de áreas de turismo sustentável", "Melhoria das condições de vida da fauna nativa"],
    correct: 0
  },
  {
    question: "Que percentual de cobertura original da Mata Atlântica foi desmatado até hoje?",
    choices: ["10%", "30%", "93%", "47%"],
    correct: 2
  },
  {
    question: "Qual alternativa é uma consequência indireta do desmatamento nas bacias hidrográficas?",
    choices: ["Aumento da captação de água", "Redução da salinidade dos cursos d’água", "Diminuição da vazão das águas", "Erosão dos solos e assoreamento dos rios"],
    correct: 3
  },
  {
    question: "O desmatamento contribui diretamente para o aquecimento global devido à:",
    choices: ["Redução das emissões de gás carbônico", "Retenção de calor pelas plantas", "Liberação de CO₂ pela decomposição da matéria orgânica", "Produção de oxigênio pelas plantas"],
    correct: 2
  },
  {
    question: "Qual área foi mais desmatada no Brasil em 2022?",
    choices: ["Amazônia", "Pantanal", "Cerrado", "Caatinga"],
    correct: 0
  },
  {
    question: "Que tipo de solo é mais suscetível à degradação após o desmatamento?",
    choices: ["Arenoso", "Argiloso", "Calcário", "Vulcânico"],
    correct: 0
  },
  {
    question: "Como a perda de biodiversidade está relacionada ao desmatamento?",
    choices: ["Favorece o aumento de espécies nativas", "Diminui a diversidade de espécies na região", "Não possui relação significativa", "Apenas aumenta a população de insetos"],
    correct: 1
  },
  {
    question: "Qual dos seguintes métodos pode ser uma solução para reduzir o desmatamento?",
    choices: ["Expansão agrícola sem restrições", "Estímulo ao uso de agrotóxicos", "Agricultura de baixo impacto e agrofloresta", "Corte total de árvores para pecuária"],
    correct: 2
  }
];

var queimadasQuestions = [
  {
    question: "Qual é a principal justificativa econômica para a ocorrência de queimadas em áreas florestais tropicais?",
    choices: ["Produção de biocombustíveis", "Expansão da fronteira agrícola", "Extração de minérios", "Criação de áreas de turismo"],
    correct: 1
  },
  {
    question: "O que caracteriza a técnica de 'queima controlada' em áreas florestais?",
    choices: ["Queima de grandes áreas sem monitoramento", "Queima de resíduos urbanos", "Queima de biomassa para geração de energia", "Uso de fogo para controlar pragas e regenerar a vegetação"],
    correct: 3
  },
  {
    question: "Qual das seguintes afirmações descreve corretamente a relação entre queimadas e biodiversidade?",
    choices: ["Queimadas aumentam a biodiversidade ao criar novos habitats.", "Queimadas têm um impacto neutro na biodiversidade.", "Queimadas reduzem a biodiversidade, especialmente de espécies vulneráveis.", "Queimadas favorecem apenas espécies de crescimento rápido."],
    correct: 2
  },
  {
    question: "Que fenômeno climático é frequentemente exacerbado por queimadas em grandes escalas?",
    choices: ["Resfriamento global", "El Niño", "Intensificação do efeito estufa", "Desvio de correntes oceânicas"],
    correct: 2
  },
  {
    question: "Quais gases de efeito estufa são majoritariamente emitidos durante as queimadas?",
    choices: ["Metano e óxido nitroso", "Dióxido de carbono e metano", "Dióxido de carbono e óxido nitroso", "Metano e vapor d’água"],
    correct: 1
  },
  {
    question: "Como a prática de queimadas afeta a dinâmica do solo?",
    choices: ["Causa a perda de nutrientes e erosão", "Aumenta a fertilidade a longo prazo", "Melhora a retenção de água no solo", "Aumenta a atividade microbiana benéfica"],
    correct: 0
  },
  {
    question: "Em que contexto as queimadas podem ser consideradas uma prática sustentável?",
    choices: ["Quando integradas a um manejo florestal sustentável", "Quando são usadas para cultivar monoculturas", "Quando não são regulamentadas", "Quando são realizadas apenas em áreas urbanas"],
    correct: 0
  },
  {
    question: "Qual é um dos principais fatores que determinam a intensidade e a frequência das queimadas?",
    choices: ["Presença de água em corpos d’água", "Proximidade de áreas urbanas", "Altitude do terreno", "Tipo de vegetação e clima"],
    correct: 3
  },
  {
    question: "O que caracteriza a 'safra de fogo'?",
    choices: ["Período em que ocorrem queimadas intencionais para cultivo", "Época de maior ocorrência de incêndios florestais naturais", "Temporada de colheita em regiões afetadas por queimadas", "Período de seca prolongada que favorece queimadas"],
    correct: 0
  },
  {
    question: "Qual estratégia é utilizada para restaurar áreas desmatadas pela ação das queimadas?",
    choices: ["Plantio direto sem preparo do solo", "Uso de espécies exóticas", "Reflorestamento com espécies nativas", "Queimadas controladas para limpeza da área"],
    correct: 2
  }
];

var recursosHidricosQuestions = [
  {
    question: "Que impacto o desmatamento pode causar sobre o ciclo da água na Amazônia?",
    choices: ["Diminuição da temperatura", "Expansão das áreas de irrigação", "Redução das chuvas", "Aumento da umidade local"],
    correct: 2
  },
  {
    question: "O que é a retificação de rios?",
    choices: ["Substituição da água por outros recursos", "Mudança no leito para maior retilinidade", "Desvio completo de cursos d’água", "Irrigação agrícola direta"],
    correct: 1
  },
  {
    question: "Qual das alternativas é um efeito da retificação de cursos d’água?",
    choices: ["Intensificação das enchentes em áreas urbanas", "Melhoria da qualidade da água", "Redução da vazão", "Aumento da biodiversidade aquática"],
    correct: 0
  },
  {
    question: "O rebaixamento do lençol freático pode resultar em:",
    choices: ["Aumento da biodiversidade", "Melhor irrigação natural", "Expansão das reservas naturais", "Erosão e compactação do solo"],
    correct: 3
  },
  {
    question: "Quais atividades humanas contribuem para o rebaixamento do lençol freático?",
    choices: ["Atividades pesqueiras", "Mineração e agricultura irrigada", "Pesca esportiva", "Práticas de agrofloresta"],
    correct: 1
  },
  {
    question: "Quais espécies são mais impactadas pela modificação dos recursos hídricos?",
    choices: ["Espécies costeiras", "Espécies endêmicas de áreas úmidas", "Espécies de zonas áridas", "Espécies de montanha"],
    correct: 1
  },
  {
    question: "Como o tamponamento de áreas alagadas pode afetar a fauna local?",
    choices: ["Beneficia a biodiversidade florestal", "Favorece a proliferação de espécies locais", "Melhora a qualidade de vida de espécies marinhas", "Reduz o habitat de espécies aquáticas e migratórias"],
    correct: 3
  },
  {
    question: "Qual dos impactos abaixo pode resultar do rebaixamento excessivo do lençol freático?",
    choices: ["Desertificação e salinização do solo", "Melhoria da qualidade da água", "Aumento da fertilidade do solo", "Crescimento de áreas de floresta densa"],
    correct: 0
  },
  {
    question: "Qual é uma consequência comum do desvio de cursos d’água para fins agrícolas?",
    choices: ["Redução da taxa de evaporação", "Aumento da precipitação local", "Redução da biodiversidade local", "Expansão de áreas úmidas"],
    correct: 2
  },
  {
    question: "Que medida pode mitigar os impactos ambientais do rebaixamento do lençol freático?",
    choices: ["Urbanização de áreas alagadas", "Retificação de todos os rios locais", "Expansão da pecuária intensiva", "Reflorestamento e controle de irrigação"],
    correct: 3
  },
  {
    question: "A canalização e retificação de rios em áreas urbanas visam principalmente:",
    choices: ["Controlar enchentes e ocupar mais espaço", "Melhorar a qualidade das águas subterrâneas", "Facilitar o transporte de mercadorias", "Aumentar a biodiversidade aquática"],
    correct: 0
  }
];


var questions = [];
var score = 0;
var currentQuestionIndex = 0;
var lives = 5;


// Função para carregar uma nova pergunta e atualizar as opções
function loadQuestion() {
  
  let currentQuestion = questions[currentQuestionIndex];
  questionText.innerHTML = currentQuestion.question;

  choiceButtons.forEach((btn, index) => {
    btn.innerHTML = currentQuestion.choices[index];
    btn.onclick = () => checkAnswer(index);
  });

  resetTimer();  // Reinicia o timer para a nova pergunta
}


// Função para verificar a resposta do jogador
function checkAnswer(selectedIndex) {
  let correctIndex = questions[currentQuestionIndex].correct;

  // Se a resposta estiver correta
  if (selectedIndex === correctIndex) {
    choiceButtons[selectedIndex].classList.add('correct'); // Aplica a classe verde imediatamente
    rightAnswer();  // Aumenta a pontuação e faz a lógica de resposta correta
  } else {
    choiceButtons[selectedIndex].classList.add('incorrect'); // Aplica a classe vermelha imediatamente
    wrongAnswer();  // Diminui vidas e faz a lógica de resposta errada
  }

  // Atraso para carregar a próxima pergunta
  setTimeout(() => {
    resetChoices();  // Reseta as cores dos botões
    if (lives > 0 && currentQuestionIndex < questions.length) {
      loadQuestion();  // Só carrega a próxima pergunta após o delay
    }
  }, 1000);  // Delay de 1 segundo
}



function resetChoices() {
  choiceButtons.forEach(button => {
    button.classList.remove('correct', 'incorrect'); // Remove as classes de cor
  });
}


// Função para começar o jogo
function startGame() {
  // Defina aqui o tempo do timer dinamicamente em segundos
  let timerDuration = 60; // Altere o valor para o tempo desejado (em segundos)
  
  // Ajusta a duração da animação via JavaScript
  document.documentElement.style.setProperty('--timing', `${timerDuration}s`);

  score = 0;
  currentQuestionIndex = 0;
  lives = 5;

  startLayout.classList.add("hidden");
  overLayout.classList.add("hidden");
  mainLayout.classList.remove("hidden");

  livesCount.innerHTML = lives;

  loadQuestion();  // Carrega a primeira pergunta
}

// Função para resposta correta
// Função para resposta correta
function rightAnswer() {
  sfxRight.play();
  score++;
  currentQuestionIndex++;
  // Não carrega a próxima pergunta aqui! Vamos usar o setTimeout no checkAnswer
}

// Função para resposta errada
function wrongAnswer() {
  sfxWrong.play();
  lives--;
  livesCount.innerHTML = lives;

  if (lives <= 0) {
    endGame(); // Termina o jogo se as vidas acabarem
  }
}


// Função para encerrar o jogo
function endGame() {
  scoreLabel.innerHTML = `Você acertou ${score} perguntas de 10`;
  mainLayout.classList.add("hidden");
  overLayout.classList.remove("hidden");
}

// Função para resetar o timer
function resetTimer() {
  activeBar.classList.remove("timer-anim");
  setTimeout(() => {
    activeBar.classList.add("timer-anim");
  }, 20);
}

// Event Listener para iniciar o jogo
startButton.addEventListener("click", () => {
  startGame();
});

// Event Listener para reiniciar o jogo
restartButton.addEventListener("click", () => {
  startLayout.classList.remove("hidden");
  overLayout.classList.add("hidden");
  mainLayout.classList.add("hidden");
});

// Event Listener para voltar aos temas
backToThemesButton.addEventListener("click", () => {
  chooseThemeLayout.classList.remove("hidden");
  overLayout.classList.add("hidden");
  mainLayout.classList.add("hidden");
});

// Event Listener para quando o timer acabar (fim da animação)
activeBar.addEventListener("animationend", () => {
  wrongAnswer();  // Conta como uma resposta errada e carrega a próxima pergunta
});

// Função para iniciar o jogo com o tema escolhido
themeButtons.forEach(btn => {
  btn.addEventListener("click", function() {
    if (this.id === "desmatamento-btn") {
      questions = desmatamentoQuestions;
    } else if (this.id === "queimadas-btn") {
      questions = queimadasQuestions;
    } else if (this.id === "recursos-hidricos-btn") {
      questions = recursosHidricosQuestions;
    }

    chooseThemeLayout.classList.add("hidden");
    startLayout.classList.remove("hidden");
  });
});

// Função para atualizar o contador de perguntas
function updateQuestionCounter() {
  const currentQuestionNumber = currentQuestionIndex + 1;
  const totalQuestions = questions.length;
  const counterElement = document.getElementById('question-counter');
  if (counterElement) {
    counterElement.textContent = `Pergunta ${currentQuestionNumber} de ${totalQuestions}`;
  }
}
function loadQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  questionText.innerHTML = currentQuestion.question;

  choiceButtons.forEach((btn, index) => {
    btn.innerHTML = currentQuestion.choices[index];
    btn.onclick = () => checkAnswer(index);
  });

  resetTimer();  // Reinicia o timer para a nova pergunta
  
  updateQuestionCounter();  // Atualiza o contador de questões
}

