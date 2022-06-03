

function getARandomQuote () {
    let score = 0

    let answers = []

    document.getElementById("gameContent").innerHTML = "<div class='aux'> <p>No tuviste respuestas correctas</p></div>"

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
            alert("Saliendo del juego")
            return
        }

        while ( answer.length == 0) {
            answer = prompt("Who said this: '" + quote + "'")

            if(answer == null) {
                alert("Saliendo del juego")
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

            alert("Respuesta correcta! Sumaste un punto \n Tu puntaje actual es: " + score)
        } else {
            alert("Respuesta incorrecta, pero tenés una oportunidad más. Úsala bien!")

            answer = prompt("Who said this: '" + quote + "'")

            if(answer == null) {
                alert("Saliendo del juego")
                return
            }
    
            while ( answer.length == 0) {
                answer = prompt("Who said this: '" + quote + "'")
    
                if(answer == null) {
                    alert("Saliendo del juego")
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

                alert("Respuesta correcta! Sumaste un punto \n Tu puntaje actual es: " + score)

            } else {

                answers.push({
                    quote: quotes[i]['quote'],
                    character: quotes[i]['character'],
                    result: 'incorrect'
                })
                
                alert("Respuesta incorrecta, tu puntaje actual sigue siendo " + score)

            }
        }
    }

    let correctAnswers = answers.filter( item => item.result == 'correct' )

    if(score == 5) {
        alert("Obtuviste un puntaje perfecto! Felicitaciones!")
    } else {
        alert("Tu puntaje fue: " + score)
    } 

    if(score == 0){
        document.getElementById("gameContent").innerHTML = '<div class = "answersTitleContainer" > No tuviste respuestas correctas </div><a href="#" onclick="restartGame()"> <div class="aux"> ¿Querés jugar de nuevo? </div> </a>'
    } else {
        let showResults = [`<div class = "answersTitleContainer" > Tus respuestas correctas son </div>`]

        for ( let answer in correctAnswers){
            showResults.push(`<div class = 'answersStyle'> - ${correctAnswers[answer]['character']}  : ' ${correctAnswers[answer]['quote']} ' \n\n</div>`)
        }

        let container = `<div class = 'answersContainer'>`

        container = container + showResults + `</div>`

        document.getElementById("gameContent").innerHTML = container
    }

}

function restartGame () {

    let changeContent = '<a class="startGameButtonRef" href="#" onclick="getARandomQuote()"><div class="startGameButton"><div class="startGameText">START GAME</div></div></a>'

    document.getElementById("gameContent").innerHTML = changeContent

}