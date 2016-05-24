import Panda from './Panda';
import RedPanda from './RedPanda';
import BigRedPanda from './BigRedPanda';


let pandaJohn = new Panda('John');
console.log(pandaJohn);
pandaJohn.eat();
pandaJohn.sleep();

let pandaPoo = new Panda('Poo', 16);
console.log(pandaPoo);
pandaPoo.eat('foods');
pandaPoo.age = 17;

let redPandaFox = new RedPanda('Fox', 5);
console.log(redPandaFox);
redPandaFox.age = 6;
redPandaFox.eat();
redPandaFox.sleep();

let bigRedPandaSam = new BigRedPanda('Big Sam', 18);
console.log(bigRedPandaSam);
bigRedPandaSam.eat();
bigRedPandaSam.eat('carrot');
bigRedPandaSam.eat('meat');
bigRedPandaSam.eat('ice cream');
console.log(bigRedPandaSam instanceof BigRedPanda);
console.log(bigRedPandaSam instanceof RedPanda);
console.log(bigRedPandaSam instanceof Panda);
console.log(bigRedPandaSam instanceof Object);
