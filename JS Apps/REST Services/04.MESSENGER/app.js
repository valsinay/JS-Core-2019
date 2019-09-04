function attachEvents() {

    const url = `https://rest-messanger.firebaseio.com/messanger.json`

    const submitBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const textArea = document.getElementById('messages');
    const name = document.getElementById('author')
    const content = document.getElementById('content');

    submitBtn.addEventListener('click', sendMessage)
    refresh.addEventListener('click', refreshMessage);

    function sendMessage() {

        if (name.value && content.value) {
            const message = {
                name,
                content
            };

            textArea.textContent += `${name.value}: ${content.value}\n`

            fetch(url, {
                method: 'post',
                body: JSON.stringify(message)
            })
                .then(info => info.json())
        }

        name.value = "";
        content.value ="";
    }

    function refreshMessage(){

        textArea.textContent = ""

        fetch(url)
        .then(info => info.json())
        .then(data => {

            const currentMessages = Object.values(data);

            for(let message of currentMessages){
                    textArea.textContent += `${message.author}: ${message.content}\n`;
            }

        })
    }
}

attachEvents();