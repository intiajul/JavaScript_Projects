//Take input
let n = prompt("Please, enter your birthday (mm-dd-yyyy): ");


//split the input
let parts = n.split("-");
let month = parseInt(parts[0]);
let day = parseInt(parts[1]);
let year = parseInt(parts[2]);

//new formated 
let formatted = year + "-" + month + "-" + day;

//class declaration
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

//function calling
let n1 = new person(formatted);

console.log(n1.calculateAge());