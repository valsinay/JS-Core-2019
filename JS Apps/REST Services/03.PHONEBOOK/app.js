function attachEvents() {

    const url = `https://phonebook-nakov.firebaseio.com/phonebook.json`
    let phonebook = document.getElementById('phonebook');

    document.getElementById('btnLoad')
        .addEventListener('click', loadmethod)

    document.getElementById('btnCreate')
        .addEventListener('click', createContact)

    function loadmethod() {

        fetch(url)
            .then(info => info.json())
            .then(data => {
                let obj = Object.values(data)

                for (let value of obj) {
                    let li = document.createElement('li');
                    li.textContent = `${value.person}: ${value.phone}`;
                    const delBtn = document.createElement('button');
                    delBtn.textContent = "Delete";
                    li.appendChild(delBtn);
                    phonebook.appendChild(li);

                    
                    delBtn.addEventListener('click', (e) => {
                        const currentContact = e.target.parentNode;
                        const contactInfo = currentContact.textContent
                            .split(' ').filter(x => x !== '');
    
                        const name = contactInfo[0];
                        const number = contactInfo[1];
                        let searchedId = '';
    
                        const contactsIds = Object.keys(data);
    
                        for (const id of contactsIds) {
                            if (data[id].person === name
                                && data[id].phone === number) {
                                searchedId = id;
                                break;
                            }
                        }
    
                        currentContact.remove();
    
                        const idUrl = 'https://phonebook-nakov.firebaseio.com/phonebook'
                        + '/' + searchedId + '.json';
    
                        fetch(idUrl, {
                            method: 'delete',
                            body: JSON.stringify(searchedId)
                        })
                            .then(resolve => resolve.json());
                    });
                }
            })
    }
    function createContact() {
    
    
        const name = document.getElementById('person');
        const number = document.getElementById('phone');
    
        if (name.value && number.value) {
            let currentPerson = {
                person: name.value,
                phone: number.value
            };
    
            fetch(url, {
                method: 'post',
                body: JSON.stringify(currentPerson)
            })
                .then(res => res.json());
        }
    
        loadmethod();
    
        name.value = '';
        number.value = '';
    }
}

attachEvents();