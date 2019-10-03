'use strict'

'use strict';


const fs = require('fs'); // for writing into files (don't forget to use npm i @types/node)


const args: string[] = process.argv; //for using command line arguments. Don't forget that it is a string array w/ atleast 2 elements already!!!

let task = fs.readFileSync("./task.txt","utf-8")

let mainProcess = () => {

  if (args.length == 2) {
    console.log(task);
    
  } else if (args[2] == 'list'){
    console.log('i am listing all the todos')
  } else {
    console.log('this is the error handling');
  }
}
mainProcess();