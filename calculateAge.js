
//input
let n = prompt("Please, enter your birthday (mm-dd-yyyy): ");


//split
let parts = n.split("-");
let month = parseInt(parts[0]);
let day = parseInt(parts[1]);
let year = parseInt(parts[2]);

//new formate
let formatted = year + "-" + month + "-" + day;

//class declare
class person {
    constructor(dob) {
        this.birthday = dob;
    }

    calculateAge() {
        let birthday = new Date(this.birthday);
        let diff = Date.now() - birthday.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}


let n1 = new person(formatted);

console.log(n1.calculateAge());