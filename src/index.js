import Contacts from "./contacts"
import { program } from "commander";
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await Contacts.listContacts();
      console.log(allContacts);
      break; 
      // ...
      

    case "get":
      // ... id
      const oneContact = await Contacts.getContactById();
      console.log(oneContact);
      break;
    

    case "add":
      // ... name email phone
      
      break;

    case "remove":
      // ... id
      const removeContact = await Contacts.removeContact(id);
      console.log(removeContact);
      break;

      default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);