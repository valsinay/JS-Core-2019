function main(array,criteria){

    class Ticket{
        constructor(destination,price,status){
            this.destination=destination;
            this.price=price;
            this.status=status;
        }
    }
    let tickets= [];

    for(let ticket of array){

        let [destination,price,name] = ticket.split("|");
        price = +price;

        tickets.push(new Ticket(destination,price,name));
    }

    let sortedTickets = [];

    switch(criteria){
        case "destination":
              return  sortedTickets = tickets.sort((a,b) => a.destination.localeCompare(b.destination))
        case "price":
             return sortedTickets = tickets.sort((a,b)=> a.price - b.price);

        case "status":
      return sortedTickets = tickets.sort((a,b)=> a.status.localeCompare(b.status));
    }
}

main(['Philadelphia|94.20|available',
      'New York City|95.99|available',
      'New York City|95.99|sold',
    'Boston|126.20|departed'],
'destination'
)