function toggle() {
    let button = document.getElementsByClassName('button')[0].textContent;

    let extraInfo = document.getElementById('extra');

   if(button === 'More'){
       extraInfo.style.display = 'block';
       document.getElementsByClassName('button')[0].textContent= 'Less';
   }
   else{
    extraInfo.style.display = 'none';
    document.getElementsByClassName('button')[0].textContent= 'More';
   }

}