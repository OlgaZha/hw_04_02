class Employee {
    #salary
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    get getSalary() {
        return this.#salary;
    }

    set setSalary(salary) {
        if(salary > 0) {
            this.#salary = salary;
        } else {
            console.log('Salary must be positive')
        }
    }

    work() {
        console.log(`${this.name} is working`)
    }
    displayInfo() {
        console.log(`Employee: ${this.name}, ${this.age} has salary ${this.#salary}`)
    }
}

class Manager extends Employee {
    constructor(name, age, salary, teamSize) {
        super(name, age, salary)
        this.teamSize = teamSize;
    }
    work() {
        console.log(`${this.name} is managing team of ${this.teamSize}`);
    }
}

class Developer extends Employee {
    constructor(name, age, salary, language) {
        super(name, age, salary);
        this.language = language;
    }
    work() {
        console.log(`${this.name} is coding in ${this.language}`)
    }
}

class internOfHR extends Employee {
    constructor(name, age, salary, workingHours) {
        super(name, age, salary);
        this.workingHours = workingHours;
    }
    work() {
        console.log(`${this.name} works ${this.workingHours} a day`)
    }
}

let manager = new Manager('John', 34, 5000, 15);
let developer = new Developer('Brad', 28, 3000, 'Java');
manager.displayInfo();
developer.displayInfo();
manager.work();
// console.log(manager.getSalary());
// manager.setSalary(-100);
// console.log(developer.getSalary());
// developer.setSalary(2000);

let hrWorker = new internOfHR('Alex', 25, 1500, 4);
hrWorker.displayInfo();
hrWorker.work();

let arrOfEmployees = [
    new Manager('Ben', 50, 6000, 13),
    new Developer('Mieke', 45, 4500, 'PHP'),
    new internOfHR('Jessica', 31, 2400, 6)
]
for(worker of arrOfEmployees) {
    worker.work()
}


class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    showAllEmployees() {
        if(this.employees.length > 0) {
            for(let employee of this.employees){
                console.log(employee.name)
            }
        } else {
            console.log('There is no employees yet')
        }
    }

    calculateTotalSalary(){
        let totalSalary = this.employees.reduce((calc, item) => calc + item.salary, 0)
        console.log(`The total salary in the compsny is ${totalSalary}`)
    }
    giveBonus(percent) {
        for(let emp of this.employees){
            emp.salary += emp.salary*(percent / 100)
            console.log(`${emp.name} has new salary ${emp.salary}`);
        }
    }
}

let company = new Company('Raptor');
company.addEmployee(manager);
company.addEmployee(developer);

company.showAllEmployees();
company.calculateTotalSalary();
company.giveBonus(10);




function calculateAverage(scores) {
    scores.reduce((accum, item) => 
    console.log(accum = (accum + item)/2) 
, scores[0])
}

let scores = [80, 90, 100, 70, 60];
calculateAverage(scores)