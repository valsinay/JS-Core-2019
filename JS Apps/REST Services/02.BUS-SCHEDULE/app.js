function solve() {
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive')
    let currentStop = '';
    
    let text = document.querySelector('#info span')
    let stopId = 'depot';
    
    function depart() {
        let address =`https://judgetests.firebaseio.com/schedule/${stopId}.json`;   
        fetch(address)
            .then(info => info.json())
            .then((data) => {
                currentStop = data.name;
                text.innerHTML = `Next stop ${currentStop}`
                changeStopID(data);
            })
            .catch(error => {
                text.innerHTML = "Error";
                departBtn.disabled = true;
                 arriveBtn.disabled = true;
            })


        departBtn.disabled = true;
        arriveBtn.disabled = false;
    }

    function arrive() {
      
            text.innerHTML = `Arriving at ${currentStop}`
        
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    function changeStopID(data) {
     stopId = data.next
    };

    return {
        depart,
        arrive
    };
}

let result = solve();