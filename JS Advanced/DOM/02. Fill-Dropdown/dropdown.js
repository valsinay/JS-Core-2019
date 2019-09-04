function addItem() {
    let newItemText = document.getElementById('newItemText').value;
    let newItemValue = document.getElementById('newItemValue').value;

    let menu = document.getElementById('menu');
    let newOptionElement = document.createElement('option');

    newOptionElement.textContent = newItemText;
    newOptionElement.value = newItemValue;

    menu.appendChild(newOptionElement);

    document.getElementById('newItemText').value = "";
    document.getElementById('newItemValue').value= "";

}