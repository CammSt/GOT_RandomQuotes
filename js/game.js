
let snowRef = document.getElementById('snow')
let innterHTMLaux = []
for( let i = 0; i < 200; i++) {
    innterHTMLaux.push('<div class="snow"></div>')
}
snowRef.innerHTML = innterHTMLaux.join('')

function updateValue(e) {
    console.log(e.srcElement.value)
    return e.srcElement.value
}

const charactersImages = [
    {
        'character': "Brienne of Tharth" ,
        "image": "https://thronesapi.com/assets/images/brienne-tarth.jpeg"
    },
    {
        'character': "Tormund",
        "image": "https://thronesapi.com/assets/images/tormund-giantsbane.jpg"
    },
    {
        'character': "Ramsay Bolton",
        "image": "https://thronesapi.com/assets/images/ramsey-bolton.jpg"
    },
    {
        'character': "Cersei Lannister",
        "image": "https://thronesapi.com/assets/images/cersei.jpg"
    },
    {
        'character': "Sansa Stark",
        "image": "https://thronesapi.com/assets/images/sansa-stark.jpeg"
    },
    {
        'character': "Tyrion Lannister",
        "image": "https://thronesapi.com/assets/images/tyrion-lannister.jpg"
    },
    {
        'character': "Tywin Lannister",
        "image": "https://thronesapi.com/assets/images/tywin-lannister.jpg"
    },
    {
        'character': "Mance Rayder",
        "image": "https://es.web.img2.acsta.net/r_1280_720/newsv7/15/02/25/10/59/5324690.jpg"
    },
    {
        'character': "Petyr Baelish",
        "image": "https://thronesapi.com/assets/images/littlefinger.jpg"
    },
    {
        'character': "Aerys II Targaryen",
        "image": "https://static.wikia.nocookie.net/juego-detronos-fanon/images/4/47/Aerys_II_Targaryen_Mad_King.jpg/revision/latest?cb=20190713222806&path-prefix=es"
    },
    {
        'character': "Jaime Lannister",
        "image": "https://thronesapi.com/assets/images/jaime-lannister.jpg"
    },
    {
        'character': 'Eddard "Ned" Stark',
        "image": "https://thronesapi.com/assets/images/ned-stark.jpg"
    },
    {
        'character': "Lord Varys",
        "image": "https://thronesapi.com/assets/images/varys.jpg"
    },
    {
        'character': "Arya Stark",
        "image": "https://thronesapi.com/assets/images/arya-stark.jpg"
    },
    {
        'character': "Jon Snow",
        "image": "https://thronesapi.com/assets/images/jon-snow.jpg"
    },
    {
        'character': "Theon Greyjoy",
        "image": "https://thronesapi.com/assets/images/theon.jpg"
    },
    {
        'character': "Bran Stark",
        "image": "https://thronesapi.com/assets/images/bran-stark.jpg"
    },
    {
        'character': "Samwell Tarly",
        "image": "https://thronesapi.com/assets/images/sam.jpg"
    },
    {
        'character': "Robert Baratheon",
        "image": "https://thronesapi.com/assets/images/robert-baratheon.jpeg"
    },
    {
        'character': "Olenna Tyrell",
        "image": "https://thronesapi.com/assets/images/olenna-tyrell.jpg"
    },
    {
        'character': "Joffrey Baratheon",
        "image": "https://thronesapi.com/assets/images/joffrey.jpg"
    },
    {
        'character': "Melisandre",
        "image": "https://thronesapi.com/assets/images/melisandre.jpg"
    },
    {
        'character': "Daenerys Targaryen",
        "image": "https://thronesapi.com/assets/images/daenerys.jpg"
    }
]

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
let answers = []

let submitNameButton = document.getElementById("submitNameButton")
let nameInput = document.getElementById("nameInput")

if((submitNameButton != undefined) && (nameInput != undefined)) {
    submitNameButton.addEventListener('click', setUsername)
}


async function quotesFetch () {

    const quotes = fetch('https://api.gameofthronesquotes.xyz/v1/random/10')
        .then(response => response.json())
        .then(json => {
            return json;
        })
        .catch( e => console.log(e) )
    
    return quotes;
}

async function getRandomImages (characters,randomImages,correctAnswer) {
    
    let max = characters.length - 1
    
    let i = 0
    while(randomImages.length != 3) {
        let index = Math.round(Math.random() * (max - 0) + 0);

        let imageObj = {
            image : characters[index].image,
            character: characters[index].character
        }

        if( (!randomImages.find( item => item.character == imageObj.character)) && (imageObj.character != correctAnswer)  ){
            randomImages.push(imageObj)
        }

        i++
    }
    randomImages.push(characters.find( item => item.character == correctAnswer))

    randomImages.sort((a, b) => 0.5 - Math.random());
}

function selectOnlyThis(id) {
    for (let i = 1;i <= 4; i++) {
        document.getElementById("feature" + i).checked = false;
    }
    document.getElementById(id).checked = true;
}

function getSelectedOption() { 
    let selected = null

    for (let i = 1;i <= 4; i++) {
        
        if(document.getElementById("feature" + i).checked) {
            selected = document.getElementById("feature" + i)
        }
    } 

    return selected
}

