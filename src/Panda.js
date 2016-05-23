class Panda {
    constructor(name, age=Panda.getDefaultAge()) {
        this.name = name;
        this._age = age;
        this.color = ['black', 'white'];
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (!value || typeof value !== 'number' ) {
            console.error('Wrong format, need number');
            return;
        }
        if (value < 0 || value > 150) {
            console.error('Wrong age');
        }
        this._age = value;
        console.log(`Happy birthday, panda ${this.name}, now you are ${this._age}.`);
    }

    static getDefaultAge() {
        return 0;
    }
    
    static getDefaultFood() {
        return 'bamboo tree';
    }

    eat(food=Panda.getDefaultFood()) {
        console.log(`Panda ${this.name} is eating ${food}.`);
    }

    sleep() {
        console.log(`Panda ${this.name} is sleeping.`);
    }
}

export default Panda;
