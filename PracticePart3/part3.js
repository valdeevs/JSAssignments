//Marco Valdivia
//Scrimba Assignment
//12/9/2022

//Let and Const
const player = "Marco"
const opponent = "Nick"
const game = "AmazingFighter"

let points = 0
let hasWon = false

points += 100
hasWon = true

if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}

//Log our items in an array
let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

function logItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
logItems(myCourses)

//save to localStorage
let myCredits = localStorage.getItem("myCredits")
console.log(myCredits)

//addEventListener and object in array
let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",                             
        score: 41
    }
]

const janeBtn = document.getElementById("jane-btn")

janeBtn.addEventListener("click", function() {
    console.log(data[0].score)
})

//Generate sentences
function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "   
        }
    }
    return baseString
}
const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
console.log(sentence)
//Marco Valdivia
//Scrimba Assignment
//Render Images
const imgs = [
    "images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"
]
const container = document.getElementById("container")
function renderImages() {
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDOM
}
renderImages()