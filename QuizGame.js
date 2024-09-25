const questions = document.getElementById('questions');
const ques = ['how are you today?','whats your name?','how old are you?' , 'what do you do for living?',
              'whats your favorite meal?','whats your favorite movie?','what music you listen to?',
                'are you having fun with us?'];
function quizGenerator(){
    const QuizSet = new Set();
    
    if(QuizSet.size === ques.length){
        QuizSet.clear()
    }
    while (true){
        const quizIndex = Math.floor((Math.random())*ques.length)
        if(QuizSet.has(quizIndex)) continue
        const Quiz = ques[quizIndex]
        questions.innerHTML = Quiz;
        QuizSet.add(quizIndex)
        const answer = prompt(Quiz)
        return answer
        break
    }
}   

