

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

    let getCorrectAnswers = correctAnswers.map( item => { return " - " + item['character'] + " : '" + item['quote'] + "' \n\n"}) 

    alert("Tus respuestas correctas fueron: \n\n" + getCorrectAnswers)

    if(score == 5) {
        alert("Obtuviste un puntaje perfecto! Felicitaciones!")
    } else {
        alert("Tu puntaje fue: " + score)
    }
}