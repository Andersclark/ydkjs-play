import chalk from 'chalk';
const log = console.log;


function compare(one, two) {
    log(`\nCOMPARING: ${chalk.black.bgBlue((typeof one).toUpperCase())} with ${chalk.black.bgYellow((typeof two).toUpperCase())}`)
    log(`${(typeof one).toUpperCase()} equals (===) ${(typeof two).toUpperCase()} ? ${!!(typeof one === typeof two)}`);
    log(`COERCIVE EQUALITY:\t\t Variable of type [ ${ typeof one } ] and value [ ${ one } ] is considered equal ${chalk.black.bgMagenta(' == ')} \t\tto variable of type [ ${ typeof two } ] and value [ ${ two } ]? \t ${ one == two ? chalk.black.bgGreen(true.toString().toUpperCase()) : chalk.black.bgRed(false.toString().toUpperCase()) }`);
    log(`NON-COERCIVE EQUALITY:\t Variable of type [ ${typeof one} ] and value [ ${one} ] is considered equal ${chalk.black.bgMagenta(' === ')} \t\tto variable of type [ ${typeof two} ] and value [ ${two} ]? \t ${ one === two ? chalk.black.bgGreen(true.toString().toUpperCase()) : chalk.black.bgRed(false.toString().toUpperCase()) }`);
    log(`OBJECT.IS-EQUALITY:\t Variable of type [ ${typeof one} ] and value [ ${one} ] is considered equal ${chalk.black.bgMagenta(' Object.is ')} \tto variable of type [ ${typeof two} ] and value [ ${two} ]? \t ${ Object.is(one, two) ? chalk.black.bgGreen(true.toString().toUpperCase()) : chalk.black.bgRed(false.toString().toUpperCase()) }`);
}


compare(1, "1")
compare([1,2,3], [1,2,3])