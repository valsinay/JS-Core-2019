
function mySolution() {

    let textArea = document.querySelector('#inputSection textarea');
    let name = document.querySelector("#inputSection input");

    let sendBtn = document.querySelector('#inputSection button');

    let pendingQuestions = document.getElementById('pendingQuestions');
    let openQuestions = document.getElementById('openQuestions');

    sendBtn.addEventListener('click', sendButton);


    function sendButton() {
        if (textArea.value) {

            let div = document.createElement('div');
            let img = document.createElement('img');
            let span = document.createElement('span');

            div.setAttribute("class", "pendingQuestion");

            img.src = "./images/user.png";
            img.width = 32;
            img.height = 32;
            let p = document.createElement('p');

            if (!name.value) {
                span.textContent = "Anonymous"
            }
            else {
                span.textContent = name.value;
            }
            p.textContent = textArea.value;

            div.appendChild(img);
            div.appendChild(span)
            div.appendChild(p);
            let divActions = document.createElement('div');
            divActions.setAttribute("class", "actions");
            let archiveButton = document.createElement('button');
            let openButton = document.createElement('button');
            archiveButton.setAttribute("class", "archive");
            openButton.setAttribute("class", "open");

            archiveButton.textContent = 'Archive';
            openButton.textContent = "Open";

            divActions.appendChild(archiveButton);
            divActions.appendChild(openButton);
            div.appendChild(divActions);
            pendingQuestions.appendChild(div);


            archiveButton.addEventListener('click', function () {
                div.remove();

            })

            openButton.addEventListener('click', open);

            function open() {
                divActions.removeChild(openButton);
                divActions.removeChild(archiveButton);
                let replyButton = document.createElement('button')
                replyButton.textContent = "Reply"
                replyButton.setAttribute('class', 'reply');
                pendingQuestions.removeChild(div);
                div.setAttribute("class", "openQuestion");
                divActions.appendChild(replyButton);

                let replySection = document.createElement('div');
                replySection.setAttribute('class', 'replySection');
                replySection.style.display = 'none';
                let input = document.createElement('input');
                input.setAttribute('class', 'replyInput');
                input.setAttribute('type', 'text');
                input.setAttribute('placeholder', "Reply to this question here...");
                let replySendBtn = document.createElement('button');
                replySendBtn.setAttribute('class', 'replyButton');
                replySendBtn.textContent = "Send";
                let ol = document.createElement('ol');
                ol.setAttribute('class', ' reply');
                ol.setAttribute('type', '1');
                replySection.appendChild(input);
                replySection.appendChild(replySendBtn);
                replySection.appendChild(ol);
                div.appendChild(divActions);
                div.appendChild(replySection);
                openQuestions.appendChild(div);

                replyButton.addEventListener('click', function () {
                    if (replyButton.textContent === "Reply") {

                        replyButton.textContent = 'Back';
                        replySection.style.display = 'block';
                    }
                    else {
                        replyButton.textContent = 'Reply';
                        replySection.style.display = 'none';
                    }
                })
                replySendBtn.addEventListener('click', function () {
                    if (input.value) {
                        let liElement = document.createElement('li');
                        liElement.textContent = input.value;
                        ol.appendChild(liElement);
                    }
                    input.value = "";
                })
            }
            document.querySelector('#inputSection textarea').value = "";
            document.querySelector("#inputSection input").value = "";
        }
    }
}
