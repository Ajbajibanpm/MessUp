// operazioni di preparazione
// Recupero gli elementi di interesse della pagina:
const input = document.querySelector('input')
const button = document.querySelector('button')
const chatBox = document.querySelector('.chat-box')

// preparazione dei messaggi iniziali
const messages = [
    {
    type: 'sent',
    text: 'Ciao, come va?',
    time: '03/12/2025 12:05:00'
},
{
    type: 'received',
    text: 'Benissimo, grazie. E tu?',
    time: '03/12/2025 12:05:00'
}
]

//# OPERAZIONI DI AVVIO PAGINA

//Funzioni per mostrare i messaggi
showMessages()

//# OPERAZIONI DI INTERAZIONE CON L'UTENTE
// Al click del bottone..
button.addEventListener('click',sendMessage)

//alla pressione del tasto INVIO
input.addEventListener('keydown', function(){
    if (event.key === 'Enter') sendMessage()}
)

//#FUNZIONI UTILI
//Funzioni per mostrare i messaggi
function showMessages(){
    //Svuoto la chat-box
    chatBox.innerHTML = '';

 //per ciascuno dei messaggi..
for (const message of messages) {
    chatBox.innerHTML += `
<div class="chat-row ${message.type}">
    <div class="chat-message">
        <p>${message.text}</p>
        <time datetime="${message.time}">${message.time}</time>
    </div>
</div>`
}
}

//Funzione per aggiungere messaggi
function addMessage(messageType, messageText, ){
    const newMessage = {
        type: messageType,
        text: messageText,
        time: new Date().toLocaleString()
    }

 messages.push(newMessage)

showMessages()
}

function sendMessage() {
    const insertedText = input.value.trim(); //"trim" toglie gli spazi superflui

    if(insertedText === '') return //se non c'è testo l'invio viene annullato

addMessage('sent', input.value)

input.value = '' //svuoto l'input
input.focus() //riporto il focus sulla tabella
chatBox.scrollTop = chatBox.scrollHeight
}
