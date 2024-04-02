#! usr/bin/env node 

import inquirer from "inquirer";
import { it } from "node:test";

let todo_list = ["Keyboard", "Mouse", "Joystick"];

async function createTodoList (todo_list:string[] ) {

do{
    let detail = await inquirer.prompt( {
            type: "list",
            message: "Select am option",
            name: "option",
            choices:["Add", "Upgrade","View", "Remove"],    }   );

    if  (detail.option === "Add")   {

        let addItems = await inquirer.prompt(   {
                type: "input",
                message: "Add item in the list",
                name:"additem", }   );
                
            todo_list.push  (addItems.additem);
            todo_list.forEach   ( (addItems) => console.log(addItems) );    }

    if  (detail.option === "Upgrade")   {
        
        let upgradeItem = await inquirer.prompt(    {
                 type: "list",
                 message: "Upgrade item in the list",
                 name:"upgradeitem",
                 choices:   todo_list.map((item) => (item)) }   );

        let upgradeNew = await inquirer.prompt(
            {
                type: "input",
                message: "Upgrade new items in the list",
                name:"newTodo", }   );

        let newList = todo_list.filter  ( (val) => val !== upgradeItem.upgradeitem );
            todo_list = [ ...newList,upgradeNew.newTodo ];  }

    if  (detail.option === "View")  {
        console.log ("*********To Do List************");
        console.log (todo_list);
        console.log ("*********To Do Total Items ************");    }
        
    if  (detail.option === "Remove") {

        let removeItems = await inquirer.prompt (    {
                type:"list",
                message:"Remove itme from the list",
                name:"removeitems",
                choices:todo_list.map   ( (item) => (item) ) }   );

        let newList = todo_list.filter((val) => val !== removeItems.removeitems);

        todo_list = [...newList];
        console.log (todo_list);    }

    }   while(  true    )    }
    createTodoList  (todo_list);