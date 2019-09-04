class List{

    constructor(){
        this.array = [];
        this.size=0;
    }
    add(number){

        this.array.push(number);
        this.size++;
        return this.array.sort((a,b)=>a-b);

    }

    remove(index){
        if(index >-1 && index <= this.array.length-1){
            this.size--;
        return this.array.splice(index,1)
      }
    }

    get(index){
    if(index >-1 && index <= this.array.length-1){

       return this.array[index];
      }
    }
}
let myList = new List();
for (let i = 0; i < 10; i++) {
    myList.add(i);
}

