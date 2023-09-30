

function Quiz(questions){
    this.score=0;
    this.questions=questions
    this.questionIndex=0
}
function Question(text, options, answer){
    this.text=text;
    this.options=options
    this.answer= answer
}

Quiz.prototype.getQuestionByIndex=function(){
    return this.questions[this.questionIndex]
}

Quiz.prototype.checkOptionWithAnswer=function(ans){
    if(this.getQuestionByIndex().answer==ans){
        this.score++
    }
    this.questionIndex++
}

Quiz.prototype.isEnded=function(){
    return this.questionIndex==this.questionIndex.length
}

let questions=[
    new Question("JavaScript supports", ["Functions", "XHTML", "CSS", "HTML"], "Functions"),
    new Question("Which language is used for styling web pages", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a javascript framework", ["Python", "JQuery", "Django", "NodeJS"], "Django"),
    new Question("Which is used to connect to Database", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("Javascript is a", ["Language", "Programming Language","Development", "All"], "Programming Language")
]

let quiz =new Quiz(questions)

function displayQuestions(){
    if(quix.isEnded()){
        showScores()

    }else{
        let questionElem = document.getElementById("question")
    questionElem.innerHTML =quiz.getQuestionByIndex().text

    let choices =quiz.getQuestionByIndex().options
    for(let i=0; i<choices.length; i++){
        let elem = document.getElementById("Choice"+1)
        elem.innerText=choices[i]
        handleClickOnBtn("Btn"+1, choices[i])
    }
    showprogress()

    }
    
}
function showprogress(){
    let curr=quiz.questionIndex+1
    let elem=document.getElementById("progress")
    elem.innerText='question ${curr} of ${quiz.questions.length}'
}

function handleClickOnBtn(id, Choice){
    let buttonElem=document.getElementById(id)
    buttonElem.onclick=function(){
        quiz.checkOptionWithAnswer(choice)
        displayQuestions()

    }
}
function showScores(){
    let heading='<h1>Result</h1><h2 id="score">Your score:${quiz.score}.And your mark percentage is:${(quiz.score/question.length)*100}</h2>'
    let quizElem=document.getElementById("quiz")
    quizElem.innerHTML=result

}
displayQuestions()