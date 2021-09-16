import Button from "./Button";
let btn = new Button()
export default class QuizContent {
    constructor(quiz, quizAnswer) {
        this.quiz = quiz
        this.quizAnswer = quizAnswer
    }

    render() {
        return `
        <div class="quiz">
            <div class="quiz-title">
                <p>${this.quiz}</p>
                ${btn.render()}
            </div>
            <div class="quiz-text">
                <p>${this.quizAnswer}</p>
            </div>
        </div>`
    }

}