function gameEnded(score,answers,iteration) {
    sessionStorage.setItem("answers", JSON.stringify(answers))
    let auxAnswers =  JSON.parse(sessionStorage.getItem("answers"))

    let correctAnswers = auxAnswers.filter( item => item.result == 'correct' )

    document.getElementById('scoreHeader').innerHTML = `<div class="header_Title"> WHO SAID IT? </div>`

    if(score == 10) {
        Swal.fire({
            title: 'Perfect score!',
            text: 'Congratulations! You answered correctly all 10 questions',
            icon:'success',
            confirmButtonText: 'OK',
        })
    } else {
        Swal.fire({
            title: 'Game over!',
            text: 'Your final score is '+ score,
            icon:'success',
            confirmButtonText: 'OK',
        })
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


function nextQuestion(answerToCheck,score,answers,levelCompleted,iteration,quotes) {
    let selected = getSelectedOption()
    
    if(selected == null) {
        Swal.fire({
            title: 'No option selected',
            text: 'Select an option to keep playing',
            icon:'error',
            confirmButtonText: 'OK',
        })
    } else {
        if( selected.value.toLowerCase() == answerToCheck['character']['name'].toLowerCase()) {

            score = score + 1
            console.log("score es: ", score);

            answers.push({
                quote: answerToCheck['sentence'],
                character: answerToCheck['character']['name'],
                result: 'correct'
            })

            Swal.fire({
                title: 'Correct answer!',
                text: 'You scored one more point \n Your score is: ' + score,
                icon:'success',
                confirmButtonText: 'OK',
            })
            
        } else {
            Swal.fire({
                title: 'Wrong answer!',
                text: 'Your score is still: ' + score,
                icon:'error',
                confirmButtonText: 'OK',
            })
        }

        levelCompleted = true
        
        if(levelCompleted) {
            if(iteration == 10) {
                gameEnded(score,answers,iteration)
            } else {
                iteration++
                starGame(quotes,iteration,score)
            }
        }
    }
}


async function starGame(quotes,iteration,score) {

    let levelCompleted = false
    
    let quote = quotes[iteration-1].sentence
    let randomImages = []
    await getRandomImages(charactersImages,randomImages,quotes[iteration-1]['character']['name'])
    

    document.getElementById("gameContent").innerHTML = `
        <div id='checkboxContainer'>
            <div id='quoteTitle'> Who said this: '${quote}'</div>
            <div id='imagesContainer'>
                <article id='optionContainer1'>
                    <input type="checkbox" id="feature1" onclick="selectOnlyThis(this.id)" value="${randomImages[0]['character']}"/>
                    <img src="${randomImages[0]['image']}" alt="${randomImages[0]['character']}" >
                    <div>${randomImages[0]['character']}</div>
                </article> 
                <article id='optionContainer2'>
                    <input type="checkbox" id="feature2" onclick="selectOnlyThis(this.id)" value="${randomImages[1]['character']}"/>
                    <img src="${randomImages[1]['image']}" alt="${randomImages[1]['character']}" >
                    <div>${randomImages[1]['character']}</div>
                </article> 
                <article id='optionContainer3'>
                    <input type="checkbox" id="feature3" onclick="selectOnlyThis(this.id)" value="${randomImages[2]['character']}"/>
                    <img src="${randomImages[2]['image']}" alt="${randomImages[2]['character']}" >
                    <div>${randomImages[2]['character']}</div>
                </article> 
                <article id='optionContainer4'>
                    <input type="checkbox" id="feature4" onclick="selectOnlyThis(this.id)" value="${randomImages[3]['character']}"/>
                    <img src="${randomImages[3]['image']}" alt="${randomImages[3]['character']}" >
                    <div>${randomImages[3]['character']}</div>
                </article>
            </div>
        </div>
        <div id="nextQuestionButton">
            <div>CONFIRM</div>
        </div>
        `
        if(document.getElementById('gameHeader')) {
            document.getElementById('gameHeader').id = 'scoreHeader';
            document.getElementById('scoreHeader').innerHTML = `<div class="header_Title"> WHO SAID IT? </div><div id='circleScore'> ${iteration} / 10</div>`
        } else {
            document.getElementById('scoreHeader').innerHTML = `<div class="header_Title"> WHO SAID IT? </div><div id='circleScore'> ${iteration} / 10</div>`
        }
        
        document.getElementById("nextQuestionButton").addEventListener('click',() => { nextQuestion(quotes[iteration-1],score,answers,levelCompleted,iteration,quotes); return })
}


async function getARandomQuote () {
    let quotes = await quotesFetch()

    let score = 0
    console.log("quotes ",quotes);

    let iteration = 1
    
    starGame(quotes,iteration,score)
}

function restartGame () {

    let changeContent = '<div id="startGameButtonRef"><div class="startGameButton"><div class="startGameText">START GAME</div></div></div>'
    document.getElementById("gameContent").innerHTML = changeContent
    
    let startGameButton = document.getElementById("startGameButtonRef")
    startGameButton.addEventListener('click',getARandomQuote)

}


