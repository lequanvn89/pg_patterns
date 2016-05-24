import RedPanda from './RedPanda';


class BigRedPanda extends RedPanda {
    constructor(name, age=RedPanda.getDefaultAge()) {
        super(name, age);
        this.size = 'big';
    }
}

export default BigRedPanda;
