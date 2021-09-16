export default class Button{
    render() {
        return `
            <button class="quiz-btn">
                    <span class="plus-icon" id="plusBtn"><i class="fa fa-plus-circle" aria-hidden="true"></i></span>
                    <span class="minus-icon" id="minusBtn"><i class="fa fa-minus-circle" aria-hidden="true"></i></span>
            </button>
`
    }
}

// const questions = document.querySelectorAll(".quiz");
// questions.forEach(function (question) {
//     const btn = question.querySelector("#plusBtn");
//     btn.addEventListener("click", function () {
//         // questions.forEach(function (item) {
//         //     if (item !== question) {
//         //         item.classList.remove("show-text");
//         //     }
//         // });
//
//         question.classList.toggle("show-text");
//     });
// });