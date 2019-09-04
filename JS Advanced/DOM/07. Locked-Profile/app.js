      function lockedProfile() {
      
          let profiles = document.getElementsByClassName("profile")

          function show(){
        let profile = this.parentNode;
        let button = profile.getElementsByTagName('button')[0];      
        let radioElement = profile.getElementsByTagName('input')[1];
        let lockedInformationDiv = profile.querySelector('div');
        
        if(radioElement.checked && button.textContent === 'Show more'){
          
              lockedInformationDiv.style.display= "block";
              button.textContent = "Hide it"
          }
          else if(radioElement.checked && button.textContent === 'Hide it') {
              lockedInformationDiv.style.display= "none";
              button.textContent = "Show more"
          }
        }

        Array.from(profiles).forEach(x=>{
          let button = x.getElementsByTagName('button')[0];
          button.addEventListener("click", show);
        })
      }