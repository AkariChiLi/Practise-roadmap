function isAnswerCorrect(question,userAnswer){
    if(!userAnswer){
        return false;
    }
    if(question.correctAnswer===userAnswer.answer){
        return true;
    }else{
        return false;
    }
}

function countCorrectAnswers(questions,userAnswers){
     let correctAnswers=0;
    for(let i=0;i<questions.length;i++){
    const matchedAnswers=userAnswers.find(
        answer=>answer.questionId === questions[i].id
    )
        if(isAnswerCorrect(questions[i],matchedAnswers)){
            correctAnswers++;
        }
    }
    return correctAnswers;
}

function calculatePercentage(correctAnswers,totalQuestions){
    return (correctAnswers/totalQuestions)*100;
}

function getResultMessage(percentage){
    if(percentage>=90){
        return "优秀";
    }else if(percentage>=70){
        return "良好";
    }else if(percentage>=50){
        return "中等";
    }else{
        return "较差";
    }
}

function createQuizResult(questions,userAnswers){
    let correctAnswers=countCorrectAnswers(questions,userAnswers);
    let totalQuestions=questions.length;
    let percentage=calculatePercentage(correctAnswers,totalQuestions);
    let message=getResultMessage(percentage);
    return{
        correctCount: correctAnswers,
        totalQuestions,
        percentage,
        message
    };
}