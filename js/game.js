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


let userName = ""

let submitButton = document.getElementById("submitNameButton")
