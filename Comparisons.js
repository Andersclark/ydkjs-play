import chalk from 'chalk';

compare(1, "1");
compare([1,2,3], [1,2,3]);
compare({name: 'one'}, {name: 'two'});
compare(!!(1), 1);
const one = {name: 'one'}
const two = one;
compare(one, two)
compare(()=>'one', 'two')



function compare(one, two) {
    console.log(`\nCOMPARING: ${chalk.black.bgBlue((typeof one).toUpperCase())} with ${chalk.black.bgYellow((typeof two).toUpperCase())}`)
    console.log(`${(typeof one).toUpperCase()} equals (===) ${(typeof two).toUpperCase()} ? ${chalk.black(typeof one === typeof two ? chalk.bgGreen('TRUE') : chalk.bgRed('FALSE'))}`);
    console.log(`COERCIVE EQUALITY:\t\t Variable of type [ ${ typeof one } ] and value [ ${ one } ] is considered equal ${chalk.black.bgMagenta(' == ')}\t\t\t to variable of type [ ${ typeof two } ] and value [ ${ two } ]? \t ${ one == two ? chalk.black.bgGreen(true.toString().toUpperCase()) : chalk.black.bgRed(false.toString().toUpperCase()) }`);
    console.log(`NON-COERCIVE EQUALITY:\t Variable of type [ ${typeof one} ] and value [ ${one} ] is considered equal ${chalk.black.bgMagenta(' === ')}\t\t\t to variable of type [ ${typeof two} ] and value [ ${two} ]? \t ${ one === two ? chalk.black.bgGreen(true.toString().toUpperCase()) : chalk.black.bgRed(false.toString().toUpperCase()) }`);
    console.log(`OBJECT.IS-EQUALITY:\t\t Variable of type [ ${typeof one} ] and value [ ${one} ] is considered equal ${chalk.black.bgMagenta(' Object.is ')}\t to variable of type [ ${typeof two} ] and value [ ${two} ]? \t ${ Object.is(one, two) ? chalk.black.bgGreen(true.toString().toUpperCase()) : chalk.black.bgRed(false.toString().toUpperCase()) }`);
};

