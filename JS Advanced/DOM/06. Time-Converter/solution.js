function attachEventsListeners() {
 
  let buttons = {
      daysButton: document.getElementById('daysBtn'),
     hoursButton : document.getElementById('hoursBtn'),
     minutesButton: document.getElementById('minutesBtn'),
     secondsButton : document.getElementById('secondsBtn')
  };    

  for (const button in buttons) {
    buttons[button].addEventListener("click", convert)
}

  function convert(e){  
    let button = e.target;
    let days = document.getElementById('days')
    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('seconds')
  
    if (button.id === "daysBtn") {
       hours.value= +days.value * 24;
        minutes.value= +days.value * (24 * 60);
        seconds.value = +days.value* (24 * 60 * 60);
    } 
    else if (button.id === "hoursBtn") {
       days.value = hours.value / 24;
       minutes.value = +hours.value * 60;
        seconds.value = +hours.value * (60 * 60);
    } else if (button.id === "minutesBtn") {
        days.value = +minutes.value / (60 * 24);
        hours.value = +minutes.value / 60;
        seconds.value = +minutes.value * 60;
    } else {
        days.value=+seconds.value/(60*60*24);
        hours.value=+seconds.value/(60*60);
        minutes.value = +seconds.value / 60;
    }
  }
}