    class CheckingAccount{
    constructor(clientId, email, firstName, lastName ){
        this.clientId = clientId;
        this.email=email;
        this.firstName=firstName;
        this.lastName=lastName;
    }

    get clientId(){
        return this._clientId;
    }

    set clientId(value){
        let id = Number.isInteger(+value)

        if(id=== false || value.length!=6){
            throw new TypeError('Client ID must be a 6-digit number');
        }
         this._clientId=value;
        }

    get email(){
        return this._email;
    }

    set email(value){
      let regex =/^\w+@[\w.]+$/;
      if(!regex.test(value)){
       throw new TypeError("Invalid e-mail")
      }
      this._email=value;
    }

    get firstName(){
        return this._firstName;
    }

    set firstName(value){
        if(value.length  < 3 || value.length >20 ){
            throw new TypeError('First name must be between 3 and 20 characters long');
        }

        const pattern = /^[A-Za-z]+$/;

        if(!pattern.test(value)){
            throw new TypeError('First name must contain only Latin characters');
        }
        this._firstName=value;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(value){
        if(value.length < 3 || value.length >20 ){
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }

        const pattern = /^[A-Za-z]+$/;

        if(!pattern.test(value)){
            throw new TypeError('Last name must contain only Latin characters');
        }
        this._lastName=value;
    }
}
