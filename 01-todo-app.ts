'use strict'

'use strict';


const fs = require('fs'); // for writing into files (don't forget to use npm i @types/node)


const args: string[] = process.argv; //for using command line arguments. Don't forget that it is a string array w/ atleast 2 elements already!!!

let task = fs.readFileSync("./task.txt", "utf-8")
let readList = fs.readFileSync("./listitems.txt", "utf-8")
let addText: string = "";
let text: string;

let mainProcess = () => {

  if (args.length == 2) {
    console.log(task); // Listing the options to the user.

  } else if (args[2] == '-l') {
    let splittedListItems = fs.readFileSync("./listitems.txt", "utf-8").split("\n");
    for (let i = 0; i < splittedListItems.length; i++) {
      if (splittedListItems.length > 0) {
        console.log(i + 1 + " - " + splittedListItems[i]);

      } else {
        console.log("No todos for today! :)");
      }
    }

  }





  else if (args[2] == '-a') {
    if (args[3] != undefined) {
      console.log(args[3]);

      fs.appendFileSync('listitems.txt', args[3] + "\n", "utf-8")
    }
  }







  else {
    console.log('You fucked it up try again');
  }
}
mainProcess();