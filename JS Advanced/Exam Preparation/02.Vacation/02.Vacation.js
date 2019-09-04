class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = +budget;
        this.kids = {};
    }

    get numberOfChildren() {

        this. number = 0;

    for(let grade in this.kids){
      this. number+=this.kids[grade].length
      }

      return this.number;
    }
    registerChild(name, grade, budget) {

        if (budget < this.budget) {

            return `${name}'s money is not enough to go on vacation to ${this.destination}.`
        }

        if (!this.kids[grade]) {

            this.kids[grade] = [];
        }

        if (this.kids[grade].includes(`${name}-${budget}`)) {
            return `${name} is already in the list for this ${this.destination} vacation.`
        }

        this.kids[grade].push(`${name}-${budget}`);
        return this.kids[grade]
    }

    removeChild(name, grade) {

        if (this.kids[grade]) {

            const index = this.kids[grade].findIndex(k => k.startsWith(name));

            if (index > -1) {
                this.kids[grade].splice(index, 1);
                return this.kids[grade];
            }
        }
        return `We couldn't find ${name} in ${grade} grade.`
    }

    toString() {

        if (Object.keys(this.kids).length === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`
        }

        let output = "";
        output += `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`

        let number = 1;
        for (let grade in this.kids) {
            output += `Grade: ${grade}\n`
            number = 1;
            for (let kid of this.kids[grade]) {
                output += `${number++}. ${kid}\n`
            }
        }
        return output;
    }
}
let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);
vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Lilly', 6, 1500);
vacation.registerChild('Pesho', 7, 4000);
vacation.registerChild('Tanya', 5, 5000);
vacation.registerChild('Mitko', 10, 5500)
console.log(vacation.toString());
console.log(vacation.numberOfChildren)  
