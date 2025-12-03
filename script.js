// operazioni di preparazione
// Recupero gli elementi di interesse della pagina:
const input = document.querySelector('input');
const button = document.querySelector('button');
const chatBox = document.querySelector('.chat-box');

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
];

// Funzione principale per renderizzare tutti i messaggi nella chat-box
const renderMessages = () => {
    // Svuoto la chat-box (approccio meno performante ma efficace per questo esempio)
    chatBox.innerHTML = '';
    
    // Per ciascuno dei messaggi..
    for (const message of messages) {
        chatBox.innerHTML += `
<div class="chat-row ${message.type}">
    <div class="chat-message">
        <p>${message.text}</p>
        <time datetime="${message.time}">${message.time}</time>
    </div>
</div>`;
    }
    
    // Scorre la chat-box in basso dopo il render, se necessario (Opzionale)
    chatBox.scrollTop = chatBox.scrollHeight;
};

// Funzione principale per inviare un nuovo messaggio
const sendMessage = () => {
    const insertedText = input.value.trim(); // "trim" toglie gli spazi superflui

    if(insertedText === '') return; // Se non c'è testo l'invio viene annullato

    const newMessage = {
        type: 'sent', // Assumiamo che l'utente stia sempre inviando ('sent')
        text: insertedText,
        time: new Date().toLocaleString()
    };

    // 1. Aggiungo il nuovo messaggio all'array
    messages.push(newMessage);

    // 2. Aggiorno la visualizzazione
    renderMessages();
    
    // 3. Pulisco l'input e mantengo il focus
    input.value = '';
    input.focus();
    chatBox.scrollTop = chatBox.scrollHeight;
};

//# OPERAZIONI DI AVVIO PAGINA
// Carico e visualizzo i messaggi iniziali
renderMessages();

//# OPERAZIONI DI INTERAZIONE CON L'UTENTE

// 1. Al click del bottone..
button.addEventListener('click', sendMessage);


// 2. Alla pressione del tasto nel campo di input..
input.addEventListener('keypress', function(event) {
    // Verifica se il tasto premuto è il tasto 'Invio' (codice 13)
    if (event.key === 'Enter') {
        
        // Impedisce la newline (il comportamento predefinito) o l'invio del form
        event.preventDefault(); 
        
        // Chiama la stessa funzione che viene usata al click del bottone
        sendMessage(); 
    }
});

