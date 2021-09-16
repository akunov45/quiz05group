import {quizData} from "./QuizData/quiz-data";
import Header from "./components/header";
import QuizContent from "./components/QuizContent";
/* Start Header TitleComponent*/
let headerComponent = new Header()
let headerTitle = document.getElementsByClassName('title')[0]
headerTitle.innerHTML = headerComponent.render()
/* End Header TitleComponent*/
/* Start ContentComponent*/
const text = quizData.map((text) => new QuizContent(text.quiz, text.quizDescription))
const questionsComponent = text.reduce((renderData, data) => {
    return renderData += data.render()
}, '')
let container = document.getElementsByClassName('content')[0]
container.innerHTML = questionsComponent

/* End ContentComponent*/

const questions = document.querySelectorAll(".quiz");
questions.forEach((question) => {
    //all quiz div (class='quiz')
    const btn = question.querySelector('#plusBtn')
    // console.log(btn)//all btn
    btn.onclick = () => {
        questions.forEach(function (item) {
            // console.log(item,'item') //show-text
            console.log(question,'quiz')
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    }
})













