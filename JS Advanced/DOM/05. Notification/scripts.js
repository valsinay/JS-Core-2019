function notify(message) {
   
    let button = document.querySelector('button');

    let notification =   document.getElementById('notification');
       notification.style.display = 'block';
       notification.textContent = message;

   setTimeout(() => {
       notification.style.display ='none'
   }, 2000);
}