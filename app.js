
const myQuestions = [
    {
      question: `¿Cual fue el primer tren de alta velocidad?`,
      answers: {
          a: `Elettrotreno ETR200`,
          b: `Shinkansen`,
          c: `Metroliner`,
        },
      correctAnswer: `a`
    },
    {
      question: `¿Que lograron los japoneses al crear el Shinkansen?`,
      answers: {
          a: `Nada`,
          b: `Revolucionar en la industria ferroviaria y del transporte`,
          c: ` Crear un tren mas moderno`,
        },
      correctAnswer: `b`
    },
    {
      question: `Rompió el mayor record de velocidad para un tren en 2007:`,
      answers: {
          a: `CRH380A`,
          b: `Maglev`,
          c: `TGV`,
        },
      correctAnswer: `c`
    }
  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      const output = [];
      let answers;
  
      for(let i=0; i<questions.length; i++){
        
        answers = [];
  
        for(letter in questions[i].answers){
  
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      const answerContainers = quizContainer.querySelectorAll('.answers');
      
      let userAnswer = '';
      let numCorrect = 0;
      
      for(let i=0; i<questions.length; i++){
  
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        if(userAnswer===questions[i].correctAnswer){
          numCorrect++;

          answerContainers[i].style.color = '#00BD1A';
        }
        else{
          answerContainers[i].style.color = '#DE2221';
        }
      }

      resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }
  