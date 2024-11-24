const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.querySelector('.chat-messages');

// Simple NLP library for chatbot responses
const nlp = {
    responses: {
        'hello': 'Hi! How are you?',
        'how are you': 'I\'m good, thanks!',
        'what is your name': 'My name is ChatBot',
        'default': 'I didn\'t understand that. Can you please rephrase?'
    }
};

// Send message function
function sendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `
        <span class="username">You</span>
        <span class="message-text">${message}</span>
    `;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Handle form submission
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (message) {
        sendMessage(message);
        const response = nlp.responses[message.toLowerCase()] || nlp.responses.default;
        setTimeout(() => {
            sendMessage(response);
        }, 1000); // Simulate delay
        chatInput.value = '';
    }
});