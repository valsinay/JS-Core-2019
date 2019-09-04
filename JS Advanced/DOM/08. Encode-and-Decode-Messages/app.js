function encodeAndDecodeMessages() {
 
    let textArea = document.getElementsByTagName('textarea')[0];
    let decodeArea = document.getElementsByTagName('textarea')[1];

    let sendBtn = document.getElementsByTagName('button')[0];
    let decodeBtn = document.getElementsByTagName('button')[1];


    sendBtn.addEventListener('click',() => {
       let input =textArea.value;
       let encoded = "";
       for(let i=0; i< input.length;i++){

        encoded+=String.fromCharCode(input[i].charCodeAt(0) + 1);

       }

       decodeArea.value = encoded;
       textArea.value = "";    
    })
    
    decodeBtn.addEventListener("click",() => {
        let input = decodeArea.value;
        let encoded = "";

        for(let i=0; i<input.length;i++){
        encoded+=String.fromCharCode(input[i].charCodeAt(0) - 1);
        }
        decodeArea.value = encoded;
    })
}   