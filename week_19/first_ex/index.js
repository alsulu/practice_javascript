class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

let worker = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker.name); //Иван
console.log(worker.surname); //Иванов
console.log(worker.rate); //10
console.log(worker.days); //31
console.log(worker.getSalary()); //310