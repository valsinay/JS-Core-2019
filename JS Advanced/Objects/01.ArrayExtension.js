   
  (function solve(){

      Array.prototype.last = function(){
           return this[this.length-1];
       }
   
       Array.prototype.skip = function(n){
        
        let elements = this.slice(n);

        return elements;
       }

       Array.prototype.take = function(n){
           let elements = this.slice(0,n);
           return elements;
       }

       Array.prototype.sum = function(){
           return this.reduce((a,b)=> a+b);
       }

       Array.prototype.average = function(){
           return this.sum()/this.length;
       }
  }()) 