
let snowRef = document.getElementById('snow')
let innterHTMLaux = []
for( let i = 0; i < 200; i++) {
    innterHTMLaux.push(' <div class="snow"></div>')
}
snowRef.innerHTML = innterHTMLaux

function updateValue(e) {
    console.log(e.srcElement.value)
    return e.srcElement.value
}

///////////////////////////////////////////////////////////////////////////////////

function setUsername (event) {
    userName = document.getElementById("nameInput").value
    event.preventDefault();
    
    let startGameSetUp = document.getElementById("gameContent")
    
    if(userName == "") {

        let htmlAux = document.getElementById("inputLabelContainer").outerHTML

        let extrahtml = "<div id='invalidName'> * Ingrese un nombre válido</div>"
        startGameSetUp.innerHTML = htmlAux + extrahtml

        let submitNameButton = document.getElementById("submitNameButton")
        let nameInput = document.getElementById("nameInput")
        
        if((submitNameButton != undefined) && (nameInput != undefined)) {
            submitNameButton.addEventListener('click', setUsername)
        } 

    } else {
        sessionStorage.setItem("userName", document.getElementById("nameInput").value.toString())

        let auxUserName =  sessionStorage.getItem("userName")
        
        startGameSetUp.innerHTML = 
            `<div id='startGameTitle'> All set ${auxUserName}! Do you want to start the game? </div> 
            <div id="startGameButtonRef"> 
                <div class="startGameButton">
                    <div class="startGameText">START GAME</div>
                </div>
            </div>`

        let startGameButton = document.getElementById("startGameButtonRef")
        if(startGameButton) startGameButton.addEventListener('click',getARandomQuote)
            
    }
    
}

let userName = ""

let submitNameButton = document.getElementById("submitNameButton")
let nameInput = document.getElementById("nameInput")

if((submitNameButton != undefined) && (nameInput != undefined)) {
    submitNameButton.addEventListener('click', setUsername)
}



function getARandomQuote () {
    let score = 0

    let answers = []

    let quotes = [ 
        {
            quote: "When you play the game of thrones, you win or you die. There is no middle ground.",
            character: "Cersei Lannister"
        },
        {
            quote: "The man who passes the sentence should swing the sword.",
            character: "Eddard Stark"
        },
        {
            quote: "The day will come when you think you are safe and happy, and your joy will turn to ashes in your mouth.",
            character: "Tyrion Lannister"
        },
        {
            quote: "When people ask you what happened here, tell them the North remembers. Tell them winter came for House Frey.",
            character: "Arya Stark"
        },
        {
            quote: "Love is the death of duty.",
            character: "Jon Snow"
        }
    ]
    

    for ( let i = 0; i < quotes.length ; i++) {

        let quote = quotes[i].quote

        let answer = prompt("Who said this: '" + quote + "'")

        if(answer == null) {
            alert("Exiting the game")
            return
        }

        while ( answer.length == 0) {
            answer = prompt("Who said this: '" + quote + "'")

            if(answer == null) {
                alert("Exiting the game")
                return
            }
        }

        if( quotes[i]['character'].toLowerCase() == answer.toLowerCase()) {
            score = score + 1
            
            answers.push({
                quote: quotes[i]['quote'],
                character: quotes[i]['character'],
                result: 'correct'
            })

            alert("Correct answer! You scored one more point \n Your score is: " + score)
        } else {
            alert("Wrong answer, but you have one more chance. Use it well!")

            answer = prompt("Who said this: '" + quote + "'")

            if(answer == null) {
                alert("Exiting the game")
                return
            }
    
            while ( answer.length == 0) {
                answer = prompt("Who said this: '" + quote + "'")
    
                if(answer == null) {
                    alert("Exiting the game")
                    return
                }
            }

            if( quotes[i]['character'].toLowerCase() == answer.toLowerCase()) {

                score = score + 1
                answers.push({
                    quote: quotes[i]['quote'],
                    character: quotes[i]['character'],
                    result: 'correct'
                })

                alert("Correct answer! You scored one more point \n Your score is: " + score)

            } else {

                answers.push({
                    quote: quotes[i]['quote'],
                    character: quotes[i]['character'],
                    result: 'incorrect'
                })
                
                alert("Wrong answer, your score is still: " + score)

            }
        }
    }

    sessionStorage.setItem("answers", JSON.stringify(answers))
    let auxAnswers =  JSON.parse(sessionStorage.getItem("answers"))

    let correctAnswers = auxAnswers.filter( item => item.result == 'correct' )

    if(score == 5) {
        alert("Perfect score! Congratulations!")
    } else {
        alert("Your score was: " + score)
    }  

    if(score === 0){

        document.getElementById("gameContent").innerHTML = "<div id = 'answersTitleContainer' > You don't have correct answers </div><div id='startGameButton'> </div>"

        document.getElementById("startGameButton").innerHTML = '<div id="restartGame"> Want to play again? </div>'

    } else {
        let showResults = [`<div id = "answersTitleContainer" > Your correct answers are: </div>`]

        for ( let answer in correctAnswers){
            showResults.push(`<div class = 'answersStyle'> - ${correctAnswers[answer]['character']}  : ' ${correctAnswers[answer]['quote']} ' \n\n</div>`)
        }

        document.getElementById("gameContent").innerHTML = `<div class = 'answersContainer'> ${showResults} </div>  <div id="startGameButton"> <div id='restartGame'> Want to play again? </div></div>`
    }


    let restartGameButton = document.getElementById("startGameButton")
    restartGameButton.addEventListener('click',restartGame)

}

function restartGame () {

    let changeContent = '<div id="startGameButtonRef"><div class="startGameButton"><div class="startGameText">START GAME</div></div></div>'
    document.getElementById("gameContent").innerHTML = changeContent
    
    let startGameButton = document.getElementById("startGameButtonRef")
    startGameButton.addEventListener('click',getARandomQuote)

}
