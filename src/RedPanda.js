import Panda from './Panda';


class RedPanda extends Panda {
    constructor(name, age=Panda.getDefaultAge()) {
        super(name, age);
        this.color = ['red', 'white'];
    }

    static getDefaultFood() {
        // I know, red pandas don't eats eucalyptus
        return 'eucalyptus tree';
    }

    // Overwrite parents `eat` method
    eat(food=RedPanda.getDefaultFood()) {
        console.log(`Panda ${this.name} is eating ${food}.`);
    }

    // Extend parents `sleep` method
    sleep() {
        super.sleep();
        console.log('...and sleeping, and sleeping.');
    }
}

export default RedPanda;
