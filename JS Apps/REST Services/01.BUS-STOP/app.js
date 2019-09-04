function getInfo() {
    let stopId = document.getElementById('stopId').value;
    let stopName = document.getElementById('stopName');
    let buses = document.getElementById('buses');

    fetch(`https://judgetests.firebaseio.com/businfo/${stopId}.json`)
        .then((info) => (info.json()))
        .then((data) => {

            let obj = Object.entries(data.buses);
            buses.innerHTML = ""
            stopName.textContent = data.name;

            for (let [busNumber, busTime] of obj) {

                let li = document.createElement('li');
                li.textContent = `Bus ${busNumber} arrives in ${busTime}`
                buses.appendChild(li);
            }
        })
        .catch(error => {
            stopName.textContent = "Error"
            buses.innerHTML = '';
        });
    document.getElementById('stopId').value = "";
}