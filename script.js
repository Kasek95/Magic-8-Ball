const text = document.querySelector("input");
const ball = document.querySelector("img");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");


const answers = [
    `Możesz być jeszcze lepszy`,
    "Wolał bym nie odpowiadać tobie na to pytanie",
    "Musisz jeszcze trochę poćwiczyć",
    "Jesteś dobry w tym co robisz",
    "Tak",
    "Nie",
    "Ciężko odpowiedzieć ma to pytanie",
    "Nie chcesz znać odpowiedzi na to pytanie...... :/"
]

const shakeBall = () => {
    ball.classList.add("shake-animation");
    setTimeout(checkInput,1000)
}

const checkInput = () => {
    if(text.value !== " " && text.value.slice(-1) === "?") {
        generateAnswer()
        error.textContent = "";
        ball.classList.remove("shake-animation")
    }else if(text.value !== "" && text.value.slice(-1) !== "?"){
        error.textContent = `Twoje pytanie musi być zakończone znakiem "?"`
        answer.textContent = ""
        ball.classList.remove("shake-animation")
    } else {
        error.textContent = `Musisz zadać jakieś pytanie`
        answer.textContent = ""
        ball.classList.remove("shake-animation")
    }

}

const generateAnswer =() => {
  const number = Math.floor(Math.random() * answers.length)
    answer.innerHTML = `<span>Twoja odpowiedź to</span> ${answers[number]}`
}

ball.addEventListener("click", shakeBall)

